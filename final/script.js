

const demo = document.querySelector('#demo');
const xml = new XMLHttpRequest();
xml.open("GET","http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id='4d463112'&app_key='b0890a43c6ba84a3ae201a52ab731e6f'",true);
xml.onload = function(){
    if(this.status === 200){
        const tableBody = document.querySelector('#tableBody');
        // const tr = document.createElement('tr');
        const api = JSON.parse(this.responseText);
        let items = ``;
        api.forEach(function(item){
            items += `<tr>
               <td>${item.id}</td>
               <td>${item.title}</td>
               <td>${item.body}</td>
               </tr>
            `;
        });
        tableBody.innerHTML = items;

    }
}

xml.send();
