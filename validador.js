document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const campos = {
        nome: {
            regex: /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/,
            mensagem: "Deve conter nome e sobrenome com iniciais maiúsculas."
        },
        email: {
            regex: /^[\w.-]+@[\w-]+\.[a-z]{2,}(\.[a-z]{2,})?$/i,
            mensagem: "Formato de e-mail inválido."
        },
        cpf: {
            regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            mensagem: "Deve estar no formato 000.000.000-00."
        },
        telefone: {
            regex: /^\(\d{2}\) \d{5}-\d{4}$/,
            mensagem: "Deve estar no formato (00) 00000-0000."
        },
        senha: {
            regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
            mensagem: "Deve conter ao menos 8 caracteres, com letras maiúsculas, minúsculas e números."
        }
    };

    let valido = true;

    for (let campo in campos) {
        const input = document.getElementById(campo);
        const feedback = input.nextElementSibling;
        const regra = campos[campo];

        if (regra.regex.test(input.value)) {
            feedback.textContent = "Aceito";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Rejeitado: " + regra.mensagem;
            feedback.style.color = "red";
            valido = false;
        }
    }

    const senha = document.getElementById("senha").value;
    const confirmacao = document.getElementById("confirmacao").value;
    const confirmacaoFeedback = document.getElementById("confirmacao").nextElementSibling;

    if (senha === confirmacao) {
        confirmacaoFeedback.textContent = "Aceito";
        confirmacaoFeedback.style.color = "green";
    } else {
        confirmacaoFeedback.textContent = "Rejeitado: As senhas não coincidem.";
        confirmacaoFeedback.style.color = "red";
        valido = false;
    }

    if (valido) {
        alert("Formulário enviado com sucesso!");
    }
});
