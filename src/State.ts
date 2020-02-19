export interface Observer {
    update(): void;
}

export default class State {
    private observer: Observer;
    servico: string;
    industria: string;

    setState(data: Partial<State>): void {
        Object.keys((key: string) => (this[key] = data[key]))
        this.notify()
    }

    setObserver(observer: Observer): void {
        this.observer = observer
    }

    notify(): void {
        this.observer.update()
    }
}
