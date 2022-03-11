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
/* let loikkarit =

"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Loikkarit ilmiönä</h3>" +
'<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/suojarvi_raja_kaksinainen1930luku.jpg"></div>' +
"<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>Kaksinaisen rajavartio- ja tulliasema 1930-luvulla (Kuva Heninen net)</p>" +
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Suomesta lähti arviolta jopa yli 10 000 loikkaria Neuvostoliittoon</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Uomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen."+ 
"SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen.</p>"; */
/* selvitettävä rajakuvan tekijänoikeudet */

let loikkarit_ilmio =

"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>Loikkarit ilmiönä</h3>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suomalaisia, jotka 1930-luvun alussa lähtivät salateitse Neuvostoliittoon, on kutsuttu loikkareiksi. Ilmiö liittyi globaaliin talouslamaan ja suomalaisen yhteiskunnan poliittiseen kahtiajakoon, joka jatkui sisällissodan jälkeen.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Vaikka itärajaa oli ylitetty salateitse pitkin 1920-lukua, ilmiö nousi puheenaiheeksi 1930-luvun alkupuolella. Tuolloin muutaman vuoden aikana rajan ylitti Valtiollisen poliisin mukaan ”summittaisten laskelmien mukaan” 12000-15000 henkeä. Tämä arvio sisälsi kaikki ne, jotka olivat ylittäneet Suomen puoleisen rajan luvatta. Luku sisälsi sekä sellaiset henkilöt, joilla oli Neuvostoliiton puolelta lupa saapua maahan, että ne jotka olivat saapuneet luvatta Neuvostoliittoon joko omasta tahdostaan tai ”muilutettuna” lapualaisaktivistien toimesta.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suurin osa loikkareista lähti kuitenkin Neuvostoliittoon omasta tahdosta. Tähän vaikutti huono työllisyystilanne pahentuneen taloustilanteen seurauksena. Suomen talouden kasvu alkoi hidastua jo heti 1929. New Yorkin pörssiromahdus ja Neuvostoliiton harjoittama sahatavaran polkumyynti aiheuttivat syvän kriisin Suomen talouteen, jonka käypähintainen bruttokansantuote laski 1928-1931 jopa 22%. Pahimmat kärsijät oli teollisuus ja metsätalous, johon liittyvä yritykset joutuivat suurin vaikeuksiin. Ne tuotantolaitokset, jotka eivät menneet konkurssiin, irtisanoivat työntekijöitä ja alensivat palkkoja. Pahimpien lamavuosien aikana työttömiä oli eri arvioiden mukaan 110 000 -120 000 henkeä.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Talouslama ei ollut kuitenkaan ainoa suomalaisia Neuvostoliittoon ajanut syy. Yhteiskunnallinen ilmapiiri Suomessa oli 1930-luvulla lapuanliikkeen myötä kärjistynyt voimakkaasti. Liike pyrki lopettamaan kommunistiseksi mieltämänsä toiminnan Suomesta ja se sai suurta kannatusta eri puolilla maata. Sosiaaliset ja taloudelliset suhteet kärjistyivät sisällissodasta toipuvilla paikkakunnilla, eikä työväenliikkeen aktivisteilla ollut helppoa toimia yhä kiristyvillä työmarkkinoilla. Työläisaktivistit olivat ensimmäisiä, jotka irtisanottiin ja viimeisiä, jotka palkattiin.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Samalla kun tavallisten työläisten ja aktivistien tilanne vaikeutui, Neuvostoliitto lisäsi suomenkielistä propagandaansa. Rajan toisella puolella oli Karjalan työkansan kommuuni, jonka suomenkielinen johtajisto agitoi vallankumouksen puolesta. Suomenkielinen radio ja lehdistö sekä kustannusliike Kirja, kertoivat, kuinka Stalinin johdolla suunnitelmatalouteen siirtynyt Neuvostoliitto rakensi, työllisti ja koulutti kohti uutta valoisaa tulevaisuutta. Lisäksi Neuvostoliitossa asuvat sukulaiset ja tuttavat kirjoittivat, miten hyvin tavallinen työläinen eli Neuvostoliitossa. Suomalaiset vastaanottajat muunsivat ilmoitetut palkat virallisen kurssin mukaan ja tulivat siihen tulokseen, että palkat olivat moninkertaiset suomalaisiin palkkoihin nähden.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Vaikka loikkari-ilmiö oli valtakunnallinen ilmiö, suurin osa loikkareista lähti itärajan läheisyydestä sekä merenrantakaupungeista kuten Kotkasta ja Helsingistä. Auvo Kostiaisen keräämään yli kahden tuhannen henkilön tiedot sisältävän loikkarikortiston mukaan suurin osa loikkareista oli kotoisin Viipurin läänistä, mihin Kotkakin kuului. Kostiaisen mukaan kuitenkin myös paikkakunnat kuten Käkisalmi, Suojärvi ja Lappee olivat monien loikkareiden asuinpaikkakuntia.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suurin osa loikkareista oli nuoria miehiä, joilla ei vielä välttämättä ollut ammattiosaamista tai -koulutusta. Mutta mukana oli myös naisia, jotka usein kuitenkin loikkasivat yhdessä aviomiestensä tai perheensä kanssa. Yksin loikanneiden miesten oli usein tarkoitus lähettää rahaa kotiin tai yhdistää perheensä, kun se oli mahdollista.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Laittomasti maahan tulleet suomalaiset saivat Neuvostoliitossa rangaistuksen laittomasta rajanylityksestä ja tuomittiin pakkotyöhön. Osa loikkareista onnistui pian pakenemaan, mutta monet ja etenkin perheelliset loikkarit joutuivat jäämään Neuvostoliittoon. Kun Stalinin vainot pahenivat 1930-luvun lopulla, monet tuomittiin vankeuteen tai kuolemaan.</p>";



