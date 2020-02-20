export type Residuo = {
    nome: string;
    slug: string;
    icone: string;
    exemplos: {
        exemplo: string;
    }[];
    destinacao: string;
    tratamento: boolean;
    industrias: object;
    containers: {
        container: string[];
        observacao: string;
    }[];
};
