import InteractiveForm from './InteractiveForm'
import { Sections } from './utils/enums'

const form = document.querySelector('.formulario-interativo') as HTMLFormElement
const interactiveForm = new InteractiveForm({
    sections: [],
    target: form,
    initialKey: Sections.MODO_DE_PESQUISA
})

interactiveForm.init()
