import BtnAgregar from "../Botones/BtnAgregar";
import BtnVer from "../Botones/BtnVer";
import IconoClientes from "../imagenes/IconoClientes";

const AsideClientes = () => {
    return(
        <section className="clientes">
            <aside>
                <IconoClientes/>
                <h3>Clientes</h3>
                <BtnAgregar/>
                <BtnVer/>
            </aside>
        </section>
    )
}

export default AsideClientes;