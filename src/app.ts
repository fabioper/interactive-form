import { InformacoesUsuarioObserver } from './observers/InformacoesUsuarioObserver'
import { TratamentoObserver } from './observers/TratamentoObserver'
import { CalculoMontanteObserver } from './observers/CalculoMontanteObserver'
import { ResiduosObserver } from './observers/ResiduosObserver'
import { ServicoSelectorObserver } from './observers/ServicoSelectorObserver'
import { IndustriaSelectorObserver } from './observers/IndustriaSelectorObserver'
import { ModeObserver } from './observers/ModeObserver'
import { GlobalState } from './observers/GlobalState'
import { IndustriasObserver } from './observers/IndustriasObserver'

const state = new GlobalState()

const modeObserver = new ModeObserver('[data-secao=modo]')
const industriaSelectorObserver = new IndustriaSelectorObserver('[data-secao=seletor-industria]')
const servicoSelectorObserver = new ServicoSelectorObserver('[data-secao=seletor-servico]')
const residuosObserver = new ResiduosObserver('[data-secao=residuos]')
const calculoMontanteObserver = new CalculoMontanteObserver('[data-secao=calculo-montante]')
const industriasObserver = new IndustriasObserver(residuosObserver.section)
const informacoesUsuarioObserver = new InformacoesUsuarioObserver('[data-secao=informacoes-usuario]')
const tratamentoObserver = new TratamentoObserver(residuosObserver.section)

state.addObserver(
    modeObserver,
    industriaSelectorObserver,
    servicoSelectorObserver,
    residuosObserver,
    calculoMontanteObserver,
    industriasObserver,
    informacoesUsuarioObserver,
    tratamentoObserver
)

modeObserver.buttons.forEach(button => {
    button.addEventListener('click', () => {
        const { modo } = button.dataset
        state.reset()
        state.updateState({ modo })
    })
})

industriaSelectorObserver.selectElement.addEventListener('change', function() {
    const industria = this.value
    state.updateState({ industria })
})

servicoSelectorObserver.selectElement.addEventListener('change', function() {
    const servico = this.value
    state.updateState({ servico })
})

/* residuosItems.forEach(residuo => {
    residuo.addEventListener('click', () => {
        const { residuo: residuoSelecionado } = residuo.dataset
        residuoSelecionado === state.residuo ?
            state.residuo = '' :
            state.residuo = residuoSelecionado
    })
}) */
