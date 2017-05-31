Copy this contents into div with <strong>slider</strong> id in <em>index.html</em>: 
<?php

$files = array_filter(glob("img/gallery/*.jpg"), 'is_file');

natsort( $files );

echo '<pre style="border: solid 1px Black; padding: 20px">';
foreach( $files as $file ) {
    echo  htmlspecialchars( '<div style="background-image: url(\'' . $file . '\')"></div>' ) . "\n";
      
}
echo '</pre>';