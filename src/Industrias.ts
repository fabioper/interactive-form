import Section from './Section'
import InteractiveForm from './InteractiveForm'

class Industrias extends Section {
    onInit(form: InteractiveForm): void {
        super.onInit(form)
        this.onclick(this.buttons, button => {
            form.state.setState({ industria: button.dataset.stateIndustria })
        })
    }
}

export default Industrias
