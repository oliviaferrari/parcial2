import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/category')
      .then((response) => setCategories(response.data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
