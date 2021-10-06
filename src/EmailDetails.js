import Button from 'react-bootstrap/Button';

function EmailDetails({ email, toggleEmailDetails, backButtonClicked, replyButtonClicked, newMessage }) {
  if (email !== null) {
    return (
      <div id="email-details" display={toggleEmailDetails(email)}>
        <Button onClick={() => { backButtonClicked() }}>
          Back
        </Button>
        <Button onClick={() => { replyButtonClicked() }}>
          Reply
        </Button>
        <h3>{email.subject}</h3>
        <p>Sent by: {email.sender}</p>
        <p>You: {email.recipient}</p>
        <p>Received on: {email.date}</p>
        <p>Message: {email.message}</p>
      </div>
    );
  }

  return (
    <div className="email-details" display={toggleEmailDetails(email)}></div>
  )
}

export default EmailDetails;