# Meetups Creator
  Users can make their own meetups by filling the needed information and can keep their favorite meetups.This project was bootstrapped with **Create React App**.

## Features
1. **AllMeetups**: Displays all meetups, including the ones you create.
2. **AddNewMeetups**: Allows users to add new meetups through a form with the following fields:
   - **Meetup Title**
   - **Image**
   - **Address**
   - **Description**
3. **Favourites**: Shows your favourite meetups, which you can add by clicking the heart-shaped Favourite button.

## Functionality
- **Adding Meetups**:
  - Fill out the form in the AddNewMeetups component.
  - Click the **Add Meetup** button to create a meetup card in AllMeetups.
  - Your created meetup is immediately visible in the AllMeetups section.

- **Favouriting Meetups**:
  - Click the **Favourite button** (with a heart logo) on any meetup card.
  - The selected meetup is added to the **Favourites** section.

## Languages Used
- **React**: For building the user interface and components.
- **Firebase API**:
  - Used as a real-time database for storing and retrieving meetup data.

### `npm start`

- Runs the app in the development mode.  
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
- The page will reload when you make changes.  

### `npm test`

- Launches the test runner in the interactive watch mode.  
- See the section about running tests for more information.

### `npm run build`

- Builds the app for production to the `build` folder.  
- It correctly bundles React in production mode and optimizes the build for the best performance.  
- The build is minified, and the filenames include the hashes.  
- **Your app is ready to be deployed!**  
- See the section about deployment for more information.


