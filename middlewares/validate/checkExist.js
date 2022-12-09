const checkExits = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Model.findOne(id);
      if (result) {
        next();
      } else {
        res.status(404).send({message: `Not found by ID: ${id}`});
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
};

module.exports = {
  checkExits,
};
