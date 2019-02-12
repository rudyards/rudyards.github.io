$(document).ready(() => {
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })

    $('#instigator').click(function() {
        $("#instigator-skills").slideToggle("slow")
    })

    $('#adventure').click(function() {
        $("#adventure-skills").slideToggle("slow")
    })

    $('#snugcircle').click(function() {
        $("#snugcircle-skills").slideToggle("slow")
    })

    $('#cuteorcuter').click(function() {
        $("#cuteorcuter-skills").slideToggle("slow")
    })

});
