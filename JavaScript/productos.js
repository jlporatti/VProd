//--------------------------------------------Hoja Productos - Variables Globales ----------------------------------------
// Array que define el Carrito de Compra
let menus = [];
menus[1] = {etqTitulo: "h3TitMenu1", titulo: "Opcion 1", etqDescripcion: "pDescripcion1", descripcion: "Suprema Frita con Papas al Horno y Radicheta", etqPrecio: "pPrecio1", precio: 6500, etqCantidad: "spnCantidad1", cantidad: 0};
menus[2] = {etqTitulo: "h3TitMenu2", titulo: "Opcion 2", etqDescripcion: "pDescripcion2", descripcion: "Suprema Frita con Papas al Horno y Radicheta", etqPrecio: "pPrecio2", precio: 6500, etqCantidad: "spnCantidad2", cantidad: 0};
menus[3] = {etqTitulo: "h3TitMenu3", titulo: "Opcion 3", etqDescripcion: "pDescripcion3", descripcion: "Suprema Frita con Papas al Horno y Radicheta", etqPrecio: "pPrecio3", precio: 6500, etqCantidad: "spnCantidad3", cantidad: 0};
menus[4] = {etqTitulo: "h3TitMenu4", titulo: "Opcion 4", etqDescripcion: "pDescripcion4", descripcion: "Suprema Frita con Papas al Horno y Radicheta", etqPrecio: "pPrecio4", precio: 6500, etqCantidad: "spnCantidad4", cantidad: 0};
menus[5] = {etqTitulo: "h3TitMenu5", titulo: "Opcion 5", etqDescripcion: "pDescripcion5", descripcion: "Sorrentinos de Jamon y Queso con Salsa al Pesto", etqPrecio: "pPrecio5", precio: 7000, etqCantidad: "spnCantidad5", cantidad: 0};
menus[6] = {etqTitulo: "h3TitMenu6", titulo: "Opcion 6", etqDescripcion: "pDescripcion6", descripcion: "Pechuga rellena con Hongos, Espinaca y Jamon", etqPrecio: "pPrecio6", precio: 7500, etqCantidad: "spnCantidad6", cantidad: 0};
menus[7] = {etqTitulo: "h3TitMenu7", titulo: "Opcion 7", etqDescripcion: "pDescripcion7", descripcion: "Fideos al Huevo con Salsa Pesto, cherry mosarella", etqPrecio: "pPrecio7", precio: 4000, etqCantidad: "spnCantidad7", cantidad: 0};


//----------------------------------------- Hoja Productos - Inicialización ----------------------------------------------
// Coloca los titulos, descripciones y precios de los menú
window.onload = () => {
    // Coloca los Titulos de los Menu
    menus.forEach(item => {
        document.getElementById(item.etqTitulo).textContent = item.titulo;
        document.getElementById(item.etqDescripcion).textContent = item.descripcion;
        document.getElementById(item.etqPrecio).textContent = item.precio;
    });
};


//------------------------------------- Hoja Productos - Botón Agregar y Sacar Menú --------------------------------------
// Evento On Click 
let btnOnClickAgregarSacar=(btn, num) => {        
    let spnCantidad = document.getElementById("spnCantidad" + num);
    //let divMenu = document.getElementById("divMenu" + num);
    let h3Titulo = document.getElementById("h3TitMenu" + num);

    // Decremento o Incremento la cantidad segun el boton presionado
    if (( menus[num].cantidad > 0) && (btn === 1))
    {
        menus[num].cantidad = menus[num].cantidad - 1;

    } else if  (btn === 2)
    {
        menus[num].cantidad = menus[num].cantidad + 1;

    }
    // Actualizo la cantidad seleccionada
    spnCantidad.innerHTML = menus[num].cantidad;

    // Cambio el fondo dependiendo de si hay productos seleccionados
    if (menus[num].cantidad > 0)
    {
        h3Titulo.innerHTML=" Opción " + num + "- Seleccionada";
        h3Titulo.style.color = "lightseagreen";
        //divMenu.style.backgroundColor = "rgb(73, 155, 120)"; 

    }
    else {
        h3Titulo.innerHTML=" Opción " + num;
        h3Titulo.style.color = "navy";
        //divMenu.style.backgroundColor = "rgb(152, 171, 192)"; 
        //divMenu.style.backgroundColor = "rgb(213, 212, 212)";
    }

    // Calculo el Total
    let total = 0;
    menus.forEach(item => {
        total += item.precio * item.cantidad;
    });

    pMonto.innerHTML = "Importe Total: $"+ total.toLocaleString();
}


