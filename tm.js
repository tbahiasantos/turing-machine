/**
 * Linguagens Formais e Autômatos
 * TP: Máquina de Turing (Múltiplas Fitas)
 * Aluno: Thiago Lima Bahia Santos
 */

function parseJSON(jsonFilePath) {
    const fs = require('fs');

    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

        const tapesNumber = jsonData.mt[0];
        const states = jsonData.mt[1];
        const inputAlphabet = jsonData.mt[2];
        const tapeAlphabet = jsonData.mt[3];
        const tapeStart = jsonData.mt[4];
        const tapeBlank = jsonData.mt[5];
        const transitionFunction = jsonData.mt[6];
        const initialState = jsonData.mt[7];
        const finalStates = jsonData.mt[8];

        function formatTransition(transition) {
            const formattedTransition = {
                currentState: transition[0],
                nextState: transition[1],
            };

            for (let i = 0; i < tapesNumber; i++) {
                const currentSymbol = transition[2][i][0];
                const changeSymbol = transition[2][i][1];
                const move = transition[2][i][2];

                formattedTransition[`tape${i + 1}`] = { currentSymbol, changeSymbol, move };
            }

            return formattedTransition;
        }

        return {
            tapesNumber,
            states,
            inputAlphabet,
            tapeAlphabet,
            tapeStart,
            tapeBlank,
            transitionFunction: transitionFunction.map(formatTransition),
            initialState,
            finalStates,
        };
    } catch (error) {
        console.error('Erro ao ler ou analisar o arquivo JSON:', error.message);
        process.exit(1);
    }
}

function simulateTuringMachine(turingMachine, inputWord) {
    const numTapes = turingMachine.tapesNumber;
    const finalStates = turingMachine.finalStates;
    let move = true;

    // Inicializar fitas e cabeçotes
    const tapes = Array.from({ length: numTapes }, (_, index) => {
        const tape = index === 0
            ? [turingMachine.tapeStart, ...(inputWord ? inputWord.split('') : []), turingMachine.tapeBlank]
            : [turingMachine.tapeStart, ...Array((inputWord && inputWord.length) || 1).fill(turingMachine.tapeBlank)];

        return { tape, headPosition: 1 };  // Inicializar fitas com cabeçote na posição 1
    });

    let currentState = [turingMachine.initialState];  // Obtem o estado inicial

    // Enquanto houver movimento
    while (move) {
        const possibleTransitions = [...turingMachine.transitionFunction];
        const validTransitions = possibleTransitions.filter(transition => {
            if (!currentState.includes(transition.currentState)) {
                return false;
            }

            for (let i = 0; i < numTapes; i++) {
                if (transition[`tape${i + 1}`].currentSymbol !== tapes[i].tape[tapes[i].headPosition]) {
                    return false;
                }
            }

            return true;
        });

        // Se não houver transições possíveis, parar
        if (validTransitions.length === 0) {
            move = false;
            break;
        }

        // Mover
        const currentTransition = { ...validTransitions[0] };

        // Mudar estado
        currentState = [currentTransition.nextState];

        // Escrever de volta nas fitas
        for (let i = 0; i < numTapes; i++) {
            const { changeSymbol, move } = currentTransition[`tape${i + 1}`];
            tapes[i].tape[tapes[i].headPosition] = changeSymbol;

            // Mover na fita
            if (move === '>' && tapes[i].headPosition < tapes[i].tape.length - 1) {
                tapes[i].headPosition++;
            } else if (move === '<' && tapes[i].headPosition > 0) {
                tapes[i].headPosition--;
            } // Se move for '|', fica imóvel
        }
    }

    // Decidir se a palavra foi lida ou não
    if (currentState.some(state => finalStates.includes(state))) {
        console.log("Sim");
    } else {
        console.log("Não");
    }

    // // Imprimir configuração final
    // console.log("Configuração Final:");
    // tapes.forEach(({ tape, headPosition }, index) => {
    //     console.log(`Fita ${index + 1}: ${tape.join(' ')}`);
    //     console.log(`Cabeçote ${index + 1} na posição ${headPosition}`);
    // });
}

function main() {
    const jsonFilePath = process.argv[2];
    const inputWord = process.argv[3];

    if (!jsonFilePath) {
        console.log("Usar: ./mt [MT] [Palavra]");
        process.exit(1);
    }

    const turingMachine = parseJSON(jsonFilePath);

    simulateTuringMachine(turingMachine, inputWord);
}

main();
