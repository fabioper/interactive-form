import { State } from './state'

export function hide(element: HTMLElement): void {
    element.classList.remove('active')
}

export function show(element: HTMLElement): void {
    element.classList.add('active')
}

export function getDOMElements() {
    const elements = {
        filterContainer: document.querySelector('[data-container=filtro]') as HTMLElement,
        industriaSeletorContainer: document.querySelector('[data-container=seletor-industria]') as HTMLElement,
        servicoSeletorContainer: document.querySelector('[data-container=seletor-servico]') as HTMLElement,
        residuosContainer: document.querySelector('[data-container=residuos]') as HTMLElement,
        calculoMontanteContainer: document.querySelector('[data-container=calculo-montante]') as HTMLElement,
        industriasSeletor: document.querySelector('[data-container=seletor-industria] select') as HTMLSelectElement,
        servicosSeletor: document.querySelector('[data-container=seletor-servico] select') as HTMLSelectElement,
        buttons: Array.from(document.querySelectorAll('[data-container] button') as NodeListOf<HTMLButtonElement>),
        residuosItems: Array.from(document.querySelectorAll('[data-residuo]') as NodeListOf<HTMLDivElement>),
        informacoesUsuarioContainer: document.querySelector('[data-container=informacoes-usuario]') as HTMLElement,
        asideResiduoInfo: document.querySelector('aside.residuo-info') as HTMLElement
    }

    return elements
}

export function slug(str: string): string {
    let result = str.replace(/^\s+|\s+$/g, '')
    result = result.toLowerCase()

    const from = 'ãàáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeiiiioooouuuunc------'
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
    state.industry = ''
    state.service = ''
    state.residue = ''
}
