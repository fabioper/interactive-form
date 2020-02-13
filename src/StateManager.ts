import { Residuo } from './Residuo'
import { getResiduos } from './helpers'

export interface Listener {
    update(state: State): void;
}

export type State = {
    modo: string;
    industria: string;
    servico: string;
    residuo: Residuo | string;
    dados: Residuo[];
    formData: FormData;
}

class StateManager {
    private listeners: Listener[] = []
    private state: State;

    constructor() {
        this.state = {
            modo: '',
            industria: '',
            servico: '',
            residuo: null,
            dados: [],
            formData: new FormData()
        }
        getResiduos('http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45')
            .then(dados => this.setState({ dados }))
    }

    public setState(values: State | any): void {
        if (values.residuo) {
            values.residuo = this.state.dados.find(residuo => residuo.slug === values.residuo)
        }
        this.state = { ...this.state, ...values }
        this.notifyListeners()
    }

    public addListener(listener: Listener): void {
        this.listeners.push(listener)
    }

    private notifyListeners(): void {
        this.listeners.forEach(listener => listener.update(this.state))
    }
}

export default StateManager
