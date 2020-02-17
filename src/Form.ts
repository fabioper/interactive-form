import { State } from './State'
import { Residuo } from './Residuo'

export class Form {
    private _state: State

    constructor(dados: Residuo[]) {
        this._state = new State()
    }

    setState(state: State | Partial<State>): void {
        Object.keys(state).forEach(key => (
            this._state[key] = state[key]
        ))
    }

    get state(): State {
        return this._state
    }
}