let rajanylitys =

"<h3 >Salainen rajaliikenne Suojärven ympäristössä</h3>" +'<div id="parallelogram"></div>'+  
  '<img src="images/train.jpg">' +
  '<p class="imageCredit"></p>' +
  "<p>Ronkainen päätyi töihin Kamensk-Uralskille. Olot eivät miellyttäneet, ja hän teki palautusanomuksen 1934.</p>" + 
  
  "<p>SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta," + 
  "mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen.</p>";

let divChapter1 =

"<h3 >1934: Töissä Kamensk-Uralskilla</h3>" +'<div id="parallelogram"></div>'+  
  '<img src="images/train.jpg">' +
  '<p class="imageCredit">Työläiset saapuvat junalla työmaalle</p>' +
  "<p>Ronkainen päätyi töihin Kamensk-Uralskille. Olot eivät miellyttäneet, ja hän teki palautusanomuksen 1934.</p>" + 
  
  "<p>SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta," + 
  "mutta päätyi hylkäämään sen. SUomen Moskovan lähetystö käsitteli hakemusta, mutta päätyi hylkäämään sen.</p>";

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


  


let divChapter2 =
  "<h3>2.1.1938: Ronkainen vangittiin</h3>" +
  '<img src="images/vanki.jpg">' +
  '<p class="imageCredit">Ukrainalainen Vira Zaborovska vankeudessa</p>' +
  "<p>Ronkainen vangittiin ja vietiin Jekaterinburgiin. </p>" + 
  "<p>Lyökämme käsi kätehen, sormet sormien lomahan, lauloaksemme hyviä, parahia pannaksemme, kuulla noien kultaisien, tietä mielitehtoisien, nuorisossa nousevassa, kansassa kasuavassa: noita saamia sanoja, virsiä virittämiä vyöltä vanhan Väinämöisen, alta ahjon Ilmarisen, päästä kalvan Kaukomielen, Joukahaisen jousen tiestä, Pohjan peltojen periltä, Kalevalan kankahilta. Niit' ennen isoni lauloi kirvesvartta vuollessansa; niitä äitini opetti väätessänsä värttinätä, minun lasna lattialla eessä polven pyöriessä, maitopartana pahaisna, piimäsuuna pikkaraisna. Sampo ei puuttunut sanoja eikä Louhi luottehia: vanheni sanoihin sampo, katoi Louhi luottehisin, virsihin Vipunen kuoli, Lemminkäinen leikkilöihin.</p>";

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
"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>GULAG</h3>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag oli järjestelmä, jonka nimi syntyi sitä hallinnoivasta virastosta. Neuvostoliiton sisäasiainkansankomissariaatin (NKVD) alainen leirihallinnon päävirasto (Glavnoje upravlenije lagerei, GULAG) oli rangaistuspaikkojen verkosto, joka sisälsi erilaisia keskitys-, karanteeni-, ojennus-, ja työleirejä, jotka sijaitsivat eri puolilla Neuvostoliittoa. Tunnetun venäläisen historiantutkijan Oleg Khlevniukin mukaan GULAG oli aikalaisille hallinnollinen lyhenne, joka vasta myöhemmin syntyi käsitteeksi ihmisten mieliin. Tämä tapahtui erityisesti Aleksandr Solzhenitsynin kautta, jonka vuonna 1973 ilmestynyt kirja Arhipelag GULAG (Vankileirien saaristo) kuvasi leirejä ja siellä olleiden ihmisten kohtaloita. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag-järjestelmä oli syntynyt Venäjän sisällissodan (1917-1921) aikaisten keskitysleirien pohjalle. Näille keskitysleireille suljettiin poliittisia vastustajia ja bolshevikkien vastavallankumoukselliseksi määrittelemiä ihmisiä. Gulag-järjestelmä perustui neuvostoliittolaiseen rankaisupolitiikkaan, jonka erityispiirteitä olivat a)rikoksen sovittaminen työllä ja b)hallinnollisten eli niin sanottujen oikeuden ulkopuolisten ihmisten vapautta rajoittavien rankaisukeinojen käyttö sekä c)karkotukset kauas pysyvästä asutuksesta sijaitseville paikoille. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Järjestelmään liittyi myös erilaisten toimijoiden vastuu ja kilpailu resursseista 1920-luvulla, mikä vaikutti myös järjestelmän muotoutumiseen. Sisällissodan jälkeen lakkautettiin vastavallankumouksellista toimintaa vastaan kovin ottein taistellut erityiskomissio Tsheka. Sen tehtävät siirrettiin valtiolliselle poliittiselle hallinnolle (O)GPU, joka kilpaili resursseista yleisestä järjestyksestä vastanneiden ja  neuvostotasavalloissa toimineiden sisäasiainkansankomissariaattien (NKVD) kanssa. Vuonna 1934 nämä kilpailevat tahot yhdistettiin uudeksi valtakunnalliseksi sisäasiankansankomissariaatiksi, joka otti myös valtiollisen poliisin tehtävät itselleen.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Leirit sijaitsivat eri puolilla Neuvostoliittoa ja niiden toiminta vaihteli paljon. Yleensä ne olivat piikkilangoin rajattuja alueita, joilla sijaitsivat asumiseen käytettävät parakit sekä leirihallintoon liittyvät rakennukset. Leireillä oli yleensä myös ruokaloita ja sairastupia. Leireiltä lähdettiin vartioiden saattamina määrätyille paikoille työhön muun muassa kaivoksiin ja metsätyömaille. Leireille tuomittiin sellaiset henkilöt, joiden rikoksista oli mahdollista antaa yli kolmen vuoden vankeus- tai leirituomio. Koska neuvostoliittolainen rankaisupolitiikka katsoi valtiota vastaan tehdyt rikokset vaarallisemmaksi kuin niin sanotut tavalliset rikokset, oli leireille tuomittuina paljon ihmisiä, joiden rikoksia pidettiin poliittisina. Toisaalta leireille joutuivat myös ne henkilöt, jotka olivat tehneet neuvosto-oikeudenkin näkökulmasta ”tavallisia” vaarallisia rikoksia eli talousrikoksia sekä vakavia väkivaltarikoksia.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Ojennustyöleirien lisäksi Gulag-järjestelmään sisältyi erityisasutuskeskuksia ja siirtokuntia joiden asukkaat tekivät töitä OGPU/NKVD:n hallinnoimilla rakennus- ja metsätyömailla sekä maatiloilla. Nämä erityisasutukset olivat syntyneet kun Neuvostoliiton johtaja Josif Stalin aloitti varakkaita talonpoikia, eli kulakkeja vastaan käydyn kampanjan eli dekulakisaation vuonna 1929. Varakkaan talonpojan määritelmäksi riitti pienikin omaisuus ja sen seurauksena noin neljä miljoonaa ihmistä joutui erilaisten toimenpiteiden kohteiksi, muun muassa karkotukseen ja pakkotyöhön. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Turvallisuusviranomaisten eli aluksi OGPU:n ja sittemmin NKVD:n rooli Neuvostoliiton taloudessa kasvoi 1930-luvulla. Siitä tuli merkittävä työvoiman tarjoaja maan suurille työmaille, joita oli perustettu maan talouden ensimmäisen viisivuotiskauden (1928-1932) aikana. Niissä hakattiin metsää, valjastettiin jokia, tuotettiin sähköä ja rakennettiin raskasta teollisuutta.  Turvallisuusviranomaiset vuokrasivat niiden alaisuudessa olevaa pakkotyövoimaa eri ministeriöiden ja hallinnonalojen alla oleville tehtaille ja työmaille. Tämän järjestelyn piirissä olevien ihmisten palkoista vähennettiin turvallisuusviranomaisille tuloutettavat hallinnolliset kulut, mutta muutoin heidän elämänsä oli leirien ja erityisasutusten asukkaita vapaampaa.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag-järjestelmästä tuli monimuotoinen verkosto ja olennainen osa neuvostoyhteiskuntaa ja sen taloutta. Arviolta 18 miljoonaa ihmistä joutui Stalinin hallintokauden (1928-1953) aikana GULAG:in hallinnoimille leireille ja työmaille. Lisäksi 6-7 miljoonaa ihmistä karkotettiin kotiseuduiltaan. Suuret leirit, kuten esimerkiksi Mordvassa sijaitseva Temlag tai Kazahstanissa sijaitseva Karlag koostuivat useasta eri ojennustyöleiristä, työkolonioista ja erityisasutuksesta. Järjestelmän sisälle joutuneet ihmiset joutuivat myös tuomionsa aikana kokemaan monesti siirtoja leiriltä tai asutukselta toiselle.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Nykytutkimuksen myötä Gulag-järjestelmän ja ”vapaan” neuvostoyhteiskunnan rajoja on alettu pitämään yhä huokoisempina. Asumiseen liittyvät rajoitukset, työhön liittyvät velvoitteet sekä ravinnon niukkuus yhdistivät monia ihmisiä piikkilangan molemmin puolin. Lisäksi neuvostoyhteiskunnan propaganda sekä työteho ja -kurikampanjat vedettiin läpi myös turvallisuusviranomaisten valvomilla alueilla. Ihmiset, jotka olivat joutuneet järjestelmän piiriin ja selvinneet siitä, joutuivat usein jäämään töihin ja asumaan leirien ja erityisasutusten läheisyyteen kauas kotipaikoistaan. Monet saivat myös lisää tuomioita ja siirtoja uusille leireille. Yhtä lailla monien kohdalla leirituomio koitui kuolemaksi. Yli 1, 6 miljoonaa ihmistä kuoli leireillä ja yli miljoona ihmistä matkalla niille.</p>";

