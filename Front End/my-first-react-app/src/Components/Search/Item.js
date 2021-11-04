import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../Style/Search/cards.css';
import {IContext} from '../Global/ItemsContext';

export default function Item() {
    const itemsList = useContext(IContext);
    // alert(itemsList.items);
    // console.log(itemsList, itemsList.items)
    const item = itemsList.items[0];

  return (
      itemsList.items.length > 0 ? ( <div className="card-div">
            <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.category}   {item.subCategory}
            </Typography>
            <Typography variant="h5" component="div">
                {item.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ---
            </Typography>
            <Typography variant="body2">
                {item.details}
            <br />
            <img className="card-image" src={`/images/${item.images[0]}`} alt={item.name}></img>
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">פרטים נוספים</Button>
        </CardActions>
        </Card>
      </div>) : (<div></div>)
    
  );
}