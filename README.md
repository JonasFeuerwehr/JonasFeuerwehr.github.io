<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Importieren vom CSS -->
    <link rel="stylesheet" href="/love/style.css">

    <!-- Webseiten Titel und FavIcon -->
    <title>Love Link</title>
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/677/677684.png">
</head>

<body>

    <!-- Preloader -->
    <div id="preloader" style="display: none;"></div>

    <!-- Preloader Funktion -->
    <script>
        var loader = document.getElementById("preloader");
    
        function disableLoader() {
            var loader = document.getElementById("preloader");
            loader.style.display = "none";
        }
    
        setTimeout(function() {
            loader.style.display = "none";
        }, 1500);
    
    </script>

    <!-- Love Seite -->
    <div class="love-container">
        <h1>Welcome to Love Link</h1>
        <p>Calculate your Love Strength. ❤</p>
        
        <!-- Namensfelder -->
        <div>
            <label for="name1">Enter Name:</label>
            <input type="text" id="name1" placeholder="Pookie 1">
        </div>
        
        <div>
            <label for="name2">Enter Name:</label>
            <input type="text" id="name2" placeholder="Pookie 2">
        </div>

        <!-- Calculate Button -->
        <button onclick="calculateLoveStrength()">❤ Calculate ❤</button>

    </div>

    <!-- Script Einbetten -->
    <script src=">https://github.com/JonasFeuerwehr/testwebseite1.de/blob/main/js.js</script>
    


</body></html>
