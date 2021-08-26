document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("counter") == null) {
        localStorage.setItem("counter", "0");
    } 
    let counter = parseInt(localStorage.getItem("counter"));
    // read localStorage and print them out
    if(counter >= 1) {
    for(let i=1; i<=counter;i++) {
        const li = document.createElement('li');
        
        const toDo:string = localStorage.getItem("toDo" + i);
        if (toDo === null) continue;
        li.innerHTML = toDo;
        const ul:HTMLUListElement = document.querySelector('#tasks');
        const btn:HTMLButtonElement = createButton(ul,li,"toDo" + i);
        li.appendChild(btn);
        ul.appendChild(li);
    }
}

    document.querySelector('form').onsubmit = ():boolean => {
        
        const toDo:HTMLInputElement = document.querySelector('[type="text"]');
        const toDoLi:HTMLLIElement = document.createElement('li');
        const ul: HTMLUListElement = document.querySelector('#tasks');
        
        if (toDo.value.search(/\w+((\s\w+)?){1,}$/g) !== 0) {
            alert('제대로 입력하지 않으셨네요!');
            return false;
        }
        

        counter++;
        
        toDoLi.innerHTML = toDo.value;
        localStorage.setItem("toDo" + counter,toDo.value);
        localStorage.setItem("counter",String(counter));
        const btn = createButton(ul,toDoLi, "toDo" + counter);
        toDoLi.appendChild(btn);
        
        ul.appendChild(toDoLi);
        toDo.value = null;
        return false;
    }
})

function createButton(ul:HTMLUListElement,li:HTMLLIElement,key:string):HTMLButtonElement {
    const btn = document.createElement('button');
    btn.innerHTML='X'
    btn.onclick = () => {
        ul.removeChild(li);
        localStorage.removeItem(key);
        let counter:number = parseInt(localStorage.getItem('counter'));
        
        localStorage.setItem('counter',String(counter));
    }
    return btn;
}

