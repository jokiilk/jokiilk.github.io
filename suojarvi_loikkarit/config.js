let topTitleDiv = "<h4>Kansallisarkisto | Suomalaiset Venäjällä 1917 - 1964</h4>";

let titleDiv =
/* '<div id="circle"></div>' +  */"<h1>Kaukainen tervehdys teille kaikille</h1>"+"<h2>Suojärveläiset Neuvostoliitossa</h2>"/* +'<div id="circle"></div>' */;

let bylineDiv = "<p>Ira Jänis-Isokangas ja Ilkka Jokipii</p>";

let descriptionDiv =
  "<div tabindex = '1'>" +
  /* '<div id="circle"></div>' + */
  '<div><p>Suojärveläisten elämää Suomessa. Suojärvestä ja Suomesta. Loikkareista ja muista. Suojärveläisten elämää Suomessa. Suojärvestä ja Suomesta. Loikkareista ja muista. </p>' +
  '<img src="images/suo1813.jpg" class = "clip-circle vanhakuva">' +
  "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>" +
  "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>" +
  '<p style="text-align:center">Scroll to continue<br>▼</p></div>'+
  "</div>";

let footerDiv =
  '<p>Näyttely perustuu Ira Jänis-Isokankaan tutkimuksiin suojärveläisten loikkarien elämästä Neuvostoliitossa. Ilkka Jokipii on osallistunut suunnitteluun ja vastannut teknisestä toteutuksesta.</p>'+
  '<img src="images/ka-tunnus-fi.png">'+
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://arkisto.fi/suomalaisetvenajalla">Suomalaiset Venäjällä 1917-1964</a></p>';

let suojarvi_yleinen=

"<h3 >Suojärvi</h3>" +  
  '<img src="images/suo1813.jpg">' +
  '<p class="imageCredit">Työläiset saapuvat junalla työmaalle</p>' +
  "<p>Ronkainen päätyi töihin Kamensk-Uralskille. Olot eivät miellyttäneet, ja hän teki palautusanomuksen 1934.</p>";

let suojarviKuvaus=

