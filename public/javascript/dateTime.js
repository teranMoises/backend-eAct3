function tempTime(fecha = 1700868121, avisar = 3) {
  fecha = fecha * 1000;
  let ahora = Date.now();
  console.log(ahora, fecha, new Date(ahora), new Date(fecha));

  let restante = fecha - ahora;
  let aviso = (restante / 1000 / 60).toFixed(0);
  console.log("restante", restante, aviso, new Date(restante));

  alert(`Su sesión caducará en ${aviso} minutos.`);

  if ((restante - (avisar * 60 * 1000)) > 0) {
    setTimeout(() => {
      alert(`Su sesión caducará en ${avisar} minutos.`);
      console.log("Faltan " + avisar + " minutos para que su seción expire");
    }, restante - (avisar * 60 * 1000));
  }

  setTimeout(() => {
    alert(`Su sesión ha caducado. Sebe iniciar sesión de nuevo.`);
    console.log("Sesión caducada.");
  }, restante);
}
