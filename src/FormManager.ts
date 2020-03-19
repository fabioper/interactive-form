import State from './State'

type Data = {
    informacoesPessoais: any;
    residuos: { nome: string; recipientes: { [x: string]: string } }[];
}

export default class FormManager {
    private _active: State;
    private _states: State[];

    constructor() {
        this.active = new State()
        this._states = []
    }

    set active(state: State) {
        this._active = state
    }

    get active(): State {
        return this._active
    }

    get states(): State[] {
        return this._states
    }

    save(state: State): void {
        if (!this._states.includes(state))
            this._states.push(state)
        else
            this._states = this._states.map(st => {
                if (st === state) return state
                return st
            })

        const newState = new State()
        this.active = newState
        console.log(this.active)
    }

    hasState(): boolean {
        return this._states.length > 0
    }

    removeState(index: number): void {
        console.log(index, this._states[index])
        this._states = this._states.filter((_value, idx) => idx !== index)
    }

    editState(index: number): void {
        this.active = this._states[index]
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
