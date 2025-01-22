class MessagesController {
  async getMessages(req, res, next) {
    try {
      const { name, email, phone, message } = req.body;

      const errors = {};
      if (!name) errors.name = "Поле name обязательно";
      if (!email) errors.email = "Поле email обязательно";
      if (!phone) errors.phone = "Поле phone обязательно";
      if (!message || message==="error") errors.message = "Ошибка в поле message";

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({
          status: "error",
          fields: errors,
        });
      }

      return res.status(200).json({
        status: "success",
        msg: "Your application has been successfully submitted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MessagesController();
