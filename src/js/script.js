const btn = document.querySelector('.main__add-btn');
const input = document.querySelector('.main__add-input');


let arr = [];    // База данных под таски 
let id = 0;      // Уникальный индефикатор для каждого созданого таска

//Повесил обработчик на кнопку
btn.addEventListener('click', () =>{
    if(input.value.trim() != ""){
        arr.push({ id: id, text: input.value });
        new Task('checkbox', `${input.value}`, './icons/task/pen.svg', './icons/task/recycle.svg', '.taskings').render();
        //Вынес все необходимое по переменным
        const checkbox = document.querySelector('.checkbox');
        const descr = document.getElementById('text');
        const checkboxFull = document.getElementById('forCheckings');
        const fullDelete = document.getElementById('fullDelete');
        const removeBtn = document.querySelectorAll('.delete');
        //Место для вызова функций
        activeClickCheckbox(checkbox, descr, checkboxFull);
        removeTask(removeBtn, fullDelete);
    }
    input.value = "";
    id++;
});
//Выделение элемента с помощью чекбокса
function activeClickCheckbox(btn, descr, full){
    btn.addEventListener('click', () =>{
        btn.classList.toggle('active');
        if(btn.classList.contains('active')){
            descr.style.textDecoration = 'line-through';
            descr.style.color = '#808080';
            descr.style.transition = '0.3s all';
        } else {
            descr.style.textDecoration = '';
            descr.style.color = '';
        }
    });
    // при клике на отметить все
    full.addEventListener('click', () =>{
        full.childNodes[0].classList.toggle('active-red');
        setTimeout(() =>{
            full.childNodes[0].classList.remove('active-red');
        }, 200);
        btn.classList.toggle('active');
        if(btn.classList.contains('active')){
            descr.style.textDecoration = 'line-through';
            descr.style.color = '#808080';
            descr.style.transition = '0.3s all';
        } else {
            descr.style.textDecoration = '';
            descr.style.color = '';
        }
    });
}
//Удаление элемента из массива и из верстки
function removeTask(btn, full){
    btn.forEach((item, i) =>{
        item.addEventListener('click', () =>{
            item.parentNode.remove();
            arr.splice(i, 1);
        });
    });
    // при клике на удалить все
    full.addEventListener('click', () =>{
        full.childNodes[1].classList.add('active-red');
        setTimeout(() =>{
            full.childNodes[1].classList.remove('active-red');
        }, 200);
        btn.forEach(item =>{
            arr.splice(0, arr.length);
            item.parentNode.remove();
        });
    });
}

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
        element.innerHTML = `
            <div class="${this.check}"></div>
            <div id="text" class="descr">${this.text}</div>
            <div class="rename">
                <img src="${this.rename}" alt="">
            </div>
            <div class="delete">
                <img src="${this.basket}" alt="">
            </div>
        `;
        this.parent.prepend(element);
    }
}