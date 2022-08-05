
const itemInput = document.querySelector('.item-input')
const itemList = document.querySelector('.list')
const InputButton = document.querySelector('.add-btn');
const changeContent = document.querySelector('#change-title')
const box = document.querySelector('.box');
const output = document.querySelector('.output');

box.addEventListener('mousemove', fireEvent);
InputButton.addEventListener('click', addItem);
changeContent.addEventListener('click', changeTitle);


function addItem(e){
    e.preventDefault()

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('all-items');
    itemDiv.style.background = '#f4f4f4';
    itemDiv.style.padding = '10px';
    
    const liList = document.createElement('li')
    liList.innerText = itemInput.value;
    liList.classList.add('item')
    itemDiv.appendChild(liList)

    itemInput.value = '';
    itemList.appendChild(itemDiv)
}

function changeTitle(){
    document.getElementById('title').textContent = 'hello';
    document.querySelector('.container').style.backgroundColor = "gray";
}

// let body = document.querySelector('.container');

function fireEvent(e){
    output.innerHTML = '<h3> MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>';
    box .style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}