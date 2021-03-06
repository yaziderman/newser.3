import React from 'react';
import {TextField, IconButton} from '@material-ui/core'


const SearchBox = ({isOpen, onClick, additionalStyles, handleOnSearch}) => {
    const baseStyles = {
        open: {
            width: 210,
        },
        closed: {
            width: 0,
        },
        smallIcon: {
            width: 30,
            height: 30
        },
        icon: {
            width: 40,
            height: 40,
            padding: 5,
            top: 10
        },
        frame: {
            border: 'solid 1px black',
            borderRadius: 5
        }
    };
    
    let textStyle = isOpen ? baseStyles.open : baseStyles.closed;
    textStyle = Object.assign(textStyle, additionalStyles ? additionalStyles.text : {});
    
    const divStyle = Object.assign({}, textStyle, baseStyles.frame, additionalStyles ? additionalStyles.frame : {});
    divStyle.width += baseStyles.icon.width + 5;
    
    return (
        <div style={divStyle}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() => onClick()}>
                
            </IconButton>
            <TextField name='search' style={textStyle} onChange={e => handleOnSearch(e)}/>
        </div>
    );
};
export  default SearchBox;