"<h3>Suojärvi</h3>" +  
  '<img src="images/LietteenValikyla-Museovirasto.jpg">' +
  '<p class="imageCredit">Lietteen Välikylä (Museovirasto)</p>' +
  "<p>Suojärven kunnasta tarkemmin.</p>"+
  "<p>Suojärvellä asui niin ja niin paljon ihmisiä. Tärkeimmät teollisuuden alat olivat kartonkiteollisuus ja maatalous.</p>"+
  "<p>Kuntakeskus oli Suvilahti Suojärven eteläkärjessä. >Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit</p>";

  let suojarvi_sub =
  "<p>Voimme myös kertoa asiasta tarkemmin ja lisää. Klikkaa linkkiä, ja lue kiinnostava kertomus.</p>"+
  '<span style="font-size:15px;cursor:pointer;align:right" onclick="openNav('+ "'suojarviOverlay')" + '">&xrarr; Lue lisää</span>'+
  '<div id="suojarviOverlay" class="overlay">' +
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav('+ "'suojarviOverlay')" + '">&times;</a>' +
    '<div class="overlay-content">' +
    '<div class="row">'+
    '<div class="column">'+
    /* '<h2>Sanni ja Matti</h2>' + */
    '<a class="chocolat-image" href="images/sanni_ja_Matti.jpg" title="Sanni ja Matti">'+
        '<img src="images/sanni_ja_Matti_thumb.jpg" />' +
    '</a>'+
    '</div>'+
    '<div class="column">'+
    '<a class="chocolat-image" href="images/SanniReimajaMattiKolomainen13.9.1953.jpg" title="Sanni Reima ja Matti Kolomainen 13.9.1953">'+
        '<img src="images/SanniReimajaMattiKolomainen_thumb.jpg" />'+
    '</a>'+
    '</div>'+
    '<div class="column">'+
    '<a class="chocolat-image" href="images/Sanni_ja_MattiJaltalla-4.9.1964.jpg" title="Sanni ja Matti Jaltalla 4.9.1964">'+
        '<img src="images/Sanni_ja_MattiJaltalla-4.9.1964_thumb.jpg"/>'+
    '</a>'+
    '</div>'+
    "<p>Mieleni minun tekevi, aivoni ajattelevi lähteäni laulamahan, saa'ani sanelemahan, sukuvirttä suoltamahan, lajivirttä laulamahan. Sanat suussani sulavat, puhe'et putoelevat, kielelleni kerkiävät, hampahilleni hajoovat.</p>" +
  
        '<div class="column">'+
        "<p>Veli kulta, veikkoseni, kaunis kasvinkumppalini! Lähe nyt kanssa laulamahan, saa kera sanelemahan yhtehen yhyttyämme, kahta'alta käytyämme! Harvoin yhtehen yhymme, saamme toinen toisihimme näillä raukoilla rajoilla, poloisilla Pohjan mailla.</p>" +  
  
        '</div>'+
        '<div class="column">'+
        "<p>Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta.</p>" +
  
        '</div>'+
    '</div>'+
    "<p>Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin.</p>" +
    "<p>Mieleni minun tekevi, aivoni ajattelevi lähteäni laulamahan, saa'ani sanelemahan, sukuvirttä suoltamahan, lajivirttä laulamahan. Sanat suussani sulavat, puhe'et putoelevat, kielelleni kerkiävät, hampahilleni hajoovat.</p>" +
    "<p>Veli kulta, veikkoseni, kaunis kasvinkumppalini! Lähe nyt kanssa laulamahan, saa kera sanelemahan yhtehen yhyttyämme, kahta'alta käytyämme! Harvoin yhtehen yhymme, saamme toinen toisihimme näillä raukoilla rajoilla, poloisilla Pohjan mailla.</p>" +  
    "<p>Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta.</p>" +
    "<p>Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin.</p>" +
    "</div>" +
  "</div>";
let loikkarit =

"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Loikkarit ilmiönä</h3>" +
'<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/suojarvi_raja_kaksinainen1930luku.jpg"></div>' +
"<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>Kaksinaisen rajavartio- ja tulliasema 1930-luvulla (Kuva Heninen net)</p>" +
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suomesta lähti arviolta jopa yli 10 000 loikkaria Neuvostoliittoon</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Uomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen."+ 
"SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen.</p>";
/* selvitettävä rajakuvan tekijänoikeudet */

let rajanylitys =

"<h3 >Loikkauksia</h3>" +'<div id="parallelogram"></div>'+  
  '<img src="images/train.jpg">' +
  '<p class="imageCredit"></p>' +
  "<p>Ronkainen päätyi töihin Kamensk-Uralskille. Olot eivät miellyttäneet, ja hän teki palautusanomuksen 1934.</p>" + 
  
  "<h4>Jotkut yrittivät luvallista tietä</h4>"+
  "<p>Neuvostoliittoon jo menneet tuttavat, ystävät ja sukulaiset houkuttelivat suojärveläisiä Neuvostoliittoon. Usein ohjeistettiin matkustuslupien hankkimisessa ja tarjouduttiin auttamaan. Esimerkiksi Petroskoissa asunut Tauno Partanen neuvoi Suojärvelle jäänyttä Väinö Partasta näin:" +
  "<blockquote>minä hommaan täältä ensin maahan tulo luvan, sen saapi ne lähettää sen Viipuriin Neuvostoliiton "+
  "onsulaattiin ja sinä hommaat maaherrasta passin ja viet sen konsulaattiin … Kun saat sen passin, "+
  "niin elä myy mitään vaan tuo tänne täällä on puute yhdestä ja toisesta, koita hommata auton korjaus "+
  "vehkeitä mikäli mahdollista vaikka kaikenlaisia,"+
   "äläkä tee tuhmuutta, kuten minä että myin kaikki, tuleehan ne rautatievaunussa. </blockquote></p>" +
  "<p>Ensin rajan yli x kohdassa, yö vietettiin jossain ja toisena päivänä käveltiin Petroskoihin.</p>"+
  "<h4>Laittomasti meni useampi</h4>"+
  "<p>Laiton rajan ylitys ei ollut helppoa. Puudosin lopulta elokuussa 1932 Anna Tanninen kertoo matkasta äidilleen:</p>" + 
  "<p>" +
  '<blockquote>Heipä hei äiti, kaukainen tervehdys teille kaikille,' + 
  "ensiksin alan kirjoittaa muutaman sanan tästä huvireissusta. Ollaan täällä valmista määrätyssä paikassa on ollut kolmas päivä. Matkalla meni melkein kuukausi. Ensiksi oltiin Niskusvaarassa yksi yö ja toinen yö oltiin Hyrsylässä, kolmas yö Kolatselässä ja Pallahessa kuusi päivää ei käynyt autot ei päästy Petrosavoskiin. Petrosavoskissa oltiin kymmenen päivää ja leirillä neljä yötä. Nyt ollaan täällä Puudosissa ja vapaisuudessa saadaan kirjoittaa ja käydä kaupungilla on vain 3 km matkaa.</blockquote></p>" + 
  "<p>Ensin rajan yli x kohdassa, yö vietettiin jossain ja toisena päivänä käveltiin Petroskoihin.</p>";




  


let divChapter2 =
  "<h3>Tutkintovankeus</h3>" +
  '<img src="images/vanki.jpg">' +
  '<p class="imageCredit">Ukrainalainen Vira Zaborovska vankeudessa</p>' +
  '<h4>Tutkintovankeus</h4>'+
  '<p>Emil Kuvaja kirjoitti kotiin Svirstroilta 25.9.32, jonne hänet oli siirretty Petroskoin tutkintavankeudesta. </p>'+
  '<p><blockquote>Tervehdys täältä kommunistisesta valtiosta sinne porvari Suomeen … Tulimme toissapäivänä tänne Petroskoista junalla matka kesti 12 ½ tuntia, mutta luullakseni olemme lähempänä rajaa kuin Petroskoissa sillä isä tietää Lotinapellon siitä on 19 km. Me olemme Karjalaisten kanssa tultu yhtämatkaa. Täällä on paljon tuttuja mutta paljon meni pohjoiseenkin päin Johansonnin Eedit jäi vielä leirille kyllä tuli vesi silmiin kun näki että me päästiin vapaaksi.</blockquote></p>'+
  '<h4></h4>'+
  '<p></p>'+
  '<h4></h4>'+
  '<p></p>';

  let subcontent2 =
  "<p>Huikeita kuvia Svirstroilta!</p>"+

    '<span style="font-size:15px;cursor:pointer;align:right" onclick="openNav('+ "'myOverlay2')" + '">&xrarr; Katso kuvat!</span>'+
    '<div id="myOverlay2" class="overlay">' +
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav('+ "'myOverlay2')" + '">&times;</a>' +
    
  '<div class="overlay-content">' +
  '<div class="chocolat-parent">' +
  '<div class="row">'+
      '<div class="column">'+
    /* '<h2>Sanni ja Matti</h2>' + */
    '<a class="chocolat-image" href="images/sanni_ja_Matti.jpg" title="Sanni ja Matti">'+
        '<img src="images/sanni_ja_Matti_thumb.jpg" />' +
    '</a>'+
    '</div>'+
    '<div class="column">'+
    '<a class="chocolat-image" href="images/SanniReimajaMattiKolomainen13.9.1953.jpg" title="Sanni Reima ja Matti Kolomainen 13.9.1953">'+
        '<img src="images/SanniReimajaMattiKolomainen_thumb.jpg" />'+
    '</a>'+
    '</div>'+
    '<div class="column">'+
    '<a class="chocolat-image" href="images/Sanni_ja_MattiJaltalla-4.9.1964.jpg" title="Sanni ja Matti Jaltalla 4.9.1964">'+
        '<img src="images/Sanni_ja_MattiJaltalla-4.9.1964_thumb.jpg"/>'+
    '</a>'+
    '</div>'+
    '<div class="column">'+
    '<a class="chocolat-image" href="images/taloudellinenKomitea.jpeg" title="Esimerkki asiakirjasta kuvagalleriassa">'+
        '<img src="images/taloudellinenKomitea_thumb.jpeg"/>'+
    '</a>'+
    '</div>'+
'</div>';

let puudosi =
  "<h3>Tuomiot</h3>" +
  '<img src="images/vanki.jpg">' +
  '<p class="imageCredit">Ukrainalainen Vira Zaborovska vankeudessa</p>' +
  '<p>Loikkarit saivat yleensä pakkotyötuomion, jonka pituus vaihteli puolesta vuodesta kolmeen vuoteen Hilma Kotilainen kuvaili olojaan äidilleen Puudosin alueeseen kuuluvasta Kersonista 10.8.32 seuraavasti:</p>'+
  '<p><blockquote>Tämä Kersonissa oloaika on sellaista karanteeni aikaa eli tutkintolaisaikaa se on puolivuotta ja sen ajan kun käyttäytyy siivosti niin sitten olemme maan kansalaisia Venäläisiä, ei me täällä olla vankina vaan ainoastaan valvonnan alaisia</blockquote></p>';


  let divChapter1 =

  "<h3 >Siirto pakkotyöhön työmaille</h3>" +
    '<img src="images/train.jpg">' +
    '<p class="imageCredit">Työläiset saapuvat junalla työmaalle</p>' +
    "<p>Tutkintovankeuden jälkeen oli mahdollista kirjoittaa Suomeen. Useimmat ilmoittivat kotiin missä olivat ja kertoivat myös, keitä muita he matkan varrella olivat nähneet, ja mihin tuttavia oli siirretty kuten Emil Ovaskakin kirjeessään kertoo:</p>" + 
    '<p><blockquote>…minä en ole voinut enemmin kirjoittaa kun ei ole ollut kirjoitus lupaa vaan nyt kun muutettiin Petrosavoskista 60 km toiseen työmaahan täällä on suuri kalkkkikivilouhimo ja minä olen kirvestöissä ja Hilja on leipomossa. Kyllä tässä maassa työtä riittää ja leipää ja täällä hän nuo näkyvät suojärveläiset olevankin vaan minä en tiedä Naatista mitään kun hän joutuu Puutosin metsätyömaille. Me oltiin kesäleirillä 2 kuukautta. Täällä on paljon Suojärveläisiä mis nyt ollaan Suokas Lassi ja Tapanisen sakki</blockquote></p>';
  
  let subcontent1 =
  "<p>Voimme myös kertoa asiasta tarkemmin ja lisää. Klikkaa linkkiä, ja lue kiinnostava kertomus.</p>"+
  '<span style="font-size:15px;cursor:pointer;align:right" onclick="openNav('+ "'myOverlay1')" + '">&xrarr; Lue lisää</span>'+
  '<div id="myOverlay1" class="overlay">' +
    '<a href="javascript:void(0)" class="closebtn" onclick="closeNav('+ "'myOverlay1')" + '">&times;</a>' +
    '<div class="overlay-content">' +
    '<div class="row">'+
    "<p>Mieleni minun tekevi, aivoni ajattelevi lähteäni laulamahan, saa'ani sanelemahan, sukuvirttä suoltamahan, lajivirttä laulamahan. Sanat suussani sulavat, puhe'et putoelevat, kielelleni kerkiävät, hampahilleni hajoovat.</p>" +
        
        '<div class="column">'+
        "<p>Veli kulta, veikkoseni, kaunis kasvinkumppalini! Lähe nyt kanssa laulamahan, saa kera sanelemahan yhtehen yhyttyämme, kahta'alta käytyämme! Harvoin yhtehen yhymme, saamme toinen toisihimme näillä raukoilla rajoilla, poloisilla Pohjan mailla.</p>" +  
  
        '</div>'+
        '<div class="column">'+
        "<p>Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta.</p>" +
  
        '</div>'+
    '</div>'+
    "<p>Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin.</p>" +
    "<p>Mieleni minun tekevi, aivoni ajattelevi lähteäni laulamahan, saa'ani sanelemahan, sukuvirttä suoltamahan, lajivirttä laulamahan. Sanat suussani sulavat, puhe'et putoelevat, kielelleni kerkiävät, hampahilleni hajoovat.</p>" +
    "<p>Veli kulta, veikkoseni, kaunis kasvinkumppalini! Lähe nyt kanssa laulamahan, saa kera sanelemahan yhtehen yhyttyämme, kahta'alta käytyämme! Harvoin yhtehen yhymme, saamme toinen toisihimme näillä raukoilla rajoilla, poloisilla Pohjan mailla.</p>" +  
    "<p>Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta.</p>" +
    "<p>Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin.</p>" +
    "</div>" +
  "</div>";
  
 
  /*  '<div class="container">'+ */


  
/*     '<img id="expandedImg" style="width:50%">'+
    '<div id="imgtext"></div>'+ */
  /* '</div>'+ */
/*     '<div class="row">'+
      '<div class="column">'+
        '<img src="images/sanni_ja_Matti.jpg" alt="Sanni ja Matti" style="width:100%" onclick="myImages(this);">'+
      '</div>'+
      '<div class="column">'+
        '<img src="images/SanniReimajaMattiKolomainen13.9.1953.jpg" alt="Sanni Reima ja Matti Kolomainen" style="width:100%" onclick="myImages(this);">'+
      '</div>'+
      '<div class="column">'+
        '<img src="images/Sanni_ja_MattiJaltalla-4.9.1964.jpg" alt="Sanni ja Matti Jaltalla 1964" style="width:100%" onclick="myImages(this);">'+
      '</div>'+
      '<div class="column">'+
        '<img src="images/Mattisynt.30.8.1909kuva1989.jpg" alt="Matti, s. 30.8.1909" style="width:100%" onclick="myImages(this);">'+
      '</div>'+
    "</div>" +
    "</div>" + */
  '</div>';
  



let divChapter3 =
  '<h3>13.3.1938: Teloitus</h3>' +
  '<img src="images/ristit.jpg">' +
  '<p class="imageCredit">Hautausmaa Vorkutan lähellä</p>' +
  "<p>Ronkainen ammuttiin Jekaterinburgissa tekaistujen syytteiden nojalla</p>";
  {/* <div class= "shadows"></div> */}


let gulag =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>GULAG</h3>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag oli järjestelmä, jonka nimi syntyi sitä hallinnoivasta virastosta. Neuvostoliiton sisäasiainkansankomissariaatin (NKVD) alainen leirihallinnon päävirasto (Glavnoje upravlenije lagerei, GULAG) oli rangaistuspaikkojen verkosto, joka sisälsi erilaisia keskitys-, karanteeni-, ojennus-, ja työleirejä, jotka sijaitsivat eri puolilla Neuvostoliittoa. Tunnetun venäläisen historiantutkijan Oleg Khlevniukin mukaan GULAG oli aikalaisille hallinnollinen lyhenne, joka vasta myöhemmin syntyi käsitteeksi ihmisten mieliin. Tämä tapahtui erityisesti Aleksandr Solzhenitsynin kautta, jonka vuonna 1973 ilmestynyt kirja Arhipelag GULAG (Vankileirien saaristo) kuvasi leirejä ja siellä olleiden ihmisten kohtaloita. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag-järjestelmä oli syntynyt Venäjän sisällissodan (1917-1921) aikaisten keskitysleirien pohjalle. Näille keskitysleireille suljettiin poliittisia vastustajia ja bolshevikkien vastavallankumoukselliseksi määrittelemiä ihmisiä. Gulag-järjestelmä perustui neuvostoliittolaiseen rankaisupolitiikkaan, jonka erityispiirteitä olivat a)rikoksen sovittaminen työllä ja b)hallinnollisten eli niin sanottujen oikeuden ulkopuolisten ihmisten vapautta rajoittavien rankaisukeinojen käyttö sekä c)karkotukset kauas pysyvästä asutuksesta sijaitseville paikoille. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Järjestelmään liittyi myös erilaisten toimijoiden vastuu ja kilpailu resursseista 1920-luvulla, mikä vaikutti myös järjestelmän muotoutumiseen. Sisällissodan jälkeen lakkautettiin vastavallankumouksellista toimintaa vastaan kovin ottein taistellut erityiskomissio Tsheka. Sen tehtävät siirrettiin valtiolliselle poliittiselle hallinnolle (O)GPU, joka kilpaili resursseista yleisestä järjestyksestä vastanneiden ja  neuvostotasavalloissa toimineiden sisäasiainkansankomissariaattien (NKVD) kanssa. Vuonna 1934 nämä kilpailevat tahot yhdistettiin uudeksi valtakunnalliseksi sisäasiankansankomissariaatiksi, joka otti myös valtiollisen poliisin tehtävät itselleen.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Leirit sijaitsivat eri puolilla Neuvostoliittoa ja niiden toiminta vaihteli paljon. Yleensä ne olivat piikkilangoin rajattuja alueita, joilla sijaitsivat asumiseen käytettävät parakit sekä leirihallintoon liittyvät rakennukset. Leireillä oli yleensä myös ruokaloita ja sairastupia. Leireiltä lähdettiin vartioiden saattamina määrätyille paikoille työhön muun muassa kaivoksiin ja metsätyömaille. Leireille tuomittiin sellaiset henkilöt, joiden rikoksista oli mahdollista antaa yli kolmen vuoden vankeus- tai leirituomio. Koska neuvostoliittolainen rankaisupolitiikka katsoi valtiota vastaan tehdyt rikokset vaarallisemmaksi kuin niin sanotut tavalliset rikokset, oli leireille tuomittuina paljon ihmisiä, joiden rikoksia pidettiin poliittisina. Toisaalta leireille joutuivat myös ne henkilöt, jotka olivat tehneet neuvosto-oikeudenkin näkökulmasta ”tavallisia” vaarallisia rikoksia eli talousrikoksia sekä vakavia väkivaltarikoksia.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Ojennustyöleirien lisäksi Gulag-järjestelmään sisältyi erityisasutuskeskuksia ja siirtokuntia joiden asukkaat tekivät töitä OGPU/NKVD:n hallinnoimilla rakennus- ja metsätyömailla sekä maatiloilla. Nämä erityisasutukset olivat syntyneet kun Neuvostoliiton johtaja Josif Stalin aloitti varakkaita talonpoikia, eli kulakkeja vastaan käydyn kampanjan eli dekulakisaation vuonna 1929. Varakkaan talonpojan määritelmäksi riitti pienikin omaisuus ja sen seurauksena noin neljä miljoonaa ihmistä joutui erilaisten toimenpiteiden kohteiksi, muun muassa karkotukseen ja pakkotyöhön. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Turvallisuusviranomaisten eli aluksi OGPU:n ja sittemmin NKVD:n rooli Neuvostoliiton taloudessa kasvoi 1930-luvulla. Siitä tuli merkittävä työvoiman tarjoaja maan suurille työmaille, joita oli perustettu maan talouden ensimmäisen viisivuotiskauden (1928-1932) aikana. Niissä hakattiin metsää, valjastettiin jokia, tuotettiin sähköä ja rakennettiin raskasta teollisuutta.  Turvallisuusviranomaiset vuokrasivat niiden alaisuudessa olevaa pakkotyövoimaa eri ministeriöiden ja hallinnonalojen alla oleville tehtaille ja työmaille. Tämän järjestelyn piirissä olevien ihmisten palkoista vähennettiin turvallisuusviranomaisille tuloutettavat hallinnolliset kulut, mutta muutoin heidän elämänsä oli leirien ja erityisasutusten asukkaita vapaampaa.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag-järjestelmästä tuli monimuotoinen verkosto ja olennainen osa neuvostoyhteiskuntaa ja sen taloutta. Arviolta 18 miljoonaa ihmistä joutui Stalinin hallintokauden (1928-1953) aikana GULAG:in hallinnoimille leireille ja työmaille. Lisäksi 6-7 miljoonaa ihmistä karkotettiin kotiseuduiltaan. Suuret leirit, kuten esimerkiksi Mordvassa sijaitseva Temlag tai Kazahstanissa sijaitseva Karlag koostuivat useasta eri ojennustyöleiristä, työkolonioista ja erityisasutuksesta. Järjestelmän sisälle joutuneet ihmiset joutuivat myös tuomionsa aikana kokemaan monesti siirtoja leiriltä tai asutukselta toiselle.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Nykytutkimuksen myötä Gulag-järjestelmän ja ”vapaan” neuvostoyhteiskunnan rajoja on alettu pitämään yhä huokoisempina. Asumiseen liittyvät rajoitukset, työhön liittyvät velvoitteet sekä ravinnon niukkuus yhdistivät monia ihmisiä piikkilangan molemmin puolin. Lisäksi neuvostoyhteiskunnan propaganda sekä työteho ja -kurikampanjat vedettiin läpi myös turvallisuusviranomaisten valvomilla alueilla. Ihmiset, jotka olivat joutuneet järjestelmän piiriin ja selvinneet siitä, joutuivat usein jäämään töihin ja asumaan leirien ja erityisasutusten läheisyyteen kauas kotipaikoistaan. Monet saivat myös lisää tuomioita ja siirtoja uusille leireille. Yhtä lailla monien kohdalla leirituomio koitui kuolemaksi. Yli 1, 6 miljoonaa ihmistä kuoli leireillä ja yli miljoona ihmistä matkalla niille.</p>";

