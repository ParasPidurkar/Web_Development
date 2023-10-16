function checkInternet(cb) {
    require('dns').lookup('google.com',function(err) {
        if (err && err.code == "ENOTFOUND") {
            cb(false);
        } else {
            cb(true);
        }
    })
}

// example usage:
checkInternet(function(isConnected) {
    if (isConnected) {
        console.log("connected to the internet")
    } else {
        console.log("not connected to the internet")
    }
});