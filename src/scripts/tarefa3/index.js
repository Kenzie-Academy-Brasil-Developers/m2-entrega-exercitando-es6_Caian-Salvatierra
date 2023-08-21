import { bookStoreBooks } from "./database.js";
import { userTypeDiscount } from "./database.js";


const findBooksByCategory = (bookList, category) =>{
    const filter = bookList.filter(books => books.categories.includes(category))

    return filter ;
}

console.log(findBooksByCategory(bookStoreBooks,"Aventura")); 


const findBookById = (bookList, bookId) => {
    return  bookList.find(books => books.id === bookId);
}

console.log(findBookById(bookStoreBooks, 2));


const sellBook = (bookList, bookId, userType = 'normal') => {

    const book = findBookById(bookList,bookId);

     if(book === undefined || book.quantity <= 0){
       return 'Livro indisponível para compra.' 
        } else{
            const discount = userTypeDiscount[userType];
            const price = book.price *(1 - discount/100);

            book.quantity--;

                return `Livro ${book.title} vendido com sucesso por R$ ${price.toFixed(2)} (${discount}%) de desconto.`
     }

}
console.log(sellBook(bookStoreBooks, 8, "platinum"));



const calculateAverageRating = (bookList, bookId) => {
    
    const book = findBookById(bookList,bookId);
     
        if(book === undefined){
            return 'Livro não encontrado.'
      } else {
         if (book.ratings.length > 0 ) {
            const total =  book.ratings.reduce((acc , cur ) => acc + cur, 0 ) / book.ratings.length;
            
            return `O livro ${book.title} possui uma média de avaliação igual a ${total.toFixed(2)}`

         } else {
            return `O livro ${book.title} não possui nenhuma avaliação.`
         }
      }
}

console.log(calculateAverageRating(bookStoreBooks, 2));