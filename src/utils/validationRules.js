// From: https://spin.atomicobject.com/2016/10/05/form-validation-react/

/**
 * Validation error messages.
 */
const isRequired = fieldName => `O campo ${fieldName} deve ser informado`;
const mustBeANumber = fieldName => `O campo ${fieldName} deve conter apenas dígitos`;

/**
 * Validation rules
 */

// Field is required.
export const required = (text) => {
  if (text) {
    return null;
  }
  return isRequired;
};

// Field must contain only numbers.
export const isNumber = (text) => {
  if (text.match(/^\d+$/)) {
    return null;
  }
  return mustBeANumber;
};
