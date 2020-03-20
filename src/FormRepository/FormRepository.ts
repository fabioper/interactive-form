export default interface FormRepository<TState> {
    active: TState;
    getAll(): TState[];
    getById(id: number): TState;
    add(state: TState): TState;
    update(id: number, state: TState): TState;
    remove(id: number): void;
    isEmpty(): boolean;
}
