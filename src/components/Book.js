import PropTypes from 'prop-types';
import '../styles/book.css';

const Book = ({ book, handleRemove }) => (
  <div className="book-cont">
    <div className="book-info">
      <h4>{book.category}</h4>
      <h1>{book.title}</h1>
      <h3>George Martin</h3>
      <div className="book-actions">
        <p className="remove">Comments</p>
        <button className="remove" onClick={() => handleRemove(book)} type="button">Remove</button>
        <p className="remove">Edit</p>
      </div>
    </div>
    <div className="book-progress">
      <img src="/imgs/progress.png" alt="progress circle" />
      <div>
        <h1>84%</h1>
        <p>Completed</p>
      </div>
    </div>
    <div className="book-chapter">
      <p>CURRENT CHAPTER</p>
      <h5>Chapter 17</h5>
      <button className="btn" type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.exact(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    },
  ).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
