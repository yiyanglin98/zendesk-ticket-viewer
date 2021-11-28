read -p "Please enter the email: " email
read -p "Please enter the API token: " token
yarn install
cd server
echo "EMAIL=$email" >> .env
echo "ZENDESK_TOKEN=$token" >> .env
yarn install
yarn start