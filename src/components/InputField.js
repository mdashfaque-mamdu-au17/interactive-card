import { useField } from 'formik';
import React from 'react';
import classNames from 'classnames';

const InputField = ({ label, fieldType, ...props }) => {
  const [field, meta] = useField(props);

  const applyStyle = () => {
    if (fieldType === 'primary') {
      return 'w-[327px] h-11 lg:w-[381px]';
    }
    if (fieldType === 'secondary') {
      return 'w-[72px] lg:w-20 h-11';
    }

    if (fieldType === 'thirdType') {
      return 'w-[164px] lg:w-[191px] h-11';
    }
  };
  return (
    <>
      {fieldType === 'primary' || fieldType === 'thirdType' ? (
        <label
          htmlFor={props.id || props.name}
          className={classNames(
            'text-xs font-medium leading-4 uppercase tracking-[2px] block pb-2'
          )}
        >
          {label}
        </label>
      ) : null}
      <div>
        <input
          {...field}
          {...props}
          className={classNames(
            'block transition ease-in-out bg-white border rounded-lg form-control  focus:outline-none focus:rounded-lg placeholder:text-deep-violet-300 placeholder:text-opacity-25 placeholder:font-medium placeholder:leading-6 placeholder:text-lg pl-4',
            applyStyle(),
            meta.error
              ? 'border-theme-red-800'
              : 'border-theme-grey-200'
          )}
        />
        {fieldType !== 'secondary' && meta.error ? (
          <span className="block mt-2 text-sm font-semibold leading-4 text-theme-red-800">
            {meta.error}
          </span>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
