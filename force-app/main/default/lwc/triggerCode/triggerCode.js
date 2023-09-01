import { LightningElement, api, wire } from 'lwc';
import getTriggerCode from '@salesforce/apex/TriggerController.getTriggerCode';

export default class TriggerCode extends LightningElement {
    @api triggerId;
    triggerCode; 
    wireResult;
    copied = false; // Flag to track if code is copied
    buttonLabel = 'Copy'; // Initial button label
    ifTrigger = false;
    connectedCallback(){
        console.log('this.recId',this.triggerId);
    }
    @wire(getTriggerCode, { recId: '$triggerId' })
    wiredTriggerCode(result) {
        console.log('this.triggerId',JSON.stringify(this.triggerId));
        this.wireResult=result;
        if (result.data) {
            this.triggerCode = result.data;
            this.ifTrigger = true;
            console.log('this.triggerCode',JSON.stringify(this.triggerCode));
        }
    }
    copyCode() {
        const plainTextCode = this.triggerCode
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
