import InteractiveForm from './InteractiveForm'
import SearchMode from './SearchMode'
import Industrias from './Industrias'
import Servicos from './Servicos'
import Residuos from './Residuos'
import CalculoMontante from './CalculoMontante'
import InformacoesPessoais from './InformacoesPessoais'
import Revisao from './Revisao'
import StateManager from './StateManager'

const stateManager = new StateManager()
const form = new InteractiveForm(stateManager)

const searchMode = new SearchMode('modo-de-pesquisa')
const industrias = new Industrias('industrias')
const servicos = new Servicos('servicos')
const residuos = new Residuos('residuos')
const calculoMontante = new CalculoMontante('calculo-montante')
const informacoesPessoais = new InformacoesPessoais('informacoes-pessoais')
const revisao = new Revisao('revisao')

form.addSection(
    searchMode,
    industrias,
    servicos,
    residuos,
    calculoMontante,
    informacoesPessoais,
    revisao
)

form.moveSection(searchMode.name)
