import React from 'react'
import {useColorWheel} from '@react-aria/color';
import {useColorWheelState} from '@react-stately/color';
import {VisuallyHidden} from '@react-aria/visually-hidden';
import {useFocusRing} from '@react-aria/focus';

const RADIUS = 30;
const TRACK_THICKNESS = 20;
const THUMB_SIZE = 20;

function ColorWheel(props) {
  let state = useColorWheelState(props);
  let inputRef = React.useRef(null);
  let {trackProps, inputProps, thumbProps} = useColorWheel({
    ...props,
    outerRadius: RADIUS,
    innerRadius: RADIUS - TRACK_THICKNESS
  }, state, inputRef);

  let {focusProps, isFocusVisible} = useFocusRing();

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <div {...trackProps} />
      <div
        {...thumbProps}
        style={{
          ...thumbProps.style,
          border: '2px solid white',
          boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
          width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
          height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
          borderRadius: '50%',
          boxSizing: 'border-box'
        }}>
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={inputRef} />
        </VisuallyHidden>
      </div>
    </div>
  );
}

<ColorWheel />

export default ColorWheel