import { State } from './state'

export function removeActiveClass(element: HTMLElement): void {
    element.classList.remove('active')
}

export function addActiveClass(element: HTMLElement): void {
    element.classList.add('active')
}

export const filterContainer = document.querySelector('[data-secao=modo]') as HTMLElement
export const industriaSeletorContainer = document.querySelector('[data-secao=seletor-industria]') as HTMLElement
export const servicoSeletorContainer = document.querySelector('[data-secao=seletor-servico]') as HTMLElement
export const residuosContainer = document.querySelector('[data-secao=residuos]') as HTMLElement
export const calculoMontanteContainer = document.querySelector('[data-secao=calculo-montante]') as HTMLElement
export const informacoesUsuarioContainer = document.querySelector('[data-secao=informacoes-usuario]') as HTMLElement
export const asideResiduoInfo = document.querySelector('aside.residuo-info') as HTMLElement
export const industriasSeletor = document.querySelector('[data-secao=seletor-industria] select') as HTMLSelectElement
export const servicosSeletor = document.querySelector('[data-secao=seletor-servico] select') as HTMLSelectElement
export const buttons = Array.from(document.querySelectorAll('[data-secao] button') as NodeListOf<HTMLButtonElement>)
export const residuosItems = Array.from(document.querySelectorAll('[data-residuo]') as NodeListOf<HTMLDivElement>)

export function slug(str: string): string {
    let result = str.replace(/^\s+|\s+$/g, '')
    result = result.toLowerCase()

    const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeiiiioooouuuunc------'

    // eslint-disable-next-line no-plusplus
    for (let i = 0, l = from.length ; i < l ; i++) {
        result = result.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    result = result.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')

    return result
}

export function transformToList(arr: any[] | false) {
    if (arr) {
        const list = arr.map(item => {
            const li = document.createElement('li')
            li.textContent = item.exemplo
            return li
        })
        return list
    }
}

export function removeAllChildren(asideExemplosList: Element) {
    if (asideExemplosList.hasChildNodes) {
        while (asideExemplosList.firstChild) {
            asideExemplosList.removeChild(asideExemplosList.firstChild)
        }
    }
}

export function reset(state: State) {
    state.industria = ''
    state.servico = ''
    state.residuo = ''
}
