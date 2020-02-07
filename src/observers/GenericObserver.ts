import { Observer } from './Observer'
import { State } from '../State'

export abstract class GenericObserver implements Observer {
    update(state: State): void { }

    addActiveClass(element: HTMLElement): void {
        console.log(element)
        element.classList.add('active')
    }

    removeActiveClass(element: HTMLElement): void {
        element.classList.remove('active')
    }
}
