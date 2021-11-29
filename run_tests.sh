echo "frontend tests\n"
yarn test

echo "backend tests\n"
cd server
yarn test
echo "\n all tests done!\n"