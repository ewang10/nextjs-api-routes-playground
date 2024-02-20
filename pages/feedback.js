import { buildFeedbackPath, extractFeedback } from "./api/feedback";

const FeedbackPage = ({ feedbackItems }) => (
    <ul>
        {
          feedbackItems.map(({ id, text }) => <li key={id}>{text}</li>)
        }
      </ul>
);

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const feedbackItems = extractFeedback(filePath);

    return {
        props: {
            feedbackItems
        }
    };
}

export default FeedbackPage;
