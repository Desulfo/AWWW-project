$(function(){
    //Only numbers in phone
    $("#phone").keypress(function(event){
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)){
           return false
        }
        else{
            return true
        }

    })
    //Contact validation
    $(".submit").click(function(event){
        console.log("kliknięty")
        
        const name= $("#name").val(),
            email= $("#email").val(),
            phone= $("#phone").val(),
            title= $("#title").val(),
            message= $("#message").val()
        var dl=email.length
        if (name.length<3){
            event.preventDefault()
            console.log("name za krótki")
        } else{
        }
        if (email.length<9 ){
            event.preventDefault()
            console.log("mail za krótki")
        } else{
        }
        if (email[0] == "@" ){
            event.preventDefault()
            console.log("@ pierwsza")
        } else{
        }
        if (email[email.length-1] == "@"){
            event.preventDefault()
            console.log("@ ostatnia")
        }
        else {
        }   
        if (phone.length<9){
            event.preventDefault()
            console.log("phone za krótki")
        } else{
        }
        if (title.length<3){
            event.preventDefault()
            console.log("title za krótki")
        } else{
        }
        if (message.length<3){
            event.preventDefault()
            console.log("message za krótki")
        } else{
        }
    })
})