$.ajax({
    // URL in string form where we are sending the AJAX request
    url: "post.php",

    // The data we are sending to the server.
    // This will be converted to a query string.
    data: {
        q: 'data'
    },

    // Type of request, e.g. "POST" or "GET"
    type: "GET",

    // Type of data that is expected back
    dataType: "json",

    // Function that runs if the request is successful
    success: 'callback function'
});
