// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Botón de contacto que desplaza al formulario
document.getElementById('contactBtn').addEventListener('click', () => {
  document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});

//database
/*
const indexedDB = window.indexedDB;

let db 

const conexion = indexedDB.open("listaContenido", 1)

conexion.onsuccess = () => {
  db = conexion.result
  console.log('Base de datos abierta', db)

}
conexion.onupgradeneeded = (e) => {
  db = e.target.result
  console.log("Base de datos creada", db)
  const coleccionObjetos = db.createObjectStore("Img",{
    keyPath: 'clave'
  })
}
conexion.onerror = (error) => {
  console.log("error", error)
}

// CRUD

const agregar = (info) =>{
  const transaccion = db.transaction(['Img'], 'readwrite')
  const coleccionObjetos = transaccion.objectStore('Img')
  const conexion = coleccionObjetos.add(data)
  consultar();
}
const obtener = (clave) =>{
  const transaccion = db.transaction(['Img'], 'readonly')
  const coleccionObjetos = transaccion.objectStore('Img')
  const conexion = coleccionObjetos.get(clave)

  conexion.onsuccess = (e) => {
    console.log(conexion.result)
  }
}
const actualizar = (data) =>{
  const transaccion = db.transaction(['Img'], 'readwrite')
  const coleccionObjetos = transaccion.objectStore('Img')
  const conexion = coleccionObjetos.put(data)
  
   conexion.onsuccess = (e) => {
    consultar();
  }
}

const eliminar = (clave) =>{
  const transaccion = db.transaction(['Img'], 'readwrite')
  const coleccionObjetos = transaccion.objectStore('Img')
  const conexion = coleccionObjetos.delete(clave)
  
   conexion.onsuccess = (e) => {
    consultar();
  }
}

const consultar = () =>{
  const transaccion = db.transaction(['Img'], 'readwrite')
  const coleccionObjetos = transaccion.objectStore('Img')
  const conexion = coleccionObjetos.openCursor()

  conexion.onsuccess = (e) =>{
    const cursor = e.target.result
    if (cursor){
      console.log('Lista de imagenes')
      console.log(cursor.value)
    } else {
      console.log('no hay imagenes en la lista')
    }
  }
}
  */