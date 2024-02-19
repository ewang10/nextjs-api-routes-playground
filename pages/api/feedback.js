import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const handler = (req, res) => {
    if (req.method === 'POST') {
        const { email, text } = req.body;
        const newFeedback = { 
            id: new Date().toISOString(), // dummy ID for development purposes
            email, 
            text 
        };

        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = readFileSync(filePath);
        const data = JSON.parse(fileData);

        data.push(newFeedback);
        writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } else {
        res.status(200).json({ message: 'This works!'});
    }
};

export default handler;
