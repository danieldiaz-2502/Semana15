const database = firebase.database();
const auth = firebase.auth();
const agregarBtn = document.getElementById('agregarBtn');
const cancelarBtn = document.getElementById('cancelarBtn');
const contactName = document.getElementById('contactName');
const contactNumber = document.getElementById('contactNumber');

auth.onAuthStateChanged(
    (user) =>{

        database.ref('semana15/usuarios/'+ user.uid).once(
            'value',
            (data) => {
                let userDB = data.val();
                agregarContacto = () => {
    
                    if(contactName.value == '' || contactNumber.value == ''){
                        alert('No ha ingresado todos los datos');
                        return;
                    }
                
                    let reference = database.ref('semana15/contactos/'+userDB.uid).push();
                    
                    let contacto = {
                        id: reference.key,
                        contactName: contactName.value,
                        contactNumber: contactNumber.value,
                    };
                    database.ref('semana15/contactos/'+userDB.uid).push().set(contacto);
                
                    contactName.value = '';
                    contactNumber.value = '';
                
                    window.location.href = 'index.html';
                
                }
                agregarBtn.addEventListener('click', agregarContacto);
            }
        );

    }
);

cancelarBtn.addEventListener('click', () =>{

            window.location.href = 'index.html';
            
});