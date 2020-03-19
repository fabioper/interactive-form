import StateManager from './StateManager'
import State from './State'

export default class InMemoryStateManager implements StateManager {
    private static _instance: StateManager
    private _states: State[]

    private constructor() { this._states = [] }

    static get instance(): StateManager {
        if (InMemoryStateManager._instance) return InMemoryStateManager._instance
        InMemoryStateManager._instance = new InMemoryStateManager()
        return InMemoryStateManager._instance
    }

    add(state: State): State {
        this._states.push(state)
        return state
    }

    update(state: State): State {
        this._states = this._states.map(st => {
            if (st === state) return state
            return st
        })
        return state
    }

    remove(state: State): void {
        this._states = this._states.filter(st => (
            st !== state
        ))
    }

    sendAll(): void {
        throw new Error('Method not implemented.')
    }
}
