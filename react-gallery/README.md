# Welcome to my React Gallery App

This project was created using React, Node.JS, axios and a range of other Javascript technologies.

## Purpose

This app pulls 24 photos from the Flickr public API, and displays them sequentially using React & JSX. By default,
users are shown 24 photos of Dogs when they first load the page. They can then navigate to the 2 other default
options, which are Cats and Gorillas.

Clients can also make use of the search bar to request their own set of photos. Once the submit button is pushed,
a loading state is displayed on the page. When the results have been returned, this is removed, and the results are
displayed on the page. Users can navigate forwards and backwards to subsequent/previous results where required.

#### How to run the App

To run the app, simply enter 'npm start' into the terminal and wait for the app to load!

#### Coding Setup

Most of the App is rendered from its parent element, App.js. App.js loads BrowserRouter, Switch, the CSS styles for
the project, and then finally renders the relevant project routes (Gallery, Search, Nav, Not Found etc). The default
route ('/') is forwarded to '/search/Dogs' so that the user can see a set of results by default.

Any route that follows '/search'/ will automatically return search results. I found this to be more efficient than
passing the data from Search.js, into App.js, to then render to Gallery.js. Now, Search.js simply makes use of
withRouter to call this.props.history.push(), and forward the user onto a search page that matches their request.

Gallery.js completes most of the legwork of pulling the data for each search request, via axios.get. The loading state
is set to true, and is only set to false once the .then function has completed. In the meantime, a loading message
is displayed on the page. If there are no results, a custom error message is displayed. Otherwise, Gallery.js
renders the GalleryItem component, passing it the necessary data via props.

GalleryItem simply displays an <li> with an image. The image url is also formulated within this component, using the
props.server, props.id and props.secret variables, as well as an alt tag. To avoid any errors in the console,
a key prop is also passed to GalleryItem from Gallery.js.

Finally, the NotFound component renders a short <p> message when a page cannot be found.

