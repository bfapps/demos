<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="stylesheet" href="./assets/css/index.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
  <script defer src="https://use.fontawesome.com/releases/v5.1.1/js/all.js" integrity="sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a" crossorigin="anonymous"></script>
  <style media="screen">
    * {
      box-sizing: border-box;
    }
    body {
      min-height: 100vh;
      overflow-x: none;
      background-color: #f1f1f1;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    main {
      position: relative;
      background: #f6f6f6;
      border-radius: 5px;
      width: 800px;
    }
    main .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    main .logo .logo-img {
      margin: 15px;
      height: 100px;
      width: 100px;
      border-radius: 50px;
      background: white;
    }
    main .choices {
      width: 100%;
      padding: 0 30px;
    }
    main ul {
      margin: 30px 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(5, 150px);
      grid-row-gap: 25px;
    }
    main ul li {
      display: flex;
      justify-content: center;
      /* background: red; */
    }
    main ul li button {
      width: 130px;
      height: 30px;
      display: grid;
      place-content: center;
      padding: 20px 0;
      background-color: #F5F5F5;
      border-radius: 5px;
      border: 0 solid #fff;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1),
      -4px -4px 4px rgba(200, 200, 200, 0.1);
      color: #161616;
      text-transform: capitalize;
      cursor: pointer;
      transition: all 300ms;

    }
    main ul li button:hover {
      background-color: #595959;
      color: #fff;
      box-shadow: none;
    }
    @media (orientation: landscape) and (max-width: 900px) {
      body {
        padding: 50px 0;
      }
    }
    @media (max-width:850px) {
      body {
        padding: 0px 15px;
      }
      main {
        width: 100%;
      }
      main ul {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media (max-width: 850px) and (max-height: 800px) {
      body {
        padding: 15px 15px;
      }
    }
    @media (max-width: 600px) {
      main .choices {
        padding: 0 20px;
      }
      main ul {
        grid-template-columns: repeat(2, 1fr);
        margin: 20px 0;
      }
    }
    @media (max-width: 360px) {
      main ul li button {
        width: 105px;
      }
    }
  </style>
</head>
<body>
  <main>
    <div class="logo">
      <div class="logo-img">
        <?php
        // $xml = simplexml_load_file("./assets/xml/rules.xml") or die("not found");
        // echo $xml -> text;

        $xml = new DOMDocument();
        $xml->load('./assets/xml/rules.xml');
        $note = $xml->getElementsByTagName('note');
        $book = $xml -> getElementsByTagName('note');
        $mytext = $xml ->createTextNode("Copyright ");
        $book -> appendChild($mytext);

//re-save
        $xml->save("./assets/xml/rules.xml");
        ?>
      </div>
    </div>
    <div class="options">
      <button type="button" name="button">Time</button>
      <button type="button" name="button">Mafia</button>
      <button type="button" name="button">Report</button>
    </div>
    <div class="choices">
      <ul>
        <li><button type="button" name="button">Person 1</button></li>
        <li><button type="button" name="button">Person 2</button></li>
        <li><button type="button" name="button">Person 3</button></li>
        <li><button type="button" name="button">Person 4</button></li>
        <li><button type="button" name="button">Person 5</button></li>
        <li><button type="button" name="button">Person 6</button></li>
        <li><button type="button" name="button">Person 7</button></li>
        <li><button type="button" name="button">Person 8</button></li>
        <li><button type="button" name="button">Person 9</button></li>
        <li><button type="button" name="button">Person 10</button></li>
        <li><button type="button" name="button">Person 11</button></li>
        <li><button type="button" name="button">Person 12</button></li>
        <li><button type="button" name="button">Person 13</button></li>
        <li><button type="button" name="button">Person 14</button></li>
        <li><button type="button" name="button">Person 15</button></li>
      </ul>
    </div>
  </main>
</body>
</html>