let sarov =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>GULAG</h3>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag oli järjestelmä, jonka nimi syntyi sitä hallinnoivasta virastosta. Neuvostoliiton sisäasiainkansankomissariaatin (NKVD) alainen leirihallinnon päävirasto (Glavnoje upravlenije lagerei, GULAG) oli rangaistuspaikkojen verkosto, joka sisälsi erilaisia keskitys-, karanteeni-, ojennus-, ja työleirejä, jotka sijaitsivat eri puolilla Neuvostoliittoa. Tunnetun venäläisen historiantutkijan Oleg Khlevniukin mukaan GULAG oli aikalaisille hallinnollinen lyhenne, joka vasta myöhemmin syntyi käsitteeksi ihmisten mieliin. Tämä tapahtui erityisesti Aleksandr Solzhenitsynin kautta, jonka vuonna 1973 ilmestynyt kirja Arhipelag GULAG (Vankileirien saaristo) kuvasi leirejä ja siellä olleiden ihmisten kohtaloita. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag-järjestelmä oli syntynyt Venäjän sisällissodan (1917-1921) aikaisten keskitysleirien pohjalle. Näille keskitysleireille suljettiin poliittisia vastustajia ja bolshevikkien vastavallankumoukselliseksi määrittelemiä ihmisiä. Gulag-järjestelmä perustui neuvostoliittolaiseen rankaisupolitiikkaan, jonka erityispiirteitä olivat a)rikoksen sovittaminen työllä ja b)hallinnollisten eli niin sanottujen oikeuden ulkopuolisten ihmisten vapautta rajoittavien rankaisukeinojen käyttö sekä c)karkotukset kauas pysyvästä asutuksesta sijaitseville paikoille. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Järjestelmään liittyi myös erilaisten toimijoiden vastuu ja kilpailu resursseista 1920-luvulla, mikä vaikutti myös järjestelmän muotoutumiseen. Sisällissodan jälkeen lakkautettiin vastavallankumouksellista toimintaa vastaan kovin ottein taistellut erityiskomissio Tsheka. Sen tehtävät siirrettiin valtiolliselle poliittiselle hallinnolle (O)GPU, joka kilpaili resursseista yleisestä järjestyksestä vastanneiden ja  neuvostotasavalloissa toimineiden sisäasiainkansankomissariaattien (NKVD) kanssa. Vuonna 1934 nämä kilpailevat tahot yhdistettiin uudeksi valtakunnalliseksi sisäasiankansankomissariaatiksi, joka otti myös valtiollisen poliisin tehtävät itselleen.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Leirit sijaitsivat eri puolilla Neuvostoliittoa ja niiden toiminta vaihteli paljon. Yleensä ne olivat piikkilangoin rajattuja alueita, joilla sijaitsivat asumiseen käytettävät parakit sekä leirihallintoon liittyvät rakennukset. Leireillä oli yleensä myös ruokaloita ja sairastupia. Leireiltä lähdettiin vartioiden saattamina määrätyille paikoille työhön muun muassa kaivoksiin ja metsätyömaille. Leireille tuomittiin sellaiset henkilöt, joiden rikoksista oli mahdollista antaa yli kolmen vuoden vankeus- tai leirituomio. Koska neuvostoliittolainen rankaisupolitiikka katsoi valtiota vastaan tehdyt rikokset vaarallisemmaksi kuin niin sanotut tavalliset rikokset, oli leireille tuomittuina paljon ihmisiä, joiden rikoksia pidettiin poliittisina. Toisaalta leireille joutuivat myös ne henkilöt, jotka olivat tehneet neuvosto-oikeudenkin näkökulmasta ”tavallisia” vaarallisia rikoksia eli talousrikoksia sekä vakavia väkivaltarikoksia.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Ojennustyöleirien lisäksi Gulag-järjestelmään sisältyi erityisasutuskeskuksia ja siirtokuntia joiden asukkaat tekivät töitä OGPU/NKVD:n hallinnoimilla rakennus- ja metsätyömailla sekä maatiloilla. Nämä erityisasutukset olivat syntyneet kun Neuvostoliiton johtaja Josif Stalin aloitti varakkaita talonpoikia, eli kulakkeja vastaan käydyn kampanjan eli dekulakisaation vuonna 1929. Varakkaan talonpojan määritelmäksi riitti pienikin omaisuus ja sen seurauksena noin neljä miljoonaa ihmistä joutui erilaisten toimenpiteiden kohteiksi, muun muassa karkotukseen ja pakkotyöhön. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Turvallisuusviranomaisten eli aluksi OGPU:n ja sittemmin NKVD:n rooli Neuvostoliiton taloudessa kasvoi 1930-luvulla. Siitä tuli merkittävä työvoiman tarjoaja maan suurille työmaille, joita oli perustettu maan talouden ensimmäisen viisivuotiskauden (1928-1932) aikana. Niissä hakattiin metsää, valjastettiin jokia, tuotettiin sähköä ja rakennettiin raskasta teollisuutta.  Turvallisuusviranomaiset vuokrasivat niiden alaisuudessa olevaa pakkotyövoimaa eri ministeriöiden ja hallinnonalojen alla oleville tehtaille ja työmaille. Tämän järjestelyn piirissä olevien ihmisten palkoista vähennettiin turvallisuusviranomaisille tuloutettavat hallinnolliset kulut, mutta muutoin heidän elämänsä oli leirien ja erityisasutusten asukkaita vapaampaa.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Gulag-järjestelmästä tuli monimuotoinen verkosto ja olennainen osa neuvostoyhteiskuntaa ja sen taloutta. Arviolta 18 miljoonaa ihmistä joutui Stalinin hallintokauden (1928-1953) aikana GULAG:in hallinnoimille leireille ja työmaille. Lisäksi 6-7 miljoonaa ihmistä karkotettiin kotiseuduiltaan. Suuret leirit, kuten esimerkiksi Mordvassa sijaitseva Temlag tai Kazahstanissa sijaitseva Karlag koostuivat useasta eri ojennustyöleiristä, työkolonioista ja erityisasutuksesta. Järjestelmän sisälle joutuneet ihmiset joutuivat myös tuomionsa aikana kokemaan monesti siirtoja leiriltä tai asutukselta toiselle.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Nykytutkimuksen myötä Gulag-järjestelmän ja ”vapaan” neuvostoyhteiskunnan rajoja on alettu pitämään yhä huokoisempina. Asumiseen liittyvät rajoitukset, työhön liittyvät velvoitteet sekä ravinnon niukkuus yhdistivät monia ihmisiä piikkilangan molemmin puolin. Lisäksi neuvostoyhteiskunnan propaganda sekä työteho ja -kurikampanjat vedettiin läpi myös turvallisuusviranomaisten valvomilla alueilla. Ihmiset, jotka olivat joutuneet järjestelmän piiriin ja selvinneet siitä, joutuivat usein jäämään töihin ja asumaan leirien ja erityisasutusten läheisyyteen kauas kotipaikoistaan. Monet saivat myös lisää tuomioita ja siirtoja uusille leireille. Yhtä lailla monien kohdalla leirituomio koitui kuolemaksi. Yli 1, 6 miljoonaa ihmistä kuoli leireillä ja yli miljoona ihmistä matkalla niille.</p>";

