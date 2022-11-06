var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.57, lng: -87.79}, 
        zoom:3});
    
    var marker = new google.maps.Marker({position:{lat:48.86, lng:2.29}, map:gMap});
    

    var marker = new google.maps.Marker({position:{lat:51.51, lng:-0.12}, map:gMap});

    
    var marker = new google.maps.Marker({position:{lat:29.97, lng:31.13}, map:gMap});


    var marker = new google.maps.Marker({position:{lat:40.75, lng:-73.98}, map:gMap});


    var marker = new google.maps.Marker({position:{lat:-22.94, lng:-43.20}, map:gMap});
    

    var marker = new google.maps.Marker({position:{lat:41.89, lng:12.49}, map:gMap});


    var marker = new google.maps.Marker({position:{lat:-33.85, lng:151.21}, map:gMap});


    var marker = new google.maps.Marker({position:{lat:27.98, lng:86.92}, map:gMap});


    google.maps.event.addListener(gMap, 'idle', function(){
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:41.57,lng:-87.79})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:52.41,lng:0.52})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:41.06,lng:-111.97})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:40.95,lng:-83.38})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:38.54,lng:-89.85})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:52.48,lng:0.51})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:40.95,lng:-87.62})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

    if (gMap.getBounds().contains({lat:40.11,lng:-88.21})){
        inBounds = true;
    }
    console.log("inBounds:"+inBounds+"zoomLevel:"+zoomLevel);

}

function initApplication() {
    console.log('Map mania - starting');
}