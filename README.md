## Introduction:
This project is a React application that fetches live data from weather API and displays it through a clean, responsive UI. It lets users search for real time wether information and also suggests a mood based on the current conditions. The idea is to show how weather can influence how we feel. For example, sunny weather might match a happy mood, and rainy weather might connect to a calm mood. 

## Technologies used:
1. React: Handles the UI, component structures, state management and rendering. React Hooks such as useState and useEffect manage data flow and side effects.

2. CSS: Styles the layout, spacing, colors, and responsive design for a clean and user friendly interface.

3. AJAX/Fetch API: Used to make async requests to an external API(weather API) and update the UI with the returned data.

## Approach Taken: 
1. Structer: The app is broken into small, reusable components such as searchbar, weather card , moodmaker etc.

2. Hooks: useState stores user input and API results. useEffect handles API calls or updates triggered by state changes.

3. API Integration: The app sends a requst to the weather api when the user submit a search. Theresponse is fetched abd displayed in the UI.

3. Error handling: Handles empty input, invalid search results or missing images.

### API KEY:
I added my API key in the comment section of the submission link of the SBA. The submit URL that uses this key is located inside App.jsx. To test the API call, please copy the API key from the submission comment, paste it into the URL inside App.jsx where the key belongs, and run the completed request to verify that the API returns the correct data.




