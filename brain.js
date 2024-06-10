
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


    const leftSidebar=document.getElementById('left-sidebar')
    const rightArrow=document.getElementById('left-close-right')
    const leftArrow=document.getElementById('left-close')

console.log(rightArrow);

leftArrow.addEventListener("click",()=>{
   leftSidebar.classList.add('closed')
   leftArrow.style.display='none'
//    leftSidebar.style.display='none'
rightArrow.style.display='block';

})
rightArrow.addEventListener("click",()=>{
    rightArrow.style.display='none'
    leftArrow.style.display='block'
    leftSidebar.classList.remove('closed')
})