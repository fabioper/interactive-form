import { InformacoesUsuarioSectionObserver } from './observers/sections/InformacoesUsuarioSectionObserver'
import { TratamentoObserver } from './observers/TratamentoObserver'
import { CalculoMontanteSectionObserver } from './observers/sections/CalculoMontanteSectionObserver'
import { ResiduosCardsSectionObserver } from './observers/sections/ResiduosCardsSectionObserver'
import { ServicoSelectorSectionObserver } from './observers/sections/ServicoSelectorSectionObserver'
import { IndustriaSelectorSectionObserver } from './observers/sections/IndustriaSelectorSectionObserver'
import { ModeSelectorSectionObserver } from './observers/sections/ModeSelectorSectionObserver'
import { GlobalState } from './observers/GlobalState'
import { IndustriasObserver } from './observers/IndustriasObserver'

const state = new GlobalState()

const modeObserver = new ModeSelectorSectionObserver('[data-secao=modo]')
const industriaSelectorObserver = new IndustriaSelectorSectionObserver('[data-secao=seletor-industria]')
const servicoSelectorObserver = new ServicoSelectorSectionObserver('[data-secao=seletor-servico]')
const residuosObserver = new ResiduosCardsSectionObserver('[data-secao=residuos]')
const calculoMontanteObserver = new CalculoMontanteSectionObserver('[data-secao=calculo-montante]')
const industriasObserver = new IndustriasObserver(residuosObserver.section)
const informacoesUsuarioObserver = new InformacoesUsuarioSectionObserver('[data-secao=informacoes-usuario]')
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
