if (location.host === "www.youtube.com") {
    setInterval( function () {
        const skipbuttons = document.getElementsByClassName("ytp-ad-skip-button-container");
        try {
            skipbuttons[0].click();
        } catch (e) {
            ;
        }
}, 1000)}