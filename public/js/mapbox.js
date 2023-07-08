/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2hpcmFnZ2lub3RyYSIsImEiOiJjbGoxdjJjY3cxYTIwM3JxaGQxbG9vZGNnIn0.QcL4iBP7wTPE6WGl3cxS4w';

  var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/chiragginotra/clj1v87np003301miawjtg7tw', // monochromic
    // style: 'mapbox://styles/chiragginotra/clj431ra300sb01qy1ybcgx1j', // outdoors
    style: 'mapbox://styles/chiragginotra/clj436a3a00se01qy5qwmdcnp', // satelite
    // style: 'mapbox://styles/chiragginotra/clj439rho00j901pb5hupdhrd', // streets
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
