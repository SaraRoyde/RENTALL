import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    console.log(props.category.category);
  //const [category, setCategory] = React.useState('');
  let category = 0;

  const handleChange = (event) => {
    props.setCategory(event.target.value);
    //alert(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {props.category.map((cat) => (<MenuItem value={cat.key}>{cat.category}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}