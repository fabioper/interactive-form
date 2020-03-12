import Section from '../Section'
import ProgressBarValue from './ProgressBarValue'
import SectionsController from '../SectionsController'

export default class ProgressBar {
    private _sections: Section[]
    private _values: ProgressBarValue[]
    private _controller: SectionsController
    private _activeSectionIndex: number

    constructor(controller: SectionsController) {
        this._controller = controller
        this._sections = Array.from(this._controller.sections.values())
        this._values = this._sections.map(section => new ProgressBarValue(section))
        this.moveSectionIfActive = this.moveSectionIfActive.bind(this)
        // window.addEventListener('popstate', (event): void => {
        //     event.preventDefault()
        // })
    }

    get markup(): string {
        return this._values.map(value => value.element.outerHTML).join(' ')
    }

    fillUntil(activeSection: Section): void {
        this._activeSectionIndex = this._sections.indexOf(activeSection)
        for (let i = 0; i <= this._activeSectionIndex; i++)
            this._values[i].fill()
    }

    renderAt(container: HTMLElement): void {
        container.innerHTML = ''
        const steps = this.appendStepsDiv(container)
        this._values.forEach(value => {
            steps.appendChild(value.element)
            value.addOnClickEvent(this.moveSectionIfActive)
        })
    }

    private appendStepsDiv(container: HTMLElement): HTMLDivElement {
        const steps = this.createStepsDiv()
        container.appendChild(steps)
        this.appendMoveButtons(steps)
        return steps
    }

    private appendMoveButtons(steps: HTMLDivElement): void {
        steps.insertAdjacentElement('beforebegin', this.createPreviousAction())
        steps.insertAdjacentElement('afterend', this.createClearButton())
        steps.insertAdjacentElement('afterend', this.createNextButton())
    }

    private createStepsDiv(): HTMLDivElement {
        const steps = document.createElement('div')
        steps.classList.add('steps')
        return steps
    }

    private createPreviousAction(): HTMLDivElement {
        const previousButton = document.createElement('div')
        const previousIndex = this._activeSectionIndex - 1
        previousButton.classList.add('previous')

        previousIndex >= 0 ?
            previousButton.classList.add('active') :
            previousButton.classList.remove('active')

        previousButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>'
        previousButton.onclick = (): void => {
            if (previousIndex >= 0)
                this._controller.moveTo(this._sections[previousIndex].name)
        }
        return previousButton
    }

    private createNextButton(): HTMLDivElement {
        const nextButton = document.createElement('div')
        const nextIndex = this._activeSectionIndex + 1
        nextButton.classList.add('next')
        const section = this._sections[this._activeSectionIndex]

        nextIndex < this._values.length && section.isFullfilled ?
            nextButton.classList.add('active') :
            nextButton.classList.remove('active')

        nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>'
        nextButton.onclick = (): void => {
            if (nextIndex < this._values.length && section.isFullfilled)
                this._controller.moveTo(this._sections[nextIndex].name)
        }
        return nextButton
    }

    private createClearButton(): HTMLDivElement {
        const div = document.createElement('div')
        div.classList.add('clear')
        div.innerHTML = 'Limpar'
        div.onclick = (): void => this._controller.clear()
        return div
    }

    private moveSectionIfActive(progressValue: ProgressBarValue, section: Section): void {
        if (progressValue.isActive) this._controller.moveTo(section.name)
    }
}
