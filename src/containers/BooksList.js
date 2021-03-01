import { useDispatch, useSelector } from 'react-redux';
import { filterBooks, removeBook } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/booklist.css';

const BooksList = () => {
  const bookList = useSelector(state => state.book.booklist);
  const currentFilter = useSelector(state => state.filter.current);
  const dispatch = useDispatch();

  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };

  const handleCategory = e => {
    dispatch(filterBooks(
      e.target.value,
    ));
  };

  return (

    <div>
      <div className="navbar">
        <div className="first-nav">
          <span className="bookstore-cms">Bookstore CMS</span>
          <span className="books">Books</span>
          <CategoryFilter event={handleCategory} />
        </div>
        <div className="oval">
          <img src="/imgs/user.png" alt="user-icon" />
        </div>
      </div>
      <div className="book-list">
        {bookList.filter(item => (currentFilter === 'All' ? true : item.category === currentFilter)).map(item => (
          <Book book={item} key={`${item} + ${Math.random(0, 100)}`} handleRemove={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
