var gMap;

let score = 0;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 38.93, lng: 35.54}, 
        zoom:6,
        maxZoom: 11,
        minZoom: 5,
        zoomcontrol: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
        },
        gestureHandling: "cooperative",
        mapTypeId: "hybrid",
        mapTypeControl: true,
        mapTypeControl: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true
       
    });

    window.alert("Find all eight monuments. Follow the hint chart click on the correct flag.")
    var infoWindowOptions = {
            content:'Hello! Please click and drag to move. You can only zoom out so far so try not to get lost! Find all 8 places and click.',
            map: gMap,
            position:  {lat: 38.93, lng: 35.54},
            shouldFocus: false
        }

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions)


    var marker1 = new google.maps.Marker
        ({position:{lat:29.97, lng:31.13}, map:gMap,
            icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            title:'Pyramids',
            animation: google.maps.Animation.BOUNCE
        });
    marker1.addListener('click', function() {
        window.alert("Correct!");
    });
    
    var marker2 = new google.maps.Marker
    ({position:{lat:48.86, lng:2.29}, map:gMap,
    icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    title: 'Eiffel Tower',
    animation: google.maps.Animation.BOUNCE

    });
    marker2.addListener('click', function() {
        window.alert("Correct!");
    });

    var marker3 = new google.maps.Marker
        ({position:{lat:40.75, lng:-73.98}, map:gMap,
            icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            title:'Times Square',
            animation: google.maps.Animation.BOUNCE

        });
        marker3.addListener('click', function() {
            window.alert("Correct!");
        });

    var marker4 = new google.maps.Marker
    ({position:{lat:51.51, lng:-0.12}, map:gMap,
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title: 'Big Ben',
        animation: google.maps.Animation.BOUNCE

    });
    marker4.addListener('click', function() {
        window.alert("Correct!");
    });

    var marker5 = new google.maps.Marker
    ({position:{lat:-33.85, lng:151.21}, map:gMap, 
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title:'Sydney Opera House',
        animation: google.maps.Animation.BOUNCE

    });
    marker5.addListener('click', function() {
        window.alert("Correct!");
    });

    var marker6 = new google.maps.Marker
    ({position:{lat:-22.94, lng:-43.20}, map:gMap, 
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title:'Christ The Redeemer',
        animation: google.maps.Animation.BOUNCE

    });
    marker6.addListener('click', function() {
        window.alert("Correct!");
    });

    var marker7 = new google.maps.Marker
    ({position:{lat:41.89, lng:12.49}, map:gMap,
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title:'Colosseum',
        animation: google.maps.Animation.BOUNCE
    });
    marker7.addListener('click', function() {
        window.alert("Correct!");
    });


    var marker8 = new google.maps.Marker
    ({position:{lat:27.98, lng:86.92}, map:gMap, 
        icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        title:'Mount Everest',
        animation: google.maps.Animation.BOUNCE
        
    });
    marker8.addListener('click', function() {
        window.alert("Correct!");
    });


    google.maps.event.addListener(gMap, 'idle', function(){
        updateGame()
    });
}

function updateGame() {
    console.log('function UpdateGame()');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:48.86,lng:2.29})){
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


//function SetScore(score) {
 
// }


// for th var marker
//  ++Score
//SetScore()
