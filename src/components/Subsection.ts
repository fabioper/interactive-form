export class Subsection {
    private _id: number
    private _title: string
    private _content: string
    private _element: HTMLElement

    constructor(id: number, title: string, content: string) {
        this._id = id
        this._title = title
        this._content = content
        this.setup()
    }

    setup(): void {
        const titleElement = this.createSubsectionTitle(this._title)
        const valueElement = this.createSubsectionValue(this._content)

        const buttons = document.createElement('div')
        buttons.appendChild(this.createButton('Editar', {
            id: this._id,
            classes: ['btn__secondary', 'btn__secondary--edit']
        }))
        buttons.appendChild(this.createButton('Remover', {
            id: this._id,
            classes: ['btn__secondary', 'btn__secondary--remove']
        }))

        const subsection = this.wrapSubsection(titleElement, valueElement, buttons)
        this._element = subsection
    }

    renderAt(container: HTMLElement): void {
        container.innerHTML = this._element.outerHTML
    }

    appendTo(container: HTMLElement): void {
        container.appendChild(this._element)
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
        valueElement.innerHTML = value
        return valueElement
    }

    private createSubsectionTitle(title: string): HTMLHeadingElement {
        const titleElement = document.createElement('h3')
        titleElement.textContent = title
        return titleElement
    }
}
