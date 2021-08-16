function tabelaDeMultiplicação(num){
    let tabela = [];

    for (let linha = 0; linha <= num; linha++) {
        tabela[linha] = [];

        for (let coluna = 0; coluna <= num; coluna++){
            tabela[linha].push(linha * coluna);
        }
    }
    console.table(tabela)
}

