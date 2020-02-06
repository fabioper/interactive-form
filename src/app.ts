import runHandlers from './handlers'
import { onChange } from './helpers/state'
import { reset, buttons, industriasSeletor, servicosSeletor, residuosItems } from './helpers/helpers'

const state = onChange(runHandlers())

window.addEventListener('load', () => {
    fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
        .then(res => res.json())
        .then(data => state.dados = data.acf.card_residuo)
        .then(() => console.log('Data loaded successfully'))
        .catch(err => console.log(err))
})

buttons.forEach(button => button.addEventListener('click', () => {
    const { modo: modoSelecionado } = button.dataset
    reset(state)
    modoSelecionado === state.filtro ?
        state.filtro = '' :
        state.filtro = modoSelecionado
}))

industriasSeletor.addEventListener('change', () => {
    state.industria = industriasSeletor.value
})

servicosSeletor.addEventListener('change', () => {
    state.servico = servicosSeletor.value
})

residuosItems.forEach(residuo => {
    residuo.addEventListener('click', () => {
        const { residuo: residuoSelecionado } = residuo.dataset
        residuoSelecionado === state.residuo ?
            state.residuo = '' :
            state.residuo = residuoSelecionado
    })
})

