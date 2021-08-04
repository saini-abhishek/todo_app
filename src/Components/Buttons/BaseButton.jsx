import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const BaseButton = ({ style, variant, color, isDisabled, onClick, term }) => {
    return (
        <Button
            style={style}
            variant={variant}
            color={color}
            disabled={isDisabled}
            onClick={onClick}
        >
            {term}
        </Button>
    )
}

BaseButton.propTypes = {
    style: PropTypes.objectOf(PropTypes.any),
    variant: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    term: PropTypes.string,
}

export default BaseButton;
