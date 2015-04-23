function coinwidget(buttons) {
    buttons.each(function() {
        var button = $(this);
        var coin = button.data('coin');
        var address = button.data('address');
        var icon = button.data('icon');
        
        button.html('<img src="' + icon + '"/> ' + coin);
        
        var help = "Click on the right button to send. If your wallet does not support the protocol copy the address the text box.<br/>Thanks for donating!";

        button.popover({
            title: '<img src= "' + icon + '" /> My ' + coin + ' address',
            html: 'true',
            trigger: 'click',
            content: '<div class="input-group"><input type="text" style="cursor:default" class="form-control" readonly onclick="this.select();" value="' + address + '"> <div class="input-group-addon"><a data-toggle="tooltip" data-placement="bottom" target="_blank" href="' + coin.toLowerCase() + ':' + address + '"><i class="fa fa-credit-card"></i></a></div></div class="row"><div><p></p><p>'+ help + '</p></div>',
            placement: 'bottom',
            container: 'body'
        }
        ).click(function(e) {
            e.preventDefault();
        });
    });
}