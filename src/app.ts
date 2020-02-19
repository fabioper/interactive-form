const sectionElements = document.querySelectorAll('[data-section]') as NodeListOf<HTMLElement>
const actions = document.querySelectorAll('[data-action]') as NodeListOf<HTMLElement>

const sections = new Map<string, HTMLElement>()
let currentSection: HTMLElement
let previousSection: HTMLElement

const createState = (): (data: object) => void => {
    const state = new Proxy({}, {
        set(state, key, value): boolean {
            state[key] = value
            console.log(state)
            return true
        }
    })

    return (data: object): void => (
        Object.keys(data).forEach(key => {
            state[key] = data[key]
        })
    )
}

const changeState = createState()

const moveSection = (key: string, sections: Map<string, HTMLElement>): void => {
    previousSection = currentSection
    previousSection?.classList.remove('active')
    currentSection = sections.get(key)
    currentSection.classList.add('active')
}

sectionElements.forEach(section => (
    sections.set(section.dataset.section, section)
))

actions.forEach(action => (
    action.addEventListener('click', event => {
        event.preventDefault()
        const { action: sectionAction } = action.dataset
        Object.keys(action.dataset)
            .filter(key => key !== sectionAction)
            .forEach(key => changeState({ [key]: action.dataset[key] }))
        moveSection(sectionAction, sections)
    })
))

moveSection('modo-de-pesquisa', sections)
