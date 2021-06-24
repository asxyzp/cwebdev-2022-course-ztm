What is this?
This is a common signip/in form page which can be used by any application.

What is it supposed to do?
- There should an option to choose between sign-up & sign-in, ideally a radio button.
- Selecting sign-up would change the action attribute of the form to "/signup" & in case of signin, the value of action attribute should be "/signin".
- If the option is a radio button is chosen, but, the radio button shouldn't be visible at all. Instead clicking on label would also select the radio option, so instead make the radio button really tiny and it's position should fixed with respect to the container. 
- Both the radio button options should have a border, some padding and a background color.
- When the radio button is clicked then it should also have some box-shadow to denote that it has been selected, other than just the color and the background-color of the label changing.
- The form, should have a textfield and a password field. 
- The textfield should be symbol with a simple placeholder. When the field is on the focus, then the label above it should be visible, other it should hide. Same should also happen for password field.
- For password field, there should also be a button which should make the input field's value visible.
- Don't use display: none for hiding label when input fields are not empty. Instead use visibility : hidden.