/* 
Objetivo - quando clicamos na aba temos que mostrar o conteúdo da aba que foi 
clicada pela usuário e esconder o conteúdo da aba anterior 

- passo 1 - dar um jeito de pegar os elementos que representam as abas no html 

- passo 2 - dar um jeito de identificar o clique no elemento aba 

- passo 3 - quando o usuário clicar, desmarcar a aba selecionada 

- passo 4 - marcar a aba clacada como selecionado 

- passo 5 - esconder o conteúdo anterior 

- passo 6 - mostar o conteúdo da aba selecionada 
*/


//- passo 1 - dar um jeito de pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");

//passo 2 - dar um jeito de identificar o clique no elemento aba 

abas.forEach(aba => {
    aba.addEventListener("click", function(){

        //passo 3 - quando o usuário clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        //passo 4 - marcar a aba clacada como selecionado
        aba.classList.add("selecionado")

       
        mostrarInformacoesDaAba(aba);
         

        


    });

});

function mostrarInformacoesDaAba(aba) {
        //passo 5 - esconder o conteúdo anterior

    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}
