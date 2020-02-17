import { State } from './State'

export default class Section {
    private static _currentSection: HTMLElement;
    private static _previousSection: HTMLElement;
    private static sections: Map<string, HTMLElement> = new Map<string, HTMLElement>();
    private static state: State;
    static stateChangeCallback: (state: State) => void;

    static get currentSection(): HTMLElement {
        return Section._currentSection
    }

    static set currentSection(value: HTMLElement) {
        Section._currentSection = value
        Section.currentSection.classList.add('active')
    }

    static get previousSection(): HTMLElement {
        return Section._currentSection
    }

    static set previousSection(value: HTMLElement) {
        Section._previousSection = value
        Section.previousSection?.classList.remove('active')
    }

    static find(key: string): HTMLElement {
        return Section.sections.get(key)
    }

    static moveTo(key: string): void {
        Section.previousSection = Section.currentSection
        Section.currentSection = Section.sections.get(key)
    }

    static add(...keys: string[]): void {
        keys.forEach(key => Section.sections.set(key,
            document.querySelector(`[data-section=${key}]`)
        ))
    }

    static update(state: State): void {
        Section.state = state
        Section.stateChangeCallback(state)
    }

    static onStateChange(callback: (state: State) => void): void {
        Section.stateChangeCallback = callback
    }
}
