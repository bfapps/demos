<!DOCTYPE html>
<html lang='fa' dir='ltr'>

<head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>نتایج</title>
    <style media='screen'>
        * {
            box-sizing: border-box;
        }

        body {
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            padding: 0;
            margin: 0;
            background-color: #fdfdfd;
        }

        .sectionMsg {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f5f5f5;
            width: 300px;
            height: 150px;
            padding: 20px;
            font-size: 20px;
            color: #0c0c0c;
            border-radius: 5px;
            margin-top: 40px;
        }
        .sectionCharts {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        table {
          width: 90%;
          border-collapse: collapse;
          background-color: #f9f9fa;
          /* border: 2px #afafba solid; */
          direction: rtl;
          margin-bottom: 40px;

        }
        table th {
          background-color: #364f6b;
          color: white;
          padding: 1rem;
          text-align: right;
          font-size: 13px;
        }
        table > th:nth-child(1), td:nth-child(1) {
          text-align: right;
        }
        table td:nth-child(1) {
          width: 220px;
        }
        table td:nth-child(2) {
          width: 140px;
        }
        table td:nth-child(3) {
          position: relative;
        }
        table td {
          padding: 0 0.25rem 0 0.25rem;
          text-align: right;
        }
        table p {
          position: relative;
          z-index: 10;
          padding: 0;
          color: #0c0c0d;
        }
        .bgAbsolute {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: #ffda00;
          z-index: 0;
        }
        @media only screen and (max-width: 570px) {
          .sectionMsg {
            font-size: 15px;
            margin-top: 40px;
          }
          table th, table td {
            font-size: 11px;
          }
        }
        @media only screen and (max-width: 414px) {
          .sectionMsg {
            width: 90%;
          }
          table td:nth-child(2) {
            width: 120px;
          }
          table td:nth-child(3) {
            width: 180px;
          }
          table th, table td {
            font-size: 11px;
          }
        }
    </style>
</head>

<body>
    <?php
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $phoneNumber = $_POST['phoneNumber'];
    $votedName1 = $_POST['votedName1'];
    $votedName2 = $_POST['votedName2'];
    $votedName3 = $_POST['votedName3'];
    $votedName4 = $_POST['votedName4'];
    $votedName5 = $_POST['votedName5'];
    $votedName6 = $_POST['votedName6'];
    $votedName7 = $_POST['votedName7'];
    $votedName8 = $_POST['votedName8'];
    $votedName9 = $_POST['votedName9'];
    $votedName10 = $_POST['votedName10'];
    $votedName11 = $_POST['votedName11'];

    $phoneNumberFile = file_get_contents('./phoneslist.html');
    $validatestring = $phoneNumber . $fName;
    $validate = substr_count($phoneNumberFile, $validatestring);
    if ($validate !== 0) {
      $msg = "شما قبلا رای داده اید ! ❌";
    }
    elseif ($validate === 0) {
      $txt =  "<br>" . $votedName1 . "<br>" . $votedName2 ."<br>" . $votedName3 ."<br>" . $votedName4 ."<br>" . $votedName5 ."<br>" . $votedName6 . "<br>" . $votedName7 . "<br>" . $votedName8 . "<br>" . $votedName9 . "<br>" . $votedName10 . "<br>" . $votedName11 . "<br>";
      $detailedFile = fopen("$phoneNumber $fName $lName.html", "a") or die("Unable to open file!");
      fwrite($detailedFile, $txt);
      fclose($detailedFile);

      $allVotes = fopen("allvotes.html", "a") or die("Unable to open file!");
      fwrite($allVotes, $txt);
      fclose($allVotes);

      $addphone = fopen("phoneslist.html", "a");
      fwrite($addphone, '<br>' . $validatestring . '<br');
      fclose($addphone);
      $msg = "رای شما ثبت شد ✅";
    }
      ?>
    <?php
      $fileContent = file_get_contents('./allvotes.html');
      $person1 = substr_count($fileContent, 'یونا عباسی');
      $person2 = substr_count($fileContent, 'امیر علی سردارآبادی ششم');
      $person3 = substr_count($fileContent, 'فاطمه زهرا ملایجردی ششم');
      $person4 = substr_count($fileContent, 'فاطمه نقابی');
      $person5 = substr_count($fileContent, 'علی تشکری صالح');
      $person6 = substr_count($fileContent, 'امیررضا سردارآبادی ششم');
      $person7 = substr_count($fileContent, 'محمد حسن یوسف آبادی');
      $person8 = substr_count($fileContent, 'امید سردارآبادی');
      $person9 = substr_count($fileContent, 'ملیکا کلاته میمری');
      $person10 = substr_count($fileContent, 'محمد مصطفی میمری');
      $person11 = substr_count($fileContent, 'فاطمه سردارآبادی علی ششم');


     ?>
    <section class="sectionMsg" dir="rtl">
        <?php echo $msg; ?>
    </section>
    <ul style="display:none" id="ulList">
      <li>
        <li id="name1"><?php echo "یونا عباسی" ?></li>
        <li id="votes1"><?php echo $person1 ?></li>
      </li>
      <li>
        <li id="name2"><?php echo "امیر علی سردارآبادی ششم" ?></li>
        <li id="votes2"><?php echo $person2 ?></li>
      </li>
      <li>
        <li id="name3"><?php echo "فاطمه زهرا ملایجردی ششم" ?></li>
        <li id="votes3"><?php echo $person3 ?></li>
      </li>
      <li>
        <li id="name4"><?php echo "فاطمه نقابی" ?></li>
        <li id="votes4"><?php echo $person4 ?></li>
      </li>
      <li>
        <li id="name5"><?php echo "علی تشکری صالح" ?></li>
        <li id="votes5"><?php echo $person5 ?></li>
      </li>
      <li>
        <li id="name6"><?php echo "امیررضا سردارآبادی ششم" ?></li>
        <li id="votes6"><?php echo $person6 ?></li>
      </li>
      <li>
        <li id="name7"><?php echo "محمد حسن یوسف آبادی" ?></li>
        <li id="votes7"><?php echo $person7 ?></li>
      </li>
      <li>
        <li id="name8"><?php echo "امید سردارآبادی" ?></li>
        <li id="votes8"><?php echo $person8 ?></li>
      </li>
      <li>
        <li id="name9"><?php echo "ملیکا کلاته میمری" ?></li>
        <li id="votes9"><?php echo $person9 ?></li>
      </li>
      <li>
        <li id="name10"><?php echo "محمد مصطفی میمری" ?></li>
        <li id="votes10"><?php echo $person10 ?></li>
      </li>
      <li>
        <li id="name11"><?php echo "فاطمه سردارآبادی علی ششم" ?></li>
        <li id="votes11"><?php echo $person11 ?></li>
      </li>

    </ul>
    <section class="sectionCharts">
      <table>
        <tr>
          <th>اسامی</th>
          <th>تعداد آرای دریافتی</th>
          <th>درصد آرای دریافتی</th>
        </tr>
        <tr id="number1">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg1"></div></td>
        </tr>
        <tr id="number2">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg2"></div></td>
        </tr>
        <tr id="number3">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg3"></div></td>
        </tr >
        <tr id="number4">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg4"></div></td>
        </tr>
        <tr id="number5">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg5"></div></td>
        </tr>
        <tr id="number6">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg6"></div></td>
        </tr>
        <tr id="number7">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg7"></div></td>
        </tr>
        <tr id="number8">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg8"></div></td>
        </tr>
        <tr id="number9">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg9"></div></td>
        </tr>
        <tr id="number10">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg10"></div></td>
        </tr>
        <tr id="number11">
          <td></td>
          <td></td>
          <td><div class="bgAbsolute" id="bg11"></div></td>
        </tr>
      </table>

    </section>
<script>
// voted names
  const name1 = document.getElementById('name1').innerHTML;
  const name2 = document.getElementById('name2').innerHTML;
  const name3 = document.getElementById('name3').innerHTML;
  const name4 = document.getElementById('name4').innerHTML;
  const name5 = document.getElementById('name5').innerHTML;
  const name6 = document.getElementById('name6').innerHTML;
  const name7 = document.getElementById('name7').innerHTML;
  const name8 = document.getElementById('name8').innerHTML;
  const name9 = document.getElementById('name9').innerHTML;
  const name10 = document.getElementById('name10').innerHTML;
  const name11 = document.getElementById('name11').innerHTML;


  // voted numbers
  const votes1 = Number(document.getElementById('votes1').innerHTML);
  const votes2 = Number(document.getElementById('votes2').innerHTML);
  const votes3 = Number(document.getElementById('votes3').innerHTML);
  const votes4 = Number(document.getElementById('votes4').innerHTML);
  const votes5 = Number(document.getElementById('votes5').innerHTML);
  const votes6 = Number(document.getElementById('votes6').innerHTML);
  const votes7 = Number(document.getElementById('votes7').innerHTML);
  const votes8 = Number(document.getElementById('votes8').innerHTML);
  const votes9 = Number(document.getElementById('votes9').innerHTML);
  const votes10 = Number(document.getElementById('votes10').innerHTML);
  const votes11 = Number(document.getElementById('votes11').innerHTML);


  //percents
  let sum = votes1 + votes2 + votes3 + votes4 + votes5 + votes6 + votes7 + votes8 + votes9 + votes10 + votes11;
  const percent1 = (Math.floor((votes1 / sum) * 1000) / 10) + "%";
  const percent2 = (Math.floor((votes2 / sum) * 1000) / 10) + "%";
  const percent3 = (Math.floor((votes3 / sum) * 1000) / 10) + "%";
  const percent4 = (Math.floor((votes4 / sum) * 1000) / 10) + "%";
  const percent5 = (Math.floor((votes5 / sum) * 1000) / 10) + "%";
  const percent6 = (Math.floor((votes6 / sum) * 1000) / 10) + "%";
  const percent7 = (Math.floor((votes7 / sum) * 1000) / 10) + "%";
  const percent8 = (Math.floor((votes8 / sum) * 1000) / 10) + "%";
  const percent9 = (Math.floor((votes9 / sum) * 1000) / 10) + "%";
  const percent10 = (Math.floor((votes10 / sum) * 1000) / 10) + "%";
  const percent11 = (Math.floor((votes11 / sum) * 1000) / 10) + "%";

  // data
  var items = [
    { name: name1, value: votes1, percent: percent1, bg:"#ffda00" },
    { name: name2, value: votes2, percent: percent2, bg:"#ffad00" },
    { name: name3, value: votes3, percent: percent3, bg:"#21e6c1" },
    { name: name4, value: votes4, percent: percent4, bg:"#43dde6" },
    { name: name5, value: votes5, percent: percent5, bg:"#ffcef3" },
    { name: name6, value: votes6, percent: percent6, bg:"#ff304f" },
    { name: name7, value: votes7, percent: percent7, bg:"#f5b5fc" },
    { name: name8, value: votes8, percent: percent8, bg:"#ff5959" },
    { name: name9, value: votes9, percent: percent9, bg:"#feb062" },
    { name: name10, value: votes10, percent: percent10, bg:"#fff4e3" },
    { name: name11, value: votes11, percent: percent11, bg:"#00daff" }
  ];

  // sort by value
  items.sort(function (a, b) {
    let comparision = b.value - a.value;
    if (comparision === 0) {
      return 1;
    }
    else {
      return comparision;
    }
  });

  let number1 = document.querySelectorAll("#number1 td");
  number1[0].innerHTML =  items[0].name;
  number1[1].innerHTML =  items[0].value;
  number1[2].innerHTML = '<p>' + items[0].percent + '</p>' + '<div class="bgAbsolute" id="bg1"></div>';
  document.querySelector("#bg1").style.width = items[0].percent;
  document.querySelector("#bg1").style.backgroundColor = items[0].bg;

  let number2 = document.querySelectorAll("#number2 td");
  number2[0].innerHTML =  items[1].name;
  number2[1].innerHTML =  items[1].value;
  number2[2].innerHTML = '<div class="bgAbsolute" id="bg2"></div>' + '<p>' + items[1].percent + '</p>';
  document.querySelector("#bg2").style.width = items[1].percent;
  document.querySelector("#bg2").style.backgroundColor = items[1].bg;

  let number3 = document.querySelectorAll("#number3 td");
  number3[0].innerHTML =  items[2].name;
  number3[1].innerHTML =  items[2].value;
  number3[2].innerHTML = '<div class="bgAbsolute" id="bg3"></div>' + '<p>' + items[2].percent + '</p>';
  document.querySelector("#bg3").style.width = items[2].percent;
  document.querySelector("#bg3").style.backgroundColor = items[2].bg;

  let number4 = document.querySelectorAll("#number4 td");
  number4[0].innerHTML =  items[3].name;
  number4[1].innerHTML =  items[3].value;
  number4[2].innerHTML = '<p>' + items[3].percent + '</p>' + '<div class="bgAbsolute" id="bg4"></div>';
  document.querySelector("#bg4").style.width = items[3].percent;
  document.querySelector("#bg4").style.backgroundColor = items[3].bg;

  let number5 = document.querySelectorAll("#number5 td");
  number5[0].innerHTML =  items[4].name;
  number5[1].innerHTML =  items[4].value;
  number5[2].innerHTML = '<p>' + items[4].percent + '</p>' + '<div class="bgAbsolute" id="bg5"></div>';
  document.querySelector("#bg5").style.width = items[4].percent;
  document.querySelector("#bg5").style.backgroundColor = items[4].bg;

  let number6 = document.querySelectorAll("#number6 td");
  number6[0].innerHTML =  items[5].name;
  number6[1].innerHTML =  items[5].value;
  number6[2].innerHTML = '<p>' + items[5].percent + '</p>' + '<div class="bgAbsolute" id="bg6"></div>';
  document.querySelector("#bg6").style.width = items[5].percent;
  document.querySelector("#bg6").style.backgroundColor = items[5].bg;

  let number7 = document.querySelectorAll("#number7 td");
  number7[0].innerHTML =  items[6].name;
  number7[1].innerHTML =  items[6].value;
  number7[2].innerHTML = '<p>' + items[6].percent + '</p>' + '<div class="bgAbsolute" id="bg7"></div>';
  document.querySelector("#bg7").style.width = items[6].percent;
  document.querySelector("#bg7").style.backgroundColor = items[6].bg;

  let number8 = document.querySelectorAll("#number8 td");
  number8[0].innerHTML =  items[7].name;
  number8[1].innerHTML =  items[7].value;
  number8[2].innerHTML = '<p>' + items[7].percent + '</p>' + '<div class="bgAbsolute" id="bg8"></div>';
  document.querySelector("#bg8").style.width = items[7].percent;
  document.querySelector("#bg8").style.backgroundColor = items[7].bg;

  let number9 = document.querySelectorAll("#number9 td");
  number9[0].innerHTML =  items[8].name;
  number9[1].innerHTML =  items[8].value;
  number9[2].innerHTML = '<p>' + items[8].percent + '</p>' + '<div class="bgAbsolute" id="bg9"></div>';
  document.querySelector("#bg9").style.width = items[8].percent;
  document.querySelector("#bg9").style.backgroundColor = items[8].bg;

  let number10 = document.querySelectorAll("#number10 td");
  number10[0].innerHTML =  items[9].name;
  number10[1].innerHTML =  items[9].value;
  number10[2].innerHTML = '<p>' + items[9].percent + '</p>' + '<div class="bgAbsolute" id="bg10"></div>';
  document.querySelector("#bg10").style.width = items[9].percent;
  document.querySelector("#bg10").style.backgroundColor = items[9].bg;

  let number11 = document.querySelectorAll("#number11 td");
  number11[0].innerHTML =  items[10].name;
  number11[1].innerHTML =  items[10].value;
  number11[2].innerHTML = '<p>' + items[10].percent + '</p>' + '<div class="bgAbsolute" id="bg11"></div>';
  document.querySelector("#bg11").style.width = items[10].percent;
  document.querySelector("#bg11").style.backgroundColor = items[10].bg;





</script>
</body>

</html>
