class Product {
    async name(){
        const x = await fetch('js/items.json');
        const y = await x.json();

        return y 
    }
}