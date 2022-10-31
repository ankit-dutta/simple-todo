let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',additem);

// Delete event
itemList.addEventListener('click',remove);

// Edit event
itemList.addEventListener('click',edit);

//filter event
filter.addEventListener('keyup',filteritems)


// Add items
function additem(e){
    
    e.preventDefault();
    
    // Get input value
    let newitem = document.getElementById('item').value;
    let newitem2 = document.getElementById('item2').value;
    //  console.log(newitem2)

     // checking my input is blank or not if blank then return 
        if(newitem == "" && newitem2 == ""){
            alert("Enter The Item Name");
            return;
        }


    // Create new li element
    let li = document.createElement('li');
    // Add class 
    li.className = 'list-group-item';
    // Add text with input value
    li.appendChild(document.createTextNode(newitem +" "+newitem2));
    
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

//Filter items

function filteritems(e){
    //convert text to lower case
    let text = e.target.value.toLowerCase();
    //Get list
    let items = itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemname = item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = "none"
        }
    })
}