$(document).ready(function(){

// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare attraverso il for..in tutte le proprietà:

var studente = {
  'nome': 'Giuseppe',
  'cognome': 'Amato',
  'eta' : '62',
  };

  for (var key in studente) {
    console.log(studente[key]);
  };

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome:

var aula = [

  {
    'nome': 'Francesco',
    'cognome': 'Amato',
    'eta' : '33',
  },

  {
    'nome': 'Paolo',
    'cognome': 'Amato',
    'eta' : '28',
  },

  {
    'nome': 'Teresa',
    'cognome' : 'Lovisi',
    'eta' : '59',
  },

];

for (var i = 0; i < aula.length; i++) {
  console.log(aula[i].nome + ' ' + aula[i].cognome);
};

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente all'array creato al punto 2 inserendo nell’ordine: nome, cognome e età:

var matricola = {
  'nome' : prompt('inserisci il nome della nuova matricola'),
  'cognome': prompt('inserisci il cognome della nuova matricola'),
  'eta': prompt('inserisci età nuova matricola'),
};

console.log(matricola);

console.log(aula);

aula.push(matricola);






});
