import react from 'react';
import ReactDOM from 'react-dom';

const FilterList = ({ filter }) => {
  console.log('f', filter)

  return (
    <div>
      <div className="filter-name">Word:{filter.word}</div>
      <div className="filter-description">Description:{filter.definition}</div>

    </div>
  )
}

export default FilterList;