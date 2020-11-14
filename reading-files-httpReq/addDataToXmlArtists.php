<?php 

$songName = $_POST['song-name'];
$songTagName = $_POST['song-tag-name'];
$urlName = $_POST['url-name'];
$youtubeName = $_POST['youtube-name'];

$myXmlFile = fopen('artists.xml', 'a');

$text = '<' . $songTagName . '> ' . '<song-name>' . $songName . "</song-name> <url>" . $urlName . "</url> <youtube>" . $youtubeName . '</youtube>' . '</' . $songTagName . '>';

fwrite($myXmlFile, $text);
fclose($myXmlFile);


?>