var config = {
    style: 'mapbox://styles/jokiilk/ckrdx9jqw2x5c17qycdm8onn7',
    accessToken: 'pk.eyJ1Ijoiam9raWlsayIsImEiOiJjaXNrN3J6YmkwMDQ2Mm5wazV2cnhieHY4In0.gt7dwNL0hYBke0cUS0kKTw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Stiina Ronkainen',
    subtitle: 'Loikkarin elämä Neuvostoliitossa',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'synt',
            alignment: 'right',
            hidden: false,
            title: 'Stiina Ronkaisen syntymä',
            image: 'images/suo1813.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {

                center: [32.33674, 62.06698],
                zoom: 6.18,
                pitch: 58.00,
                bearing: -19.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'kamensk-uralsk',
            alignment: 'left',
            hidden: false,
            title: '1934: Töissä Kamensk-Uralskilla',
            image: './path/to/image/source.png',
            description: 'Ronkainen päätyi töihin Kamensk-Uralskille. Olot eivät miellyttäneet, ja hän teki palautusanomuksen 1934. <blockquote>Kamenski 2/11.3 <br> Aini kiltti, <br> Kiitos kirjeestä, jonka minä sain vasta illalla. Minä sain kiiltokuvat. Aini kiltti kun jaksat varttuu niin kyllä täältä kohta me pääsemme kotimaahamme. Kaikki täältä tulee pääsemään. Vähitellen täältä lähtee pois.  </blockquote>',
            location: {
                center: [61.91977, 56.39993],
                zoom: 5,
                pitch: 60.00,
                bearing: -20.32
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jekaterinburg',
            alignment: 'left',
            hidden: false,
            title: '2.1.1938: Ronkainen vangittiin',
            image: './path/to/image/source.png',
            description: 'Ronkainen vangittiin ja vietiin Jekaterinburgiin',
            location: {
                center: [60.57797, 56.87534],
                zoom: 8.3,
                pitch: 30.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'teloitus',
            alignment: 'left',
            hidden: false,
            title: '13.3.1938: Teloitus',
            image: './path/to/image/source.png',
            description: 'Ronkainen ammuttiin Jekaterinburgissa tekaistujen syytteiden nojalla',
            location: {
                center: [60.57797, 56.87534],
                zoom: 2.3,
                pitch: 10.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'route-ronkainen',
                    opacity: 1

                }
            ],
            onChapterExit: [
                {
                    layer: 'route-ronkainen',
                    opacity: 1

                }
            ]
        }
    ]
};
