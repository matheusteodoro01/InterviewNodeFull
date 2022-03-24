module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'my-secret-pw',
    database: 'teste',
    defined: {
        //Cria os campos created_at e updated_at
        timestamps: true,
        //Deixa os nomes das tabelas separados por _
        underscored: true,
        //Não deixa o sequelize adicionar s no final do nome das tabelas
        freezeTableName: true,

    }
}
