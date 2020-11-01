  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJAb5xt0drUeCa2dBKMhHf3z8QMaHI2y4",
    authDomain: "s10project.firebaseapp.com",
    databaseURL: "https://s10project.firebaseio.com",
    projectId: "s10project",
    storageBucket: "s10project.appspot.com",
    messagingSenderId: "830069995055",
    appId: "1:830069995055:web:fd00d1377723bb4adbf8da",
    measurementId: "G-EHCJM6SK1J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const inputUser = document.querySelector('.inputUser');
const inputPost = document.querySelector('.inputPost');
const btnPublicar = document.querySelector('.btnPublicar');
const post__list = document.querySelector('.post__list')
const publicationComment = document.querySelector('.publication__comment');
const database = firebase.database();

console.log("wsdffr");


btnPublicar.addEventListener('click',function (e){
    e.preventDefault();
    console.log("puto");
    if(inputUser.value === '' || inputPost.value === ''){
        alert ("Campo Vacio");
    }else{

        let referencia = database.ref('post').push();
        let postUser = {
           id : referencia.key,
           post : inputPost.value,
           user: inputUser.value
        }
        console.log(postUser);
        referencia.set(postUser,function(error) {
            if (error) {
              // The write failed...
            } else {
              // Data saved successfully!
              console.log("funciono");
            }
          });
    }

});




    database.ref('post').on('value', function(data) {
        post__list.innerHTML = '';

        data.forEach(
            postUser => {
                let valor = postUser.val();
                let element =new Post(valor);
                post__list.appendChild(element.render());
                element.comment();
                console.log('post/'+valor.id+'/comment');
                database.ref('post/'+valor.id+'/comment').on('value', function(i) {
                    i.forEach(
                        commentThing => {
                            let val = commentThing.val();
                            let listComment = document.querySelector('.publication__comment');
                            let itemComment = document.createElement('div');

                            itemComment.classList.add("publication__item");
                            itemComment.innerHTML = val.comment;
                            listComment.appendChild(itemComment);
                        }
                    );
                    
                });

            }
        );

        
        
    
    });


    database.ref('post').on('value', function(data) {

        data.forEach(
            post =>{
                
            }
        )
    });



    