let sarov =
"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>GULAG</h3>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag oli järjestelmä, jonka nimi syntyi sitä hallinnoivasta virastosta. Neuvostoliiton sisäasiainkansankomissariaatin (NKVD) alainen leirihallinnon päävirasto (Glavnoje upravlenije lagerei, GULAG) oli rangaistuspaikkojen verkosto, joka sisälsi erilaisia keskitys-, karanteeni-, ojennus-, ja työleirejä, jotka sijaitsivat eri puolilla Neuvostoliittoa. Tunnetun venäläisen historiantutkijan Oleg Khlevniukin mukaan GULAG oli aikalaisille hallinnollinen lyhenne, joka vasta myöhemmin syntyi käsitteeksi ihmisten mieliin. Tämä tapahtui erityisesti Aleksandr Solzhenitsynin kautta, jonka vuonna 1973 ilmestynyt kirja Arhipelag GULAG (Vankileirien saaristo) kuvasi leirejä ja siellä olleiden ihmisten kohtaloita. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag-järjestelmä oli syntynyt Venäjän sisällissodan (1917-1921) aikaisten keskitysleirien pohjalle. Näille keskitysleireille suljettiin poliittisia vastustajia ja bolshevikkien vastavallankumoukselliseksi määrittelemiä ihmisiä. Gulag-järjestelmä perustui neuvostoliittolaiseen rankaisupolitiikkaan, jonka erityispiirteitä olivat a)rikoksen sovittaminen työllä ja b)hallinnollisten eli niin sanottujen oikeuden ulkopuolisten ihmisten vapautta rajoittavien rankaisukeinojen käyttö sekä c)karkotukset kauas pysyvästä asutuksesta sijaitseville paikoille. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Järjestelmään liittyi myös erilaisten toimijoiden vastuu ja kilpailu resursseista 1920-luvulla, mikä vaikutti myös järjestelmän muotoutumiseen. Sisällissodan jälkeen lakkautettiin vastavallankumouksellista toimintaa vastaan kovin ottein taistellut erityiskomissio Tsheka. Sen tehtävät siirrettiin valtiolliselle poliittiselle hallinnolle (O)GPU, joka kilpaili resursseista yleisestä järjestyksestä vastanneiden ja  neuvostotasavalloissa toimineiden sisäasiainkansankomissariaattien (NKVD) kanssa. Vuonna 1934 nämä kilpailevat tahot yhdistettiin uudeksi valtakunnalliseksi sisäasiankansankomissariaatiksi, joka otti myös valtiollisen poliisin tehtävät itselleen.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Leirit sijaitsivat eri puolilla Neuvostoliittoa ja niiden toiminta vaihteli paljon. Yleensä ne olivat piikkilangoin rajattuja alueita, joilla sijaitsivat asumiseen käytettävät parakit sekä leirihallintoon liittyvät rakennukset. Leireillä oli yleensä myös ruokaloita ja sairastupia. Leireiltä lähdettiin vartioiden saattamina määrätyille paikoille työhön muun muassa kaivoksiin ja metsätyömaille. Leireille tuomittiin sellaiset henkilöt, joiden rikoksista oli mahdollista antaa yli kolmen vuoden vankeus- tai leirituomio. Koska neuvostoliittolainen rankaisupolitiikka katsoi valtiota vastaan tehdyt rikokset vaarallisemmaksi kuin niin sanotut tavalliset rikokset, oli leireille tuomittuina paljon ihmisiä, joiden rikoksia pidettiin poliittisina. Toisaalta leireille joutuivat myös ne henkilöt, jotka olivat tehneet neuvosto-oikeudenkin näkökulmasta ”tavallisia” vaarallisia rikoksia eli talousrikoksia sekä vakavia väkivaltarikoksia.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Ojennustyöleirien lisäksi Gulag-järjestelmään sisältyi erityisasutuskeskuksia ja siirtokuntia joiden asukkaat tekivät töitä OGPU/NKVD:n hallinnoimilla rakennus- ja metsätyömailla sekä maatiloilla. Nämä erityisasutukset olivat syntyneet kun Neuvostoliiton johtaja Josif Stalin aloitti varakkaita talonpoikia, eli kulakkeja vastaan käydyn kampanjan eli dekulakisaation vuonna 1929. Varakkaan talonpojan määritelmäksi riitti pienikin omaisuus ja sen seurauksena noin neljä miljoonaa ihmistä joutui erilaisten toimenpiteiden kohteiksi, muun muassa karkotukseen ja pakkotyöhön. </p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Turvallisuusviranomaisten eli aluksi OGPU:n ja sittemmin NKVD:n rooli Neuvostoliiton taloudessa kasvoi 1930-luvulla. Siitä tuli merkittävä työvoiman tarjoaja maan suurille työmaille, joita oli perustettu maan talouden ensimmäisen viisivuotiskauden (1928-1932) aikana. Niissä hakattiin metsää, valjastettiin jokia, tuotettiin sähköä ja rakennettiin raskasta teollisuutta.  Turvallisuusviranomaiset vuokrasivat niiden alaisuudessa olevaa pakkotyövoimaa eri ministeriöiden ja hallinnonalojen alla oleville tehtaille ja työmaille. Tämän järjestelyn piirissä olevien ihmisten palkoista vähennettiin turvallisuusviranomaisille tuloutettavat hallinnolliset kulut, mutta muutoin heidän elämänsä oli leirien ja erityisasutusten asukkaita vapaampaa.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Gulag-järjestelmästä tuli monimuotoinen verkosto ja olennainen osa neuvostoyhteiskuntaa ja sen taloutta. Arviolta 18 miljoonaa ihmistä joutui Stalinin hallintokauden (1928-1953) aikana GULAG:in hallinnoimille leireille ja työmaille. Lisäksi 6-7 miljoonaa ihmistä karkotettiin kotiseuduiltaan. Suuret leirit, kuten esimerkiksi Mordvassa sijaitseva Temlag tai Kazahstanissa sijaitseva Karlag koostuivat useasta eri ojennustyöleiristä, työkolonioista ja erityisasutuksesta. Järjestelmän sisälle joutuneet ihmiset joutuivat myös tuomionsa aikana kokemaan monesti siirtoja leiriltä tai asutukselta toiselle.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Nykytutkimuksen myötä Gulag-järjestelmän ja ”vapaan” neuvostoyhteiskunnan rajoja on alettu pitämään yhä huokoisempina. Asumiseen liittyvät rajoitukset, työhön liittyvät velvoitteet sekä ravinnon niukkuus yhdistivät monia ihmisiä piikkilangan molemmin puolin. Lisäksi neuvostoyhteiskunnan propaganda sekä työteho ja -kurikampanjat vedettiin läpi myös turvallisuusviranomaisten valvomilla alueilla. Ihmiset, jotka olivat joutuneet järjestelmän piiriin ja selvinneet siitä, joutuivat usein jäämään töihin ja asumaan leirien ja erityisasutusten läheisyyteen kauas kotipaikoistaan. Monet saivat myös lisää tuomioita ja siirtoja uusille leireille. Yhtä lailla monien kohdalla leirituomio koitui kuolemaksi. Yli 1, 6 miljoonaa ihmistä kuoli leireillä ja yli miljoona ihmistä matkalla niille.</p>";

