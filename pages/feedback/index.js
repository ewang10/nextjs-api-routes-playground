import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const FeedbackPage = ({ feedbackItems }) => {
    const [feedbackData, setFeedbackData] = useState();

    const loadFeedbackHandler = (id) => {
        fetch(`/api/feedback/${id}`)
        .then((res) => res.json())
        .then(({ feedback }) => setFeedbackData(feedback));
    };

    return (
        <>
            {feedbackData && feedbackData.email}
            <ul>
                {
                    feedbackItems.map(({ id, text }) => (
                        <li key={id}>
                            {text}{' '}
                            <button onClick={() => loadFeedbackHandler(id)}>
                                Show Details
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

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
