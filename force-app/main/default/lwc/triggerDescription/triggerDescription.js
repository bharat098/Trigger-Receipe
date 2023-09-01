import { LightningElement,api,wire,track } from 'lwc';
import getTriggerDescription from '@salesforce/apex/TriggerController.getTriggerDescription';

export default class triggerDescription extends LightningElement {
    @api triggerId;
    triggerDescription;
    @track ifDescription = false;
    @wire(getTriggerDescription, { recId: '$triggerId' })
    wiredTriggerDescription({ error, data }) {
        if (data) {
            this.triggerDescription = data;
            this.ifDescription = true;
            console.log('this.triggerDescription',this.triggerDescription);
        } else if (error) {
            console.error(error);
        }
    }
}