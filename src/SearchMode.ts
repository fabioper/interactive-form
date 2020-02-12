import Section from './Section'
import InteractiveForm from './InteractiveForm'

class SearchMode extends Section {
    onInit(form: InteractiveForm): void {
        const buttons = document.querySelectorAll('[data-section-action]') as NodeListOf<HTMLAnchorElement>

        buttons.forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault()
                form.moveSection(button.dataset.sectionAction)
            })
        })
    }
}

export default SearchMode
