const div:HTMLDivElement = document.querySelector('#div');

document.querySelector('body').addEventListener('click',function(e:MouseEvent)  {
    div.innerHTML += `<br>capture 단계 : ${this.tagName} 태그 ${e.type}`
    
})

document.querySelector('[type="button"]').addEventListener('click',function(e:MouseEvent) {
    div.innerHTML += `<br>bubble 단계 : ${this.tagName} 태그 ${e.type}`
    
},true)

document.querySelector('body').addEventListener('click',function(e:MouseEvent)  {
    div.innerHTML += `<br>bubble 단계 : ${this.tagName} 태그 ${e.type}`
})