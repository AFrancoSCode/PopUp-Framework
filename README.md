Forma de uso:

1. Crear un div con la clase c-Modal y con un id unico.
2. Adentro de c-Modal crear otro div con la clase Modal-back y dentro de esta otro div con la clase Modal, dentro de esta va a ir todo el contenido del modal.
3. Crear un boton o metodo de acceso el cual tenga la clase a-Modal y tambien con el mismo id que el modal al que hace referencia.
4. Si se desea agregar un boton de salida hay que crear una etiqueta(preferiblemente span) que tenga la clase Modal-exit.

Propiedades:

1. Si se desea que un elemento que no sea la etiqueta de salida siva como esta, hay que agregar el atributo close al elemento deseado.
2. Si se desea especificar el ancho maximo del modal hay que agregar el atributo size al div de Modal, luego espeficiar el tamaño que sera tomado por pixeles.
3. Si se desea que el fondo sea oscuro hay que agregar la clase c-Darkbg en el elemento c-Modal, de lo contrario se agrega la clase c-Whitebg.
4. Si se desea que el fondo sea borroso se agrega la clase Modal-blur en el elemento c-Modal.