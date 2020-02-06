import { State } from './helpers/state'
import { types } from './helpers/constants'
import {
    addActiveClass,
    removeActiveClass,
    transformToList,
    removeAllChildren,
    filterContainer,
    industriaSeletorContainer,
    servicoSeletorContainer,
    calculoMontanteContainer,
    informacoesUsuarioContainer,
    residuosContainer,
    asideResiduoInfo,
    residuosItems,
    slug
} from './helpers/helpers'

export function handleContainerVisibility(condition: (state: State) => boolean) {
    return function(currentState: State): void {
        if (condition(currentState)) {
            return addActiveClass(this)
        }
        removeActiveClass(this)
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
        (Boolean(state.industria) || Boolean(state.servico))
    ).bind(residuosContainer),

    handleContainerVisibility(state => Boolean(state.residuo))
        .bind(calculoMontanteContainer),

    handleIndustrias,

    // eslint-disable-next-line max-statements
    (state: State): void => {
        if (state.residuo) {
            const asideTitle = asideResiduoInfo.querySelector('.residuo-info__titulo')
            const asideExemplosList = asideResiduoInfo.querySelector('.residuo-info__exemplos')
            const asideDestinacaoList = asideResiduoInfo.querySelector('.residuo-info__destinacao')
            const residuo = getResiduo(state.residuo, state)

            asideTitle.textContent = residuo.nome
            removeAllChildren(asideExemplosList)

            if (residuo.exemplos) {
                asideExemplosList.append(...transformToList(residuo.exemplos))
            }

            asideDestinacaoList.textContent = residuo.destinacao
        }
    },

    (state: State): void => {
        if (state.servico === types.TRATAMENTO_RESIDUOS) {
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
        switch (state.servico) {
            case types.REMOCAO_LODO:
            case types.LIMPEZA_FOSSA_SEPTICA:
            case types.PGRS:
                addActiveClass(informacoesUsuarioContainer)
                break
            default:
                removeActiveClass(informacoesUsuarioContainer)
        }
    },

    (state: State): void => {
        if (state.residuo) {
            const select = calculoMontanteContainer.querySelector('select#acondicionamento')
            const residuo = getResiduo(state.residuo, state)
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

        if (data && state.industria && industrias.includes(state.industria)) {
            residuo.classList.add(types.ATIVO)
        } else {
            residuo.classList.remove(types.ATIVO)
        }
    })
}

function getResiduo(residuo: string, state: State) {
    return state.dados.find(r => slug(r.nome) === residuo)
}

function dataLoaded(): (state: State) => boolean {
    return (state: State): boolean => Boolean(state.dados)
}

function isFilteredBy(filter: string, state: State): boolean {
    return state.filtro && state.filtro === filter
}
