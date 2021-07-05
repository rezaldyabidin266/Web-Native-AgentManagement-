function getLocation() {
    var errorMessage = '';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                var data = {

                    Longitude: long,
                    Latitude: lat,
                    Remarks: "Sukses"
                };




            },
            function(error) {
                if (error.code === 1) {
                    errorMessage = "User denied the request for Geolocation.";
                } else if (window.err.code === 2) {
                    errorMessage = "Location information is unavailable.";
                } else if (window.err.code === 3) {
                    errorMessage = "The request to get user location timed out.";
                } else {
                    errorMessage = "An unknown error occurred.";
                }

                var data = {

                    Longitude: 0,
                    Latitude: 0,
                    Remarks: errorMessage
                };



            });
    } else {
        errorMessage = "Geolocation is not supported by this browser.";

        var data = {

            Longitude: 0,
            Latitude: 0,
            Remarks: errorMessage
        };


    }


}