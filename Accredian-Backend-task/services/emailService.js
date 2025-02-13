const { transporter } = require("../config/email");

const sendReferralEmail = async (
  referrerName,
  refereeName,
  refereeEmail,
  courseName
) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: refereeEmail,
    subject: `${referrerName} has referred you to our ${courseName} course!`,
    html: `
      <h1>Hello ${refereeName}!</h1>
      <p>${referrerName} thinks you'd be interested in our ${courseName} course.</p>
      <p>Click the link below to learn more:</p>
      <a href="${process.env.COURSE_URL}/${courseName}">View Course Details</a>
    `,
  });
};

module.exports = { sendReferralEmail };
