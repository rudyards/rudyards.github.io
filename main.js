$(document).ready(() => {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })

    $('#snugcircle-container').mouseover(function() {
        $(".snugcircle-skills").show()
    })

    $('#snugcircle-container').mouseleave(function(){
        $(".snugcircle-skills").hide()
    })

    $('#adventure-container').mouseover(function() {
        $(".adventure-skills").show()
    })

    $('#adventure-container').mouseleave(function(){
        $(".adventure-skills").hide()
    })

    $('#instigator-container').mouseover(function() {
        $(".instigator-skills").show()
    })

    $('#instigator-container').mouseleave(function(){
        $(".instigator-skills").hide()
    })


});