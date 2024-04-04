// ele na aceitara import export tera que ser usado sequelize cli para acessar o banco de dados
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "lobobranco",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true, // vai separar em caixa baixa ex thi_ago
    // vai rastrear o dados data de criacao update automatico
  },
};
