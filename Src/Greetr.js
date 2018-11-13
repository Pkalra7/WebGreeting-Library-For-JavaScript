/*We want to create a new execution context so that all of out variables declared are safe and we're only exposing on the global object what we want*/

/*Wrap up some code in a way in order to make any code inside of it safe and pass to it what we need access too. We need access to the global varb which is window and the jquery variable which is either the word jquery or a dollar sign. 
*/

/*we're going to imitate jquery's structure*/
(function(global) {
    
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }  
  
    var supportedLangs = ['en', 'es', 'fr'];
    
    //Contains informal entry and exit greetings
    var greetings = {
        
        entryGreetings : {
            en: 'Hello',
            es: 'Hola',
            fr: 'Salut'
        
        },
        
        exitGreetings : {
            en: 'See you later',
            es: 'Chao',
            fr: 'Salut'
        }
        
        
    };
    
    //Containts formal entry and exit greetings
    var formalGreetings = {
        
        entryGreetings: {
            en: 'Greetings',
            es: 'Saludos',
            fr: 'Bonjour'
        },
        
        exitGreetings: {
            en: 'Goodbye',
            es: 'Adiós',
            fr: 'Au revoir'
        }
    };
    
    //Log messages for console
    var logMessages = {
        en: 'Logged in',
        es: 'Incio sesion',
        fr: 'connectée'
        
    };
    
    //
    Greetr.prototype = {
        
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        //checks if language is valid/available
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },
        
        //entry informal greetings 
        greeting: function(direction){
            if(direction === 'entry')
                return greetings.entryGreetings[this.language] + ' ' + this.firstName + '!';
            else
                return greetings.exitGreetings[this.language] + ' ' + this.firstName + '!';
                
        },
        
        //entry formal greetings
        formalGreeting: function(direction){
            if(direction === 'entry')
                return formalGreetings.entryGreetings[this.language] + ', ' + this.fullName();
            else
                return formalGreetings.exitGreetings[this.language] + ', ' + this.fullName();
        },
        
        //calls appropriate greeting based on formal/informal and entry/exit parameters
        greet: function(formal, direction){
            var msg;
            
            //if undefined or null, will be coerced to false
            if (formal) {
                msg = this.formalGreeting(direction);
        
            }else{
                msg = this.greeting(direction);
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
        
        //JQuery support
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