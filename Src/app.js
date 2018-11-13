
$('#login').click(function(){
    
    var loginGtr = G$('John', 'Doe');
    
    loginGtr.setLang($('#lang').val()).setDir($('#direction').val());
        
    if($('input:checked').val() === "Formal"){
            loginGtr.HTMLGreeting('#greeting', true);
    }else{
        loginGtr.HTMLGreeting('#greeting', false);
    }
    
    console.log(loginGtr.log());
    
    

});