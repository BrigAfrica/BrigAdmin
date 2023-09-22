export const validateSigninInputs = (userData, setError) => {
  const { email, password } = userData;

  let errorMsg = {
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    phoneNumberError: "",
  };

  let formValid = true;

  if (!email) {
    formValid = false;
    errorMsg.emailError = "Please enter your email";
  }

  if (typeof email !== "undefined") {
    if (email.length <= 3) {
      formValid = false;
      errorMsg.emailError = "Email must contain more than 3 characters";
    }
  }

  if (!password) {
    formValid = false;
    errorMsg.passwordError = "Please enter a password";
  }

  setError(errorMsg);

  return formValid;
};
