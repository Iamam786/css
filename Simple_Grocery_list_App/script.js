let grocery = document.getElementById('grocery');

grocery.addEventListener('submit', addItem)
function addItem(e) {
    e.preventDefault();
    let data = this.elements.writeList.value;
    let list = document.querySelector('ol');
    let item = document.createElement('li');
   
    let text = document.createElement('p');
    text.textContent = data;
    this.elements.writeList.value = "";
    item.appendChild(text);
    
    list.appendChild(item)

    let rmvBtn = document.createElement('div');
    rmvBtn.classList.add('remove');
    item.append(rmvBtn);
    rmvBtn.addEventListener('click', deleteItem)
    item.addEventListener('click', doneItem)
}

function deleteItem(e) {
    this.preventDefault.remove();

}
function doneItem(e) {
    this.classList.toggle('done');
}