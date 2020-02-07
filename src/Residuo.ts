export type Residuo = {
    nome: string;
    slug: string;
    descricao: string;
    icone: string;
    exemplos: [{
        exemplo: string;
    }];
    destinacao: string;
    tratamento: boolean;
    industrias: string[];
    containers: [{
        container: string[];
        observacao: string;
    }];
};
