import React from 'react';
import classNames from 'classnames';

const Button = ({ title, ...props }) => {
  return (
    <button
      className={classNames(
        'w-[327px] h-[53px] text-center rounded-lg text-lg font-medium leading-6 text-white bg-deep-violet-300 lg:w-[381px]'
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
