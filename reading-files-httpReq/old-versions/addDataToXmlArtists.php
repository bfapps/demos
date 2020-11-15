<?php 

$songName = $_POST['song-name'];
$songTagName = $_POST['song-tag-name'];
$urlName = $_POST['url-name'];
$youtubeName = $_POST['youtube-name'];



$myXmlFile = fopen('artists.xml', 'a');
$text = "\n\t<" . $songTagName . ">\n\t\t<song-name>\n\t\t\t" . $songName . "\n\t\t</song-name>\n\t\t<url>\n\t\t\t" . $urlName . "\n\t\t</url>\n\t\t<youtube>\n\t\t\t" . $youtubeName . "\n\t\t</youtube>\n\t</" . $songTagName . ">\n";

fwrite($myXmlFile, $text);
fclose($myXmlFile);


?>