let kirjeet = 
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Kirjeet</h3>"+

  /* '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/magnitogorsk2.jpg"></div>' + */
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>Magnitogorskin kaupunkia.</p>" +
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suomesta sisällissodan jälkeen Neuvostoliiton puolelle muuttaneet ihmiset pitivät usein aktiivisesti yhteyttä sukulaisiinsa ja ystäviinsä. Koska suurin osa 1920-luvulla Neuvostoliittoon muuttaneista ihmisistä oli niin sanottuja punapakolaisia, oltiin Suomessa kiinnostuneita kirjeiden sisällöstä. Pelättiin, että kirjeiden välityksellä koordinoitaisiin Suomessa kielletyn ja Neuvostoliitosta käsin toimivan Suomen kommunistisen puolueen (SKP) toimintaa. Sen vuoksi Etsivän keskuspoliisi (EK) piti tarkkaa lukua paikkakunnilta mahdollisesti Neuvostoliittoon muuttaneista ihmisistä ja seurasi postiliikennettä Suomen ja Neuvostoliiton välillä.</p>"+
'<div class="chocolat-parent">'+"<p style='max-width:700px; margin-left:auto; margin-right:auto'>"+
'<a class="chocolat-image" href="images/kirjeet/kiertokirje1.jpg" title="Etsivän keskuspoliisin kiertokirje" data-srcset="images/kirjeet/kiertokirje1.jpg">'+
        '<img src="images/kirjeet/kiertokirje1_thumb.jpg" style = "max-width:200px;height:auto"/>'+
