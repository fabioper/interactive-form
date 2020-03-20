import SectionRouter from './SectionRouter'
import FormHandler from './FormHandler'
import FormRepository from './FormRepository/FormRepository'
import State from './State'
import InMemoryFormRepository from './FormRepository/InMemoryFormRepository'

export default class Mediator {
    private static _instance: Mediator;
    private _router: SectionRouter
    private _handler: FormHandler
    private _repository: FormRepository<State>

    private constructor() {
        this._router = SectionRouter.instance
        this._handler = FormHandler.instance
        this._repository = InMemoryFormRepository.instance
    }

    static get instance(): Mediator {
        if (this._instance) return this._instance
        this._instance = new Mediator()
        return this._instance
    }
}
