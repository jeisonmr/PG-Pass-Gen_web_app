// Importanción del subComponente Switch Toggle.
import Toggle from "/src/Components/switch/Switch";

function PanelSwitch({ title, tipo }) {
  // Estilos del Componente PanelSwitch.
  const panelConf = {
    width: "28rem",
    height: "70px",
    backgroundColor: "var(--cl-4)",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: "10px",
  };

  const textConfig = {
    width: '200px',
  }

  return (
    <>
      <div style={panelConf} className={"configLength"}>
        {/* Parametro titulo */}
        <p style={textConfig}>{title}</p>

        {/* Render del Switch enviando como parametro el tipo contraseña*/}
        <div>
        <Toggle tipo={tipo} />
        </div>
      </div>
    </>
  );
}

export default PanelSwitch;
