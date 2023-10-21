## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,391,522|96|
|Using dot notation|595,081,085|94|
|Using define property (writable)|2,960,802|96|
|Using define property initialized (writable)|4,229,116|97|
|Using define property (getter)|1,559,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591391522.358185,"samples":7},{"name":"Using dot notation","opsSec":595081084.7213998,"samples":9},{"name":"Using define property (writable)","opsSec":2960801.7061163685,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4229115.713580088,"samples":6},{"name":"Using define property (getter)","opsSec":1559280.2059705523,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.038ms
new Array(length)|100|0.011ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.551ms
new Array(length)|10,000|0.293ms
array.push|1,000,000|39.341ms
new Array(length)|1,000,000|24.377ms
array.push|100,000,000|2,333.09ms
new Array(length)|100,000,000|5,700.097ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.023ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.772ms
new Array(length)|10,000|5.154ms
array.push|1,000,000|429.277ms
new Array(length)|1,000,000|5.4ms
array.push|100,000,000|3,191.383ms
new Array(length)|100,000,000|6,436.286ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|387|83|
|Array.from|15|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Array","hz":387.3666919375766,"cycles":3,"stats":{"deviation":0.00023610649817287215,"mean":0.0025815332624446402,"moe":0.000050795467899376874,"rme":1.9676472365602982,"sem":0.00002591605505070249,"variance":5.5746278479456486e-8}},{"name":"Array.from","hz":15.474386518001756,"cycles":1,"stats":{"deviation":0.001690360125859162,"mean":0.0646229172857143,"moe":0.0005112233309223275,"rme":0.7910867419712414,"sem":0.000260828230062412,"variance":0.0000028573173550946023}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,379|87|
|new Blob (1024)|411|68|
|text (128)|29,294|62|
|text (1024)|21,095|80|
|arrayBuffer (128)|29,675|65|
|arrayBuffer (1024)|21,788|87|
|slice (0, 64)|62,991|77|
|slice (0, 512)|34,630|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Blob (128)","hz":3379.4802934033382,"cycles":3,"stats":{"deviation":0.000026454574349272245,"mean":0.00029590348609280997,"moe":0.000005559007029676022,"rme":1.878655470768074,"sem":0.000002836228076365317,"variance":6.99844504001173e-10}},{"name":"new Blob (1024)","hz":410.72012913110734,"cycles":2,"stats":{"deviation":0.0004152159877713554,"mean":0.002434747968441514,"moe":0.00009869057573681999,"rme":4.053420601065003,"sem":0.000050352334559602036,"variance":1.7240431650094235e-7}},{"name":"text (128)","hz":29293.60020903577,"cycles":4,"stats":{"deviation":0.0000028672216499818233,"mean":0.00003413714916787676,"moe":7.137095268233591e-7,"rme":2.090712154414357,"sem":3.641375136853873e-7,"variance":8.22095999012449e-12}},{"name":"text (1024)","hz":21094.801343228068,"cycles":4,"stats":{"deviation":0.0000018309657203248349,"mean":0.00004740504467092428,"moe":4.012280538815835e-7,"rme":0.8463826089962011,"sem":2.0470819075590995e-7,"variance":3.3524354690046418e-12}},{"name":"arrayBuffer (128)","hz":29674.747595303255,"cycles":5,"stats":{"deviation":0.000002707692095683197,"mean":0.000033698685954729875,"moe":6.582618260572315e-7,"rme":1.9533753539871763,"sem":3.35847870437363e-7,"variance":7.331596485025263e-12}},{"name":"arrayBuffer (1024)","hz":21788.22100412383,"cycles":4,"stats":{"deviation":0.000002208322705311177,"mean":0.00004589635839524169,"moe":4.6404380885288035e-7,"rme":1.011068906288195,"sem":2.3675704533310223e-7,"variance":4.876689170792874e-12}},{"name":"slice (0, 64)","hz":62990.868597119865,"cycles":4,"stats":{"deviation":0.0000036528438820661017,"mean":0.000015875316887529363,"moe":8.159091812539367e-7,"rme":5.139482802355038,"sem":4.1628019451731466e-7,"variance":1.3343268426747748e-11}},{"name":"slice (0, 512)","hz":34629.90971243806,"cycles":4,"stats":{"deviation":0.000012396345640646026,"mean":0.000028876771793627552,"moe":0.000002768881602593844,"rme":9.58861199022556,"sem":0.000001412694695200941,"variance":1.5366938524236374e-10}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,273|56|
|[True conditional] Using constructor name|146,734|93|
|[True conditional] Check if property is valid then instanceof |147,608|92|
|[False conditional] Using instanceof only|710,974,986|98|
|[False conditional] Using constructor name|711,841,869|97|
|[False conditional] Check if property is valid then instanceof |713,065,857|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":184272.5943633215,"cycles":4,"stats":{"deviation":0.0000011764076378405378,"mean":0.0000054267429373048695,"moe":3.0812000295883324e-7,"rme":5.677807232045849,"sem":1.5720408314226185e-7,"variance":1.3839349303695538e-12}},{"name":"[True conditional] Using constructor name","hz":146734.00783500823,"cycles":3,"stats":{"deviation":2.2368767502594483e-7,"mean":0.00000681505272536703,"moe":4.546284948685857e-8,"rme":0.6670946112806506,"sem":2.319533137084621e-8,"variance":5.00361759585127e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":147608.2613658252,"cycles":3,"stats":{"deviation":2.0127942703370273e-7,"mean":0.000006774688562462288,"moe":4.1130268553882737e-8,"rme":0.6071167430748104,"sem":2.098483089483813e-8,"variance":4.051340774701566e-14}},{"name":"[False conditional] Using instanceof only","hz":710974986.1541065,"cycles":9,"stats":{"deviation":1.3464662772632666e-11,"mean":1.4065192439600769e-9,"moe":2.6658672188172133e-12,"rme":0.18953649089872546,"sem":1.3601363361312314e-12,"variance":1.8129714358072002e-22}},{"name":"[False conditional] Using constructor name","hz":711841869.1926676,"cycles":6,"stats":{"deviation":9.859949554456344e-12,"mean":1.4048063808527387e-9,"moe":1.9622073458315243e-12,"rme":0.13967813448002955,"sem":1.0011261968528185e-12,"variance":9.721860521642385e-23}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":713065857.3402686,"cycles":9,"stats":{"deviation":9.911199987403026e-12,"mean":1.4023950098101655e-9,"moe":2.0363930894605596e-12,"rme":0.14520823842179922,"sem":1.038976066051306e-12,"variance":9.823188519029773e-23}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,719|87|
|crypto.verify('RSA-SHA256')|3,870|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":3718.7966387190654,"cycles":3,"stats":{"deviation":0.000042605206529797045,"mean":0.0002689041905621515,"moe":0.000008952804890109901,"rme":3.3293660732448314,"sem":0.0000045677575969948474,"variance":1.8152036234466605e-9}},{"name":"crypto.verify('RSA-SHA256')","hz":3869.611190294007,"cycles":4,"stats":{"deviation":0.000003957894305418326,"mean":0.0002584238960514329,"moe":8.087724517542525e-7,"rme":0.31296349297097753,"sem":4.126390059970676e-7,"variance":1.5664927332862808e-11}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,656,540|95|
|fromUnixToISOString(new Date())|1,362,030|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1656539.5781087338,"cycles":5,"stats":{"deviation":9.90712406994517e-9,"mean":6.036680398193063e-7,"moe":1.9922409861283603e-9,"rme":0.33002260426520014,"sem":1.0164494827185511e-9,"variance":9.815110733728695e-17}},{"name":"fromUnixToISOString(new Date())","hz":1362029.576764631,"cycles":7,"stats":{"deviation":1.505818234481476e-8,"mean":7.341984469789583e-7,"moe":3.044140523294276e-9,"rme":0.4146209428554566,"sem":1.5531329200481001e-9,"variance":2.2674885552969095e-16}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,220|90|
|Intl.DateTimeFormat().format(new Date())|8,605|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,072|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,655|84|
|Reusing Intl.DateTimeFormat()|411,910|96|
|Date.toLocaleDateString()|416,440|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,140|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":9219.98006823209,"cycles":6,"stats":{"deviation":0.000017141847110252578,"mean":0.00010846010431687926,"moe":0.0000035415423044905426,"rme":3.2652949458203544,"sem":0.0000018069093390257872,"variance":2.9384292235127466e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8604.914452456791,"cycles":6,"stats":{"deviation":0.0000045552084754205675,"mean":0.00011621266027978813,"moe":0.0000010174638001554026,"rme":0.8755188958808832,"sem":5.191141837527564e-7,"variance":2.074992425454337e-11}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8071.594244074925,"cycles":5,"stats":{"deviation":0.00021962829689800415,"mean":0.00012389126234065408,"moe":0.0000507315483051635,"rme":40.94844732929667,"sem":0.00002588344301283852,"variance":4.823658879831786e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":11655.013136565349,"cycles":4,"stats":{"deviation":0.000008963223486317721,"mean":0.00008579998909333645,"moe":0.0000019168170045199904,"rme":2.234052736807233,"sem":9.779678594489747e-7,"variance":8.033937526567762e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":411909.73544675513,"cycles":6,"stats":{"deviation":7.974474004097964e-8,"mean":0.000002427716351290909,"moe":1.5952270359655404e-8,"rme":0.6570895463620771,"sem":8.138913448803777e-9,"variance":6.359223564203421e-15}},{"name":"Date.toLocaleDateString()","hz":416439.58605155523,"cycles":7,"stats":{"deviation":3.985461121233467e-8,"mean":0.0000024013086975746825,"moe":7.931380424837728e-9,"rme":0.33029407809368316,"sem":4.046622665733535e-9,"variance":1.5883900348863525e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10140.21076479013,"cycles":5,"stats":{"deviation":0.00006344653060066338,"mean":0.00009861727958084476,"moe":0.000013903334025241181,"rme":14.098273734922353,"sem":0.000007093537767980194,"variance":4.025462245260916e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|567,586|88|
|Using brackets {}|591,682|94|
|Using '' + |600,729|88|
|Using date.toString()|650,196|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":567586.4903983873,"cycles":4,"stats":{"deviation":2.3145622144543608e-7,"mean":0.0000017618460215607015,"moe":4.835969957278718e-8,"rme":2.7448312157238663,"sem":2.4673316108564888e-8,"variance":5.357198244579874e-14}},{"name":"Using brackets {}","hz":591681.7635169401,"cycles":3,"stats":{"deviation":9.141339981341943e-8,"mean":0.0000016900977208694547,"moe":1.848000166102084e-8,"rme":1.0934279972588792,"sem":9.428572276031041e-9,"variance":8.35640966544807e-15}},{"name":"Using '' + ","hz":600728.6669391219,"cycles":5,"stats":{"deviation":4.928821775571911e-8,"mean":0.000001664645046981486,"moe":1.0298117666742418e-8,"rme":0.6186374497924393,"sem":5.254141666705315e-9,"variance":2.4293284095351845e-15}},{"name":"Using date.toString()","hz":650196.4858647827,"cycles":3,"stats":{"deviation":5.510604463819193e-8,"mean":0.0000015379966236974769,"moe":1.1322298877163803e-8,"rme":0.7361718941842679,"sem":5.776683100593777e-9,"variance":3.036676155666402e-15}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,370,939|94|
|Using delete property (proto: null)|17,253,987|91|
|Using delete property (cached proto: null)|2,390,184|93|
|Using undefined assignment|590,896,100|98|
|Using undefined assignment (proto: null)|19,124,828|94|
|Using undefined property (cached proto: null)|595,033,980|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2370939.2646672605,"cycles":6,"stats":{"deviation":1.6760103120213115e-8,"mean":4.217737733321232e-7,"moe":3.3881983837445157e-9,"rme":0.8033212584502023,"sem":1.7286726447676101e-9,"variance":2.8090105660017737e-16}},{"name":"Using delete property (proto: null)","hz":17253987.254074972,"cycles":6,"stats":{"deviation":6.717792094223642e-10,"mean":5.7957617869679626e-8,"moe":1.3802632793705046e-10,"rme":0.23815045029526405,"sem":7.042159588625024e-11,"variance":4.512873062121367e-19}},{"name":"Using delete property (cached proto: null)","hz":2390184.343150913,"cycles":6,"stats":{"deviation":6.628534605941402e-9,"mean":4.183777719344141e-7,"moe":1.3472001578692009e-9,"rme":0.3220056724429402,"sem":6.873470193210209e-10,"variance":4.393747102216273e-17}},{"name":"Using undefined assignment","hz":590896100.4046123,"cycles":6,"stats":{"deviation":7.869206792655838e-12,"mean":1.6923448967005474e-9,"moe":1.5580234559809319e-12,"rme":0.09206299844780498,"sem":7.949099265208836e-13,"variance":6.192441554558078e-23}},{"name":"Using undefined assignment (proto: null)","hz":19124828.23118458,"cycles":6,"stats":{"deviation":6.630087212185249e-10,"mean":5.228805131799402e-8,"moe":1.3403289117785331e-10,"rme":0.25633560211054995,"sem":6.838412815196598e-11,"variance":4.395805644118237e-19}},{"name":"Using undefined property (cached proto: null)","hz":595033979.7718706,"cycles":9,"stats":{"deviation":9.929285524242374e-12,"mean":1.6805762931108385e-9,"moe":1.9966974719108527e-12,"rme":0.11881028431115476,"sem":1.0187231999545167e-12,"variance":9.859071102192914e-23}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|146,199|58|
|NodeError|115,689|89|
|NodeError Range|116,170|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":146198.7589374847,"cycles":3,"stats":{"deviation":0.00000132171011540719,"mean":0.00000684000334385605,"moe":3.401561194363115e-7,"rme":4.973040250657956,"sem":1.7354904052873035e-7,"variance":1.7469176291696879e-12}},{"name":"NodeError","hz":115689.20079039673,"cycles":3,"stats":{"deviation":2.980964865387445e-7,"mean":0.000008643849150723922,"moe":6.193240217860908e-8,"rme":0.7164910111072709,"sem":3.159816437684137e-8,"variance":8.88615152867439e-14}},{"name":"NodeError Range","hz":116170.26237812656,"cycles":3,"stats":{"deviation":2.8608827474625765e-7,"mean":0.000008608054931864282,"moe":5.9106449924325327e-8,"rme":0.6866411795948473,"sem":3.01563520022068e-8,"variance":8.18465009472902e-14}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,348,630|95|
|Function returning explicitly undefined|1,359,675|93|
|Function returning implicitly undefined|1,378,238|94|
|Function returning string|1,370,178|95|
|Function returning integer|1,379,127|94|
|Function returning float|1,349,901|94|
|Function returning functions|1,349,349|95|
|Function returning arrow functions|1,356,732|97|
|Function returning empty object|1,377,357|94|
|Function returning empty array|1,349,931|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1348630.3805796222,"cycles":6,"stats":{"deviation":2.449766440072456e-8,"mean":7.414930097972538e-7,"moe":4.926278376950945e-9,"rme":0.6643728682348516,"sem":2.5134073351790533e-9,"variance":6.001355610905275e-16}},{"name":"Function returning explicitly undefined","hz":1359675.1978095965,"cycles":6,"stats":{"deviation":3.4095850197544214e-9,"mean":7.354697663169671e-7,"moe":6.929726930541163e-10,"rme":0.09422177835050044,"sem":3.535574964561818e-10,"variance":1.162527000693376e-17}},{"name":"Function returning implicitly undefined","hz":1378237.971459044,"cycles":6,"stats":{"deviation":1.1047198516393975e-8,"mean":7.255641048268103e-7,"moe":2.2332857912436837e-9,"rme":0.30779992786120003,"sem":1.1394315261447366e-9,"variance":1.2204059506061725e-16}},{"name":"Function returning string","hz":1370177.5372684458,"cycles":5,"stats":{"deviation":4.566615629616799e-9,"mean":7.298324288643477e-7,"moe":9.183087605429884e-10,"rme":0.1258246035972831,"sem":4.685248778280553e-10,"variance":2.085397830866044e-17}},{"name":"Function returning integer","hz":1379126.9575395496,"cycles":5,"stats":{"deviation":1.174838068233439e-8,"mean":7.250964057609777e-7,"moe":2.3750357711996295e-9,"rme":0.3275475857182143,"sem":1.2117529444896069e-9,"variance":1.3802444865704784e-16}},{"name":"Function returning float","hz":1349900.936413915,"cycles":6,"stats":{"deviation":5.864119785517504e-9,"mean":7.407951006068299e-7,"moe":1.185482036528305e-9,"rme":0.1600283311211434,"sem":6.048377737389312e-10,"variance":3.4387900858897855e-17}},{"name":"Function returning functions","hz":1349349.2288148494,"cycles":6,"stats":{"deviation":4.123428286784767e-9,"mean":7.410979890493677e-7,"moe":8.291874390888822e-10,"rme":0.11188634314775431,"sem":4.230548158616746e-10,"variance":1.7002660836256763e-17}},{"name":"Function returning arrow functions","hz":1356731.6652769158,"cycles":7,"stats":{"deviation":1.7795563161300374e-8,"mean":7.370654239104052e-7,"moe":3.54145673519501e-9,"rme":0.48048064938472757,"sem":1.8068656812219438e-9,"variance":3.1668206822783095e-16}},{"name":"Function returning empty object","hz":1377357.4810688295,"cycles":5,"stats":{"deviation":1.2069247866375145e-8,"mean":7.260279293825739e-7,"moe":2.439901820445615e-9,"rme":0.33606170254642237,"sem":1.2448478675742934e-9,"variance":1.45666744060001e-16}},{"name":"Function returning empty array","hz":1349931.3194749572,"cycles":5,"stats":{"deviation":6.650633913958749e-9,"mean":7.407784274454351e-7,"moe":1.3235283454881392e-9,"rme":0.17866723657873107,"sem":6.752695640245608e-10,"variance":4.4230931457498267e-17}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,041,473|94|
|using Array.includes (first item)|591,495,583|94|
|Using raw comparison|592,777,154|93|
|Using raw comparison (first item)|592,101,230|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":585041473.3482649,"cycles":7,"stats":{"deviation":1.4003586369556463e-10,"mean":1.7092805306209763e-9,"moe":2.8309449150545933e-11,"rme":1.6562201840713178,"sem":1.4443596505380578e-11,"variance":1.9610043120962755e-20}},{"name":"using Array.includes (first item)","hz":591495583.4627279,"cycles":6,"stats":{"deviation":1.3537945280608635e-11,"mean":1.690629698612134e-9,"moe":2.7368115810493067e-12,"rme":0.16188119629603107,"sem":1.3963324393108708e-12,"variance":1.8327596242075363e-22}},{"name":"Using raw comparison","hz":592777153.6320626,"cycles":7,"stats":{"deviation":1.1584755839951157e-11,"mean":1.6869745972374319e-9,"moe":2.3545151114500064e-12,"rme":0.13957027659490134,"sem":1.2012832201275543e-12,"variance":1.3420656787128243e-22}},{"name":"Using raw comparison (first item)","hz":592101229.8973625,"cycles":8,"stats":{"deviation":1.0548075129657405e-11,"mean":1.6889003932205048e-9,"moe":2.1323837239890738e-12,"rme":0.12625870255870483,"sem":1.0879508795862622e-12,"variance":1.1126188894089706e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,618,611|93|
|Using Object.getOwnPropertyNames()|51,549,946|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":50618611.19395194,"cycles":6,"stats":{"deviation":4.6394567781190304e-10,"mean":1.9755579546984545e-8,"moe":9.429349434650211e-11,"rme":0.47730057284446964,"sem":4.810892568699087e-11,"variance":2.1524559196034614e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":51549946.385838084,"cycles":6,"stats":{"deviation":1.1919849471206322e-9,"mean":1.9398662270475655e-8,"moe":2.3844665029112157e-10,"rme":1.229191203839,"sem":1.2165645423016407e-10,"variance":1.4208281141621762e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,563,411|95|
|Length = 10_000 - Array.at|15,631,139|96|
|Length = 1_000_000 - Array.at|15,558,015|95|
|Length = 100 - Array[length - 1]|709,240,018|93|
|Length = 10_000 - Array[length - 1]|708,409,889|94|
|Length = 1_000_000 - Array[length - 1]|708,281,698|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15563411.477707516,"cycles":6,"stats":{"deviation":7.868671617398159e-10,"mean":6.425326487270255e-8,"moe":1.5823250008670078e-10,"rme":0.2462637507995714,"sem":8.073086739117387e-11,"variance":6.191599302244735e-19}},{"name":"Length = 10_000 - Array.at","hz":15631138.902434135,"cycles":8,"stats":{"deviation":5.431911974724731e-10,"mean":6.397486493094093e-8,"moe":1.0866087010394632e-10,"rme":0.16984931538541376,"sem":5.543921944078894e-11,"variance":2.9505667701157925e-19}},{"name":"Length = 1_000_000 - Array.at","hz":15558014.99875026,"cycles":6,"stats":{"deviation":6.774432164467265e-10,"mean":6.427555186701695e-8,"moe":1.3622824666889065e-10,"rme":0.21194411049280507,"sem":6.950420748412789e-11,"variance":4.589293115096864e-19}},{"name":"Length = 100 - Array[length - 1]","hz":709240017.8557194,"cycles":6,"stats":{"deviation":1.1268716897446176e-11,"mean":1.4099599216402787e-9,"moe":2.2902825565118615e-12,"rme":0.16243600412751152,"sem":1.1685115084244192e-12,"variance":1.26983980514789e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":708409888.9902258,"cycles":7,"stats":{"deviation":8.886742960305808e-12,"mean":1.4116121408545122e-9,"moe":1.796531197862834e-12,"rme":0.12726804664454877,"sem":9.165975499300174e-13,"variance":7.897420044254484e-23}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":708281698.481973,"cycles":7,"stats":{"deviation":8.713338437445196e-12,"mean":1.4118676257529356e-9,"moe":1.7251529948494503e-12,"rme":0.12218942933332312,"sem":8.801800994129848e-13,"variance":7.592226672545989e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,406,822|84|
|Object.create({})|767,640|63|
|Cached Empty.prototype|661,523,887|89|
|Empty.prototype|871,263|68|
|Empty class|614,109|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Object.create(null)","hz":38406821.90711072,"cycles":5,"stats":{"deviation":2.2646552809932723e-9,"mean":2.6037041086569513e-8,"moe":4.843045315795474e-10,"rme":1.8600597893182358,"sem":2.470941487650752e-10,"variance":5.128663541730717e-18}},{"name":"Object.create({})","hz":767640.4903061095,"cycles":4,"stats":{"deviation":2.3410837057851065e-7,"mean":0.0000013026931390776863,"moe":5.780996931633369e-8,"rme":4.437727319057154,"sem":2.9494882304251885e-8,"variance":5.480672917492527e-14}},{"name":"Cached Empty.prototype","hz":661523887.1377531,"cycles":6,"stats":{"deviation":7.482792705667014e-11,"mean":1.511661210491956e-9,"moe":1.5546219032886816e-11,"rme":1.0284195244930208,"sem":7.93174440453409e-12,"variance":5.599218667598347e-21}},{"name":"Empty.prototype","hz":871262.7150294174,"cycles":3,"stats":{"deviation":1.517561929727367e-7,"mean":0.0000011477594332339079,"moe":3.6070157453461515e-8,"rme":3.142658331444146,"sem":1.8403141557888528e-8,"variance":2.3029942105578495e-14}},{"name":"Empty class","hz":614109.4851681658,"cycles":3,"stats":{"deviation":2.0246250724177752e-7,"mean":0.000001628374132221982,"moe":4.676645319018585e-8,"rme":2.8719722491766153,"sem":2.386043530111523e-8,"variance":4.099106683862682e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|708,824,891|98|
|Using optional chain (obj.field?.field2) (undefined)|710,886,034|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|709,159,421|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|708,392,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":708824890.6343275,"cycles":9,"stats":{"deviation":1.8385907650719465e-11,"mean":1.4107856724741985e-9,"moe":3.64022399386614e-12,"rme":0.25802813743366215,"sem":1.8572571397276225e-12,"variance":3.380416001407845e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":710886034.129177,"cycles":7,"stats":{"deviation":1.6322288483367044e-11,"mean":1.4066952394485884e-9,"moe":3.2482635114871074e-12,"rme":0.2309145165487584,"sem":1.6572773017791365e-12,"variance":2.6641710133425647e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":709159420.9559479,"cycles":10,"stats":{"deviation":1.4663767188473556e-11,"mean":1.4101201654375522e-9,"moe":2.918204757120848e-12,"rme":0.20694723957907132,"sem":1.4888799781228817e-12,"variance":2.150260681577536e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":708392505.3114617,"cycles":6,"stats":{"deviation":1.395615369861044e-11,"mean":1.4116467812718122e-9,"moe":2.806467468336904e-12,"rme":0.19880805209702945,"sem":1.431871157314747e-12,"variance":1.9477422605923788e-22}}]}-->
