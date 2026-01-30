// options
const CLIENT_ID =
  "206231694319-f5t0dfcicq7vbu6loi5kh8dfga1vklu8.apps.googleusercontent.com";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

const authorizeButton = document.querySelector("#authorize-button");
const signoutButton = document.querySelector("#signout-button");
const content = document.querySelector("#content");
// In your existing JavaScript, make sure you have:
const channelForm = document.querySelector("#channel-form");
const channelInput = document.querySelector("#channel-input");
const videoContainer = document.querySelector("#video-container");

const defaultChannel = "techguyweb";

// load auth 2 lib

function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

// init api client lib and set up sing in listeners

function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES,
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      // Set up button handlers
      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;

      console.log("Google API initialized successfully");
    })
    .catch((error) => {
      console.error("Error initializing Google API:", error);
      console.error("Error details:", error.details);
      alert("Failed to initialize Google API. Check console for details.");
    });
}
// update UI sign in state changes

function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    content.style.display = "block";
    videoContainer.style.display = "block";
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    content.style.display = "none";
    videoContainer.style.display = "none";
  }
}

// handle login

function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// handle logout

function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// get channel from API

function getChannel(channel) {
  gapi.client.youtube.channels
    .list({
      part: "snippet,contentDetails,statistics",
      forUsername: channel,
    })
    .then((response) => {
      // Process the channel data
      console.log(response);
    })
    .catch((err) => {
      console.error("Error fetching channel", err);
    });
}
// Add form submit handler
channelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const channel = channelInput.value.trim() || defaultChannel;
  getChannel(channel);
});

// Initialize the app when page loads
document.addEventListener("DOMContentLoaded", handleClientLoad);
