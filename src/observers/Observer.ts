import { State } from '../State'

export interface Observer {
    update(state: State): void;
}
