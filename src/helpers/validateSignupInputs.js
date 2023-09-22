export const validateSignupInputs = (userData, setError) => {
  const { name, email, password } = userData;

  let errorMsg = {
    nameError: "",
    emailError: "",
    passwordError: "",
  };

  let formValid = true;

  if (!name) {
    formValid = false;
    errorMsg.firstNameError = "Please enter your name";
  }

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
