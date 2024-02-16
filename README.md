# Turing Machine Simulator

## Descrição

Este é um simulador de Máquina de Turing desenvolvido em JavaScript para a disciplina de Linguagens Formais e Autômatos.

## Instruções de Uso

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/tbahiasantos/turing-machine.git
   cd turing-machine
   ```

2. **Instale as Dependências:**

   ```bash
   # Certifique-se de ter o Node.js instalado
   npm install
   ```

3. **Execute a Máquina de Turing:**

   ```bash
   # Substitua 'tm.json' e 'inputWord' pelos seus valores reais
   node tm.js tm.json "inputWord"
   ```

## Formato do Arquivo JSON (Exemplo)

```json
{
  "mt": [
    1,
    ["q0", "q1", "q2"],
    ["0", "1"],
    ["0", "1", "_"],
    "0",
    "_",
    [
      ["q0", "q1", [["0", "_", ">"]]],
      ["q1", "q1", [["1", "1", ">"], ["_", "_", "<"]]],
      ["q1", "q2", [["_", "_", "<"]]]
    ],
    "q2",
    ["q0"]
  ]
}
```

## Exemplos de Execução

```bash
# Substitua 'tm.json' e 'inputWord' pelos seus valores reais
node tm.js tm.json "inputWord"
```
