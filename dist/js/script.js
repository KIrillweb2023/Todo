//Создал класс Task
class Task{
    constructor(check, text, rename, basket, parent){
        this.check = check;
        this.text = text;
        this.rename = rename;
        this.basket = basket;
        this.parent = document.querySelector(parent);
    }
    //Рендрю таск и затем поомещяю его в родителя 
    render(){
        const element = document.createElement('div');
        element.classList.add('task');
        element.innerHTML += `
            <div class="${this.check}"></div>
            <h5 class="descr">${this.text}</h5>
            <img src="${this.rename}" alt="" class="rename">
            <img src="${this.basket}" alt="" class="delete">
        `;
        this.parent.append(element);
    }
}

const btn = document.querySelector('.main__add-btn');
const input = document.querySelector('.main__add-input');

const arr = [];
let id = 0;

//Повесил обработчик на кнопку
btn.addEventListener('click', () =>{
    if(input.value.trim() != ""){
        arr.push({ id: id, text: input.value });
        new Task('checkbox', `${input.value}`, './icons/task/pen.svg', './icons/task/recycle.svg', '.main .main__tasking .container').render();
        const checkbox = document.querySelectorAll('.checkbox');
        const task = document.querySelectorAll('.task');
        const removeBtn = document.querySelectorAll('.delete');
        activeClickCheckbox(task);
        removeTask(removeBtn);

         //checkbox mode
    function activeClickCheckbox(btn){
        // btn.forEach(item =>{
        //     item.addEventListener('click', () =>{
        //         //item.classList.add('active');
        //         if(item.classList.contains('active')){
        //             item.classList.remove('active');
        //         } else {
        //             item.classList.add('active');
        //         }
        //     });
        // });
        
        //через childNodes()
        btn.forEach(item =>{
            item.addEventListener('click', () =>{
                const checkingClick = item.childNodes[1];
                checkingClick.classList.toggle('active');
                console.log(checkingClick);
            });
        });
    } 
    }
    //checkbox mode
    function activeClickCheckbox(btn){
        // btn.forEach(item =>{
        //     item.addEventListener('click', () =>{
        //         //item.classList.add('active');
        //         if(item.classList.contains('active')){
        //             item.classList.remove('active');
        //         } else {
        //             item.classList.add('active');
        //         }
        //     });
        // });
        
        btn.forEach(item =>{
            item.addEventListener('click', () =>{
                const checkingClick = item.childNodes[1];
                checkingClick.classList.toggle('active');



                console.log(checkingClick);
            });
        });
    } 
    //delete mode
    function removeTask(btn){
        btn.forEach((item, i) =>{
            item.addEventListener('click', () =>{
                item.parentNode.remove();
                arr.splice(i, 1);
            });
        });
    }



    input.value = "";
    id++;
});