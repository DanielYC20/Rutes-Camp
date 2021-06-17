# Rutes del Camp
Benvingut a la meva primera pàgina web creada des de zero utilitzant el llenguatge HTML, CSS i JS.

## Objectius del Treball
Per tal de dur a terme aquesta pàgina web vaig establir una sèrie d'objectius a complir durant l'activitat:

  1. Aprendre a fer servir els llenguatges HTML, CSS i JS
  2. Elaborar i introduir cartografia mitjançant la pàgina de LeafLet
  3. Cercar una API i vincular-la amb la pàgina web
  4. Introduir cartografia elaborada mitjançant QGIS dintre de la pàgina web
  5. Conèixer noves eines de software com el GIT, GITHUB i GITCola 
  
## Temàtica de la web
Aquesta web és fruit bàsicament de la meva confusió i cacau mental a l’hora de decidir una temàtica que m’agradés i que pogués donar joc en quan a cartografia, explicacions i dinamisme. Realment em van passar pel cap altres idees com fer una web amb els principals miradors de la zona, o rutes a peu pel Montsant, també se’m va passar pel cap l’opció d’intentar lligar el meu hobby de la fotografia amb algun tipus de pàgina web però finalment el que vaig fer va ser una fusió de totes aquestes idees donant fruit al producte que tens davant dels teus ulls ara. Aquesta web és el resultat de la fusió per la meva passió de cara a l’esport, la fotografia i l’admiració que tinc quan es tracta de contemplar els paisatges que m’envolten.
  
