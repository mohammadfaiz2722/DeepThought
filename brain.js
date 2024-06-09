
// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('user-list');
        const userDiv = document.createElement('p');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
                   
                        <p>${data.des}</p>
                    `;
        userList.appendChild(userDiv);



    })
    .catch(error => console.error('Error fetching data:', error));


const leftSidebarArrow=document.getElementById('left-close')
const leftSidebar=document.getElementById('left-sidebar')
console.log(leftSidebarArrow);

leftSidebar.addEventListener("click",()=>{
   leftSidebar.classList.add('closed')

})