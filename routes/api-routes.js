const db = require("../models");
const getDisasterEvents = require('./api/disaster.js');

module.exports = function (app) {
  app.get('/api/disasters', function (req, res, next) {
    getDisasterEvents(disasters => res.json(disasters));
  });

  app.get('/api/readykit', function (req, res, next) {
    db.ReadyKit.findAll()
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

  app.get('/api/readykit/:id', function (req, res, next) {
    db.ReadyKit.findByPk(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  });

  app.get('/api/readykit/search/:currentUserName', function (req, res, next) {
    db.ReadyKit.findOne({ where: { currentUserName: req.params.currentUserName } })
      .then((result) => {
        if (result === null) {
          db.ReadyKit.create({
            currentUserName: req.params.currentUserName,
            water: false,
            non_perishable_food: false,
            radio: false,
            batteries: false,
            flashlight: false,
            first_aid_kit: false,
            whistle: false,
            dust_mask: false,
            moist_towlettes: false,
            garbage_bags: false,
            wrench: false,
            can_opener: false,
            local_map: false,
            cash: false,
            medications: false,
          })
            .then((result) => res.json(result))
            .catch((err) => next(err));
        }
        else {
          res.json(result);
        }
      })
      .catch((err) => next(err));
  });

  app.put("/api/readykit/update/:currentUserName", function (req, res, next) {
    db.ReadyKit.update(
      req.body,
      { where: { currentUserName: req.params.currentUserName } }
    )
      .then((result) => res.json(result))
      .catch((err) => next(err));
 });
}
