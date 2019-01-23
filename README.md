# Barry's Strava 2018

My Interactive Frontend Development project App is inpsired by my own cycling experiences and the current Apps that I use to track my progress and save my history.

I use [Strava](https://www.strava.com/)

Strava is a social fitness network that is primarily used to track cycling and running using GPS data. Strava allows you to share your activities with some key data displayed as well as images, **but no correlations.**

I also use [VeloViewer](https://www.veloviewer.com/)

Strava spin-off Veloviewer started out as a software side project and ended up being adopted by the pro peloton. When creator Ben Lowe’s wife fell pregnant with their second child in 2012, the understandable early nights for his spouse meant Lowe had plenty of time to revive his passion and get into web development once again.

VeloViewer is an alternate Strava dashboard offering full, filterable lists of your activities and current segment placings. High level overviews of your progress along with the ability to dive deeper into your activity data with interactive visualisations lets you get the most from your efforts. Veloviewer allows you to delve deep into your Strava data, study segments, leaderboards, etc., **but it is all data, and nothing emotive or personal, i.e. personal text/notes, photos, etc.**

My App, for use by athletes at year end, would combine both data and a user’s preferred images/text to make - yes, a data driven App, but also one which can tell a story by allowing a user to add their own detail (text, images) and their own first hand (and data driven) analysis of their year.

Strava’s year end videos (as displayed in my App) are nice and widely shared, but I think my tailored year end experience App would be shared and saved for posterity much more.

Cyclists love sharing their activities, but also love showing off their rides.
My App would allow users to highlight their equipment front & centre.

My App is more like a diary entry of a users year in data,
by allowing users to add text, images and emotions.

https://github.com/barra1212/college-project-dashboard-strava/blob/master/documentation/Barry-Cunningham-IFD-Project-Plan.pdf

<hr/>

## UX

#### User Stories
 
- I am a keen cyclist and I love to take photos on my various rides with friends and normally add them to my Strava activity or share them separately on Facebook. I would love an App that could allow me to share my ride data all at once, but also pick & choose which photos to share and add in notes if desired.

- Mary is the project coordinator of a charity cycle. She wants to be able to create blog posts etc. after the event, but she also wants to single out specific achievements of various athletes who have overcome many mental and physical obstacles to complete the event. Being able to add data visualisations to her blog post would achieve this.

- John is PRO of a large cycling club who have been awarded the hosting of the Munster Cycling Championships. He wants a platform where he can publish the results of the event, along with images and the impressive data of the overall winners and various category (speed, climbing, averages, power, etc.) winners.

#### Design Considerations

Strava’s branding is predominantly white (clean) and their logo is orange. My design will piggy back on the success of their branding which is widely recognised. Using orange, which is a favourite colour of mine is a win-win in my opinion.

Design will be clean with minimum decoration or straying from a minimalistic layout. The only bespoke design will be a reloadPage button which will hover and animate at top right of browser window on all devices. Animation will be enough for users to know it’s there, but not so much that it is an annoyance.

Minimal use of colour will also be added to D3 element’s out-of-the-box styling. Enough to make the design my own, but not taking from the tried and tested defaults.

Use of my own language/story and neatly placed “real” images at the foot of the App will convey to the user that this is indeed a real diary of a real person’s real activities, ... and that they can have the very same and more if they choose to use the App.

![Design Considerations](/documentation/Barrys-Strava-2018-Design-Considerations.png)

#### Responsive Design

The App is designed to work on all devices, with the caveat that D3 charts are not responsive.

Proposed layout -

![Mobile Layout](/documentation/Barrys-Strava-2018-Responsive-Layout-1.png)

![Tablet Layout](/documentation/Barrys-Strava-2018-Responsive-Layout-2.png)

![Desktop Layout](/documentation/Barrys-Strava-2018-Responsive-Layout-3.png)


## Features

##### Navigation
- Simple one page App. Navigation by way of HTML anchor links to various points on the page.

![Navigation](/documentation/Barrys-Strava-2018-Navigation.png)

##### Reset / Reload Page

- Bespoke button to "reloadPage" hovers and animates at top right of browser window on all devices. Animation will be enough for users to know it’s there, but not so much that it is an annoyance.

##### Crossfilter

- Crossfilter Javascript library in installed connecting and rendering data to various D3 charts.

##### Possible feature to implement

- Another feature that could be implemented is connecting HTML elements to the crossfilter functionality. It would be good if clicking images of gear/bikes would trigger the data charts to behave the same as clicking on a crossfilter elements themselves.  I did research this to no avail. I think bespoke functions could be written further along in my learning.

<hr/>

## Technologies Used

- [CSS](https://bootswatch.com/)

This App is constructed in HTML using a simple bootstrap framework boilerplate template called "United" from Bootswatch.com

Default CSS is used throughout and further styled with the file - /assets/css/style.css


- [Javascript](https://www.javascript.com/)
    - The App uses Crossfilter, D3, DC and Queue pre-installed **Javascript** libraries.
    - Bespoke functions are written in the file - /assets/js/barry.strava.js


- [JQuery](https://jquery.com)
    - The project uses **JQuery** to enable hamburger dropdown menu on smaller mobile devices.

<hr/>

## Testing

##### User Stories addressed

- The App addresses the needs/wants of submitted user stories by showing that Strava data can be easily downloaded, and displayed in a neat intuitive manner while also allowing users to feature their own bikes/gear and add their own text/photos, etc.

##### Design

- The responsiveness of the App was tested in MAC OSX Safari, Firefox and Chrome browser windows at varying sizes and displays as intended/desired.

- The responsiveness of the App was tested in iPhone6 Chrome and Safari Apps and displays as intended/desired.

- Also tested on a random selection of phones, tablets and desktop browsers using https://www.browserstack.com/
extension in Firefox.

- The D3 charts are not responsive, as expected, nor do the guidelines of the project require them to be.

##### Code

- HTML code checked with validator.W3.org returns
    - Document checking completed. No errors or warnings to show.

- CSS code checked with validator.W3.org returns one error
    - Property **r** (radius of SVG circle) doesn't exist - This is related to pin pointing one specific data point and styling with bespoke CSS. Property **r** may not exist, but it does work.

- Javascript checked through JSHint.com returns no errors

##### Bug

- A bug that encountered was with the Bootswatch template I used, where the hamburger menu button collapse feature did not work as desired. On click the menu opened, but closed straight away.

- The issue was resolved with - `.navbar-collapse.collapse.in{display: block!important;}`

- CREDIT: https://stackoverflow.com/questions/25878450/bootstrap-collapsed-navbar-buggy-open

- An anomally in data encountered was where I had done three separate activities in one day, and the average speed was grouped, thus displaying an unachievable average speed for a bicycle (c. 70kmph). Activity Lines 19 & 20 were removed to rectify.

<hr/>

## Deployment

The App is deployed to GithubPages for review

https://barra1212.github.io/college-project-dashboard-strava/

<hr/>

## Credits

#### Content
- The dataset is made from my own 2018 Strava activities an downloaded directly as CSV from my [VeloViewer](https://www.veloviewer.com/) profile.

- The CSV dataset was converted to a JSON file via [csvjson.com](https://www.csvjson.com/csv2json) but I chose to use CSV

#### Media
- The text and images content are all my own.

- The video is an MP4 review of my 2018 activities generated by [Strava](https://www.strava.com/)

#### Acknowledgements

- I received inspiration from my own Strava experiences.

- I received Javascript support from Niel @ Code Institute and highlight same specifically in barry.strava.js