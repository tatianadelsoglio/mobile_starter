import { Ellipsis, List } from "antd-mobile";
import React from "react";

const ListaTareaCalendar = () => {
  return (
    <>
      <List>
        <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
          <Ellipsis
            direction="end"
            content="Venta de Maíz para temporada 2022"
          />
        </List.Item>
        <List.Item description="Adrian Sabo" extra="27-07-2022" clickable>
          <Ellipsis
            direction="end"
            content="Llamar a Adrian, conversar sobre nuevos insumos"
          />
        </List.Item>
        <List.Item description="Horacio Mercol" extra="28-07-2022" clickable>
          <Ellipsis direction="end" content="Visitar Campo Oeste" />
        </List.Item>
        <List.Item description="Adrian Sabo" extra="28-07-2022" clickable>
          <Ellipsis direction="end" content="Venta de Soja" />
        </List.Item>
        <List.Item description="Jorge Mayorga" extra="29-07-2022" clickable>
          <Ellipsis
            direction="end"
            content="Llamar a Jorge para Venta de Herbicidas"
          />
        </List.Item>
        <List.Item description="Aida Campos" extra="30-07-2022" clickable>
          <Ellipsis direction="end" content="Venta de Maíz" />
        </List.Item>
      </List>
    </>
  );
};

export default ListaTareaCalendar;
