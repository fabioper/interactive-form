import { State } from './State'
import { Form } from './Form'
import { Listener } from './Listener'
import Section from './Section'

export default class FormManager implements Listener {
    private forms: Form[] = []
    private _state: State
    private _active: Form

    get active(): Form {
        return this._active
    }

    get state(): State {
        return this._state
    }

    set state(value: State) {
        this._state = value
    }

    add(form: Form): void {
        this.forms.push(form)
    }

    setActive(form: Form): void {
        this._active = form
        this.state = form.state
        this.state.addListener(this)
    }

    remove(formToDelete: Form): void {
        this.forms = this.forms.filter(form => form !== formToDelete)
    }

    edit(formToEdit: Form): void {
        const form = this.forms.find(form => form !== formToEdit)
        this.setActive(form)
    }

    update(): void {
        Section.update(this.state)
    }

    send(form: Form): void {
        // send all forms
    }
}
