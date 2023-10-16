function checkInternet() {
    return navigator.onLine;
}

// example usage:
if (checkInternet()) {
    console.log("connected to the internet");
} else {
    console.log("not connected to the internet");
}