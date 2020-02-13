import { State } from './state'
import { sections } from './app'

export const logState = (state: State): void => (console.log(state))

export const updateActiveSection = (state: State): void => {
    const { section: activeSection } = state
    sections.forEach(section => {
        section === activeSection ?
            section.classList.add('active') :
            section.classList.remove('active')
    })
}

export const filterResiduos = (state: State): void => {
    const { dados: residuos, industria, servico } = state
    const cards = document.querySelectorAll('[data-state-residuo]') as NodeListOf<HTMLAnchorElement>

    if (industria) {
        cards.forEach(card => {
            const residuo = residuos.find(res => res.slug === card.dataset.stateResiduo)
            if (residuo.industrias[industria]) {
                card.classList.add('active')
            } else {
                card.classList.remove('active')
            }
        })
    }

    if (servico) {
        if (servico === 'gestao-de-residuos') {
            cards.forEach(card => card.classList.add('active'))
        }

        if (servico === 'tratamento-de-residuos') {
            cards.forEach(card => {
                const residuo = residuos.find(res => res.slug === card.dataset.stateResiduo)
                residuo.tratamento ?
                    card.classList.add('active') :
                    card.classList.remove('active')
            })
        }
    }

    if (!industria && !servico) {
        cards.forEach(card => card.classList.add('active'))
    }
}

export const bindings = (state: State): void => {
    if (state.section?.dataset.section === 'calculo-montante') {
        const title = state.section.querySelector('h2')
        const examples = state.section.querySelector('ul')
        const dest = state.section.querySelector('h4 + p')

        if (state.residuo) {
            if (state.residuo.exemplos) {
                const examplesMarkup = state.residuo.exemplos.map(({ exemplo }) => `
                    <li>${exemplo}</li>
                `).join(' ')
                examples.innerHTML = examplesMarkup
            }

            title.textContent = state.residuo.nome
            dest.textContent = state.residuo.destinacao
        }
    }
}
