# Browserdetect
A small javascript function that detects browser and version.

## How to use
When the script is run it will automatically add classes and data- attributes to your `<html>`

For example, running Chrome 49.
<br />`<html data-browser="chrome" data-version="49" class="chrome49 chrome">`


### Adding styles for a specific browser

`html[data-browser="chrome"][data-version="49"]{   /* Apply styles for Chrome 49 */   }`
<br /> or you can use the class
<br />`html.chrome {   /* Apply styles for all Chrome browsers */   }`
<br />`html.ie11 {   /* Apply styles for Internet Explorer 11  */   }`
<br />
<br /> Note that Internet Explorer 6 doesn't support attribute selectors. [Source](http://caniuse.com/#feat=css-sel2)

## Compatibility (Tested Browsers and OS)
### Microsoft Edge
+ Version 13 (Windows 10)
+ Version 12 (Windows 10)

### Internet Explorer
+ Version 11 (Windows 10 / 8.1)
+ Version 10 (Windows 8)
+ Version 9 (Windows 7)
+ Version 8 (Windows 7)
+ Version 7 (Windows XP)
+ Version 6 (Windows XP)

### Safari
+ Version 9 (OS X El Capitan / iOS)
+ Version 8 (OS X Yosemite / iOS)
+ Version 7.1 (OS X Mavericks / iOS)
+ Version 6.2 (OS X Mountain Lion)
+ Version 6 (OS X Lion)
+ Version 5 (Windows 10 / 8.1 / 8 / 7 / XP / Snow Leopard)
+ Version 4 (Snow Leopard)

### Mozilla Firefox
+ Version 3-15 (Windows XP)
+ Version 16-44 (Windows 8.1)

### Google Chrome
+ Version 14-49 (Windows XP)
+ Version 49 (OS X)

### Opera
+ Version 11 (Windows XP / 8.1)
+ Version 12 (Windows XP / 8.1)
+ Version 35 (Windows 10)

## Credits
[kennebec and Hermann Ingjaldsson](http://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser)
