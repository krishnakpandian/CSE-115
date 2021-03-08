# CSE 115 Frontend
## Setup and Installation

This react app was developed with typescript.
This application was intended to be run with the following backend.

You can access the live site here.
we-locate.xyz

One note about the fetching performance on the live site is that the fetches might be slow since heroku free tier turns off it's servers if they are not used in a while. So if the render for backend fetches is slow, reload the page or test via the following instructions.

`git clone https://github.com/krishnakpandian/CruzHacks2021DevChallengeFrontend.git`

Run `npm install` to install the required modules

Add a dotenv with the following information
```  
REACT_APP_GMAPS_API_KEY=
REACT_APP_APIKEY=
REACT_APP_AUTHDOMAIN=
REACT_APP_PROJECTID=
REACT_APP_STORAGEBUCKET=
REACT_APP_MESSAGINGSENDERID=
REACT_APP_APPID=
REACT_APP_MEASUREMENTID=
REACT_APP_BACKEND=
```

## How to Run
   * Tested with Node v10.15.1
   * Run App `npm start`
   * Run Tests `npm test`
   * Create a Build `npm build`

