import React from 'react';
import styles from '../../styles/style.module.css'
function SearchBar() {
  return (
    <div className="relative flex justify-center h-14 mt-14 w-11/12	">
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchMainContainer}
      />
    </div>
  );
}

export default SearchBar;
