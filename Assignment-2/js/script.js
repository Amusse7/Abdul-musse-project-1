$(document).ready(function(){

    let e_mobileNav=$("header nav .inner");
    let e_mobileNavTrigger=$("#mobile-nav-trigger");
    $(e_mobileNavTrigger).click(function(){
        e_mobileNav.slideToggle();
        e_mobileNavTrigger.toggleClass("active");
    });

    $(".modal").fadeIn();

    $(".modal .close").on("click", (e)=>{
        $(`#${e.currentTarget.dataset.target}`).fadeOut();
    });

    /* Carousel */
    var images=$(".carousel").find(".slides").children();
    var currIdx=0;
    $(".carousel .prev").click(prevImg);  
    $(".carousel .next").click(nextImg);  

    setInterval(nextImg, 7000);

    function nextImg(){
        images[currIdx].classList.remove("show");
        ++currIdx;

        if(currIdx>=images.length)
        currIdx=0;

        images[currIdx].classList.add("show");
    }

    function prevImg(){
        images[currIdx].classList.remove("show");
        --currIdx;

        if(currIdx<0)
        currIdx=images.length-1;

        images[currIdx].classList.add("show");
    }

    /* Form submission - Error handling */
    $(".form-1").on("submit",(e)=>{
        e.preventDefault();

        let e_status=$(".form-1 .status-text");
        let name=$("#f-name").val();
        let email=$("#f-email").val();
        let text=$("#f-text").val();

        if(!name || !email || !text)
        {
            e_status.text("All fields are required").show();
            return;
        }

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regexEmail)) 
        {
            e_status.text("Email address is not valid").show();
            return;
        }

        e_status.text("");
    });
});