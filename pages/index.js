import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const text = feedbackInputRef.current.value;
    const reqBody = { email, text };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea rows='5' id='feedback' ref={feedbackInputRef} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
