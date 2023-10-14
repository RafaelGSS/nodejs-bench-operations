## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,415,419|98|
|Using dot notation|692,099,009|95|
|Using define property (writable)|2,895,914|97|
|Using define property initialized (writable)|3,757,907|94|
|Using define property (getter)|1,467,545|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":709415418.5290136,"cycles":6,"stats":{"deviation":1.4221881236257237e-11,"mean":1.4096113135989052e-9,"moe":2.8157888257484193e-12,"rme":0.1997564008307635,"sem":1.436626951912459e-12,"variance":2.0226190589820568e-22}},{"name":"Using dot notation","hz":692099008.5991714,"cycles":8,"stats":{"deviation":1.750311486220987e-10,"mean":1.444879977539672e-9,"moe":3.519732120766702e-11,"rme":2.436003111317293,"sem":1.7957816942687255e-11,"variance":3.0635902987971205e-20}},{"name":"Using define property (writable)","hz":2895913.7449732716,"cycles":6,"stats":{"deviation":1.2487502046104143e-9,"mean":3.4531415230712603e-7,"moe":2.4851109136635725e-10,"rme":0.07196666852661425,"sem":1.2679137314610064e-10,"variance":1.5593770735145517e-18}},{"name":"Using define property initialized (writable)","hz":3757907.362115976,"cycles":5,"stats":{"deviation":3.5149234504359357e-9,"mean":2.6610554855107634e-7,"moe":7.105718782475665e-10,"rme":0.2670263292579107,"sem":3.625366725752891e-10,"variance":1.2354686862424464e-17}},{"name":"Using define property (getter)","hz":1467544.8155282142,"cycles":4,"stats":{"deviation":5.327223640637791e-8,"mean":6.814101957357053e-7,"moe":1.1194311152383536e-8,"rme":1.6428153295090127,"sem":5.711383241012008e-9,"variance":2.8379311717370162e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.039ms
new Array(length)|100|0.012ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.039ms
array.push|10,000|0.558ms
new Array(length)|10,000|0.29ms
array.push|1,000,000|52.22ms
new Array(length)|1,000,000|11.807ms
array.push|100,000,000|2,252.955ms
new Array(length)|100,000,000|5,399.832ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.021ms
new Array(length)|100|0.014ms
array.push|1,000|0.079ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.886ms
new Array(length)|10,000|5.144ms
array.push|1,000,000|385.784ms
new Array(length)|1,000,000|5.162ms
array.push|100,000,000|3,180.148ms
new Array(length)|100,000,000|6,430.024ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|288|80|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","hz":287.7648088889986,"cycles":2,"stats":{"deviation":0.00026303337701460847,"mean":0.0034750600806985285,"moe":0.00005763973011288753,"rme":1.6586685920348536,"sem":0.00002940802556779976,"variance":6.918655742370916e-8}},{"name":"Array.from","hz":15.711484729771406,"cycles":1,"stats":{"deviation":0.0015009537387548648,"mean":0.06364770848837209,"moe":0.00044863086661916954,"rme":0.7048657010191195,"sem":0.00022889329929549467,"variance":0.000002252862125882207}}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,359|86|
|new Blob (1024)|415|69|
|text (128)|31,048|71|
|text (1024)|20,822|80|
|arrayBuffer (128)|31,570|74|
|arrayBuffer (1024)|21,488|80|
|slice (0, 64)|64,423|78|
|slice (0, 512)|32,798|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:34:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Blob (128)","hz":3359.1387767940055,"cycles":4,"stats":{"deviation":0.000028179213278262868,"mean":0.00029769535182896185,"moe":0.0000059557397203930306,"rme":2.0006156239264516,"sem":0.0000030386427144862403,"variance":7.940680609818263e-10}},{"name":"new Blob (1024)","hz":415.44656707662824,"cycles":2,"stats":{"deviation":0.00032193383841593726,"mean":0.0024070484130767943,"moe":0.00007596230835876241,"rme":3.1558280234864107,"sem":0.00003875627977487878,"variance":1.036413963172188e-7}},{"name":"text (128)","hz":31048.12601222486,"cycles":4,"stats":{"deviation":0.0000032193531920589756,"mean":0.000032208063044006614,"moe":7.488511866383515e-7,"rme":2.3250426007151654,"sem":3.8206693195834257e-7,"variance":1.0364234975220314e-11}},{"name":"text (1024)","hz":20822.160921623545,"cycles":4,"stats":{"deviation":0.000003205925928274617,"mean":0.00004802575504838756,"moe":7.025294940322135e-7,"rme":1.4628182176925515,"sem":3.5843341532255794e-7,"variance":1.0277961057583464e-11}},{"name":"arrayBuffer (128)","hz":31569.691912746617,"cycles":6,"stats":{"deviation":0.00000182384368443913,"mean":0.000031675950552949135,"moe":4.1555434263759755e-7,"rme":1.31189225700729,"sem":2.120175217538763e-7,"variance":3.3264057852685003e-12}},{"name":"arrayBuffer (1024)","hz":21488.227428472816,"cycles":4,"stats":{"deviation":0.000002530940811966886,"mean":0.00004653710983507916,"moe":5.546168588534741e-7,"rme":1.1917733198708658,"sem":2.829677851293235e-7,"variance":6.405661393679602e-12}},{"name":"slice (0, 64)","hz":64423.150975645396,"cycles":3,"stats":{"deviation":0.000003597586208928092,"mean":0.000015522370217160617,"moe":7.983989915740215e-7,"rme":5.143537877297622,"sem":4.0734642427245996e-7,"variance":1.2942626530669602e-11}},{"name":"slice (0, 512)","hz":32798.243685815636,"cycles":3,"stats":{"deviation":0.000012788179022239597,"mean":0.000030489437470472644,"moe":0.0000028751332857501156,"rme":9.429932213523209,"sem":0.00000146690473762761,"variance":1.6353752270484891e-10}}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,831|54|
|[True conditional] Using constructor name|131,008|94|
|[True conditional] Check if property is valid then instanceof |131,458|93|
|[False conditional] Using instanceof only|593,451,559|96|
|[False conditional] Using constructor name|593,230,398|96|
|[False conditional] Check if property is valid then instanceof |592,691,519|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":167830.80529707723,"cycles":4,"stats":{"deviation":0.0000012470919961925688,"mean":0.000005958381706087273,"moe":3.326271413245646e-7,"rme":5.582508099216639,"sem":1.6970772516559418e-7,"variance":1.5552384469675662e-12}},{"name":"[True conditional] Using constructor name","hz":131008.01417682931,"cycles":3,"stats":{"deviation":2.9404654968468367e-7,"mean":0.000007633120815420044,"moe":5.944402831183942e-8,"rme":0.7787644103805302,"sem":3.032858587338746e-8,"variance":8.646337338146716e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":131458.16221343543,"cycles":3,"stats":{"deviation":2.663708184777077e-7,"mean":0.000007606982960680678,"moe":5.413787964284914e-8,"rme":0.7116866163981107,"sem":2.7621367164718948e-8,"variance":7.095341293648391e-14}},{"name":"[False conditional] Using instanceof only","hz":593451558.5971967,"cycles":6,"stats":{"deviation":9.878723866000566e-12,"mean":1.6850575005040078e-9,"moe":1.9761563438270547e-12,"rme":0.11727530622759033,"sem":1.0082430325648239e-12,"variance":9.758918522068915e-23}},{"name":"[False conditional] Using constructor name","hz":593230397.7710047,"cycles":6,"stats":{"deviation":1.298952493511404e-11,"mean":1.6856857028186445e-9,"moe":2.598446160862034e-12,"rme":0.15414772495947243,"sem":1.3257378371745072e-12,"variance":1.6872775803994944e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":592691519.0691139,"cycles":5,"stats":{"deviation":2.118001361560294e-11,"mean":1.6872183384209851e-9,"moe":4.2817211436799454e-12,"rme":0.253773980887801,"sem":2.1845516039183393e-12,"variance":4.4859297675712595e-22}}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,563|90|
|crypto.verify('RSA-SHA256')|4,768|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:40:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","hz":4563.414230702299,"cycles":2,"stats":{"deviation":0.000026022399130805235,"mean":0.00021913417223272809,"moe":0.000005376283360441589,"rme":2.4534207995327124,"sem":0.000002743001714511015,"variance":6.771652565229331e-10}},{"name":"crypto.verify('RSA-SHA256')","hz":4767.852628315437,"cycles":3,"stats":{"deviation":0.0000029266642532783046,"mean":0.00020973802631003654,"moe":5.885280568662606e-7,"rme":0.28060150427671776,"sem":3.002694167685003e-7,"variance":8.565363651417057e-12}}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,206,550|87|
|fromUnixToISOString(new Date())|997,933|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:42:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"new Date().toISOString()","hz":1206549.7543266083,"cycles":6,"stats":{"deviation":5.344942599125016e-8,"mean":8.288095840341979e-7,"moe":1.1231544718680446e-8,"rme":1.3551417521032207,"sem":5.730379958510431e-9,"variance":2.8568411387941278e-15}},{"name":"fromUnixToISOString(new Date())","hz":997932.5914203875,"cycles":6,"stats":{"deviation":5.9408369719685395e-8,"mean":0.0000010020716916126268,"moe":1.2629735144720317e-8,"rme":1.2603624321923887,"sem":6.443742420775672e-9,"variance":3.529354392750832e-15}}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,123|81|
|Intl.DateTimeFormat().format(new Date())|9,881|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,731|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,492|86|
|Reusing Intl.DateTimeFormat()|380,379|95|
|Date.toLocaleDateString()|463,088|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,395|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":10123.04153055097,"cycles":3,"stats":{"deviation":0.000011735420526098644,"mean":0.00009878453990157369,"moe":0.0000025557138034614828,"rme":2.587159697264297,"sem":0.0000013039356140109605,"variance":1.3772009492437737e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":9880.759695491915,"cycles":4,"stats":{"deviation":0.000010089470023916462,"mean":0.00010120679288013135,"moe":0.0000022391187381751028,"rme":2.212419418158127,"sem":0.0000011424075194770933,"variance":1.0179740536350884e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":9730.83213884513,"cycles":3,"stats":{"deviation":0.00014445560010920247,"mean":0.00010276613405014318,"moe":0.000032058496657616194,"rme":31.19558495989908,"sem":0.00001635637584572255,"variance":2.0867420402909815e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":11491.88132215141,"cycles":5,"stats":{"deviation":0.000010769504184022306,"mean":0.0000870179539769898,"moe":0.0000022761587842907503,"rme":2.615734661944173,"sem":0.0000011613055021891584,"variance":1.1598222036967394e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":380378.8167243656,"cycles":5,"stats":{"deviation":0.0000039893910704221,"mean":0.0000026289581754617826,"moe":8.022336597459594e-7,"rme":30.515269023062537,"sem":4.093028876254895e-7,"variance":1.591524111276359e-11}},{"name":"Date.toLocaleDateString()","hz":463087.66594120034,"cycles":3,"stats":{"deviation":9.538848826508791e-8,"mean":0.0000021594183424590993,"moe":1.9283599835243374e-8,"rme":0.8929997238646971,"sem":9.838571344511926e-9,"variance":9.098963693498815e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":11394.997872793681,"cycles":4,"stats":{"deviation":0.0000343193889961965,"mean":0.00008775780488626214,"moe":0.00000729602235166143,"rme":8.313815917703714,"sem":0.0000037224603835007294,"variance":1.1778204610722537e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|644,539|94|
|Using brackets {}|665,946|97|
|Using '' + |660,561|97|
|Using date.toString()|702,245|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","hz":644538.940090355,"cycles":6,"stats":{"deviation":1.941628477541916e-7,"mean":0.0000015514966401561626,"moe":3.925168253592579e-8,"rme":2.529923785846871,"sem":2.0026368640778464e-8,"variance":3.7699211448017385e-14}},{"name":"Using brackets {}","hz":665945.7004342015,"cycles":3,"stats":{"deviation":1.0857526688747741e-8,"mean":0.0000015016239302213269,"moe":2.1607330249061646e-9,"rme":0.14389308677224466,"sem":1.1024148086255942e-9,"variance":1.1788588579686948e-16}},{"name":"Using '' + ","hz":660561.1682225094,"cycles":6,"stats":{"deviation":8.689487196904858e-9,"mean":0.0000015138643446009392,"moe":1.7292761504615857e-9,"rme":0.1142292674128229,"sem":8.822837502355029e-10,"variance":7.550718774517345e-17}},{"name":"Using date.toString()","hz":702244.6644008401,"cycles":3,"stats":{"deviation":1.644922589066162e-8,"mean":0.0000014240051234183556,"moe":3.3253518893551687e-9,"rme":0.23352106215549198,"sem":1.6966081068138616e-9,"variance":2.7057703240201257e-16}}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,294,566|95|
|Using delete property (proto: null)|11,203,591|93|
|Using delete property (cached proto: null)|2,297,487|96|
|Using undefined assignment|709,978,429|97|
|Using undefined assignment (proto: null)|13,383,272|94|
|Using undefined property (cached proto: null)|706,016,536|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2294566.3238617526,"cycles":6,"stats":{"deviation":2.325125778379787e-8,"mean":4.3581220102498543e-7,"moe":4.6756362804058985e-9,"rme":1.07285575516456,"sem":2.3855287144928054e-9,"variance":5.406209885286211e-16}},{"name":"Using delete property (proto: null)","hz":11203591.424247188,"cycles":7,"stats":{"deviation":1.4443281043793776e-9,"mean":8.925709284933102e-8,"moe":2.935489012142637e-10,"rme":0.328880195224131,"sem":1.497698475582978e-10,"variance":2.0860836731001263e-18}},{"name":"Using delete property (cached proto: null)","hz":2297487.4271520292,"cycles":6,"stats":{"deviation":1.4583302469083408e-8,"mean":4.352580946393262e-7,"moe":2.91726806813716e-9,"rme":0.6702386708177214,"sem":1.4884020755801836e-9,"variance":2.126727109047742e-16}},{"name":"Using undefined assignment","hz":709978428.9415733,"cycles":7,"stats":{"deviation":1.126658256264904e-11,"mean":1.4084934967542424e-9,"moe":2.242138354232813e-12,"rme":0.15918698662078576,"sem":1.1439481399147005e-12,"variance":1.269358826409874e-22}},{"name":"Using undefined assignment (proto: null)","hz":13383271.627174323,"cycles":6,"stats":{"deviation":1.4242484524698486e-9,"mean":7.472014525727257e-8,"moe":2.8792402231040736e-10,"rme":0.38533653985687816,"sem":1.469000113828609e-10,"variance":2.0284836543627585e-18}},{"name":"Using undefined property (cached proto: null)","hz":706016536.4404961,"cycles":9,"stats":{"deviation":2.042241532609618e-11,"mean":1.4163974190203422e-9,"moe":4.043431942281392e-12,"rme":0.28547298152223766,"sem":2.0629754807558123e-12,"variance":4.1707504775156804e-22}}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|181,979|59|
|NodeError|138,670|89|
|NodeError Range|142,797|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:53:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Error","hz":181978.86544636983,"cycles":4,"stats":{"deviation":0.000001068512691768758,"mean":0.000005495143612128439,"moe":2.7265266727270415e-7,"rme":4.961702305121327,"sem":1.3910850371056334e-7,"variance":1.1417193724709166e-12}},{"name":"NodeError","hz":138670.45107948364,"cycles":3,"stats":{"deviation":9.350790224930584e-7,"mean":0.000007211341653650614,"moe":1.9427162917028802e-7,"rme":2.693973444899001,"sem":9.911817814810613e-8,"variance":8.743727783065735e-13}},{"name":"NodeError Range","hz":142796.70960174917,"cycles":3,"stats":{"deviation":3.660734064248518e-7,"mean":0.000007002962482741623,"moe":7.440168608084599e-8,"rme":1.062431596116707,"sem":3.796004391879898e-8,"variance":1.3400973889149472e-13}}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,450,173|91|
|Function returning explicitly undefined|1,448,794|91|
|Function returning implicitly undefined|1,482,957|91|
|Function returning string|1,424,356|89|
|Function returning integer|1,451,627|86|
|Function returning float|1,429,319|85|
|Function returning functions|1,423,102|91|
|Function returning arrow functions|1,330,269|88|
|Function returning empty object|1,418,782|91|
|Function returning empty array|1,390,542|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1450172.8290742391,"cycles":6,"stats":{"deviation":4.052021591622116e-8,"mean":6.895729805104539e-7,"moe":8.325438673431865e-9,"rme":1.2073324954334768,"sem":4.247672792567278e-9,"variance":1.6418878978971825e-15}},{"name":"Function returning explicitly undefined","hz":1448794.0559414302,"cycles":6,"stats":{"deviation":4.713434693752688e-8,"mean":6.902292260925915e-7,"moe":9.684403351946324e-9,"rme":1.4030706011639096,"sem":4.941022118339961e-9,"variance":2.2216466612271496e-15}},{"name":"Function returning implicitly undefined","hz":1482957.188009763,"cycles":7,"stats":{"deviation":5.066766362725891e-8,"mean":6.743283002944092e-7,"moe":1.0410372124546108e-8,"rme":1.5438136171952117,"sem":5.3114143492582184e-9,"variance":2.5672121374450552e-15}},{"name":"Function returning string","hz":1424355.5088058985,"cycles":6,"stats":{"deviation":5.989341691817223e-8,"mean":7.020719152048952e-7,"moe":1.2443431412081527e-8,"rme":1.7723870080246684,"sem":6.348689495959963e-9,"variance":3.587221390134e-15}},{"name":"Function returning integer","hz":1451627.3552932492,"cycles":5,"stats":{"deviation":6.159555079591456e-8,"mean":6.888820304698555e-7,"moe":1.3018357356260783e-8,"rme":1.8897803659331258,"sem":6.642019059316726e-9,"variance":3.79401187785209e-15}},{"name":"Function returning float","hz":1429318.6747250592,"cycles":6,"stats":{"deviation":5.826158469147705e-8,"mean":6.996340408078401e-7,"moe":1.2385937995555277e-8,"rme":1.7703452481033826,"sem":6.3193561201812635e-9,"variance":3.3944122507621527e-15}},{"name":"Function returning functions","hz":1423101.9077506994,"cycles":6,"stats":{"deviation":3.6597731183350034e-8,"mean":7.026903657100438e-7,"moe":7.519509944954427e-9,"rme":1.0701028948015001,"sem":3.836484665793075e-9,"variance":1.3393939277687514e-15}},{"name":"Function returning arrow functions","hz":1330268.8603705075,"cycles":4,"stats":{"deviation":9.433324545617566e-8,"mean":7.517277369940685e-7,"moe":1.9709677197258156e-8,"rme":2.6219169823467183,"sem":1.0055957753703142e-8,"variance":8.898761198295085e-15}},{"name":"Function returning empty object","hz":1418781.5733193888,"cycles":6,"stats":{"deviation":4.2596428786170325e-8,"mean":7.048301294612917e-7,"moe":8.752025317429285e-9,"rme":1.2417212249593446,"sem":4.465319039504738e-9,"variance":1.81445574533528e-15}},{"name":"Function returning empty array","hz":1390541.557664484,"cycles":4,"stats":{"deviation":7.317151863494269e-8,"mean":7.191442747526173e-7,"moe":1.5935130724943076e-8,"rme":2.215846149984952,"sem":8.130168737215855e-9,"variance":5.3540711393437644e-15}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|742,757,015|89|
|using Array.includes (first item)|722,995,501|90|
|Using raw comparison|743,726,148|91|
|Using raw comparison (first item)|744,527,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":742757015.2512379,"cycles":6,"stats":{"deviation":5.09828907922983e-11,"mean":1.3463353148697621e-9,"moe":1.0592184206660667e-11,"rme":0.7867419126330577,"sem":5.4041756156431975e-12,"variance":2.5992551535394143e-21}},{"name":"using Array.includes (first item)","hz":722995501.0934469,"cycles":8,"stats":{"deviation":1.1263693711125373e-10,"mean":1.3831344710826223e-9,"moe":2.327103230253161e-11,"rme":1.6824851660530629,"sem":1.1872975664556945e-11,"variance":1.2687079601804529e-20}},{"name":"Using raw comparison","hz":743726148.2740531,"cycles":6,"stats":{"deviation":4.436996551841514e-11,"mean":1.344580935228209e-9,"moe":9.116422963530477e-12,"rme":0.678012213670365,"sem":4.6512362058828965e-12,"variance":1.9686938401053485e-21}},{"name":"Using raw comparison (first item)","hz":744527516.0292417,"cycles":6,"stats":{"deviation":6.324550991620634e-11,"mean":1.3431337035510244e-9,"moe":1.3367079904782982e-11,"rme":0.9952158798072465,"sem":6.819938726930093e-12,"variance":3.999994524560955e-21}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,266,274|92|
|Using Object.getOwnPropertyNames()|49,908,825|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":49266274.44077764,"cycles":6,"stats":{"deviation":2.1932224130683034e-9,"mean":2.0297861191068696e-8,"moe":4.481721166306253e-10,"rme":2.207977049462859,"sem":2.2865924317889047e-10,"variance":4.810224553185151e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":49908825.29911372,"cycles":7,"stats":{"deviation":7.180545407450609e-10,"mean":2.003653650445181e-8,"moe":1.4516087502222302e-10,"rme":0.7244808751750609,"sem":7.406167092970563e-11,"variance":5.156023234846004e-19}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,808,446|87|
|Length = 10_000 - Array.at|16,485,716|86|
|Length = 1_000_000 - Array.at|16,126,841|88|
|Length = 100 - Array[length - 1]|727,295,557|88|
|Length = 10_000 - Array[length - 1]|730,199,334|88|
|Length = 1_000_000 - Array[length - 1]|763,655,631|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":16808445.566478442,"cycles":4,"stats":{"deviation":3.590538921542591e-9,"mean":5.949390120846917e-8,"moe":7.544945097833227e-10,"rme":1.2681879897899815,"sem":3.8494617846087893e-10,"variance":1.289196974711223e-17}},{"name":"Length = 10_000 - Array.at","hz":16485716.376048384,"cycles":4,"stats":{"deviation":4.206101203031009e-9,"mean":6.065857116484612e-8,"moe":8.889688919104184e-10,"rme":1.4655289019165172,"sem":4.5355555709715223e-10,"variance":1.76912873301389e-17}},{"name":"Length = 1_000_000 - Array.at","hz":16126841.091051692,"cycles":6,"stats":{"deviation":3.265970184752632e-9,"mean":6.200842399041623e-8,"moe":6.8238103932562e-10,"rme":1.100465058475097,"sem":3.4815359149266323e-10,"variance":1.0666561247693142e-17}},{"name":"Length = 100 - Array[length - 1]","hz":727295557.3289608,"cycles":7,"stats":{"deviation":6.544518611383294e-11,"mean":1.3749568382798371e-9,"moe":1.3673901350265523e-11,"rme":0.9944967703402594,"sem":6.976480280747716e-12,"variance":4.283072385474233e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":730199334.2121863,"cycles":8,"stats":{"deviation":7.047982213028385e-11,"mean":1.3694890602425736e-9,"moe":1.472582159545667e-11,"rme":1.0752785124729898,"sem":7.513174283396261e-12,"variance":4.96740532751645e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":763655630.5246428,"cycles":9,"stats":{"deviation":7.359523224401852e-11,"mean":1.3094907704837914e-9,"moe":1.5738600385483247e-11,"rme":1.2018870800951595,"sem":8.0298981558588e-12,"variance":5.4162582090510236e-21}}]}-->
