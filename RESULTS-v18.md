## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|577,281,385|97|
|Using dot notation|596,859,472|98|
|Using define property (writable)|3,012,047|98|
|Using define property initialized (writable)|4,192,037|96|
|Using define property (getter)|1,515,583|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":577281385.3039,"samples":6},{"name":"Using dot notation","opsSec":596859472.4835055,"samples":9},{"name":"Using define property (writable)","opsSec":3012046.7866212055,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4192036.557638278,"samples":6},{"name":"Using define property (getter)","opsSec":1515583.4986692374,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.002ms
array.push|100|0.036ms
new Array(length)|100|0.012ms
array.push|1,000|0.076ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.554ms
new Array(length)|10,000|0.285ms
array.push|1,000,000|41.955ms
new Array(length)|1,000,000|25.684ms
array.push|100,000,000|2,285.268ms
new Array(length)|100,000,000|5,503.297ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.019ms
new Array(length)|100|0.014ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.841ms
new Array(length)|10,000|5.147ms
array.push|1,000,000|403.519ms
new Array(length)|1,000,000|5.188ms
array.push|100,000,000|3,024.295ms
new Array(length)|100,000,000|6,319.052ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|364|83|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":363.7162410428399,"samples":2},{"name":"Array.from","opsSec":15.588382374343805,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,838|87|
|new Blob (1024)|351|69|
|text (128)|25,753|74|
|text (1024)|17,467|85|
|arrayBuffer (128)|26,440|83|
|arrayBuffer (1024)|18,063|86|
|slice (0, 64)|50,662|75|
|slice (0, 512)|25,539|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2837.578447195655,"samples":4},{"name":"new Blob (1024)","opsSec":350.9625971411583,"samples":2},{"name":"text (128)","opsSec":25752.55768834366,"samples":4},{"name":"text (1024)","opsSec":17466.546639818942,"samples":5},{"name":"arrayBuffer (128)","opsSec":26439.816479232537,"samples":6},{"name":"arrayBuffer (1024)","opsSec":18063.085818747033,"samples":3},{"name":"slice (0, 64)","opsSec":50662.28109395993,"samples":4},{"name":"slice (0, 512)","opsSec":25539.07158859113,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|185,382|59|
|[True conditional] Using constructor name|145,575|92|
|[True conditional] Check if property is valid then instanceof |146,983|94|
|[False conditional] Using instanceof only|709,539,866|95|
|[False conditional] Using constructor name|710,139,557|98|
|[False conditional] Check if property is valid then instanceof |711,636,699|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":185381.64255671448,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145574.51809417238,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146982.83249044267,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":709539865.5163441,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":710139556.9127923,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":711636698.7732116,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,712|94|
|crypto.verify('RSA-SHA256')|4,853|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4711.5694581214775,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":4853.383585590062,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,684,449|94|
|fromUnixToISOString(new Date())|1,390,665|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1684449.2231516861,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1390665.0300875467,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,661|87|
|Intl.DateTimeFormat().format(new Date())|9,703|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,864|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,354|70|
|Reusing Intl.DateTimeFormat()|546,196|96|
|Date.toLocaleDateString()|553,969|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,671|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11661.335291905882,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9703.22555877545,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14864.22791608202,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10353.625737689166,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":546196.1527932353,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":553968.8922085025,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12671.02279783394,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|659,254|97|
|Using brackets {}|671,936|99|
|Using '' + |677,236|94|
|Using date.toString()|738,674|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":659253.5212277741,"samples":6},{"name":"Using brackets {}","opsSec":671935.8700392772,"samples":3},{"name":"Using '' + ","opsSec":677236.4173883579,"samples":6},{"name":"Using date.toString()","opsSec":738673.67450796,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,877,491|95|
|Using delete property (proto: null)|9,300,749|95|
|Using delete property (cached proto: null)|1,869,299|92|
|Using undefined assignment|584,904,579|95|
|Using undefined assignment (proto: null)|11,678,539|93|
|Using undefined property (cached proto: null)|584,103,097|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":1877490.9928648977,"samples":6},{"name":"Using delete property (proto: null)","opsSec":9300748.895033414,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":1869298.86418924,"samples":6},{"name":"Using undefined assignment","opsSec":584904579.0424376,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":11678539.244993836,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":584103097.0480101,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|180,985|58|
|NodeError|142,031|96|
|NodeError Range|141,710|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Error","opsSec":180984.541179213,"samples":3},{"name":"NodeError","opsSec":142030.92116459066,"samples":3},{"name":"NodeError Range","opsSec":141710.00449441423,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,367,780|94|
|Function returning explicitly undefined|1,368,703|95|
|Function returning implicitly undefined|1,395,011|94|
|Function returning string|1,344,140|96|
|Function returning integer|1,384,766|97|
|Function returning float|1,384,382|94|
|Function returning functions|1,326,948|97|
|Function returning arrow functions|1,329,160|94|
|Function returning empty object|1,374,520|96|
|Function returning empty array|1,348,182|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1367779.9999482464,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1368703.2058803819,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1395011.3147138446,"samples":5},{"name":"Function returning string","opsSec":1344140.0211934303,"samples":5},{"name":"Function returning integer","opsSec":1384766.3013447127,"samples":7},{"name":"Function returning float","opsSec":1384381.6207450605,"samples":5},{"name":"Function returning functions","opsSec":1326947.558429572,"samples":6},{"name":"Function returning arrow functions","opsSec":1329160.0953595522,"samples":5},{"name":"Function returning empty object","opsSec":1374520.4995226315,"samples":6},{"name":"Function returning empty array","opsSec":1348182.1560061201,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,252,357|98|
|using Array.includes (first item)|593,106,868|99|
|Using raw comparison|594,079,469|95|
|Using raw comparison (first item)|593,445,506|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":592252356.9330512,"cycles":8,"stats":{"deviation":2.606030499346733e-11,"mean":1.6884694307988054e-9,"moe":5.15967714658771e-12,"rme":0.3055830951080172,"sem":2.6324883400957708e-12,"variance":6.791394963525383e-22}},{"name":"using Array.includes (first item)","hz":593106868.4672588,"cycles":8,"stats":{"deviation":7.240106672473385e-12,"mean":1.6860367889251697e-9,"moe":1.4262098744998738e-12,"rme":0.08458948724417023,"sem":7.276580992346295e-13,"variance":5.2419144628793634e-23}},{"name":"Using raw comparison","hz":594079469.2423043,"cycles":7,"stats":{"deviation":7.746454833972606e-12,"mean":1.6832764836586784e-9,"moe":1.557748213152013e-12,"rme":0.09254262316824959,"sem":7.947694965061291e-13,"variance":6.000756249477755e-23}},{"name":"Using raw comparison (first item)","hz":593445506.2876067,"cycles":6,"stats":{"deviation":9.87665347498182e-12,"mean":1.6850746857207834e-9,"moe":1.98611360065008e-12,"rme":0.11786501912824882,"sem":1.013323265637796e-12,"variance":9.754828386487047e-23}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|67,962,332|95|
|Using Object.getOwnPropertyNames()|69,060,943|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":67962331.50642183,"cycles":7,"stats":{"deviation":4.0650284624481573e-10,"mean":1.4714033168587058e-8,"moe":8.174437158040344e-11,"rme":0.5555538080131506,"sem":4.170631203081808e-11,"variance":1.6524456400513628e-19}},{"name":"Using Object.getOwnPropertyNames()","hz":69060943.16428575,"cycles":7,"stats":{"deviation":2.1047711078235198e-10,"mean":1.4479964422454357e-8,"moe":4.146134129422217e-11,"rme":0.2863359334635331,"sem":2.115374555827662e-11,"variance":4.430061416328647e-20}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,356,570|96|
|Length = 10_000 - Array.at|19,334,462|94|
|Length = 1_000_000 - Array.at|19,328,688|97|
|Length = 100 - Array[length - 1]|589,683,944|93|
|Length = 10_000 - Array[length - 1]|589,105,266|96|
|Length = 1_000_000 - Array[length - 1]|589,415,572|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":19356569.882253516,"cycles":6,"stats":{"deviation":4.853444334062847e-10,"mean":5.166204581095846e-8,"moe":9.708910725989129e-11,"rme":0.18793120894816928,"sem":4.953525880606698e-11,"variance":2.3555921903846747e-19}},{"name":"Length = 10_000 - Array.at","hz":19334461.982911915,"cycles":8,"stats":{"deviation":5.410928180305582e-10,"mean":5.17211185335188e-8,"moe":1.0938654722809312e-10,"rme":0.2114930038823565,"sem":5.580946287147608e-11,"variance":2.927814377242508e-19}},{"name":"Length = 1_000_000 - Array.at","hz":19328688.26504083,"cycles":5,"stats":{"deviation":4.4649851904117037e-10,"mean":5.1736568270319074e-8,"moe":8.885670957307334e-11,"rme":0.17174836395952037,"sem":4.533505590462925e-11,"variance":1.9936092750595836e-19}},{"name":"Length = 100 - Array[length - 1]","hz":589683944.0633514,"cycles":9,"stats":{"deviation":9.149234499831305e-12,"mean":1.6958236866842134e-9,"moe":1.8595135871368843e-12,"rme":0.10965253061022684,"sem":9.487314220086146e-13,"variance":8.37084919329034e-23}},{"name":"Length = 10_000 - Array[length - 1]","hz":589105266.2289438,"cycles":9,"stats":{"deviation":1.1844927863549256e-11,"mean":1.6974894935184135e-9,"moe":2.3694790599712632e-12,"rme":0.13958725924482787,"sem":1.2089178877404404e-12,"variance":1.4030231609268555e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":589415572.3421665,"cycles":7,"stats":{"deviation":9.050145786502405e-12,"mean":1.6965958263136652e-9,"moe":1.8104062074362864e-12,"rme":0.10670816109278698,"sem":9.23676636447085e-13,"variance":8.190513875694724e-23}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,202,090|93|
|Object.create({})|779,147|71|
|Cached Empty.prototype|579,263,004|91|
|Empty.prototype|857,966|75|
|Empty class|612,126|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":39202090.34309239,"cycles":6,"stats":{"deviation":6.752717697444371e-10,"mean":2.5508843820523595e-8,"moe":1.3724394438386108e-10,"rme":0.538024950677847,"sem":7.002242060401076e-11,"variance":4.55991963013784e-19}},{"name":"Object.create({})","hz":779147.32565691,"cycles":3,"stats":{"deviation":1.6844668078706863e-7,"mean":0.000001283454318677005,"moe":3.918224850377869e-8,"rme":3.052874413494363,"sem":1.99909431141728e-8,"variance":2.8374284268180597e-14}},{"name":"Cached Empty.prototype","hz":579263004.1979669,"cycles":8,"stats":{"deviation":1.5420885131019678e-10,"mean":1.726331550181726e-9,"moe":3.1684340901289706e-11,"rme":1.8353566496513596,"sem":1.616548005167842e-11,"variance":2.378036982241038e-20}},{"name":"Empty.prototype","hz":857966.414308959,"cycles":3,"stats":{"deviation":1.459047180989027e-7,"mean":0.0000011655467898535872,"moe":3.3021346282011665e-8,"rme":2.8331206065232024,"sem":1.6847625654087586e-8,"variance":2.128818676352027e-14}},{"name":"Empty class","hz":612126.3635638624,"cycles":3,"stats":{"deviation":1.6566267601185228e-7,"mean":0.0000016336496179937384,"moe":3.774547403214595e-8,"rme":2.31049997602917,"sem":1.925789491436018e-8,"variance":2.7444122223407936e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,318,499|95|
|Using optional chain (obj.field?.field2) (undefined)|696,612,267|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|708,909,667|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|705,549,163|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706318498.7614833,"cycles":6,"stats":{"deviation":2.933850933038355e-11,"mean":1.4157918867387472e-9,"moe":5.899732389262679e-12,"rme":0.41670901242785147,"sem":3.0100675455421832e-12,"variance":8.607481297290025e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":696612266.7839152,"cycles":6,"stats":{"deviation":1.2856563357226162e-10,"mean":1.4355187924220028e-9,"moe":2.5990643897010077e-11,"rme":1.810540136026972,"sem":1.3260532600515345e-11,"variance":1.6529122135837046e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":708909666.636961,"cycles":10,"stats":{"deviation":9.380422970137804e-12,"mean":1.4106169615995784e-9,"moe":1.8764754042794886e-12,"rme":0.1330251553300229,"sem":9.573854103466778e-13,"variance":8.799233509868895e-23}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":705549162.6995541,"cycles":7,"stats":{"deviation":3.820782700524895e-11,"mean":1.4173356767568481e-9,"moe":7.683279063969593e-12,"rme":0.542093111037076,"sem":3.920040338759997e-12,"variance":1.4598380444630305e-21}}]}-->
