import { State } from './helpers/state'
// import { types } from './helpers/constants'
import { show, hide, getDOMElements, slug, transformToList, removeAllChildren } from './helpers/helpers'
import { types } from './helpers/constants'

const {
    filterContainer,
    industriaSeletorContainer,
    servicoSeletorContainer,
    residuosContainer,
    calculoMontanteContainer,
    residuosItems,
    asideResiduoInfo,
    informacoesUsuarioContainer
} = getDOMElements()

export function handleContainerVisibility(condition: (state: State) => boolean) {
    return function(currentState: State): void {
        if (condition(currentState)) {
            return show(this)
        }
        hide(this)
    }
}

export default () => [
    handleContainerVisibility(dataLoaded()).bind(filterContainer),

    handleContainerVisibility(state => isFilteredBy(types.INDUSTRIA, state))
        .bind(industriaSeletorContainer),

    handleContainerVisibility(state => isFilteredBy(types.SERVICOS, state))
        .bind(servicoSeletorContainer),

    handleContainerVisibility(
        state => isFilteredBy(types.RESIDUOS, state) ||
        (Boolean(state.industry) || Boolean(state.service))
    ).bind(residuosContainer),

    handleContainerVisibility(state => Boolean(state.residue))
        .bind(calculoMontanteContainer),

    handleIndustrias,

    // eslint-disable-next-line max-statements
    (state: State): void => {
        if (state.residue) {
            const asideTitle = asideResiduoInfo.querySelector('.residuo-info__titulo')
            const asideExemplosList = asideResiduoInfo.querySelector('.residuo-info__exemplos')
            const asideDestinacaoList = asideResiduoInfo.querySelector('.residuo-info__destinacao')
            const residuo = getResiduo(state.residue, state)

            asideTitle.textContent = residuo.nome
            removeAllChildren(asideExemplosList)

            if (residuo.exemplos) {
                asideExemplosList.append(...transformToList(residuo.exemplos))
            }

            asideDestinacaoList.textContent = residuo.destinacao
        }
    },

    (state: State): void => {
        if (state.service === types.TRATAMENTO_RESIDUOS) {
            residuosItems.forEach(residuo => {
                const data = getResiduo(residuo.dataset.residuo, state)
                if (data && data.tratamento) {
                    residuo.classList.add(types.ATIVO)
                } else {
                    residuo.classList.remove(types.ATIVO)
                }
            })
        }
    },

    (state: State): void => {
        switch (state.service) {
            case types.REMOCAO_LODO:
            case types.LIMPEZA_FOSSA_SEPTICA:
            case types.PGRS:
                show(informacoesUsuarioContainer)
                break
            default:
                hide(informacoesUsuarioContainer)
        }
    },

    (state: State): void => {
        if (state.residue) {
            const select = calculoMontanteContainer.querySelector('select#acondicionamento')
            const residuo = getResiduo(state.residue, state)
            const options = residuo.containers[0].container.map(generateContainerOptions)
            removeAllChildren(select)
            select.append(...options)
        }
    }
]

function generateContainerOptions(container: string): HTMLOptionElement {
    const opt = document.createElement('option')
    opt.value = slug(container)
    opt.textContent = container
    return opt
}

function handleIndustrias(state: State): void {
    residuosItems.forEach(residuo => {
        const data = getResiduo(residuo.dataset.residuo, state)
        const industrias = data ? data.industrias.map((i: string) => slug(i)) : []
        if (data && state.industry && industrias.includes(state.industry)) {
            residuo.classList.add(types.ATIVO)
        } else {
            residuo.classList.remove(types.ATIVO)
        }
    })
}

function getResiduo(residuo: string, state: State) {
    return state.data.find(r => slug(r.nome) === residuo)
}

function dataLoaded(): (state: State) => boolean {
    return (state: State): boolean => Boolean(state.data)
}

function isFilteredBy(filter: string, state: State): boolean {
    return state.selectedFilter && state.selectedFilter === filter
}
