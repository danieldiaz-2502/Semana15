class Contacto{
    constructor(contacto){
        this.contacto = contacto
    }

    render = () => {

        let component = document.createElement('div');

        let contactoCont = document.createElement('div');
        contactoCont.className = 'contactoCont';
        contactoCont.innerHTML = (

            '<p>'+'<h3>'+this.contacto.contactName+'</h3>'+'</p>'+
            '<p>'+'<h3>'+this.contacto.contactNumber+'</h3>'+'</p>'
            );

        let borrarBtn = document.createElement('button');
        borrarBtn.className = 'borrarBtn';
        borrarBtn.innerHTML = (' X ');

        component.appendChild(contactoCont);
        component.appendChild(borrarBtn);

        borrarBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('semana15/contactos/'+this.contacto.id).set(null);
            console.log(this.tarea.id);
            console.log(this.tarea.userTarea);
        });

        return component;

    }
}