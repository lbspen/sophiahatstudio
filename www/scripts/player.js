var app = app || {};

app.player = function() {

    function run() {
        if (!flowplayer) {
            console.log("no flowplayer");
        } else {
            flowplayer.conf.embed = false;
        }

        $('.flowplayer').flowplayer({
            fullscreen : false
        });
        $(function()
        {
            $('.scroll-pane').jScrollPane({
                horizontalGutter:30,
                verticalGutter:30
            });
        });
    }
    return {
        run: run
    }
} ();

app.player.run();

