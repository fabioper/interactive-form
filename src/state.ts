export type State = {
    search: string;
    residue: string;
    industry: string;
    service: string;
}

export const onChange = (...handlers: Function[]): (values: State | object) => void => {
    const initialState: State = {
        industry: '',
        residue: '',
        search: '',
        service: ''
    }

    const state = createState(initialState, handlers)
    return setState(state)
}

function createState(initialState: State, cb: Function[]): State {
    const stateConfig = {
        set(currentState: State, key: string, value: string): boolean {
            currentState[key] = value
            cb.forEach(callback => callback(currentState))
            return true
        }
    }

    const state = new Proxy(initialState, stateConfig)
    return state
}

const setState = (state: State) => (values: State | object): void => Object.keys(values).forEach(key => {
    state[key] = state[key] === values[key] ? '' : values[key]
})

