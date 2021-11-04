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
import '../../../Style/Search/btns.css';
import {CContext} from '../../Global/CategoriesContext';

function ConfirmationDialogRaw(props) {
    
    const { onClose, value: valueProp, open, categoryKey, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);
    
    const subCategories = useContext(CContext).categories.filter(cat=>cat.key == categoryKey)[0]?.subCategories;
    console.log(subCategories);
    
    React.useEffect(() => {
        if (!open) {
        setValue(valueProp);
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
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        subCategories? <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
        >
        <DialogTitle>subCategories</DialogTitle>
        <DialogContent dividers>
            <RadioGroup
            ref={radioGroupRef}
            //aria-label="ringtone"
            //name="ringtone"
            value={value}
            onChange={handleChange}
            >
            {subCategories.map((subCategory) => (
                <FormControlLabel
                value={subCategory.key}
                key={subCategory.key}
                control={<Radio />}
                label={subCategory.name}
                />
            ))}
            </RadioGroup>
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

    export default function PopChooseSubCategory(props) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
        setValue(newValue);
        props.setSubCategoryToSearch(newValue)
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Button  onClick={handleClickListItem} variant="contained" id="categorySearchInput" name="categorySearchInput" className="button-no-values">תחום</Button>
        <List component="div" role="group">
        <ConfirmationDialogRaw
            id="ringtone-menu"
            keepMounted
            open={open}
            onClose={handleClose}
            value={value} 
            categoryKey={props.categoryKey}
        />
        </List>
        </Box>
    );
}