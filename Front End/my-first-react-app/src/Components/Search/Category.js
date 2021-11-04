import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../Style/Search/cards.css';
// import {CContext} from '../Global/CategoriesContext';

export default function Category(props) {
    
    const category = props.category;

  return (
        category? ( <div className="card-div">
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {category.category}
                </Typography>
                <Typography variant="body2">
                    {category.image? (<img className="card-image" src={`/images/${category.image}`} alt={category.name}></img>): (<div></div>)}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">פרטים נוספים</Button> */}
            </CardActions>
        </Card>
      </div>) : (<div></div>)
    
  );
}