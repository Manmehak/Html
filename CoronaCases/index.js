function updateMap() {
    console.log("Updating Data");
    fetch('./data.json').then(response => response.json()).then((data1) => {
        console.log(data1.data); //single data will produce the array .. not what within it .. so we are using data.data
        data1.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;
            // there is yet not any map here
            cases = element.infected;
            // more cases more color dark
            if(cases){ 
                color=`rgb(${cases},0,0)`;
            }

            // Mark on the map
             new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map); 
        });
    })
}

setInterval(() => {
    updateMap();
}, 5000);