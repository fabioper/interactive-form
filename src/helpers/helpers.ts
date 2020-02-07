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

