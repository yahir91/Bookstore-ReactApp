import { useDispatch, useSelector } from 'react-redux';
import { removeBook, filterBooks } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

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
      <CategoryFilter event={handleCategory} />
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>

          {bookList.filter(item => (currentFilter === 'All' ? true : item.category === currentFilter)).map(item => (
            <Book book={item} key={`${item} + ${Math.random(0, 100)}`} handleRemove={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
