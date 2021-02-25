import PropTypes from 'prop-types';

const Book = ({ book, handleRemove }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button onClick={() => handleRemove(book)} type="button">Remove</button>
    </td>
  </tr>
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
