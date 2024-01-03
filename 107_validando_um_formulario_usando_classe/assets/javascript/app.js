/*******************************************************************************/
class ValideForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', (event) => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.fieldsAreValid();
        const validPassword = this.passworsAreValid();

        if (validFields && validPassword) {
            alert('formulario enviado');
            this.form.submit();
        }
    }

    passworsAreValid() {
        let valid = true;
        const password = this.form.querySelector('.password');
        const passwordConfirm = this.form.querySelector('.passwordConfirm');

        if (password.value !== passwordConfirm.value) {
            valid = false;
            this.createError(password, 'campos "Senha" e "Repetir senha" precisa ser iguais');
            this.createError(passwordConfirm, 'campos "Senha" e "Repetir senha" precisa ser iguais');
        }

        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Senha precisar ter entre 6 e 12 caracteres');
        }

        return valid;
    }

    fieldsAreValid() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.errorText')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `campo '${label}' não pode estar em branco`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.valideCPF(field)) valid = false;
            }

            if (field.classList.contains('user')) {
                if (!this.valideUser(field)) valid = false;
            }
        }

        return valid;
    }

    valideUser(field) {
        const user = field.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário deverá ter entre 3 e 12 caracteres');
            valid = false;
        }
        
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Usuário só poderá conter letras e/ou números');
            valid = false;
        }

        return true;
    }

    valideCPF(field) {
        const cpf = new ValidadeCPF(field.value);

        if (!cpf.valid()) {
            this.createError(field, 'CPF inválido');
            return false;
        }

        return true;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('errorText');
        field.insertAdjacentElement('afterend', div);
    }
}

/*******************************************************************************/
const validateForm = new ValideForm();