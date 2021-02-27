import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../actions';
import Book from './Book';

const BooksList = () => {
  const bookList = useSelector(state => state.book.booklist);
  const dispatch = useDispatch();
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(item => (
            <Book book={item} key={`${item} + ${Math.random(0, 100)}`} handleRemove={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
