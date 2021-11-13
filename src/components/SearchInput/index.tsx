import { InputAdornment, TextField } from "@mui/material"

const SearchInput = () => {
  return (
    <TextField
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src="assets/search.svg" alt="Search" />
          </InputAdornment>
        )
      }}
      placeholder="Buscar"
    />
  )
}

export default SearchInput
