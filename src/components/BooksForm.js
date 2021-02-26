import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const categoryList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createBook({
      id: Math.random() * 100,
      title,
      category,
    }));
  };
  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} />
        <select name="categories" onChange={handleChange}>
          <option selected disabled>Select a category</option>
          {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BooksForm;
