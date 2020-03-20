import FormRepository from './FormRepository/FormRepository'
import State from './State'
import InMemoryFormRepository from './FormRepository/InMemoryFormRepository'

type Data = {
    informacoesPessoais: any;
    residuos: { nome: string; recipientes: { [x: string]: string } }[];
}

export default class FormHandler {
    private static _instance: FormHandler
    private _repository: FormRepository<State>

    private constructor() { this._repository = InMemoryFormRepository.instance }

    static get instance(): FormHandler {
        if (this._instance) return this._instance
        this._instance = new FormHandler()
        return this._instance
    }

    sendAll(): void {
        console.log(this.data)
    }

    private get data(): Data {
        const data = {
            informacoesPessoais: State.userInfo,
            servico: State.service || null,
            industria: State.industry || null,
            residuos: this.getSelectedResidues()
        }

        return data
    }

    private getSelectedResidues(): any[] {
        const states = this._repository.getAll()

        return states.reduce(this.format, [])
    }

    private format(previousValue: any[], currentValue: State): any[] {
        previousValue.push({
            nome: currentValue.residuo.nome,
            recipientes: currentValue.calculoMontante.recipientes
        })
        return previousValue
    }
}
