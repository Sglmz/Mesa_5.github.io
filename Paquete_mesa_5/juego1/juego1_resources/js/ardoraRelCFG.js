//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=1;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades, acertaste!"; messageTime="se acabó el tiempo"; messageError="Lo siento, suerte a la proxima"; messageErrorG="Lo siento, suerte a la proxima"; messageAttempts="Vuelve a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="anVlZ28x"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>","<p>símbolo</p>"];
var iL=["<div  align='center'><img alt='' src='juego1_resources/media/b1.png'></div>","<div  align='center'><img alt='' src='juego1_resources/media/suma.jpg'></div>","<div  align='center'><img alt='' src='juego1_resources/media/n.enteros.jpg'></div>","<div  align='center'><img alt='' src='juego1_resources/media/n.natural.jpg'></div>","<div  align='center'><img alt='' src='juego1_resources/media/n.real.jpg'></div>","<div  align='center'><img alt='' src='juego1_resources/media/vectores.png'></div>","<div  align='center'><img alt='' src='juego1_resources/media/320-double-vertical-bars.png'></div>","<div  align='center'><img alt='' src='juego1_resources/media/raiz.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>número reales</p>","<p>valor absoluto</p>","<p>mas o menos</p>","<p>números enteros</p>","<p>vectores</p>","<p>sumatorio</p>","<p>números naturales</p>","<p>raiz cuadrada</p>"]; ansRL=["Mg==","NQ==","Mw==","Ng==","MA==","NA==","MQ==","Nw=="];
var iR=["","","","","","","",""];
var auR=[5,7,1,3,6,2,4,8];
colorText="#FFFFFF";colorButton="#355379";colorBack="#788CA5";colorSele="#D7DDE4";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
