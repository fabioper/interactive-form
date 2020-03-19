import SectionsRouter from './router/SectionsRouter'
import StateManager from './State/StateManager'
import InMemoryStateManager from './State/InMemoryStateManager'

export default class Mediator {
    private static _instance: Mediator;
    private _router: SectionsRouter
    private _stateManager: StateManager

    private constructor() {
        this._router = SectionsRouter.instance
        this._stateManager = InMemoryStateManager.instance
    }

    static get instance(): Mediator {
        if (Mediator._instance) return Mediator._instance
        Mediator._instance = new Mediator()
        return Mediator._instance
    }
}
