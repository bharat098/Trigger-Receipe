import { LightningElement,api,wire } from 'lwc';
import getTriggerTestClass from '@salesforce/apex/TriggerController.getTriggerTestClass';

export default class TriggerTestClass extends LightningElement {
    @api triggerId;
    triggerTestClass;
    copied = false; // Flag to track if code is copied
    buttonLabel = 'Copy'; // Initial button label
    ifTestclass = false;
    @wire(getTriggerTestClass, { recId: '$triggerId' })
    wiredTriggerTestClass({ error, data }) {
        if (data) {
            this.triggerTestClass = data;
            this.ifTestclass = true;
            console.log('this.triggerTestClass',this.triggerTestClass);
        } else if (error) {
            console.error(error);
        }
    }
    copyCode() {
        const plainTextCode = this.triggerTestClass
            .replace(/<\/?p>/g, '\n') // Remove <p> tags
            .replace(/&nbsp;/g, '') // Replace &nbsp; with a space
            .replace(/<br>/g, '\n') // Replace <br> tags with newline characters
            .trim(); // Remove leading/trailing spaces

        const textArea = document.createElement('textarea');
        textArea.value = plainTextCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.copied = true; // Set copied flag to true
        this.buttonLabel = 'Copied!'; // Set button label to "Copied"
        setTimeout(() => {
            this.copied = false; // Reset copied flag to false after 2 seconds
            this.buttonLabel = 'Copy'; // Reset button label to "Copy Code"
        }, 2000); // 2000 milliseconds (2 seconds)
    }
}