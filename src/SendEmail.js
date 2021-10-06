//import Button from 'react-bootstrap/Button';

function ReplyEmail({ newMessage, toggleReplyEmail, toggleEmailDetails, email}) {
    if (newMessage !== false) {
        return(
            <div id="new-email">
                {/* <Button onClick={() => { backButtonClicked() }}>
                    Back
                </Button> */}
                {/* <Button onClick={() => { backButtonClicked() }}>
                    Send
                </Button> */}
                {/* <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    <label for="floatingTextarea2">Email Content</label>
                </div> */}
                <div className="reply-email" display={toggleReplyEmail(
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Email Content</label>
                    </div>  
                )}>
                </div>
            </div>
        );
    } 
    return (
        <div className="email-details" display={toggleEmailDetails(newMessage)}></div>
    )
    
}


export default ReplyEmail;