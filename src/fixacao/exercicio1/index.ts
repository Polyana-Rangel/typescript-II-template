/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/
type TPessoas = {
  nome: string,
  idade: number,
  corFavorita: string
}
enum corFavorita{
ROSA="rosa",
AMARELO="amarelo",
AZUL="azul"
}

const Pessoas: TPessoas []= [
  {
    nome: "flavia",
    idade: 12,
    corFavorita: corFavorita.AMARELO

  },
  {
    nome: "muri",
    idade: 13,
    corFavorita: corFavorita.AZUL

  },
  {
    nome: "fred",
    idade: 19,
    corFavorita: corFavorita.ROSA
  }

]

console.table(Pessoas)