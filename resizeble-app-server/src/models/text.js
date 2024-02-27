import { DataTypes } from 'sequelize';
import { client } from '../utils/db.js';

export const Text = client.define('Text', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Date.NOW,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'texts',
  updatedAt: false,
});
