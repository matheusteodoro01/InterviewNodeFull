const { Model, DataTypes } = require('sequelize')
class Task extends Model {

    static init(connection) {

        super.init({
            description: DataTypes.STRING,
            done: DataTypes.BOOLEAN,

        }, {
            sequelize: connection,

        });
    }
}
module.exports = Task