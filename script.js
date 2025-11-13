// Funcion para agregar el valor seleccionado en la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}
// Funcion para eliminar todo lo que se encuentre en la pantalla
function borrarTodo() {
    document.getElementById('pantalla').value = ''
}
// Funcion para calcular lo que se encuentre en la pantalla
function  calcular() {
    // Primero se obtiene el valor de la pantalla
    const valorPantalla = document.getElementById('pantalla').value 
    // Luego con un metodo propio de JavaScript llamado .eval() 
    // se calcula todo el valor que se obtuvo en la pantalla 
    const resultado = eval(valorPantalla)
    // Y finalmente se muestra el resultado en la pantalla
    document.getElementById('pantalla').value = resultado
}

function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value
    document.getElementById('pantalla').value = valorPantalla.slice(0,-1)
}