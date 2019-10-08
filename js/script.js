$( "document" ).ready(function() {
    $("#button").click(function(){
        let input = $(".input").val();
        let vowels = ["a","e","i","o","u"]
        if (vowels.includes(input.charAt(0)){
            let first = input.charAt(0);
            let second = input.substring(1);
            let final = second + first + "ay";
            $("p2").text("final");
    }
    else {




        $("p2").text("hi");
         }
    });
});