'</a>'+
'<a class="chocolat-image" href="images/kirjeet/kiertokirje2.jpg" title="Etsivän keskuspoliisin kiertokirje" data-srcset="images/kirjeet/kiertokirje2.jpg">'+
        '<img src="images/kirjeet/kiertokirje2_thumb.jpg" style = "max-width:200px;height:auto"/>'+
'</a>'+
"</p>"+
"</div>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Vuonna 1932 Etsivän keskuspoliisi sai virallisen määräyksen Valtioneuvostolta ”tarkastaa  Venäjälle menevät ja sieltä tulevat postilähetykset”. Neuvostoliitosta tulleet kirjeet tulivat Viipurin kautta, missä ne käsiteltiin ensimmäiseksi alaosastojen antamien ohjeiden mukaisesti. Kirjeitä kopioitiin ja lähetettiin eri puolille maata, mutta Sortavalan alaosasto säilytti Suojärvelle lähetyt kirjeet omassa kokoelmassaan. Kokoelma sisältää kopioita sekä alkuperäiskappaleita Suojärveltä Neuvostoliittoon lähteneiden ihmisten kirjeitä perheilleen, sukulaisilleen ja ystävilleen sekä muutamia näiden lähettämiä kirjeitä Neuvostoliittoon vuosilta 1932-1939.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Kokoelma käsittää 1200 erilaista kopiota ja alkuperäistä kirjettä. Suurin osa kirjeistä on kopioitu kokonaisuudessa, mutta osassa kirjeistä EK:n virkailijat ovat tiivistäneet kirjeiden sisältöä. Toisinaan virkailijat ovat myös kommentoineet kirjeissä mainittuja henkilöitä ja asioita antamalla lisätietoja perhesuhteista tai kirjoittajien tai vastaanottajien taustoista. Suurin osa kirjeistä on lähetetty Suojärven Lietteen Välikylään. Kirjeitä lähettivät sekä miehet että naiset omille sukulaisilleen, naapureille ja ystävilleen.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Osa kirjeistä on etupäässä Petroskoissa ja muualla Neuvosto-Karjalassa asuneiden ihmisten kirjeitä, joissa kerrotaan elämästä Neuvostoliitossa, perheen kuulumisia sekä kommentoidaan Suomen ja Neuvostoliiton poliittista tilannetta. Iso osa kirjeistä on lähetetty kuitenkin Neuvosto-Karjalassa ja Leningradin alueella sijainneilta rakennus- ja metsätyömailta, jonne laittomasti rajanylittäneet suojärveläiset sijoitettiin. Nämä laittomat rajanylittäjät eli loikkarit, tuomittiin pakkotyöhön valtiollisen poliisin OGPU:n ja sittemmin sisäasiankansankomissariaatin NKVD valvomille työmaille, jotka kuuluivat Gulag-järjestelmän piiriin.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suojärveläiset loikkarit saivat oikeuden lähettää kirjeitä Suomeen sen jälkeen, kun tutkintavankeus päättyi ja heidät oli sijoitettu suorittamaan rangaistustaan työmaille. Kirjeet näiltä työmailta, kuten esimerkiksi ”Puutoisista” (Pudosh) tai ”Virstroista” (Svirstroi), kertovat mielenkiintoista tarinaa siitä, kuinka ensikuukaudet uudessa maassa otettiin vastaan ja miten oma asema siellä käsitettiin.</p>"+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suojärveläiset olivat hyvin perillä siitä, että kirjeitä luettiin rajan molemmin puolin. Gulag-järjestelmä, jonka piirissä loikkarit olivat, asetti rajoituksia kirjeiden kirjoittamiselle ja lähettämiselle. Kirjeoikeutta saatettiin rajata koskemaan vain lähiomaisia tai niiden määrää rajoitettiin. Rajoittamista tehosti se, että paikkakunnilla, joissa loikkarit olivat, oli lähes mahdotonta saada paperia, kirjekuoria ja postimerkkejä.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Kirjeitä myös sensuroitiin. Suomalaiset turvallisuusviranomaiset Neuvostoliitossa ja leireillä olevat puoluetyöntekijät lukivat kirjeitä ja sensuroivat niitä kohtia, mitä pitivät haitallisena tietona Neuvostoliitosta. Etsivän keskuspoliisi Suomessa luki myös kirjeet ja saattoi kuulustella kirjeen vastaanottajia. Loikkarit joutuivat monesti ristiriitaiseen tilanteeseen. Jos halusi varmistaa, että kirje läpäisi Neuvostoliiton puolella sensuurin, oli vältettävä kritiikkiä maata kohtaan. Jos halusi varmistaa, ettei vastaanottaja joutuisi Suomessa hankaluuksiin, piti välttää Neuvostoliiton ja olojen positiivista kuvaamista. Moni suojärveläinen päätyi lopulta taiteilemaan kielen ja ilmaisun kanssa, toiset taas päättivät kirjoittaa asioistaan sellaisina kuin he kokivat ja näkivät ne.</p>";

