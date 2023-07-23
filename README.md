Project Set Up Documentation:

1. Open the terminal or command prompt.
2. Navigate to the project directory.
3. Run the following command to install the required dependencies:
		npm install
4. After the installation is complete, run the following command to start the project
		npm run start


Project Information Documentation:

Current Application Scope:

1. The application is currently restricted to the following functionalities:
		Login
		Send money
		Sign out
		Default Address Creation:

2. Upon application startup, 5 unique addresses will be created and stored in the local storage.
		The local storage is treated as a temporary database for this application's scope.

3. Default Address Balance:
		Each address created by default will have 100 coins available for transactions.
4. Login Screen:
		Upon application start, the first screen will be the login screen.
		Users can add the address from the local storage and press the login button to proceed.

5. Dashboard Page:
		After successful login, the dashboard page will open, which will display the following widgets:
		Balance Widget: Shows the current balance of the logged-in user.
		Send Money Widget: Allows users to send money to other addresses.
		Transaction Chart: Visual representation of transaction history.
		Balance History Chart: Visual representation of the balance history.
			
6. Transaction History:
			Users can view the transaction history visually using charts and a table.

7. Login Functionality:
		The login functionality is handled by storing the address in cookies.
		Upon logout, the cookie will be cleared to ensure secure access to the application.