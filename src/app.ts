export abstract class State {
}

export class FormSection {
    state: State
    sections: HTMLElement[]

    constructor(initialState: State) {
        this.sections = Array.from(document.querySelectorAll('[data-step]'))
        this.changeState(initialState)
    }

    changeState(state: State): void {
        this.state = state
    }
}
