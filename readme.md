# Formulário Interativo

1. Renderizar conteúdos dinâmicamente
   - [ ] Resíduos
   - [ ] Serviços
   - [ ] Calculo de Montante

```typescript

```
1. Mover seção com opção de retornar a seção anterior
   - Adicionar classe `active` na `<section>` que representa a seção.
   - Quando uma seção conter a classe `active`, as outras seções não devem conter a mesma classe.
```typescript
const sections: Map<string, HTMLElement> = new Map<string, HTMLElement>()
sections.set('somename',
    document.querySelector('[data-section=somename]')
)

set currentSection(value: HTMLElement) {
   _currentSection = value
   currentSection.classList.add('active')
}

set previousSection(value: HTMLElement) {
   _previousSection = value
   value.classList.remove('active')
}

returnSection() {
   moveSection(previousSection) // overload
}

moveSection(key: string) {
   previousSection = currentSection
   currentSection = sections.get(key)
}

// ...
moveSection('somename')

```
3. Indicar etapa do formulário de acordo com seção
4. Armazenar formulários para envio único
5. Editar e excluir formulário
```typescript
class FormManager {
   private forms: Form = []
   private activeForm: Form;

   public add(form: Form) {
      this.forms.push(form)
   }

   public remove(formId: Form) {
      this.forms = this.forms.filter(form => formId !== form.id)
   }

   public edit(formId: Form) {
      const form = this.forms.find(form => formId !== form.id)
      this.active = form
      form.moveSection('somesectioname')
   }

   public send(form: Form) {
      // send all forms
   }
}

setActiveForm(form) {
   sections.forEach(section => section.form = form)
}
```

```typescript
class Form {
   id: number;
   state: State;

   constructor(id: number) {
      this.id = id
      this.sections = []
      this.state = new State({})
   }

   update() {
      this.sections.forEach(section => section.update())
   }
}
```
