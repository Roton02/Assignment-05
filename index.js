
let count = 1;
let cart = [];
const allBtn =document.getElementsByClassName('sit-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function(e){
       const btnValue = e.target.innerText;
       e.target.style.backgroundColor = "#1DD100";
       cart.push(btnValue)
    //    console.log(cart);
       for (const btnName of cart) {
         if (btnName) {
           
         } else {
           counterArray[btnName] = " ";
         }
       }
        // decrement Seat count section
        const decrementCount = parseInt(document.getElementById('sit-ount-decrement').innerText)
        const decri = decrementCount - count;
        document.getElementById('sit-ount-decrement').innerText = decri;
        // ----------selection section -------------------
        const orederSit = parseInt(document.getElementById('sit-count').innerText);
        const increment = orederSit + count
        document.getElementById('sit-count').innerText = increment;
        if(increment > 4){
            alert('You have already Four sit  ')
            return 
        }
        // Append Html 
        
       const selectedItem =  document.getElementById('append-html')
        const li = document.createElement('li')
        li.innerHTML = `${btnValue} &nbsp; &nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  Economoy
        &nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  550`
        selectedItem.appendChild(li)
        // Total section 
        const TotalValue = parseInt(document.getElementById('totalValue').innerText);
        const grandTotal = parseInt(document.getElementById('grand_total-value').innerText)
        const total = TotalValue + 550;
        document.getElementById('totalValue').innerText = total
        document.getElementById('grand_total-value').innerText = total
        
        
    })
}

const applyBtn = document.getElementById('Apply'); 
applyBtn.addEventListener('click', function(e){
    const TotalValue = parseInt(document.getElementById('totalValue').innerText);
    const grandTotal = parseInt(document.getElementById('grand_total-value').innerText)
   const inputFeild =  document.getElementById('input-feild');
   const apply = document.getElementById('Apply');
   const inputValue = inputFeild.value;
   if(inputValue==='NEW15'){
    document.getElementById('grand_total-value').innerText = TotalValue - TotalValue*0.15;
    inputFeild.hidden = true;
    apply.hidden = true;
   }else if(inputValue==='Couple 20'){
    document.getElementById('grand_total-value').innerText = TotalValue - TotalValue*0.2;
    inputFeild.hidden = true;
    apply.hidden = true;
   }
   else{
    alert('Invalid Cupon')
   }

})

const modal = document.getElementById('next-btn')


