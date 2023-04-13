module.exports.getNewProviders = async(request, h) => {
    try {
      const newProviders = await request.app.db.query(`SELECT COUNT(id) as newProviders
      FROM reservations
      WHERE reservation_date >= DATE_SUB(current_date(), INTERVAL 1 WEEK) AND business_id NOT IN
      (SELECT business_id
      FROM reservations
      WHERE reservation_date < DATE_SUB(current_date(), INTERVAL 1 WEEK));`);

      return h.response(newProviders).code(200);
    } catch(err) {
      return h.response({
        error: err.message || "Some error ocurred while returning the new providers."
      })
    }
  }
