import mongoose from 'mongoose';

const connectDB = async () => {
        try {
                const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
                console.log(
                        'Database connected :\n  { \n     hostName :',
                        connect.connection.host,
                        '\n     databaseName :',
                        connect.connection.name,
                        '\n  }'
                );
        } catch (error) {
                console.log(error);
                process.exit(1);
        }
};

export default connectDB;
