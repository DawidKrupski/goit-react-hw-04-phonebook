import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleInput }) => {
  return (
    <>
      <p className={css.find}>Find contacts by name</p>
      <input
        className={css.filter}
        onChange={handleInput}
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="search..."
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
