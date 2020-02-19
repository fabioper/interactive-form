import State, { Observer } from './State'
import Form from './Form'
import { Residuo } from './Residuo'

type Listener = (state: State) => void;

export default class FormController implements Observer {
    private listeners: Listener[]
    private _state: State
    public data: Residuo[];

    constructor() {
        this.listeners = []
    }

    get state(): State {
        return this._state
    }

    set active(form: Form) {
        this._state = form.localState
        this._state.setObserver(this)
        this.update()
    }

    onStateChange(...listeners: Listener[]): void {
        listeners.forEach(listener => this.listeners.push(listener))
    }

    update(): void {
        this.listeners.forEach(cb => cb(this._state))
    }
}
