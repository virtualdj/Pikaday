function itDate() {
  // Calendario in lingua italiana
  return {
    previousMonth : 'Mese precedente',
    today         : 'Oggi',
    nextMonth     : 'Mese successivo',
    months        : ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
    weekdays      : ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
    weekdaysShort : ['Do','Lu','Ma','Me','Gi','Ve','Sa']
  };
}

function disabilitaDomenicheFestivi(date) {
  // Disabilita le domeniche
  if(date.getDay()==0) return true;

  // Trova mese e giorno
  var d = date.getDate();
  var m = date.getMonth() + 1;

  // Festività fisse
  var festivita = [[1, 1], [6, 1], [25, 4], [1, 5],
                 [2, 6], [15, 8], [1, 11], [8, 12],
                 [25, 12], [26, 12]];
  //return festivita.some(f => ((m == f[1]) && (d == f[0]))); // Lambda non supportata in IE10
  
  return festivita.some(function (f) {
      return ((m == f[1]) && (d == f[0]));
    });
}

function pdDateToString(date, format) {
  // Restituisce la data in formato 'DD/MM/YYYY'
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return ((day < 10) ? '0' : '') + day + '/' + ((month < 10) ? '0' : '') + month + '/' + year;
}

function pdStringToDate(dateString, format) {
  // Restituisce una data a partire dalla stringa 'DD/MM/YYYY'
  // dateString e' il risultato del metodo `toString`
  var parts = dateString.split('/');
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}