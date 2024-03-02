import { buildFeedbackPath, extractFeedback } from ".";

const handler = (req, res) => {
    const { feedbackId } = req.query;
    const path = buildFeedbackPath();
    const data = extractFeedback(path);
    const feedback = data.find(({ id }) => id === feedbackId);

    res.status(200).json({ feedback });
};

export default handler;
