module.exports = function(sequelize, DataTypes) {
  var ReadyKit = sequelize.define("ReadyKit", {
    currentUserName: {
      type: DataTypes.STRING
    },
    water: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    non_perishable_food: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    radio: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    batteries: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    flashlight: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    first_aid_kit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    whistle: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    dust_mask: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    moist_towlettes: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    garbage_bags: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    wrench: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    can_opener: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    local_map: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    cash: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    medications: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return ReadyKit;
};
