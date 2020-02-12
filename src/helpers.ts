import { Residuo } from './Residuo'

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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function slugObject(value: string) {
    return ({ [slug(value)]: value })
}

export async function getResiduos(uri: string): Promise<Residuo[]> {
    const response = await fetch(uri)
    const data = await response.json()
    return data.acf.card_residuo.map(residuo => {
        residuo.slug = slug(residuo.nome)
        residuo.industrias = residuo.industrias.map(slugObject)
        return residuo
    })
}
