function formatField(fieldType) {
  return formatField.strategies[fieldType] || _.identity;
}

formatField.strategies = {
  date: function(input) {
    return input.getFullYear() + '-' + input.getMonth() + '-' + input.getDay();
  },

  email: function(input) {
    var splitedEmail = input.split('@');

    return splitedEmail[0]
  },

  number: function(input) {
    return Math.round(input);
  }
}

var formatEmail = formatField('email');
console.log(formatEmail('my-test@google.com'));
