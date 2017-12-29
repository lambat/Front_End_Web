# Millennium DIY Website

CTEC3905 Front End Web App Development - Assignment 2

Zubair Lambat - P14149985 - Computer Science
- - -
# Introduction
This project is a website written using three languages: HTML5, CSS and JavaScript. This README file will aim to explain the motivation why I decided to choose this particular project. This file will also include initial wireframes and hand drawn plans of each section which will most likely be the final designs. There will also be a section which shows evidence of using user testing conducted by other users with feedback to act upon.

# Motivation
I decided to create a website based on DIY as this shop is ran by my father. It is a real shop based in the heart of Leicester. As he does not currently have a website and with his constant nagging of me creating one for him, I decided this would be the best situation to create one as I can hit two birds with one stone - creating something which means something to me and an initial idea of a website for my father.

# Design Documentation
The following link is for the initial design:

- https://zubairlambat.wixsite.com/millenniumdiy

The following link is for the Final design:

- [Final Design](documents/finaldesign.md)

# Design Principles (PARC)
1. **P** - Proximity - This has been achieved by using an even amount of images when grouped together. This can be best seen on the about us section where all 4 columns are aligned together and the products section where all 6 images are equally grouped together.
2. **A** - Alignment - In the case of this website, the entire or majority of the website is inside a <main> tag and this made it easier to align all the items in a correct manner.
3. **R** - Repetition - Each section contains the same h1 tag and can be clearly seen where each section begins/ends. There is also a navigation bar which follows the user as they scroll along the page and this brings confidence to the user to ensure they know where everything is located on the website.
4. **C** - Contrast - Only three colour's are used throughout the website to give a consistency which are: Navy blue, grey and black. This is manipulated well throughout the website and this is to match the logo colour's which contrasts well and is easily readable for any user.

# Design Features
- **User's can enter their name** - This design was created to welcome users to the website and make them feel at home and stores their name unless they press the clear storage button and refresh the page which will default back to the original setting.
- **Mobile First** - The website was designed observing the Mobile First approach which ensures the best results for a responsive design.
- **Use of API** - An external API was used appropriately to highlight the location (Google Maps) of where the shop is located. Another one was used whereby users can search anything through Wikipedia and populates a list of related articles based on the users search.
- **Validated Webpages** - The index.html file passed the validation test for HTML with no major/cautionary errors along with the CSS. There are no JavaScript errors on the console either. The only CSS error is the scroll-behaviour: smooth which is not compatible with browsers but still works.
- **Responsive Layout** - This website follows a responsive layout as explained from the Mobile First Approach. This is best represented by the title which reduces in size and readjusts, as well as the nav bar which collapses and hides the menu buttons creating a nice hamburger effect.
- **cubic-bezier** - This is an animation feature which I learnt and explained quite thoroughly in my essay and I was adamant on using it. This can be seen in the About Us section where it creates the effect of opening and closing a card.
- **Accessibility** - I have used colours in the website which contrast well with one another to make it readable for every user. I have also used a Google translator for people who may not understand English. There is also a sitemap for easy access around the website.

# Obstacles
- The biggest obstacle was getting the Google map API to load correctly on my Github page. After two days of trying every possible thing I could to fix it, I decided to validate my website and it picked the error which was a simple and easy error to make. The // was missing from the URL which was causing the Google Maps API to not load correctly.
- I also found using another branch to be quite difficult as when I did use it, it somehow deleted my CSS file so I had to revert back to my old commit to retrieve my CSS file. I did manage to test a few things using the branch but I am not so confident with using it to test and merge regularly.
- Because we were limited to not using any frameworks, I felt that I could not produce a much a better website than I possibly could have. This restricted the endless possibilities that I could have used to make my website look a lot more appealing. As shown in my user testing, a lot of the reviews were that the website was not aesthetically appealing. By using frameworks, I could have made the website look a lot more appealing. For the products in the currently trending section, I could have created a slider to make it look a lot better. I could have also used a sticky nav bar which appears only when the user scrolls up to create more space on the webpage.

# Google Maps API key
- Please generate your own Google API key from the following link: https://developers.google.com/maps/documentation/javascript/get-api-key
- You will need to click on 'GET A KEY' and this will prompt you with selecting a project, choose the default one.
- Your API key should be generated.
- In the index.html file at the bottom of the page, please enter the API key in the following script where it says 'YOUR_API_KEY'
- <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"

# Testing
The following link is for the evidence of testing:

- [Testing Sheets](documents/testing.md)

From the feedback, there were three main issues which were highlighted. These were:
- Adding a 'No' option for the newsletter in the form.
- Grammatical and spelling errors.
- Website is not responsive on all three devices (Desktop, Tablet and Mobile)

These issues have now been addressed with all three working correctly.

# References
- Responsive Menu - https://github.com/CTEC3905/04-lab/tree/nav
- Local storage of name - https://github.com/CTEC3905/03-lab-javascript-2/tree/clearStorage
- Wikipedia API - https://github.com/CTEC3905/08-lab-json-ajax
- CSS Slider - http://qnimate.com/creating-a-slider-using-html-and-css-only/ Adapted the code to suit how I wanted the slider to look.
- Google Translator - https://stackoverflow.com/questions/12243818/adding-google-translate-to-a-web-site
