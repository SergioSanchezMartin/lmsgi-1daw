const texto = '{"nombre":"Ana","edad":30}';     //Un string que contiene un JSON

// Texto JSON ↔ objeto JS: parsear
const persona = JSON.parse(texto);


// Objeto JS ↔ texto JSON:
const alumno = {
    nombre: "Antonio",
    edad: 20,
    repetidor: false
};

const textoJSON = JSON.stringify(alumno);
console.log(textoJSON);
