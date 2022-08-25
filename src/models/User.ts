import { DataTypes } from 'sequelize';
import db from '../config/database';

const User = db.define(
	'user',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		full_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		id_country: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		email_verification_token: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
		},
		is_deleted: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		is_email_confirmed: {
			type: DataTypes.SMALLINT,
			defaultValue: 0,
		},
		id_user_type: {
			type: DataTypes.INTEGER,
		},
		id_signin_type: {
			type: DataTypes.INTEGER,
		},
		id_account_type: {
			type: DataTypes.INTEGER,
		},
		date_created: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: new Date(),
		},
	},
	{
		timestamps: false,
	}
);

export default User;
