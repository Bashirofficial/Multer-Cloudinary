const sharp = require("sharp");

const path = require("path");

const imageResize = async (req, res, next) => {
  try {
    const originalFilePath = req.files[0].path;
    const parsedPath = path.parse(originalFilePath);
    const outputFilePath = path.join(
      parsedPath.dir,
      "resize-" + parsedPath.name + ".jpeg"
    );

    await sharp(originalFilePath)
      .resize({ width: 1500 })
      .jpeg({
        quality: 100, //highest quality
        mozjpeg: true,
        chromaSubsampling: "4:4:4",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimiseScans: true,
        progressive: true,
      })
      .toFile(outputFilePath);

    req.files[0].path = outputFilePath;
    req.originalFilePath = originalFilePath;
    next();
  } catch (error) {
    return res.status(500).json({ error: { description: error.message } });
  }
};

module.exports = { imageResize };
