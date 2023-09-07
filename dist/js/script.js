class Task{
    constructor(checkbox, descr, rename, trash, parent){
        this.checkbox = checkbox;
        this.descr = descr;
        this.rename = rename;
        this.trash = trash;
        this.parent = document.querySelector(parent);
    }
    render(){
        const element = document.createElement('div');
        element.classList.add('main__tasking-task');
        element.innerHTML = `
            <div class="${this.checkbox}"></div>
            <h5 class="main__tasking-task_descr">${this.descr}</h5>
            <div class="main__tasking-task_rename">
                <img src="${this.rename}" alt="">
            </div>
            <div class="main__tasking-task_delete">
                <img src="${this.trash}" alt="">
            </div>
        `;
        this.parent.append(element);
       
    }
}



const button = document.querySelector('.main__add-btn');

const arr = [];
let id = 0;
button.addEventListener('click', (e) =>{
    const input = document.querySelector('.main__add-input');
    e.preventDefault();
    if(input.value.trim() != ''){
        arr.push({id: id, text: input.value});
        new Task('main__tasking-task_checkbox', `${input.value}`, './icons/task/pencil (1) 1.svg', './icons/task/recycle-bin 1.svg', '.main .main__tasking .container').render();
       
        const checkbox = document.querySelector('.main__tasking-task_checkbox');
        checkbox.addEventListener('click', (Event) => {
            checkbox.classList.toggle('active');
        });

        document.querySelectorAll('.main__tasking-task_delete').forEach((btn, i) =>{
            btn.addEventListener('click', () =>{
                btn.parentNode.remove();
                arr.splice(i, 1);
                console.log(arr);
            });
        });

    }
    input.value = '';
    id++;
});












