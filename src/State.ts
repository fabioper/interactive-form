import { Residuo } from './Residuo'

export type State = {
    modo: string;
    industria: string;
    servico: string;
    residuo: string;
    dados: Residuo[];
};
