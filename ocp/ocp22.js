var filtersStrategy = {
    strategies: {
      date: function(input) {
        return input.getFullYear() + '-' + input.getMonth() + '-' + input.getDay();
      },

      email: function(input) {
        var splitedEmail = input.split('@');

        return { splitedEmail[1]: splitedEmail[0] };
      },

      number: function(input) {
        return Math.round(input);
      }
    },

    transform: function(fildType, input) {
      var format = this.strategies[fildType] || _.identity;

      return format(input);
    }
  };
