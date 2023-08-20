// NOT001.js - Notification Manager

// Here, we're pretending to use a fictional email service. In a real-world scenario, 
// you might integrate with services like SendGrid, Mailgun, etc.
const fakeEmailService = {
    sendEmail: (recipient, subject, message) => {
        console.log(`Email sent to ${recipient} with subject: ${subject} and message: ${message}`);
        return Promise.resolve(); // Simulating a successful email send operation
    }
};

class NotificationManager {
    constructor() {
        this.emailService = fakeEmailService;
    }

    /**
     * Send a notification to a user.
     * @param {string} recipient - The recipient's contact detail (e.g., email address).
     * @param {string} subject - Subject of the notification.
     * @param {string} message - Notification message.
     * @returns {Promise} - A promise indicating the success/failure of the notification send operation.
     */
    sendNotification(recipient, subject, message) {
        return this.emailService.sendEmail(recipient, subject, message);
    }
}

module.exports = new NotificationManager();
