# GoPlay Sport Mobile App
## Installation Walk Through

Working with node version v13.4.0

download file or fork from the repo

https://github.com/RedEarthBlueSky/GoPlay_app

Once installed in an appropriate folder

npm install

npm start

you may at this stage be prompted to install Expo tools globally

Select Yes...

####  If after select yes you have an error

### >>>>>>>>>>>> FOLLOWING IS ERROR HANDLING

After this if you get a 'requires Expo Cli error'

Do the following

sudo npm install --unsafe-perm -g expo-cli

In your terminal run this command to create a new global install path:  

mkdir ~/.npm-global

Then, run this command to tell npm about it:  

npm config set prefix '~/.npm-global'

Run ps -o comm= $$ to determine which shell you are currently using .It will either be bash or zsh

If you are using zsh, create a zshrc profile by running nano ~/.zshrc. If you are using bash, create a bash_profile by running nano ~/.bash_profile.

###  >>>>>>>> END OF ERROR HANDLING


If all is successfully installed

**********  Install Expo on your mobile device

once again run npm start

**********  Scan the QR code to get a development version of the app.
