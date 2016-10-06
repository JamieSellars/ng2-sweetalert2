"use strict";
var sweetAlert = require('sweetalert2');
var SweetAlertService = (function () {
    function SweetAlertService() {
    }
    SweetAlertService.prototype.swal = function (args) {
        if (args === void 0) { args = {}; }
        return sweetAlert(args);
    };
    SweetAlertService.prototype.prompt = function (options) {
        var baseOptions = {
            showCancelButton: true,
            confirmButtonText: 'Submit',
            input: 'text'
        };
        return sweetAlert(Object.assign({}, baseOptions, options));
    };
    SweetAlertService.prototype.confirm = function (options) {
        var baseOptions = {
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            type: 'warning'
        };
        return sweetAlert(Object.assign(baseOptions, options));
    };
    SweetAlertService.prototype.alert = function (options) {
        var baseOptions = {
            confirmButtonText: 'OK',
            type: 'info'
        };
        return sweetAlert(Object.assign(baseOptions, options));
    };
    SweetAlertService.prototype.question = function (options) {
        return this.alert(Object.assign({ type: 'question' }, options));
    };
    SweetAlertService.prototype.success = function (options) {
        return this.alert(Object.assign({ type: 'success' }, options));
    };
    SweetAlertService.prototype.error = function (options) {
        return this.alert(Object.assign({ type: 'error' }, options));
    };
    SweetAlertService.prototype.warn = function (options) {
        return this.alert(Object.assign({ type: 'warn' }, options));
    };
    SweetAlertService.prototype.info = function (options) {
        return this.alert(Object.assign({ type: 'info' }, options));
    };
    return SweetAlertService;
}());
exports.SweetAlertService = SweetAlertService;
