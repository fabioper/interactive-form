import State from './State'

type Data = {
    informacoesPessoais: any;
    residuos: { nome: string; recipientes: { [x: string]: string } }[];
}

export default class FormManager {
    private _state: State;
    private _states: State[];

    constructor() {
        this.state = new State()
        this._states = []
    }

    set state(state: State) {
        this._state = state
    }

    get state(): State {
        return this._state
    }

    save(state: State): void {
        if (!this._states.includes(state)) {
            this._states.push(state)
            const newState = new State()
            this.state = newState
        }
    }

    hasState(): boolean {
        return this._states.length > 0
    }

    get states(): State[] {
        return this._states
    }

    removeState(index: number): void {
        this._states = this._states.filter((_value, idx) => idx !== index)
    }

    editState(index: number): void {
        this.state = this._states[index]
    }

    send(): void {
        console.log(this.data)
    }

    private get data(): Data {
        const data = {
            informacoesPessoais: State.userInfo,
            servico: State.service || null,
            industria: State.industry || null,
            residuos: this.getSelectedResidues()
        }

        return data
    }

    private getSelectedResidues(): any[] {
        return this._states.reduce((acc, curr) => {
            const residuo = {
                nome: curr.residuo.nome,
                recipientes: curr.calculoMontante.recipientes
            }
            acc.push(residuo)
            return acc
        }, [])
    }
}
