export interface Observer {
    update(): void;
}

export default class State {
    private observer: Observer;

    setObserver(observer: Observer): void {
        this.observer = observer
    }

    notify(): void {
        this.observer.update()
    }
}
