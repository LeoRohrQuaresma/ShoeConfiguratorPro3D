import { React, useRef, useState } from 'react'
import styles from './ColorPicker.module.css'
import { parseColor } from '@react-stately/color';
import ColorWheel from './ColorWheel';

const ColorPicker = ({ colorType, onChange }) => {
  const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'));

  const handleColorChange = (newColor) => {
    const hslString = `hsl(${newColor.hue}, ${newColor.saturation}%, ${newColor.lightness}%)`;
    setColor(hslString);
    onChange(hslString);
  };

  return (
    <>
      <div className={styles.containercolors}>
        <ColorWheel value={color} onChange={handleColorChange} />
        <p className={styles.colorname}> {colorType}</p>
      </div>
    </>
  );
};

export default ColorPicker;
