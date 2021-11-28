echo "\nBe prepared to enter your email and API token\n"
read -p "Please enter the email: " email
read -p "Please enter the API token: " token
cd server
echo "EMAIL=$email" > .env
echo "ZENDESK_TOKEN=$token" >> .env