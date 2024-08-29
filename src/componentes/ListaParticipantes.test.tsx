import { render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "./ListaParticipantes"
import { useListaParticipantes } from "../state/hook/useListaParticipantes"

jest.mock('../state/hook/useListaParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
});

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([]);
    });

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    });    
});

describe('uma preenchida de participantes', () => {
    const participantes = ['Paulo', 'Henrique'];

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    });

    test('deve ser renderizada com elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    });    
});