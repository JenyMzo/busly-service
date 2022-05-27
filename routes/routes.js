const Reservation = require("../models/Reservation");

module.exports = function (server) {
  const Bus = require("../controllers/busesController");
  const Reservation = require("../controllers/reservationsController");
  const JoiBase = require("@hapi/joi");
  const JoiDate = require("@hapi/joi-date");
  const Joi = JoiBase.extend(JoiDate);

  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      // request.app.db.query();
      return "ok";
    },
  });

  server.route({
    method: "GET",
    path: "/buses/{id}",
    handler: Bus.getBuses,
    options: {
      validate: {
        params: Joi.object({ id: Joi.number().integer().required() }),
      },
    },
  });

  server.route({
    method: "GET",
    path: "/business/{businessId}/buses",
    handler: Bus.getMyBuses,
    options: {
      validate: {
        params: Joi.object({
          businessId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get all buses of a business",
    },
  });

  server.route({
    method: "GET",
    path: "/business/{businessId}/reservations",
    handler: Reservation.getMyReservations,
    options: {
      validate: {
        params: Joi.object({
          businessId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get all reservations of a business",
    },
  });

  server.route({
    method: "GET",
    path: "/bus/{busId}/reservations",
    handler: Reservation.getMyReservationsByBus,
    options: {
      validate: {
        params: Joi.object({
          busId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get all reservations of a bus",
    },
  });

  server.route({
    method: "GET",
    path: "/buses/reservation",
    handler: Bus.getAvailableBuses,
    options: {
      validate: {
        query: Joi.object({
          start: Joi.date().format(["YYYY/MM/DD", "YYYY-MM-DD"]).required(),
          end: Joi.date().format(["YYYY/MM/DD", "YYYY-MM-DD"]).required(),
        }),
      },
    },
  });
};
