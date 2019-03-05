const xhr = new XMLHttpRequest();
xhr.open("GET","js/items.json",true);
xhr.onload = function(){
  if(this.status === 200){
    // const self = this;
    const item = JSON.parse(this.responseText);
    let list = '';
    item.forEach(function(items){
    
      list += `
       <tr>
       <td>${items.id}</td>
       <td>${items.name}</td>
       <td>${items.price}</td>
       <td><input type="number" class="form-control" min='1' value='1'></td>

       <td><input type="submit" class="btn btn-primary add" value="Add to list"></td>
       </tr>
      `;
    });
   document.getElementById('item-body').innerHTML = list;


    document.getElementById('item-body').addEventListener('keypress',function(e){
      let quantity;
      if(e.target.classList.contains('form-control')){
        quantity = e.target.value;
      }
      console.log(quantity);
      document.getElementById('item-body').addEventListener('click',function(x){
        if(x.target.classList.contains('add')){
          
           // get the price from the items section
          let price = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerTnext;
          // get the items names
          const item = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
          // get the amount
          price = price * quantity;
           // list section
          const listBody = document.getElementById('list-body');
          listBody.innerHTML += `
            <tr>
              <td>${item}</td>
              <td>${quantity}</td>
              <td>${price}</td>
            </tr>
          `;
          
          
          console.log(quantity);
        }
      });
    });
  }
}

xhr.send();



