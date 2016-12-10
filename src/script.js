if (document.location.ancestorOrigins[0] === 'http://adisspr.mfcr.cz' &&
  document.querySelector('#recaptcha-anchor-label') &&
  document.querySelector('.recaptcha-checkbox-checkmark')
) {
  document.querySelector('#recaptcha-anchor-label').innerHTML = "Jsem udavačská svině!";

  var evObj = document.createEvent('Events');
  evObj.initEvent('click', true, false);
  document.querySelector('.recaptcha-checkbox-checkmark').dispatchEvent(evObj);
}
