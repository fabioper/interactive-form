export default abstract class Component {
    private _element: HTMLElement
    private _root: HTMLElement

    get element(): HTMLElement { return this._element }
    set element(element: HTMLElement) { this._element = element }

    get root(): HTMLElement { return this._root }
    set root(element: HTMLElement) { this._root = element }

    mount(root?: HTMLElement): void {
        this.root = root || this.root
        if (this.hasRoot()) {
            this.setup()
            this.root.appendChild(this.element)
        }
    }

    unmount(): void { this.element.remove() }

    append(...components: Component[]): void {
        components.forEach(component => {
            component.root = this.element
            component.mount()
        })
    }

    abstract setup(): void

    private hasRoot(): boolean {
        if (this.root) return true
        throw new Error('Define root element in order to use mount()')
    }
}
