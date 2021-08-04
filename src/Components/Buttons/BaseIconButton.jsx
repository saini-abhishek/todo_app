import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const BaseIconButton = ({ isDisabled, toolTipTerm, onClick, children }) => {
    return (
        <IconButton
            onClick={onClick}
            disabled={isDisabled}
        >
            {
                toolTipTerm ?
                    <Tooltip title={toolTipTerm} placement="top">
                        {children}
                    </Tooltip>
                    :
                    {children}
            }
        </IconButton>
    )
}

BaseIconButton.propTypes = {
    toolTipTerm: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
}

export default BaseIconButton;
