const prisma = require("../config/database");
const { validateReferralData } = require("../utils/validator");
const { sendReferralEmail } = require("../services/emailService");

const createReferral = async (req, res) => {
  try {
    const referralData = req.body;
    validateReferralData(referralData);

    const referral = await prisma.referral.create({
      data: referralData,
    });

    await sendReferralEmail(
      referralData.referrerName,
      referralData.refereeName,
      referralData.refereeEmail,
      referralData.courseName
    );

    res.status(201).json(referral);
  } catch (error) {
    console.error("Error processing referral:", error);
    res
      .status(
        error.message.includes("required") || error.message.includes("Invalid")
          ? 400
          : 500
      )
      .json({ error: error.message || "Failed to process referral" });
  }
};

module.exports = { createReferral };
