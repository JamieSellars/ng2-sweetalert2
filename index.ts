var sweetAlert = require('sweetalert2');

export class SweetAlertService {
  constructor() {}

  swal(args = {}) {
    return sweetAlert(args);
  }

  prompt(options: any) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return sweetAlert(Object.assign({}, baseOptions, options));
  }

  confirm(options :any) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return sweetAlert(Object.assign(baseOptions, options));
  }

  alert(options :any) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return sweetAlert(Object.assign(baseOptions, options));
  }

  question(options :any) {
    return this.alert(Object.assign({ type: 'question' }, options));
  }

  success(options :any) {
    return this.alert(Object.assign({ type: 'success' }, options));
  }

  error(options :any) {
    return this.alert(Object.assign({ type: 'error' }, options));
  }

  warn(options :any) {
    return this.alert(Object.assign({ type: 'warn' }, options));
  }

  info(options :any) {
    return this.alert(Object.assign({ type: 'info' }, options));
  }
}
