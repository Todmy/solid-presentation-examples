function formatField(fieldType, input) {
  var format = formatField.strategies[fieldType] || _.identity;

  return format(input);
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

var formatedEmail = formatField('email', 'my-test@google.com');
console.log(formatedEmail);
