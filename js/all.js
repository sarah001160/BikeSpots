function initMap() {
    let center  = new google.maps.LatLng(23.003987,120.22399);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom:13.50,
        center:center,
        //夜間模式styles陣列官網照抄:https://developers.google.com/maps/documentation/javascript/examples/style-array#maps_style_array-javascript    
    styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
           
   });
   let markersdata=[
    {
        position:{lat:23.014590818590644,lng:120.19283635967757},
        map:map,
        title:'台南市公共腳踏車大興公園站',
        icon:'img/Bike pin.png',
    },
    {
        position:{lat:23.01443282045646,lng:120.20038945997617},
        map:map,
        title:'T-Bike花園夜市站',
        icon:'img/Bike pin.png',
    },
    {
        position:{lat:23.00748071934561,lng: 120.20073278271703},
        map:map,
        title:'T-Bike和順公園站',
        icon:'img/Bike pin.png',
    },
    {
        position:{lat:23.00526861204884,lng:120.20862920575647},
        map:map, 
        title:'台南市公共腳踏車台南公園站',
        icon:'img/Bike pin.png',
    },
    {
        position:{lat:23.00068627443833,lng:120.18768651856489},
        map:map,
        title:'T-bike民生轉運站',
        icon:'img/Bike pin.png',
    },
    {
        position:{lat:23.001792370175277,lng: 120.19747121667899},
        map:map,
        title:'T-bike海安民族站',
        icon:'img/Bike pin.png',  
    },
    {
        position:{lat:23.0002122306334,lng: 120.20262105779166},
        map:map,
        title:'赤崁樓站',
        icon:'img/Bike pin.png',  
    },
    {
        position:{lat:22.997084594808157,lng:120.21817898530503 },
        map:map,
        title:' 台南市公共腳踏車成大會館站',
        icon:'img/Bike pin.png',  
    },

];
   for(let i=0; i<markersdata.length; i++){
       let marker= new google.maps.Marker(markersdata[i])
   }

  
}


// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: { lat: -33, lng: 151 },
//     });
//     const image =
//       "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
//     const beachMarker = new google.maps.Marker({
//       position: { lat: -33.89, lng: 151.274 },
//       map,
//       icon: image,
//     });
//   }