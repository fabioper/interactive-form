import Section from './Section'
import InteractiveForm from './InteractiveForm'

class SearchMode extends Section {
    onInit(form: InteractiveForm): void {
        super.onInit(form)
        this.onclick(this.buttons, button => {
            form.state.setState({ modo: button.dataset.stateModo })
        })
    }
}

export default SearchMode
