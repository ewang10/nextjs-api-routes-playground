import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

export const buildFeedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json');

export const extractFeedback = (filePath) => {
    const fileData = readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
};

const handler = (req, res) => {
    if (req.method === 'POST') {
        const { email, text } = req.body;
        const newFeedback = {
            id: new Date().toISOString(), // dummy ID for development purposes
            email,
            text
        };
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);

        data.push(newFeedback);
        writeFileSync(filePath, JSON.stringify(data));

        res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } else {
        const filePath = buildFeedbackPath();
        const data = extractFeedback(filePath);

        res.status(200).json({ feedback: data });
    }
};

export default handler;
