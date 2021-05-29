const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const nombre = document.getElementById('nombre');
const contrasena = document.getElementById('contrasena');
const confirmContrasena = document.getElementById('confirmContrasena');
const cuentaExistente = document.getElementById('cuentaExistente');
const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', () =>{
    auth.createUserWithEmailAndPassword(correo.value, contrasena.value).then(
        (data) => {
            let user = {
                id: data.user.uid,
                nombre: nombre.value,
                correo: correo.value,
                telefono: telefono.value,
                contrasena: contrasena.value,
            }

            database.ref('semana15/usuarios/'+ user.id).set(user);

        }
    );
});

cuentaExistente.addEventListener('click', () =>{
            window.location.href = 'login.html';
});
