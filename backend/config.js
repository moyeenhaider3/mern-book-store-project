import dotenv from 'dotenv';
dotenv.config();

export const PORT=process.env.PORT;

export const mongodbURL=process.env.MONGODB_URL;