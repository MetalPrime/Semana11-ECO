class Post{
    constructor(user){
        this.user = user;
    }

     render = () =>{
         let component = document.createElement('article');
         component.classList.add('publication');

         component.innerHTML = `
         <div class="publication__description">
            <p class="publication__text">${this.user.post}</p>
            <p class="publication__user">@${this.user.user}</p> 
         </div>
         <div class="publication__comment">
         </div>
         <div class="publication__opinion">
         <input type="text" placeholder="Escribe tu Comentario" name="textcomment" class="publication__input">
         <button class="publication__btn">Responder</button> 
         </div>
         `;

        

         

         return component;

        
    }

    comment = () =>{
        let comment = document.querySelector('.publication__input');

                    console.log("fegvr");
                        let btnComment = document.querySelector('.publication__btn');
                        btnComment.addEventListener('click', ()=>{
                            console.log("FDSFGVZDSBDV")
                            let Comment = {
                                comment: comment.value
                            }
                            console.log(Comment.comment)
                            database.ref('post/'+this.user.id+'/comment').push().set(Comment);
                            

                        });
                    
                    
    }


}