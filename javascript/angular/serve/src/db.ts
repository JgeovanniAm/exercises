import { connect } from 'mongoose';
const client = "mongodb://jimmy:geovanni17107801@dbcluster-shard-00-00-uklj6.mongodb.net:27017,dbcluster-shard-00-01-uklj6.mongodb.net:27017,dbcluster-shard-00-02-uklj6.mongodb.net:27017/test?ssl=true&replicaSet=dbCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
export const connectDB = async () => {
    await connect(client, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('connectDb')
}
