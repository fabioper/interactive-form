import { State } from './state'
import { sections } from './app'

export const logState = (state: State, previous: State): void => (console.log(state, previous))

export const updateActiveSection = (state: State): void => {
    const { section: activeSection } = state
    sections.forEach(section => {
        section === activeSection ?
            section.classList.add('active') :
            section.classList.remove('active')
    })
}

export const filterResiduos = (state: State): void => {
    const { dados, industria } = state
    const residuos = document.querySelectorAll('.residuo__card') as NodeListOf<HTMLElement>

    if (industria) {
        residuos.forEach(element => {
            const residuo = dados.find(res => res.nome === element.dataset.residuo)
            console.log(residuo)
        })
    }
    /* const wrapper = document.querySelector('.residuos__wrapper') as HTMLElement
    const markup = residuos.map(residuo => `
        <a href="#" data-action="calculo-montante">
            <div>
                <img src="${residuo.icone}" alt="${residuo.nome}">
                <h3>${residuo.nome}</h3>
            </div>
        </a>
    `).join(' ')
    wrapper.innerHTML = markup */
}

