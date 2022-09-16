mapboxgl.accessToken = "pk.eyJ1Ijoiam9raWlsayIsImEiOiJjaXNrN3J6YmkwMDQ2Mm5wazV2cnhieHY4In0.gt7dwNL0hYBke0cUS0kKTw";

var map = new mapboxgl.Map({
  container: "map",
    style: "mapbox://styles/jokiilk/ckrdx9jqw2x5c17qycdm8onn7",
  zoom: 10,
  center: [-74, 40.725],
  maxZoom: 15,
  minZoom: 8,
  maxBounds: [
    [-74.45, 40.45],
    [-73.55, 41],
  ],
});

map.on("load", function () {
  map.addLayer(
    {
      id: "turnstileData",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/suojarvi.geojson",
      },
      paint: {
        "circle-color": [
          "interpolate",
          ["linear"],
          ["get", "ENTRIES_DIFF"],
          -1,
          "#ff4400",
          -0.7,
          "#ffba31",
          -0.4,
          "#ffffff",
        ],
        "circle-stroke-color": "#4d4d4d",
        "circle-stroke-width": 0.5,
        "circle-radius": [
          "interpolate",
          ["exponential", 2],
          ["zoom"],
          10,
          ["interpolate", ["linear"], ["get", "ENTRIES_DIFF"], -1, 10, -0.4, 1],
          15,
          [
            "interpolate",
            ["linear"],
            ["get", "ENTRIES_DIFF"],
            -1,
            25,
            -0.4,
            12,
          ],
        ],
      },
    },
    "road-label-simple"
  );
  map.addLayer(
    {
      id: "medianIncome",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/medianIncome.geojson",
      },
      paint: {
        "fill-color": [
          "step",
          ["get", "MHHI"],
          "#ffffff",
          20000,
          "#ccedf5",
          50000,
          "#99daea",
          75000,
          "#66c7e0",
          100000,
          "#33b5d5",
          150000,
          "#00a2ca",
        ],
      },
    },
    "waterway-shadow"
  );
});

map.on("click", "turnstileData", function (e) {
  var entriesDiff = e.features[0].properties.ENTRIES_DIFF;
  var entries_06 = e.features[0].properties.ENTRIES_06;
  var entries_20 = e.features[0].properties.ENTRIES_20;
  var stationName = e.features[0].properties.stationName;
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      "<h4>" +
        stationName +
        "</h4>" +
        "<p><b>Friday, March 6th:</b> " +
        entries_06 +
        " entries<br>" +
        "<b>Friday, March 20th:</b> " +
        entries_20 +
        " entries<br>" +
        "<b>Change:</b> " +
        Math.round(entriesDiff * 1000) / 10 +
        "%</p>"
    )
    .addTo(map);
});

map.on("mouseenter", "turnstileData", function () {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "turnstileData", function () {
  map.getCanvas().style.cursor = "";
});
