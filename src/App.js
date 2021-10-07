import './App.css';
import EmailList from './AllEmails.js';
import EmailDetails from './FullEmail.js';
import ReplyEmail from './SendEmail.js'
import React from 'react';
//specific bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEmail: null,
      emailList: [],
      searchEmailList: null,
      newEmail: false,
    }
  }

  async componentDidMount() {
    var response = await fetch("http://localhost:3001/emails");
    var data = await response.json();
    this.setState({ emailList: data });
  }

  emailClicked(email) {
    this.setState({ currentEmail: email });
  }

  replyButtonClicked(){
    this.setState({newEmail: true})
    ReplyEmail();
    }

  toggleEmailDetails() {
    if (this.state.currentEmail === null) {
    }
  }
  toggleReplyEmail(){
    if(this.state.newEmail === true){
    }
  }
  backButtonClicked() {
    this.setState({ currentEmail: null });
  }

  getEmails() {
    if (this.state.searchEmailList === null) {
      return this.state.emailList;
    }

    return this.state.searchEmailList;
  }


  render() {
    return (
      <div className="fill-window">
        <Container className="email-page">
          <h1>Gmail...but better</h1>
          <EmailDetails email={this.state.currentEmail} replyButtonClicked={this.replyButtonClicked.bind(this)} toggleEmailDetails={this.toggleEmailDetails.bind(this)} backButtonClicked={this.backButtonClicked.bind(this)} />
          <ReplyEmail toggleReplyEmail={this.toggleReplyEmail.bind(this)} newMessage={this.state.newEmail} toggleEmailDetails={this.toggleEmailDetails.bind(this)}/>
          <Row id="table-title">
            <Col md={3}>Sender</Col>
            <Col md={6}>Subject</Col>
            <Col md={3}>Date Received</Col>
          </Row>
          <table class="table table-dark table-hover">
            <EmailList emails={this.getEmails()} emailClicked={this.emailClicked.bind(this)} />
          </table>
        </Container>
      </div>
    );
  }

}

export default App;


/*
[/] View all of my email messages (subject line + sender)
[/] View one of my email messages with all of its details
[] Send an email 
[] Search for a specific email by subject
*/
