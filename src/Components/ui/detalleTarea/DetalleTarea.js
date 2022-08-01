import { Button, Card, Checkbox, TextArea, Toast } from "antd-mobile";
import React from "react";

const DetalleTarea = () => {
  return (
    <div>
      <Card title="Adrian Sabo" extra="29-07-2022">
      <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom:"5px",
          }}
        >
          <label style={{fontSize:"15px"}}>Tarea:</label>          
        </div>
        <div
          style={{
            paddingBottom: "11px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <label style={{fontSize:"14px"}}>Llamar a Adrian, conversar sobre nuevos insumos</label>
          
        </div>
        <div>
          <TextArea
            placeholder="Anexe Nota Necesaria"
            style={{
              backgroundColor: "#f8f8f8",
              paddingTop: "11px",
              borderTop: "1px solid #e5e5e5",
            }}
          ></TextArea>
        </div>
        <div
          style={{
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              paddingBottom: "11px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <label>Tarea Finalizada:</label>
          </div>
          <div
            style={{
              paddingBottom: "11px",
              display: "flex",
              justifyContent:"flex-end",
              marginTop:"-30px"
            }}
          >
            <Checkbox />
          </div>
        </div>
        <div
          style={{
            paddingTop: "11px",
            borderTop: "1px solid #e5e5e5",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            color="primary"
            onClick={() => {
              Toast.show("Guardado");
            }}
          >
            Guardar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DetalleTarea;
