import State, { Observer } from './State'
import Form from './Form'

type Listener = (state: State) => void;

export default class FormController implements Observer {
    private listeners: Listener[]
    private state: State

    constructor() {
        this.listeners = []
    }

    set active(form: Form) {
        this.state = form.localState
        this.state.setObserver(this)
        this.update()
    }

    onStateChange(...listeners: Listener[]): void {
        listeners.forEach(cb => this.listeners.push(cb))
    }

    update(): void {
        this.listeners.forEach(cb => cb(this.state))
    }
}
