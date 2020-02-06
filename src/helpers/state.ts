export type State = {
    selectedFilter: string;
    industry: string;
    service: string;
    residue: string;
    data: any;
}

export function onChange(callbacks: ((currentState: {}) => void)[]): State {
    const state: State = {
        selectedFilter: '',
        industry: '',
        residue: '',
        service: '',
        data: []
    }

    return new Proxy(state, {
        set(currentState, key, value): boolean {
            currentState[key] = value
            callbacks.forEach((cb: (currentState: {}) => void) => {
                cb(currentState)
            })
            return true
        }
    })
}