let ensikosketus =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Ensikosketus Neuvostoliittoon</h3>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Kun loikkarit ylittivät Suomen ja Neuvostoliiton rajan, he pyrkivät he löytämään asutusta ja viranomaiset, joille ilmoittautua. Neuvostoliiton rajoja vartioivat rajajoukot, jotka kuuluivat vuoteen 1934 asti turvallisuusviranomaisten OGPU:n ja sen jälkeen NKVD:n alaisuuteen. Aluksi suojärveläisiä loikkareita pidettiin saapumispaikasta riippuen paikallisilla pidätysasemilla, jossa tehtiin ensimmäiset kuulustelut. Tämän jälkeen loikkarit kerättiin suuremmaksi joukoksi ennen kuin heidät vietiin tutkintovankeuteen Petroskoissa sijaitsevaan vankilaan ja sen täyttyessä myös Petroskoissa sijainneelle pidätysleirille.</p>"+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Naisten ja lasten tutkintovankeus kesti yleensä vain joitakin päiviä, mutta miehiä pidettiin tutkintovankeudessa muutamista viikoista useisiin kuukausiin. OGPU pyrki selvittämään loikkareiden syitä rajanylitykseen ja seulomaan mahdolliset vakoojat joukosta pois. Kun aikaisemmin lähes kaikki ne rajaloikkarit, joilla ei ollut Neuvostoliiton puolelta lupaa saapua maahan, palautettiin takaisin Suomeen, toistaiseksi tuntemattomasta syystä näin ei enää menetelty vuodesta 1930-lähtien. Vaikka joitakin loikkareita palautettiin silti takaisin Suomeen, valtaosa sai luvan jäädä Neuvostoliiton puolelle. Petroskoi alkoi täyttyä rajan takaa loikanneista suojärveläisistä, jotka odottivat miestensä vapautumista tutkintovankeudesta.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Rajan ylittäminen ”salateitse” ilman passia tai lupaa saapua maahan oli kuitenkin rikos molemmin puolin rajaa. Suomessa laittomasta rajanylityksestä annettiin rikoslain 42. luvun toisen pykälän mukaisesti rangaistuksia aluksi sakkoja ja myöhemmin lyhyitä vankeusrangaistuksia. Ne, joilla ei ollut viisumia tai muuta viranomaisten lupaa saapua Neuvostoliittoon, saivat Neuvostoliitossa rangaistuksen luvattomasta rajanylityksestä Neuvostoliiton vuoden 1926 rikoslain pykälän 84 mukaan.  Tämän pykälän nojalla loikkarit tuomittiin poliittisen poliisin, OGPU:n valvomaan pakkotyöhön.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Pakkotyörangaistus tarkoitti sitä, että OGPU määräsi henkilölle asuin- ja työpaikan, jossa hänen tuli määräysten mukaisesti tehdä töitä kuutena päivänä viikossa. Työstä maksettiin palkkaa, mutta siitä vähennettiin asumiskustannukset ja ruoka, jonka määrä ja laatu oli sidottu työsuoritukseen. Rangaistukseen liittyi myös rajoituksia siitä, millä alueella ihmiset saivat vapaasti liikkua.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Kun tutkintovankeus oli suoritettu, loikkareita alettiin siirtää pakkotyöhön työmaille, jotka sijaitsivat eri puolilla Neuvosto-Karjalaa ja Leningradin aluetta. Moni suojärveläinen joutui metsätyömaille, jotka sijaitsivat Pudoshin alueella sekä rakennustyömaalle Leningradin alueella sijaitsevalle Syvärin voimalaitoksen rakennustyömaalle Svirstroille.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Koska suurin osa loikkareista ei puhunut venäjää, annettiin loikkareiden valvonta OGPU:n vartijoiden lisäksi isoilla työmailla Suomen kommunistisen puolueen (SKP) työntekijöille. Nämä järjestivät loikkareille töitä sekä vapaa-ajan ohjelmaa, mikä sisälsi sekä poliittista agitaatiota että kielikursseja ja muuta toimintaa. Isoimmilla työmailla oli myös järjestetty suomalaisille lapsille lastentarhoja ja kouluja.</p>";

