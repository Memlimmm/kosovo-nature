document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
    
    // Translations object
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-biodiversity": "Biodiversity",
            "nav-landscapes": "Landscapes",
            "nav-conservation": "Conservation",
            "nav-about": "About",
            "home": "Home",
            "biodiversity": "Biodiversity",
            "landscapes": "Landscapes",
            "conservation": "Conservation",
            "about": "About",

            // Hero titles
            "hero-home": "Kosovo's Nature",
            "hero-biodiversity": "Kosovo's Biodiversity",
            "hero-landscapes": "Kosovo's Landscapes",
            "hero-conservation": "Kosovo's Conservation",
            "hero-about": "About Our Project",

            // Section titles
            "biodiversity-title": "Biodiversity",
            "flora-title": "Flora",
            "fauna-title": "Fauna",
            "ecosystems-title": "Ecosystems",
            "landscapes-title": "Natural Landscapes",
            "mountains-title": "Mountains",
            "waterfalls-title": "Waterfalls",
            "caves-title": "Caves",
            "conservation-title": "Conservation Efforts",
            "protected-areas-title": "Protected Areas",
            "sustainable-tourism-title": "Sustainable Tourism",
            "future-challenges-title": "Future Challenges",

            // Descriptions
            "flora-description": "Kosovo hosts over 2,500 species of vascular plants, with many endemic species found in the Sharr Mountains and Bjeshkët e Nemuna ranges. The country's diverse habitats support a rich variety of plant life, from alpine meadows to Mediterranean flora.",
            "fauna-description": "The region is home to numerous wildlife species, including the endangered Balkan Lynx, Brown Bears, Wolves, and various species of eagles. The mountains provide crucial habitats for many rare and protected animal species.",
            "ecosystems-description": "From alpine ecosystems in the high mountains to river valleys and forests, Kosovo's varied landscapes support diverse ecological communities and provide important corridors for wildlife movement.",
            "mountains-description": "The Sharr Mountains and Bjeshkët e Nemuna dominate Kosovo's landscape, offering breathtaking views and opportunities for hiking, skiing, and mountain climbing. These ranges feature dramatic peaks, alpine lakes, and pristine wilderness.",
            "waterfalls-description": "The Mirusha Waterfalls create a spectacular series of 13 lakes and waterfalls, while the White Drin Waterfall offers another magnificent natural attraction. These water features provide important habitats and recreational opportunities.",
            "caves-description": "The Gadime Cave, known for its unique aragonite crystals and marble formations, represents one of Kosovo's most fascinating geological features. The cave system extends for several kilometers underground.",
            "protected-areas-description": "Kosovo has established several national parks and protected areas to preserve its natural heritage, including Sharr Mountains National Park and Bjeshkët e Nemuna National Park.",
            "sustainable-tourism-description": "Efforts are being made to develop sustainable tourism practices that allow visitors to experience Kosovo's natural wonders while minimizing environmental impact.",
            "future-challenges-description": "Kosovo faces ongoing challenges in balancing development with environmental protection, requiring continued commitment to conservation and sustainable practices.",

            // Biodiversity Page
            "hero-biodiversity": "Kosovo's Biodiversity",
            
            // Flora Section
            "flora-section": "Flora",
            "mountain-flora": "Mountain Flora",
            "mountain-flora-desc": "Diverse alpine plants thriving in Kosovo's mountainous regions.",
            "forest-flora": "Forest Flora",
            "forest-flora-desc": "Rich variety of trees and plants in Kosovo's forests.",
            "meadow-flora": "Meadow Flora",
            "meadow-flora-desc": "Colorful wildflowers and grasses in Kosovo's meadows.",
            "alpine-flowers": "Alpine Flowers",
            "alpine-flowers-desc": "Colorful blooms adorning Kosovo's high-altitude meadows.",
            "endemic-plants": "Endemic Plants",
            "endemic-plants-desc": "Unique plant species found only in Kosovo's diverse ecosystems.",
            "medicinal-plants": "Medicinal Plants",
            "medicinal-plants-desc": "Traditional healing plants from Kosovo's mountains.",
            "see-more-flora": "See More Flora",

            // Wildlife Section
            "wildlife-section": "Wildlife",
            "eagles": "Eagles",
            "eagles-desc": "Majestic birds of prey soaring through Kosovo's skies.",
            "brown-bears": "Brown Bears",
            "brown-bears-desc": "Powerful mammals inhabiting Kosovo's mountain forests.",
            "wolves": "Wolves",
            "wolves-desc": "Pack hunters maintaining balance in Kosovo's ecosystems.",
            "balkan-lynx": "Balkan Lynx",
            "balkan-lynx-desc": "One of Europe's rarest wild cats, native to Kosovo's mountains.",
            "horseshoe-bat": "Horseshoe Bat",
            "horseshoe-bat-desc": "Nocturnal mammals inhabiting Kosovo's caves.",
            "chamois": "Chamois",
            "chamois-desc": "Agile mountain goats navigating Kosovo's steep terrain.",
            "see-more-wildlife": "See More Wildlife",

            // Insects & Small Animals Section
            "insects-section": "Insects & Small Animals",
            "butterflies": "Butterflies",
            "butterflies-desc": "Colorful pollinators enriching Kosovo's biodiversity.",
            "red-foxes": "Red Foxes",
            "red-foxes-desc": "Clever hunters adapting to various habitats.",
            "squirrels": "Squirrels",
            "squirrels-desc": "Agile forest dwellers contributing to seed dispersal.",
            "swallowtail-butterfly": "Swallowtail Butterfly",
            "swallowtail-butterfly-desc": "Beautiful butterflies found in Kosovo's meadows.",
            "endemic-caddisfly": "Endemic Caddisfly",
            "endemic-caddisfly-desc": "Unique aquatic insects in Kosovo's streams.",
            "ground-beetle": "Ground Beetle",
            "ground-beetle-desc": "Important predatory insects in Kosovo's forests.",
            "see-more-insects": "See More Insects & Animals",

            // Theme customizer
            "theme-mode": "Theme Mode",
            "dark-mode": "Dark Mode",
            "color-theme": "Color Theme",
            "custom-color": "Custom Color",
            "border-radius": "Border Radius",

            // Landscapes Page
            "hero-landscapes": "Kosovo's Landscapes",

            // Mountains Section
            "mountains-section": "Mountains",
            "sharr-mountains": "Sharr Mountains",
            "sharr-mountains-desc": "The Sharr Mountains offer breathtaking views and diverse hiking trails, with peaks reaching over 2,500 meters in height.",
            "bjeshket-nemuna": "Bjeshkët e Nemuna",
            "bjeshket-nemuna-desc": "Known as the Albanian Alps, these mountains feature dramatic limestone peaks and pristine alpine lakes.",
            "winter-sports": "Winter Sports",
            "winter-sports-desc": "Kosovo's mountains provide excellent opportunities for skiing and other winter sports activities.",
            "gjeravica-peak": "Gjeravica Peak",
            "gjeravica-peak-desc": "Kosovo's highest peak offering breathtaking panoramic views.",
            "rugova-mountains": "Rugova Mountains",
            "rugova-mountains-desc": "Dramatic cliffs and deep valleys in western Kosovo.",
            "kopaonik-mountains": "Kopaonik Mountains",
            "kopaonik-mountains-desc": "Beautiful mountain range with rich mineral deposits.",
            "see-more-mountains": "See More Mountains",

            // Water Features Section
            "water-features-section": "Water Features",
            "mirusha-waterfalls": "Mirusha Waterfalls",
            "mirusha-waterfalls-desc": "A spectacular series of 13 lakes and waterfalls, creating one of Kosovo's most beautiful natural attractions.",
            "white-drin": "White Drin Waterfall",
            "white-drin-desc": "The impressive White Drin Waterfall is one of Kosovo's most visited natural landmarks.",
            "alpine-lakes": "Alpine Lakes",
            "alpine-lakes-desc": "Numerous pristine alpine lakes dot the mountain landscape, providing crucial freshwater resources.",
            "mirusha-falls": "Mirusha Falls",
            "mirusha-falls-desc": "Series of beautiful waterfalls and pools in central Kosovo.",
            "gazivoda-lake": "Gazivoda Lake",
            "gazivoda-lake-desc": "Large artificial lake with stunning mountain backdrop.",
            "lumbardhi-river": "Lumbardhi River",
            "lumbardhi-river-desc": "Crystal clear mountain river flowing through Prizren.",
            "see-more-water": "See More Water Features",

            // Caves Section
            "caves-section": "Caves and Canyons",
            "gadime-cave": "Gadime Cave",
            "gadime-cave-desc": "Famous for its unique aragonite crystals and marble formations, extending several kilometers underground.",
            "rugova-canyon": "Rugova Canyon",
            "rugova-canyon-desc": "One of the deepest and most impressive canyons in Europe, offering spectacular views and climbing opportunities.",
            "marble-cave": "Marble Cave",
            "marble-cave-desc": "A natural wonder featuring stunning marble formations and underground streams.",
            "radavc-cave": "Radavc Cave",
            "radavc-cave-desc": "Ancient cave system with impressive stalactites and stalagmites.",
            "peja-cave": "Peja Cave",
            "peja-cave-desc": "Historic cave with archaeological significance.",
            "see-more-caves": "See More Caves",

            // Conservation Page
            "hero-conservation": "Kosovo's Conservation",

            // Protected Areas Section
            "protected-areas-section": "Protected Areas",
            "nature-reserves": "Nature Reserves",
            "nature-reserves-desc": "Protected zones preserving Kosovo's unique biodiversity.",
            "national-parks": "National Parks",
            "national-parks-desc": "Vast protected landscapes showcasing Kosovo's natural heritage.",
            "wildlife-sanctuaries": "Wildlife Sanctuaries",
            "wildlife-sanctuaries-desc": "Safe havens for endangered species and wildlife.",
            "sharr-park": "Sharr Mountains Park",
            "sharr-park-desc": "One of Kosovo's largest protected areas with diverse ecosystems.",
            "bjeshket-park": "Bjeshkët e Nemuna",
            "bjeshket-park-desc": "Protected mountain range with unique flora and fauna.",
            "germia-park": "Germia Park",
            "germia-park-desc": "Urban nature reserve protecting local biodiversity.",
            "see-more-protected": "See More Protected Areas",

            // Conservation Initiatives Section
            "initiatives-section": "Conservation Initiatives",
            "species-protection": "Species Protection",
            "species-protection-desc": "Programs dedicated to protecting endangered species.",
            "habitat-restoration": "Habitat Restoration",
            "habitat-restoration-desc": "Projects focused on restoring damaged ecosystems.",
            "sustainable-tourism": "Sustainable Tourism",
            "sustainable-tourism-desc": "Eco-friendly tourism practices protecting natural areas.",
            "wolf-conservation": "Wolf Conservation",
            "wolf-conservation-desc": "Programs to protect and monitor wolf populations.",
            "water-protection": "Water Protection",
            "water-protection-desc": "Initiatives to preserve water resources and aquatic life.",
            "research-programs": "Research Programs",
            "research-programs-desc": "Scientific studies supporting conservation efforts.",
            "see-more-initiatives": "See More Initiatives",

            // About Page
            "overview-section": "Project Overview",
            "our-mission": "Our Mission",
            "our-mission-desc": "To showcase and preserve Kosovo's natural wonders through digital storytelling and education, inspiring future generations to protect our environmental heritage.",
            "our-vision": "Our Vision",
            "our-vision-desc": "Creating awareness about Kosovo's biodiversity, landscapes, and conservation efforts while promoting sustainable tourism and environmental protection.",
            "our-values": "Our Values",
            "our-values-desc": "Commitment to environmental education, scientific accuracy, and the celebration of Kosovo's natural beauty through modern web technology.",

            // Team Section
            "team-section": "Our Team",
            "school-name": "Fan S. Noli Podujeve",
            "school-project": "School Project",
            "team-members": "Made by students of Fan S. Noli Podujeve: Memli Aliu & Aldin Berisha",

            // Features Section
            "features-section": "Website Features",
            "theme-customization": "Theme Customization",
            "theme-customization-desc": "Personalize your viewing experience with custom colors and dark mode.",
            "interactive-galleries": "Interactive Galleries",
            "interactive-galleries-desc": "Explore high-quality images with fullscreen viewing capability.",
            "responsive-design": "Responsive Design",
            "responsive-design-desc": "Optimized for all devices and screen sizes.",
            "animated-elements": "Animated Elements",
            "animated-elements-desc": "Smooth animations and transitions for enhanced user experience.",
            "show-more": "Show More",
            "show-less": "Show Less",
            "see-on-maps": "See on Google Maps",

            // See More/Less buttons
            "see-more": "See More",
            "see-less": "See Less",
            "see-more-flora": "See More Flora",
            "see-more-wildlife": "See More Wildlife",
            "see-more-insects": "See More Insects & Animals",
            "see-more-mountains": "See More Mountains",
            "see-more-water": "See More Water Features",
            "see-more-caves": "See More Caves",
            "see-more-protected": "See More Protected Areas",
            "see-more-initiatives": "See More Initiatives"
        },
        sq: {
            // Navigation
            "nav-home": "Ballina",
            "nav-biodiversity": "Biodiversiteti",
            "nav-landscapes": "Peizazhet",
            "nav-conservation": "Ruajtja",
            "nav-about": "Rreth Nesh",
            "home": "Ballina",
            "biodiversity": "Biodiversiteti",
            "landscapes": "Peizazhet",
            "conservation": "Ruajtja",
            "about": "Rreth Nesh",

            // Hero titles
            "hero-home": "Natyra e Kosovës",
            "hero-biodiversity": "Biodiversiteti i Kosovës",
            "hero-landscapes": "Peizazhet e Kosovës",
            "hero-conservation": "Konservimi i Kosovës",
            "hero-about": "Rreth Projektit Tonë",

            // Section titles
            "biodiversity-title": "Biodiversiteti",
            "flora-title": "Flora",
            "fauna-title": "Fauna",
            "ecosystems-title": "Ekosistemet",
            "landscapes-title": "Peizazhet Natyrore",
            "mountains-title": "Malet",
            "waterfalls-title": "Ujëvarat",
            "caves-title": "Shpellat",
            "conservation-title": "Përpjekjet e Konservimit",
            "protected-areas-title": "Zonat e Mbrojtura",
            "sustainable-tourism-title": "Turizmi i Qëndrueshëm",
            "future-challenges-title": "Sfidat e Ardhshme",

            // Descriptions
            "flora-description": "Kosova strehon mbi 2,500 lloje të bimëve vaskulare, me shumë lloje endemike që gjenden në Malet e Sharrit dhe vargmalet e Bjeshkëve të Nemuna. Habitatet e ndryshme të vendit mbështesin një larmi të pasur të jetës bimore.",
            "fauna-description": "Rajoni është shtëpi e shumë llojeve të kafshëve të egra, përfshirë Rrëqebullin e Ballkanit të rrezikuar, Ariun Murm, Ujqit dhe lloje të ndryshme të shqiponjave.",
            "ecosystems-description": "Nga ekosistemet alpine në malet e larta deri te luginat e lumenjve dhe pyjet, peizazhet e ndryshme të Kosovës mbështesin komunitete të ndryshme ekologjike dhe ofrojnë korridore të rëndësishme për lëvizjen e kafshëve të egra.",
            "mountains-description": "Malet e Sharrit dhe Bjeshkët e Nemuna dominojnë peizazhin e Kosovës, duke ofruar pamje mahnitëse dhe mundësi për hiking, ski dhe alpinizëm. Këto vargmale karakterizohen nga maja dramatike, liqene alpine dhe natyrë të paprekur.",
            "waterfalls-description": "Ujëvarat e Mirushës krijojnë një seri spektakolare prej 13 liqenesh dhe ujëvarash, duke krijuar një nga atraksionet më të bukura natyrore të Kosovës.",
            "caves-description": "Shpella e Gadimes, e njohur për kristalet e saj unike të aragonitit dhe formacionet e mermerit, përfaqëson një nga veçoritë më fascinuese gjeologjike të Kosovës.",
            "protected-areas-description": "Kosova ka themeluar disa parqe kombëtare dhe zona të mbrojtura për të ruajtur trashëgiminë e saj natyrore.",
            "sustainable-tourism-description": "Po bëhen përpjekje për të zhvilluar praktika të qëndrueshme të turizmit që u lejojnë vizitorëve të përjetojnë mrekullitë natyrore të Kosovës.",
            "future-challenges-description": "Kosova përballet me sfida të vazhdueshme në balancimin e zhvillimit me mbrojtjen e mjedisit.",

            // Biodiversity Page
            "hero-biodiversity": "Biodiversiteti i Kosovës",
            
            // Flora Section
            "flora-section": "Flora",
            "mountain-flora": "Flora Malore",
            "mountain-flora-desc": "Bimë të ndryshme alpine që lulëzojnë në rajonet malore të Kosovës.",
            "forest-flora": "Flora e Pyjeve",
            "forest-flora-desc": "Shumëllojshmëri e pasur e pemëve dhe bimëve në pyjet e Kosovës",
            "meadow-flora": "Flora e Livadheve",
            "meadow-flora-desc": "Lule të egra dhe bar në livadhet e Kosovës",
            "alpine-flowers": "Lulet Alpine",
            "alpine-flowers-desc": "Lule të bukura që zbukurojnë livadhet e larta të Kosovës",
            "endemic-plants": "Bimët Endemike",
            "endemic-plants-desc": "Lloje unike bimësh që gjenden vetëm në ekosistemet e Kosovës",
            "medicinal-plants": "Bimët Mjekësore",
            "medicinal-plants-desc": "Bimë tradicionale shëruese nga malet e Kosovës",
            "see-more-flora": "Shiko më shumë Flora",

            // Wildlife Section
            "wildlife-section": "Kafshët e Egra",
            "eagles": "Shqiponjat",
            "eagles-desc": "Zogj madhështorë grabitqarë që fluturojnë në qiejt e Kosovës.",
            "brown-bears": "Arinjtë e Murrmë",
            "brown-bears-desc": "Gjitarë të fuqishëm që banojnë në pyjet malore të Kosovës",
            "wolves": "Ujqit",
            "wolves-desc": "Gjuetarë në grup që ruajnë ekuilibrin në ekosistemet e Kosovës",
            "balkan-lynx": "Rrëqebulli i Ballkanit",
            "balkan-lynx-desc": "Një nga macet më të rralla të egra të Evropës, vendase në malet e Kosovës",
            "horseshoe-bat": "Lakuriq Nate Potkovë",
            "horseshoe-bat-desc": "Gjitarë nate që banojnë në shpellat e Kosovës",
            "chamois": "Dhia e Egër",
            "chamois-desc": "Dhi malore të shkathtë që lundrojnë në terrenin e pjerrët të Kosovës",
            "see-more-wildlife": "Shiko më shumë Kafshë të Egra",

            // Insects & Small Animals Section
            "insects-section": "Insektet & Kafshët e Vogla",
            "butterflies": "Flutura",
            "butterflies-desc": "Polenizues me ngjyra që pasurojnë biodiversitetin e Kosovës.",
            "red-foxes": "Dhelprat e Kuqe",
            "red-foxes-desc": "Gjuetarë të zgjuar që përshtaten në habitate të ndryshme",
            "squirrels": "Ketrat",
            "squirrels-desc": "Banorë të shpejtë të pyjeve që kontribuojnë në shpërndarjen e farërave",
            "swallowtail": "Flutura Bishtzogë",
            "swallowtail-desc": "Flutura të bukura që gjenden në livadhet e Kosovës",
            "caddisfly": "Mushkonja Endemike",
            "caddisfly-desc": "Insekte unike ujore në përrenjtë e Kosovës",
            "ground-beetle": "Brumbull i Tokës",
            "ground-beetle-desc": "Insekte të rëndësishme grabitqare në pyjet e Kosovës",
            "see-more-insects": "Shiko më shumë Insekte & Kafshë",

            // Theme customizer
            "theme-mode": "Modaliteti i Temës",
            "dark-mode": "Modaliteti i Errët",
            "color-theme": "Ngjyra e Temës",
            "custom-color": "Ngjyrë e Personalizuar",
            "border-radius": "Rrezja e Kufirit",

            // Landscapes Page
            "hero-landscapes": "Peizazhet e Kosovës",

            // Mountains Section
            "mountains-section": "Malet",
            "sharr-mountains": "Malet e Sharrit",
            "sharr-mountains-desc": "Malet e Sharrit ofrojnë pamje mahnitëse dhe shtigje të ndryshme për hiking, me maja që arrijnë mbi 2,500 metra lartësi.",
            "bjeshket-nemuna": "Bjeshkët e Nemuna",
            "bjeshket-nemuna-desc": "Të njohura si Alpet Shqiptare, këto male karakterizohen nga maja gëlqerore dramatike dhe liqene alpine të paprekura.",
            "winter-sports": "Sportet Dimërore",
            "winter-sports-desc": "Malet e Kosovës ofrojnë mundësi të shkëlqyera për ski dhe aktivitete të tjera dimërore.",
            "gjeravica-peak": "Maja e Gjeravicës",
            "gjeravica-peak-desc": "Maja më e lartë e Kosovës që ofron pamje panoramike mahnitëse.",
            "rugova-mountains": "Malet e Rugovës",
            "rugova-mountains-desc": "Shkëmbinj dramatikë dhe lugina të thella në Kosovën perëndimore.",
            "kopaonik-mountains": "Malet e Kopaonikut",
            "kopaonik-mountains-desc": "Vargmal i bukur me depozita të pasura minerale.",
            "see-more-mountains": "Shiko më shumë Male",

            // Water Features Section
            "water-features-section": "Veçoritë Ujore",
            "mirusha-waterfalls": "Ujëvarat e Mirushës",
            "mirusha-waterfalls-desc": "Një seri spektakolare prej 13 liqenesh dhe ujëvarash, duke krijuar një nga atraksionet më të bukura natyrore të Kosovës.",
            "white-drin": "Ujëvara e Drinit të Bardhë",
            "white-drin-desc": "Ujëvara mbresëlënëse e Drinit të Bardhë është një nga pikat më të vizituara natyrore të Kosovës.",
            "alpine-lakes": "Liqenet Alpine",
            "alpine-lakes-desc": "Liqene të shumta alpine të paprekura zbukurojnë peizazhin malor, duke ofruar burime të rëndësishme të ujit të ëmbël.",
            "mirusha-falls": "Ujëvarat e Mirushës",
            "mirusha-falls-desc": "Seri e ujëvarave dhe pishinave të bukura në Kosovën qendrore.",
            "gazivoda-lake": "Liqeni i Gazivodës",
            "gazivoda-lake-desc": "Liqen i madh artificial me sfond malor mahnitës.",
            "lumbardhi-river": "Lumi Lumbardhi",
            "lumbardhi-river-desc": "Lumë malor kristal i pastër që rrjedh përmes Prizrenit.",
            "see-more-water": "Shiko më shumë Veçori Ujore",

            // Caves Section
            "caves-section": "Shpellat dhe Kanionet",
            "gadime-cave": "Shpella e Gadimes",
            "gadime-cave-desc": "E famshme për kristalet unike të aragonitit dhe formacionet e mermerit, që shtrihen disa kilometra nën tokë.",
            "rugova-canyon": "Kanioni i Rugovës",
            "rugova-canyon-desc": "Një nga kanionet më të thella dhe më mbresëlënëse në Evropë, që ofron pamje spektakolare dhe mundësi për ngjitje.",
            "marble-cave": "Shpella e Mermerit",
            "marble-cave-desc": "Një mrekulli natyrore që karakterizohet nga formacione të bukura mermeri dhe përrenj nëntokësorë.",
            "radavc-cave": "Shpella e Radavcit",
            "radavc-cave-desc": "Sistem i lashtë shpellash me stalaktite dhe stalagmite mbresëlënëse.",
            "peja-cave": "Shpella e Pejës",
            "peja-cave-desc": "Shpellë historike me rëndësi arkeologjike.",
            "see-more-caves": "Shiko më shumë Shpella",

            // Conservation Page
            "hero-conservation": "Konservimi i Kosovës",

            // Protected Areas Section
            "protected-areas-section": "Zonat e Mbrojtura",
            "nature-reserves": "Rezervatet Natyrore",
            "nature-reserves-desc": "Zona të mbrojtura që ruajnë biodiversitetin unik të Kosovës.",
            "national-parks": "Parqet Kombëtare",
            "national-parks-desc": "Peizazhe të gjera të mbrojtura që shfaqin trashëgiminë natyrore të Kosovës.",
            "wildlife-sanctuaries": "Strehimoret e Kafshëve të Egra",
            "wildlife-sanctuaries-desc": "Strehë e sigurt për llojet e rrezikuara dhe kafshët e egra.",
            "sharr-park": "Parku i Maleve të Sharrit",
            "sharr-park-desc": "Një nga zonat më të mëdha të mbrojtura të Kosovës me ekosisteme të ndryshme.",
            "bjeshket-park": "Bjeshkët e Nemuna",
            "bjeshket-park-desc": "Vargmal i mbrojtur me florë dhe faunë unike.",
            "germia-park": "Parku i Gërmisë",
            "germia-park-desc": "Rezervat natyror urban që mbron biodiversitetin lokal.",
            "see-more-protected": "Shiko më shumë Zona të Mbrojtura",

            // Conservation Initiatives Section
            "initiatives-section": "Iniciativat e Konservimit",
            "species-protection": "Mbrojtja e Llojeve",
            "species-protection-desc": "Programe të dedikuara për mbrojtjen e llojeve të rrezikuara.",
            "habitat-restoration": "Restaurimi i Habitateve",
            "habitat-restoration-desc": "Projekte të fokusuara në restaurimin e ekosistemeve të dëmtuara.",
            "sustainable-tourism": "Turizmi i Qëndrueshëm",
            "sustainable-tourism-desc": "Praktika eko-miqësore të turizmit që mbrojnë zonat natyrore.",
            "wolf-conservation": "Konservimi i Ujqërve",
            "wolf-conservation-desc": "Programe për mbrojtjen dhe monitorimin e popullatave të ujqërve.",
            "water-protection": "Mbrojtja e Ujit",
            "water-protection-desc": "Iniciativa për ruajtjen e burimeve ujore dhe jetës ujore.",
            "research-programs": "Programet Kërkimore",
            "research-programs-desc": "Studime shkencore që mbështesin përpjekjet e konservimit.",
            "see-more-initiatives": "Shiko më shumë Iniciativa",

            // About Page
            "overview-section": "Përmbledhje e Projektit",
            "our-mission": "Misioni Ynë",
            "our-mission-desc": "Të prezantojmë dhe ruajmë mrekullitë natyrore të Kosovës përmes rrëfimit dixhital dhe edukimit, duke frymëzuar gjeneratat e ardhshme për të mbrojtur trashëgiminë tonë mjedisore.",
            "our-vision": "Vizioni Ynë",
            "our-vision-desc": "Krijimi i ndërgjegjësimit për biodiversitetin, peizazhet dhe përpjekjet e konservimit të Kosovës, duke promovuar turizmin e qëndrueshëm dhe mbrojtjen e mjedisit.",
            "our-values": "Vlerat Tona",
            "our-values-desc": "Përkushtimi ndaj edukimit mjedisor, saktësisë shkencore dhe festimit të bukurisë natyrore të Kosovës përmes teknologjisë moderne të internetit.",

            // Team Section
            "team-section": "Ekipi Ynë",
            "school-name": "Fan S. Noli Podujevë",
            "school-project": "Projekt Shkollor",
            "team-members": "Realizuar nga nxënësit e Fan S. Noli Podujevë: Memli Aliu & Aldin Berisha",

            // Features Section
            "features-section": "Veçoritë e Faqes",
            "theme-customization": "Personalizimi i Temës",
            "theme-customization-desc": "Personalizoni përvojën tuaj të shikimit me ngjyra të personalizuara dhe modalitet të errët.",
            "interactive-galleries": "Galeri Interaktive",
            "interactive-galleries-desc": "Eksploroni imazhe me cilësi të lartë me mundësi shikimi në ekran të plotë.",
            "responsive-design": "Dizajn Responsiv",
            "responsive-design-desc": "Optimizuar për të gjitha pajisjet dhe madhësitë e ekranit.",
            "animated-elements": "Elementë të Animuar",
            "animated-elements-desc": "Animacione dhe tranzicione të buta për përvojë të përmirësuar të përdoruesit.",
            "show-more": "Shiko më shumë",
            "show-less": "Shiko më pak",
            "see-on-maps": "Shiko në Google Maps",

            // See More/Less buttons
            "see-more": "Shiko më shumë",
            "see-less": "Shiko më pak",
            "see-more-flora": "Shiko më shumë Flora",
            "see-more-wildlife": "Shiko më shumë Kafshë",
            "see-more-insects": "Shiko më shumë Insekte",
            "see-more-mountains": "Shiko më shumë Male",
            "see-more-water": "Shiko më shumë Ujëra",
            "see-more-caves": "Shiko më shumë Shpella",
            "see-more-protected": "Shiko më shumë Zona të Mbrojtura",
            "see-more-initiatives": "Shiko më shumë Iniciativa"
        }
    };

    // Location links for Google Maps
    const locationLinks = {
        // Mountains
        'landscapesharrmountains.png': 'https://www.google.com/maps/place/Shar+Mountains+National+Park/@42.0833318,20.833367,795m/data=!3m1!1e3!4m6!3m5!1s0x1353ef47d8364dcb:0xaa1bc3c14f4cc725!8m2!3d42.0829153!4d20.8322356!16s%2Fg%2F11twr90snn!5m1!1e4?entry=ttu',
        'landscapebjeshketenemuna.png': 'https://www.google.com/maps/place/Albanian+Alps/@42.4551833,19.7968658,1880m/data=!3m1!1e3!4m14!1m7!3m6!1s0x135265f576ef6c01:0x22a9eeff6b3f7dea!2sAlbanian+Alps!8m2!3d42.4552003!4d19.8029854!16zL20vMGNxem40!3m5!1s0x135265f576ef6c01:0x22a9eeff6b3f7dea!8m2!3d42.4552003!4d19.8029854!16zL20vMGNxem40?entry=ttu',
        'landscapeskiing.png': 'https://www.google.com/maps/place/Brezovica/@42.1828442,21.0323195,794m/data=!3m1!1e3!4m10!1m2!2m1!1sski+resort+near+Brezovic%C3%AB!3m6!1s0x13538b004ca0af49:0xf4f7a74f388b41b7!8m2!3d42.1830897!4d21.035484!15sChpza2kgcmVzb3J0IG5lYXIgQnJlem92aWPDq1ocIhpza2kgcmVzb3J0IG5lYXIgYnJlem92aWPDq5IBCnNraV9yZXNvcnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmZMVGN0YUZsUkVBReABAPoBBAgRECI!16s%2Fg%2F11y8g04kqk?entry=ttu',
        
        // Water Features
        'landscapeKosovoMirusha.png': 'https://www.google.com/maps/place/Mirusha+Waterfalls/@42.5242179,20.5821603,591m/data=!3m1!1e3!4m6!3m5!1s0x135309ec182ce59b:0x1a21cc54f874307b!8m2!3d42.524196!4d20.5828908!16s%2Fm%2F04z_d44?entry=ttu',
        'landscapewhitedrin.png': 'https://www.google.com/maps/place/White+Drin+Waterfall/@42.7380616,20.3031443,936m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e2eca08c51ff:0x86d08c3a08112a60!2sWhite+Drin+Waterfall!8m2!3d42.7380494!4d20.3057814!16s%2Fm%2F047g068!3m5!1s0x1352e2eca08c51ff:0x86d08c3a08112a60!8m2!3d42.7380494!4d20.3057814!16s%2Fm%2F047g068?entry=ttu',
        'landscapebatllavalake.png': 'https://www.google.com/maps/place/Batlavsko+Jezero/@42.8196956,21.3025752,2223m/data=!3m1!1e3!4m6!3m5!1s0x1354baa3cf491ec5:0x9efa0a91dbc952ff!8m2!3d42.8197002!4d21.3128213!16s%2Fm%2F03cxlrx?entry=ttu',
        
        // Caves
        'gadimecave.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu',
        'landscaperugova.png': 'https://www.google.com/maps/place/Rugova+Canyon+viewpoint/@42.6650252,20.2284674,788m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!2sRugova+Canyon+viewpoint!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd!3m5!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd?entry=ttu',
        'landscapemarble.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu',
        
        // Extra Mountains
        'gjeravicapeak.png': 'https://www.google.com/maps/place/Gjeravica/@42.5316487,20.1332698,3158m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13525758b9f25ebb:0x52be42cc69a507c7!2sGjeravica!8m2!3d42.5318078!4d20.1399003!16s%2Fm%2F026d4l8!3m5!1s0x13525758b9f25ebb:0x52be42cc69a507c7!8m2!3d42.5318078!4d20.1399003!16s%2Fm%2F026d4l8?entry=ttu',
        'rugovamountains.png': 'https://www.google.com/maps/place/Rugova+Canyon+viewpoint/@42.6650252,20.2284674,788m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!2sRugova+Canyon+viewpoint!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd!3m5!1s0x1352fb0c606f50ab:0xbe64ab28ca45c30a!8m2!3d42.6650252!4d20.2310477!16s%2Fg%2F11qhcrhjgd?entry=ttu',
        'kopaonikmountains.png': 'https://www.google.com/maps/place/Kopaonik/@43.2674695,20.820668,1312m/data=!3m1!1e3!4m10!1m2!2m1!1skopaonik+mountains!3m6!1s0x47563d7f99fccf2f:0x7e60d90e21e4ae77!8m2!3d43.2680447!4d20.8263088!15sChJrb3Bhb25payBtb3VudGFpbnNaFCISa29wYW9uaWsgbW91bnRhaW5zkgEObW91bnRhaW5fcmFuZ2XgAQA!16zL20vMDk3Ym16?entry=ttu',
        
        // Extra Water Features
        'mirushafalls.png': 'https://www.google.com/maps/place/Mirusha+Waterfalls+%26+Canyons/@42.5236849,20.5841499,790m/data=!3m2!1e3!4b1!4m6!3m5!1s0x135309ce4dcd7b4d:0xe3ce22b7272791c3!8m2!3d42.5236849!4d20.5867302!16s%2Fm%2F012mg2by?entry=ttu',
        'gazivodalake.png': 'https://www.google.com/maps/dir//Gazivoda+Lake/@42.9501218,20.5224095,14920m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x13533a7e6f185d91:0x249523c44023dd3b!2m2!1d20.5736873!2d42.9584293?entry=ttu',
        'lumbardhiriver.png': 'https://www.google.com/maps/place/Lumbardhi+i+Pej%C3%ABs/@42.6379866,20.3937488,1576m/data=!3m1!1e3!4m10!1m2!2m1!1slumbardhi+river!3m6!1s0x135305d390dd39eb:0x364d85768ff96a80!8m2!3d42.6385682!4d20.4005814!15sCg9sdW1iYXJkaGkgcml2ZXJaESIPbHVtYmFyZGhpIHJpdmVykgEFcml2ZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTTFNR0ZETVRkUlJSQULgAQD6AQQIABAM!16s%2Fg%2F11bc5f_b5r?entry=ttu',
        
        // Extra Caves
        'radavccave.png': 'https://www.google.com/maps/place/Radaci+Cave/@42.7376355,20.3096046,468m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!2sRadaci+Cave!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1!3m5!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1?entry=ttu',
        'pejacave.png': 'https://www.google.com/maps/place/Radaci+Cave/@42.7376355,20.3096046,468m/data=!3m1!1e3!4m14!1m7!3m6!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!2sRadaci+Cave!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1!3m5!1s0x1352e3efc0cfdfe3:0xd82605749cc097ff!8m2!3d42.7375461!4d20.3110301!16s%2Fg%2F11hdx1rnf1?entry=ttu',
        'gadimecave2.png': 'https://www.google.com/maps/place/Gadime+Cave/@42.4780776,21.2053806,664m/data=!3m1!1e3!4m14!1m7!3m6!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!2sGadime+Cave!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6!3m5!1s0x13548410b9a5abdd:0x7f91ece94e8bba2e!8m2!3d42.4780625!4d21.2075469!16zL20vMGZnZnB6?entry=ttu'
    };

    // Get all the needed elements
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.language-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const customizer = document.querySelector('.theme-customizer');
    const customizerToggle = document.querySelector('.customizer-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const colorOptions = document.querySelectorAll('.color-option');
    const customColorInput = document.getElementById('custom-color');
    const radiusSlider = document.getElementById('radius-slider');
    const root = document.documentElement;

    // Function to update content
    function updateContent(lang) {
        console.log('Updating to language:', lang);

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
                if (element.hasAttribute('data-text')) {
                    element.setAttribute('data-text', translations[lang][key]);
                }
            }
        });

        // Update hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const heroKey = `hero-${currentPage.split('.')[0]}` || 'hero-home';
            if (translations[lang][heroKey]) {
                heroTitle.textContent = translations[lang][heroKey];
            }
        }

        // Update all see more buttons
        document.querySelectorAll('.see-more-btn').forEach(button => {
            const targetGrid = document.querySelector(`.${button.dataset.target}`);
            const isHidden = targetGrid.classList.contains('hidden-grid');
            const baseKey = button.getAttribute('data-translate');
            const translationKey = isHidden ? baseKey : 'see-less';
            button.textContent = translations[lang][translationKey];
        });
    }

    // Function to update theme colors
    function updateThemeColor(color) {
        console.log('Updating theme color to:', color);
        root.style.setProperty('--primary-color', color);
        root.style.setProperty('--secondary-color', color);
        root.style.setProperty('--accent-color', color);
        root.style.setProperty('--heading-color', color);
        localStorage.setItem('primary-color', color);

        // Update active state of color options
        colorOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-color') === color) {
                option.classList.add('active');
            }
        });

        // Update gear icon color
        customizerToggle.classList.toggle('black-icon', color === '#ffffff');
    }

    // Language switcher event listeners
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Language button clicked');
            langDropdown.classList.toggle('show');
        });
    }

    if (langOptions) {
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                console.log('Language option clicked:', lang);

                // Update button appearance
                const flag = option.querySelector('.lang-flag').src;
                langBtn.querySelector('.lang-flag').src = flag;
                langBtn.querySelector('span').textContent = lang.toUpperCase() === 'EN' ? 'ENG' : 'ALB';

                // Update content and save preference
                updateContent(lang);
                localStorage.setItem('selected-language', lang);

                // Hide dropdown
                langDropdown.classList.remove('show');
            });
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langDropdown) {
            langDropdown.classList.remove('show');
        }
    });

    // Theme customizer event listeners
    if (customizerToggle) {
        customizerToggle.addEventListener('click', () => {
            const isOpen = customizer.classList.contains('open');
            customizerToggle.classList.remove('spinning', 'spinning-back');
            customizerToggle.classList.add(isOpen ? 'spinning-back' : 'spinning');
            customizer.classList.toggle('open');
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const isDarkMode = themeToggle.checked;
            const currentColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
            
            document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

            // Handle color switching when changing themes
            if (isDarkMode && currentColor === '#000000') {
                updateThemeColor('#6BCF6F'); // Default dark theme color
            } else if (!isDarkMode && currentColor === '#ffffff') {
                updateThemeColor('#4CAF50'); // Default light theme color
            }
        });
    }

    // Color theme options
    if (colorOptions) {
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                const color = option.getAttribute('data-color');
                updateThemeColor(color);
            });
        });
    }

    // Custom color picker
    if (customColorInput) {
        customColorInput.addEventListener('input', (e) => {
            const color = e.target.value;
            updateThemeColor(color);
        });

        customColorInput.addEventListener('change', (e) => {
            const color = e.target.value;
            updateThemeColor(color);
        });
    }

    // Border radius slider
    if (radiusSlider) {
        radiusSlider.addEventListener('input', (e) => {
            const value = e.target.value + 'px';
            root.style.setProperty('--border-radius', value);
            localStorage.setItem('border-radius', value);
        });
    }

    // Initialize
    if (AOS) {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Load saved preferences
    const savedLang = localStorage.getItem('selected-language');
    if (savedLang) {
        console.log('Loading saved language:', savedLang);
        updateContent(savedLang);
        
        const option = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
        if (option) {
            const flag = option.querySelector('.lang-flag').src;
            langBtn.querySelector('.lang-flag').src = flag;
            langBtn.querySelector('span').textContent = savedLang.toUpperCase() === 'EN' ? 'ENG' : 'ALB';
        }
    }

    function loadSavedPreferences() {
        // Load saved theme (light/dark)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            if (themeToggle) {
                themeToggle.checked = savedTheme === 'dark';
            }
        }

        // Load saved color
        const savedColor = localStorage.getItem('primary-color');
        if (savedColor) {
            updateThemeColor(savedColor);
            if (customColorInput) {
                customColorInput.value = savedColor;
            }
        }

        // Load saved border radius
        const savedRadius = localStorage.getItem('border-radius');
        if (savedRadius && radiusSlider) {
            root.style.setProperty('--border-radius', savedRadius);
            radiusSlider.value = parseInt(savedRadius);
        }
    }

    // Call the function to load saved preferences
    loadSavedPreferences();

    // Initialize See More buttons
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
    
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target grid
            const targetGrid = document.querySelector(`.${this.dataset.target}`);
            if (!targetGrid) {
                console.error('Target grid not found:', this.dataset.target);
                return;
            }
            
            // Toggle the hidden-grid class
            targetGrid.classList.toggle('hidden-grid');
            
            // Get current language
            const currentLang = localStorage.getItem('selected-language') || 'en';
            
            // Update button text based on state
            if (targetGrid.classList.contains('hidden-grid')) {
                // Show "See More" text
                this.textContent = translations[currentLang][this.dataset.translate];
            } else {
                // Show "See Less" text
                this.textContent = translations[currentLang]['see-less'];
                
                // Initialize images in the newly shown grid
                const newImages = targetGrid.querySelectorAll('.card-image');
                newImages.forEach(img => {
                    // Make sure image source is loaded
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                });
            }
            
            // Smooth scroll when showing content
            if (!targetGrid.classList.contains('hidden-grid')) {
                targetGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            // Refresh AOS animations
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });

    // Initialize modal functionality for all images
    const modal = document.querySelector('.fullscreen-modal');
    const modalImg = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close-modal');
    const mapsBtn = document.querySelector('.google-maps-btn');

    // Add click event to all card images (including those in hidden grids)
    document.querySelectorAll('.card-image').forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden';

            // Get the image filename from the src attribute
            const imagePath = this.src.split('/').pop();
            
            // Show/hide maps button based on location availability
            if (locationLinks && locationLinks[imagePath]) {
                mapsBtn.href = locationLinks[imagePath];
                mapsBtn.classList.add('visible');
            } else {
                mapsBtn.classList.remove('visible');
            }
        });
    });

    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (mapsBtn) mapsBtn.classList.remove('visible');
        });
    }

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (mapsBtn) mapsBtn.classList.remove('visible');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (mapsBtn) mapsBtn.classList.remove('visible');
        }
    });
});
