<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            padding: 0%;
            margin: 0%;
            overflow-x: hidden;
        }
        main {
            width: 500px;
            margin: 100px auto;
            background-color: #333333;
            overflow-x: hidden;
            overflow-y: auto;
            padding: 2em 3em;
            color: #f3f3f3;
            font-size: 1.2em;
        }
        article {
            height: 400px;
        }
        .chat-box {
            width: 100%;
            height: 2em;
            background-color: #f1f1f1;
            color: #333333;
            display: flex;
            align-items: center;
        }
        .chat-box input {
            display: inline-block;
            padding: 0 1em;
            height: 100%;
            display: grid;
            place-content: center;
            border: none;
        }
        #send-btn {
            color: white;
            background-color: dodgerblue;
        }
        .chat-box #text-input {
            width: 100%;
        }
    </style>
</head>
<body>
    <main>
        <article>
        </article>
        <form action="" method="POST">
            <div class="chat-box">
                <input type="submit" id="send-btn" value="Send">
                <input type="text" id="text-input" name="text-input">
            </div>
        </form> 
    </main>
    <script src="main.js"></script>
    <?php 
        $textinput = $_POST['text-input'];
        $chatfile = fopen('chat.json', 'w') or die("Unable to open file!");
        $txt = '[{"name": "unknown", "txt":"' . $textinput . '"}]';
        fwrite($chatfile, $txt);
        fclose($chatfile);
    ?>
</body>
</html>