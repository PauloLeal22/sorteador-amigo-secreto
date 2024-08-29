import { useListaParticipantes } from "../state/hook/useListaParticipantes";

const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes();

    return (
        <ul>
            {
                participantes.map(participante => (
                    <li key={participante}>
                        {participante}
                    </li>
                ))
            }
        </ul>
        
    )
}

export default ListaParticipantes;