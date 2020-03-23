import Section from '../Section'
import ProgressBarValue from './ProgressBarValue'
import SectionRouter from '../SectionRouter'

export default class ProgressBar {
    private _sections: Section[]
    private _progressBarValues: ProgressBarValue[]
    private _router: SectionRouter
    private _activeIndex: number

    constructor() {
        this._router = SectionRouter.instance
        this._sections = Array.from(this._router.sections.values())
        this._progressBarValues = this._sections.map(section => new ProgressBarValue(section))
        this.moveSectionIfActive = this.moveSectionIfActive.bind(this)
    }

    get markup(): string {
        return this._progressBarValues.map(value => value.element.outerHTML).join(' ')
    }

    get currentSection(): Section {
        return this._sections[this._activeIndex]
    }

    getNextIndex(index: number): number {
        if (index > this._progressBarValues.length) return
        const next = this._sections[index]
        if (next.condition) return index
        return this.getNextIndex(index + 1)
    }

    getPreviousIndex(index: number): number {
        if (index < 0) return
        const previous = this._sections[index]
        if (previous.condition) return index
        return this.getPreviousIndex(index - 1)
    }

    fillUntil(activeSection: Section): void {
        this._activeIndex = this._sections.indexOf(activeSection)
        for (let i = 0; i <= this._activeIndex; i++)
            this._progressBarValues[i].fill()
    }

    renderAt(container: HTMLElement): void {
        container.innerHTML = ''
        const steps = this.appendStepsDiv(container)
        this._progressBarValues.forEach(value => {
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
        steps.insertAdjacentElement('afterend', this.createNextButton())
    }

    private createStepsDiv(): HTMLDivElement {
        const steps = document.createElement('div')
        steps.classList.add('steps')
        return steps
    }

    private createPreviousAction(): HTMLDivElement {
        const previousButton = document.createElement('div')
        previousButton.classList.add('previous')
        previousButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>`

        const previousIndex = this.getPreviousIndex(this._activeIndex - 1)
        previousIndex || previousIndex === 0 ?
            previousButton.classList.add('active') :
            previousButton.classList.remove('active')

        previousButton.onclick = (): void => {
            if (previousIndex >= 0)
                this._router.moveTo(this._sections[previousIndex].name)
        }
        return previousButton
    }

    private createNextButton(): HTMLDivElement {
        const nextButton = document.createElement('div')
        nextButton.classList.add('next')
        nextButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>`

        const nextIndex = this.getNextIndex(this._activeIndex + 1)

        nextIndex && this.currentSection.isSatisfied ?
            nextButton.classList.add('active') :
            nextButton.classList.remove('active')

        const nextSection = this._sections[nextIndex]

        nextButton.onclick = (): void => {
            if (this.currentSection.isSatisfied && nextSection)
                this._router.moveTo(nextSection.name)
        }
        return nextButton
    }

    private moveSectionIfActive(progressValue: ProgressBarValue, section: Section): void {
        if (progressValue.isActive)
            this._router.moveTo(section.name)
    }
}
