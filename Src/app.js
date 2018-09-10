var g = G$('John', 'Doe');

g.greet(true).setLang('es').greet(true);

$('#login').click(function(){
    
    var loginGtr = G$('John', 'Doe');
    
    loginGtr.setLang($('#lang').val());
        
    if($('input:checked').val() === "Formal"){
            loginGtr.HTMLGreeting('#greeting', true);
    }else{
        loginGtr.HTMLGreeting('#greeting');
    }
    
    console.log(loginGtr.log());
});