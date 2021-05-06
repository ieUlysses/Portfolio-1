Conways portfolio

Hi Bulent, Sorry for the extreme delay in getting this submitted. 
Here’s a breakdown and a brief run-through of my code. You’ll see under src I have Components, Pages and Media as my main folders along with index files

Main structure ( index -> Pages.js ->Boiler.js)
	My main structure comes to be by following the above files. Index.js calls pages.js which stores my title for each section to be displayed and also the component that I want to show.
	Using .map in Pages.js the information gets passed onto Boiler.js which gives me 4 sections and also passes the section name onto Header.js

Components({Carousel, Card, Work experience}	Pages.js -> Boiler.js -> info file* -> Component)
	For my 3 main components they are specified in Pages.js in an object.Following this the components accompanying Info file *(found in Mission control) is called, here the components information such as titles or media is stored. The .map method is then used to pass the information to the component itself to get structured and rendered

