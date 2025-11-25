let db;
let idEditar = null;

const solicitud = indexedDB.open("Solicitudes", 1);

solicitud.onupgradeneeded = function (e) {
    db = e.target.result;
    if (!db.objectStoreNames.contains("solicitud")) {
        
    }
}