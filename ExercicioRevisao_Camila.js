var clientes = [
    [nome = "Bruno",
     código = "123", 
     senha = "123", 
     saldo = 100], 
    [nome = "Joaozinho",
     código = "456", 
     senha = "456", 
     saldo = 10],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")
var continuar = 5


function procura_cliente(clientes){
return clientes[1] == codigo && clientes[2] == senha  // verifica se a senha e o código são compatíveis
}

var cliente_localizado = (clientes.find(procura_cliente)) // a variavel cliente loc. recebe o valor da função

    if(cliente_localizado == null){ // se não for localizado, avisa
    alert("Cliente não localizado")
    }

    else{
    console.log(cliente_localizado) // se for diferente de nulo (localizado), continua 
 
    do{         // uso do "do" para poder voltar o código e parar quando necessário
    var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia")) // verifica qual operação quer fazer
 
        
            if(operacao == 1){ 
                var saque = Number(window.prompt("Qual o valor de saque?"));
                if( saque <= cliente_localizado[3]){  // se o dinheiro for uma quantidade disponível, saca
                     cliente_localizado[3]=cliente_localizado[3]-saque;
                     alert("Retire seu dinheiro");   }
                else{
                alert("saldo insuficiente");} // senão, avisa que o saldo é insuficiente
                continuar = window.prompt("Deseja fazer outra operação? 5 - sim; 6- não") // atribui o valor para finalizar ou reiniciar o código
                
                
            }

            else if (operacao == 2){
                var deposito = Number(window.prompt("Qual o valor de deposito?")); // pergunta o valor a ser depositado
                cliente_localizado[3]=cliente_localizado[3] +deposito; // soma o valor depositado com o que já estava no banco
                alert("Valor depositado!");
                continuar = window.prompt("Deseja fazer outra operação? 5 - sim; 6- não") 
            
 
            }

            else if(operacao == 3){
                var transferencia = Number(window.prompt("Qual o valor de transferencia?"));
                if( transferencia <= cliente_localizado[3]){ //confere se o valor a ser trans. está disponível, se sim, continua
                   
                      var conta_transf = window.prompt("Digite o codigo da conta que deseja transferir"); // pede a conta que deseja transferir

                        function procura_cliente2(clientes){  // cria a funçao 
                        return clientes[1] ==conta_transf}   // verifica se há conta com aquele código que o usuário entrou
                    
                         var cliente_localizado2 = (clientes.find(procura_cliente2)) // atribui a variavel o valor da funçao
                    
                              switch (cliente_localizado2 == null) { // se o cliente pra transf não for localizado avisa ao usuário
                               case true:
                            alert("Conta para transferencia não localizada");
                            continuar = window.prompt("Deseja fazer outra operação? 5 - sim; 6- não")
                               break;
                               case false: // se for falso (localizar) continua o código
                             cliente_localizado[3]=cliente_localizado[3]-transferencia; //subtrai o valor a ser transferido
                               cliente_localizado2[3]=cliente_localizado2[3]+transferencia; // adiciona o valor transferido a outra conta
                              alert("Tranferido com sucesso!");
                              continuar = window.prompt("Deseja fazer outra operação? 5 - sim; 6- não") 
                                break}

                           
                        

                    console.log(cliente_localizado2) //mostra o cliente localizado

                    }


                 else{
               alert("saldo insuficiente");
               continuar = window.prompt("Deseja fazer outra operação? 5 - sim; 6- não")}
                 }
                }

                while(continuar == 5); // continua a operação enquanto continuar for igual a 5
    }
    
  
