import { gql } from '@apollo/client';

export const GET_TAREAS = gql`
	query getTareas($idUsuario: Int) {
		getTareasResolver(idUsuario: $idUsuario)
	}
`;
