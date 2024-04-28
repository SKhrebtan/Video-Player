import React, { forwardRef } from 'react';

const Item = forwardRef(
  (
    {
      id,
      withOpacity,
      isDragging,
      style,
      children,
      attributes,
      listeners,
      laptop,
    },
    ref
  ) => {
    const inlineStyles = {
      opacity: withOpacity ? '0.5' : '1',
      height: '46px',
      transformOrigin: '50% 50%',
      borderRadius: '10px',
      cursor: isDragging ? 'grabbing' : 'grab',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: isDragging
        ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px'
        : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
      transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      ...style,
      width: !laptop ? '523px' : '100%',
    };

    return (
      <li ref={ref} style={inlineStyles} {...attributes} {...listeners}>
        {children}
      </li>
    );
  }
);

export default Item;
