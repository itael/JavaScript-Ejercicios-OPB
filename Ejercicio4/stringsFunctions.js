// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
const nombre = "Edy Itael"

// - Otra cadena de texto con tu Apellido
const apellido = "García Sunuc"

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiane = (nombre+' '+apellido);


// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiane.toUpperCase();

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiane.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
estudiane.length;
// - Una variable que contenga la primera letra del Nombre
let primerLetra = nombre[0];

// - Otra variable que contenga la última letra del Apellido
let ultimaLetra = apellido[apellido.length-1]

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudianeClear = estudiane.replace(/\s+/g, '')

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let isNombre = (estudiane.includes(nombre))




