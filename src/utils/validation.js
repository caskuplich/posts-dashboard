// From: https://spin.atomicobject.com/2016/10/05/form-validation-react/

/**
 * Creates a validation rule runner to run the validation rules against a field.
 */
export const ruleRunner = (field, name, ...validations) => {
  return (state) => {
    for (let v of validations) {
      let errorMessageFunc = v(state[field], state);
      if (errorMessageFunc) {
        return { [field]: errorMessageFunc(name) };
      }
    }
    return null;
  };
};

/**
 * Runs the validation rule runners against a state and returns all the
 * validation errors in a single object.
 */
export const validate = (state, runners) => {
  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state));
  }, {});
};
