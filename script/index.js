const inputUser = document.querySelector('.inputUser');
const inputPost = document.querySelector('.inputPost');
const btnPublicar = document.querySelector('.btnPublicar');
const publicationComment = document.querySelector('.publication__comment');
const database = firebase.database();

btnPublicar.addEventListener('click',function (){
    if(inputUser.value === '' || inputPost.value === ''){
        alert ("Campo Vacio");
        return;
    }

    let referencia = database.ref('post').push();
    let postUser = {
       id : referencia.key,
       post : inputPost.value,
       user: inputUser.value,
    }
    console.log(postUser);
    referencia.set(postUser);
});
