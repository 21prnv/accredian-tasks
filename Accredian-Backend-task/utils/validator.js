const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateReferralData = (data) => {
  const {
    referrerName,
    referrerEmail,
    refereeName,
    refereeEmail,
    refereePhone,
    courseName,
  } = data;

  if (
    !referrerName ||
    !referrerEmail ||
    !refereeName ||
    !refereeEmail ||
    !refereePhone ||
    !courseName
  ) {
    throw new Error("All fields are required");
  }

  if (!validateEmail(referrerEmail) || !validateEmail(refereeEmail)) {
    throw new Error("Invalid email format");
  }
};

module.exports = { validateReferralData };
