import { model, models, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    favourites: [{ restaurantName: String, restaurantId: String }],
  },
  { timestamps: true },
);

const User = models.User || model('User', userSchema);

export default User;
