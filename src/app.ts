import { fetchData } from './helpers'
import * as _ from 'lodash'

const quoted = new Set()
let activeForm = null

const createForm = (form: HTMLFormElement) => {
    const sections = new Map<string, HTMLElement>()

    return {
        addSection(key: string, section: HTMLElement): void {
            sections.set(key, section)
        }
    }
}

;(async (): Promise<void> => {
    const apiData = await fetchData()
    const form = document.querySelector('.form') as HTMLFormElement
    activeForm = createForm(form)
})()
