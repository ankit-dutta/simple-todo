let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit',additem);

// Delete event
itemList.addEventListener('click',remove);

// Edit event
itemList.addEventListener('click',edit);

// Add items
function additem(e){
    
    e.preventDefault();
    
    // Get input value
    let newitem = document.getElementById('item').value;


    // Create new li element
    let li = document.createElement('li');
    // Add class 
    li.className = 'list-group-item';
    // Add text with input value
    li.appendChild(document.createTextNode(newitem));

     //create edit button
     let editbtn = document.createElement('button');
     // Add class to delete button
     editbtn.className = 'btn btn-info btn-sm float-right edit';
     // add text to edit button
     editbtn.appendChild(document.createTextNode('O'));
     // Append edit btn to li
     li.appendChild(editbtn);


    // Create delete button elemenr
    let deletebtn = document.createElement('button');
    // Add class to delete button 
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));
    // Append delete btn to li
    li.appendChild(deletebtn)


    //  append li to list
    itemList.appendChild(li);

}

//Remove function
function remove(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}

// Edit function
function edit(e){
    if(e.target.classList.contains('edit')){
        let editli = e.target.parentElement;
        editli.contentEditable = true;
        // console.log(editli)
    }
}