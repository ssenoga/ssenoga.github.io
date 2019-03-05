const list = document.querySelector('#list');


class UI{
    showProducts(product){
        const tr = document.createElement('tr');
        let res ='';
            res +=`
        <td>${product.name}</td>
        <td>${product.price} </td>
        <td><select class="quantity">${this.showSelect()}</select></td>
        `;

        tr.innerHTML = res;
        list.appendChild(tr);
    }
    // make quantity select
    showSelect(){
        let select ='';
        for(let i=0;i<16;i++){
            select += `
            <option value =${i}>${i}</option>
            
            `;
        }
        return select;
    }
}