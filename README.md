# &lt;/salt&gt;

## World Clocks 

In this exercise you will create a SPA with a set of independent clocks showing the time from different timezones.
Each clock should be an independent React components with its own timer.

### Generate the project
Use `create-react-app` to create a new project called `salt-world-clocks`.
You may use either `yarn` or `npm` as your package manager.

### Configure the linter
The default linter is not strict enough. Change the eslint config to use the following configuration: 
```json
{
  "extends": "airbnb",
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "plugins": [
    "jest"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "padded-blocks": 0
  }
}
```
Add all the necessary plugins and make sure your editor is picking up the rules.

### Application Architecture
Your app should have _at least_ three components: __App__, __Board__ and __Clock__.

#### Clock
This component represents a clock. 
It should have its own timer that updates the time every second.
All the config, such as timezone and location name, should be passed in as parameters.
Designing the clock this way will make the component resuable!

#### Board
The board component is a wrapper for all the clocks.
You should pass in all the clock configurations to the board and it should create one clock for each config entry.

#### App
The App component is a wrapper for your application. 
This is where you set up the configuration for all your clocks before you hand it over to the Board.
Any other decorational info, e.g. page header, should also go into this component.

| ![World Clocks](worldclocks.png) |
|:---:|
| World Clocks architecture |

### Mobile
Exactly how you design your World Clocks app is up to your mob, but the app should be reactive and work equally well on a mobile device such as on the Desktop.

| ![Mobile](worldclocks-mobile.png) | ![Desktop](worldclocks-desktop.png) |
|:---:|:---:|
| Example of Mobile and Desktop designs |
