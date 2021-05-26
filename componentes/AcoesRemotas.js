export function deletarContaServidor(handler, email) {
    fetch("https://studiistcc.000webhostapp.com/php/excluir_conta_mobile.php", {
        method: "post",
        header: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson == 0) {
                handler(false, "");
            } else {
                alert(
                    "Um erro ocorreu durante a exclusão. Tente novamente mais tarde."
                );
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function alterarEmailRemoto(handler, email, emailNovo) {
    fetch("https://studiistcc.000webhostapp.com/php/alterar_email_mobile.php", {
        method: "post",
        header: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            emailNovo: emailNovo,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson == 0) {
                alert("Email alterado com sucesso!");
                handler(true, emailNovo);
            } else {
                alert(
                    "Um erro ocorreu durante a alteração de email. Tente novamente mais tarde."
                );
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function alterarSenhaRemoto(handler, email, senhaAtual, senhaNova) {
    fetch("https://studiistcc.000webhostapp.com/php/alterar_senha_mobile.php", {
        method: "post",
        header: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senhaAtual: senhaAtual,
            senhaNova: senhaNova,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson == 0) {
                alert("Senha alterada com sucesso!");
            } else if (responseJson == 1) {
                alert(
                    "Um erro ocorreu durante a alteração de senha. Tente novamente mais tarde."
                );
            } else {
                alert("Senha errada.");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function loginUsuarioRemoto(handler, email, senha) {
    fetch("https://studiistcc.000webhostapp.com/php/login_mobile.php", {
        method: "post",
        header: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson == 0) {
                handler(true, email);
            } else {
                alert("Seu e-mail ou senha estão errados ou são inválidos.");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

import * as SecureStore from "expo-secure-store";
async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export function registroUsuarioRemoto(handler, nome, email, senha) {
    fetch("https://studiistcc.000webhostapp.com/php/cadastro_mobile.php", {
        method: "post",
        header: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
        }),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson === 0) {
                save("email", email);
                save("senha", senha);

                handler(true, email);
            } else {
                alert(responseJson);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function exercicioIndividualRemoto(materia) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/exercicio_individual_mobile.php",
        {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                materia: materia,
            }),
        }
    )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}
