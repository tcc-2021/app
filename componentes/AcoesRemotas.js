export function deletarContaServidor(handler, email) {
    fetch("https://studiistcc.000webhostapp.com/php/mobile/excluir_conta.php", {
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

export function alterarEmailRemoto(email, emailNovo) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/alterar_email.php",
        {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                emailNovo: emailNovo,
            }),
        }
    )
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson == 0;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function alterarSenhaRemoto(email, senhaAtual, senhaNova) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/alterar_senha.php",
        {
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

export function loginUsuarioRemoto(handler, email, senha) {
    fetch("https://studiistcc.000webhostapp.com/php/mobile/login.php", {
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
    fetch("https://studiistcc.000webhostapp.com/php/mobile/cadastro.php", {
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
        "https://studiistcc.000webhostapp.com/php/mobile/exercicio_individual.php",
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

export function atualizarMateriaEstatistica(materia, acerto, email) {
    let stat;
    if (acerto) {
        stat = "estatistica_" + materia + "_acertos";
    } else {
        stat = "estatistica_" + materia + "_erros";
    }

    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/atualizar_materia_estatistica.php",
        {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                stat: stat,
                email: email,
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

export function baixarEstatisticas(email) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/estatisticas_usuario.php",
        {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
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
