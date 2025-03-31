**Notes about different Map techs**

So, I did some looking into the maps thing and different maps. There was some others. Google was an option, But I'm not keen on giving up Credit Card information on this, so I was very reluctant to look to deep into anything that required a Credit Card.

There was something called OpenLayers (https://openlayers.org/) and it's fairly similar to Leaflet. I couldn't see much difference to be honest, so I essentially said since I already figured out Leaflet I'm ok with sticking with it. They both use OpenStreetMaps for the maps, so, they look identical. 

I also asked AI on my cursor app I use to just lay out the biggest differences between Leaflet and OpenLayers. 

**AI:** 
OpenLayers! It's another powerful mapping library that, compared to Leaflet:

**Pros of OpenLayers:**
More powerful out-of-the-box features

Better handling of different projections

More sophisticated vector data handling

Better for complex GIS functionality

Great for large datasets

Built-in support for WMS/WMTS services

**Cons of OpenLayers:**
Steeper learning curve

Larger file size

More complex API

Can be overkill for simpler projects

For your parking zone/tracking project, OpenLayers would definitely be capable, but might be more complex than necessary. It's like choosing between a Swiss Army knife (OpenLayers) and a really good regular knife (Leaflet) - both can cut, but one has many more features that you might not need.

**OpenLayers is often chosen for:**
Professional GIS applications

Complex mapping needs

Projects requiring specific map projections

Heavy data visualization

Advanced vector operations

**For your specific use case, I would recommend sticking with Leaflet. Here's why:**

**Your Core Requirements:**
Real-time GPS tracking between two users

Route display

GeoJSON overlay for parking zones

Interactive zones with information popups

Mobile-friendly (assuming this is a mobile app)

**All of these can be handled smoothly with Leaflet, and it will be:**
Easier to implement

Faster to develop

More straightforward to maintain

Lighter weight for mobile users

Simpler to debug

OpenLayers would be overkill unless you need:

Complex GIS analysis

Advanced data transformations

Specialized map projections

Heavy vector processing

WMS/WMTS services

Your app sounds more like a focused, user-friendly service (similar to ride-sharing apps) rather than a complex GIS application. In this case, Leaflet's simplicity and ease of use would be an advantage, not a limitation. Plus, if you later find you need some advanced feature, Leaflet's plugin ecosystem is extensive and can add most functionality you might need.
Given your project description, I'd say Leaflet is the better choice here! 🗺️


**~ Jon's Notes about Navigation Routing on Leaflet Specifically ~**

**Recommended Setup:**
Leaflet for the base map functionality

Perfect for your level of experience

Works well with React

Handles your GeoJSON parking zones easily

Mapbox or OpenRouteService for routing

Both have generous free tiers

Much easier to implement than OSRM

Great documentation

Perfect for a school project

**Free Tier Limits:**
Mapbox: 50,000 free routing requests per month
OpenRouteService: 40,000 free requests per month

**This stack would work well with:**
React frontend
Express backend
MongoDB for storing user data
Your parking zone GeoJSON data

**This is a much more reasonable approach for:**
Your current skill level
A school project scope
The timeframe you likely have
Learning purposes
Plus, this tech stack is actually very similar to what many real-world applications use, so it's great for your portfolio too!