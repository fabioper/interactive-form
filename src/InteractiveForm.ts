import SectionRouterComponent from './router/SectionRouterComponent'
import SectionsRouter from './router/SectionsRouter'

export type InteractiveFormOptions = {
    sections: SectionRouterComponent[];
    target: HTMLElement;
    initialKey: string;
}

export default class InteractiveForm {
    private _options: InteractiveFormOptions
    private _router: SectionsRouter

    constructor(options: InteractiveFormOptions) {
        this._options = options
        this._router = SectionsRouter.instance
    }

    init(): void {

    }
}
