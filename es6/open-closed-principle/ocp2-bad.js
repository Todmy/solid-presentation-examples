function formatField(fieldType, input) {
  if(fieldType === 'email') {
    var splitedEmail = input.split('@');

    return splitedEmail[0]
  }

  if(fieldType === 'date') {
    return input.getFullYear() + '-' + input.getMonth() + '-' + input.getDay();
  }

  if(fieldType === 'number') {
    return Math.round(input);
  }
}



var formatedEmail = formatField('email', 'my-test@google.com');
console.log(formatedEmail);
