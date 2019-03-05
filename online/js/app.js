
const product = new Product;

const ui = new UI;

const output = new Pay;

product.name().then(data =>{
    const z = data;
   z.forEach(da =>{
       ui.showProducts(da);
   });
   output.checkOut();
});