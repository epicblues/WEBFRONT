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
        const ul:HTMLUListElement = document.querySelector('#tasks');
        if(toDo.value.trim().length ===0 || toDo.value[0] ==' ') { // 유사 유효성 검사
            alert('write something only white space not allowed!')
            toDo.value=null;
            return false;
        } else if (toDo.value.indexOf("<") !== -1) {
            alert('writing tags not allowed!');
            toDo.value=null;
            return false;
        } 
        

        counter++;
        toDoLi.innerHTML = toDo.value.replace("<","");
        
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

