import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import '../styles/book_form.css';

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
    setTitle('');
    setCategory('Action');
    document.getElementById('create-book-form').reset();
  };
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'title') {
      setTitle(value);
    } else {
      setCategory(value);
    }
  };

  return (
    <div className="book-form">
      <hr />
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit} id="create-book-form">
        <input type="text" name="title" onChange={handleChange} placeholder="Book Title" />
        <select name="categories" onChange={handleChange}>
          <option selected disabled>Select a category</option>
          {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
        </select>
        <button className="btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BooksForm;
