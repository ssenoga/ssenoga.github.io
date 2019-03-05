const pay = document.querySelector('#payout');
const paying = document.querySelector('.paying');

class Pay{
    checkOut(){
        document.querySelector("#list").addEventListener('change',function(e){
            if(e.target.className = 'quantity'){
                // for creating
                const total = document.createElement('p');
                const container = document.getElementById('my-total');

                const quantity = e.target.value;
                // get the price of the items from the list
                const price = e.target.parentNode.parentNode.firstElementChild.nextElementSibling.innerHTML;

                // get the item name
                const name = e.target.parentNode.parentNode.firstElementChild.innerHTML;
                

                // calculate the amount
                const amount = Number(price) * Number( quantity);
                // create the tr
                
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${amount}</td>
                `;
                pay.appendChild(tr);
                paying.classList +=" bg-success";
                

            }
        });
    }
}