export function deletarContaServidor(email) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/excluir_conta.php",
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
            return responseJson == 0;
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

export function loginUsuarioRemoto(email, senha) {
    return fetch("https://studiistcc.000webhostapp.com/php/mobile/login.php", {
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
            return responseJson == 0;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function registroUsuarioRemoto(nome, email, senha) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/cadastro.php",
        {
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
        }
    )
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson == 0;
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

export function atualizarMateriaEstatistica(materia, acerto, email, inc) {
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
                incremento: inc,
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

export function gerarSimulado(numQuestoes, materias) {
    return fetch(
        "https://studiistcc.000webhostapp.com/php/mobile/gerar_simulado.php",
        {
            method: "post",
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                num_questoes: numQuestoes,
                materias: materias,
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

export function simuladoAtualizarEstatisticas(
    perguntasSimulado,
    respostasSimulado,
    email
) {
    // acertos
    let ama = 0;
    let apt = 0;
    let abi = 0;
    let aqu = 0;
    let afi = 0;
    let aing = 0;
    let ahi = 0;
    let age = 0;

    // erros
    let ema = 0;
    let ept = 0;
    let ebi = 0;
    let equ = 0;
    let efi = 0;
    let eing = 0;
    let ehi = 0;
    let ege = 0;

    perguntasSimulado.forEach(function (pergunta, index) {
        switch (pergunta["Materia"]) {
            case "matematica":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    ama += 1;
                } else {
                    ema += 1;
                }
                break;
            case "portugues":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    apt += 1;
                } else {
                    ept += 1;
                }
                break;
            case "biologia":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    abi += 1;
                } else {
                    ebi += 1;
                }
                break;
            case "quimica":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    aqu += 1;
                } else {
                    equ += 1;
                }
                break;
            case "fisica":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    afi += 1;
                } else {
                    efi += 1;
                }
                break;
            case "ingles":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    aing += 1;
                } else {
                    eing += 1;
                }
                break;
            case "historia":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    ahi += 1;
                } else {
                    ehi += 1;
                }
                break;
            case "geografia":
                if (
                    perguntasSimulado[index]["Resposta"] ==
                    respostasSimulado[index]
                ) {
                    age += 1;
                } else {
                    ege += 1;
                }
                break;
        }
    });

    atualizarMateriaEstatistica("matematica", true, email, ama);
    atualizarMateriaEstatistica("matematica", false, email, ema);
    atualizarMateriaEstatistica("portugues", true, email, apt);
    atualizarMateriaEstatistica("portugues", false, email, ept);
    atualizarMateriaEstatistica("historia", true, email, ahi);
    atualizarMateriaEstatistica("historia", false, email, ehi);
    atualizarMateriaEstatistica("geografia", true, email, age);
    atualizarMateriaEstatistica("geografia", false, email, ege);
    atualizarMateriaEstatistica("biologia", true, email, abi);
    atualizarMateriaEstatistica("biologia", false, email, ebi);
    atualizarMateriaEstatistica("fisica", true, email, afi);
    atualizarMateriaEstatistica("fisica", false, email, efi);
    atualizarMateriaEstatistica("quimica", true, email, aqu);
    atualizarMateriaEstatistica("quimica", false, email, equ);
    atualizarMateriaEstatistica("ingles", true, email, aing);
    atualizarMateriaEstatistica("ingles", false, email, eing);

    const acertos = ama + apt + ahi + age + abi + afi + aqu + aing;
    const erros = ema + ept + ehi + ege + ebi + efi + equ + eing;

    return [acertos, erros];
}
