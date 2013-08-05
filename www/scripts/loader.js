var app = app || {};

app.loader = function() {

    function load() {
        Modernizr.load(
            [
                {
                    load: [
                        "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",
                        "http://releases.flowplayer.org/5.2.1/flowplayer.min.js",
                        "./scripts/jScrollPane.js",
                        "./scripts/player.js"
                    ]
                }
            ]
        )
    }
    return {
        load: load
    }

} ();

app.loader.load();