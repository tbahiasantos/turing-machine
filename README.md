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
{ "mt": [
  2,
  ["0","1","2","3","4","5","6"],
  ["0","1"],
  ["[","_","0","1"],
  "[",
  "_",
  [
    ["0","1",[["0","0",">"],["_","_","|"]]],
    ["0","1",[["1","1",">"],["_","_","|"]]],
    ["0","3",[["_","_","<"],["_","_","<"]]],
    ["1","2",[["0","0",">"],["_","_","|"]]],
    ["1","2",[["1","1",">"],["_","_","|"]]],
    ["2","0",[["0","0",">"],["_","_",">"]]],
    ["2","0",[["1","1",">"],["_","_",">"]]],
    ["3","3",[["0","0","<"],["_","0","<"]]],
    ["3","3",[["1","1","<"],["_","1","<"]]],
    ["3","4",[["0","0","|"],["[","[",">"]]],
    ["3","4",[["1","1","|"],["[","[",">"]]],
    ["4","4",[["0","0","<"],["0","0",">"]]],
    ["4","4",[["1","1","<"],["1","1",">"]]],
    ["4","5",[["0","0","|"],["_","_","<"]]],
    ["4","5",[["1","1","|"],["_","_","<"]]],
    ["5","5",[["0","0","<"],["0","0","<"]]],
    ["5","5",[["1","1","<"],["1","1","<"]]],
    ["5","6",[["[","[","|"],["[","[","|"]]]
  ],
  "0",
  ["3", "6"]
]}
```

## Exemplos de Execução

```bash
# Substitua 'tm.json' e 'inputWord' pelos seus valores reais
node tm.js tm.json "inputWord"
```
