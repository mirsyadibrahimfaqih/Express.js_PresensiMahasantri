module.exports = (sequelize, Sequelize) => {
  const Presensi = sequelize.define("presensi", {
    idmhs: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Presensi;
};