import createState, { State } from './state'
import { slug } from './helpers'
import { logState, updateActiveSection, filterResiduos, bindings } from './handlers'

const endpoint = 'http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45'
export const sections = document.querySelectorAll('[data-section]') as NodeListOf<HTMLElement>
const actions = document.querySelectorAll('[data-action]') as NodeListOf<HTMLAnchorElement>
const industrias = document.querySelectorAll('[data-state-industria]') as NodeListOf<HTMLAnchorElement>
const servicos = document.querySelectorAll('[data-state-servico]') as NodeListOf<HTMLAnchorElement>
const residuos = document.querySelectorAll('[data-state-residuo]') as NodeListOf<HTMLAnchorElement>

const initialState: State = {
    dados: [],
    formData: new Set(),
    industria: '',
    modo: '',
    residuo: null,
    servico: '',
    section: null
}

const setSectionUsing = (action: HTMLAnchorElement): (ev: MouseEvent) => void => (
    (event): void => {
        event.preventDefault()
        const section = document.querySelector(`[data-section=${action.dataset.action}]`) as HTMLElement
        setState({ section })
    }
)

const addSlugProps = (residuo): object => {
    residuo.slug = slug(residuo.nome)
    residuo.industrias = residuo.industrias.reduce((acc, curr, i) => {
        acc[slug(curr)] = curr
        return acc
    }, {})
    return residuo
}

const fetchData = (): void => {
    fetch(endpoint).then(response => response.json())
        .then(data => data.acf.card_residuo)
        .then(cards => cards.map(addSlugProps))
        .then(dados => setState({ dados }))
        .then(() => setState({ section: sections.item(0) }))
        .catch(console.error)
}

const [state, setState] = createState(
    initialState,
    logState,
    updateActiveSection,
    filterResiduos,
    bindings
)

const onClick = (elements: NodeListOf<HTMLElement>, callback): void => {
    elements.forEach(element => (
        element.addEventListener('click', event => {
            event.preventDefault()
            callback(element)
        })
    ))
}

window.addEventListener('load', fetchData)

actions.forEach(action => (
    action.addEventListener('click', setSectionUsing(action)))
)

onClick(industrias, industria => setState({ industria: industria.dataset.stateIndustria }))
onClick(servicos, servico => setState({ servico: servico.dataset.stateServico }))
onClick(residuos, residuo => setState({ residuo: residuo.dataset.stateResiduo }))

const forms = document.querySelectorAll('form')
forms.forEach(form => {
    const formData = new FormData(form)

    form.addEventListener('submit', event => {
        event.preventDefault()
        setState({
            formData: state.formData.add(formData)
        })
    })
})
