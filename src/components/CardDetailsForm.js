import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import valid from 'card-validator';

import InputField from './InputField';
import Button from './Button';
import classNames from 'classnames';
const CardDetailsForm = () => {
  const formatAndSetCcNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, '');
    let inputNumbersOnly = inputVal.replace(/\D/g, '');

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = '';
    if (splits) {
      spacedNumber = splits.join(' ');
    }

    return spacedNumber;
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        cardNumber: '',
        month: '',
        year: '',
        cvv: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Can't be blank")
          .test(
            'test-number',
            'Name is invalid',
            (value) => valid.cardholderName(value).isValid
          ),
        cardNumber: Yup.string()
          .required('Card number is required')
          .test(
            'test-number',
            'Card number is invalid',
            (value) => valid.number(value?.trim()).isValid
          ),
        month: Yup.string()
          .required("Can't be blank")
          .test(
            'test-number',
            'Invalid month',
            (value) => valid.expirationMonth(value).isValid
          ),
        year: Yup.string()
          .required("Can't be blank")
          .test(
            'test-number',
            'Invalid Year',
            (value) => valid.expirationYear(value).isValid
          ),
        cvv: Yup.string()
          .required("Can't be blank")
          .test(
            'test-number',
            'CVV is invalid',
            (value) => valid.cvv(value).isValid
          ),
      })}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {(props) => {
        return (
          <Form>
            <div className="mb-5 lg:mb-[26px]">
              <InputField
                label="cardholder name"
                name="firstName"
                type="text"
                placeholder="e.g. Jane Appleased"
                fieldType="primary"
                value={props.values.firstName}
                onChange={(e) =>
                  props.setFieldValue('firstName', e.target.value)
                }
              />
            </div>

            <div className="mb-2.5 lg:mb-[26px]">
              <InputField
                label="card number"
                name="cardNumber"
                type="text"
                placeholder="e.g 1234 5678 9123 0000"
                fieldType="primary"
                value={props.values.cardNumber}
                onChange={(e) => {
                  props.setFieldValue(
                    'cardNumber',
                    formatAndSetCcNumber(e)
                  );
                }}
              />
            </div>

            <div className="flex w-[327px] gap-[9px] lg:gap-5 mb-[35px] lg:mb-10">
              <div className="flex flex-col">
                <label
                  htmlFor="month"
                  className={classNames(
                    'text-sm font-medium leading-4 uppercase block pb-2 w-full tracking-[1px] lg:tracking-[1px]'
                  )}
                >
                  exp. date (mm/yy)
                </label>
                <div className="flex gap-2 lg:ga-2.5">
                  <InputField
                    label=""
                    name="month"
                    type="text"
                    placeholder="MM"
                    fieldType="secondary"
                    maxLength="2"
                    value={props.values.month}
                    onChange={(e) => {
                      props.setFieldValue('month', e.target.value);
                    }}
                  />

                  <InputField
                    label=""
                    name="year"
                    type="text"
                    placeholder="YY"
                    fieldType="secondary"
                    maxLength="2"
                    value={props.values.year}
                    onChange={(e) => {
                      props.setFieldValue('year', e.target.value);
                    }}
                  />
                </div>
                {props.errors.month || props.errors.year ? (
                  <span className="pt-2 text-sm font-semibold leading-4 text-theme-red-800">
                    {props.errors.month || props.errors.year}
                  </span>
                ) : null}
              </div>
              <div>
                <InputField
                  label="cvc"
                  name="cvv"
                  type="text"
                  placeholder="e.g 123"
                  fieldType="thirdType"
                  maxLength="3"
                  value={props.values.cvv}
                  onChange={(e) => {
                    props.setFieldValue('cvv', e.target.value);
                  }}
                />
              </div>
            </div>

            <Button title="Confirm" type="submit" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CardDetailsForm;
