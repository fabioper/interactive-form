export type Residuo = {
    nome: string;
    descricao: string;
    icone: string;
    exemplos: [{ exemplo: string }];
    destinacao: string;
    tratamento: boolean;
    industrias: string[];
    containers: [{
        container: string[];
        observacao: string;
    }];
}

export type State = {
    filtro: string;
    industria: string;
    servico: string;
    residuo: string;
    dados: Residuo[];
}

export function onChange(callbacks: ((state: {}) => void)[]): State {
    const state: State = {
        filtro: '',
        industria: '',
        residuo: '',
        servico: '',
        dados: []
    }

    return new Proxy(state, {
        set(state, key, value): boolean {
            state[key] = value
            callbacks.forEach((cb: (state: {}) => void) => {
                cb(state)
            })
            return true
        }
    })
}
