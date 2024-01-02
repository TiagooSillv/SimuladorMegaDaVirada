function gerarNumerosMegaDaVirada() {
    var numerosDaSorte: number[] = [];
    
    while (numerosDaSorte.length < 6) {
        var numero = Math.floor(Math.random() * 60) + 1;
        
        // Verifica se o número já está na lista
        var verificadorDeNumeroRepetido = numerosDaSorte.includes(numero);

        // Adiciona o número à lista apenas se não estiver repetido
        if (!verificadorDeNumeroRepetido) {
            numerosDaSorte.push(numero);
        }

        console.log("Número gerado:", numero);
        console.log("Lista atual:", numerosDaSorte);
    }

    return numerosDaSorte;
}

// Exemplo de uso
const numerosSorteados = gerarNumerosMegaDaVirada();
console.log("Números sorteados:", numerosSorteados);