let kirjeet = 
"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>Kirjeet</h3>"+
/* 
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/magnitogorsk2.jpg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'>Magnitogorskin kaupunkia.</p>" + */
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suomesta sisällissodan jälkeen Neuvostoliiton puolelle muuttaneet ihmiset pitivät usein aktiivisesti yhteyttä sukulaisiinsa ja ystäviinsä. Koska suurin osa 1920-luvulla Neuvostoliittoon muuttaneista ihmisistä oli niin sanottuja punapakolaisia, oltiin Suomessa kiinnostuneita kirjeiden sisällöstä. Pelättiin, että kirjeiden välityksellä koordinoitaisiin Suomessa kielletyn ja Neuvostoliitosta käsin toimivan Suomen kommunistisen puolueen (SKP) toimintaa. Sen vuoksi Etsivän keskuspoliisi (EK) piti tarkkaa lukua paikkakunnilta mahdollisesti Neuvostoliittoon muuttaneista ihmisistä ja seurasi postiliikennettä Suomen ja Neuvostoliiton välillä.</p>"+
'<div class="chocolat-parent">'+"<p style='max-width:800px; margin-left:auto; margin-right:auto'>"+
'<a class="chocolat-image" href="images/kirjeet/kiertokirje1.jpg" title="Etsivän keskuspoliisin kiertokirje" data-srcset="images/kirjeet/kiertokirje1.jpg">'+
        '<img src="images/kirjeet/kiertokirje1_thumb.jpg" style = "max-width:200px;height:auto;padding:5px"/>'+
