function verificaPalindromo(string) {
    if (!string) return "string inexistente!";

    let separaString;
    separaString = string.split(" ");
    
    for (let j = 0; j < separaString.length - 1; j++) {
        for (let i = 0; i < separaString[j].length / 2; i++) {
            if (separaString[j][i] !== string[separaString[j].length - 1 - i]) {
                alert('O texto não é um palíndromo!');

                pedeTexto(false);

                return false;
            }
        }
    }

    alert('O texto é um palíndromo!');

    pedeTexto(false);

    return true;
}

function pedeTexto(primeiraVez) {
    let texto;

    if (primeiraVez === true) {
        texto = prompt("Digite o novo texto para verificar palíndromo:");

        verificaPalindromo(texto);
    } else {
        let opcao;
        opcao = prompt("Deseja verificar o palíndromo de um novo texto ?\n s - Sim\n n - não");

        opcao = opcao.toLowerCase();

        if (opcao == "s") {
            texto = prompt("Digite o novo texto para verificar palíndromo:");

            verificaPalindromo(texto);
        } else {
            alert("Até mais!")
        }
    }
}

pedeTexto(true);