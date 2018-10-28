# &lt;/salt&gt;

## World Clocks 

In this exercise you will create a SPA with a set of independent clocks showing the time from different time zones.
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
Designing the clock this way will make the component reusable!

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
Exactly how you design your World Clocks app is up to you and your mob, but the app should be reactive and work equally well on a mobile device such as on the Desktop.

<table>
  <tr>
    <td><img src="worldclocks-mobile.png"></td>
    <td><img src="worldclocks-desktop.png"></td>
  </tr>
  <tr>
    <td colspan="2">Example of mobile and desktop designs</td>
  </tr>
</table>

### JavaScript Date and Time

#### Date()
JavaScript comes with a standard `Date` class. 
To create a new Date instance based on the current time stamp, you simply type `var now = new Date();`.

##### Unix Epoch
In computing, we often refer to time relative to the _Unix Epoch Time_, which is the number of seconds since `1970-01-01T00:00:00.000Z`, and JavaScript is no different.
To get the date representation relative to Unix Epoch you do `var time = new Date().getTime()`, or `var time = Date.now()`.
This is the preferred way of storing a date in a database. (Don't fall into the trap of using the database vendor's own datetime format!)
You can also create a new Date instance from a Unix Epoch representation by passing that number into the constructor, like so `new Date(time)`.

##### ISO Format
The Unix Epoch format is not very readable, so when sending datetime via XML or JSON we should instead use the standard ISO format - `yyyy-MM-ddThh-mm-ss.SSSZ`, e.g. `2018-02-22T14:22.08.023Z`.
Producing such date string from the Date class is as easy as `new Date().toISOString()`.
Just as with the Unix Epoch, we can create a new Date instance from an ISO string `new Date(2018-02-22T14:22.08.023Z)`.

[Here](https://www.w3schools.com/jsref/jsref_obj_date.asp) is a good Date reference.

#### Moment
However, the standard Date class in JavaScript is aged and sometimes painful to work with.
Luckily there is an awesome third party library called [Moment](https://momentjs.com/) that has become the de facto standard to use for more advanced date manipulation.
To use moment you simply call the `moment()` function - or based on some timestamp `moment(someMilliseconds)`.

When you are working with time zones, there is also a good plugin to Moment called `moment-timezone`. It may just come handy for this exercise ;)

Install the dependencies to Moment like so `npm install moment moment-timezone` or `yarn add moment moment-timezone`.

### No TDD this time!
Since you are moving into new ground with React, you don't have to write tests for this exercise. Instead you should concentrate on understanding the React concepts! You will however learn how to TDD with React very soon...
