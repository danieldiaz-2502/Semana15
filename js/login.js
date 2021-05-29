const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () =>{
    auth.signInWithEmailAndPassword(correo.value, contrasena.value).then(
        (data) => {

            window.location.href = 'index.html';

        }
    ).catch(
        (error) => {

        alert(error.message);
            console.log(error);
        }
    );
});