var CreationTableauLangages = function () {
    langages = ['Html', 'CSS', 'Java', 'PHP']
    return langages;
}

var CreationTableauNombres = function () {
    nombres = [0,1,2,3,4,5]
    return nombres
}

var RemplacementElement = function (langages) {
    langages[2] = 'Javascript'
    return langages;
}

var AjoutElementLangages = function (langages) {
  langages[4] = 'Ruby';
  langages[5] = 'Python';
  return langages;
}

var AjoutElementNombres = function (nombres) {
  nombres.unshift(-2, -1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  langages.shift();
  return langages;
}

var SuppressionDernierElement = function (langages) {
  langages.pop();
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_chaine = reseaux_sociaux_chaine.split(',');
  return reseaux_chaine;
}

var ConversionTableauChaine = function (langages) {
  
  return langages.toString(",");
}

var TriTableau = function (reseaux_sociaux) {

  return reseaux_sociaux.sort();
}

var InversionTableau = function (reseaux_sociaux){


  return reseaux_sociaux.reverse();
}
