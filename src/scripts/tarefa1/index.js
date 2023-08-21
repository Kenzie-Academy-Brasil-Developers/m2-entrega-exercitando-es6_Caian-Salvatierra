 

 const calculateTotalCost = (customerNam, products, discount = 0) => {
    const soma = products.reduce((acc,cur) => acc + (cur.price * cur.quantity), 0)
    if(discount > 0){
    return `Olá, ${customerNam}! O total da sua compra é R$${soma * (1 - (discount/100))}   (${discount}% de desconto).`
    } else{
        return  `Olá ${customerNam}! o total da sua compra é ${soma} (sem desconto)`
    }
 }
  
 console.log(calculateTotalCost("joão", productsList));