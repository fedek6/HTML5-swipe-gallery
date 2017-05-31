![HTML5 Swipe Gallery](http://realhe.ro/projects/HTML5-Swipe-Gallery/promo_mini.jpg "Logo Title Text 1")
# HTML5 Swipe Gallery
Fullscreen swipe gallery with pinchzoom support based on HTML5 for kiosk use. It was tested during exhibition in National Museum in Warsaw.

__But why HTML?__
We nedded gallery with pinch zoom that runs in Kiosk Pro App which supports only websites.

## Requirements
My solution works great with [Kiosk Pro App](http://www.kioskproapp.com/) on iPad Air 2 (iOS 10.3.2). It was also tested on Galaxy Tab 10.1 but was unresponsive. 

## API and usage
Please check main.js in src directory. Everything is based on scripts listed below.

__Installation:__
* Adjust image quality to your needs. To big files may render very slow 
* Put your files into img/gallery directory
* Use list.php or list.sh to generate markup for your gallery
* Paste generated text into index.html file

## Third party scripts
* [RTP.PinchZoom.js](http://manuelstofer.github.io/pinchzoom/)
* [Swipe](https://github.com/thebird/Swipe) – forked by me, please do not update.
* [jQuery](https://github.com/jquery/jquery-dist)

## Demo
http://realhe.ro/projects/HTML5-Swipe-Gallery/
 
### Author notes 
Visit http://blog.realhe.ro if you like my work. 