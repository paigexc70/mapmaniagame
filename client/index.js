var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.57, lng: -87.79}, zoom:3});
    
    var marker = new google.maps.Marker({position:{lat:41.57, lng:-87.79}, map:gMap});
    
    var marker = new google.maps.Marker({position:{lat:52.41, lng:0.52}, map:gMap});
    
    var marker = new google.maps.Marker({position:{lat:41.06, lng:-111.97}, map:gMap});

    var marker = new google.maps.Marker({position:{lat:40.95, lng:-83.38}, map:gMap});

    var marker = new google.maps.Marker({position:{lat:38.54, lng:-89.85}, map:gMap});

    var marker = new google.maps.Marker({position:{lat:52.48, lng:0.51}, map:gMap});

    var marker = new google.maps.Marker({position:{lat:40.95, lng:-87.62}, map:gMap});

    var marker = new google.maps.Marker({position:{lat:40.11, lng:-88.21}, map:gMap});

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