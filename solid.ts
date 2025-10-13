export interface MailService {
    send(to: string, subject: string, body: string): Promise<void>;
}

class GmailService implements MailService {
    async send(to: string, subject: string, body: string): Promise<void> {
        console.log(`Send message to "${to}" with heading is "${subject}" and the body is "${body}"`);
    }
}

class GridService implements MailService {
    async send(to: string, subject: string, body: string): Promise<void> {
        console.log(`Send grid successfully`);
    }
}

class UserService {
    constructor(private mailService: MailService) {}

    async registerUser(email: string) {
        // Business logic
        await this.mailService.send(email, 'Test Email', 'OK');
    }
}

const gmailService = new GmailService();
const gridService = new GridService();
const userService = new UserService(gmailService);
userService.registerUser("dangthingocyen2003@gmail.com")