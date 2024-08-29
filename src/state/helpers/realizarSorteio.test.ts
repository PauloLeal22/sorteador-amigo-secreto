import { realizarSorteio } from "./realizarSorteio";

describe('no sorteio', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = ['Paulo', 'Henrique', 'Kamilly', 'João'];

        const sorteio = realizarSorteio(participantes);

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);

            expect(amigoSecreto).not.toEqual(participante);
        });
    });
});