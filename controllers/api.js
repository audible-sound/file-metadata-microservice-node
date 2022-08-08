const path = require("path");
class ApiController {
  static home(req, res) {
    res.sendFile(path.join(__dirname,"../views/index.html"));
  }
  static postFile(req, res) {
    try {
      res.status(200).send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ApiController;
