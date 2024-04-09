import mongoose, { Document, Schema } from 'mongoose';

// docs mongoose: https://www.npmjs.com/package/mongoose
export interface IImage extends Document {
  // convention to put I.. in inteface
  public_id: string;
  url: string;
}

export interface IReview extends Document {
  user: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface ILocation {
  type: string;
  coordinates: number[];
  formattedAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
export interface IRestaurant extends Document {
  // convention to put I.. t inteface
  name: string;
  description: string;
  address: string;
  location: ILocation;
  website: string;
  diaperChangingRoom: Boolean;
  ratings: number;
  numOfReviews: number;
  images: IImage[];
  category: [string]; // ? maybe delete []?
  reviews: IReview[];
  user: [mongoose.Schema.Types.ObjectId];
  createdAt: Date;
}

const restaurantSchema: Schema<IRestaurant> = new Schema({
  name: {
    type: String,
    required: [true, 'please enter name'],
    trim: true,
    maxLength: [200, 'name cannot exceed 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'please enter description'],
  },
  address: {
    type: String,
    required: [true, 'please enter address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number], // latitude and longitude
      index: '2dsphere',
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipCode: String,
  },
  website: {
    type: String,
    required: [true, 'please enter website'],
  },
  diaperChangingRoom: {
    type: Boolean,
    default: true,
  },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],

  category: {
    type: [String],
    required: [true, 'please enter category'],
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
      rating: {
        type: Number,
        required: false,
      },
      comment: {
        type: String,
        required: false,
      },
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Restaurant ||
  mongoose.model<IRestaurant>('Restaurant', restaurantSchema);
