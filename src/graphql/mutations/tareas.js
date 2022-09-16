import { gql } from "@apollo/client";

export const NEW_TAREA = gql`
  mutation newTareaIframe(
    $inputTarea: tareaInput
    $inputNota: notaInput
    $inputAdjunto: uploadInput
    $usuAsig: Int
  ) {
    newTareaIframeResolver(
      inputTarea: $inputTarea
      inputNota: $inputNota
      inputAdjunto: $inputAdjunto
      usuAsig: $usuAsig
    )
  }
`;


export const UPDATE_TAREA = gql`
  mutation updateTarea(
    $idTarea: Int
    $inputTarea: tareaInput
    $inputAdjunto: uploadInput
    $inputNota: notaInput
    $idUsuario: Int
  ) {
    updateTareaResolver(
      idTarea: $idTarea
      inputTarea: $inputTarea
      inputAdjunto: $inputAdjunto
      inputNota: $inputNota
      idUsuario: $idUsuario
    )
  }
`;

export const UPDATE_ESTADO_TAREA = gql`
  mutation estadoTarea($idTarea: Int, $idEstado: Int) {
    estadoTareaResolver(idTarea: $idTarea, idEstado: $idEstado)
  }
`;
export const TAREA_ARCHIVADA = gql`
  mutation tareasArchivada($idTarea: Int) {
    tareaArchivadaResolver(idTarea: $idTarea)
  }
`;
