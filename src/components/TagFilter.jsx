import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styles from './TagFilter.module.css';

const TagFilter = forwardRef(({
  onChange,
  tag
}, ref) => {
  const [selected, setSelected] = useState(false);

  useImperativeHandle(ref, () => ({
    get value() {
      return selected ? tag : null;
    }
  }));

  useEffect(() => {
    onChange();
  }, [selected]);

  return (
    <button className={selected ? '' : styles['button-inactive']} onClick={() => { setSelected(!selected); }}>
      {tag}
    </button>
  );
});

export default TagFilter;
