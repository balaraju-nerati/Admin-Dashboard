
// Function of single user

document.addEventListener('DOMContentLoaded', function() {
    const checkOne = document.querySelectorAll('.check-one')
    const singleDelete = document.querySelectorAll('.delete-one');
    const editButtons = document.querySelectorAll('.editBtn');
    const saveButtons = document.querySelectorAll('.saveBtn');


    //To edit and save at the same row itself

    editButtons.forEach((editBtn, index) => {
        editBtn.addEventListener('click', function() {
            toggleEditMode(index);
        });
    });

    saveButtons.forEach((saveBtn, index) => {
        saveBtn.addEventListener('click', function() {
            saveChanges(index);
        });
    });

    function toggleEditMode(index) {
        const row = document.getElementById('user' + index);
        const dataSpans = row.querySelectorAll('.data');
        const editInputs = row.querySelectorAll('.edit');
        const editButton = row.querySelector('.editBtn');
        const saveButton = row.querySelector('.saveBtn');

        dataSpans.forEach(span => span.style.display = 'none');
        editInputs.forEach(input => input.style.display = 'block');
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
    }

    function saveChanges(index) {
        const row = document.getElementById('user' + index);
        const dataSpans = row.querySelectorAll('.data');
        const editInputs = row.querySelectorAll('.edit');
        const editButton = row.querySelector('.editBtn');
        const saveButton = row.querySelector('.saveBtn');

        dataSpans.forEach((span, i) => {
            span.textContent = editInputs[i].value;
        });

        dataSpans.forEach(span => span.style.display = 'inline');
        editInputs.forEach(input => input.style.display = 'none');
        editButton.style.display = 'block';
        saveButton.style.display = 'none';
    }



    // For to check a single row and enable delete button in the row.

    checkOne.forEach(function(userCheck,index){
        userCheck.addEventListener('change',function(){
            if(this.checked){
                singleDelete[index].disabled = false;
            }else{
                singleDelete[index].disabled = true;
            }
        })
    })

    // When a row checkbox is enabled Delete button is enabled and deletes the row.

    singleDelete.forEach(function(items) {
        items.addEventListener('click', function() {
            const index = this.getAttribute('itemIndex');
            const itemToDelete = document.getElementById("user"+index);
            itemToDelete.parentNode.removeChild(itemToDelete);        
        });
    });



     //For to check all checkboxes when top checkbox is checked

     const checkAll = document.getElementById("checkAll");
     checkAll.addEventListener('change',function(){
        const deleteAll = document.getElementById('deleteAll');
        deleteAll.style.display = "block";
         checkOne.forEach(userCheck => {
             userCheck.checked= this.checked;
             
         });
     });
 
     checkOne.forEach(userCheck =>{
         userCheck.addEventListener('change',function(){
             const allChecked = Array.from(checkOne).every(userCheck=>userCheck.checked);
             checkAll.checked = allChecked;
         });
         
     });


     const deleteAll = document.getElementById('deleteAll')
     deleteAll.addEventListener('click',function(){
        const user = document.getElementById('allUsers')
        user.innerHTML='';
     })
 

     //Users List based upon the search 
    

});



document.addEventListener('DOMContentLoaded',function(){


    //Pagination

    const usersPerPage = 10; // Number of items to show per page
    const  users = document.querySelectorAll('.user');
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Function to show items for a specific page
    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * usersPerPage;
        const endIndex = pageNumber * usersPerPage;

        users.forEach(function(user, index) {
            if (index >= startIndex && index < endIndex) {
                user.style.display = 'flex';
            } else {
                user.style.display = 'none';
            }
        });
    }

    // Generate pagination links
    const pagination = document.querySelector('.pagination');
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', function() {
            showPage(i);
        });
        pagination.appendChild(li);
    }   
    showPage(1); // Show the first page by default


})


/* -----------------------*/





