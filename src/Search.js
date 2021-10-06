import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Search({ emails, searchClicked , searchValueChanged}) {
  return (
    <div className="search">
      <InputGroup className="mb-3">
        <FormControl
          id="search-input"
          placeholder="Search by subject"
          aria-label="Search by subject"
          onChange={() => searchValueChanged(document.getElementById("search-input").value)}
        />
        <Button variant="outline-secondary" onClick={(event) => {
          event.preventDefault()
          // thanks dave and chasten for the preventDefault tip earlier!
          searchClicked(emails, document.getElementById("search-input").value)
        }}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default Search;