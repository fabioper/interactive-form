import State from './State'

export default class Form {
    localState: State

    constructor() {
        this.localState = new State()
    }
}
