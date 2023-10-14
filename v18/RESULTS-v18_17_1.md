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
