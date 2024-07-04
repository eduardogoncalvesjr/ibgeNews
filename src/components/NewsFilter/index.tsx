import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function NewsFilter() {
  const { filter, setFilter } = useContext(DataContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="all"
          name="options"
          checked={ filter === 'all' }
          onChange={ handleOnChange }
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="noticias"
          name="options"
          checked={ filter === 'noticias' }
          onChange={ handleOnChange }
        />
        Noticias
      </label>
      <label>
        <input
          type="radio"
          value="releases"
          name="options"
          checked={ filter === 'releases' }
          onChange={ handleOnChange }
        />
        Releases
      </label>
    </div>
  );
}
