import { Residuo } from './Residuo'
import { Listener } from './Listener'

export class State {
    private _residuo: Residuo = null
    private _dados: Residuo[]
    private listeners: Listener[] = []

    set dados(value: Residuo[]) {
        this._dados = value
        this.notify()
    }

    get data(): Residuo[] {
        return this._dados
    }

    getResiduo(): Residuo {
        return this._residuo
    }

    set residuo(value: string) {
        this._residuo = this.dados.find(res => res.slug === value)
        this.notify()
    }

    addListener(listener: Listener): void {
        this.listeners.push(listener)
    }

    notify(): void {
        this.listeners.forEach(listener => listener.update())
    }
}
