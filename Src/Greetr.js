/*We want to create a new execution context so that all of out variables declared are safe and we're only exposing on the global object what we want*/

/*Wrap up some code in a way in order to make any code inside of it safe and pass to it what we need access too. We need access to the global varb which is window and the jquery variable which is either the word jquery or a dollar sign. 
*/

/*we're going to imitate jquery's structure*/
(function(global) {
    
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }  
  
    var supportedLangs = ['en', 'es', 'fr'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Salut'
        
    };
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fr: 'Bonjour'
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Incio sesion',
        fr: 'connectée'
        
    };
    
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        greet: function(formal){
            var msg;
            
            //if undefined or null, will be coerced to false
            if (formal) {
                msg = this.formalGreeting();
        
            }else{
                msg = this.greeting();
            }
            
            if(console){
                console.log(msg);
            }
            
            //to make this method chainable, 'this' refers to the calling object at execution time
            return this;
        },
        
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            return this;
        },
        
        setLang : function(lang){
            this.language = lang;
            
            this.validate();
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal){
            if(!$) {
                throw 'jQuery not loaded1';
            }
            
            if(!selector){
                throw 'Missing jQuery selector';
            }
            
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);
            
            return this;
        }
    } 
        
  
    Greetr.init = function(firstName, lastName, language){
        
        var self = this;
        self.firstName = firstName || '' ;
        self.lastName = lastName || '' ;
        self.language = language || 'en' ;
        
    }
  
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
    
}(window,jQuery));