'</a>'+
'<a class="chocolat-image" href="images/kirjeet/kiertokirje2.jpg" title="Etsivän keskuspoliisin kiertokirje" data-srcset="images/kirjeet/kiertokirje2.jpg">'+
        '<img src="images/kirjeet/kiertokirje2_thumb.jpg" style = "max-width:200px;height:auto;padding:5px"/>'+
'</a>'+
"</p>"+
"</div>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Vuonna 1932 Etsivän keskuspoliisi sai virallisen määräyksen Valtioneuvostolta ”tarkastaa  Venäjälle menevät ja sieltä tulevat postilähetykset”. Neuvostoliitosta tulleet kirjeet tulivat Viipurin kautta, missä ne käsiteltiin ensimmäiseksi alaosastojen antamien ohjeiden mukaisesti. Kirjeitä kopioitiin ja lähetettiin eri puolille maata, mutta Sortavalan alaosasto säilytti Suojärvelle lähetyt kirjeet omassa kokoelmassaan. Kokoelma sisältää kopioita sekä alkuperäiskappaleita Suojärveltä Neuvostoliittoon lähteneiden ihmisten kirjeitä perheilleen, sukulaisilleen ja ystävilleen sekä muutamia näiden lähettämiä kirjeitä Neuvostoliittoon vuosilta 1932-1939.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Kokoelma käsittää 1200 erilaista kopiota ja alkuperäistä kirjettä. Suurin osa kirjeistä on kopioitu kokonaisuudessa, mutta osassa kirjeistä EK:n virkailijat ovat tiivistäneet kirjeiden sisältöä. Toisinaan virkailijat ovat myös kommentoineet kirjeissä mainittuja henkilöitä ja asioita antamalla lisätietoja perhesuhteista tai kirjoittajien tai vastaanottajien taustoista. Suurin osa kirjeistä on lähetetty Suojärven Lietteen Välikylään. Kirjeitä lähettivät sekä miehet että naiset omille sukulaisilleen, naapureille ja ystävilleen.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Osa kirjeistä on etupäässä Petroskoissa ja muualla Neuvosto-Karjalassa asuneiden ihmisten kirjeitä, joissa kerrotaan elämästä Neuvostoliitossa, perheen kuulumisia sekä kommentoidaan Suomen ja Neuvostoliiton poliittista tilannetta. Iso osa kirjeistä on lähetetty kuitenkin Neuvosto-Karjalassa ja Leningradin alueella sijainneilta rakennus- ja metsätyömailta, jonne laittomasti rajanylittäneet suojärveläiset sijoitettiin. Nämä laittomat rajanylittäjät eli loikkarit, tuomittiin pakkotyöhön valtiollisen poliisin OGPU:n ja sittemmin sisäasiankansankomissariaatin NKVD valvomille työmaille, jotka kuuluivat Gulag-järjestelmän piiriin.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suojärveläiset loikkarit saivat oikeuden lähettää kirjeitä Suomeen sen jälkeen, kun tutkintavankeus päättyi ja heidät oli sijoitettu suorittamaan rangaistustaan työmaille. Kirjeet näiltä työmailta, kuten esimerkiksi ”Puutoisista” (Pudosh) tai ”Virstroista” (Svirstroi), kertovat mielenkiintoista tarinaa siitä, kuinka ensikuukaudet uudessa maassa otettiin vastaan ja miten oma asema siellä käsitettiin.</p>"+ 
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suojärveläiset olivat hyvin perillä siitä, että kirjeitä luettiin rajan molemmin puolin. Gulag-järjestelmä, jonka piirissä loikkarit olivat, asetti rajoituksia kirjeiden kirjoittamiselle ja lähettämiselle. Kirjeoikeutta saatettiin rajata koskemaan vain lähiomaisia tai niiden määrää rajoitettiin. Rajoittamista tehosti se, että paikkakunnilla, joissa loikkarit olivat, oli lähes mahdotonta saada paperia, kirjekuoria ja postimerkkejä.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Kirjeitä myös sensuroitiin. Suomalaiset turvallisuusviranomaiset Neuvostoliitossa ja leireillä olevat puoluetyöntekijät lukivat kirjeitä ja sensuroivat niitä kohtia, mitä pitivät haitallisena tietona Neuvostoliitosta. Etsivän keskuspoliisi Suomessa luki myös kirjeet ja saattoi kuulustella kirjeen vastaanottajia. Loikkarit joutuivat monesti ristiriitaiseen tilanteeseen. Jos halusi varmistaa, että kirje läpäisi Neuvostoliiton puolella sensuurin, oli vältettävä kritiikkiä maata kohtaan. Jos halusi varmistaa, ettei vastaanottaja joutuisi Suomessa hankaluuksiin, piti välttää Neuvostoliiton ja olojen positiivista kuvaamista. Moni suojärveläinen päätyi lopulta taiteilemaan kielen ja ilmaisun kanssa, toiset taas päättivät kirjoittaa asioistaan sellaisina kuin he kokivat ja näkivät ne.</p>";

