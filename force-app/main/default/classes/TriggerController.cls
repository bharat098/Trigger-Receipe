// public with sharing class TriggerController {
//     @AuraEnabled(cacheable=true)
//     public static List<Trigger__mdt> getTriggerRecords() {
//         return [SELECT Id, MasterLabel, Triggers_Code__c, Apex_Class__c, Description__c FROM Trigger__mdt];
//     }
//     @AuraEnabled(cacheable=true)
//     public static String getTriggerCode(String recId) {
//         Trigger__mdt triggercode = [SELECT Triggers_Code__c FROM Trigger__mdt WHERE Id = :recId LIMIT 1];
//         return triggercode.Triggers_Code__c;
//     }
//     @AuraEnabled(cacheable=true)
//     public static String getTriggerApexclass(String recId) {
//         Trigger__mdt getTriggerApexclass = [SELECT Apex_Class__c FROM Trigger__mdt WHERE Id = :recId LIMIT 1];
//         return getTriggerApexclass.Apex_Class__c;
//     }
//     @AuraEnabled(cacheable=true)
//     public static String getTriggerDescription(String recId) {
//         Trigger__mdt triggerDescription = [SELECT Description__c FROM Trigger__mdt WHERE Id = :recId LIMIT 1];
//         return triggerDescription.Description__c;
//     }
// }
public with sharing class TriggerController {
    @AuraEnabled(cacheable=true)
    public static List<Trigger_Details__c> getTriggerRecords() {
        return [SELECT Id, Name, Triggers_Code__c, Apex_Class__c,Test_Class__c, Description__c FROM Trigger_Details__c];
    }
    @AuraEnabled(cacheable=true)
    public static String getTriggerCode(String recId) {
        Trigger_Details__c triggercode = [SELECT Triggers_Code__c FROM Trigger_Details__c WHERE Id = :recId LIMIT 1];
        return triggercode.Triggers_Code__c;
    }
    @AuraEnabled(cacheable=true)
    public static String getTriggerApexclass(String recId) {
        Trigger_Details__c getTriggerApexclass = [SELECT Apex_Class__c FROM Trigger_Details__c WHERE Id = :recId LIMIT 1];
        return getTriggerApexclass.Apex_Class__c;
    }
    @AuraEnabled(cacheable=true)
    public static String getTriggerDescription(String recId) {
        Trigger_Details__c triggerDescription = [SELECT Description__c FROM Trigger_Details__c WHERE Id = :recId LIMIT 1];
        return triggerDescription.Description__c;
    }
    @AuraEnabled(cacheable=true)
    public static String getTriggerTestClass(String recId) {
        Trigger_Details__c triggerTestClass = [SELECT Test_Class__c FROM Trigger_Details__c WHERE Id = :recId LIMIT 1];
        return triggerTestClass.Test_Class__c;
    }
}
