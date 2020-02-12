import Section from './Section'
import InteractiveForm from './InteractiveForm'

class Residuos extends Section {
    onInit(form: InteractiveForm): void {
        super.onInit(form)
        this.onclick(this.buttons, button => {
            form.state.setState({ residuo: button.dataset.stateResiduo })
        })
    }
}

export default Residuos
