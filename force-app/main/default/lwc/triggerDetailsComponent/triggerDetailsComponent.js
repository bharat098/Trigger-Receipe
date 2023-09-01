import { LightningElement, wire } from 'lwc';
import getTriggerRecords from '@salesforce/apex/TriggerController.getTriggerRecords';

export default class triggerDetailsComponent extends LightningElement {
    triggerRecords;
    selectedTrigger;
    descriptionIcon;
    testClassIcon;
    apexIcon;
    triggerIcon;
    connectedCallback() {
            this.triggerIcon = "standard:record_update";
            this.apexIcon = "standard:apex";
            this.descriptionIcon = "standard:form";
            this.testClassIcon = "standard:visit_templates";
    }
    @wire(getTriggerRecords)
    wiredContacts({ error, data }) {
        if (data) {
            this.triggerRecords = data;
            console.log('this.triggerRecords',this.triggerRecords);
        } else if (error) {
            console.error(error);
        }
    }

    handleTabClick(event) {
        this.selectedTrigger = event.target.value;
        console.log('this.selectedTrigger',this.selectedTrigger);
    }
}
