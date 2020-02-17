import { Residuo } from './Residuo'
import { Listener } from './Listener'

export class State {
    private _residuo: Residuo;
    private _dados: Residuo[];
    private _modo: string;
    private _industria: string;
    private _servico: string;
    private listeners: Listener[] = [];

    get servico(): string {
        return this._servico
    }

    set servico(value: string) {
        this._servico = value
        this.notify()
    }

    get industria(): string {
        return this._industria
    }

    set industria(value: string) {
        this._industria = value
        this.notify()
    }

    get modo(): string {
        return this._modo
    }

    set modo(value: string) {
        this._modo = value
        this.notify()
    }

    set dados(value: Residuo[]) {
        this._dados = value
        this.notify()
    }

    get dados(): Residuo[] {
        return this._dados
    }

    getResiduo(): Residuo {
        return this._residuo
    }

    get residuo(): Residuo | string {
        return this._residuo
    }

    set residuo(value: Residuo | string) {
        this._residuo = this.dados.find(res => res.slug === value)
        this.notify()
    }

    getAsList(data: any[]): string {
        return data.map(({ exemplo }) => `
            <li>${exemplo}</li>
        `).join(' ')
    }

    addListener(listener: Listener): void {
        this.listeners.push(listener)
    }

    notify(): void {
        this.listeners.forEach(listener => listener.update())
    }
}
