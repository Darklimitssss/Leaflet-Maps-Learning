**Here's an example showing different ways to handle coordinates in Leaflet:**

// Let's use your parking zone coordinates
const geoJSONCoords = [-114.0730546, 51.0525571];  // [longitude, latitude]

// 1. Creating a marker - needs [lat, lng]
const marker = L.marker([
    geoJSONCoords[1],   // latitude
    geoJSONCoords[0]    // longitude
]).addTo(map);

// 2. Setting map view - needs [lat, lng]
map.setView([
    geoJSONCoords[1],   // latitude
    geoJSONCoords[0]    // longitude
], 15);

// 3. Loading GeoJSON directly - Leaflet handles conversion automatically!
const parkingZone = {
    "type": "Feature",
    "geometry": {
        "type": "MultiLineString",
        "coordinates": [[
            [-114.0730546, 51.0525571],
            [-114.0720236, 51.052528]
        ]]
    },
    "properties": {
        "name": "Eau Claire Av SW"
        // ... other properties
    }
};

// Leaflet will handle the coordinate order automatically here
L.geoJSON(parkingZone).addTo(map);

// 4. Helper function to swap coordinates (useful when working with both formats)
function swapCoords(coords) {
    return [coords[1], coords[0]];
}

// Using the helper function
const newMarker = L.marker(swapCoords(geoJSONCoords)).addTo(map);


**Loading the Zones using Leaflet automatically.**

Event-based loading:

map.on('moveend', function() {
    // Gets called when user stops moving the map
    const bounds = map.getBounds();
    
    // Get visible area coordinates
    const north = bounds.getNorth();
    const south = bounds.getSouth();
    const east = bounds.getEast();
    const west = bounds.getWest();

    // You would then fetch parking zones within these bounds
    // from your backend/API
});

// Groups nearby markers into clusters
const markers = L.markerClusterGroup();

// MarkerCluster for clustering
import 'leaflet.markercluster';

// For better loading states
import 'leaflet-loading';

**AI** For a real-world app, I'd recommend combining Event-based loading with Clustering. Here's why:

**Event-based loading:**

Only loads data you need

Reduces initial load time

Saves bandwidth

Better user experience

More responsive app

**With Clustering:**

Prevents map cluttering

Better performance with lots of markers

Cleaner user interface

Better mobile experience

Easier to select zones when zoomed out

**This combination is what many production apps use (like property listing sites or store locators) because it:**
Loads efficiently (event-based)

Displays efficiently (clustering)

Works well on mobile

Handles large datasets smoothly

Gives the best user experience

