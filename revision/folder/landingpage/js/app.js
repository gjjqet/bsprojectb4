$(document).ready(function(){

    //Start Back to Top

    $(".backtotops").hide();
    $(window).scroll(function(){
        const getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 370){
            $(".backtotops").fadeIn(1000);
        }else{
            $(".backtotops").fadeOut(1000);
        }

    })

    //End Back to Top

    //Start Navbar Section
    $(window).scroll(function(){
        const getscrolltop = $(this).scrollTop();

        if(getscrolltop >= 200){
            $(".navbar").addClass("navbarsecond");
        }else{
            $(".navbar").removeClass("navbarsecond");
        }

    })

        $(".navbar-toggler").click(function(){
            $(this).toggleClass("crossxs");
        })

    //End Navbar Section

    //Start Property Section

    $(".propertylists").click(function(){

        $(this).addClass("activeitems").siblings().removeClass("activeitems");
    
        // const filtervalue = $(this).attr("data-filter");
        const filtervalue = $(this).data("filter");
        console.log(filtervalue);
    
        if(filtervalue === "all"){
            $(".filters").show();
        }else{
            
            $(".filters").not("."+filtervalue).hide();
            $(".filters").filter("."+filtervalue).show();
        }
    
    })

    //End Property Section
    
   
    
    //Start Adv Section
    $(window).scroll(function(){
        const getscrolltop = $(this).scrollTop();
    
        if(getscrolltop >= 1000){
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else{
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights")
        }
    
    })
    //End Adv Section


    //Start Footer Section
    const getyear = document.getElementById("getyear");
    const getfulyear = new Date().getFullYear();
    getyear.textContent = getfulyear;
    //End Footer Section

})


