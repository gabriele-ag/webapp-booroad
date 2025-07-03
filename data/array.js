const viaggi = [
  {
    id: "V001",
    Immagine: "https://example.com/roma.jpg",
    Destinazione: "Roma, Italia",
    Descrizione: "Tour storico alla scoperta dei monumenti della Roma antica.",
    partenza: "2025-08-15",
    ritorno: "2025-08-20",
    Nome_Coordinatore: "Laura Bianchi",
    partecipanti: [
      {
        Nome: "Giulia",
        Cognome: "Rossi",
        Email: "giulia.rossi@email.com",
        Telefono: "+39 345 678 9012",
        Immagine: "https://example.com/giulia.jpg",
        indirizzo: "Via delle Rose 12, Milano"
      },
      {
        Nome: "Luca",
        Cognome: "Ferrari",
        Email: "luca.ferrari@email.com",
        Telefono: "+39 333 444 5566",
        Immagine: "https://example.com/luca.jpg",
        indirizzo: "Via Roma 45, Torino"
      }
    ]
  },
  {
    id: "V002",
    Immagine: "https://example.com/parigi.jpg",
    Destinazione: "Parigi, Francia",
    Descrizione: "Viaggio romantico tra arte, cultura e gastronomia.",
    partenza: "2025-09-10",
    ritorno: "2025-09-16",
    Nome_Coordinatore: "Marco Verdi",
    partecipanti: [
      {
        Nome: "Elena",
        Cognome: "Conti",
        Email: "elena.conti@email.com",
        Telefono: "+39 392 112 3344",
        Immagine: "https://example.com/elena.jpg",
        indirizzo: "Corso Francia 18, Napoli"
      },
      {
        Nome: "Francesco",
        Cognome: "Bianchi",
        Email: "francesco.bianchi@email.com",
        Telefono: "+39 366 789 1234",
        Immagine: "https://example.com/francesco.jpg",
        indirizzo: "Via Verdi 23, Firenze"
      }
    ]
  },
  {
    id: "V003",
    Immagine: "https://example.com/londra.jpg",
    Destinazione: "Londra, Regno Unito",
    Descrizione: "Esplora la capitale britannica tra musei, pub e storia.",
    partenza: "2025-10-01",
    ritorno: "2025-10-07",
    Nome_Coordinatore: "Chiara Neri",
    partecipanti: [
      {
        Nome: "Matteo",
        Cognome: "Russo",
        Email: "matteo.russo@email.com",
        Telefono: "+39 348 123 4567",
        Immagine: "https://example.com/matteo.jpg",
        indirizzo: "Via Garibaldi 8, Bologna"
      }
    ]
  },
  {
    id: "V004",
    Immagine: "https://example.com/berlino.jpg",
    Destinazione: "Berlino, Germania",
    Descrizione: "Città moderna ricca di storia, cultura e innovazione.",
    partenza: "2025-07-20",
    ritorno: "2025-07-25",
    Nome_Coordinatore: "Davide Romano",
    partecipanti: [
      {
        Nome: "Sara",
        Cognome: "Esposito",
        Email: "sara.esposito@email.com",
        Telefono: "+39 349 987 6543",
        Immagine: "https://example.com/sara.jpg",
        indirizzo: "Via Dante 14, Genova"
      }
    ]
  },
  {
    id: "V005",
    Immagine: "https://example.com/amsterdam.jpg",
    Destinazione: "Amsterdam, Paesi Bassi",
    Descrizione: "Canali pittoreschi, biciclette e arte ovunque.",
    partenza: "2025-09-05",
    ritorno: "2025-09-10",
    Nome_Coordinatore: "Martina Gallo",
    partecipanti: [
      {
        Nome: "Andrea",
        Cognome: "Costa",
        Email: "andrea.costa@email.com",
        Telefono: "+39 350 444 3322",
        Immagine: "https://example.com/andrea.jpg",
        indirizzo: "Viale Europa 99, Venezia"
      }
    ]
  },
  {
    id: "V006",
    Immagine: "https://example.com/madrid.jpg",
    Destinazione: "Madrid, Spagna",
    Descrizione: "Tapas, arte e passione nella capitale spagnola.",
    partenza: "2025-08-01",
    ritorno: "2025-08-06",
    Nome_Coordinatore: "Federico Leone",
    partecipanti: [
      {
        Nome: "Anna",
        Cognome: "Marino",
        Email: "anna.marino@email.com",
        Telefono: "+39 351 222 3344",
        Immagine: "https://example.com/anna.jpg",
        indirizzo: "Via della Libertà 21, Bari"
      }
    ]
  },
  {
    id: "V007",
    Immagine: "https://example.com/dublino.jpg",
    Destinazione: "Dublino, Irlanda",
    Descrizione: "Verde, birra e folklore irlandese.",
    partenza: "2025-10-12",
    ritorno: "2025-10-18",
    Nome_Coordinatore: "Simona Greco",
    partecipanti: [
      {
        Nome: "Paolo",
        Cognome: "Galli",
        Email: "paolo.galli@email.com",
        Telefono: "+39 357 444 1111",
        Immagine: "https://example.com/paolo.jpg",
        indirizzo: "Via delle Colline 3, Lecce"
      }
    ]
  },
  {
    id: "V008",
    Immagine: "https://example.com/newyork.jpg",
    Destinazione: "New York, USA",
    Descrizione: "La città che non dorme mai tra skyline e grattacieli.",
    partenza: "2025-11-01",
    ritorno: "2025-11-10",
    Nome_Coordinatore: "Alessia Fontana",
    partecipanti: [
      {
        Nome: "Giorgia",
        Cognome: "De Luca",
        Email: "giorgia.deluca@email.com",
        Telefono: "+39 347 777 8888",
        Immagine: "https://example.com/giorgia.jpg",
        indirizzo: "Via Milano 30, Verona"
      },
      {
        Nome: "Davide",
        Cognome: "Vitale",
        Email: "davide.vitale@email.com",
        Telefono: "+39 391 666 5555",
        Immagine: "https://example.com/davide.jpg",
        indirizzo: "Via Trento 4, Reggio Emilia"
      }
    ]
  },
  {
    id: "V009",
    Immagine: "https://example.com/tokyo.jpg",
    Destinazione: "Tokyo, Giappone",
    Descrizione: "Tradizione e modernità si incontrano nella metropoli asiatica.",
    partenza: "2025-12-01",
    ritorno: "2025-12-12",
    Nome_Coordinatore: "Lorenzo Barone",
    partecipanti: [
      {
        Nome: "Valentina",
        Cognome: "Rinaldi",
        Email: "valentina.rinaldi@email.com",
        Telefono: "+39 392 888 9999",
        Immagine: "https://example.com/valentina.jpg",
        indirizzo: "Via Giappone 1, Roma"
      }
    ]
  },
  {
    id: "V010",
    Immagine: "https://example.com/cairo.jpg",
    Destinazione: "Il Cairo, Egitto",
    Descrizione: "Misteri antichi e piramidi in un viaggio unico.",
    partenza: "2025-11-15",
    ritorno: "2025-11-22",
    Nome_Coordinatore: "Gabriele Ferri",
    partecipanti: [
      {
        Nome: "Nicola",
        Cognome: "Serra",
        Email: "nicola.serra@email.com",
        Telefono: "+39 393 123 4567",
        Immagine: "https://example.com/nicola.jpg",
        indirizzo: "Via delle Piramidi 10, Palermo"
      }
    ]
  }
]

export default viaggi