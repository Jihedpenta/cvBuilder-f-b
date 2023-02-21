import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  datePicker: {
    '& .react-datepicker__input-container': {
      display: 'block',
    },
    '& .react-datepicker__input-container > input': {
      width: '100%',
      height: '100%',
      padding: '10px',
      fontSize: '16px',
      lineHeight: '24px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
    },
    '& .react-datepicker__triangle': {
      display: 'none',
    },
    '& .react-datepicker-popper': {
      zIndex: 1,
    },
    '& .react-datepicker__header': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '4px 4px 0 0',
    },
    '& .react-datepicker__day-name': {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      lineHeight: '32px',
      textTransform: 'uppercase',
      width: 'calc(100% / 7)',
      display: 'inline-block',
      textAlign: 'center',
    },
    '& .react-datepicker__day': {
      color: theme.palette.text.primary,
      lineHeight: '32px',
      width: 'calc(100% / 7)',
      display: 'inline-block',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderRadius: '50%',
      },
    },
    '& .react-datepicker__day--selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderRadius: '50%',
    },
    '& .react-datepicker__day--today': {
      fontWeight: 'bold',
    },
    '& .react-datepicker__month-container': {
      display: 'inline-block',
      verticalAlign: 'top',
      marginRight: '10px',
    },
  },
}));

function DatePickerWrapper({ label, selected, onChange, ...otherProps }) {
  const classes = useStyles();

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      {...otherProps}
      dateFormat="dd/MM/yyyy"
      className={classes.datePicker}
    >
      {({ inputRef, onClick }) => (
        <TextField
          variant="outlined"
          inputRef={inputRef}
          label={label}
          onClick={onClick}
        />
      )}
    </DatePicker>
  );
}

export default DatePickerWrapper;