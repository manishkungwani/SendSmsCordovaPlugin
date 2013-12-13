//---------------------Plugin Functionality------------------------//
var cordova = window.cordova || window.Cordova;
var SendSMS = function() {
};
SendSMS.prototype.send = function (phoneNumber, message, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'SendSms', "SendSms", [phoneNumber, message]);
};
//---------------------Plugin Registration------------------------//
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.SendSMS) {
    window.plugins.SendSMS = new SendSMS();
}

if (module.exports) {
  module.exports = SendSMS;
}