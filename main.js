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

    $('#quoridoor').click(function() {
        $("#quoridoor-skills").slideToggle("slow")
    })

    $('#readerly').click(function() {
        $("#readerly-skills").slideToggle("slow")
    })

    $('#taverntalk').click(function() {
        $("#taverntalk-skills").slideToggle("slow")
    })

    $('#triviahub').click(function() {
        $("#triviahub-skills").slideToggle("slow")
    })

});
