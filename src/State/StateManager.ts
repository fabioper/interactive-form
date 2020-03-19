import State from './State'

export default interface StateManager {
    add(state: State): State;
    update(state: State): State;
    remove(state: State): void;
    sendAll(): void;
}
