import React from "react";
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

interface QueryTextProps {
  queryText: string
};

interface OnSearchProps {
  onSearch: (queryText: string) => void
}

type SearchProps = QueryTextProps & OnSearchProps;

const Search: React.FC<SearchProps> = props => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}} sx={{ margin: '20px;' }}>
      <SearchIcon />
      <Input />
    </Grid>
  )
}

export default Search;