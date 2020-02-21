import { Residuo } from './Residuo'

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

    for (let i = 0, l = from.length ; i < l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

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
