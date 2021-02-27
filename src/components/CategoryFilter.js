import PropTypes from 'prop-types';

const CategoryFilter = ({ event }) => {
  const categoryList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <select name="categories" onChange={event}>
        <option value="All" selected>All</option>
        {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  event: PropTypes.func.isRequired,
};
