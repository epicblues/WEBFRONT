const names = ['wonsun', 'jaemoonlee', 'kitae', 'gracehwang'];
let print = '';
names.forEach((name) => {
    print += name + ' ';
})

console.log(print);

let max = 0;

names.forEach((value) => {
    if (value.length > max) {
        max = value.length
    } 
})

for(let name of names) {
    if(name.length === max) {
        console.log(name);
        break;
    }
}

console.log(names.sort());