let ensikosketus =
"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>Ensikosketus Neuvostoliittoon</h3>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Kun loikkarit ylittivät Suomen ja Neuvostoliiton rajan, he pyrkivät he löytämään asutusta ja viranomaiset, joille ilmoittautua. Neuvostoliiton rajoja vartioivat rajajoukot, jotka kuuluivat vuoteen 1934 asti turvallisuusviranomaisten OGPU:n ja sen jälkeen NKVD:n alaisuuteen. Aluksi suojärveläisiä loikkareita pidettiin saapumispaikasta riippuen paikallisilla pidätysasemilla, jossa tehtiin ensimmäiset kuulustelut. Tämän jälkeen loikkarit kerättiin suuremmaksi joukoksi ennen kuin heidät vietiin tutkintovankeuteen Petroskoissa sijaitsevaan vankilaan ja sen täyttyessä myös Petroskoissa sijainneelle pidätysleirille.</p>"+ 
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Naisten ja lasten tutkintovankeus kesti yleensä vain joitakin päiviä, mutta miehiä pidettiin tutkintovankeudessa muutamista viikoista useisiin kuukausiin. OGPU pyrki selvittämään loikkareiden syitä rajanylitykseen ja seulomaan mahdolliset vakoojat joukosta pois. Kun aikaisemmin lähes kaikki ne rajaloikkarit, joilla ei ollut Neuvostoliiton puolelta lupaa saapua maahan, palautettiin takaisin Suomeen, toistaiseksi tuntemattomasta syystä näin ei enää menetelty vuodesta 1930-lähtien. Vaikka joitakin loikkareita palautettiin silti takaisin Suomeen, valtaosa sai luvan jäädä Neuvostoliiton puolelle. Petroskoi alkoi täyttyä rajan takaa loikanneista suojärveläisistä, jotka odottivat miestensä vapautumista tutkintovankeudesta.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Rajan ylittäminen ”salateitse” ilman passia tai lupaa saapua maahan oli kuitenkin rikos molemmin puolin rajaa. Suomessa laittomasta rajanylityksestä annettiin rikoslain 42. luvun toisen pykälän mukaisesti rangaistuksia aluksi sakkoja ja myöhemmin lyhyitä vankeusrangaistuksia. Ne, joilla ei ollut viisumia tai muuta viranomaisten lupaa saapua Neuvostoliittoon, saivat Neuvostoliitossa rangaistuksen luvattomasta rajanylityksestä Neuvostoliiton vuoden 1926 rikoslain pykälän 84 mukaan.  Tämän pykälän nojalla loikkarit tuomittiin poliittisen poliisin, OGPU:n valvomaan pakkotyöhön.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Pakkotyörangaistus tarkoitti sitä, että OGPU määräsi henkilölle asuin- ja työpaikan, jossa hänen tuli määräysten mukaisesti tehdä töitä kuutena päivänä viikossa. Työstä maksettiin palkkaa, mutta siitä vähennettiin asumiskustannukset ja ruoka, jonka määrä ja laatu oli sidottu työsuoritukseen. Rangaistukseen liittyi myös rajoituksia siitä, millä alueella ihmiset saivat vapaasti liikkua.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Kun tutkintovankeus oli suoritettu, loikkareita alettiin siirtää pakkotyöhön työmaille, jotka sijaitsivat eri puolilla Neuvosto-Karjalaa ja Leningradin aluetta. Moni suojärveläinen joutui metsätyömaille, jotka sijaitsivat Pudoshin alueella sekä rakennustyömaalle Leningradin alueella sijaitsevalle Syvärin voimalaitoksen rakennustyömaalle Svirstroille.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Koska suurin osa loikkareista ei puhunut venäjää, annettiin loikkareiden valvonta OGPU:n vartijoiden lisäksi isoilla työmailla Suomen kommunistisen puolueen (SKP) työntekijöille. Nämä järjestivät loikkareille töitä sekä vapaa-ajan ohjelmaa, mikä sisälsi sekä poliittista agitaatiota että kielikursseja ja muuta toimintaa. Isoimmilla työmailla oli myös järjestetty suomalaisille lapsille lastentarhoja ja kouluja.</p>";

