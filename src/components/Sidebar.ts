import State from '../State'
import FormRepository from '../FormRepository/FormRepository'
import InMemoryFormRepository from '../FormRepository/InMemoryFormRepository'
import { Subsection } from './Subsection'

export default class Sidebar {
    private _element: HTMLElement;
    private _repository: FormRepository<State>

    get element(): HTMLElement { return this._element }

    constructor() {
        this._repository = InMemoryFormRepository.instance
        this.setup()
    }

    // eslint-disable-next-line max-statements
    setup(): void {
        let content: HTMLElement
        if (this._repository.isEmpty()) {
            content = document.createElement('p')
            content.textContent = 'Nenhum resíduo adicionado.'
        } else {
            const residues = this._repository.getAll()

            residues.forEach((r, index) => {
                const residue = new Subsection(index, 'Resíduos', r.residuo.nome)
                const frequency = new Subsection(index, 'Frequência', r.frequencia)
                const recipients = new Subsection(index, 'Recipiente(s)', r.recipientes)

                content = document.createElement('div')
                residue.appendTo(content)
                frequency.appendTo(content)
                recipients.appendTo(content)
            })
        }

        this._element = document.createElement('div')
        this._element.appendChild(content)
    }

    private createSubsection(id: number, title: string, value: string): HTMLElement {
        const titleElement = this.createSubsectionTitle(title)
        const valueElement = this.createSubsectionValue(value)

        const buttons = document.createElement('div')
        buttons.appendChild(this.createButton('Editar', {
            id, classes: ['btn__secondary', 'btn__secondary--edit']
        }))
        buttons.appendChild(this.createButton('Remover', {
            id, classes: ['btn__secondary', 'btn__secondary--remove']
        }))

        const subsection = this.wrapSubsection(titleElement, valueElement, buttons)
        return subsection
    }

    private createButton(text: string, options: { id: number; classes: string[] }): HTMLButtonElement {
        const button = document.createElement('button')
        button.setAttribute('data-id', options.id.toString())
        button.classList.add(...options.classes)
        button.textContent = text
        return button
    }

    private wrapSubsection(...elements: HTMLElement[]): HTMLElement {
        const subsection = document.createElement('div')
        elements.forEach(el => subsection.appendChild(el))
        return subsection
    }

    private createSubsectionValue(value: string): HTMLParagraphElement {
        const valueElement = document.createElement('p')
        valueElement.textContent = value
        return valueElement
    }

    private createSubsectionTitle(title: string): HTMLHeadingElement {
        const titleElement = document.createElement('h3')
        titleElement.textContent = title
        return titleElement
    }

    appendTo(container: HTMLElement): void {
        container.appendChild(this._element)
    }

    renderAt(container: HTMLElement): void {
        container.innerHTML = this._element.outerHTML
    }
}
