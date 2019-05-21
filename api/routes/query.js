const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/clases', (req, res, next) => {

  console.log('Llega aquí');

  let url = 'http://172.24.101.52:9000/repositories/repo1?query=';

  let consultaBuena = 'PREFIX%20rdf:%20%3Chttp:%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX%20:%20%3Chttp:%2F%2Fwww.1.semanticweb.uniandes.edu.co%2Fcurso%2Facademicpapers%2F%3E%0APREFIX%20owl:%20%3Chttp:%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0Aselect%20%3Fs%20where%20%7B%20%0A%09%3Fs%20rdf:type%20owl:Class%0A%7D%20%0A';

  

  let finalUrl2 = url + consultaBuena;
  console.log(finalUrl2);

  fetch(finalUrl2, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    //console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});

router.get('/propiedades', (req, res, next) => {

  console.log('Llega aquí');

  let url = 'http://172.24.101.52:9000/repositories/repo1?query=';

  let consultaBuena = 'PREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0APREFIX+%3A+%3Chttp%3A%2F%2Fwww.1.semanticweb.uniandes.edu.co%2Fcurso%2Facademicpapers%2F%3E%0APREFIX+owl%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0Aselect+%3Fs+where+%7B+%0A++++%7B%3Fs+rdf%3Atype+owl%3ADatatypeProperty%7D%0A++++union%0A++++%7B%3Fs+rdf%3Atype+owl%3AObjectProperty%7D%0A%7D+%0A';

  

  let finalUrl2 = url + consultaBuena;
  console.log(finalUrl2);

  fetch(finalUrl2, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    //console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});

router.get('/instancias/:idClase', (req, res, next) => {

  const uriClaseEncoded = req.params.idClase;
  const uriClaseDecoded = decodeURIComponent(uriClaseEncoded);

  let url = 'http://172.24.101.52:9000/repositories/repo1?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.1.semanticweb.uniandes.edu.co/curso/articles/> SELECT ?instancia WHERE{ ?instancia rdf:type <' + uriClaseDecoded + '>. } LIMIT 10000';

  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    //console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});

router.get('/instancia/:idInstancia', (req, res, next) => {

  const uriInstanciaEncoded = req.params.idInstancia;
  const uriInstanciaDecoded = decodeURIComponent(uriInstanciaEncoded);

  let url = 'http://172.24.101.52:9000/repositories/repo1?query= ';

  let consulta = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX : <http://www.1.semanticweb.uniandes.edu.co/curso/articles/> SELECT * WHERE{ <' + uriInstanciaDecoded + '> ?propiedad ?objeto. } LIMIT 10000';

  let consultaEncoded = encodeURIComponent(consulta);

  let finalUrl = url + consultaEncoded;
  console.log(finalUrl);

  fetch(finalUrl, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },

  }).then((response) => {
    console.log('Respuestaaaaaaaaaaaaaa');
    //console.log(response);
    
    return response.json();
  
  }).then((json) => {
    console.log('Jsoooooooooooooooooon');
    console.log(json);
    
    res.status(200).json(json);

  })
    .catch((error) => console.log(error));

});


module.exports = router;