let rajanylitys_teksti =
"<h3 style='max-width:700px; margin-left:auto; margin-right:auto'>Rajanylitys</h3>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suojärveläiset olivat tottuneet kulkemaan Suomen ja Venäjän välisen rajan yli, jota suojärveläisten kotiin lähettämissä kirjeissä kutsuttiin monesti" +'"viivaksi". Molempien maiden sisällissotien aikana rajan valvonta oli ongelmallista ja raja ylitettiin usein ilman asiakirjoja. Poliittiset pakolaiset molemmin puolin rajaa siirtyivät maasta toiseen ilman, että etukäteen saatua lupaa olisi hankittu. Suomesta sisällissodan aikana ja sen jälkeen siirtyi arviolta 15000 poliittista pakolaista Neuvostoliittoon.</p>'+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Olojen vakiinnuttua 1920-luvun puolesta välistä lähtien rajan valvonta tehostui. Viralliseen rajan ylitykseen Suomesta Neuvostoliittoon vaadittiin asiakirjoja, Suomen passia ja Neuvostoliiton lupaa saapua maahan, eli viisumia. Suomalaiset viranomaiset eivät kuitenkaan olleet innokkaita myöntämään passeja Neuvostoliittoon matkustaville, koska pelkäsivät Neuvostoliiton värväävän suomalaisia vakoilijoiksi ja vallankumouksen agitaattoreiksi. Neuvosto-Venäjän maahantulopolitiikassa suhtauduttiin poliittisiin pakolaisiin aluksi varsin sallivasti. Laittomastikin maahan tulleet punapakolaiset saivat nopeasti oleskeluluvan.</p>"+
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Neuvostoliiton maahanmuuttopolitiikan kiristyessä 1920-luvun puolivälin jälkeen myös maahan saapumiseen alettiin vaatia lupaa. Tätä lupaa varten piti saada puoltokirje aluehallintoviranomaiselta tai työnantajalta, joka piti vahvistaa aluksi poliittisen poliisin (OGPU) ja sittemmin sisäasiainkomissariaatin toimesta. Nämä luvat saatuaan ulkomaalainen saattoi "+'"viseerata" passinsa konsulaatissa ja näin tulla virallisesti maahan. Tämä oli kuitenkin hidas prosessi, minkä vuoksi moni suomalainen Neuvostoliitosta luvan saatuaan pyrki rajan taakse ilman passia tai muita muodollisuuksia. Nämä ihmiset eivät kuitenkaan olleet Neuvostoliiton silmissä rajaloikkareita vaan poliittisia pakolaisia ja siirtolaisia. Sen sijaan niitä, jotka ylittivät rajan ilman Neuvostoliitosta saatua lupaa, kohdeltiin loikkareina ja taloudellisina pakolaisina, jotka saivat pakkotyötuomion Neuvostoliiton rikoslain mukaisesti laittomasta rajanylityksestä.</p>'+ 
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Suomen puolella laiton rajaylitys oli rikos, josta annettiin aluksi sakkorangaistuksia ja myöhemmin 1930-luvulla lyhyitä vankeusrangaistuksia. Etsivän keskuspoliisi seurasi laitonta rajaliikennettä ja sen alaosastot raportoivat kuukausittain laittomista rajanylityksistä. Vuodesta 1930 kiihtynyt laiton rajanylitys oli kiivaimmillaan 1932. Esimerkiksi Sortavalan alaosasto raportoi elokuussa 1932, että Suojärveltä oli elokuun aikana n 110 aikuista ja lasta mennyt Neuvosto-Venäjän puolelle. Touko-heinäkuun aikana rajan oli ylittänyt n. 150 paikkakuntalaista.   Sortavalan alaosasto arveli elokuussa 1932, että Suojärveltä olivat enimmät"+' "venäjänkuumeen" saaneet menneet jo rajan yli.  EK arveli toukokuussa 1933, että 1932-1933 vuodenvaihteessa luvattomasti Neuvosto-Venäjälle siirtyneiden lukumäärä oli noussut toiselle kymmenelle tuhannelle, mitä se piti huippuna, minkä jälkeen uusien loikkareiden määrä tulisi vähenemään.  Koska rajanylitys oli laiton, oli suomalaisten viranomaisten vaikea antaa täsmällistä tietoa loikkareista. Etsivän keskuspoliisi arvioi 1930-1934 laittomasti Suomen ja Neuvostoliiton rajan ylittäneiden ihmisten kokonaismääräksi 10 000-15 000 henkeä.</p>'+  
"<p style='max-width:700px; margin-left:auto; margin-right:auto'>Pohjois-Karjalan rajapitäjien kautta menivät myös monet muut muualta Suomesta saapuneet rajaloikkarit. Maarajan lisäksi raja ylitettiin myös vesiteitä käyttäen Salmen ja Impilahden pitäjistä. Laiton rajanylitys oli kausiluontoista ja oli vilkkaimmillaan maarajoilla loppukesän ja alkusyksyn aikaan, jolloin säät olivat vielä hyviä ja metsästä saattoi saada ravintoa. Laiton rajanylitys väheni talvikuukausina, jolloin ylittäminen oli lumen ja valvonnan vuoksi vaikeampaa. Kevättä kohti liikenne taas vilkastui. Esimerkiksi keväällä 1933 Sortavalan alaosasto raportoi rajaliikenteen jälleen vilkastuneen. Näistä suurin osa oli tullut rajakuntiin muualta Suomesta sillä EK:n mukaan: "+ '"Rajaseudulta ei monikaan enää halua Venäjälle mennä, mutta muualla maassa löytyy edelleen sellaisia, jotka eivät tiedä mitään Venäjän oloista tahi eivät usko mitä niistä on kerrottu."</p>'; 

