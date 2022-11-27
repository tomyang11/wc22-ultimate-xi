# Development

### https://tomyang11.github.io/wc22-ultimate-xi/

### Goal and Value of the Application
As a massive football fan, I thought it'd be the perfect opportunity to celebrate 
the start of World Cup 2022 with this project. The web app is a dynamic React App 
that allows users to pick their ultimate XI from a list of (almost) all the players 
participating in this year's world cup. The goal of the project is for the user to 
pick the best 11 players possible within their budget range of $80 and then share 
it with their friends as a form of entertainment.

### Usability Principles Considered
1. I added alerts so that users are notified when they submit an input to the site. 
Depending on the color of the alert, the user can see if they have successfully 
completed what they intended or have failed and then act according to the feedback.
2. Since actions are appropriate under specific situations, I configured the buttons 
such that they are only available when the appropriate and disabled with a not-allowed 
cursor when the user tries to engage with it otherwise. This avoids the confusion of 
trying to click on buttons when not allowed and the cursor shape notifies the user of 
that fact. 
3. The remove functionality accommodates for human errors, essentially acting as 
a back button. Since humans make mistakes, this allow them to correct their mistake. 
By having both the functionality add and remove players from their team, users can 
commit to an idea and adjust accordingly without having to restart when they diverge 
from their original plan.
4. Given the volume of players, I did not gather images for all of them. Rather 
than leaving their images as errors, I error checked the image path so that players 
without images can have placeholder images. This improves the asthetics of the site 
as well as convey validity.

### Organization of Components
The components are divided up into two large categories. One for the shop of all 
players available to choose from and one for the team that the user builds. The 
shop holds two filter components, a sort component, a playerList component as well 
as a playerShop component that renders them and handles logic used between them. 
The playerList component also maps to shopCard UI component that provides the 
template for rendering each player card in the shop. Similarly, the team side holds 
a team component that maps each player by position to a TeamCard UI component. 
The App component handles and directs all logic flowing between the shop and team 
sides as well as error checks the input of the user. Other accessory components 
include the share and alert components.

### How Data is Passed Down Through Components
The App component imports the playerData and passes it to the Shop to render. 
The App also has an addPlayerHandler that takes a player object and it passes the 
function to PlayerShop which subsequently passes to PlayerList and then the ShopCard. 
When the ShopCard registers a click to its "Add Player" button, it sends the 
player that is added back up to App to be handled. The same flow occurs with 
removePlayerHandler from App to Team to TeamCard. All logic is handled in App 
once it receives that information back from its children components. Within PlayerShop, 
it passes each filter and sort a corresponding handler function to obtain the selection 
the user makes so that it can handle the logic accordingly. PlayerShop then filters 
and sort the players according to the selections and passes the manipulated array 
of players to PlayerList for rendering.


### How the User Triggers State Changes
the user can trigger state changes in a variety of ways:
1. They can change the budget amount by adding or removing players to and from their 
team. The budget changes by adding or subtracting the cost of the player that is 
added or removed.
2. The forwards, midfielders, defenders, and keepers arrays are each stored as a 
state so when users add or remove a player, they append or splice from the array 
of that player's position.
3. copied, teamDone and value are states used to control the share functionality. 
teamDone is triggered when users fill out their team, allowing the share button 
to be clickable. copied is a state representing whether the value has been copied 
to clipboard. value is the state that holds the copied value.
4. message is a state object representing the alert message and its type. It is 
triggered upon by every button a user clicks, which tells the user whether he has 
successfully completed the intended task by displaying a message in green or alerting 
to the user to an error by a red message.
5. In the shop, the filter values and sort value are also stored in state which 
are triggered by the option the user selects to filter or sort.