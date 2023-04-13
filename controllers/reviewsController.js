module.exports.getAverageRatingByBus = async(request, h) => {
  try {
    const busId = request.params.busId;
    const averageRating = await request.app.db.query(`SELECT AVG(rating) AS 'rating' FROM busly.Reviews WHERE bus_id = '${busId}'`);

    return h.response({averageRating}).code(200);
  } catch(err) {
    return h.response({
      error: err.message || "Some error ocurred while returning the average rating for this bus."
    })
  }
}
