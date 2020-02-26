export default class Residuo {
    nome: string;
    slug: string;
    icone: string;
    exemplos: { exemplo: string }[];
    destinacao: string;
    tratamento: boolean;
    industrias: { [x: string]: string };
    containers: {
        container: string[];
        observacao: string;
    }[];
}
