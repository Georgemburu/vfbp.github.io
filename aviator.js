<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aviator Betting Strategy</title>
    <link rel="stylesheet" href="./nav.css"/>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin: 0;
            background-color: #f8f9fa;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            margin-bottom: 20px;
        }
        button {
            padding: 15px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid #333;
            background-color: #f0f0f0;
            transition: background-color 0.3s;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }
        button.blue {
            background-color: #007bff;
            color: white;
        }
        button.purple {
            background-color: #800080;
            color: white;
        }
        button.pink {
            background-color: pink;
            color: white;
        }
        button:hover {
            background-color: #ddd;
        }
        .tip {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
            /* visibility: hidden; */
            text-align: center;
            background-color: yellow;
        }
        h1,p {
            font-size: 24px;
            text-align: center;
            /* margin-bottom: 20px; */
            margin: 0;
            padding: 0;
        }
    
    </style>
</head>
<body>

    <h1>Aviator Betting Strategy</h1>
    <p>Click the button that coresponds with the previous outcome in aviator</p>
    <div id="tip" class="tip">Hello</div>
    <div class="button-container">
        <button class="blue" onclick="handleBlueClick()">Blue < 1.20x</button>
        <button class="blue" onclick="handleBlueOver1point20Click()">Blue > 1.20x</button>
        <button class="purple" onclick="handlePurpleClick()">Purple</button>
        <button class="pink" onclick="handlePinkClick()">Pink</button>
    </div>

    <div id="tip" class="tip">Hello</div>

    <script>
        function handleBlueClick() {
            document.getElementById('tip').textContent = "Tip: Bet next as 1.20x";
            document.getElementById('tip').style.visibility = "visible";
        }

        function handlePurpleClick() {
            document.getElementById('tip').textContent = "Tip: Bet next rounds till u get 2.50x or 3.00x";
            document.getElementById('tip').style.visibility = "visible";
        }

        function handleBlueOver1point20Click() {
            document.getElementById('tip').textContent = "Tip: Don't bet";
            document.getElementById('tip').style.visibility = "visible";
        }

        function handlePinkClick() {
            document.getElementById('tip').textContent = "Tip: Don't bet";
            document.getElementById('tip').style.visibility = "visible";
        }
    </script>

     <!-- First Bottom Navigation -->
     <div class="bottom-nav">
        <a href="./index.html">Home</a>
        <a href="./aviator.html" class="active">Aviator</a>
        <a href="./forex.html">Forex</a>
    </div>
</body>
</html>
