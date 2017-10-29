const isRequired = fieldName => `O campo ${fieldName} deve ser informado`;
const mustBeANumber = fieldName => `O campo ${fieldName} deve conter apenas dígitos`;

export const required = (text) => {
  if (text) {
    return null;
  }
  return isRequired;
};

export const isNumber = (text) => {
  if (text.match(/^\d+$/)) {
    return null;
  }
  return mustBeANumber;
};
