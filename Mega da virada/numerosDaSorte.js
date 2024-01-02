function gerarNumerosMegaDaVirada() {
    var numerosDaSorte = [];
    
    while (numerosDaSorte.length < 6) {
        var numero = Math.floor(Math.random() * 60) + 1;
        
        // Verifica se o número já está na lista
        var verificadorDeNumeroRepetido = numerosDaSorte.includes(numero);

        // Adiciona o número à lista apenas se não estiver repetido
        if (!verificadorDeNumeroRepetido) {
            numerosDaSorte.push(numero);
        }
    }

    return numerosDaSorte;
}

const verificadorDeAcerto = (palpite, megaDaVirada) => {
    var acertos = 0;
    for (const numeros of palpite) {
        for (const numero of megaDaVirada) {
            if (numero == numeros) {
                acertos++;
            }
        }
    }
    return acertos
}

var verificadorDeVitoria = () => {
    var tentativa = 0;
    
    
    while (acertos != 6) {
        var acertos = verificadorDeAcerto(gerarNumerosMegaDaVirada(),[21,24,33,41,48,56]);
        if (acertos == 6) {
            console.log(`Ganhou com ${tentativa} tentativas!!`);
            break
        }
        tentativa ++
        console.log(acertos);
    }
}

verificadorDeVitoria()