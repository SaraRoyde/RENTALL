import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import '../../../Style/Search/btns.css';
import {CContext} from '../../Global/CategoriesContext';

function ConfirmationDialogRaw(props) {
    const categories = useContext(CContext).categories;
    console.log(categories);
    
    const { onClose, value: valueProp, open, ...other } = props;
    const [price, setPrice] = React.useState(valueProp.price);
    const [time, setTime] = React.useState(valueProp.time);
    const radioGroupRef = React.useRef(null);
    const sysDatesList = ["year", "month", "week", "day", "hour", "minute"];

    React.useEffect(() => {
        if (!open) {
        //setValue(valueProp);
        //setDistance(valueProp.distance);
        //setWay(valueProp.way);
        setPrice(valueProp.price);
        setTime(valueProp.time);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
        radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        //onClose(value);
        onClose({time,price});
    };

    const handleTimeChange = (event) => {
        //setValue(event.target.value);
        //setAge(event.target.value);
        setTime(event.target.value);
        
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

    return (
        categories? <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
        >
        <DialogTitle>זמן</DialogTitle>
        <DialogContent dividers>
            {/* <RadioGroup
            ref={radioGroupRef}
            //aria-label="ringtone"
            //name="ringtone"
            value={value}
            onChange={handleChange}
            >
            {categories.map((category) => (
                <FormControlLabel
                value={category.key}
                key={category.key}
                control={<Radio />}
                label={category.category}
                />
            ))}
            </RadioGroup> */}
            <TextField id="outlined-basic" type="number" label="זמן בדקות" variant="outlined" required onChange={handleTimeChange}/>
            {/* <div>דקות</div> */}
            <br/><br/>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" required>מחיר</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={price}
    label="אופן"
    onChange={handlePriceChange}
  >
    {sysDatesList.map((date)=>(<MenuItem value={date}>{date}</MenuItem>))}
  </Select>
</FormControl>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleCancel}>
            Cancel
            </Button>
            <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
        </Dialog>: <div></div>
    );
    }

    ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    };

    export default function PopChoosePrice(props) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
            props.setPriceToSearch(newValue)
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Button  onClick={handleClickListItem} variant="contained" id="categorySearchInput" name="categorySearchInput" className="button-no-values">מחיר</Button>
        <List component="div" role="group">
        <ConfirmationDialogRaw
            id="choose-distance"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
            setPriceToSearch={props.setPriceToSearch}
        />
        </List>
        </Box>
    );
}