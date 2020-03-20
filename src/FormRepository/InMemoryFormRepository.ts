import FormRepository from './FormRepository'
import State from '../State'

export default class InMemoryFormRepository implements FormRepository<State> {
    private static _instance: FormRepository<State>
    private _states: State[]
    private _active: State

    private constructor() {
        this.active = new State()
        this._states = []
    }

    static get instance(): FormRepository<State> {
        if (InMemoryFormRepository._instance) return InMemoryFormRepository._instance
        InMemoryFormRepository._instance = new InMemoryFormRepository()
        return InMemoryFormRepository._instance
    }

    get active(): State { return this._active }
    set active(state: State) { this._active = state }

    get states(): State[] { return this._states }

    getAll(): State[] {
        return this._states
    }

    getById(id: number): State {
        return this._states[id]
    }

    add(state: State): State {
        if (!this._states.includes(state))
            this._states.push(state)
        else
            this._states = this._states.map(st => {
                if (st === state) return state
                return st
            })

        const newState = new State()
        this.active = newState
        return this.active
    }

    update(id: number, state: State): State {
        throw new Error('Method not implemented.')
    }

    remove(id: number): void {
        this._states = this._states.filter((_value, idx) => idx !== id)
    }

    isEmpty(): boolean {
        return Boolean(this._states.length)
    }
}
