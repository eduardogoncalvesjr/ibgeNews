import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function NewsFilter() {
  const { filter, setFilter } = useContext(DataContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <div className="input-group">
      <label className="form-label">
        <input
          type="radio"
          value="all"
          name="options"
          checked={ filter === 'all' }
          onChange={ handleOnChange }
          className="form-check-input me-1"
        />
        All
      </label>
      <label className="form-label ms-3">
        <input
          type="radio"
          value="noticias"
          name="options"
          checked={ filter === 'noticias' }
          onChange={ handleOnChange }
          className="form-check-input me-1"
        />
        Noticias
      </label>
      <label className="form-label ms-3">
        <input
          type="radio"
          value="releases"
          name="options"
          checked={ filter === 'releases' }
          onChange={ handleOnChange }
          className="form-check-input me-1"
        />
        Releases
      </label>
    </div>
  );
}
