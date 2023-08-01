
# Google-Clone

This Google Clone project aims to replicate the functionality of a search engine using modern web technologies. Through web scraping, indexing, and ranking algorithms, the clone will be able to retrieve and display relevant search results based on user queries. This project provided us a valuable opportunity to understand search engine mechanics and build our own search engine. 

![image](https://github.com/MoShirko/Google-Clone/assets/109438051/eadc6dbc-52b5-42e3-9be2-95381b70e90b)




## Collaborators


[Shir](https://github.com/shirkocurek)\
[Molik](https://github.com/molikkidd)

### Tier 1 - MVP application - Index page (or Home page) with Styled Components (CSS Framework) ✔️

Fetch a list of things and display them nicely using a CSS Framework of styled Components.

As a user, I want to see the data nicely organized, so that I can consume and interact with it.

As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app.


### Tier 2 - Client-Side Routing ✔️

Implement routing to access different pages in the application. It’s ok if there’s no Nav bar yet, that can be handled in a later tier

As a user, I want to see the URL change as I move through different parts of the application, so that I can bookmark my favorite page and share it with friends.

As a user, I want the app to be dynamic and interactive, so that I can enjoy my time using the app.

As a user, I want the app to dynamically and quickly swap the content out on the page when I’m navigating to another section of the app, so that the page doesn’t refresh and it feels like a better and faster experience.


### Tier 3 - Dynamic Routes - Show Page ✔️

Add nested routes using query params e.g. /cats/:name and render a Show page (or, details page, etc.) about that specific queried thing. (i.e. /cats/fluffykins should show all the details about the cat named fluffykins).

As a user, I want to view details about a single thing, so that I can learn more about it.

As a user, I want the URL to change to include the thing I’m looking at, so that I can bookmark the page and share it with friends.


### Tier 4 - Global State & Search/Filter ✔️

Store some data globally in state (i.e. context) and share it between multiple components. i.e. user enters input in one component and the value from the input is used elsewhere to filter a list. This is purely a “behind-the-scenes” piece of functionality, and it’s difficult to write a user story for how this works, but here’s an example of how that could work.

As a user entering a value in an input, I want the list of things to be filtered based on the value I entered.


### Tier 5 - Navigation (Nav Bar) ✔️

Since we should already have multiple routes and navigation functionality, let’s add an app-wide Nav bar to connect those routes.

As a user, I want to see a convenient and user-friendly Nav bar, so that I can easily navigate my way around the app.


### Tier 6 - Unit tests ✔️

Implement Jest & Testing-Library/React (or appropriate framework) unit tests for components.

Verify components are rendering as expected, dynamic components update accordingly, modifying props changes functionality, etc


### Tier 7 - Accessibility ✔️

Using the Lighthouse feature of Chrome-based browsers, verify your Accessibility is in the Green!


### Bonus Goals

Implement a Theme & Dark Mode toggle switch to allow users to customize the look of the app.


### Deployment ✔️

-Deploy the application using the service of your choice.

-Tier 2 - Deployed Application via Continuous Deployment

-Set up continuous deployments so that the application is deployed upon push/merge to main (or some other trigger).

-Main Goal: The deployed app should be the most up to date version of your working-and-tested repository code.

-Create a GitHub Workflow file for GitHub Actions and/or other necessary files for your deployment.


## Technologies Used

[React](https://legacy.reactjs.org/) - A JavaScript library for building user interfaces

[Next.js](https://nextjs.org/) - Next.js is an open-source web development framework

[Tailwind](https://tailwindcss.com/) - A utility-first CSS framework

[Jest](https://jestjs.io/) - Testing framework that was used to test our models, database modifications and methods.

[NodeJS](https://nodejs.org/en/) -Javascript Runtime Environment

[Github](https://github.com/) - For version control

[Postman](https://www.postman.com/) - Testing API calls for our DELETE, PUT, POST and GET.

