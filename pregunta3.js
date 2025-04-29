function guardar() {
    const nombre = document.getElementById('Nombre').value.trim();
    const edad = document.getElementById('Edad').value.trim();
    const mensaje = document.getElementById('mensaje');
    
    if (nombre !== '' && edad !== '') {
      mensaje.textContent = 'Se guardó con éxito.';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'Error, debe llenar todos los campos.';
      mensaje.style.color = 'red';
    }
    }