let rajanylitys_teksti =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Rajanylitys</h3>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suojärveläiset olivat tottuneet kulkemaan Suomen ja Venäjän välisen rajan yli, jota suojärveläisten kotiin lähettämissä kirjeissä kutsuttiin monesti" +'"viivaksi". Molempien maiden sisällissotien aikana rajan valvonta oli ongelmallista ja raja ylitettiin usein ilman asiakirjoja. Poliittiset pakolaiset molemmin puolin rajaa siirtyivät maasta toiseen ilman, että etukäteen saatua lupaa olisi hankittu. Suomesta sisällissodan aikana ja sen jälkeen siirtyi arviolta 15000 poliittista pakolaista Neuvostoliittoon.</p>'+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Olojen vakiinnuttua 1920-luvun puolesta välistä lähtien rajan valvonta tehostui. Viralliseen rajan ylitykseen Suomesta Neuvostoliittoon vaadittiin asiakirjoja, Suomen passia ja Neuvostoliiton lupaa saapua maahan, eli viisumia. Suomalaiset viranomaiset eivät kuitenkaan olleet innokkaita myöntämään passeja Neuvostoliittoon matkustaville, koska pelkäsivät Neuvostoliiton värväävän suomalaisia vakoilijoiksi ja vallankumouksen agitaattoreiksi. Neuvosto-Venäjän maahantulopolitiikassa suhtauduttiin poliittisiin pakolaisiin aluksi varsin sallivasti. Laittomastikin maahan tulleet punapakolaiset saivat nopeasti oleskeluluvan.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Neuvostoliiton maahanmuuttopolitiikan kiristyessä 1920-luvun puolivälin jälkeen myös maahan saapumiseen alettiin vaatia lupaa. Tätä lupaa varten piti saada puoltokirje aluehallintoviranomaiselta tai työnantajalta, joka piti vahvistaa aluksi poliittisen poliisin (OGPU) ja sittemmin sisäasiainkomissariaatin toimesta. Nämä luvat saatuaan ulkomaalainen saattoi "+'"viseerata" passinsa konsulaatissa ja näin tulla virallisesti maahan. Tämä oli kuitenkin hidas prosessi, minkä vuoksi moni suomalainen Neuvostoliitosta luvan saatuaan pyrki rajan taakse ilman passia tai muita muodollisuuksia. Nämä ihmiset eivät kuitenkaan olleet Neuvostoliiton silmissä rajaloikkareita vaan poliittisia pakolaisia ja siirtolaisia. Sen sijaan niitä, jotka ylittivät rajan ilman Neuvostoliitosta saatua lupaa, kohdeltiin loikkareina ja taloudellisina pakolaisina, jotka saivat pakkotyötuomion Neuvostoliiton rikoslain mukaisesti laittomasta rajanylityksestä.</p>'+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suomen puolella laiton rajaylitys oli rikos, josta annettiin aluksi sakkorangaistuksia ja myöhemmin 1930-luvulla lyhyitä vankeusrangaistuksia. Etsivän keskuspoliisi seurasi laitonta rajaliikennettä ja sen alaosastot raportoivat kuukausittain laittomista rajanylityksistä. Vuodesta 1930 kiihtynyt laiton rajanylitys oli kiivaimmillaan 1932. Esimerkiksi Sortavalan alaosasto raportoi elokuussa 1932, että Suojärveltä oli elokuun aikana n 110 aikuista ja lasta mennyt Neuvosto-Venäjän puolelle. Touko-heinäkuun aikana rajan oli ylittänyt n. 150 paikkakuntalaista.   Sortavalan alaosasto arveli elokuussa 1932, että Suojärveltä olivat enimmät"+' "venäjänkuumeen" saaneet menneet jo rajan yli.  EK arveli toukokuussa 1933, että 1932-1933 vuodenvaihteessa luvattomasti Neuvosto-Venäjälle siirtyneiden lukumäärä oli noussut toiselle kymmenelle tuhannelle, mitä se piti huippuna, minkä jälkeen uusien loikkareiden määrä tulisi vähenemään.  Koska rajanylitys oli laiton, oli suomalaisten viranomaisten vaikea antaa täsmällistä tietoa loikkareista. Etsivän keskuspoliisi arvioi 1930-1934 laittomasti Suomen ja Neuvostoliiton rajan ylittäneiden ihmisten kokonaismääräksi 10 000-15 000 henkeä.</p>'+  
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Pohjois-Karjalan rajapitäjien kautta menivät myös monet muut muualta Suomesta saapuneet rajaloikkarit. Maarajan lisäksi raja ylitettiin myös vesiteitä käyttäen Salmen ja Impilahden pitäjistä. Laiton rajanylitys oli kausiluontoista ja oli vilkkaimmillaan maarajoilla loppukesän ja alkusyksyn aikaan, jolloin säät olivat vielä hyviä ja metsästä saattoi saada ravintoa. Laiton rajanylitys väheni talvikuukausina, jolloin ylittäminen oli lumen ja valvonnan vuoksi vaikeampaa. Kevättä kohti liikenne taas vilkastui. Esimerkiksi keväällä 1933 Sortavalan alaosasto raportoi rajaliikenteen jälleen vilkastuneen. Näistä suurin osa oli tullut rajakuntiin muualta Suomesta sillä EK:n mukaan: "+ '"Rajaseudulta ei monikaan enää halua Venäjälle mennä, mutta muualla maassa löytyy edelleen sellaisia, jotka eivät tiedä mitään Venäjän oloista tahi eivät usko mitä niistä on kerrottu."</p>'; 

let stalinin_neuvostoliitto_teksti =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Stalinin Neuvostoliitto</h3>"+
'<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/stalin.jpg"></div>' +
"<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>Tähän voisi keksiä jonkun järkevämmän kuvituskuvan. Tekstin paikkaa pitää myös säätää.</p>" +
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Kun Josif Stalin savusti vastustajansa ulos puolueen ja maan johdosta 15. puoluekokouksessa, joka pidettiin joulukuussa 1927,  alkoi hän toteuttaa politiikkaa, jota on luonnehdittu sosialismiksi yhdessä maassa. Sen perusajatuksena oli, että kun bolshevikkien vallankumousta pelastavaa maailmanvallankumousta ei ollut näköpiirissä, oli sosialismia kehitettävä Neuvostoliitossa, jossa suurin osa väestöstä asui maaseudulla ja sai toimeentulonsa maataloudesta. Tämä merkitsi montaa erilaista toimenpidettä, jotka johtivat neuvostoyhteiskunnan totaaliseen mullistukseen – joidenkin mukaan jopa ylhäältä johdetuksi vallankumoukseksi.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Ensimmäisenä tehtävänä oli muuttaa maaseutu. Talonpojat pakotettiin yhteistiloille eli kolhooseihin. Näin itsenäinen talonpoika muutettiin maataloustyöläiseksi ja viljan myynnistä ulkomailla saatavilla tuloilla Neuvostoliitto investoi teollisuuteen. Vuonna 1928 aloitettu pakkokollektivisointi ajoi kuitenkin maan seuraavina vuosina lähes nälänhädän partaalle ja Ukrainassa todelliseen nälänhätään.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Pakkokollektivisointia täydensi kampanja, jonka tavoitteena oli hävittää varakkaiden talonpoikien eli kulakkien luokka. Bolshevikit pitivät kulakkeina kaikkia niitä talonpoikia, jotka käyttivät ulkopuolista työvoimaa sekä omistivat maatalouskoneita tai hevosia. Tällaisen määritelmän perusteella vangittiin vuosien 1929-1932 kulakkien vastaisen kampanjan aikana lähes kaksi miljoonaa ihmistä karkotettiin erityisasukkaina pakkotyöhön muun muassa Uralille ja Kazakstaniin.</p>"+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Maatalouden mullistus ja suuret väestönsiirrot liittyivät myös teollistamiseen, joka oli uuden talouspoliittisen periaatteen – suunnitelmatalouden – keskeinen tavoite. Suunnitelmatalous pyrki valtion etukäteen määrittelemien tavoitteiden ja keskusjohteisesti ohjattujen tuotantolaitosten avulla tuottamaan kaiken maassa tarvittavan asian voimalaitoksista rautanauloihin. Suunnitelmatalous oli askel kohti sosialismia ja kommunismia, koska tuotantolaitokset olivat valtion omistuksessa. </p>"+  
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Talouden suunnitelmat oli mitoitettu viisivuotisiksi kausiksi. Ensimmäisen viisivuotiskauden aikana käynnistettiin joukko suuria rakennushankkeita, muun muassa voimalaitoksia, terästehtaita, auto- ja traktoritehtaita. Erityisesti Uralin alue oli monien jättimäisten hankkeiden kohde, jonka symboliksi nousi uusi, sosialistiseksi rakennettu kaupunki – Magnitogorsk. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Uralin alueen teollistaminen vaati suuret määrät työvoimaa, jota ei ollut alueella saatavilla. Työvoimaa yritettiin aluksi houkutella, sitten painostaa ja lopulta pakottaa. Työnteko oli normitettu, normit sidottu palkkaan ja muuhun toimeentuloon kuten asumiseen ja ruokaan. Normien ylittämisestä seurasi palkinto. Työtehokampanjat, iskutyö ja stahanovilaisuudeksi kutsuttu liike pyrkivät nostamaan työn tuottavuutta ja kiristämään työkuria. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Työtehokampanjat ulottuivat myös niihin, joiden oli jo lähtökohtaisesti sovitettava työllänsä rikoksia ja rikkomuksia, joita Neuvostoliitto oli lainsäädännössään ja erilaisin kampanjoin määritellyt. Nämä pakkotyöhön tuomitut henkilöt olivat osa Gulag-järjestelmää, jonka sisällä oli erilaisia ojennustyöleirejä, työsiirtoloita ja työvoimaa, jota turvallisuusviranomaiset vuokrasivat eteenpäin eri ministeriöiden alla oleville tuotantolaitoksille. Vaikka pakkotyötäkin määritteli sille omistetut työlainsäädännön asetukset, oli pakkotyössä työn ja ravinnon suhde vielä voimakkaammin sidottu. Epäonnistuminen normien saavuttamisessa johti kierteeseen, joka saattoi johtaa vakavaan aliravitsemukseen ja kuolemaan. </p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suunnitelmatalouden rinnalla kulki voimakas agitaatio- ja propagandatyö, jonka tarkoituksena oli saada väestö suunniteltujen tavoitteiden taakse sekä uskomaan, että arjen ongelmista huolimatta tulevaisuus tulisi olemaan valoisampi. Kommunistisen puolueen työntekijät järjestivät poliittista joukkotyötä, johon sisältyi kustannustoimintaa, kulttuuritapahtumia, luentoja ja muuta toimintaa, jonka tarkoituksena oli selittää maailman eri ilmiöitä ja ohjata parempaan elämään ja työn tuottavuuteen. Yhtenä vahvana propagandavälineenä olivat neuvostoelokuvat, jotka pyrkivät heijastamaan toivetta, minkä Stalin puki sanoiksi stahanovilaisten kokouksessa vuonna 1935: Elämästä on tullut parempaa, elämästä on tullut hauskempaa!</p>"; 





