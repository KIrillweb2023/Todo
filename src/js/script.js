function taskHTML(checkbox, descr, rename, trash){
    const element = document.createElement('div');
    element.classList.add('main__tasking-task');
    //помещаю верстку в элемент
    element.innerHTML = `
        <div class="${checkbox}"></div>
        <h5 class="main__tasking-task_descr">${descr}</h5>
        <div class="main__tasking-task_rename">
            <img src="${rename}" alt="">
        </div>
        <div class="main__tasking-task_delete">
            <img src="${trash}" alt="">
        </div>
    `;
    //помещаем верстку в родителя элемента
    const parent = document.querySelector('.main .main__tasking .container');
    parent.append(element);
}

const arr = [];
let id = 0;

const btn = document.querySelector('.main__add-btn');
btn.addEventListener('click', () =>{
    const input = document.querySelector('.main__add-input');
   
    if(input.value.trim() != ""){
        arr.push({ id: id, text: input.value });
        taskHTML('main__tasking-task_checkbox checkbox', `${input.value}`, './icons/task/pencil (1) 1.svg', './icons/task/recycle-bin 1.svg');

        document.querySelectorAll('.main__tasking-task_delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentNode.remove();
                arr.splice(i, 1);
                console.log(arr);
            });
        });
        document.querySelectorAll('.checkbox').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.classList.toggle('active');
            });
        });
       
    console.log(arr);
    }
    input.value = "";
    id++;
});