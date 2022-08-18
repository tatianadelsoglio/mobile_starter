import { CapsuleTabs } from "antd-mobile"
import { ListaNegocios } from "../../negocios/ListaNegocios"


export const ClienteIndividual = () => {
  return (
    <div className="contenedor-cliente-individual">
        <CapsuleTabs>
            <CapsuleTabs.Tab title="Info" key="1">

            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Tareas" key="2">

            </CapsuleTabs.Tab>
            <CapsuleTabs.Tab title="Negocios" key="3">
                <ListaNegocios />
            </CapsuleTabs.Tab>
        </CapsuleTabs>
    </div>
  )
}
