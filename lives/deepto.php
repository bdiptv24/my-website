<?php



<!DOCTYPE html>
<html lang="en">

<head>
    <title>STARPLAY LIVE SPORTS</title>
    <meta name="robots" content="noindex,nofollow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <style>
        body,
        html {
            margin: 0;
            padding: 0;
        }

        .jwplayer {
            position: absolute !important;
        }

        .jwplayer.jw-flag-aspect-mode {
            min-height: 100%;
            max-height: 100%;
        }

        .jw-logo-container {
            position: absolute;
            top: 2%;
            right: 55%;
        }
    #logoContainer {
            position: absolute;
            top: 15px;
            right: 10px;
            z-index: 999;
        }

        #logoContainer img {
            max-width: 80px;
        }


        @media (min-width: 600px) {
            #myElement {
                max-width: 620px;
                max-height: 350px;
                margin-top: 50px;
                margin-left: 5%;
                margin-right: auto;
            }
        }

        @media (max-width: 600px) {
            #myElement {
                max-width: 320px;
                max-height: 180px;
                margin-top: 100px;
                margin-left: 5%;
                margin-right: auto;
            }
        }

        #myElement {
            box-shadow: 0 10px 50px rgba(148, 255, 149, 0.85), 5px 10px 50px rgba(0, 0, 0, 0.65);
        }

        p {
            margin-bottom: 50px;
            background-color: white;
            margin-left: auto;
            margin-right: auto;
            display: table;
            font-family: sans-serif;
            font-size: 20px;
            color: cornflowerblue;
        }

        #settingsContainer {
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 999;
        }

        #settingsContainer button {
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div id='logoContainer'>
        <img src='https://imgtr.ee/images/2023/12/26/1ce485d929f0c4b3bdef1810f915a21d.png' alt='Logo'>
    </div>
    <div id='myElement'>Loading the player...</div>


   <script type='text/javascript' src="//starplay2.netlify.app/player/freeiptv25_v2_jwplayercustom_jwplayer-7.11.0_jwplayer.js"></script>
    <script type='text/javascript'>
        jwplayer.key = "JTGE07Ok+RFyC39Hbk/0sU5pENovRRZIhEzX9Q==";
    </script>
    <script type='text/javascript'>
        this.player = jwplayer("myElement");
        this.player.setup({
            "preload": "auto",
            "hlshtml": true,
            "autostart": true,
            "primary": "html5",

            "displaydescription": false,
            "file": "https://byphdgllyk.gpcdn.net/DeeptoTV/deeptotv-manifest.m3u8",
            "title": "STAR PLAY",
            "displaytitle": true,
            "type": "hls",
            "id": "vemba_player_EvpUz",

"logo": {
                file: "",
                hide: false,
                position: "top-right",
                height: "30px",
                width: "40px",
                        },
            "controls": true,  // Enable default controls
            "controlbar": {
                "autoQualityButton": true  // Enable auto quality button
            }
        });

        var plugin = this.player.getPlugin();
        console.log('plugin:', plugin);
    </script>
</body>

</html>

?>