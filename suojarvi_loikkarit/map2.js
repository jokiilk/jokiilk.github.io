/* First, define what constitutes a small screen.
This will affect the zoom parameter for each chapter. */

var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Next, create two variables that will hold:
1. The different types of layers available to Mapbox and their
respective opacity attributes.
2. The possible alignments which could be applied to the vignettes.*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
  fulloverlay: "full-overlay",
};

/* The next two functions help turn on and off individual
layers through their opacity attributes: The first one gets
the type of layer and the second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story', 'features' and 'header' elements
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, then assign it to the 'header' element
// Note how each one of these are assigning 'innerHTML'
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If after this, the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  var subcontent = document.createElement("div");
  // Adds a class to the vignette
  chapter.classList.add("br3");
  container.setAttribute("tabindex", idx+1);
  /* subcontent.classList.add("br3") */
  // Adds all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  subcontent.classList.add("br3");
  subcontent.innerHTML = record.subcontentDiv;
   
  
  // Sets the id for the vignette and adds the step css attribute
container.setAttribute("id", record.id  );
  container.classList.add("step");
  // If the chapter is the first one, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // Adds the overall theme to the chapter element
  chapter.classList.add(config.theme);
  subcontent.classList.add(config.theme);
  subcontent.classList.add("sub");
  if(record.subImages){
    subcontent.classList.add("imgbox");
  }
  
  if(record.subhidden){
    subcontent.classList.add("hidden");
  }
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  container.appendChild(subcontent);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");

// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Creates a variable to hold the starting zoom value
var startingZoom;
// If the screen size is small, it uses the `zoomSmall` value
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* This section creates the map element with the
attributes from the main section of the config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */
/* https://docs.mapbox.com/mapbox-gl-js/assets/cat.png */
map.on("load", function () {
  map.loadImage(
    'images/city.png',
    (error, image) => {
    if (error) throw error;
     
    // Add the image to the map style.
    map.addImage('cat', image);
    });
  map.addSource('route', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
      [
        29.278564453125,
        60.16884161373975
      ],
      [
        30.3662109375,
        60.51675086553633
      ],
      [
        30.5419921875,
        60.5923622983958
      ],
      [
        31.9921875,
        61.34407840195394
      ],
      [
        32.354736328125,
        61.92344218627174
      ],
      [
        32.45361328125,
        62.078170769452306
      ],
      [
        32.530517578125,
        62.4107287530686
      ],
      [
        32.20092773437499,
        62.85514553774182
      ],
      [
        31.695556640625,
        62.91023044704665
      ],
      [
        31.047363281250004,
        63.38167869302983
      ],
      [
        30.223388671874996,
        63.77763207252133
      ],
      [
        30.673828125,
        64.39693778132846
      ],
      [
        30.05859375,
        64.62387720204688
      ],
      [
        30.1904296875,
        64.84893726357947
      ],
      [
        30.0146484375,
        65.12763795652116
      ],
      [
        30.1904296875,
        65.60387765860433
      ],
      [
        30.0146484375,
        66.24916310923315
      ],
      [
        29.091796875,
        66.99884379185184
      ],
      [
        29.970703124999996,
        67.45808150845772
      ],
      [
        30.102539062499996,
        67.7427590666639
      ],
      [
        29.355468750000004,
        68.28565146003619
      ],
      [
        30.1904296875,
        68.89518688943544
      ],
      [
        31.6845703125,
        69.14692017504962
      ],
      [
        31.904296874999996,
        69.58056349224898
      ],
      [
        32.2119140625,
        69.97549253616164
      ]
    ]
    }
    }
  });
  map.addSource('tanniset', {
      'type': 'geojson',
    'data': {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'LineString',
    'coordinates': [
          [32.358830425958196, 61.94275901719854
          ],
          [
            32.59053847279253, 61.85866736830646
          ],
          [
            32.242241822682864, 61.70307308580526
          ],
          [
            32.346449721129204, 61.65340931100573, 
          ],
          [
            34.346200239152815, 61.785487103216035, 
          ],
          [
            36.53817995654231, 61.82090843681654, 
          ]
      ]
      }
      }
  });
  map.addLayer({
      'id': 'tanniset',
      'type': 'line',
      'source': 'tanniset',
      'layout': {
      'line-join': 'round',
      'line-cap': 'round'
      },
      'paint': {
      'line-color': 'black',
      'line-width': 1,
      'line-dasharray': [5, 2]
      }
  });
  map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
    });

    map.addSource('maine', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
            'coordinates': [
              [
        [32.134253844733,61.8338033508487], 
        [31.8553195603656,61.8304482627575], 
        [31.8418810216847,61.9115902136297],
        [31.8275562680584,61.9223158499533], 
        [31.8161106716211,61.9219941580368], 
        [31.8102863855671,61.9268934394084], 
        [31.8110182104524,61.9301553833782], 
        [31.8033268700209,61.9337053249735], 
        [31.7954418548982,61.9380149581335], 
        [31.7875546212915,61.9423241595056], 
        [31.780060773234,61.9446020140611], 
        [32.0003312627217,62.0167967571197], 
        [31.9305587321378,62.0578646479506], 
        [31.794097339738,62.106496529134], 
        [31.7788185709759,62.1097157945247], 
        [31.7658210905186,62.1320172601955], 
        [31.7814368788316,62.1679013457769],
        [31.8074737664516,62.1698864582903], 
        [31.864996463159,62.218978802396], 
        [31.8388302066563,62.244439076138], 
        [31.7428768411196,62.2393533880546], 
        [31.7513845739444,62.2521728640583], 
        [31.6707388023838,62.331073656951], 
        [31.6191274957983,62.3366594642391], 
        [31.6198152784953,62.370015391879], 
        [31.6846516260364,62.3885740467834], 
        [31.7892652625952,62.29087531048], 
        [32.0328878731344,62.3098856052401], 
        [32.0539661280176,62.319207127295], 
        [31.9487601366899,62.379016736008], 
        [31.914756227207,62.3792150280115], 
        [31.9006713930174,62.4435946189612],
        [31.6317344569047,62.4407019381058], 
        [31.5438431241969,62.5215289270056], 
        [31.5875498508432,62.5309042488784], 
        [32.1038710028964,62.647136717849], 
        [32.386437304202,62.717796105156], 
        [32.321334099978,62.6777083564697], 
        [32.3267356632643,62.6670760134787], 
        [32.519230115019,62.5617156481411], 
        [32.544502640131,62.5213522127203], 
        [32.5587066332703,62.5194405594544], 
        [32.5763281202047,62.5241192486918], 
        [32.6583530447159,62.4844747633741], 
        [32.6758632783149,62.4847712011017], 
        [32.6908698661499,62.4871866422421], 
        [32.7096971580275,62.4867520728551], 
        [32.7266469562491,62.480335556057], 
        [32.7301564714906,62.4721155390742], 
        [32.7308929633391,62.4683839071806],
        [32.731436775596,62.463650759133],
        [32.7363703543734,62.4590731108477], 
        [32.7419450870202,62.4578336255308], 
        [32.7460910166597,62.4529515867245], 
        [32.756632889242,62.4548710344507], 
        [32.7626687843423,62.4522656082219], 
        [32.7746827453021,62.4430183167116], 
        [32.7914074904776,62.4318910464454], 
        [32.8015688036781,62.4244006422288], 
        [32.8029704723601,62.4091993366404], 
        [32.7901029241144,62.4057716270246],
        [32.7816030137903,62.4007377444039], 
        [32.7847556806877,62.3938070609232],
        [32.7914480879803,62.3834330310437], 
        [32.7923209230472,62.3729650368693], 
        [32.7876472172095,62.3600364785586],
        [32.7709676590872,62.3379439771957], 
        [32.7567313632316,62.3361123217847], 
        [32.7444133622248,62.3362246020388], 
        [32.7310712547766,62.3331109117624], 
        [32.7309757253554,62.3250392989008], 
        [32.7223332890869,62.3176572755517], 
        [32.7165648110979,62.3101563244365], 
        [32.7072130948008,62.3028028515153], 
        [32.6955042139613,62.298237565301], 
        [32.6857604275763,62.29258135966], 
        [32.6789737467604,62.2834387292108], 
        [32.699421352597,62.2731776214454], 
        [32.7193828990492,62.252838821338], 
        [32.7066157587604,62.2425986842827], 
        [32.6920426270114,62.242395537508],
        [32.684119834344,62.2443112281779], 
        [32.6795662404699,62.2418587183144],
        [32.6755421409494,62.2251044701285],
        [32.6599922690279,62.2149673528958], 
        [32.62297026144,62.2005687772408], 
        [32.6206596046086,62.1912996103001], 
        [32.5743507631499,62.1773384060227], 
        [32.5739579684053,62.1717511278855], 
        [32.5699533502643,62.1666709402134], 
        [32.5638708344002,62.1671685155292], 
        [32.5439505042474,62.1554972174174], 
        [32.5557148737563,62.1433134959672], 
        [32.5393162099126,62.106053175874], 
        [32.5199935471975,62.1004643657681],
        [32.5044087147685,62.0911819203686],
        [32.5035461391578,62.085469117848], 
        [32.5076098758822,62.0780421976228],
        [32.5063428108543,62.0648630346242], 
        [32.500755420523,62.0593749371144], 
        [32.5092367456683,62.05260277488],
        [32.5214288399983,62.04640486496], 
        [32.5256161573787,62.0379958880982], 
        [32.5258710163454,62.0329612571812], 
        [32.5300921251659,62.0282017256639], 
        [32.541008734385,62.0239684478848], 
        [32.5454856889535,62.0189449661813], 
        [32.555193253715,62.0161320916556], 
        [32.5639731582008,62.0167183357557], 
        [32.5744270216067,62.0138021561735], 
        [32.5816453335831,62.0104014507153], 
        [32.6028545007631,62.0203138562787], 
        [32.6020520275849,62.0286244491255], 
        [32.6055770056055,62.0315540207293], 
        [32.6238651157917,62.0370997405369], 
        [32.6462158642621,62.0438149107592], 
        [32.6597886995616,62.0516461173222], 
        [32.6635660173546,62.0605290373371], 
        [32.6743451813205,62.0685815690965], 
        [32.6873893612476,62.0726006432017], 
        [32.7115486116096,62.0730493895219], 
        [32.7401818296417,62.0665116735319], 
        [32.7559024012543,62.0621331606881], 
        [32.7554936503345,62.058281369568], 
        [32.747884660613,62.05498336388], 
        [32.7411205678604,62.0491908988935], 
        [32.7354119142447,62.0461744506787], 
        [32.7303704658105,62.0405266792442], 
        [32.7280429564318,62.0379120130991], 
        [32.7259235350486,62.0202126203836],
        [32.7202244013142,62.0055542386685], 
        [32.7253778349102,61.9943857122508], 
        [32.7113606642344,61.9824222441249], 
        [32.7025788160572,61.9504654524511],
        [32.7201105870165,61.9333248156594], 
        [32.7132365446445,61.9259100387222], 
        [32.7137258026186,61.9189845818916], 
        [32.7169670967504,61.913716078011], 
        [32.7194551365698,61.909346627977], 
        [32.7276568606282,61.9023532045137], 
        [32.7343034841948,61.8985693221452], 
        [32.7444957688093,61.9007469886469], 
        [32.7543156480819,61.8992517390622], 
        [32.7562755207925,61.8945421966043], 
        [32.7509695185239,61.8885815361258], 
        [32.7536749300705,61.8837685123375], 
        [32.7557119451525,61.8769946277004], 
        [32.7562238485234,61.8702486249019], 
        [32.7535773594789,61.8666715980032], 
        [32.7340253999648,61.8704532071017], 
        [32.7265683113127,61.8647992752995], 
        [32.7220608596427,61.8602144735785], 
        [32.7078071924874,61.8624705856274], 
        [32.702700597701,61.8625379181209], 
        [32.6935101868213,61.8481690689645], 
        [32.6740688246282,61.8428636547453], 
        [32.6649033437393,61.83442104928], 
        [32.6486843294607,61.8308233013485], 
        [32.5980157244948,61.8012538917585], 
        [32.5696062728144,61.8014029482484], 
        [32.5577302756999,61.8025582674291], 
        [32.5586596833398,61.8094463059066], 
        [32.5741088607137,61.8139888734205], 
        [32.5824088202005,61.824604631547],
        [32.5850853700745,61.8481368935136], 
        [32.5829270553635,61.8655395446971], 
        [32.5757454351716,61.8753741116713], 
        [32.5767289631516,61.8817327000451], 
        [32.5842123814205,61.8962135112908], 
        [32.5892055072148,61.9031680727477], 
        [32.5815409189042,61.9282768204151], 
        [32.4466433121699,61.9701486110688], 
        [32.4207843403369,61.9805289865421], 
        [32.379560567052,61.9740119466411], 
        [32.4006027018388,61.9861641515043], 
        [32.3970309735171,61.9876770979474], 
        [32.3693578584763,61.9775179064092], 
        [32.3626522495726,61.9861915106132], 
        [32.3176755983197,61.9819059486057], 
        [32.3186672121581,61.9782901592172], 
        [32.350991997305,61.9812676960676], 
        [32.3471494271063,61.9754174140505], 
        [32.3475903525668,61.9721836878077], 
        [32.3351254556891,61.9710044602334], 
        [32.3293955389946,61.96439571591], 
        [32.3083139530661,61.9625349668318], 
        [32.2930922692136,61.9505081462826], 
        [32.2818653347391,61.8951050116602], 
        [32.2407422057237,61.8869204024916], 
        [32.2297358780745,61.8781136580576], 
        [32.1520225902929,61.8500271954779], 
        [32.134253844733,61.8338033508487]
      ]
    ]
      }
      }
      });
