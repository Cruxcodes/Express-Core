$("#distribution-service").click(function (e) { 
    e.preventDefault();
    $("#domestic-content-container").toggle("");
    $("#cadet").toggleClass("cadet-icon-up .cadet-icon-down");
 
});
$("#cadet").click(function (e) { 
    $(".domestic-content-container").toggle("");
    $("#cadet").toggleClass("cadet-icon-up .cadet-icon-down");
    
});