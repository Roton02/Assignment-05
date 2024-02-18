
let count = 1;
const allBtn =document.getElementsByClassName('sit-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function(e){
       const btnValue = e.target.innerText;
        // decrement Seat count section
        const decrementCount = parseInt(document.getElementById('sit-ount-decrement').innerText)
        const decri = decrementCount - count;
        document.getElementById('sit-ount-decrement').innerText = decri;
        // ----------selection section -------------------
        const orederSit = parseInt(document.getElementById('sit-count').innerText);
        const increment = orederSit + 1
        document.getElementById('sit-count').innerText = increment;
        // Append Html 
        
       const selectedItem =  document.getElementById('append-html')
        const li = document.createElement('li')
        li.innerHTML = `${btnValue} &nbsp; &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  Economoy
        &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  550`
        selectedItem.appendChild(li)
        
    })
}



