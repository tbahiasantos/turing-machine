# Máquina de Turing - Trabalho Prático de Linguagens Formais e Autômatos

## Aluno
- **Nome:** Thiago Lima Bahia Santos

## Descrição
Este projeto implementa uma Máquina de Turing determinística com suporte para múltiplas fitas. A implementação é baseada em um arquivo JSON que descreve a configuração da máquina, incluindo o número de fitas, estados, alfabetos, função de transição, estados finais, entre outros.

## Estrutura do Arquivo JSON
O arquivo JSON de definição da Máquina de Turing deve seguir o seguinte formato:

```json
{
  "mt": [
    tapes_number,
    [states],
    [input_alphabet],
    [tape_alphabet],
    "tape_start",
    "tape_blank",
    [
      ["current_state", "next_state", [["tape_current_symbol", "tape_change_symbol", "tape_move"]]],
    ],
    "initial_state",
    [final_states]
  ]
}

## Funcionalidades
- **parseJSON:** Função para analisar e ler um arquivo JSON que descreve a configuração da Máquina de Turing.
- **simulateTuringMachine:** Função para simular a execução da Máquina de Turing com uma palavra de entrada dada.

## Como Usar
1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Execute o programa com o seguinte comando:

```bash
node tm.js <caminho_para_json> <palavra_de_entrada>

# Executar a Máquina de Turing com um arquivo JSON e uma palavra de entrada
Exemplo: node tm.js tm.json "010101"