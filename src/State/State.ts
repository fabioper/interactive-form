import Residuo from '../utils/Residuo'

export default class State {
    static searchMode: string
    static industry: string
    static service: string
    residuo: Residuo
    calculoMontante: {
        frequencia: number;
        periodo: string;
        recipientes: {
            [x: string]: number;
        };
    }
    static userInfo = {
        nome: '',
        telefone: '',
        email: '',
        empresa: '',
        cnpj: '',
        cep: '',
        endereco: '',
        numero: '',
        complemento: '',
        observacao: ''
    }

    constructor() {
        this.calculoMontante = {
            frequencia: 1,
            periodo: '',
            recipientes: {}
        }
    }

    get frequencia(): string {
        const { frequencia, periodo } = this.calculoMontante
        return !periodo ? '' :
            `${frequencia}x por ${periodo}`
    }

    get recipientes(): string {
        const { recipientes } = this.calculoMontante
        return Object.keys(recipientes)
            .map(container => `${container} (${recipientes[container]})<br>`)
            .join(' ')
    }

    static get contato(): string {
        const { nome, telefone, empresa, endereco, numero, observacao } = State.userInfo
        return `
            ${nome}<br>
            ${telefone}<br>
            ${empresa}<br>
            ${endereco}, ${numero}<br>
            ${observacao}
        `
    }

    get contato(): string { return State.contato }

    set industry(value: string) { State.industry = value }

    get industry(): string { return State.industry }

    set searchMode(value: string) { State.searchMode = value }

    get searchMode(): string { return State.searchMode }

    set service(value: string) { State.service = value }

    get service(): string { return State.service }
}
