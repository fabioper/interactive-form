import runHandlers from './handlers'
import { onChange } from './helpers/state'
import { getDOMElements, reset } from './helpers/helpers'

const { buttons, industriasSeletor, servicosSeletor, residuosItems } = getDOMElements()

const state = onChange(runHandlers())

window.addEventListener('load', () => {
    fetch('http://gruporodocon.com.br/residuos2/wp-json/wp/v2/pages/45')
        .then(res => res.json())
        .then(data => state.data = data.acf.card_residuo)
        .then(() => console.log('Data loaded successfully'))
        .catch(err => console.log(err))
})

buttons.forEach(button => button.addEventListener('click', () => {
    const { type } = button.dataset
    reset(state)

    type === state.selectedFilter ?
        state.selectedFilter = '' :
        state.selectedFilter = type
}))

industriasSeletor.addEventListener('change', () => {
    state.industry = industriasSeletor.value
})

servicosSeletor.addEventListener('change', () => {
    state.service = servicosSeletor.value
})

residuosItems.forEach(residuo => {
    residuo.addEventListener('click', () => {
        const { residuo: selectedResiduo } = residuo.dataset
        selectedResiduo === state.residue ?
            state.residue = '' :
            state.residue = selectedResiduo
    })
})

