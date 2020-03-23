import FormRepository from './FormRepository'
import State from '../State'

export default class InMemoryFormRepository implements FormRepository<State> {
    private static _instance: FormRepository<State>
    private _states: State[]
    private _active: State

    private constructor() {
        this.active = new State()
        this._states = []
        InMemoryFormRepository._instance = this
    }

    static get instance(): FormRepository<State> {
        if (InMemoryFormRepository._instance)
            return InMemoryFormRepository._instance
        return new InMemoryFormRepository()
    }

    get active(): State { return this._active }
    set active(state: State) { this._active = state }

    get states(): State[] { return this._states }

    getAll(): State[] {
        return this._states
    }

    getById(id: number): State {
        const found = this._states[id]
        if (!found)
            throw new Error(`Residue not found => ${id}`)

        return found
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
        return this._states.length === 0
    }
}
