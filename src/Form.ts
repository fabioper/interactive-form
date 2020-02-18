import { State } from './State'

export class Form {
    public state: State

    constructor() {
        this.state = new State()
    }

    setState(state: State | Partial<State>): void {
        Object.keys(state).forEach(key => (
            this.state[key] = state[key]
        ))
    }
}
