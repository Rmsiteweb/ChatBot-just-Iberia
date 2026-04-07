// ═══════════════════════════════════════════════════════════════
//  JUST IBERIA · BASE DE CONOCIMIENTO EXPERTA
//  Fuente: justiberia.es (catálogo oficial España 2026)
//  Motor conversacional avanzado — sin dependencias externas
// ═══════════════════════════════════════════════════════════════

var JUST_KB = {

  // ── MARCA ──────────────────────────────────────────────────
  marca: {
    nombre: "Just Iberia",
    origen: "Suiza · Hecho en Suiza desde 1930",
    filosofia: "Sinergia entre Naturaleza y Ciencia. Ingredientes vegetales, minerales y marinos en alta presencia, combinados con tecnología suiza de extracción (destilación en corriente de vapor, presión, maceración e infusión). Sin ensayos en animales. Probados dermatológicamente. Tolerados por todo tipo de pieles.",
    certificaciones: ["Dermatológicamente probado", "Sin ensayos en animales", "Probado de níquel", "Normativa europea y suiza"],
    url: "https://www.justiberia.es/"
  },

  // ── CATÁLOGO DE PRODUCTOS ──────────────────────────────────
  // Estructura: { nombre, familia, subfamilia, desc, ingredientes, uso, pielTipo, problemas, url }
  productos: [

    // ── ACEITES ESENCIALES ──
    {
      id:"oleo31", nombre:"Óleo 31", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"La joya de Just: sinergia única de 31 plantas de altísima calidad seleccionadas por su extraordinaria pureza. Algunas esencias se depuran dos veces mediante doble destilación. Uso diario para bienestar general.",
      ingredientes:["31 aceites esenciales y extractos vegetales"],
      uso:"Unas pocas gotas son suficientes. Aplicar en muñecas, cuello o difusor. Uso tópico o ambiental.",
      pielTipo:["todos"],
      problemas:["bienestar general","relax","estrés","agotamiento","tónico","bienestar diario","aromaterapia"],
      precio:"39,50 € (75ml) / 29,50 € (50ml)",
      url:"https://www.justiberia.es/productos/aceites-esenciales/oleo-31"
    },
    {
      id:"relax-activador", nombre:"Relax Activador – Aceite Anti-estrés", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial específico para el estrés y la tensión acumulada. Actúa sobre el sistema nervioso promoviendo calma y serenidad.",
      ingredientes:["Sinergia de aceites esenciales calmantes"],
      uso:"Aplicar en muñecas, sienes o difusor. Ideal antes de dormir o en momentos de tensión.",
      pielTipo:["todos"],
      problemas:["estrés","ansiedad","tensión","insomnio","relax","calma","nervios","agobio"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/relax-activador-aceite-anti-estres"
    },
    {
      id:"energy-plus", nombre:"Energy+", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial estimulante y revitalizante. Ideal para combatir el cansancio y recuperar la energía.",
      ingredientes:["Sinergia de aceites esenciales energizantes"],
      uso:"Aplicar en muñecas, inhalar o usar en difusor por las mañanas.",
      pielTipo:["todos"],
      problemas:["cansancio","fatiga","falta de energía","agotamiento","vitalidad"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/energy-plus"
    },
    {
      id:"eucalipto", nombre:"Aceite de Eucalipto", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial puro de eucalipto. Acción balsámica y purificante del ambiente. Clásico para el bienestar respiratorio.",
      ingredientes:["Aceite esencial de Eucalyptus globulus"],
      uso:"Difusor ambiental, inhalación, aplicación diluida en pecho. Ambiente sano y purificado.",
      pielTipo:["todos"],
      problemas:["congestión","resfriado","vías respiratorias","ambiente cargado","purificación"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-de-eucalipto"
    },
    {
      id:"limon", nombre:"Aceite Esencial Limón", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial de limón puro. Refrescante, purificante y revitalizante. Ideal para difusor o uso cosmético diluido.",
      ingredientes:["Aceite esencial de Citrus limon"],
      uso:"Difusor, inhalación, masaje diluido. Uplifting y purificante.",
      pielTipo:["todos"],
      problemas:["revitalización","purificación","ánimo","ambiente","energía"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-esencial-limon"
    },
    {
      id:"naranja", nombre:"Aceite Esencial Naranja", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial de naranja dulce. Cálido, alegre y relajante. Perfecto para crear un ambiente agradable.",
      ingredientes:["Aceite esencial de Citrus sinensis"],
      uso:"Difusor o masaje diluido. Ideal en casa o en momentos de relajación.",
      pielTipo:["todos"],
      problemas:["bienestar","relax","ambiente agradable","ánimo","calma"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-esencial-naranja"
    },
    {
      id:"menta", nombre:"Aceite Esencial Menta", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial de menta piperita. Refrescante, estimulante y alivio de sensaciones de pesadez.",
      ingredientes:["Aceite esencial de Mentha piperita"],
      uso:"Inhalación, aplicación diluida en sienes o frente. Cuidado con los ojos.",
      pielTipo:["todos"],
      problemas:["dolor de cabeza","concentración","pesadez","calor","frescor","digestión"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-esencial-menta"
    },
    {
      id:"lavanda", nombre:"Aceite Esencial Lavanda", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial puro de lavanda. El más versátil: calma, serenidad, favorece el sueño. Uno de los más usados en aromaterapia.",
      ingredientes:["Aceite esencial de Lavandula angustifolia"],
      uso:"Difusor, almohada, aplicación directa (uno de los pocos que puede usarse sin diluir). Ideal al acostarse.",
      pielTipo:["todos","piel sensible"],
      problemas:["insomnio","estrés","ansiedad","calma","serenidad","quemaduras leves","picaduras"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-esencial-lavanda"
    },
    {
      id:"tea-tree-aceite", nombre:"Aceite Esencial Tea Tree", familia:"aceites", subfamilia:"aceites esenciales",
      desc:"Aceite esencial de árbol del té. Purificante y calmante natural. Gran aliado para la piel con impurezas.",
      ingredientes:["Aceite esencial de Melaleuca alternifolia"],
      uso:"Aplicar puntualmente diluido en imperfecciones. También en difusor como purificante ambiental.",
      pielTipo:["piel mixta","piel grasa","piel con impurezas"],
      problemas:["acné","granitos","impurezas","purificación","hongos","picaduras"],
      url:"https://www.justiberia.es/productos/aceites-esenciales/aceite-esencial-tea-tree"
    },

    // ── CREMAS DERMOACTIVAS ──
    {
      id:"crema-tea-tree", nombre:"Crema Tea Tree", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema con aceite esencial de Tea Tree. Acción calmante y purificante para pieles con tendencia a impurezas o irritaciones.",
      ingredientes:["Aceite esencial Tea Tree","aloe vera","extractos calmantes"],
      uso:"Aplicar en zonas afectadas. Puede usarse puntualmente sobre granitos o como crema de zona.",
      pielTipo:["piel mixta","piel grasa","piel con impurezas","piel irritada"],
      problemas:["acné","granitos","impurezas","irritación","rojeces","piel problemática"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-tea-tree"
    },
    {
      id:"crema-calendula", nombre:"Crema Caléndula", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema con extracto de caléndula. Efecto protector y emoliente excepcional frente a agentes externos. Ideal para pieles secas, sensibles y para toda la familia.",
      ingredientes:["Extracto de Calendula officinalis","ingredientes emolientes"],
      uso:"Aplicar en cara, manos y zonas secas. Ideal en invierno o pieles castigadas.",
      pielTipo:["piel seca","piel sensible","piel atópica","todos"],
      problemas:["piel seca","sequedad","irritación","eritema","piel sensible","protección","manos agrietadas"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-calendula"
    },
    {
      id:"crema-tomillo", nombre:"Crema Tomillo", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema con aceite esencial de tomillo. Acción estimulante y tonificante para la piel.",
      ingredientes:["Aceite esencial de Thymus vulgaris"],
      uso:"Aplicar en zonas que necesiten estimulación o tono.",
      pielTipo:["todos"],
      problemas:["tonicidad","estimulación","piel apagada","circulación"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-tomillo"
    },
    {
      id:"arnica-harpagofito", nombre:"Crema Gel Árnica y Harpagofito", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Gel-crema con árnica y harpagofito. Clásico para músculos, articulaciones y golpes. Acción refrescante y calmante tras el esfuerzo físico.",
      ingredientes:["Árnica montana","Harpagophytum procumbens (garra del diablo)"],
      uso:"Masajear en zonas doloridas, músculos cansados o articulaciones. Post-deporte o post-esfuerzo.",
      pielTipo:["todos"],
      problemas:["dolor muscular","golpes","contracturas","articulaciones","deporte","post-entreno","moratones"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-gel-arnica-y-harpagofito"
    },
    {
      id:"crema-manos-manzanilla", nombre:"Crema Manos Manzanilla", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema de manos con extracto de manzanilla. Suavizante, calmante y protectora para las manos.",
      ingredientes:["Extracto de Chamomilla recutita"],
      uso:"Aplicar en manos después de lavarlas o cuando estén secas.",
      pielTipo:["todos","piel sensible"],
      problemas:["manos secas","manos agrietadas","irritación manos","cuidado manos"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-manos-manzanilla"
    },
    {
      id:"crema-lavanda", nombre:"Crema Lavanda", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema calmante y relajante con aceite esencial de lavanda, aloe vera y hamamelis. Hidratación y bienestar en un solo paso.",
      ingredientes:["Aceite esencial Lavanda","Aloe vera","Hamamelis virginiana"],
      uso:"Aplicar en cuerpo, piernas o zonas que necesiten calma e hidratación.",
      pielTipo:["piel seca","piel normal","piel sensible"],
      problemas:["piel seca","relax","hidratación","estrés","piel sensible","bienestar"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-lavanda"
    },
    {
      id:"crema-sanactiv", nombre:"Crema San Activ", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema dermoactiva polivalente para situaciones de piel alterada. Alta tolerabilidad.",
      ingredientes:["Complejo de extractos vegetales activos"],
      uso:"Aplicar en zonas con piel alterada, seca o irritada.",
      pielTipo:["piel seca","piel irritada","piel sensible"],
      problemas:["piel alterada","irritación","sequedad intensa","piel dañada"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-sanactiv"
    },
    {
      id:"gel-bodyfresh", nombre:"Crema Gel Bodyfresh", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Gel-crema de efecto frío y refrescante. Sensación de frescor inmediato para piernas y cuerpo.",
      ingredientes:["Mentol","extractos refrescantes"],
      uso:"Aplicar en piernas y zonas con sensación de calor o pesadez. Ideal en verano.",
      pielTipo:["todos"],
      problemas:["piernas cansadas","calor","pesadez","frescor","verano","hinchazón"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-gel-bodyfresh"
    },
    {
      id:"crema-enebro", nombre:"Crema Enebro", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Crema con aceite esencial de enebro. Sensación estimulante y cálida. Activa la circulación y aporta tono.",
      ingredientes:["Aceite esencial de Juniperus communis"],
      uso:"Masajear en piernas, glúteos y zonas con mala circulación. Estimula y activa.",
      pielTipo:["todos"],
      problemas:["piernas cansadas","circulación","mala circulación","frío","tono corporal","activación"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-enebro"
    },
    {
      id:"gel-vascular", nombre:"Gel Vascular", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Gel con rusco (Ruscus aculeatus) y castaño de Indias. El producto estrella de Just para piernas cansadas y pesadas. Favorece la microcirculación y aporta ligereza y frescor.",
      ingredientes:["Ruscus aculeatus (rusco)","Aesculus hippocastanum (castaño de Indias)","extractos venótonicos"],
      uso:"Masajear en piernas de abajo arriba, mañana y/o noche. Ideal tras pasar mucho tiempo de pie.",
      pielTipo:["todos"],
      problemas:["piernas cansadas","piernas pesadas","piernas hinchadas","varices","circulación","edema","trabajo de pie","verano"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/gel-vascular"
    },
    {
      id:"crema-gel-consuelda", nombre:"Crema Gel Consuelda", familia:"cremas", subfamilia:"cremas dermoactivas",
      desc:"Gel-crema con extracto de consuelda (sínfito). Calmante profundo para músculos y articulaciones doloridas.",
      ingredientes:["Symphytum officinale (consuelda/sínfito)"],
      uso:"Masajear en zona afectada. Especialmente indicado para dolores articulares crónicos.",
      pielTipo:["todos"],
      problemas:["articulaciones","dolor articular","tendinitis","esguinces","dolor crónico","músculos"],
      url:"https://www.justiberia.es/productos/cremas-dermoactivas/crema-gel-consuelda"
    },

    // ── PIES Y PIERNAS ──
    {
      id:"pedibon", nombre:"Pedibón – Loción Pies", familia:"pies", subfamilia:"pies y piernas",
      desc:"Loción específica para pies. Suavizante, desodorizante y calmante. Elimina durezas y cuida la piel del pie.",
      ingredientes:["Extractos vegetales desodorizantes y suavizantes"],
      uso:"Aplicar en los pies después del baño o al final del día.",
      pielTipo:["todos"],
      problemas:["pies secos","durezas","mal olor pies","cuidado pies","transpiración pies"],
      url:"https://www.justiberia.es/productos/pies-y-piernas/pedibon-locion-pies"
    },
    {
      id:"pedibath", nombre:"Pedibath – Sales Pies", familia:"pies", subfamilia:"pies y piernas",
      desc:"Sales para baño de pies. Relajan, descansan y refrescan los pies cansados. Ritual de bienestar completo.",
      ingredientes:["Sales marinas","aceites esenciales","extractos calmantes"],
      uso:"Disolver en agua templada y sumergir los pies 10-15 minutos.",
      pielTipo:["todos"],
      problemas:["pies cansados","pies doloridos","ritual relajante","callosidades"],
      url:"https://www.justiberia.es/productos/pies-y-piernas/pedibath-sales-pies"
    },
    {
      id:"pedicream", nombre:"Pedicream", familia:"pies", subfamilia:"pies y piernas",
      desc:"Crema de pies con extraordinario efecto emoliente. Hidratación profunda e intensa para pies muy secos o con grietas.",
      ingredientes:["Emolientes intensivos","extractos suavizantes"],
      uso:"Aplicar en pies limpios, especialmente en talones. Idealmente por la noche con calcetines.",
      pielTipo:["piel muy seca"],
      problemas:["pies secos","talones agrietados","grietas pies","durezas","hidratación pies"],
      url:"https://www.justiberia.es/productos/pies-y-piernas/pedicream"
    },

    // ── VITAL JUST (facial) ──
    {
      id:"gel-limpiador", nombre:"Gel Limpiador Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Gel limpiador facial suave y eficaz. Primer paso de la rutina Vital Just. Elimina impurezas sin agredir la piel.",
      ingredientes:["Tensioactivos suaves","extractos vegetales"],
      uso:"Aplicar en piel húmeda, masajear suavemente y aclarar. Mañana y noche.",
      pielTipo:["todos","piel mixta","piel normal"],
      problemas:["limpieza facial","maquillaje","impurezas","poro dilatado"],
      url:"https://www.justiberia.es/productos/vital-just/gel-limpiador"
    },
    {
      id:"crema-limpiadora", nombre:"Crema Limpiadora Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Crema limpiadora facial. Alternativa al gel para pieles más secas o sensibles. Limpia y nutre simultáneamente.",
      ingredientes:["Emolientes","extractos vegetales suavizantes"],
      uso:"Aplicar en cara seca, masajear y retirar con agua tibia o algodón.",
      pielTipo:["piel seca","piel sensible","piel madura"],
      problemas:["limpieza piel seca","sensibilidad","piel madura","limpieza suave"],
      url:"https://www.justiberia.es/productos/vital-just/crema-limpiadora"
    },
    {
      id:"desmaquillante-micelar", nombre:"Desmaquillante Micelar Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Agua micelar desmaquillante. Elimina maquillaje, incluso de ojos, sin irritar. Sin aclarado.",
      ingredientes:["Micelas","agua termal","extractos calmantes"],
      uso:"Aplicar en algodón y pasar por cara y ojos. No requiere aclarado.",
      pielTipo:["todos","piel sensible"],
      problemas:["desmaquillado","maquillaje resistente","cuidado ojos","limpieza rápida"],
      url:"https://www.justiberia.es/productos/vital-just/desmaquillante-micelar"
    },
    {
      id:"tonico", nombre:"Tónico Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Tónico facial que prepara la piel para la absorción de los tratamientos. Equilibra el pH y refina el poro.",
      ingredientes:["Agua de rosas","extractos tónicos vegetales"],
      uso:"Después de la limpieza, aplicar en algodón o directamente con manos.",
      pielTipo:["todos"],
      problemas:["poro dilatado","preparación piel","equilibrio pH","tono uniforme"],
      url:"https://www.justiberia.es/productos/vital-just/tonico"
    },
    {
      id:"hidrogel-ultrahidratante", nombre:"Hidrogel Ultrahidratante Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Hidrogel de hidratación intensa e inmediata. Textura ligera, no grasa. Válido para piel normal, mixta e incluso grasa que necesite hidratación.",
      ingredientes:["Ácido hialurónico","extractos hidratantes","activos vegetales"],
      uso:"Aplicar tras el tónico o sérum. Mañana y/o noche.",
      pielTipo:["piel normal","piel mixta","piel grasa"],
      problemas:["deshidratación","hidratación ligera","piel mixta","falta de agua en piel","textura ligera"],
      url:"https://www.justiberia.es/productos/vital-just/hidrogel-ultrahidratante"
    },
    {
      id:"peeling", nombre:"Peeling Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Aceite-gel exfoliante facial. Elimina células muertas y renueva la piel con suavidad. Piel más luminosa y preparada.",
      ingredientes:["Aceite vegetal","micropartículas exfoliantes suaves"],
      uso:"Aplicar en piel seca y masajear suavemente. Aclarar. Usar 1-2 veces por semana.",
      pielTipo:["todos"],
      problemas:["células muertas","luminosidad","piel apagada","renovación celular","exfoliación"],
      url:"https://www.justiberia.es/productos/vital-just/peeling"
    },
    {
      id:"gel-mascarilla", nombre:"Gel Mascarilla Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Mascarilla facial en gel. Tratamiento intensivo de hidratación y luminosidad.",
      ingredientes:["Activos hidratantes intensivos","extractos vegetales"],
      uso:"Aplicar sobre cara limpia y dejar actuar 10-15 minutos. Aclarar o absorber.",
      pielTipo:["todos"],
      problemas:["hidratación intensa","tratamiento semanal","luminosidad","piel cansada"],
      url:"https://www.justiberia.es/productos/vital-just/gel-mascarilla"
    },
    {
      id:"contorno-ojos", nombre:"Crema Contorno de Ojos Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Crema específica para el contorno de ojos. Hidrata, atenúa ojeras y reduce el aspecto de las bolsas.",
      ingredientes:["Activos antiinflamatorios","péptidos","vitaminas"],
      uso:"Aplicar puntualmente con el dedo anular mañana y noche.",
      pielTipo:["todos"],
      problemas:["ojeras","bolsas ojos","párpados","cansancio visual","patas de gallo","área ocular"],
      url:"https://www.justiberia.es/productos/vital-just/crema-contorno-de-ojos"
    },
    {
      id:"serum-vital", nombre:"Sérum Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Sérum concentrado con acción tonificante y revitalizante. Edelweiss alpina y rosa alpina como ingredientes estrella. Antiedad activo.",
      ingredientes:["Edelweiss alpino (Leontopodium alpinum)","Rosa alpina","activos antioxidantes"],
      uso:"Aplicar tras el tónico, antes de la crema. Mañana y/o noche.",
      pielTipo:["piel madura","piel normal","piel seca"],
      problemas:["envejecimiento","arrugas","pérdida de firmeza","antiedad","tono apagado","manchas","antioxidante"],
      url:"https://www.justiberia.es/productos/vital-just/serum"
    },
    {
      id:"crema-24h", nombre:"Crema 24H Rellenadora Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Crema intensiva de uso día y noche. Efecto relleno visible sobre líneas y arrugas. Alta nutrición.",
      ingredientes:["Activos rellenadores","ácido hialurónico","péptidos"],
      uso:"Aplicar por la mañana y/o noche sobre cara y cuello.",
      pielTipo:["piel madura","piel seca","piel normal"],
      problemas:["arrugas profundas","antiedad intensivo","firmeza","pérdida de volumen","piel madura"],
      url:"https://www.justiberia.es/productos/vital-just/crema-24h-rellenadora"
    },
    {
      id:"crema-dia", nombre:"Crema Día Regenerante Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Crema de día con acción regenerante. Protege durante el día y trata simultáneamente.",
      ingredientes:["Activos regenerantes","protectores solares","antioxidantes"],
      uso:"Cada mañana como último paso de la rutina. Puede aplicarse bajo el maquillaje.",
      pielTipo:["piel madura","piel normal"],
      problemas:["regeneración","protección diaria","antiedad","uniformidad tono"],
      url:"https://www.justiberia.es/productos/vital-just/crema-dia-regenerante"
    },
    {
      id:"crema-noche", nombre:"Crema Noche Regenerante Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Crema de noche de alta regeneración. Actúa durante el sueño para recuperar y renovar la piel.",
      ingredientes:["Activos regenerantes nocturnos","retinol vegetal","aceites nutritivos"],
      uso:"Aplicar cada noche como último paso sobre cara y cuello.",
      pielTipo:["piel madura","piel seca"],
      problemas:["regeneración nocturna","antiedad noche","nutrición intensa","piel madura"],
      url:"https://www.justiberia.es/productos/vital-just/vital-just-crema-noche-regenerante"
    },
    {
      id:"leche-corporal", nombre:"Leche Corporal Aterciopelada Vital Just", familia:"facial", subfamilia:"vital just",
      desc:"Leche corporal sedosa y nutritiva. Piel suave, hidratada y aterciopelada al tacto.",
      ingredientes:["Emolientes corporales","extractos vegetales nutritivos"],
      uso:"Aplicar en cuerpo tras la ducha sobre piel húmeda.",
      pielTipo:["todos","piel seca"],
      problemas:["hidratación corporal","piel seca corporal","suavidad","cuidado corporal"],
      url:"https://www.justiberia.es/productos/vital-just/leche-corporal-aterciopelada"
    },

    // ── CABELLOS ──
    {
      id:"locion-anticaida", nombre:"Loción Anticaída", familia:"cabello", subfamilia:"cabellos",
      desc:"Loción específica para prevenir y tratar la caída del cabello. Fortalece el folículo y estimula el crecimiento.",
      ingredientes:["Extractos anticaída vegetales","biotina","quina"],
      uso:"Aplicar directamente en cuero cabelludo, masajear y no aclarar. Uso diario o alterno.",
      pielTipo:["cuero cabelludo"],
      problemas:["caída cabello","pérdida cabello","alopecia leve","debilidad capilar","crecimiento"],
      url:"https://www.justiberia.es/productos/cabellos/locion-anticaida"
    },
    {
      id:"balsamo-acondicionador", nombre:"Bálsamo Acondicionador", familia:"cabello", subfamilia:"cabellos",
      desc:"Acondicionador nutritivo y desenredante. Facilita el peinado y aporta suavidad y brillo.",
      ingredientes:["Proteínas vegetales","extractos nutritivos"],
      uso:"Aplicar en cabello mojado después del champú, dejar actuar y aclarar.",
      pielTipo:["todos los tipos de cabello"],
      problemas:["cabello enredado","cabello seco","falta de brillo","frizz","dificultad al peinar"],
      url:"https://www.justiberia.es/productos/cabellos/balsamo-acondicionador"
    },
    {
      id:"serum-reparador", nombre:"Sérum Spray Reparador del Cabello", familia:"cabello", subfamilia:"cabellos",
      desc:"Sérum en spray reparador. Regenera la fibra capilar dañada por el calor, la coloración o el medioambiente.",
      ingredientes:["Proteínas de reparación","aceites vegetales","activos reconstituentes"],
      uso:"Aplicar en cabello mojado o seco, no aclarar. Sin aclarado.",
      pielTipo:["cabello dañado"],
      problemas:["cabello dañado","puntas abiertas","cabello teñido","calor","plancha","secador"],
      url:"https://www.justiberia.es/productos/cabellos/serum-spray-reparador-del-cabello"
    },
    {
      id:"champu-suave", nombre:"Champú Suave", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú de limpieza suave y frecuente. Apto para uso diario. No agrede el cuero cabelludo.",
      ingredientes:["Tensioactivos suaves","extractos calmantes"],
      uso:"Aplicar en cabello mojado, masajear y aclarar. Apto para uso diario.",
      pielTipo:["todos los tipos de cabello","cuero cabelludo sensible"],
      problemas:["uso diario","cuero cabelludo sensible","lavado frecuente"],
      url:"https://www.justiberia.es/productos/cabellos/champu-suave"
    },
    {
      id:"champu-voluminizador", nombre:"Champú Voluminizador", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú que aporta volumen y cuerpo al cabello fino o lacio. Cabello con más vida y movimiento.",
      ingredientes:["Activos voluminizadores","proteínas vegetales"],
      uso:"Aplicar en cabello mojado y aclarar bien.",
      pielTipo:["cabello fino"],
      problemas:["cabello fino","cabello sin volumen","cabello lacio","falta de cuerpo"],
      url:"https://www.justiberia.es/productos/cabellos/champu-voluminizador"
    },
    {
      id:"champu-iluminador", nombre:"Champú Iluminador", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú que aporta brillo y luminosidad al cabello apagado. Activa el reflejo natural.",
      ingredientes:["Extractos luminizadores","proteínas del brillo"],
      uso:"Aplicar en cabello mojado y aclarar.",
      pielTipo:["todos los tipos de cabello"],
      problemas:["cabello apagado","falta de brillo","cabello mate"],
      url:"https://www.justiberia.es/productos/cabellos/champu-iluminador"
    },
    {
      id:"champu-reparador", nombre:"Champú Reparador", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú que repara y fortalece el cabello dañado. Restaura la fibra capilar debilitada.",
      ingredientes:["Proteínas de queratina vegetal","activos reparadores"],
      uso:"Aplicar en cabello mojado, masajear y aclarar.",
      pielTipo:["cabello dañado","cabello teñido"],
      problemas:["cabello dañado","debilidad capilar","cabello roto","puntas","coloración"],
      url:"https://www.justiberia.es/productos/cabellos/champu-reparador"
    },
    {
      id:"champu-anticaspa", nombre:"Champú Anticaspa", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú específico para el control de la caspa y el cuero cabelludo con tendencia a descamación.",
      ingredientes:["Piroctona olamina","extractos antifúngicos naturales","zinc"],
      uso:"Aplicar en cabello mojado, dejar actuar unos minutos y aclarar.",
      pielTipo:["cuero cabelludo con caspa"],
      problemas:["caspa","cuero cabelludo graso","descamación","picor cuero cabelludo"],
      url:"https://www.justiberia.es/productos/cabellos/champu-anticaspa"
    },
    {
      id:"champu-purificante", nombre:"Champú Purificante", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú purificante para cuero cabelludo graso o con exceso de sebo. Regula la producción de grasa.",
      ingredientes:["Extractos purificantes","activos seborreguladores"],
      uso:"Aplicar en cabello mojado y aclarar. Puede alternarse con el champú suave.",
      pielTipo:["cuero cabelludo graso"],
      problemas:["cabello graso","cuero cabelludo graso","sebo","cabello sucio rápido"],
      url:"https://www.justiberia.es/productos/cabellos/champu-purificante"
    },
    {
      id:"champu-tea-tree", nombre:"Champú Tea Tree", familia:"cabello", subfamilia:"cabellos",
      desc:"Champú con aceite esencial de Tea Tree. Limpieza calmante de óptima tolerabilidad. Ideal para cuero cabelludo sensible, irritado o con tendencia a la descamación.",
      ingredientes:["Aceite esencial Tea Tree","extractos calmantes"],
      uso:"Aplicar en cabello mojado, masajear y aclarar.",
      pielTipo:["cuero cabelludo sensible","cuero cabelludo irritado"],
      problemas:["cuero cabelludo sensible","irritación cuero cabelludo","picor","caspa","dermatitis seborreica leve"],
      url:"https://www.justiberia.es/productos/cabellos/champu-tea-tree"
    },

    // ── BABY & KIDS ──
    {
      id:"baby-crema", nombre:"Baby & Kids Crema Protectora", familia:"baby", subfamilia:"baby & kids",
      desc:"Crema protectora específica para bebés y niños pequeños. Pieles especialmente frágiles y sensibles. Alta eficacia protectora y gran suavidad.",
      ingredientes:["Extractos vegetales protectores","ingredientes suaves hipoalergénicos"],
      uso:"Aplicar en cara y cuerpo del bebé o niño cuando sea necesario. Sin aclarado.",
      pielTipo:["piel bebé","piel niño","piel sensible"],
      problemas:["piel bebé","irritación bebé","pañal","protección bebé","piel sensible niño","eritema"],
      url:"https://www.justiberia.es/productos/baby-kids/baby-kids-crema-protectora"
    },
    {
      id:"baby-locion", nombre:"Baby & Kids Loción Baño, Ducha y Champú", familia:"baby", subfamilia:"baby & kids",
      desc:"Loción todo-en-uno para el baño, ducha y lavado de cabello del bebé. Limpieza suave desde el primer día. Sin lágrimas.",
      ingredientes:["Tensioactivos ultramild","extractos calmantes botánicos"],
      uso:"Usar en baño o ducha del bebé/niño. Enjuagar bien.",
      pielTipo:["piel bebé","piel niño"],
      problemas:["higiene bebé","baño bebé","champú bebé","limpieza suave","recién nacido"],
      url:"https://www.justiberia.es/productos/baby-kids/baby-kids-locion-bano-ducha-y-champu"
    }
  ],

  // ── RUTINAS RECOMENDADAS ──
  rutinas: {
    facial_basica: {
      nombre: "Rutina facial básica Just",
      pasos: [
        "1️⃣ LIMPIEZA: Gel Limpiador o Crema Limpiadora (según tipo de piel)",
        "2️⃣ PREPARACIÓN: Tónico Vital Just",
        "3️⃣ TRATAMIENTO: Sérum Vital Just (antiedad, antioxidante)",
        "4️⃣ HIDRATACIÓN: Hidrogel Ultrahidratante (mañana) o Crema 24H Rellenadora (noche)"
      ]
    },
    facial_completa: {
      nombre: "Rutina facial completa Just",
      pasos: [
        "1️⃣ LIMPIEZA: Gel Limpiador o Crema Limpiadora",
        "2️⃣ EXFOLIACIÓN (2x semana): Peeling Vital Just",
        "3️⃣ PREPARACIÓN: Tónico Vital Just",
        "4️⃣ TRATAMIENTO: Sérum Vital Just",
        "5️⃣ CONTORNO OJOS: Crema Contorno de Ojos",
        "6️⃣ HIDRATACIÓN: Crema Día Regenerante (mañana) / Crema Noche Regenerante (noche)",
        "7️⃣ SEMANAL: Gel Mascarilla (tratamiento intensivo)"
      ]
    },
    piernas: {
      nombre: "Rutina piernas cansadas",
      pasos: [
        "🌅 MAÑANA: Gel Vascular (masaje de abajo arriba en piernas)",
        "🌙 NOCHE: Crema Enebro o Bodyfresh según preferencia (frío/calor)",
        "💡 EXTRA: Pedibath (baño de pies) + Pedicream (hidratación talones)"
      ]
    },
    cabello_cuidado: {
      nombre: "Rutina capilar Just",
      pasos: [
        "🧴 CHAMPÚ: Elegir según necesidad (anticaspa, reparador, purificante, voluminizador...)",
        "💆 ACONDICIONADOR: Bálsamo Acondicionador (después del champú)",
        "✨ TRATAMIENTO: Sérum Spray Reparador (sin aclarado, sobre húmedo)",
        "💊 PREVENCIÓN CAÍDA: Loción Anticaída (aplicar en cuero cabelludo, sin aclarar)"
      ]
    }
  }
};

// ═══════════════════════════════════════════════════════════════
//  MOTOR CONVERSACIONAL EXPERTO
// ═══════════════════════════════════════════════════════════════

var JustBot = (function() {

  // Busca productos por keywords en problemas/desc/nombre
  function buscarProductos(texto) {
    var t = texto.toLowerCase()
      .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u');
    var resultados = [];
    JUST_KB.productos.forEach(function(p) {
      var score = 0;
      var haystack = [p.nombre, p.desc, p.subfamilia].concat(p.problemas).concat(p.ingredientes || [])
        .join(' ').toLowerCase()
        .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u');

      // Score por coincidencia de problemas (más peso)
      p.problemas.forEach(function(prob) {
        var pn = prob.toLowerCase().replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u');
        if (t.includes(pn)) score += 10;
      });
      // Score general en haystack
      var palabras = t.split(/\s+/);
      palabras.forEach(function(w) {
        if (w.length > 3 && haystack.includes(w)) score += 2;
      });

      if (score > 0) resultados.push({ producto: p, score: score });
    });
    resultados.sort(function(a,b) { return b.score - a.score; });
    return resultados.slice(0, 4); // máximo 4 recomendaciones
  }

  function linkProducto(p) {
    return '<a href="' + p.url + '" target="_blank" rel="noopener" style="color:var(--primary-dk);font-weight:700">' + p.nombre + '</a>';
  }

  function renderProducto(p) {
    return '<div style="margin:.6rem 0;padding:.7rem;background:#f7fbf5;border-radius:10px;border-left:3px solid var(--primary)">' +
      '<strong>' + linkProducto(p) + '</strong>' +
      '<p style="margin:.3rem 0 0;font-size:.86rem;color:var(--muted)">' + p.desc + '</p>' +
      (p.precio ? '<p style="margin:.2rem 0 0;font-size:.82rem;font-weight:600;color:var(--primary-dk)">' + p.precio + '</p>' : '') +
    '</div>';
  }

  function contactBlock() {
    return '<div style="margin-top:.8rem;padding:.8rem;background:#f0f6ec;border-radius:10px">' +
      '<strong>¿Quieres asesoramiento personalizado?</strong><br>' +
      '<a href="' + CONFIG.wa_link + '" target="_blank" rel="noopener" style="color:var(--primary-dk)">📱 WhatsApp: ' + CONFIG.telefono + '</a><br>' +
      '<a href="mailto:' + CONFIG.gmail + '" style="color:var(--primary-dk)">✉️ ' + CONFIG.gmail + '</a>' +
    '</div>';
  }

  // Detectores de intención
  var INTENCIONES = [
    {
      id: "saludo",
      test: /^(hola|buenas|buenos|hi|hey|saludos|ola|buenas tardes|buenas noches)/,
      respuesta: function() {
        return '<h4>¡Hola! 👋 Soy el asistente de Rodolfo, tu consultor Just Iberia en Girona</h4>' +
          '<p>Estoy aquí para orientarte sobre los productos de <strong>cosmética natural Just Iberia</strong> (fabricados en Suiza desde 1930).</p>' +
          '<p>Puedo ayudarte con:</p>' +
          '<ul>' +
            '<li>🦵 <strong>Piernas cansadas o pesadas</strong></li>' +
            '<li>💆 <strong>Relax y estrés</strong></li>' +
            '<li>🧴 <strong>Piel seca, sensible o con problemas</strong></li>' +
            '<li>✨ <strong>Rutina facial antiedad</strong></li>' +
            '<li>💇 <strong>Cuidado del cabello</strong></li>' +
            '<li>👶 <strong>Productos para bebés y niños</strong></li>' +
            '<li>💪 <strong>Músculos y articulaciones</strong></li>' +
          '</ul>' +
          '<p>¿Qué te preocupa hoy?</p>';
      }
    },
    {
      id: "marca",
      test: /que es just|quien es just|just iberia|historia just|origen just|suiza|donde se fabric/,
      respuesta: function() {
        return '<h4>Sobre Just Iberia 🇨🇭</h4>' +
          '<p><strong>Just Iberia</strong> es la filial española de Just, una empresa suiza fundada en <strong>1930</strong> con más de 90 años de experiencia en cosmética natural.</p>' +
          '<p>Su filosofía: <em>"Elegir la naturaleza, con la seguridad de la ciencia."</em> Todos los productos combinan <strong>ingredientes vegetales, minerales y marinos</strong> con tecnología suiza de extracción avanzada (destilación en vapor, maceración, infusión).</p>' +
          '<ul>' +
            '<li>✅ Sin ensayos en animales</li>' +
            '<li>✅ Probados dermatológicamente</li>' +
            '<li>✅ Normativa europea y suiza</li>' +
            '<li>✅ Probados de níquel</li>' +
          '</ul>' +
          '<p>Los productos se venden exclusivamente a través de <strong>consultores independientes</strong> como Rodolfo.</p>';
      }
    },
    {
      id: "piernas",
      test: /pierna|cansada|pesada|hinchad|varices|circulacion|edema|de pie todo|trabajo de pie|hinch/,
      respuesta: function(texto) {
        var r = buscarProductos(texto);
        var html = '<h4>🦵 Orientación para piernas cansadas y pesadas</h4>' +
          '<p>Just Iberia tiene productos específicos muy bien valorados para este problema:</p>';
        // Siempre mostrar Gel Vascular primero si no aparece
        var tieneGV = r.some(function(x) { return x.producto.id === 'gel-vascular'; });
        if (!tieneGV) {
          var gv = JUST_KB.productos.find(function(p) { return p.id === 'gel-vascular'; });
          html += renderProducto(gv);
        }
        r.forEach(function(item) { html += renderProducto(item.producto); });
        html += '<p style="margin-top:.8rem"><strong>💡 Consejo de uso:</strong> Aplica el Gel Vascular masajeando de abajo arriba (desde el tobillo hasta el muslo). Por la mañana es especialmente efectivo. En verano o si buscas frescor, combínalo con el Bodyfresh.</p>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "relax_estres",
      test: /relax|relajar|estres|estrés|nervios|ansiedad|no duermo|insomnio|descanso|dormir|tension|agobio|agobiado/,
      respuesta: function(texto) {
        var r = buscarProductos(texto);
        var html = '<h4>😌 Orientación para relax y estrés</h4>' +
          '<p>Just Iberia tiene una gama de aceites esenciales diseñados precisamente para esto:</p>';
        var siempre = ['relax-activador','oleo31','lavanda'];
        siempre.forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        html += '<p><strong>💡 Cómo usarlos:</strong></p>' +
          '<ul>' +
            '<li>En <strong>difusor</strong> para toda la habitación (30 min antes de dormir)</li>' +
            '<li>Unas gotas en la <strong>almohada</strong> (Lavanda)</li>' +
            '<li>Aplicar en <strong>muñecas e inhalar</strong> en momentos de tensión</li>' +
            '<li>Masaje en <strong>sienes y cuello</strong> diluido en aceite base</li>' +
          '</ul>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "piel_seca",
      test: /piel seca|piel muy seca|sequedad|piel aspera|piel tirante|piel descamad|hidratacion|piel sensible|piel delicada|piel atopic/,
      respuesta: function(texto) {
        var r = buscarProductos(texto);
        var html = '<h4>🧴 Orientación para piel seca o sensible</h4>' +
          '<p>Productos Just recomendados para hidratar y proteger:</p>';
        var siempre = ['crema-calendula','crema-lavanda'];
        siempre.forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        // Añadir otros relevantes sin duplicar
        var yaShown = siempre;
        r.slice(0,2).forEach(function(item) {
          if (!yaShown.includes(item.producto.id)) html += renderProducto(item.producto);
        });
        html += '<p><strong>💡 Consejo:</strong> Para piel muy seca, la <strong>Crema Caléndula</strong> es el clásico de Just — protege y nutre sin irritar. Para pieles sensibles, la Lavanda aporta calma adicional.</p>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "facial_antiedad",
      test: /facial|rostro|cara|antiedad|anti-edad|arrugas|arruga|manchas|firmeza|rejuven|rutina.*cara|crema.*cara|crema.*facial|serum|sérum|contorno|ojos|parpado/,
      respuesta: function(texto) {
        var esAntiedad = /antiedad|anti-edad|arrugas|arruga|manchas|firmeza|rejuven|serum|sérum/.test(texto.toLowerCase());
        var html = '<h4>✨ ' + (esAntiedad ? 'Rutina facial antiedad Just' : 'Rutina facial Just Iberia') + '</h4>' +
          '<p>La gama <strong>Vital Just</strong> es el sistema facial completo de Just Iberia:</p>';
        if (esAntiedad) {
          html += '<p><strong>Productos clave antiedad:</strong></p>';
          ['serum-vital','crema-24h','crema-dia','crema-noche','contorno-ojos'].forEach(function(id) {
            var p = JUST_KB.productos.find(function(p) { return p.id === id; });
            if (p) html += renderProducto(p);
          });
        } else {
          html += '<p><strong>Rutina básica (todos los tipos de piel):</strong></p>';
          JUST_KB.rutinas.facial_basica.pasos.forEach(function(paso) {
            html += '<p>' + paso + '</p>';
          });
        }
        html += '<p style="margin-top:.7rem">¿Quieres que te recomiende la rutina completa o según tu tipo de piel específico?</p>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "musculos_articulaciones",
      test: /muscul|articulacion|articulación|dolor.*espalda|contractura|golpe|moradon|deporte|post.*entreno|esguince|tendinitis|rodilla|hombro|cervical|lumbar/,
      respuesta: function(texto) {
        var r = buscarProductos(texto);
        var html = '<h4>💪 Orientación para músculos y articulaciones</h4>' +
          '<p>Just Iberia tiene productos específicos muy eficaces para el aparato locomotor:</p>';
        ['arnica-harpagofito','crema-gel-consuelda'].forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        html += '<p><strong>💡 Diferencia clave:</strong></p>' +
          '<ul>' +
            '<li><strong>Árnica + Harpagofito</strong>: ideal para golpes, contracturas puntuales y post-deporte</li>' +
            '<li><strong>Crema Gel Consuelda</strong>: más indicada para dolores articulares crónicos o tendinitis</li>' +
          '</ul>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "cabello",
      test: /cabello|pelo|cabell|champu|champú|cabellos|caspa|caida.*pelo|caida.*cabello|cabello.*cae|anticaida|cuero cabelludo|graso.*cabello|cabello.*graso|cabello.*seco|volumen|brillo.*cabello/,
      respuesta: function(texto) {
        var t = texto.toLowerCase();
        var html = '<h4>💇 Orientación capilar Just Iberia</h4>' +
          '<p>Gama de champús y tratamientos con ingredientes vegetales funcionales. Elige según tu necesidad:</p>';

        // Detectar necesidad específica y recomendar champú concreto
        if (/caspa|descamacion|descamación/.test(t)) {
          var p = JUST_KB.productos.find(function(p) { return p.id === 'champu-anticaspa'; });
          html += '<p>Para <strong>caspa</strong> te recomiendo:</p>' + renderProducto(p);
        } else if (/caida|anticaida|pelo.*cae/.test(t)) {
          var p1 = JUST_KB.productos.find(function(p) { return p.id === 'locion-anticaida'; });
          var p2 = JUST_KB.productos.find(function(p) { return p.id === 'champu-suave'; });
          html += '<p>Para <strong>caída del cabello</strong>:</p>' + renderProducto(p1) + renderProducto(p2);
        } else if (/graso|sebo/.test(t)) {
          var p = JUST_KB.productos.find(function(p) { return p.id === 'champu-purificante'; });
          html += '<p>Para <strong>cabello graso</strong>:</p>' + renderProducto(p);
        } else if (/seco|dañado|reseco|puntas/.test(t)) {
          ['champu-reparador','balsamo-acondicionador','serum-reparador'].forEach(function(id) {
            var p = JUST_KB.productos.find(function(p) { return p.id === id; });
            if (p) html += renderProducto(p);
          });
        } else if (/volumen|fino|lacio/.test(t)) {
          var p = JUST_KB.productos.find(function(p) { return p.id === 'champu-voluminizador'; });
          html += '<p>Para <strong>dar volumen</strong>:</p>' + renderProducto(p);
        } else if (/sensible|irritado|cuero cabelludo/.test(t)) {
          ['champu-tea-tree','champu-suave'].forEach(function(id) {
            var p = JUST_KB.productos.find(function(p) { return p.id === id; });
            if (p) html += renderProducto(p);
          });
        } else {
          // General
          var r = buscarProductos(texto);
          if (r.length) {
            r.slice(0,3).forEach(function(item) { html += renderProducto(item.producto); });
          } else {
            html += '<p>¿Puedes decirme más sobre tu necesidad? Por ejemplo: caspa, caída, cabello graso, seco, sin volumen...</p>';
          }
        }
        html += contactBlock();
        return html;
      }
    },
    {
      id: "baby",
      test: /bebe|bebé|niño|niña|baby|kid|recien nacido|recién nacido|pañal|lactante/,
      respuesta: function() {
        var html = '<h4>👶 Línea Baby & Kids de Just Iberia</h4>' +
          '<p>Diseñada con los últimos conocimientos cosmetológicos y botánicos para la piel frágil y sensible de los más pequeños:</p>';
        ['baby-crema','baby-locion'].forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        html += '<p><strong>✅ Garantías:</strong> Formulados sin ingredientes agresivos, testados dermatológicamente, alta tolerabilidad. Perfectos desde el primer día de vida.</p>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "acne_impurezas",
      test: /acne|acné|granos|grano|piel grasa|impurezas|espinillas|poros|poro dilatado/,
      respuesta: function() {
        var html = '<h4>🌿 Orientación para piel con acné e impurezas</h4>' +
          '<p>Just Iberia tiene varias opciones naturales para este tipo de piel:</p>';
        ['tea-tree-aceite','crema-tea-tree','gel-limpiador','tonico'].forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        html += '<p><strong>💡 Rutina sugerida:</strong></p>' +
          '<ol>' +
            '<li>Limpieza con <strong>Gel Limpiador</strong> mañana y noche</li>' +
            '<li>Tónico para equilibrar y refinar el poro</li>' +
            '<li>Aplicar <strong>Tea Tree</strong> (aceite) puntualmente en imperfecciones</li>' +
            '<li>Hidratación ligera con <strong>Hidrogel Ultrahidratante</strong></li>' +
          '</ol>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "pies",
      test: /pies|pie |tacones|talon|talones|durezas|hongos.*pie|pie.*hongo|mal.*olor.*pie|olor.*pie|cuidado.*pie/,
      respuesta: function() {
        var html = '<h4>🦶 Cuidado de pies con Just Iberia</h4>' +
          '<p>Línea específica para el cuidado completo del pie:</p>';
        ['pedibath','pedibon','pedicream'].forEach(function(id) {
          var p = JUST_KB.productos.find(function(p) { return p.id === id; });
          if (p) html += renderProducto(p);
        });
        html += '<p><strong>💡 Ritual completo:</strong> Baño con <strong>Pedibath</strong> → Loción con <strong>Pedibón</strong> → Hidratación profunda con <strong>Pedicream</strong> (por la noche, con calcetín).</p>';
        html += contactBlock();
        return html;
      }
    },
    {
      id: "hombre",
      test: /hombre|masculino|afeitado|aftershave|barba|chico/,
      respuesta: function() {
        return '<h4>🧔 Productos Just para hombre</h4>' +
          '<p>Just Iberia tiene una línea específica de hombre además de productos unisex muy valorados:</p>' +
          '<p>Para ver la gama masculina completa visita <a href="https://www.justiberia.es/productos/hombre" target="_blank" rel="noopener" style="color:var(--primary-dk)">justiberia.es/productos/hombre</a></p>' +
          '<p>Entre los productos unisex más usados por hombres:</p>' +
          '<ul>' +
            '<li><strong>Óleo 31</strong>: bienestar y tonicidad diaria</li>' +
            '<li><strong>Crema Gel Árnica + Harpagofito</strong>: post-deporte, contracturas</li>' +
            '<li><strong>Gel Vascular</strong>: para los que pasan mucho tiempo de pie</li>' +
          '</ul>' +
          contactBlock();
      }
    },
    {
      id: "catalogo",
      test: /catalogo|catálogo|ver.*producto|todos.*producto|que.*producto|que.*tiene|que.*vende/,
      respuesta: function() {
        switchScreen('catalogo');
        return '<h4>📖 Catálogo Just Iberia 2026</h4>' +
          '<p>Te he llevado a la sección del catálogo. Puedes también explorar por categorías aquí:</p>' +
          '<ul>' +
            '<li><a href="https://www.justiberia.es/productos/aceites-esenciales" target="_blank" rel="noopener" style="color:var(--primary-dk)">Aceites Esenciales</a></li>' +
            '<li><a href="https://www.justiberia.es/productos/cremas-dermoactivas" target="_blank" rel="noopener" style="color:var(--primary-dk)">Cremas Dermoactivas</a></li>' +
            '<li><a href="https://www.justiberia.es/productos/vital-just" target="_blank" rel="noopener" style="color:var(--primary-dk)">Vital Just (facial)</a></li>' +
            '<li><a href="https://www.justiberia.es/productos/cabellos" target="_blank" rel="noopener" style="color:var(--primary-dk)">Cabellos</a></li>' +
            '<li><a href="https://www.justiberia.es/productos/baby-kids" target="_blank" rel="noopener" style="color:var(--primary-dk)">Baby & Kids</a></li>' +
          '</ul>';
      }
    },
    {
      id: "precio",
      test: /precio|cuanto cuesta|cuánto cuesta|coste|tarifa|cuanto vale|cuánto vale/,
      respuesta: function() {
        return '<h4>💶 Sobre precios</h4>' +
          '<p>Los precios de Just Iberia varían según el producto. Como referencia:</p>' +
          '<ul>' +
            '<li><strong>Óleo 31</strong>: 29,50 € (50ml) / 39,50 € (75ml)</li>' +
            '<li>El resto de productos va desde aprox. 8€ hasta 35€ según tamaño y gama</li>' +
          '</ul>' +
          '<p>Para precios exactos y pedidos, contacta con Rodolfo directamente:</p>' +
          contactBlock();
      }
    },
    {
      id: "contacto",
      test: /contacto|contactar|como.*comprar|donde.*comprar|comprar|pedido|whatsapp|gmail|email|videollamada|llamar|rodolfo|consultor/,
      respuesta: function() {
        return '<h4>📞 Contactar con Rodolfo</h4>' +
          '<p>Rodolfo Stempellato es tu consultor Just Iberia en Girona y toda Cataluña:</p>' +
          contactBlock() +
          '<p style="margin-top:.6rem">También puedes <button onclick="switchScreen(\'consulta\')" style="background:var(--primary);color:#fff;border:none;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:.85rem">Solicitar una videollamada gratuita →</button></p>';
      }
    }
  ];

  // Función principal de respuesta
  function responder(textoUsuario) {
    var t = textoUsuario.toLowerCase()
      .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u');

    // Buscar intención
    for (var i = 0; i < INTENCIONES.length; i++) {
      if (INTENCIONES[i].test.test(t)) {
        return INTENCIONES[i].respuesta(textoUsuario);
      }
    }

    // Búsqueda semántica por KB si no hay intención clara
    var resultados = buscarProductos(textoUsuario);
    if (resultados.length > 0) {
      var html = '<h4>🌿 Productos Just Iberia que pueden ayudarte</h4>' +
        '<p>Según lo que me cuentas, estos son los productos más relevantes:</p>';
      resultados.forEach(function(item) { html += renderProducto(item.producto); });
      html += '<p>¿Quieres que te explique más sobre alguno de ellos?</p>';
      html += contactBlock();
      return html;
    }

    // Fallback
    return '<h4>Cuéntame más 😊</h4>' +
      '<p>No he encontrado una coincidencia exacta. Puedo ayudarte si me dices qué te preocupa, por ejemplo:</p>' +
      '<ul>' +
        '<li>¿Es un problema de piel? (seca, grasa, acné...)</li>' +
        '<li>¿Es para el cabello? (caída, caspa, volumen...)</li>' +
        '<li>¿Es para piernas o músculos?</li>' +
        '<li>¿Buscas relax o bienestar general?</li>' +
        '<li>¿Es para un bebé o niño?</li>' +
      '</ul>' +
      contactBlock();
  }

  return { responder: responder };

})();

