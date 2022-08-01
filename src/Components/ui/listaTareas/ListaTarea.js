import { Checkbox, Ellipsis, List } from "antd-mobile";
import React from "react";

const ListaTarea = () => {
  return (
    <>
      <div>

        <List>
          <List.Item prefix={<Checkbox/>} description="Adrian Sabo" extra="29-07-2022" clickable>
            <Ellipsis
              direction="end"
              content="Llamar a Adrian, conversar sobre nuevos insumos"
            />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Horacio Mercol" extra="29-07-2022" clickable>
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Adrian Sabo" extra="29-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Adrian Sabo" extra="30-07-2022" clickable>
            <Ellipsis
              direction="end"
              content="Venta de Maíz para temporada 2022"
            />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Adrian Sabo" extra="30-07-2022" clickable>
            <Ellipsis
              direction="end"
              content="Llamar a Adrian, conversar sobre nuevos insumos"
            />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Horacio Mercol" extra="31-07-2022" clickable>
            <Ellipsis direction="end" content="Visitar Campo Oeste" />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Adrian Sabo" extra="31-07-2022" clickable>
            <Ellipsis direction="end" content="Venta de Soja" />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Jorge Mayorga" extra="01-08-2022" clickable>
            <Ellipsis
              direction="end"
              content="Llamar a Jorge para Venta de Herbicidas"
            />
          </List.Item>
          <List.Item prefix={<Checkbox/>} description="Aida Campos" extra="01-08-2022" clickable>
            <Ellipsis direction="end" content="Venta de Maíz" />
          </List.Item>
        </List>
      </div>
    </>
  );
};

export default ListaTarea;