var config = {
  /* style: "mapbox://styles/jfs2118/ckrc7wznz0mf818qwou9f42gy", */
  style: "mapbox://styles/jokiilk/ckrdx9jqw2x5c17qycdm8onn7",

  accessToken:
    /* "pk.eyJ1IjoiamZzMjExOCIsImEiOiJjazJvdXZ2MnkxN2owM2Rwbm1wNWVpYXptIn0.pT-GXNoNxB7l1SMBh2Yjxg", */
    "pk.eyJ1Ijoiam9raWlsayIsImEiOiJjaXNrN3J6YmkwMDQ2Mm5wazV2cnhieHY4In0.gt7dwNL0hYBke0cUS0kKTw",
    
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "loikkarit",
      alignment: "full",
      hidden: false,
      chapterDiv: loikkarit,
      subhidden: true,
      subcontentDiv: "",
      location: {
        center: [32.431, 62.0,8003],
        zoom: 4,
        pitch: 50.00,
        bearing: -20.32

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "overallMap",
      alignment: "right",
      hidden: false,
      chapterDiv: suojarvi_yleinen,
      subcontentDiv: "",
      subhidden: true,
      location: {
        

    
        center: [32.33281, 62.08992],
        zoom: 6.90,
        pitch: 60.00,
        bearing: -52.08
     /*    center: [32.36002086601796, 62.08735588946528],
        zoom: 10.18,
        pitch: 58.00,
        bearing: -19.20 */

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
          duration: 300,
          /* route-ronkainen */
        },
      ],
    },
    {
      id: "suojarviKartta",
      alignment: "right",
      hidden: false,
      chapterDiv: suojarviKuvaus,
      subhidden: false,
      subcontentDiv: suojarvi_sub,
      location: {
        

        center: [32.431, 62.0,8003],
        zoom: 8.67,
        pitch: 0,
        bearing: 0
     /*    center: [32.36002086601796, 62.08735588946528],
        zoom: 10.18,
        pitch: 58.00,
        bearing: -19.20 */

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "yleiskartta",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "yleiskartta",
          opacity: 0,
          duration: 300,
          /* route-ronkainen */
        },
      ],
    },
    {
      id: "kirjeet",
      alignment: "full",
      hidden: false,
      chapterDiv: kirjeet,
      subcontentDiv: "",
      subhidden: true,
      location: {
        

    
        center: [32.33281, 62.08992],
        zoom: 6.90,
        pitch: 60.00,
        bearing: -52.08
     /*    center: [32.36002086601796, 62.08735588946528],
        zoom: 10.18,
        pitch: 58.00,
        bearing: -19.20 */

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
          duration: 300,
          /* route-ronkainen */
        },
      ],
    },
    {
      id: "rajanylitys_teksti",
      alignment: "full",
      hidden: false,
      chapterDiv: rajanylitys_teksti,
      subhidden: true,
      subcontentDiv: "",
      location: {
        center: [32.91923, 61.95795],
        zoom: 6.50,
        pitch: 0.00,
        bearing: 0.00

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
      ],
      onChapterExit: [
      ],
    },
    {
      id: "rajanylitys",
      alignment: "left",
      hidden: false,
      chapterDiv: rajanylitys,
      subhidden: true,
      subcontentDiv: "",
      location: {
        center: [32.91923, 61.95795],
        zoom: 6.50,
        pitch: 0.00,
        bearing: 0.00

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tanniset",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "tanniset",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "ensikosketus",
      alignment: "full",
      hidden: false,
      chapterDiv: ensikosketus,
      subhidden: true,
      subcontentDiv: "",
      location: {
        center: [32.431, 62.0,8003],
        zoom: 4,
        pitch: 50.00,
        bearing: -20.32

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "tutk_vankeus",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      subhidden: false,
      subcontentDiv: subcontent2,
      subImages: true,
      location: {
        center: [34.3420853954818, 61.78555844228482],
        zoom: 8.3,
        pitch: 30.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "puudosi_1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: puudosi,
      subhidden: true,
      subcontentDiv: "",
      subImages: false,
      location: {
        center: [36.52525295963133, 61.80598450684696],
        zoom: 8.3,
        pitch: 30.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "pakkotyo",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      subhidden: false,
      subcontentDiv: subcontent1,
      location: {
        center: [32.737099760562465, 61.23637709105766],
        zoom: 6,
        pitch: 60.00,
        bearing: -20.32

      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "stalin_nl",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: stalinin_neuvostoliitto_teksti,
      subhidden: true,
      subcontentDiv: "",
      subImages: false,
      location: {
        center: [60.57797, 56.87534],
        zoom: 3.3,
        pitch: 10.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "gulag",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: gulag,
      subhidden: true,
      subcontentDiv: "",
      subImages: false,
      location: {
        center: [60.57797, 56.87534],
        zoom: 3.3,
        pitch: 10.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "jekaterinburg",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      subhidden: false,
      subcontentDiv: subcontent2,
      subImages: true,
      location: {
        center: [60.57797, 56.87534],
        zoom: 8.3,
        pitch: 30.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [

      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "teloitus",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      subhidden: true,
      subcontentDiv: "",
      location: {
        center: [60.57797, 56.87534],
        zoom: 2.3,
        pitch: 10.00,
        bearing: 0.00
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "route-ronkainen",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "route-ronkainen",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    
  ],
};