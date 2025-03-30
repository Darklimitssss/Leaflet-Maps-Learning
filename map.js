var map = L.map('map').setView([51.0525571, -114.0730546], 18);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// let popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);

// let B46166FA6C124139802CD249D3237B6C = L.polygon([
//     [51.0525571, -114.0730546],
//     [51.052528, -114.0720236],
// ]).addTo(map);


// L.geoJSON(geojsonFeature).addTo(map);

let geojsonFeature = {
"type":"Feature",
"properties": {
    "enforceable_time":"0910-1750 MON-SAT",
    "dot":"W",
    "no_parking":null,
    "parking_restrict_type":"none",
    "seg_cap":"11",
    "seg_length":"72.36",
    "camera":"FR",
    "zone_type":"Parking Zone",
    "html_zone_rate":"<b>Mon-Fri 9:00 AM to 11:00 AM</b><br><br>$4.00 per Hour<br><br><b>Mon-Fri 11:00 AM to 1:30 PM</b><br><br>$4.25 per Hour<br><br><b>Mon-Fri 1:30 PM to 3:30 PM</b><br><br>$3.75 per Hour<br><br><b>Mon-Fri 3:30 PM to 6:00 PM</b><br><br>$2.75 per Hour<br><br><b>Saturday: 9:00 AM to 6:00 PM</b><br><br>$0.25 per Hour<br><br><b>Sunday/Holidays:</b><br><br>Free parking<br><br><b>Free parking to 9 AM</b><br><br>See Signs /Parking Restrictions<br><br>",
    "zone_length":"72.36",
    "no_stopping":null,
    "price_zone":"5",
    "stall_type":"Parallel",
    "block_side":"N",
    "status":"Active",
    "globalid_guid":"{B46166FA-6C12-4139-802C-D249D3237B6C}",
    "parking_restrict_time":"none",
    "permit_zone":"1008",
    "zone_cap":"11",
    "address_desc":"Eau Claire Av SW ,  Fr 4 St SW To 5 St SW",
    "max_time":"180.0",
    "comments":null},
    "geometry":{
        "type":"MultiLineString",
        "coordinates":[[[-114.0730546,51.0525571],[-114.0720236,51.052528]]]
        }
    };

    const parkingZone = L.geoJSON(geojsonFeature, {
        style: {
            color: "#ff0000",
            weight: 4,
            opacity: 0.8
        },
        onEachFeature: function(feature, layer) {
            layer.on('click', function(e) {
                const props = feature.properties;
                const popupContent = `
                    <div class="parking-info">
                        <h3>${props.address_desc}</h3>
                        <p><strong>Maximum Time:</strong> ${props.max_time} minutes</p>
                        <p><strong>Available Spots:</strong> ${props.zone_cap}</p>
                        <p><strong>Hours:</strong> ${props.enforceable_time}</p>
                        <div class="rates">
                            ${props.html_zone_rate}
                        </div>
                    </div>
                `;
                layer.bindPopup(popupContent).openPopup();
            });
        }
    }).addTo(map);
    // Center the map on this parking zone
    // map.fitBounds(parkingZone.getBounds());
// (51.050439, -114.067462) <--> (51.050365, -114.065337)