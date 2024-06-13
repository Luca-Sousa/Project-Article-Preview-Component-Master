$(document).ready(function() {

    $('#share').click(function(){
        if($('#option-share').is(':visible')) {
            $('#user').show();
            $('#option-share').hide();
        } else {
            if ($(Window).width() < 1024){
                $('#user').hide();
            }
            $('#option-share').show();
        }
    });

    $('#back').click(function(){
        $('#option-share').hide();
        $('#user').show();
    });

});