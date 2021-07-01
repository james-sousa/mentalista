var numeroSecreto = parseInt(Math.random() * 20);

var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("digite um número entre 0 e 20"));

  if (numeroSecreto == chute) {
    alert("Acertou");
    break;
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor");
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto) {
    alert("numero secreto é maior");
    tentativas = tentativas - 1;
  }
}
if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram, o número secreto era " + numeroSecreto);

}
window.alert("Para jogar novamente atualize o navegador");