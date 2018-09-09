/*We want to create a new execution context so that all of out variables declared are safe and we're only exposing on the global object what we want*/

/*Wrap up some code in a way in order to make any code inside of it safe and pass to it what we need access too. We need access to the global varb which is window and the jquery variable which is either the word jquery or a dollar sign. 
*/

/*we're going to imitate jquery's structure*/
(function(global, $){
    
  var Greetr = function(firstName, lastName, language){
      
      return new Greetr.init(firstName, lastName, language);
  }  
  
  Greetr.prototype = {};
  
  Greetr.init = function(firstName, lastName, language){
      
      var self = this;
      self.firstName = firstName || '' ;
      self.lastName = lastName || '' ;
      self.language = language || 'en' ;
      
      
  }
  
  Greetr.init.prototype = Greetr.prototype;
    
}(window,jQuery));