## Fonts d'informació
Les dades obtingudes per a completar la pàgina web pdriem dir que la majoria son de collita pròpia, tant els tracks, com les imatges i per descomptat la descripció dels textos. No obstant això si que és cert que s'han utilitzat pàgines externes com podrien ser:
  1. Descàrrega dels tracks [Strava](https://www.strava.com/dashboard#).
  2. Widget del temps [eltiempo.es](https://ca.eltiempo.es/widget).
  3. Llibreria del [Leaflet](https://leafletjs.com/).

## Metodologia de la web

### Pàgina d’inici: “Inici.html”
Per començar a desenvolupar aquesta pàgina el primer que es va fer va ser crear un arxiu en format HTML. Dins d’aquest es va començar a fer la construcció de l’encapçalament; el header. Un cop feta l’estructura bàsica es va prosseguir a muntar el body amb els elements principals com els títols, paràgrafs i el peu de pàgina. Finalment es va vincular aquesta informació amb un altre arxiu que conté el CSS que li atorga l’aspecte actual. Del CSS se’n parlarà per separat tot lligant-ho per parts a les diferents seccions o elements que configuren l’HTML. 

La configuració de la pagina de benvinguda, l’inici, consta d’un encapçalament o header, comú a tota la resta d’apartats, que ens permet navegar per dins de la pàgina web amb facilitat i agilitat. Aquest ocupa d’ample a ample tota la superfície més que res per qüestions estètiques i compta amb un total de 5 botons. També conté el logotip que està vinculat de tal manera que si ens trobem dins d’algun dels altres apartat de la pàgina puguem tornar fàcilment a l’inici fent-hi un clic. Al costat del logotip hi trobem el títol de la pàgina web. Tot això està vinculat de manera que quan l’usuari baixi cap a la zona inferior de cadascun dels apartat els header s’amagui fent una petita animació.

Pel que fa al cos de la pàgina d’inici, aquest està constituït per una secció on s’hi emmarquen els dos títols que veiem, de diferent estil cadascun per qüestions d’importància, i un parell de paràgrafs amb text explicatiu introductori a la temàtica que s’hi tracta. 

Per últim hi podem veure el footer, que és comú a tots els apartats, on s’hi recopila informació del copyright i també hi ha tres botons interactius amb animacions que redirigeixen a l’usuari a les xarxes socials que hi ha dibuixades.

### Elements principals del CSS:
El CSS que forma el header de la pàgina web lògicament es va configurar un cop es va tenir estructurada la part HTML. Després de fer diversos canvis i proves la part final que hi influeix és la observable a la imatge. Cadascuna de les parts s’encarrega de controlar una part diferent del header. Tant els marges, animacions, tipus de lletra i els colors que hi apareixen. 

Pel que fa al que configura l’estil del peu de pàgina aquest es centra en donar estil als botons que podem veure i que ens redirigeixen a les xarxes socials. També hi ha un parell d’opcions generals que son bàsicament per donar estil al text del copyright. 

Els títols s’han establert seguint estils comuns però amb petites variacions en la tipologia de lletra per fer que alguns siguin més vistosos o doni la impressió de què tenen més rellevància. Hi trobem des de la mida de la lletra, el tipus (majúscules o no), el pes que tenen, marges i el color. En aquest cas, al llarg de la pàgina no s’ha optat per un negre fort sinó que més aviat s’ha tirat cap a una gamma de grisos. Precisament per separar visualment cadascun dels elements i fer-ho més atractiu.

Referent a les columnes, aquestes tenen la funció d’agrupar diferents informacions o seccions una al costat de l’altre. Serveixen per configurar l’espai que ocuparan, tant alçada com amplada, la posició i el marge. En el cas de la web hi ha quatre estils diferents de columnes repartits en dues pestanyes diferents; la de bicicleta i la de contacta.

### Pàgina En Bicicleta: “Bicicleta.html”
Aquesta pàgina d’entrada s’estructura igual que la pàgina d’inici, amb dos títols diferents amb els seus corresponents paràgrafs que donen informació sobre el contingut del qual tracta la pestanya, en aquest cas les rutes en bicicleta. No obstant això si que trobem una variació en l’estil més avall, on s’hi presenta un mapa interactiu amb el track i una petita galeria d’imatges al costat que mostra fotografies fetes durant la ruta. Això està fet mitjançant les columnes establertes al CSS. Tant el header com el footer son exactament iguals.

### Pàgina A Peu: “Peu.html”
D’entrada és exactament igual en quant a format i característiques dels elements però en aquest cas adaptat a la temàtica de les rutes a peu. És precisament més avall, on hi apareix el track, que varia la distribució respecte la pàgina de la bicicleta.

Aquí s’ha incorporat un mapa interactiu realitzat en QGIS on s’hi mostra en diferents capes el recorregut de la ruta, les imatges en icones i popups desplegables i finalment la fotografia satèl·lit que complementa tota aquesta informació. A sota del mapa s’hi ha inserit una fotografia del tall vertical del track per tal de donar una visió més completa de les característiques del recorregut al llarg de cada quilòmetre. La pàgina de en bicicleta i la de a peu son diferents precisament per experimentar amb el màxim de distribucions i combinacions possibles i així cobrir més terreny en quant a opcions per programar. 

### Pàgina El Temps: “Temps.html”
Aquí ho trobem una pàgina força senzilla on s’hi recullen les previsions del temps per a diferents localitats seleccionades. En aquest cas aquí hi hauria d’anar una API però no he estat capaç d’implementar les que he trobat. Volia que fossin relacionades amb la temàtica de la meteorologia però les que he trobat han estat molt engorroses i no me n’he sortit a l’hora de vincular-les. És per això que optat per vincular aquests widgets sobre la previsió del temps. Se que no substitueixen ni de bon tros una API però també donen informació vàlida i útil. 

### Pàgina de Contacte: “Contacta.html”
Aquesta és una secció on he simulat una mica el que seria un exemple de formulari per als usuaris contactar amb mi d’alguna manera. Compta amb els apartats bàsics d’informació de l’usuari i també un desplegable per situar la província des d’on s’envia el missatge. He triat la província com podria haver triat alguna altre temàtica però en el seu moment vaig creure que aquesta opció seria interessant de tenir. També he volgut afegir un mapa de la llibreria Leaflet per provar com funciona tot el tema dels mapes, els punters de localització i popups amb informació. La distribució de la pàgina s’ha configurat amb columnes, donant més pes a la del mapa que a la del formulari bàsicament per qüestions visuals o estètiques.

## Conclusions del treball i diverses coses a millorar de la web
D'entrada he de reconèixer que per mi, en l'àmbit personal, ha estat un repte fer aquesta pàgina web perquè sincerament no m'esperava que durant aquest curs acabaria fent tal cosa. Ho he trobat força complex, ja que fins que no t'acostumes al llenguatge i la seva estructura costa bastant d'entendre. Tot i les dificultats, les llargues tardes i matins intentant resoldre els problemes que m'anaven sorgint, a vegades amb més èxit i d'altres vegades molt frustrat, crec que me n'he pogut sortir mitjanament bé. Sóc plenament conscient que la pàgina web presenta alguns errors estructurals referents al responsive, però amb el temps i coneixements que he tingut ho he fet el millor que he sabut. M'hauria agradat aconseguir introduir una API del temps que feia molt bona pinta, però no me'n vaig sortir i sóc conscient que penalitzarà, però bé com a mínim sé que no vaig intentar insistidament. En general valoro el treball com una experiència positiva, ja que, encara que només hagi rascat la superfície, crec que he entès una mica com funcionen les pàgines web que fem servir a diari.
