module.exports.getRecurrentCostumersbyBusinessId = async(request, h) => {
    try {
      const businessId = request.params.businessId;
      const recurrentCustomers = await request.app.db.query(`CALL recurrentCustomers('${businessId}')`);

      return h.response(recurrentCustomers).code(200);
    } catch(err) {
      return h.response({
        error: err.message || "Some error ocurred while returning the RecurrentCostumers."
      })
    }
  }
