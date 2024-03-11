import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(process.env.MONGODB_URI));
        const db = client.db('meetupDB'); // Replace 'meetupDB' with your database name
        const meetupsCollection = db.collection('meetups'); // Replace 'meetups' with your collection name

        try {
            const result = await meetupsCollection.insertOne(data);
            console.log(result);
            res.status(201).json({ message: 'Meetup inserted!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to insert meetup.' });
        }

        client.close();
    }
}

export default handler;
