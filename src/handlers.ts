/*
export default () => [
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
 */
