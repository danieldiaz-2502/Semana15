const usernameT = document.getElementById('usernameT');
const logoutBtn = document.getElementById('logoutBtn');
const addBtn = document.getElementById('addBtn');
const contactsContainer = document.getElementById('contactsContainer');
const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged(
    (user) =>{

        database.ref('semana15/usuarios/'+ user.uid).once(
            'value',
            (data) => {
                let userDB = data.val();
                usernameT.innerHTML = "Hola, "+ userDB.nombre;
            }
        );

    }
);

logoutBtn.addEventListener('click', () =>{
    auth.signOut().then(
        () => {

            window.location.href = 'login.html';

        }
    ).catch(
        (error) => {

        alert(error.message);

        }
    );
});

addBtn.addEventListener('click', () =>{
   
            window.location.href = 'agregar.html';

});

database.ref('semana15/contactos').on('value', function(data){
    contactsContainer.innerHTML = '';
    data.forEach(
        contacto => {
            let valor = contacto.val();
            let fila = new Contacto(valor);
            contactsContainer.appendChild(fila.render());
        
    });
});