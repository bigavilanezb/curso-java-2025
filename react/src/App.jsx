import books from './data/books.json';
import Book from './components/Book';

const App = () => {
  return (
    <>
      {
        books.map(book => <Book key={book.title} book={book} />)
      }
    </>
  )
}

export default App