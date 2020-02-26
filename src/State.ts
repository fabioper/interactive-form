import Residuo from './utils/Residuo'

export default class State {
    searchMode: string
    industry: string
    service: string
    residuo: Residuo
    calculoMontante: {
        frequencia: number;
        periodo: string;
        recipientes: {
            [x: string]: number;
        };
    }
    userInfo: {
        nome: string;
        telefone: string;
        email: string;
        empresa: string;
        cnpj: string;
        cep: string;
        endereco: string;
        numero: string;
        complemento: string;
    }

    constructor() {
        this.calculoMontante = {
            frequencia: 1,
            periodo: '',
            recipientes: {}
        }
        this.userInfo = {
            nome: '',
            telefone: '',
            email: '',
            empresa: '',
            cnpj: '',
            cep: '',
            endereco: '',
            numero: '',
            complemento: ''
        }
    }

    get frequencia(): string {
        const { frequencia, periodo } = this.calculoMontante
        return `${frequencia}x por ${periodo}`
    }

    get recipientes(): string {
        const { recipientes } = this.calculoMontante
        return Object.keys(recipientes)
            .map(container => `${container} (${recipientes[container]})<br>`)
            .join(' ')
    }

    get contato(): string {
        const { nome, telefone, empresa, endereco, numero } = this.userInfo
        return `
            ${nome}<br>
            ${telefone}<br>
            ${empresa}<br>
            ${endereco}, ${numero}
        `
    }
}
