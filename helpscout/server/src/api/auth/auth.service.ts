import database from '../../loaders/database';
import bcrypt from 'bcrypt';
import generateToken from '../../shared/jwt';
import { ERRORS } from '../../shared/errors';

export const handleCreateUser = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
): Promise<void> => {
  const collection = (await database()).collection('users');
  const user = await collection.findOne({ email });
  if (user) {
    throw {
      statusCode: ERRORS.USER_ALREADY_EXISTS_ERROR.code,
      message: ERRORS.USER_ALREADY_EXISTS_ERROR.message.error_description,
    };
  }
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  await collection.insertOne({
    firstname,
    lastname,
    email,
    password: hash,
    isDeleted: false,
  });
};

export const handleLoginUser = async (email: string, password: string): Promise<unknown> => {
  const data = await (await database()).collection('users').findOne({ email: email });
  if (!data) {
    throw { statusCode: 404, message: 'User Does Not Exist' };
  }

  const res = await bcrypt.compare(password, data.password);
  if (!res) {
    throw { statusCode: 401, message: 'Incorrect Password / Not Allowed' };
  }

  return generateToken(email);
};
