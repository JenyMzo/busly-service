module.exports = function (server) {
  const Bus = require("../controllers/busesController");
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
        method: 'GET',
        path: '/business/{businessId}/buses',
        handler: Bus.getMyBuses,
        options: {
            validate: {
                params: Joi.object({
                    businessId: Joi.number().integer().required()
                })
            },
            tags: ['api'],
            description: 'Get all buses of a business',
        }
    });
};
