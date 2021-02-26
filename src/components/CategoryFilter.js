import PropTypes from 'prop-types';

const CategoryFilter = ({ event }) => {
  const categoryList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'All'];

  return (
    <div>
      <select name="categories" onChange={event}>
        {categoryList.map(item => <option selected={item === 'Action' ? 'selected' : null} value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  event: PropTypes.func.isRequired,
};
