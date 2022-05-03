



> # Challenge: E2E-Testautomation
>The automation Task should verify basic functionality of our homepage https://www.atroo.de/en/ . The expected 
behavior is detailed as follows,


># Specification:
>>When the homepage is opened, the user shall be greeted and immediately be presented with a button to reach out to 
> us (“Contact us”). Interacting with this button should reveal the contact form.
If the user enters an invalid E-Mail address into the contact form, then the form field should indicate this to the user.
The blog section of the homepage (“Latest news”) should show the last 3 blog entries and reveal the full blog post when one of the entries is clicked.


># Task
>>Set up an automation environment which manages to test the above specification
Techstack: Webdriver.IO, cucumber
Convert the descriptive specification into cucumber features
write the step-bindings with Typescript
> 
>>Everything that is needed for that should finally be in this repo and send to us as a merge request. Beside these 
> requirements you can use what the internet has to offer and choose a repo structure as you see fit 😊
When feeling stuck, please don’t hesitate to contact us.


# TEST TASK: ATROO

>To run this project, first of all, you need to install all the dependencies and tools. For this run command in 
>terminal:
>
>> npm install
> 
>Wait for the complete installation. Check that there were no errors during the installation process. If an error 
> occurs, check the Internet connection on your device and try to run the installation again.
>
>To run all tests, you need to run the following command in the terminal:
> 
> > npm run cucumber:test
>
>To get test results and generate a report in ALLURE, run the following command in the terminal:
>
>> npm run allure:report
> 
> 
> 
>> IMPORTANT: For the ALLURE reporter to work, it is necessary that "JAVA" is installed on your PC and the 
> path 
>> %JAVA_HOME is configured.
