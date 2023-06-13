(function(global) {
    global = global || self;
    const scriptEl = document.createElement('script');
    scriptEl.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
    scriptEl.onload = function() {
        console.log("Script loaded scuccessfully");
    }

    scriptEl.onerror = function() {
        console.log("Script failed to load");
    }
}(this));