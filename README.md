{
  books {
    id
    title
    price
  }
}

mutation AddBook($addBookArgs:AddBookArgs!){
  addBook(addBookArgs:$addBookArgs)
}

{
bookById(bookId:3){
  id,
  title,
  price
}
}
mutation deleteBook($bookId:Int!){
 deleteBook(bookId:$bookId)
}

