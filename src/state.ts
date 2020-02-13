import { Residuo } from './Residuo'

export type State = {
    modo: string;
    industria: string;
    servico: string;
    residuo: Residuo;
    dados: Residuo[];
    formData: Set<FormData>;
    section: HTMLElement;
}

export type StateCallback = (currentState: State, previousState: State) => void;

const tryTransformToResiduo = (key: string | number | symbol, value: any, dados: Residuo[]): Residuo | string => {
    if (key === 'residuo') {
        return dados.find(res => res.slug === value)
    }
    return value
}

const run = (callbacks: StateCallback[], currentState: State, previousState: State): void => (
    callbacks.forEach(cb => cb(currentState, previousState))
)

const getProxyHandler = (...callbacks: StateCallback[]): ProxyHandler<State> => ({
    set(currentState, key, value): boolean {
        const { dados } = currentState
        const previousState = currentState
        currentState[key] = tryTransformToResiduo(key, value, dados)
        run(callbacks, currentState, previousState)
        return true
    }
})

const setState = (proxyState: State): (data: object | State) => void => (
    (data: State | object): void => (
        Object.keys(data).forEach(key => (proxyState[key] = data[key]))
    )
)

const createState = (state: State, ...callbacks: StateCallback[]): [State, (data: State | object) => void] => {
    const proxyState = new Proxy(state, getProxyHandler(...callbacks))
    return [proxyState, setState(proxyState)]
}

export default createState
