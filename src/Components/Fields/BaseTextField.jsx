import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const BaseTextField = ({ style, width, variant, value, label, onChange, onKeyUp, ...props }) => {
    return (
        <TextField
            style={style}
            width={width}
            variant={variant}
            label={label}
            value={value}
            onChange={onChange}
            InputProps={{
                onKeyUp,
            }}
            { ...props }
          />
    )
}

BaseTextField.propTypes = {
    style: PropTypes.objectOf(PropTypes.any),
    width: PropTypes.number,
    variant: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
}

export default BaseTextField;
