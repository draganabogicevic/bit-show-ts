import React from "react";
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface QueryTextProps {
  queryText: string
};

interface OnSearchProps {
  onSearch: (queryText: string) => void
}

type SearchProps = QueryTextProps & OnSearchProps;

const Search: React.FC<SearchProps> = props => {
const [searchText, setSearchText] : [string, (searchText: string) => void] = React.useState("");

const handleChange = (inputText: string) => {
  props.onSearch(inputText);
  setSearchText(inputText);
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
}

const clearInput = () => {
  setSearchText("");
  handleChange("");
}
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} sx={{ margin: '20px;' }}>
      <form onSubmit={(e) =>handleSubmit(e)}>
        <SearchIcon />
        <Input
          value={searchText}
          onChange={e => handleChange(e.target.value)}
        />
        <SearchOffIcon onClick={clearInput}/>
      </form>
    </Grid>
  )
}

export default Search;