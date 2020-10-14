GoPlay Sport Mobile App
Installation Walk Through

Working with node version v13.4.0

npm install for dependencies

npm start

you may at this stage be prompted to install Expo tools globally

If you do this and get a 'requires Expo Cli error'

Do the following

sudo npm install --unsafe-perm -g expo-cli

In your terminal run this command to create a new global install path:  

mkdir ~/.npm-global

Then, run this command to tell npm about it:  

npm config set prefix '~/.npm-global'

Run ps -o comm= $$ to determine which shell you are currently using (It will either be bash or zsh. If you want to learn more about these profiles on macOS you can read about them here and here.

If you are using zsh, create a zshrc profile by running nano ~/.zshrc. If you are using bash, create a bash_profile by running nano ~/.bash_profile.

**********  Install Expo on your mobile device from whatever app store you unsafe

**********  Scan the QR code to get a development version of the app.
