# solar_landing_page

To practice building a UI from scratch and then turning it into a fully functioning webpage I built this landing page for a fake solar company.   

**To view the final product follow this link:**    
[https://paul-schultz.github.io/solar_landing_page/](https://paul-schultz.github.io/solar_landing_page/)

To learn about how I built the page keep reading!  

I started the project by creating a picture of a house with solar panels on it using an isometric grid in vector illustration software:  
![Vector Design Gif](./readme_files/gif/vector.gif)  

I decided to use an analagous color palette for the design, for a rich monochromatic look:  
![Color Palette](./readme_files/img/palette.svg)  

Then I exported the asset as an .svg file into my project directory and added a solid background with CSS:  
![Before text image](./readme_files/screenshot/before_text.png)  

Followed by some content; a company logo, navbar, tagline, and call to action button:  
![After text image](./readme_files/screenshot/after_text.png)  

After getting the webpage set up it was time to bring it to life. The font I used, B6B12 Monospace, had a futuristic feel to it. So I thought it would be cool to animate the text so it looked like someone was typing it out on a computer. After the text was all typed out I had the call to action button fade in on queue:  
![Type Animation Gif](./readme_files/gif/type.gif)  

Pretty happy with how that turned out. Now came the time to optimize for tablet. To do this I created a hamburger menu that appears when the browser shrinks to 1024px. If the hamburger menu button is pressed, the navbar appears in the form of an overlay. From here the user can follow one of the nav links, or press the X button to return to the landing page.
![Tablet Menu Gif](./readme_files/gif/tablet.gif)  