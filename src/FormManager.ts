import State from './State'

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
            // newState.userInfo = state.userInfo
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
        console.log(this.asJson())
    }

    private asJson() {
        const data = {
            informacoesPessoais: State.userInfo,
            residuos: this._states.reduce((acc, curr) => {
                const residuo = {
                    nome: curr.residuo.nome,
                    recipientes: curr.calculoMontante.recipientes
                }
                acc.push(residuo)
                return acc
            }, [])
        }

        return data
    }
}
