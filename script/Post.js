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
            <p class="publication__user">${this.user.username}</p> 
         </div>
         <div class="publication__comment">
         </div>
         <div class="publication__opinion">
         <input type="text" placeholder="Escribe tu nombre de usuario" name="textcomment" class="publication__input">
         <button class="publication__btn">Responder</button> 
         </div>
         `;

    }
}