/*     map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {
    'line-join': 'round',
    'line-cap': 'round'
    },
    'paint': {
    'line-color': '#888',
    'line-width': 8
    }
    }); */
    map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
      'fill-color': '#FF3F25', // red color fill
      'fill-opacity': 0.5
      
      }
      });
      // Add a black outline around the polygon.
/*       map.addLayer({
      'id': 'outline',
      'type': 'line',
      'source': 'maine',
      'layout': {},
      'paint': {
      'line-color': '#000',
      'line-width': 3
      }
      }); */
    map.addSource('yleiskartta', {
      'type': 'raster',
      'url': 'mapbox://jokiilk.6pnd8cb5'
      });
      map.addLayer({
      'id': 'yleiskartta',
      'source': 'yleiskartta',
      'type': 'raster'
    });
    map.addSource('venaja', {
      'type': 'geojson', 
      'data': {
      type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [33.728773384583704,60.807205389379]
                  
                },
                properties: {
                  title: 'Svirstroi',
                  description: 'Svirstroin voimalatyömaa'
                }
              },
              
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [60.57797, 56.87534]
                },
                properties: {
                  title: 'Jekaterinburg',
                  description: 'Jee jee Jekaterinburg',
                  icon: 'theatre-15'
                }
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [53.40991251753413, 59.02023371297969]
                },
                properties: {
                  title: 'Magnitogorsk',
                  description: 'Mahtava Magnitogorsk',
                  icon: 'theatre-15'
                }
              }
            ]
      }
    });
    map.addLayer({
      'id': 'venaja',
      'type': 'symbol',
      'source': 'venaja',
      'layout': {
          'icon-image': 'cat',
          'text-field': ['get', 'title'],
          'text-font': [
            'Open Sans Semibold',
            'Arial Unicode MS Bold'
          ],
          'text-offset': [0, 1.25],
          'text-anchor': 'top'
        }
    });
    map.on('click', 'venaja', (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
       
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
       
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
      });
       
      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'venaja', () => {
      map.getCanvas().style.cursor = 'pointer';
      });
       
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'venaja', () => {
      map.getCanvas().style.cursor = '';
      });


    map.addLayer(
      {
        id: "turnstileData",
        type: "circle",
        source: {
          type: "geojson",
          data: "data/turnstileData2.geojson",
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



  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
      closeNav(overlayId)
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);

var overlayId

function openNav(clickId) {
  overlayId = clickId
  document.getElementById(overlayId).style.display = "block";
  
}

function closeNav(clickId) {

  var overlayId = clickId
  document.getElementById(overlayId).style.display = "none";
}

function myImages(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}