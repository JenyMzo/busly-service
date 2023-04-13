module.exports = function (server) {
  const Bus = require("../controllers/busesController");
  const Reservation = require("../controllers/reservationsController");
  const Review = require("../controllers/reviewsController");
  const Ammenity = require("../controllers/ammenitiesController");
  const Package = require("../controllers/packagesController");
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
    handler: Bus.getBusById,
    options: {
      validate: {
        params: Joi.object({ id: Joi.number().integer().required() }),
      },
    },
  });

  server.route({
    method: "GET",
    path: "/reservations/{id}",
    handler: Reservation.getReservationById,
    options: {
      validate: {
        params: Joi.object({ id: Joi.number().integer().required() }),
      },
    },
  });

  // server.route({
  //   method: "GET",
  //   path: "/buses",
  //   handler: Bus.getBuses,
  // });

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
    handler: Reservation.getMyReservationsBusiness,
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
    path: "/customer/{customerId}/reservations",
    handler: Reservation.getMyReservationsCustomer,
    options: {
      validate: {
        params: Joi.object({
          customerId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get all reservations of a costumer",
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
    path: "/bus&reservationId={reservationId}",
    handler: Bus.getBusFromReservation,
    options: {
      validate: {
        params: Joi.object({
          reservationId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get a bus given a reservationId",
    },
  });

  server.route({
    method: "GET",
    path: "/buses/reservation",
    handler: Bus.getAvailableBuses,
    options: {
      validate: {
        query: Joi.object({
          start: Joi.date().format(["DD/MM/YYYY", "YYYY-MM-DD"]).required(),
          end: Joi.date().format(["DD/MM/YYYY", "YYYY-MM-DD"]).required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/reservation",
    handler: Reservation.createReservation,
    // options: {
    //   validate: {
    //     payload: {
    //       bus_id: Joi.number(),
    //       package_id: Joi.number(),
    //       customer_id: Joi.number(),
    //       business_id: Joi.number(),
    //       reservation_date: Joi.date().required,
    //       travel_date_start: Joi.date().required,
    //       travel_date_end: Joi.date().required,
    //       status: Joi.string().valid('confirmada', 'pendiente'),
    //     }
    //   }
    // }
  })

  //packages
  server.route({
    method: "GET",
    path: "/packages/{id}",
    handler: Package.getPackageById,
    options: {
      validate: {
        params: Joi.object({
          id: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get package by id",
    },
  });

  server.route({
    method: "GET",
    path: "/packages/distinct",
    handler: Package.getDistinctPackages,
    options: {
      tags: ["api"],
      description: "Get different packages",
    },
  });

  //ratings
  server.route({
    method: "GET",
    path: "/ratings/average&busId={busId}",
    handler: Review.getAverageRatingByBus,
    options: {
      validate: {
        params: Joi.object({
          busId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get ratings by bus id",
    },
  });

  //ammenities
  server.route({
    method: "GET",
    path: "/ammenities&busId={busId}",
    handler: Ammenity.getAmmenitiesByBus,
    options: {
      validate: {
        params: Joi.object({
          busId: Joi.number().integer().required(),
        }),
      },
      tags: ["api"],
      description: "Get ammenities by bus id",
    },
  });


};
