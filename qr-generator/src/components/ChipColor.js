import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SketchPicker } from 'react-color';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorPicker({ onColorChange }) {
  const mainColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onColorChange(color.hex);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" spacing={1}>
      {mainColors.map((color, index) => (
        <Button
          key={index}
          onClick={() => handleColorChange({ hex: color })}
          sx={{
            width: 'fit-content',
            ':hover': {
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: '2px solid black',
            },
          }}
        >
          <Chip
            sx={{
              backgroundColor: color,
              height: '30px',
              width: '30px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          />
        </Button>
      ))}
      <Button
        onClick={handleClick}
        sx={{
          width: 'fit-content',
          ':hover': {
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: '2px solid black',
          },
        }}
      >
        +
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <SketchPicker color={selectedColor} onChange={handleColorChange} />
          </div>
        </ClickAwayListener>
      </Popper>
    </Stack>
  );
}