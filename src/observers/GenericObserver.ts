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

    removeAllChildren(asideExemplosList: Element) {
        if (asideExemplosList.hasChildNodes) {
            while (asideExemplosList.firstChild) {
                asideExemplosList.removeChild(asideExemplosList.firstChild)
            }
        }
    }
}
