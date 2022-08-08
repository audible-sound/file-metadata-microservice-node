class ApiController {
  static postFile(req, res) {
    try {
      res.status(200).send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ApiController;
