# SolEarth# SoleEarth
## Inspiration
There are many misconceptions around solar panels being truly a green energy alternative. Many people want to help the Earth and decide to purchase private solar panels for their home. One major flaw in solar power is from the variable energy output depending on where they are located - hours of sunlight per day, cloud coverage, temperature, etc. In some cases solar panels may actually be worse for the environment because of the resources required to create one. Canada is a location that is on the verge for whether it would be beneficial or not to the Earth as some places pass the threshold for green energy and some places do not. We created **SolEarth** to help people decide if solar panels are right for their home and the possible energy that they can expect from their location.
## What it does
**SolEarth** is a **web application** that takes a user's address and provides them the amount of energy that can be produced from setting up **solar panels** at their home. It also does an assessment on whether or not it is actually eco-friendly for solar panels to be built at that location.
## How we built it
We built the back end of the application with _Node.js_ and _Express.js_ and a few apis. _PositionStack_ is a forward geocoding api and _Open Meteo_ is a weather api. We receive weather data from an address. Weather conditions such as hourly solar radiation and other conditions averaged yearly to use in a _formula_ to calculate the potential amount of solar energy that can be generated per year from a solar panel.
## Challenges we ran into
Some challenges that we faced when creating **SolEarth** were using _Node.js_ and _Express.js_. Our team had never written a line of _javascript_ prior to **Hack the 6ix** and wanted to challenge ourselves and learn something outside of our comfort zone over the weekend. Two of our team members have done 1 hackathon before and **Hack the 6ix is the first hackathon for the other 2 team members**. We also had some troubles with connecting the backend to frontend and deploying the web application online.
## Accomplishments that we're proud of
We are proud of having a complete product to show and having our project revolve around being environmentally sustainable. Both frontends of our website look amazing and the backend works exactly as we planned.
## What we learned
We learned what client side and server side means for web apps. We also became familiar with _REST_ apis and how to call and create our own apis for the server side. We are now able to semi-confidently say that we are familiar in javascript and the _Node.js_ and _Express.js_ frameworks.
## What's next for SolEarth
Next steps for SolEarth is to provide support through education and more information to raise awareness on proper usage of green energy starting with solar first. After, we would like to promote wind energy as an alternative to solar energy for private homes. 