//-------------------------------------- Hoja Productos - Pantalla Resumen ----------------------------------------------
let iniciaResumen = () => {
    //Inicializa las Etiquetas de Datos del Resumen
    document.getElementById("iptNombre").value = "";
    document.getElementById("iptEmail").value = "";
    document.getElementById("iptTelefono").value = "";
    document.getElementById("iptDireccion1" ).value = "";
    document.getElementById("iptDireccion2" ).value = "";
    document.getElementById("sltBarrio" ).value = "";
    document.getElementById("txtAreaAclaraciones").value = "";
}
//-------------------------------------- Hoja Productos - Botón Finalizar -----------------------------------------------
// Evento On Click 
let btnOnClickFinalizar=() => {
    let pedido = "";
    let total = 0;
    iniciaResumen();
    // Arma el pedido a mostrar y calcula total
    menus.forEach(item => {
        if (item.cantidad > 0){
            pedido += item.cantidad + " x " + item.titulo + " Importe: $" + item.precio * item.cantidad + "\n";
            total += item.precio * item.cantidad;
        }
    });

    // Si el Total es Mayor a cero muestro el pedido
    if (total>0){
        pedido += "\nTotal: $" + total;
        document.getElementById("txtResumen").value = pedido;
        document.getElementById("divResumen").style.display = "block"; 
    }
}


//----------------------------------------- Hoja Productos - Botón Cancelar -------------------------------------------------
// Evento On Click del Botón Finalizar
let btnOnClickCancelar=() => {
    // Inicializa Resumen y sale
    iniciaResumen();
    // Oculta la Pantalla de Resumen
    document.getElementById("divResumen").style.display = "none"; 
    document.getElementById("pAviso" ).innerHTML = "";
    document.getElementById("pMensaje" ).innerHTML ="";
}


// Evento On Click del Botón Enviar
let btnOnClickEnviar=() => {

    let mensaje = "Debe Ingresar ";

   if (document.getElementById("iptNombre").value == "")
    {
        mensaje += "Nombre, ";
    }
    if (document.getElementById("iptEmail").value == "")
    {
        mensaje += "eMail, ";
    }
    if (document.getElementById("iptTelefono").value == "")
    {
        mensaje += "Teléfono, ";
    }
    if (document.getElementById("iptDireccion1" ).value == "")
    {
        mensaje += "Dirección, ";
    }
   if (document.getElementById("sltBarrio" ).value == "")
    {
        mensaje += "Barrio, ";
    }

    // Muestra el mensaje de error
    mensaje = mensaje.substring(0,mensaje.length-2);
    if (mensaje.length > 15 )
    {
        //alert(mensaje);
        document.getElementById("pAviso" ).innerHTML = "=>";
        document.getElementById("pAviso" ).style.color = "yelow";
        document.getElementById("pMensaje" ).innerHTML = mensaje;
        document.getElementById("pMensaje" ).style.color = "rgb(237, 55, 55)";

    }
    else{
        // No Hay errores
        // Coloca Cantidad en cero y los titulos de los menu
        menus.forEach(item=> {
            item.cantidad = 0;
            document.getElementById(item.etqCantidad).innerHTML = 0;

            document.getElementById(item.etqTitulo).innerHTML = item.titulo;
            document.getElementById(item.etqTitulo).style.color = "navy";
        });

        // Muestra Total en cero
        let total = 0;
        pMonto.innerHTML = "Importe Total: $"+ total.toLocaleString();

        document.getElementById("iptNombre").value = "";
        document.getElementById("iptEmail").value = "";
        document.getElementById("iptTelefono").value = "";
        document.getElementById("iptDireccion1" ).value = "";
        document.getElementById("iptDireccion2" ).value = "";
        document.getElementById("sltBarrio" ).value = "";
        document.getElementById("txtAreaAclaraciones").value = "";
        
        // Oculta la Pantalla de Resumen
        document.getElementById("divResumen").style.display = "none"; 
        document.getElementById("pAviso" ).innerHTML = "";
        document.getElementById("pMensaje" ).innerHTML ="";

    }
}



/*
// Defino y asigno variable para el Div Resumen
let divResumen = document.getElementById('divResumen');

// Variables para la Posición inicial del mouse
let posX, posY;

// Inicio del Movimiento del Div
let iniMovimientoDiv=(e) => {
    posX = e.clientX - divResumen.getBoundingClientRect().left;
    posY = e.clientY - divResumen.getBoundingClientRect().top;
    window.addEventListener('mousemove', movimientoDiv);
    window.addEventListener('mouseup', finMovimientoDiv);
}

// Movemos el Div cuando se desplaza
let movimientoDiv=(e) => {
    divResumen.style.left = (e.clientX - posX) + 'px';
    divResumen.style.top = (e.clientY - posY) + 'px';
}

// Fin del movimiento del div
let finMovimientoDiv = () => {
    window.removeEventListener('mousemove', movimientoDiv);
    window.removeEventListener('mouseup', finMovimientoDiv);
}

// Inicia el movimiento cuando se hace clic en el div
divResumen.addEventListener('mousedown', iniMovimientoDiv);
*/


