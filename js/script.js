let addBtn = document.querySelector('.addButton');

      const updateLocal = ()=>{
         let txtArr = document.querySelectorAll('textarea');
         const notes = [];
         txtArr.forEach((el) => {
            txtData = el.value;
            notes.push(txtData);
         })
         
         localStorage.setItem("note", JSON.stringify(notes))
      }


 const addNote = (event) =>{
   
    const cards = document.createElement('div');
    cards.classList.add('cards');
   const textData = ` <div class="basicBtns">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="far fa-trash-alt"></i></button>
   </div>
   <div class="main hidden"></div>
   <main ><textarea class="textarea"></textarea>` ;
   cards.insertAdjacentHTML('afterbegin',textData);

   let edit = cards.querySelector('.edit')
    let del = cards.querySelector('.delete')
    let main = cards.querySelector('.main')
    let textarea = cards.querySelector('textarea')
   // deleting cards
      del.addEventListener('click', () => {
         cards.remove()
         updateLocal()
      })

   //  editing card
 console.log();
     edit.addEventListener('click', ()=>{
        textarea.classList.toggle("hidden")
        main.classList.toggle("hidden")
     })

     textarea.addEventListener("change", (event)=>{
         main.innerHTML =  event.target.value;
         textarea.classList.toggle("hidden");
         main.classList.toggle("hidden")
         updateLocal();
         console.log(event);
     })
     
   document.querySelector(".container").appendChild(cards);

 }
 const notes = JSON.parse(localStorage.getItem('note'));
  if(notes){
     notes.forEach((el) =>{
        addNote(el);
        console.log(typeof el);
   }
     )
}
addBtn.addEventListener('click',addNote);
