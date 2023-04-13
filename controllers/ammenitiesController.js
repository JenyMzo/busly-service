module.exports.getAmmenitiesByBus = async(request, h) => {
  try {
    const busId = request.params.busId;
    const ammenities = await request.app.db.query(`SELECT a.name FROM busly.Ammenities a JOIN busly.BusAmmenities ba on ba.ammenity_id = a.id WHERE ba.bus_id = '${busId}'`);

    return h.response({ammenities}).code(200);
  } catch(err) {
    return h.response({
      error: err.message || "Some error ocurred while returning the ammenities rating for this bus."
    })
  }
}
