import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
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
};

export default Book;
