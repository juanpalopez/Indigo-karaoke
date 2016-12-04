(function () {

    var enque = new WinJS.Binding.List([
        { name: "Quien Será", icon: "images/karaoke/014.jpg", time: "3.10m", client: "Mesa 1", readStateColor: "rgba(255, 155, 155, 1)", readStateWeight: "600", author: "Sonora Matancera" },        
        { name: "Bailando", icon: "images/karaoke/011.jpg", time: "3.34m", client: "Mesa 2", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", author: "Enrique Iglesias" },
        { name: "La Bamba", icon: "images/karaoke/012.jpg", time: "3.34m", client: "Mesa 2", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", author: "Richi Valenz" },
        { name: "Feliz Navidad", icon: "images/karaoke/014.jpg", time: "2.00m", client: "Mesa 4", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600",  author: "Jose Feliciano" },
        { name: "La Macarena", icon: "images/karaoke/031.jpg", time: "2.40m", client: "Mesa 4", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", author: "Los del Rio" },
        { name: "La Vida es un Carnaval", icon: "images/karaoke/014.jpg", time: "3.10m", client: "Mesa 3", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", author: "Celia Cruz" }        
    ]);

    var karlist = new WinJS.Binding.List([
{ name :"La Bamba", author :"Mexican Traditional", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sofia", author :"Álvaro Soler", icon : "images/karaoke/031.jpg", time: "3.10m" , client:"" },
{ name :"Bailando", author :"Enrique Iglesias", icon : "images/karaoke/001.jpg", time: "3.10m" , client:"" },
{ name :"Duele el corazón", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bamba", author :"Los Lobos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El perdón", author :"Nicky Jam", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Navidad, Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Mordidita", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ave Maria (Spanish)", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Gozadera", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Noche De Paz", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me mirès mas", author :"Kendji Girac", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Andrea Bocelli", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vivir mi vida", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La camisa negra", author :"Juanes", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bailar", author :"Elvis Crespo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Vida Es Un Carnaval", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bamba", author :"Ritchie Valens", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sabor A Mi", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Andas en Mi Cabeza", author :"Chino & Nacho", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Maria (Un, dos, tres)", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hijo de la luna", author :"Mecano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Taxi", author :"Pitbull", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tequila", author :"The Champs", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Piensa en mí", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Colgando en tus manos (duo)", author :"Carlos Baute", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hallelujah", author :"Il Divo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oye Como Va", author :"Santana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bamboleo", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Shaky Shaky", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor, Amor, Amor", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El mismo sol", author :"Álvaro Soler", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Picky", author :"Joey Montana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cómo te atreves", author :"Morat", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Guantanamera", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Obsesión", author :"Aventura", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Burbujas De Amor", author :"Juan Luis Guerra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Cesária Évora", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi amor", author :"Souf", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Medley (Hit Mix '99)", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"De Pies a Cabeza", author :"Nicky Jam", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Historia De Un Amor", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Historia De Un Amor", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Porque te vas", author :"Jeanette", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vivo por ella", author :"Andrea Bocelli", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Macarena (Spanish Version)", author :"Los Del Rio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Corazón partío", author :"Alejandro Sanz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Libre soy", author :"Frozen", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta el amanecer", author :"Nicky Jam", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, quizás, quizás", author :"Andrea Bocelli", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta Siempre", author :"Nathalie Cardone", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Traidora", author :"Gente de Zona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un beso y una flor", author :"Nino Bravo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Granada", author :"Luciano Pavarotti", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ya Llego La Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Noche Santa", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La primera Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Diana Krall", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El reloj", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Yo no sé mañana (salsa)", author :"Luis Enrique", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Te Deseamos Una Feliz Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Loco", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Darte un beso", author :"Prince Royce", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Canción Del Mariachi (Morena De Mi Corazón)", author :"Antonio Banderas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Color esperanza", author :"Diego Torres", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho (Spanish Vocal)", author :"1940s Standards", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bomba", author :"King Africa", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bilirrubina", author :"Juan Luis Guerra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Paloma", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solamente una vez", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ding dong que alegria", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Corre", author :"Jesse & Joy", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vivir sin aire", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi gran noche", author :"Rafael Martos Sánchez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Guantanamera", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Campanas De Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me doy por vencido", author :"Luis Fonsi", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Angeles Del Cielo Azul", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, quizás, quizás", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, quizás, quizás", author :"Roberto Alagna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perfidia", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cuando calienta el sol", author :"Los Machucambos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Tierra", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Propuesta Indecente", author :"Romeo Santos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nosotros Los Tres Reyes", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sonrisa", author :"Kendji Girac", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta Mi Final", author :"Il Divo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Valió la pena (Salsa version)", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ginza", author :"J Balvin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, Quizás, Quizás", author :"Nat King Cole", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me ames", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Baila Me", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, quizás, quizás", author :"Los Panchos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hoy", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Travesuras", author :"Nicky Jam", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Con Los Años Que Me Quedan", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Cumparsita", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Chan Chan", author :"Buena Vista Social Club", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Medley", author :"Sébastien El Chato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bamba", author :"Star Academy", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Escucha! Los Angeles Cantan", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Se me olvidó otra vez", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oh Ven Oh Ven Emmanuel", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cuando Me Enamoro", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perfidia", author :"Linda Ronstadt", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Celia's Oye Como Va (Oye Como Va)", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Mariachi", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Talismán", author :"Rosana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor a la mexicana", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El dia que me quieras", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A dios le pido", author :"Juanes", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Begin The Beguine", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi verdad", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Marina", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Entre dos tierras", author :"Héroes Del Silencio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La barca", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Harry Connick Jr.", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cielito lindo", author :"Roberto Alagna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Manuela", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un mundo ideal", author :"David Bustamante", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oyelas Bien", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cuando calienta el sol", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Marina, Marina", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Eres tú", author :"Mocedades", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perfidia", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho como si fuera", author :"Roberto Alagna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bailando", author :"Paradisio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Niña Bonita", author :"Chino & Nacho", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor de mis amores", author :"Paco", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mamma María", author :"Ricchi e Poveri", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que Sera (Che Sara)", author :"José Feliciano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Djobi, Djoba", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Volví A Nacer", author :"Carlos Vives", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Fuiste tú", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Soy un Truhan, Soy un Señor", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Y como es el", author :"José Luis Perales", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Anna (El Negro Zumbón)", author :"Pink Martini", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"L'homme en blanc", author :"Pierre Bachelet", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Labios compartidos", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Latino Medley", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pepito", author :"Los Machucambos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Cantante", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Somos Novios", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La vida tombola", author :"Manu Chao", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por el amor de una mujer", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quizás, quizás, quizás", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perfidia", author :"Nat King Cole", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quien Sera (Sway)", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"1, 2, 3 Maria", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Alfonsina y el mar", author :"Mercedes Sosa", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor de mis amores", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ojalá que llueva café", author :"Juan Luis Guerra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dos gardenias", author :"Buena Vista Social Club", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Baila morena", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No sé tú", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Regresa a mí", author :"Il Divo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quién Es este Niño", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Contigo En La Distancia", author :"Christina Aguilera", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solamente una vez", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El porompompero", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"En el muelle de San Blás", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pepito", author :"Kid Creole And The Coconuts", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Salome", author :"Chayanne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No Dudaría", author :"Rosario Flores", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perdóname", author :"Pablo Alborán", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solamente tú", author :"Pablo Alborán", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Gozo de Dios", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Limbo", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mexico (Medley)", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cuando Caliente El Sol", author :"Vikki Carr", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sueña", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"¡Oh, vengan a adorarlo!", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bamboleo", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Toda La Noche", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor, Amor, Amor", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Contigo en la distancia", author :"Andrea Bocelli", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un Dia Llegara", author :"Josh Groban", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Para siempre", author :"Vicente Fernández", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Buen Rey Wenceslao", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"En Un Pesebrito", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Limón y sal", author :"Julieta Venegas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tu enemigo", author :"Pablo López", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Aléjate", author :"Josh Groban", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me platiques más", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Beautiful Maria Of My Soul", author :"The Mambo Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sin Miedo a Nada", author :"La oreja de Van Gogh", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Granada", author :"Luis Mariano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A Puro Dolor", author :"Son by Four", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Malagueña Salerosa", author :"Chingon", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Qué será de ti (Como vai você)", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Adios", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Piensa en mi", author :"Roberto Alagna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quédate", author :"Lara Fabian", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Doce Dias De Navidad", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A media luz", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Estoy enamorado", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cannabis", author :"Ska-P", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Colegiala", author :"Rodolfo y su Tipica", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me ames (Tropical Remix)", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El vals del obrero", author :"Ska-P", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Caminito", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Fin de semana", author :"Fito Olivares", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Humanos a marte", author :"Chayanne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un Año De Amor", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que ganaste", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Zumba", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Corazón sin cara", author :"Prince Royce", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Electric Slide", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A fuego lento", author :"Rosana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Aqui estoy yo", author :"Luis Fonsi", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Historia De Un Amor", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Zumba! (Danza Kuduro Remix)", author :"Este Habana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dos hombres y un destino", author :"David Bustamante", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El porompompero", author :"Manolo Escobar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Noche y de día", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ríe Y Llora", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bulería", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mientes", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Para no verte más", author :"La Mosca Tsé Tsé", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bamba", author :"Antonio Rodriguez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame mucho", author :"Vincent Niclo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vamos A La Playa", author :"Righeira", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Incondicional", author :"Prince Royce", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pégate", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bachata en Fukuoka", author :"Juan Luis Guerra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Contigo aprendi", author :"Armando Manzanero", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La de la mala suerte", author :"Jesse & Joy", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cielito lindo", author :"Los Panchos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor Prohibido", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"We No Speak Americano", author :"Yolanda Be Cool", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si Dios Me Quita La Vida", author :"Javier Solís", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Voy A Apagar La Luz (Contigo Aprendí)", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Contigo en la distancia", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oye Mi Canto", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame", author :"Ricardo Montaner", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A la Huella a la Huella", author :"Florent Pagny", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ave Maria", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Desde cuando", author :"Alejandro Sanz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Gota Fría", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Así fue", author :"Elvis Martinez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Azúcar Negra", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La chica de Cuba", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Procuro olvidarte", author :"José Luis Rodríguez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Rey", author :"Kinito Méndez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Colgando en tus manos (salsa)", author :"Carlos Baute", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Margherita", author :"Richard Cocciante", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Recuerdame", author :"La 5a estación", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tchu Tcha Tcha", author :"Flavel & Neto", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Couleur café", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El de los ojos negros", author :"Sparx", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bendita tu luz", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Esperanza", author :"Roberto Alagna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Soledad", author :"Pink Martini", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor amor", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Lo mejor de mi vida eres tú", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Entregate", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"María la Portuguesa", author :"Carlos Cano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Volver", author :"Estrella Morente", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"¿Dónde estás, Yolanda?", author :"Pink Martini", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me importa nada", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dígale", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un Amor", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pepito", author :"Cindy Daniel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tumba la casa (Remix)", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ayer", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Angel De Los Reinos Santos", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que nadie", author :"Manuel Carrasco", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tacatà", author :"Tacabro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Candela", author :"Noelia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vive Ya", author :"Andrea Bocelli", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bailando Por Ahi", author :"Juan Magán", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ella Me Levantó", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La camisa negra", author :"Latin Lovers", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Moliendo Cafe", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Héroe", author :"Il Divo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Mama", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si no te quisiera", author :"Juan Magán", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Choclo", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quien Sera (Sway)", author :"1950s Standards", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No importa la distancia", author :"Ricky Martin", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Te Necesito", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cama Y Mesa", author :"Roberto Carlos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que te quería", author :"La 5a estación", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Yo vivire", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por el amor de una mujer", author :"Sébastien El Chato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me estoy enamorando", author :"Alejandro Fernández", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Echa pa'lla (Manos pa'rriba)", author :"Pitbull", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta la raíz", author :"Natalia Lafourcade", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Alejate De Mi", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dali Ven", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Acebo Y La Hiedra", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Nuevo Vicio", author :"Paulina Rubio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Se me va la voz", author :"Alejandro Fernández", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Las cosas pequeñas", author :"Prince Royce", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Valencia", author :"Luis Mariano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Tierra (live)", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Camina y ven", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Duele el amor", author :"Ana Torroja", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Feelings", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Soy", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por eso te canto", author :"Melendi", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si nos dejan", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Como han pasado los años", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Valió la pena", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que bonita eres", author :"Sébastien El Chato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Y yo sigo aquí", author :"Paulina Rubio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oye como va (guajira)", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta que salga el sol", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dios Muy Alegre Albergo", author :"Christmas Carol", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cada vez", author :"Salomé de Bahia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Eso es el amor", author :"Victoria Abril", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Negra Tiene Tumbao", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amapola", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pobre diablo", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Aquellos ojos verdes", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi vida sin tu amor", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Te voy a perder", author :"Alejandro Fernández", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quédate conmigo", author :"Pastora Soler", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Tiburón (The Shark)", author :"Henry Mendez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ponernos de acuerdo", author :"Marcela Morelo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Trista Pena", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"40 y 20", author :"José José", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hijo de la luna", author :"Sarah Brightman", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Agarro Bajando", author :"Gilberto Santa Rosa", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Margarita", author :"Wilkins", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Negra sombra", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A gritos de esperanza", author :"Álex Ubago", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amor, Amor, Amor", author :"Dario Moreno", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cielito Lindo", author :"José Feliciano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Historia de un amor", author :"Cesária Évora", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Eres", author :"Alejandro Fernández", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que seas feliz", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Para que tú no llores", author :"Antonio Carmona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hijo de la luna (Acoustic)", author :"Mecano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Rayos de sol", author :"Jose De Rico", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La nave del olvido", author :"José José", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dímelo", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La niña que llora en tus fiestas", author :"La oreja de Van Gogh", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que le den candela", author :"Celia Cruz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Lovumba", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amame", author :"Belle Perez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Echame A Mí La Culpa", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi princesa", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Jamás", author :"Camilo Sesto", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Coleccionista de canciones", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si tu te atreves", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Búscate un hombre que te quiera", author :"El Arrebato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El rey tiburón", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sobe son", author :"The Miami Sound Machine", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Señora De Las Cuatro Decadas", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si Tú No Estás", author :"Rosana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tabaco y channel", author :"Bacilos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ay Mamá", author :"Chayanne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bamba", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Siempre en mi mente", author :"Álex Ubago", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Todo, Todo, Todo", author :"Daniela Romo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hasta Que Vuelvas", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Caramelito", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ven Conmigo (Solamente Tú)", author :"Christina Aguilera", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Taboo", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"20 de Enero", author :"La oreja de Van Gogh", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No puedo olvidarla", author :"Marco Antonio Solis", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me odio (Salsa Remix)", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Macarena", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Y hubo alguien", author :"Marc Anthony", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Porque te vas", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quien te quiere como yo", author :"Carlos Baute", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bonito", author :"Jarabe de Palo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Bohemia", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"De Que Manera Te Olvido", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si nos quedara poco tiempo", author :"Chayanne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Porque te vas", author :"Star Academy", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solo por ti", author :"Josh Groban", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El amor", author :"Tito El Bambino", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oye Mi Canto (Hot Remix)", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que vengan los bomberos", author :"Daniela Romo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tu frialdad", author :"Triana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pensando en ti", author :"Gilberto Santa Rosa", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dame (Touch Me)", author :"Chayanne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Esa chica es mia", author :"Sergio Dalma", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Carnavalera", author :"Disco Estrella", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El blues del esclavo", author :"Mecano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El ritmo caliente", author :"Belle Perez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Se te olvida (la mentira)", author :"Javier Solís", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Entre Mis Recuerdos (My Heart Is Failing Me)", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Todo a pulmón", author :"Alejandro Lerner", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mary es mi amor", author :"Leo Dan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Y ahora", author :"Manuel Carrasco", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me gustas tanto", author :"Paulina Rubio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solo para ti", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tu quieres volver", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si Me Dejas Ahora", author :"José José", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No me enseñaste", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Es por ti", author :"Complices", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Morir De Amor", author :"Miguel Bosé", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi sueño", author :"Franco De Vita", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Soledad", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Lloro Por Ti", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Será", author :"Ricardo Montaner", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Carnavalera", author :"Nossa", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me enamora", author :"Juanes", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pasion Morena", author :"Olga Tañón", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero Bailar", author :"Ivy Queen", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que Hiciste", author :"Jennifer Lopez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Noche de Jangueo", author :"Arcángel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Siempre cantare", author :"Chico & The Gypsies", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Caliente", author :"Jay Santos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Como duele", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un montón de estrellas", author :"Polo Montañez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Inalcanzable", author :"RBD", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No molestar", author :"Marco Antonio Solis", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que te den candela", author :"Bea Bronchal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Abrázame", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quitate el top", author :"Tapo & Raya", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero saber", author :"The Gipsy Kings", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Historia de un amor", author :"Manuel Malou", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Eu Quero Tchu, Eu Quero Tcha", author :"João Lucas & Marcelo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Llego A Mi Medianoche", author :"Jazzy Christmas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Moving", author :"Macaco", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Frase Tonta de la Semana", author :"La 5a estación", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La sombra del gigante", author :"Eros Ramazzotti", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si tú no vuelves", author :"Miguel Bosé", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si Volvieras A Mi", author :"Josh Groban", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La Mucara", author :"The Mavericks", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tú no tienes alma", author :"Alejandro Sanz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Aniversario de bodas", author :"Luis Lucena", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Blue Zone", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Celebration", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bata Bata", author :"Latin Fresh", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No hace falta que lo digas", author :"Alejandro Lerner", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Lindo Arbol De Navidad", author :"Jazzy Christmas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Una Noche Más", author :"Jennifer Lopez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Somos Una Union", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Zalele", author :"Claudia & Asu", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amigo Vulnerable", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sólo tengo ojos para ti", author :"Juan Luis Guerra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Carnaval", author :"Raul Paz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Yo soy tu gatita", author :"La Factoría", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mambo 5", author :"Arielle Dombasle", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Que buena tu ta", author :"Fuego", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Yo soy rebelde", author :"Nathalie Cardone", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tocando fondo", author :"Kalimba", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nunca Voy A Olvidarte", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La feria de las flores", author :"El halcon de la Sierra", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Agua", author :"Más y Más", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero que me hagas el amor", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si piensas... Si quieres...", author :"Rocío Dúrcal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me olvide de vivir", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Soy solo un secreto", author :"Alejandra Guzmán", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Vamos A Darnos Tiempo", author :"José José", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"¿Cuando volverás?", author :"Aventura", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Niña Lola", author :"Buika", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Caminando", author :"Amaia Montero", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si Ya Se Acabó", author :"Jennifer Lopez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Latino Lover", author :"Loona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quitame Ese Hombre", author :"Pilar Montenegro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quién", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La soledad", author :"Florent Pagny", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Oye El Boom", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Disparame Dispara", author :"Laura Pausini", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Lo Mejor De Mi", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Alguien más", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Limbo Rock (Spanish vocals)", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un Alma Sentenciada", author :"Thalia", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No Controles", author :"Patricia Manterola", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Canción de adiós", author :"Coti", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por amor", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Shout (Gritar)", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bailar El Twist", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Babalu", author :"Desi Arnaz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me siento seguro", author :"Mocedades", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pa-Kum-Pa!!", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por Amarte Tanto", author :"Melendi", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"En el número 14", author :"El Arrebato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nanas de la cebolla", author :"Joan Manuel Serrat", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sudando", author :"Don Omar", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Deja que salga la luna", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Verónica", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hey Mami", author :"Wisin & Yandel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ella Me Levantó (Remix)", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Conga (spanish vocal)", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Veo Veo", author :"Hot Banditoz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Verdad Que Duele", author :"Joan Sebastian", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tu no sabes que tanto", author :"Carlos Baute", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sin tu amor", author :"Camila", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Medley", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Yo ya termine", author :"Patricia Manterola", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Azul", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Estelita", author :"Leo Dan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Cada loco con su tema", author :"Joan Manuel Serrat", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Manda una señal", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Pokito a poko", author :"Chambao", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solo queda (frente a frente)", author :"Jeanette", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi Vida", author :"José José", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Te deje marchar", author :"Luz Casal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Marta", author :"Nena Daconte", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nunca volverá", author :"El sueño de Morfeo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Motivos", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sopa fria", author :"M-Clan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mueve ese bom bom", author :"Da Family", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiereme mucho", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Paloma Brava", author :"Rocío Jurado", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero cruzar la bahía", author :"Cantores de Híspalis", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nada Valgo Sin Tu Amor", author :"Juanes", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Olvídame Tú", author :"Miguel Bosé", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Juego De Las Ritmas", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hoy", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"A lo clasico", author :"Daddy Yankee", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Falsa moneda", author :"Carlos Cano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Manos Vacias", author :"Miguel Bosé", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Después de ti", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bandida", author :"Elvis Crespo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Con Ella", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi humilde oración", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por Una Vez", author :"Malú", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No te mentia", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ahora que te vas", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me siento bien", author :"Hombres G", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Jesús, Verbo No Sustantivo", author :"Ricardo Arjona", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dame tu aire", author :"Álex Ubago", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ni te tengo ni te olvido", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Toda mi verdad", author :"Pastora Soler", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Guadalajara", author :"Elvis Presley", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Como duele", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dímelo", author :"Enrique Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dime si no es amor", author :"Álex Ubago", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amantes de ocasión", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Al Que Me Siga", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Así es La Vida", author :"Olga Tañón", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amar es lo que quiero", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Demasiado tarde", author :"El sueño de Morfeo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Le llamaban Manuel", author :"Joan Manuel Serrat", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Te supieron a poco", author :"La 5a estación", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Sé que me vas a dejar", author :"Marco Antonio Solis", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Bésame", author :"David Bustamante", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No", author :"Ednita Nazario", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El Niño Yuntero", author :"Joan Manuel Serrat", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me voy", author :"Gloria Estefan", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Mi mundo sin ti", author :"Soraya Arnelas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Por ti", author :"Shaila Dúrcal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Angelito", author :"Aventura", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"El vagabundo", author :"Alberto Cortez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Canción para pilar", author :"Victor Manuel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Amarte Asi", author :"Alejandro Lerner", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Misterios del amor", author :"Luis Miguel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hoy que ya no estas aqui", author :"Il Divo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Para toda la vida", author :"El sueño de Morfeo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Maruja Limón", author :"Manolo García", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Como la vida", author :"Hanna", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me tienes delirando (chain reaction)", author :"Soraya Arnelas", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"No puedo más", author :"El Arrebato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un sentimental", author :"Julio Iglesias", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Solo te puedo decir", author :"Quijano", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Adiós al ayer", author :"Los Modulos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ojalá pudiera borrarte", author :"Maná", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dimelo", author :"Children's Chorus", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Perros perdidos", author :"Rocío Jurado", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Me haces falta", author :"Jennifer Lopez", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Las tres de la noche", author :"Los Iberos", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"La cuestión", author :"Antonio Orozco", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ven por mí", author :"Edurne", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Maria coraje", author :"Victor Manuel", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"En las calles de Madrid", author :"Rosana", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Y ese niño", author :"Melody (Melodía Ruiz Gutiérrez)", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Si pudiera imaginarte", author :"Tamara", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Hipnotizadas", author :"Lunae", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Quiero perderme en tu cuerpo", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Nada que perder", author :"Conchita", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ayúdame", author :"Paulina Rubio", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Un millón de euros", author :"El Arrebato", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Tequila con limón", author :"Placido Domingo", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Dirás Que Estoy Loco", author :"Miguel Angel Muñoz", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Todo se parece a ti", author :"Diego Martín", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ponte el cinturón", author :"Silvia Padilla", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Ayudala", author :"Mari Trini", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Condenado a tu amor", author :"David Bisbal", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" },
{ name :"Agua Nueva", author :"Cristian Castro", icon : "images/karaoke/014.jpg", time: "3.10m" , client:"" }  
  ]);

    var filterlist=karlist.createFiltered(function(item){
        if (typeof(Sample)=="undefined") return false;        
        if (!Sample.Qtext) return false;  
        if (Sample.Qtext=="") return false;        
           if((item.name+" "+item.author).search(new RegExp(Sample.Qtext, "i"))>=0){
                return true;
            }
            return false;
        });

    var mlista = new WinJS.Binding.List([
        { name: "Piqueo de Carne", icon: "images/piqueos/01.jpg", time: "7:30p", type: "Piqueo", amount:"42.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Filete de Pechuga + Bife + Chuleta + Nuggets + Chorizo + Mollejitas + Salchichas Argentinas + Papas Fritas" },
        { name: "Piqueo de la Casa", icon: "images/piqueos/02.jpg", time: "7:30p", type: "Piqueo", amount:"52.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "(Para 2 personas) Chicharron de pollo  + alitas + tequeños + papas fritas." },
        { name: "Piqueo Peru", icon: "images/piqueos/03.jpg", time: "7:30p", type: "Piqueo", amount:"51.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Anticuchos + Mollejitas + Boliyucas + Alitas Picantes" },
        { name: "Piqueo Anticuchero", icon: "images/piqueos/04.jpg", time: "7:30p", type: "Piqueo", amount:"45.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Anticucho + Mollejitas + Papas Fritas" },
        { name: "Chicharron Crunch", icon: "images/piqueos/05.jpg", time: "7:30p", type: "Piqueo", amount:"36.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Crocantes trozos de Pechuga de pollo." },
        { name: "Alitas Crunch", icon: "images/piqueos/06.jpg", time: "7:30p", type: "Piqueo", amount:"64.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Alitas de Pollo Crocantes" },
        { name: "Boliyucas", icon: "images/piqueos/07.jpg", time: "7:30p", type: "Piqueo", amount:"22.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "10 Bolitas de yuca rellena c/ mozarella + salsa huancaina" },
        { name: "Salchipapas Especial", icon: "images/piqueos/08.jpg", time: "7:30p", type: "Piqueo", amount:"30.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Salchichas Argentinas, Huevos Revueltos, Cabanossi y Chorizo." },
        { name: "Daiquiri de Sandia", icon: "images/coctel/01.jpg", time: "7:30p", type: "Coctel", amount:"22.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Guayaba Sour", icon: "images/coctel/02.jpg", time: "7:30p", type: "Coctel", amount:"21.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Vodka Mandarina", icon: "images/coctel/03.jpg", time: "7:30p", type: "Coctel", amount:"24.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Crema de Wiski", icon: "images/coctel/04.jpg", time: "7:30p", type: "Coctel", amount:"32.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Terremoto", icon: "images/coctel/05.jpg", time: "7:30p", type: "Coctel", amount:"30.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Pisco Sour", icon: "images/coctel/06.jpg", time: "7:30p", type: "Coctel", amount:"31.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Chardonnay Sour", icon: "images/coctel/07.jpg", time: "7:30p", type: "Coctel", amount:"29.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Malta con Leche Condensada", icon: "images/coctel/08.jpg", type: "Coctel", amount:"21.0", time: "7:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Mint Melon", icon: "images/coctel/09.jpg", time: "7:30p", type: "Coctel", amount:"20.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Mango Colado", icon: "images/coctel/10.jpg", time: "7:30p", type: "Coctel", amount:"32.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Piña Colada", icon: "images/coctel/11.jpg", time: "7:30p", type: "Coctel", amount:"26.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Ponche de Cafe", icon: "images/coctel/12.jpg", time: "7:30p", type: "Coctel", amount:"30.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Alexander", icon: "images/coctel/13.jpg", time: "7:30p", type: "Coctel", amount:"31.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Vino Sour", icon: "images/coctel/14.jpg", time: "7:30p", type: "Coctel", amount:"30.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Martini de Mango", icon: "images/coctel/15.jpg", time: "7:30p", type: "Coctel", amount:"18.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Tequila Toreador", icon: "images/coctel/16.jpg", time: "7:30p", type: "Coctel", amount:"22.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" },
        { name: "Dry Manhattan", icon: "images/coctel/11.jpg", time: "7:30p", type: "Coctel", amount:"21.0", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "" }        


    ]);

    var mlista2 = new WinJS.Binding.List([ ]);        

    var mlista3 = new WinJS.Binding.List([ ]);        

    var inbox = new WinJS.Binding.List([
        { name: "Rocco Gower", icon: "images/people/101.jpg", time: "8:05p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto" },
        { name: "Alonzo Sans", icon: "images/people/101.jpg", time: "7:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "texto texto Texto texto Texto" },
        { name: "Heat Ricardo", icon: "images/people/101.jpg", time: "7:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto texto texto Texto texto Texto." },
        { name: "Luis Macro", icon: "images/people/101.jpg", time: "6:59p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto." },
        { name: "Joanna Clide", icon: "images/people/101.jpg", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto" },
        { name: "Heather Richmond", icon: "images/people/101.jpg", time: "5:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto?" },
        { name: "Brendan Pinkerton", icon: "images/people/101.jpg", time: "5:17p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto ???" },
        { name: "Trent Hoag", icon: "images/people/101.jpg", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto" },
        { name: "Alonzo Swope", icon: "images/people/101.jpg", time: "4:21p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto" },
        { name: "Eliza Waller", icon: "images/people/101.jpg", time: "4:01p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto." },
        { name: "Heather Richmond", icon: "images/people/101.jpg", time: "3:38p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto." },
        { name: "Lance McGuire", icon: "images/people/101.jpg", time: "3:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto?" },
        { name: "Rocco Gower", icon: "images/people/101.jpg", time: "2:01p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto?" },
        { name: "Joanna Cline", icon: "images/people/101.jpg", time: "1:16p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto." },
        { name: "Eliza Waller", icon: "images/people/101.jpg", time: "12:53p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto?" },
        { name: "Trent Hoag", icon: "images/people/101.jpg", time: "11:29a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto." },
        { name: "Wiley Volz", icon: "images/people/101.jpg", time: "11:28a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto?" },
        { name: "Alonzo Swope", icon: "images/people/101.jpg", time: "10:41a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto texto texto Texto texto Texto?" },
        { name: "Alonzo Swope", icon: "images/people/101.jpg", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto." },
        { name: "Joanna Cline", icon: "images/people/101.jpg", time: "9:50a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "texto texto Texto texto Texto?" }
    ]);

    var unread = new WinJS.Binding.List([
        { name: "Alonzo Swope", icon: "images/people/person5.png", time: "7:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I think we're all set. See you at the meeting tomorrow!" },
        { name: "Joanna Cline", icon: "images/people/person6.png", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "Yes, I would definitely recommend it. I'm surprised you haven't seen it already!" },
        { name: "Trent Hoag", icon: "images/people/person4.png", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "The review went well! We're going to publish them next week!" },
        { name: "Trent Hoag", icon: "images/people/person4.png", time: "11:29a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I'd check with Helen. I think she's planning on sending them over in a few days." }
    ]);

    var flagged = new WinJS.Binding.List([
        { name: "Heather Richmond", icon: "images/people/person7.png", time: "7:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Let's schedule some time to review the latest reports." },
        { name: "Joanna Cline", icon: "images/people/person6.png", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "Yes, I would definitely recommend it. I'm surprised you haven't seen it already!" },
        { name: "Lance McGuire", icon: "images/people/person8.png", time: "3:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "This week is pretty busy. Should we plan for next week?" },
        { name: "Wiley Volz", icon: "images/people/person2.png", time: "11:28a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Well, that was a surprise! I think you were right. Next week, then?" },
        { name: "Alonzo Swope", icon: "images/people/person5.png", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "When should we schedule our next meeting? I'll be out of town for the rest of the month." }
    ]);

    var important = new WinJS.Binding.List([
        { name: "Trent Hoag", icon: "images/people/person4.png", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "The review went well! We're going to publish them next week!" },
        { name: "Eliza Waller", icon: "images/people/person10.png", time: "12:53p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Doors open at 7pm and the show starts at 8. Can you make it?" },
        { name: "Alonzo Swope", icon: "images/people/person5.png", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "When should we schedule our next meeting? I'll be out of town for the rest of the month." }
    ]);
    
    var deleted = new WinJS.Binding.List([
        { name: "Wiley Volz", icon: "images/people/person2.png", time: "8:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "It was great seeing you! Let's do this againt next month!" },
        { name: "Eliza Waller", icon: "images/people/person10.png", time: "6:03a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "I can't wait to show you my new purchase!" }
    ]);

    var blocked = new WinJS.Binding.List([
        { name: "Bryce Benefield", icon: "images/people/person3.png", time: "5:56a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "See you at practice!" }
    ]);

    var grouped = mlista.createGrouped(function (item) {
        return item.type;
    }, function (item) {
        return item.type;
    }, function (left, right) {
        return left.charCodeAt(0) - right.charCodeAt(0);
    });

    WinJS.Namespace.define("Sample", {

    inputChanged: WinJS.UI.eventHandler(function (ev) {

	        var _listView = document.getElementById("slist").winControl;
		    suma = 0; 

            var list = _listView.itemDataSource.list;
            for (var i = 0; i < list.length; i++) {
                var item = list.getAt(i);
                var ele = _listView.elementFromIndex(i);
                item.n = ele.querySelector("#cantidad").value;
                
    		    suma = suma + Number(item.amount) * Number(item.n)   

            }



		    document.querySelector("#amount").innerText=suma.toFixed(2);



        }),
    inputAdd: WinJS.UI.eventHandler(function (ev) {

	        var _listView = document.getElementById("slist").winControl;
		    suma = 0; 

            var list = _listView.itemDataSource.list;
            for (var i = 0; i < list.length; i++) {
                var item = list.getAt(i);
                var ele = _listView.elementFromIndex(i);
                if (ele.contains(event.srcElement)){
                    var ip = ele.querySelector("#cantidad");
                    ip.value = String(Number(ip.value) + 1) 
                }

            }

            Sample.inputChanged();


        }),     
             
        Inbox: inbox,
        Enque: enque,
        Karlist: karlist,        
        Filterlist: filterlist,        
        Mlista: mlista,
        Mlista2: mlista2,
        Mlista3: mlista3,                   
        Grouped: grouped,    
        Flagged: flagged,
        Important: important,
        Deleted: deleted,
        Blocked: blocked,
        Qtext: ""
    });

})();


var statusEl = document.getElementById("status");
var suggestionList = [];

function suggestionsRequestedHandler(eventObject) {
    var queryText = eventObject.detail.queryText,
    query = queryText.toLowerCase(),
    suggestionCollection = eventObject.detail.searchSuggestionCollection;
    if (queryText.length > 0) {
        for (var i = 0, len = suggestionList.length; i < len; i++) {
            if (suggestionList[i].substr(0, query.length).toLowerCase() === query) {
                suggestionCollection.appendQuerySuggestion(suggestionList[i]);
            }
        }
    }
}

function querySubmittedHandler(eventObject) {
    var queryText = eventObject.detail.queryText;
    Sample.Qtext = queryText;
    Sample.Karlist.notifyReload();
}


WinJS.Namespace.define("Sample", {
    suggestionsRequestedHandler: WinJS.UI.eventHandler(suggestionsRequestedHandler),
    querySubmittedHandler: WinJS.UI.eventHandler(querySubmittedHandler),
    itemInvokedHandler: WinJS.UI.eventHandler(function(){document.querySelector('#dialog3').winControl.show()})
});



WinJS.UI.processAll().then(function () {
    var contentDialog = document.querySelector("#dialog1").winControl;
    contentDialog.addEventListener("beforehide", function(ev){
    	if (ev.detail.result=='primary'){
    		var wlist = document.querySelector("#plist").winControl;

    		if (wlist.selection.count() >0 ) {
    			while(Sample.Mlista2.length>0){
    				Sample.Mlista2.pop()
    			} 
    			suma = 0; 
    			wlist.selection.getItems().done(function (items) {
	           		for (var j = items.length - 1; j >= 0; j--) {

    					Sample.Mlista2.push({ name: items[j].data.name , icon: items[j].data.icon , time: items[j].data.time, type: items[j].data.type, amount:items[j].data.amount, readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", n: "1" });
    					suma = suma + Number(items[j].data.amount)
    				}
					document.querySelector("#amount").innerText=suma.toFixed(2);    				
    			}
    			)

    		}
        };
    	

    }, false);
    var contentDialog = document.querySelector("#dialog2").winControl;
    contentDialog.addEventListener("beforehide", function(ev){
        if (ev.detail.result=='primary'){
	        var _listView = document.getElementById("slist").winControl;
	        var _dataSource = _listView.itemDataSource;
	        if (_listView.selection.count() > 0) {
		        _listView.selection.getItems().done(function (items){
			        _dataSource.beginEdits();
			        items.forEach(function (item){
				        _dataSource.remove(item.key);
			        });
			        _dataSource.endEdits();
		        });
	        }
        }

		suma = 0; 

        var list = _listView.itemDataSource.list;
        for (var i = 0; i < list.length; i++) {
               var item = list.getAt(i);
    		    suma = suma + Number(item.amount)                
        }
		document.querySelector("#amount").innerText=suma.toFixed(2);

    }, false);
    var contentDialog = document.querySelector("#dialog3").winControl;
    contentDialog.addEventListener("beforehide", function(ev){
    	if (ev.detail.result=='primary'){
    		var wlist = document.querySelector("#filterklist").winControl;

    		if (wlist.selection.count() >0 ) {
    			wlist.selection.getItems().done(function (items) {
	           	for (var j = items.length - 1; j >= 0; j--) {

    				Sample.Enque.push({ name: items[j].data.name , icon: items[j].data.icon , time: items[j].data.time, client: "Mesa 5", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", author: items[j].data.author });
    				}
    			})
    		}
        };

    }, false);        

    var contentDialog = document.querySelector("#dialog4").winControl;
    contentDialog.addEventListener("beforehide", function(ev){
    	if (ev.detail.result=='primary'){
 
	        var _listView = document.getElementById("slist").winControl;


		    suma = 0; 

            var list = _listView.itemDataSource.list;
            for (var i = 0; i < list.length; i++) {
                var item = list.getAt(i);
                var ele = _listView.elementFromIndex(i);
                item.n = ele.querySelector("#cantidad").value;
    			Sample.Mlista3.push({ name: item.name , amount:item.amount, n:item.n ,t:(Number(item.amount)*Number(item.n)).toFixed(2) });
                
    		    suma = suma + Number(item.amount) * Number(item.n)   

            }

            suma = 0; 

            Sample.Mlista3.forEach(function(v,i,a){suma = suma + Number(v.amount)* Number(v.n)})

		    document.querySelector("#amount2").innerText=suma.toFixed(2);

   			while(Sample.Mlista2.length>0){
   				Sample.Mlista2.pop()
   			} 

		    document.querySelector("#amount").innerText=(0).toFixed(2);
            document.querySelector('#dialog5').winControl.show()            
        };

    }, false);        
});