let elama_pakkotyomaa =
"<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Elämää pakkotyömailla</h3>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Pakkotyöhön tuomitut loikkarit siirrettiin OGPU/NKVD:n toimesta erilaisille työmaille, jotka sijaitsivat eri puolilla Neuvosto-Karjalaa ja Leningradin aluetta. Olosuhteet työmailla vaihtelivat, riippuen niiden koosta ja missä ne sijaitsivat. Työmaiden lisäksi loikkarit tekivät töitä valtion tiloilla (sovhoz) ja kaivoksissa.</p>"+  
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Asuminen oli yleensä järjestetty parakkeihin, jotka suurimmillaan majoittivat noin 300 ihmistä. Parakit olivat jaetut useampaan huoneistoon, joihin majoitettiin yleensä 30-50 henkilöä. Poikamiehille oli usein varattu omat parakkinsa tai huoneensa ja perheille omat. Yksityisyyttä yritettiin lisätä erilaisin verhoin ja sermein. Parakkien yhteyteen pyrittiin myös järjestämään oma huone tai nurkkaus neuvostokasvatustyötä varten.</p>"+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Ravinnon sitominen työhön oli yksi pakkotyön keskeisiä piirteitä. Työ ja ruoka olivat normitettuja ja työnormien alittaminen tai ylittäminen vaikutti siihen, minkälaista ja kuinka paljon ruokaa sai. Ruoka oli ostettavissa kortilla tai haettavissa ruokaloista. Työnormien ylittäjät, niin sanotut iskurityöläiset saivat ostaa ruokaa enemmän ja saivat enemmän ja parempilaatuista ravintoa ruokaloissa. Vastaavasti ne, jotka alittivat norminsa, saivat ruokaa vähemmän.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Keskeinen ravinto oli ruisleipä, jonka päivittäinen gramma-annos vaihteli tilanteen ja työsuorituksen mukaan. Tämän lisäksi oli tarjolla veteen tehtyä keittoa, jossa oli usein kaalia tai pieniä määriä kalaa. Lisäksi oli tarjolla tattaripuuroa. Suomalaisten kaipaamaa maitoa oli niukasti ja tämä heijastui erityisesti lasten hyvinvointiin. Myös sokeria oli harvoin saatavilla. Suomalaiset haaveilivat kahvista ja pullasta, joita ei juurikaan ollut tarjolla. Isoimmilla työmailla oli omat leirikauppansa, josta saattoi ostaa myös elintarvikkeita ja siten täydentää omaa päivittäistä ravintoannosta.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Loikkareiden jokapäiväistä arkea varjosti jatkuva tavaroiden puute. Puutetta oli etenkin villa- ja alusvaatteista sekä kengistä. Niillä loikkareilla, jotka saivat rahaa Suomesta, oli mahdollisuus ostaa suuremmilla paikkakunnilla valuuttamyymälöistä tarvitsemiansa tuotteita  Mustanpörssin kauppa, joka kukoisti Neuvostoliitossa, ulotti lonkeronsa myös kaukaisemmille suomalaisten asuttamille alueille. Alueen toreilla saattoi ostaa ja myydä elintarvikkeita ja tavaroita, joita ei muutoin ollut saatavilla.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Pakkotyö oli Neuvostoliitossa samoin kuin niin sanottu tavallinen työ työlainsäädännön piirissä. Pakkotyössä olevat ihmiset saivat palkkaa, josta vähennettiin asuminen ja ruokailu. Loikkareilla ei usein ollut juurikaan rahaa mukanaan, kun he ylittivät rajan ja se määrä mikä oli saatu mukaan, takavarikoitiin usein kuulusteluissa ja tutkintovankeuden aikana. Niinpä useimmat joutuivat tukeutumaan palkkaennakkoon työmaalle saapuessaan. Tämä ennakko vähennettiin heidän ensimmäisestä palkastaan, josta kaikkien vähennysten jälkeen ei juurikaan jäänyt paljoa jäljelle. Niinpä monet joutuivat jatkuvaan velkakierteeseen.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Työtä tehtiin viisi päivää, jonka jälkeen oli yksi lepopäivä. Pakkotyölaki määräsi myös lomat ja muut ”oikeudet”. Käytännössä töitä tehtiin paljon enemmän, sillä työntekijät velvoitettiin talkootöihin, joita pidettiin työpäivän päätteeksi. Lisäksi työnormit oli laadittu niin korkeiksi, että niiden saavuttaminen raskaissa ulkotöissä vaati hyväkuntoiseltakin suuria ponnistuksia. Kun normeja saavutettiin, niitä myös korotettiin lisää.</p>"+ 
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Lapset, jotka loikkasivat vanhempiensa mukana tai syntyivät Neuvostoliitossa, olivat myös neuvostohallinnon piirissä. Suurimmilla työmailla, kuten esimerkiksi Svirstroilla, Magnitostroilla ja Stankostroilla oli pienille lapsille seimi ja isommille koulu, jossa tarjottiin suomenkielistä opetusta. Lasten olot olivat kuitenkin karut, sillä vaatteita ja ruokaa ei ollut riittävästi. Lisäksi ahtaissa tiloissa taudit levisivät ja lapsikuolleisuus oli suuri. Moni lapsi joutui myös lastenkotiin, jossa puhuttiin ainoastaan venäjän kieltä.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>Loikkareiden odotusten ja neuvostotodellisuuden välinen ero oli suuri. Kuten omille kansalaisilleen niin myös loikkareille Neuvostoliitto pyrki selittämään tätä odotusten ja todellisuuden välistä ristiriitaa poliittisen kasvatuksen avulla. Yleensä poliittista työtä ja kasvatusta toteutti leireillä ja työmailla OGPU/NKVD oma, tätä työtä varten perustettu osasto, mutta koska suurin osa loikkareista ei osannut venäjän kieltä, tehtävä annettiin Neuvostoliitossa toimineelle Suomen kommunistiselle puolueelle.</p>"+
"<p style='max-width:600px; margin-left:auto; margin-right:auto'>SKP:n puoluetyöntekijät tarttuivatkin lujasti toimeen ja täyttivät loikkareiden vähäisen vapaa-ajan luennoilla, kielen opiskelulla ja opintopiireillä. He järjestivät kuitenkin myös muuta vapaa-ajan toimintaa, kuten liikuntaa, näytelmiä ja tansseja, jotka olivat poliittista opiskelua suositumpia vapaa-ajan vieton muotoja. Monet loikkarit ja etenkin nuoret miehet, joille olot Neuvostoliitossa olivat pettymys, purkivat turhautumistaan alkoholiin, jota oli helposti saatavilla.</p>";




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
      chapterDiv: loikkarit_ilmio,
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
      id: "kamensk",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      subhidden: false,
      subcontentDiv: subcontent1,
      location: {
        center: [61.91977, 56.39993],
        zoom: 5,
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
      id: "elama",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: elama_pakkotyomaa,
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