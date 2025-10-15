## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,734,349|53368519|
|Using dot notation|80,134,519|40080109|
|Using define property (writable)|4,831,436|2415720|
|Using define property initialized (writable)|6,971,426|3486339|
|Using define property (getter)|2,399,654|1209255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53368519,"opsSec":106734349.57520291},{"name":"Using dot notation","samples":40080109,"opsSec":80134519.18023698},{"name":"Using define property (writable)","samples":2415720,"opsSec":4831436.30878266},{"name":"Using define property initialized (writable)","samples":3486339,"opsSec":6971426.3779938},{"name":"Using define property (getter)","samples":1209255,"opsSec":2399654.7845202754}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.319ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|24.948ms
new Array(length)|1,000,000|14.231ms
array.push|10,000,000|253.239ms
new Array(length)|10,000,000|74.577ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|20.169ms
new Array(length)|1,000,000|12.017ms
array.push|10,000,000|224.613ms
new Array(length)|10,000,000|79.891ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|298|150|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":150,"opsSec":298.8705663365906},{"name":"Array.from","samples":12,"opsSec":23.806982650306274}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,844|2423|
|new Blob (1024)|589|295|
|text (128)|4,697|2349|
|text (1024)|590|297|
|arrayBuffer (128)|4,711|2356|
|arrayBuffer (1024)|592|297|
|slice (0, 64)|198,108|99179|
|slice (0, 512)|13,474|6740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2423,"opsSec":4844.3178978077085},{"name":"new Blob (1024)","samples":295,"opsSec":589.4724975671571},{"name":"text (128)","samples":2349,"opsSec":4697.1094937995085},{"name":"text (1024)","samples":297,"opsSec":590.6757642189887},{"name":"arrayBuffer (128)","samples":2356,"opsSec":4711.96775129271},{"name":"arrayBuffer (1024)","samples":297,"opsSec":592.9769416264274},{"name":"slice (0, 64)","samples":99179,"opsSec":198108.66360572446},{"name":"slice (0, 512)","samples":6740,"opsSec":13474.261554540628}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|433,690|216854|
|[True conditional] Using constructor name|337,323|168905|
|[True conditional] Check if property is valid then instanceof |345,229|172615|
|[False conditional] Using instanceof only|95,833,583|47918160|
|[False conditional] Using constructor name|96,670,055|48335050|
|[False conditional] Check if property is valid then instanceof |96,556,471|48279355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":433690.9819658677,"samples":216854},{"name":"[True conditional] Using constructor name","opsSec":337323.52078873006,"samples":168905},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":345229.04302509275,"samples":172615},{"name":"[False conditional] Using instanceof only","opsSec":95833583.75951649,"samples":47918160},{"name":"[False conditional] Using constructor name","opsSec":96670055.33843443,"samples":48335050},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96556471.62787472,"samples":48279355}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.89 ms|1|
|Gzip|133.57 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:11:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132892102},{"name":"Gzip","samples":1,"totalTime":0.133572861}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,048|3525|
|crypto.verify('RSA-SHA256')|6,968|3485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:13:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3525,"opsSec":7048.1031440008555},{"name":"crypto.verify('RSA-SHA256')","samples":3485,"opsSec":6968.648374898501}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,215,643|607844|
|fromUnixToISOString(new Date())|1,856,675|928484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:19:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":607844,"opsSec":1215643.0844193168},{"name":"fromUnixToISOString(new Date())","samples":928484,"opsSec":1856675.68126739}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,780|9895|
|Intl.DateTimeFormat().format(new Date())|18,930|9466|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,015|9508|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,116|9062|
|Reusing Intl.DateTimeFormat()|383,089|191562|
|Date.toLocaleDateString()|691,984|345993|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,717|11860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9895,"opsSec":19780.764993808873},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9466,"opsSec":18930.546134056905},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9508,"opsSec":19015.657337854773},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9062,"opsSec":18116.5112864286},{"name":"Reusing Intl.DateTimeFormat()","samples":191562,"opsSec":383089.22086199484},{"name":"Date.toLocaleDateString()","samples":345993,"opsSec":691984.3586131014},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11860,"opsSec":23717.04978874268}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|939,921|469963|
|Using brackets {}|990,610|495317|
|Using '' + |933,859|466930|
|Using date.toString()|1,016,831|508417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:26:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":469963,"opsSec":939921.6669611153},{"name":"Using brackets {}","samples":495317,"opsSec":990610.3759237549},{"name":"Using '' + ","samples":466930,"opsSec":933859.361240197},{"name":"Using date.toString()","samples":508417,"opsSec":1016831.7711047578}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,172,711|2086769|
|Using delete property (proto: null)|16,840,126|8420066|
|Using delete property (cached proto: null)|4,111,739|2055871|
|Using undefined assignment|79,605,898|39802958|
|Using undefined assignment (proto: null)|18,951,199|9476780|
|Using undefined property (cached proto: null)|78,680,421|39347303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2086769,"opsSec":4172711.6445313403},{"name":"Using delete property (proto: null)","samples":8420066,"opsSec":16840126.476438515},{"name":"Using delete property (cached proto: null)","samples":2055871,"opsSec":4111739.376710278},{"name":"Using undefined assignment","samples":39802958,"opsSec":79605898.6459141},{"name":"Using undefined assignment (proto: null)","samples":9476780,"opsSec":18951199.40070025},{"name":"Using undefined property (cached proto: null)","samples":39347303,"opsSec":78680421.80827808}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|334,229|167115|
|NodeError|300,187|150148|
|NodeError Range|286,350|143176|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:35:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":167115,"opsSec":334229.4491898677},{"name":"NodeError","samples":150148,"opsSec":300187.43781348964},{"name":"NodeError Range","samples":143176,"opsSec":286350.56939255534}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,624,030|812018|
|Function returning explicitly undefined|1,599,612|799807|
|Function returning implicitly undefined|1,583,593|791798|
|Function returning string|1,606,973|803487|
|Function returning integer|1,655,139|827700|
|Function returning float|1,643,491|821747|
|Function returning functions|1,593,579|796879|
|Function returning arrow functions|1,682,182|841092|
|Function returning empty object|1,644,086|822758|
|Function returning empty array|1,659,209|829606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1624030.1469953503,"samples":812018},{"name":"Function returning explicitly undefined","opsSec":1599612.8866694306,"samples":799807},{"name":"Function returning implicitly undefined","opsSec":1583593.5929377386,"samples":791798},{"name":"Function returning string","opsSec":1606973.932507095,"samples":803487},{"name":"Function returning integer","opsSec":1655139.3784431915,"samples":827700},{"name":"Function returning float","opsSec":1643491.2882393745,"samples":821747},{"name":"Function returning functions","opsSec":1593579.1366776994,"samples":796879},{"name":"Function returning arrow functions","opsSec":1682182.3548256569,"samples":841092},{"name":"Function returning empty object","opsSec":1644086.8511992055,"samples":822758},{"name":"Function returning empty array","opsSec":1659209.0034685398,"samples":829606}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,395,196|34698711|
|using Array.includes (first item)|82,033,702|41020841|
|Using raw comparison|96,423,444|48247677|
|Using raw comparison (first item)|97,306,631|48655112|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34698711,"opsSec":69395196.9124062},{"name":"using Array.includes (first item)","samples":41020841,"opsSec":82033702.74580133},{"name":"Using raw comparison","samples":48247677,"opsSec":96423444.67335972},{"name":"Using raw comparison (first item)","samples":48655112,"opsSec":97306631.04995511}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,293,510|21155260|
|Using Object.getOwnPropertyNames()|41,205,761|20625471|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:42:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21155260,"opsSec":42293510.56509498},{"name":"Using Object.getOwnPropertyNames()","samples":20625471,"opsSec":41205761.77767582}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,068,476|48701044|
|Length = 10_000 - Array.at|98,677,236|49338631|
|Length = 1_000_000 - Array.at|98,898,471|49450096|
|Length = 100 - Array[length - 1]|96,627,060|48313740|
|Length = 10_000 - Array[length - 1]|96,631,374|48330505|
|Length = 1_000_000 - Array[length - 1]|97,195,228|48599659|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:48:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48701044,"opsSec":97068476.26597576},{"name":"Length = 10_000 - Array.at","samples":49338631,"opsSec":98677236.54127297},{"name":"Length = 1_000_000 - Array.at","samples":49450096,"opsSec":98898471.75998221},{"name":"Length = 100 - Array[length - 1]","samples":48313740,"opsSec":96627060.8318101},{"name":"Length = 10_000 - Array[length - 1]","samples":48330505,"opsSec":96631374.12386996},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48599659,"opsSec":97195228.219187}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|91,821,913|45910970|
|~ (small)|91,429,647|45714876|
|Math.floor (long)|91,840,868|45928489|
|~ (long)|92,001,741|46011083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45910970,"opsSec":91821913.37164512},{"name":"~ (small)","samples":45714876,"opsSec":91429647.22162428},{"name":"Math.floor (long)","samples":45928489,"opsSec":91840868.56060925},{"name":"~ (long)","samples":46011083,"opsSec":92001741.79732448}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,019,333|18022923|
|Object.create({})|2,134,356|1067183|
|new Function with empty prototype|78,222,873|39111903|
|Empty class|81,075,302|40586639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18022923,"opsSec":36019333.393346496},{"name":"Object.create({})","samples":1067183,"opsSec":2134356.318559739},{"name":"new Function with empty prototype","samples":39111903,"opsSec":78222873.426903},{"name":"Empty class","samples":40586639,"opsSec":81075302.06476802}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|140,947,797|71158270|
|Using optional chain (obj.field?.field2) (undefined)|96,002,529|48001982|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,593,982|48797013|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,620,173|48810108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":140947797.07023335,"samples":71158270},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96002529.91420813,"samples":48001982},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97593982.27789594,"samples":48797013},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97620173.8280849,"samples":48810108}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,292,842|48646762|
|Using parseInt(x, 10) - big number (10 len)|96,822,870|48411445|
|Using + - small number (2 len)|97,811,689|48906425|
|Using + - big number (10 len)|93,991,373|46995791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48646762,"opsSec":97292842.17176205},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48411445,"opsSec":96822870.63542588},{"name":"Using + - small number (2 len)","samples":48906425,"opsSec":97811689.75773609},{"name":"Using + - big number (10 len)","samples":46995791,"opsSec":93991373.90309818}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|873,450|439718|
|Using ? operator to avoid rejection|1,094,600|550696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:05:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":439718,"opsSec":873450.4953093875},{"name":"Using ? operator to avoid rejection","samples":550696,"opsSec":1094600.0918091314}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|94,006,357|47003193|
|Raw usage underscore usage|97,219,596|48618455|
|Manipulating private properties using #|95,352,583|47676299|
|Manipulating private properties using underscore(_)|94,085,785|47042898|
|Manipulating private properties using Symbol|95,904,306|47952174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:07:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":47003193,"opsSec":94006357.98610532},{"name":"Raw usage underscore usage","samples":48618455,"opsSec":97219596.1621195},{"name":"Manipulating private properties using #","samples":47676299,"opsSec":95352583.69711244},{"name":"Manipulating private properties using underscore(_)","samples":47042898,"opsSec":94085785.65056358},{"name":"Manipulating private properties using Symbol","samples":47952174,"opsSec":95904306.37753104}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,948,954|3974479|
|Adding property in the object creation - small object|7,842,050|3921732|
|Adding property after the function creation - small class|272,475|137028|
|Adding property in the function creation - small class|283,529|143018|
|Adding property after the class creation - small class|279,079|139547|
|Adding property in the class creation - small class|267,643|134095|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3974479,"opsSec":7948954.041420888},{"name":"Adding property in the object creation - small object","samples":3921732,"opsSec":7842050.627215457},{"name":"Adding property after the function creation - small class","samples":137028,"opsSec":272475.9436102138},{"name":"Adding property in the function creation - small class","samples":143018,"opsSec":283529.7725986866},{"name":"Adding property after the class creation - small class","samples":139547,"opsSec":279079.140710232},{"name":"Adding property in the class creation - small class","samples":134095,"opsSec":267643.1937142277}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,113,018|46598296|
|Getter|50,651,277|25332638|
|Method|96,451,998|48226008|
|DefineProperty (getter)|94,832,201|47458619|
|DefineProperty (getter & enumerable=false)|50,662,206|25331119|
|DefineProperty (getter & configurable=false)|94,955,630|47477824|
|DefineProperty (getter & enumerable=false & configurable=false)|51,022,228|25511121|
|DefineProperty (writable)|94,990,091|47495325|
|DefineProperty (writable & enumerable=false)|95,166,036|47583028|
|DefineProperty (writable & enumerable=false & configurable=false)|94,817,222|47408622|
|DefineProperties (getter)|51,014,904|25518198|
|DefineProperties (getter & enumerable=false)|50,950,801|25475425|
|DefineProperties (getter & enumerable=false & configurable=false)|49,225,220|24613637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46598296,"opsSec":93113018.22426677},{"name":"Getter","samples":25332638,"opsSec":50651277.30388641},{"name":"Method","samples":48226008,"opsSec":96451998.44573629},{"name":"DefineProperty (getter)","samples":47458619,"opsSec":94832201.39601499},{"name":"DefineProperty (getter & enumerable=false)","samples":25331119,"opsSec":50662206.89340497},{"name":"DefineProperty (getter & configurable=false)","samples":47477824,"opsSec":94955630.14834154},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25511121,"opsSec":51022228.93830939},{"name":"DefineProperty (writable)","samples":47495325,"opsSec":94990091.83822037},{"name":"DefineProperty (writable & enumerable=false)","samples":47583028,"opsSec":95166036.77646056},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47408622,"opsSec":94817222.38167329},{"name":"DefineProperties (getter)","samples":25518198,"opsSec":51014904.33907022},{"name":"DefineProperties (getter & enumerable=false)","samples":25475425,"opsSec":50950801.90244301},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24613637,"opsSec":49225220.32380809}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,549,373|46774702|
|Setter|11,489,770|5744890|
|Method|90,735,819|45367929|
|DefineProperty (setter)|91,360,059|45680054|
|DefineProperty (setter & enumerable=false)|11,664,602|5832305|
|DefineProperty (setter & configurable=false)|11,823,151|5911702|
|DefineProperty (setter & enumerable=false & configurable=false)|11,691,729|5845867|
|DefineProperty (writable)|85,880,979|43144480|
|DefineProperty (writable & enumerable=false)|93,805,778|46902901|
|DefineProperty (writable & enumerable=false & configurable=false)|93,256,700|46628363|
|DefineProperties (setter)|91,389,653|45756791|
|DefineProperties (setter & enumerable=false)|11,689,719|5844865|
|DefineProperties (setter & enumerable=false & configurable=false)|11,607,144|5803576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:23:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46774702,"opsSec":93549373.12870687},{"name":"Setter","samples":5744890,"opsSec":11489770.049859138},{"name":"Method","samples":45367929,"opsSec":90735819.70948407},{"name":"DefineProperty (setter)","samples":45680054,"opsSec":91360059.21372838},{"name":"DefineProperty (setter & enumerable=false)","samples":5832305,"opsSec":11664602.231374914},{"name":"DefineProperty (setter & configurable=false)","samples":5911702,"opsSec":11823151.008214727},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5845867,"opsSec":11691729.32330827},{"name":"DefineProperty (writable)","samples":43144480,"opsSec":85880979.65794358},{"name":"DefineProperty (writable & enumerable=false)","samples":46902901,"opsSec":93805778.54855536},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46628363,"opsSec":93256700.07463738},{"name":"DefineProperties (setter)","samples":45756791,"opsSec":91389653.06096667},{"name":"DefineProperties (setter & enumerable=false)","samples":5844865,"opsSec":11689719.689667234},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5803576,"opsSec":11607144.664284574}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,277,064|1638737|
|Using replaceAll()|3,265,548|1632825|
|Using replaceAll(//g)|3,054,010|1527139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1638737,"opsSec":3277064.0130754523},{"name":"Using replaceAll()","samples":1632825,"opsSec":3265548.4349125777},{"name":"Using replaceAll(//g)","samples":1527139,"opsSec":3054010.8717770674}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,119,635|12559822|
|{ ...object, __proto__: null }|2,611,314|1305658|
|{ ...object, newProp: true }|23,235,854|11619340|
|structuredClone|310,903|155511|
|JSON.parse + JSON.stringify|308,235|154160|
|loop + object.keys starting with {}|1,698,789|849396|
|loop + object.keys starting with { __proto__: null }|923,110|461619|
|loop + object.keys starting with { randomProp: true }|666,095|333086|
|object.keys + reduce(FN, {})|1,764,028|882188|
|object.keys + reduce(FN, { __proto__: null })|953,340|476774|
|object.keys + reduce(FN, { newProp: true })|699,555|349803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12559822,"opsSec":25119635.66028096},{"name":"{ ...object, __proto__: null }","samples":1305658,"opsSec":2611314.7361236676},{"name":"{ ...object, newProp: true }","samples":11619340,"opsSec":23235854.798886713},{"name":"structuredClone","samples":155511,"opsSec":310903.5905021357},{"name":"JSON.parse + JSON.stringify","samples":154160,"opsSec":308235.49970364023},{"name":"loop + object.keys starting with {}","samples":849396,"opsSec":1698789.9002956834},{"name":"loop + object.keys starting with { __proto__: null }","samples":461619,"opsSec":923110.7233396873},{"name":"loop + object.keys starting with { randomProp: true }","samples":333086,"opsSec":666095.9025397103},{"name":"object.keys + reduce(FN, {})","samples":882188,"opsSec":1764028.1971445382},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":476774,"opsSec":953340.7475348489},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349803,"opsSec":699555.1493361947}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|312,777|156408|
|Sort using first char|1,363,685|681905|
|Sort using localeCompare|1,261,957|631075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:37:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":156408,"opsSec":312777.6922393653},{"name":"Sort using first char","samples":681905,"opsSec":1363685.3782480233},{"name":"Sort using localeCompare","samples":631075,"opsSec":1261957.6927911108}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,804|903|
|{...smallObject} - Total keys: 2|40,815,434|20414822|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,067|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,866|3434|
|{ ...bigObject, ...anotherBigObject }|1,123|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,184,451|6093101|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,045,027|14022948|
|{ ...smallObject, ...anotherSmallObject }|20,846,838|10431946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":903,"opsSec":1804.1831695064755},{"name":"{...smallObject} - Total keys: 2","samples":20414822,"opsSec":40815434.59623054},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":534,"opsSec":1067.3580737767015},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3434,"opsSec":6866.5935980324375},{"name":"{ ...bigObject, ...anotherBigObject }","samples":566,"opsSec":1123.0413976968464},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6093101,"opsSec":12184451.167473942},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14022948,"opsSec":28045027.89420656},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10431946,"opsSec":20846838.535591695}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,905|953|
|streams.web.Readable reading 1e3 * "some data"|1,522|762|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:22:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":953,"opsSec":1905.9891091782301},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":762,"opsSec":1522.6292530149733}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,206|3104|
|streams.web.WritableStream writing 1e3 * "some data"|1,709|860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3104,"opsSec":6206.764481462321},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":860,"opsSec":1709.459595216983}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,719,599|48359813|
|Using backtick (`)|97,426,758|48715512|
|Using array.join|10,343,149|5178783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:33:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48359813,"opsSec":96719599.11195146},{"name":"Using backtick (`)","samples":48715512,"opsSec":97426758.07197106},{"name":"Using array.join","samples":5178783,"opsSec":10343149.387403058}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,256,682|42354448|
|(short string) (true) String#slice and strict comparison|57,060,787|28531391|
|(long string) (true) String#endsWith|63,825,335|31918276|
|(long string) (true) String#slice and strict comparison|52,467,569|26233855|
|(short string) (false) String#endsWith|91,851,296|45952399|
|(short string) (false) String#slice and strict comparison|58,433,451|29216781|
|(long string) (false) String#endsWith|85,066,314|42539442|
|(long string) (false) String#slice and strict comparison|52,589,696|26294904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42354448,"opsSec":84256682.12985422},{"name":"(short string) (true) String#slice and strict comparison","samples":28531391,"opsSec":57060787.95370417},{"name":"(long string) (true) String#endsWith","samples":31918276,"opsSec":63825335.46319637},{"name":"(long string) (true) String#slice and strict comparison","samples":26233855,"opsSec":52467569.177044325},{"name":"(short string) (false) String#endsWith","samples":45952399,"opsSec":91851296.82403113},{"name":"(short string) (false) String#slice and strict comparison","samples":29216781,"opsSec":58433451.44390987},{"name":"(long string) (false) String#endsWith","samples":42539442,"opsSec":85066314.09103203},{"name":"(long string) (false) String#slice and strict comparison","samples":26294904,"opsSec":52589696.29948506}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,649,289|7824647|
|Using indexof|15,907,823|7954858|
|Using RegExp.test|13,298,580|6650226|
|Using RegExp.text with cached regex pattern|14,272,884|7136479|
|Using new RegExp.test|4,744,731|2373143|
|Using new RegExp.test with cached regex pattern|5,268,936|2634473|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7824647,"opsSec":15649289.180018933},{"name":"Using indexof","samples":7954858,"opsSec":15907823.827986958},{"name":"Using RegExp.test","samples":6650226,"opsSec":13298580.570547791},{"name":"Using RegExp.text with cached regex pattern","samples":7136479,"opsSec":14272884.865737947},{"name":"Using new RegExp.test","samples":2373143,"opsSec":4744731.995887242},{"name":"Using new RegExp.test with cached regex pattern","samples":2634473,"opsSec":5268936.389460026}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,410,633|42238445|
|(short string) (true) String#slice and strict comparison|57,242,602|28621438|
|(long string) (true) String#startsWith|64,094,541|32049043|
|(long string) (true) String#slice and strict comparison|52,588,540|26299808|
|(short string) (false) String#startsWith|90,661,961|45337328|
|(short string) (false) String#slice and strict comparison|58,394,219|29203769|
|(long string) (false) String#startsWith|84,190,907|42095476|
|(long string) (false) String#slice and strict comparison|52,724,148|26367012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:49:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42238445,"opsSec":84410633.56139866},{"name":"(short string) (true) String#slice and strict comparison","samples":28621438,"opsSec":57242602.38036062},{"name":"(long string) (true) String#startsWith","samples":32049043,"opsSec":64094541.0591231},{"name":"(long string) (true) String#slice and strict comparison","samples":26299808,"opsSec":52588540.327521615},{"name":"(short string) (false) String#startsWith","samples":45337328,"opsSec":90661961.51214908},{"name":"(short string) (false) String#slice and strict comparison","samples":29203769,"opsSec":58394219.79671408},{"name":"(long string) (false) String#startsWith","samples":42095476,"opsSec":84190907.21043736},{"name":"(long string) (false) String#slice and strict comparison","samples":26367012,"opsSec":52724148.13436466}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|89,559,372|44822839|
|Using this|96,346,965|48173495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":44822839,"opsSec":89559372.14073041},{"name":"Using this","samples":48173495,"opsSec":96346965.142483}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,077,906|4554196|
|Date.now()|20,418,090|10209056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4554196,"opsSec":9077906.610332808},{"name":"Date.now()","samples":10209056,"opsSec":20418090.07097126}]}-->
