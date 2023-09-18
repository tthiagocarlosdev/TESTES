// Array de strings no formato dado
const strings = [
    "19ª DESEC - ARCOVERDE",
   "156ª	ARCOVERDE",
   "157ª	BUÍQUE",
   "158ª	SERTANIA",
   "159ª	CUSTÓDIA",
   "160ª	ITAÍBA",
   "161ª	IBIMIRIM",
   "162ª	TUPANATINGA",
   "163ª	PEDRA",
   "164ª	VENTUROSA",
   "166ª	MANARI",
   "20ª DESEC - AFOGADOS DA INGAZEIRA",
   "167ª	AFOGADOS DA INGAZEIRA",
   "168ª	SÃO JOSÉ DO EGITO",
   "169ª	TABIRA",
   "170ª	ITAPETIM",
   "171ª	IGUARACI",
   "172ª	SANTA TEREZINHA",
   "173ª	TUPARETAMA",
   "174ª	BREJINHO",
   "175ª	SOLIDÃO",
   "176ª	INGAZEIRA",
   "177ª	SERRA TALHADA",
   "178ª	SÃO J.DO BELMONTE",
   "179ª	FLORES",
   "181ª	TRIUNFO",
   "182ª	BETÂNIA",
   "183ª	STª CRUZ DA BAIXA VERDE",
   "184ª	CALUMBI",
   "180ª	CARNAÍBA",
   "185ª	QUIXABA",
   "21ª DESEC - SERRA TALHADA",
   "177ª	SERRA TALHADA",
   "178ª	SÃO J.DO BELMONTE",
   "179ª	FLORES",
   "181ª	TRIUNFO",
   "182ª	BETÂNIA",
   "183ª	STª CRUZ DA BAIXA VERDE",
   "184ª	CALUMBI",
   "22ª DESEC - FLORESTA",
   "165ª	INAJÁ",
   "186ª	PETROLÂNDIA",
   "187ª	FLORESTA",
   "188ª	BELÉM DO S. FRANCISCO",
   "189ª	TACARATU",
   "190ª	JATOBÁ",
   "191ª	CARNAUBEIRA DA PENHA",
   "192ª	ITACURUBA",
   "23ª DESEC-SALGUEIRO",
   "193ª	SALGUEIRO",
   "194ª	PARNAMIRIM",
   "195ª	SERRITA",
   "196ª	MIRANDIBA",
   "197ª	CEDRO",
   "198ª	VERDEJANTE",
   "199ª	TERRA NOVA",
   "24ª DESEC - ARARIPINA",
   "200ª	ARARIPINA",
   "201ª	OURICURI",
   "202ª	EXU",
   "203ª	BODOCÓ",
   "204ª	IPUBI",
   "205ª	TRINDADE",
   "206ª	SANTA FILOMENA",
   "207ª	STª CRUZ DE MALTA",
   "208ª	MOREILANDIA",
   "209ª	GRANITO",
   "25ª DESEC - CABROBÓ",
   "201ª	STª Mª DA BOA VISTA",
   "211ª	CABROBÓ",
   "212ª	OROCÓ",
   "215ª	LAGOA GRANDE",
   "26ª DESEC - PETROLINA",
   "213ª	PETROLINA",
   "214ª	PETROLINA",
   "216ª	AFRÂNIO",
   "217ª	DORMENTES",
   ];
   
   // Função para formatar as strings
   function formatarStrings(array) {
     return array.map(str => {
       const match = str.match(/^(\d+ª)\s*(DESEC\s*-)?\s*(.*)$/i);
       if (match && match.length === 4) {
         const numero = match[1];
         const cidade = match[3]
           .trim()
           .toLowerCase() // Converte toda a cidade para minúsculas
           .replace(/(^|\s)\S/g, l => l.toUpperCase()); // Capitaliza a primeira letra de cada palavra
   
         if (/DESEC/i.test(str)) {
           return `${numero} Delegacia Seccional de Polícia - ${cidade}`;
         } else {
           return `Delegacia de Polícia da ${numero} Circ. - ${cidade}`;
         }
       } else {
         return str; // Mantém a string original se não corresponder ao formato esperado
       }
     });
   }
   
   // Formata as strings
   const stringsFormatadas = formatarStrings(strings);
   
   // Exibe as strings formatadas
   stringsFormatadas.forEach(str => console.log(str));