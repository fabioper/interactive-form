import Residuo from './Residuo'
import State from '../State'
import { Sections } from './enums'

export const addSlugProps = (residuo): object => {
    residuo.slug = slug(residuo.nome)
    residuo.industrias = residuo.industrias.reduce((acc, curr) => {
        acc[slug(curr)] = curr
        return acc
    }, {})
    return residuo
}

export function slug(text: string): string {
    let str = text.replace(/^\s+|\s+$/g, '')
    str = str.toLowerCase()

    const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeiiiioooouuuunc------'

    for (let i = 0, l = from.length ; i < l ; i++)
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))

    str = str.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')

    return str
}

const endpoint = 'http://gruporodocon.com.br/residuos3/wp-json/wp/v2/pages/45'
export const fetchData = async (): Promise<Residuo[]> => {
    const response = await fetch(endpoint)
    const data = await response.json()
    const result = data.acf.card_residuo
    return result.map(addSlugProps)
}

export function hasTreatment(): (value: Residuo) => boolean {
    return (residuo: Residuo): boolean => residuo.tratamento
}

export function belongsTo(industry: string): (value: Residuo) => boolean {
    return (residuo: Residuo): boolean => {
        const industrias = Object.keys(residuo.industrias)
        return industrias.includes(industry)
    }
}

export function loadResiduesCards(state: State, data: Residuo[], cards: HTMLElement): void {
    const filteredResidues = data.filter(chooseFilter(state))
    cards.innerHTML = filteredResidues.map(residuo => (
        toMarkup(
            residuo.slug,
            residuo.nome,
            residuo.icone,
            Sections.CALCULO_MONTANTE
        )
    )).join(' ')
}

export function loadIndustriesCards(data: Residuo[], cards: HTMLElement): void {
    const industries = extractIndustriesFrom(data)
    cards.innerHTML = Array.from(industries)
        .map(([key, name]) => toMarkup(key, name, null, Sections.RESIDUOS))
        .join(' ')
}

export function extractIndustriesFrom(data: Residuo[]): Map<string, string> {
    const extractMap = (acc: Map<string, string>, curr: object): Map<string, string> => {
        Object.keys(curr).forEach(key => (acc.set(key, curr[key])))
        return acc
    }
    return data.map(residuo => residuo.industrias)
        .reduce(extractMap, new Map()) as Map<string, string>
}

export function toMarkup(key: string, name: string, icon: string, action: Sections): string {
    return (`
        <button data-card="${key}" data-action="${action}">
            <img src="${icon}" alt="${name}"/>
            <h3>${name}</h3>
        </button>
    `)
}

export function chooseFilter(state: State): (value: Residuo) => boolean {
    const { industry, service } = state

    let filter: (value: Residuo) => boolean = (): boolean => true

    if (industry)
        filter = belongsTo(industry)

    if (service === 'tratamento-de-residuos')
        filter = hasTreatment()

    return filter
}

export function extractDropdownOptionsMarkup(containers: string[]): string {
    return containers.map(container => (`
        <div class="iq__option">
            <span class="iq__label">${container}</span>
            <input type="number" name="quantidade" min="0" value="0" id="${container}">
        </div>
    `)).join(' ')
}
