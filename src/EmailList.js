import EmailListEntry from './EmailListEntry.js';
import './EmailList.css';

function EmailList({emails, emailClicked}) {
    return (
      <div className="email-list">
        <div class="container-lg">
          {emails.map(email => (
          <EmailListEntry key={email.id} email={email} emailClicked={emailClicked} />
          ))}
        </div>
      </div>
    );
  }

  export default EmailList;