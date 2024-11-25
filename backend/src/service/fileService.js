const { uploadToCloudinary } = require("../config/cloudinary");
const fs = require("fs");

const cloudinaryUpload = async (file) => {
  try {
    const cloudinaryResponse = await uploadToCloudinary(file.path);
    fs.unlink(file.path, (err) => {
      if (err) {
        ("../config/cloudinary");
        const fs = require("fs");
        console.error(err);
      }
    });
    return cloudinaryResponse;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { cloudinaryUpload };
