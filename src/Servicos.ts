import Section from './Section'
import InteractiveForm from './InteractiveForm'

class Servicos extends Section {
    onInit(form: InteractiveForm): void {
        super.onInit(form)
        this.onclick(this.buttons, button => {
            form.state.setState({ servico: button.dataset.stateServico })
        })
    }
}

export default Servicos
