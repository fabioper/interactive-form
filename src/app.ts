import InteractiveForm from './InteractiveForm'
import SearchMode from './SearchMode'
import Industrias from './Industrias'
import Servicos from './Servicos'

const form = new InteractiveForm()

const searchMode = new SearchMode('modo-de-pesquisa')
const industrias = new Industrias('industrias')
const servicos = new Servicos('servicos')

form.addSection(searchMode, industrias, servicos)
form.moveSection(searchMode.name)
