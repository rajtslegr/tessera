import { SecurePassword } from 'blitz';
import db from 'db';

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  await db.user.create({
    data: {
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'petr.rajtslegr@gmail.com',
      hashedPassword: await SecurePassword.hash('asdasdasd'),
      role: 'USER',
    },
  });
};

export default seed;
