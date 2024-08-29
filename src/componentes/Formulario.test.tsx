/* eslint-disable jest/valid-title */
import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

describe('o comportamento do Formulario.tsx', () => {
    test('caso o input esteja vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument();
    
        // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled();
    });
    
    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Paulo Henrique'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus();
    
        // garantir que o input não tenha um valor
        expect(input).toHaveValue('');
    });
    
    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Paulo Henrique'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Paulo Henrique'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // encontrar no DOM o alert
        const mensagemErro = screen.getByRole('alert');
    
        // garantir que o alerta possua a mensagem de erro
        expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!');
    
    });
    
    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers();
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        );
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    
        // encontrar o botão
        const botao = screen.getByRole('button');
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Paulo Henrique'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Paulo Henrique'
            }
        });
    
        // clicar no botão de submeter
        fireEvent.click(botao);
    
        // encontrar no DOM o alert
        let mensagemErro = screen.queryByRole('alert');
    
        // garantir que o alerta esteja no documento
        expect(mensagemErro).toBeInTheDocument();
    
        act(() => {
            jest.runAllTimers();
        });
        
        mensagemErro = screen.queryByRole('alert');
    
        expect(mensagemErro).toBeNull();
    });
});
