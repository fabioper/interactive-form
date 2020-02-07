import { slug } from '../helpers/helpers'
import { State } from '../State'
import { Observer } from './Observer'

export class GlobalState {
    private state: State;
    private observers: Observer[];

    constructor() {
        this.state = {
            modo: '',
            industria: '',
            residuo: null,
            servico: '',
            dados: []
        }
        this.observers = []
        this.getDataFromApi()
    }

    private getDataFromApi(): void {
        fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
            .then(res => res.json())
            .then(data => data.acf.card_residuo)
            .then(data => data.map(residuo => ({ ...residuo, slug: slug(residuo.nome) })))
            .then(data => this.state.dados = data)
            .then(() => console.log('Data loaded successfully'))
            .then(() => this.notify())
            .catch(err => console.log(err))
    }

    updateState(data: any): void {
        // TODO: Toggle elements when clicked on an item already clicked
        this.state = { ...this.state, ...data }
        this.notify()
        console.log(this.state)
    }

    addObserver(...observers: Observer[]): void {
        this.observers.push(...observers)
    }

    notify(): void {
        this.observers.forEach(observer => observer.update(this.state))
    }

    reset(): void {
        this.state.industria = ''
        this.state.servico = ''
        this.state.residuo = null
    }
}
