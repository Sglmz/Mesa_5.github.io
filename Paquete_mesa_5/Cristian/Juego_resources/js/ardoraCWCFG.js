//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=30;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#23A373"; colorText="#000000"; colorSele="#24DB72";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Bien echo lo has adivinado "; messageTime="60 "; messageError="Hmmmm lee bien el texto y analiza "; messageErrorG="Hmmmm lee bien el texto y analiza "; messageAttempts="30"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF80"; borderTime="#008080";borderError="#FF0000"; borderAttempts="#008080";
var wordsGame="SnVlZ28="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Qw==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Qw==","Tw==","TQ==","SQ==","TA==","TA==","QQ=="],["Og==","Og==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","Ug==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Qw==","Tw==","TQ==","QQ==","Og==","Og==","Qw==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Vg==","Og==","Og==","SA==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","UA==","QQ==","Ug==","RQ==","Tg==","VA==","RQ==","Uw==","SQ==","Uw==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Uw==","Og==","Og==","VA==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Rw==","Og==","UA==","Og==","Og==","Og==","Uw==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","VQ==","Og==","VQ==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","SQ==","Og==","Tg==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Tw==","Og==","VA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","UA==","VQ==","Tg==","VA==","Tw==","WQ==","Qw==","Tw==","TQ==","QQ==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="]];
var x1=[9,10,7,4,4,2,4,6];
var y1=[2,1,2,6,4,13,9,9];
var x2=[15,10,7,13,7,11,4,6];
var y2=[2,9,7,6,4,13,13,13];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["Señalan una palabra que no pertenese a nuestro lenguaje","Indica que se ha omitido un fragmento textual en relacion con el original","Se usa para crear mapas sinopticos y para encerrar incisos aclaratorios o explicativos","Encierrasn las acotaciones propias de un texto teatral","Ocupa una pequeña pausa en un texto","Hace una pausa mas grande que la coma pero menor que el punto","Sirve para señalar que hay una conversacion o dialogo en un texto","Sirve para separar parrafos o para hacer una pausa mayor la la del pnto y coma"];
var altCW=["","","","","","","",""];
var colNum=15;
var rowNum=15;
colorText="#FFFFFF";colorButton="#355379";colorBack="#788CA5";colorSele="#D7DDE4";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
