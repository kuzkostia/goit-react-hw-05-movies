import { useState, useEffect } from 'react';
import { InputSearch, ButtonSearch } from './Form.module';
import { useLocation } from 'react-router-dom';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('query');
    setQuery(queryParam || '');
  }, [location]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <ButtonSearch type="submit" disabled={!query}>
        Search
      </ButtonSearch>
    </form>
  );
};

export default Form;
