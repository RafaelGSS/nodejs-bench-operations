## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,118,963|58091287|
|Using dot notation|73,083,781|36675254|
|Using define property (writable)|3,742,762|1871601|
|Using define property initialized (writable)|5,549,566|2775255|
|Using define property (getter)|2,116,479|1058275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:00:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":116118963.33517122,"samples":58091287},{"name":"Using dot notation","opsSec":73083781.72256047,"samples":36675254},{"name":"Using define property (writable)","opsSec":3742762.6820019125,"samples":1871601},{"name":"Using define property initialized (writable)","opsSec":5549566.274056831,"samples":2775255},{"name":"Using define property (getter)","opsSec":2116479.783666697,"samples":1058275}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|26.413ms
new Array(length)|1,000,000|7.818ms
array.push|100,000,000|1,968.763ms
new Array(length)|100,000,000|3,996.269ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.448ms
new Array(length)|10,000|3.311ms
array.push|1,000,000|254.78ms
new Array(length)|1,000,000|4.669ms
array.push|100,000,000|2,342.245ms
new Array(length)|100,000,000|4,305.645ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:05:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":254.3800538882681,"samples":128},{"name":"Array.from","opsSec":20.836585142902198,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,573|1800|
|new Blob (1024)|514|264|
|text (128)|45,501|22751|
|text (1024)|30,782|15392|
|arrayBuffer (128)|46,226|23114|
|arrayBuffer (1024)|28,562|14282|
|slice (0, 64)|81,176|40589|
|slice (0, 512)|48,351|24176|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3573.7993334709627,"samples":1800},{"name":"new Blob (1024)","opsSec":514.2275094117886,"samples":264},{"name":"text (128)","opsSec":45501.66428927929,"samples":22751},{"name":"text (1024)","opsSec":30782.96433767337,"samples":15392},{"name":"arrayBuffer (128)","opsSec":46226.26411324473,"samples":23114},{"name":"arrayBuffer (1024)","opsSec":28562.17156467963,"samples":14282},{"name":"slice (0, 64)","opsSec":81176.51933782038,"samples":40589},{"name":"slice (0, 512)","opsSec":48351.263706145546,"samples":24176}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|399,440|200109|
|[True conditional] Using constructor name|312,658|156330|
|[True conditional] Check if property is valid then instanceof |314,085|157043|
|[False conditional] Using instanceof only|39,975,262|19990829|
|[False conditional] Using constructor name|99,592,605|49806727|
|[False conditional] Check if property is valid then instanceof |99,458,813|49733050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":399440.7569907063,"samples":200109},{"name":"[True conditional] Using constructor name","opsSec":312658.8500407496,"samples":156330},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":314085.25247709913,"samples":157043},{"name":"[False conditional] Using instanceof only","opsSec":39975262.43771312,"samples":19990829},{"name":"[False conditional] Using constructor name","opsSec":99592605.28400984,"samples":49806727},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99458813.24950609,"samples":49733050}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,223|3612|
|crypto.verify('RSA-SHA256')|7,216|3609|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:28:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7223.376983939107,"samples":3612},{"name":"crypto.verify('RSA-SHA256')","opsSec":7216.697443732727,"samples":3609}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,003,468|1001735|
|fromUnixToISOString(new Date())|1,751,628|881050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2003468.6330894148,"samples":1001735},{"name":"fromUnixToISOString(new Date())","opsSec":1751628.835561873,"samples":881050}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,347|10674|
|Intl.DateTimeFormat().format(new Date())|20,684|10343|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,216|10609|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,648|10825|
|Reusing Intl.DateTimeFormat()|647,389|323695|
|Date.toLocaleDateString()|669,078|334540|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,281|10641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:38:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21347.43877548772,"samples":10674},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20684.64958038248,"samples":10343},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21216.203284887364,"samples":10609},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21648.32390059334,"samples":10825},{"name":"Reusing Intl.DateTimeFormat()","opsSec":647389.5636087818,"samples":323695},{"name":"Date.toLocaleDateString()","opsSec":669078.7059716778,"samples":334540},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21281.581349250224,"samples":10641}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|830,820|415411|
|Using brackets {}|838,118|419060|
|Using '' + |832,785|416393|
|Using date.toString()|894,724|447367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:44:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":830820.5971494169,"samples":415411},{"name":"Using brackets {}","opsSec":838118.2970321251,"samples":419060},{"name":"Using '' + ","opsSec":832785.483609348,"samples":416393},{"name":"Using date.toString()","opsSec":894724.0613794454,"samples":447367}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,525,246|1262624|
|Using delete property (proto: null)|7,593,544|3796773|
|Using delete property (cached proto: null)|2,539,233|1269617|
|Using undefined assignment|12,994,420|6497211|
|Using undefined assignment (proto: null)|8,299,317|4149659|
|Using undefined property (cached proto: null)|12,314,318|6158584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:50:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2525246.761021604,"samples":1262624},{"name":"Using delete property (proto: null)","opsSec":7593544.610485677,"samples":3796773},{"name":"Using delete property (cached proto: null)","opsSec":2539233.7781940238,"samples":1269617},{"name":"Using undefined assignment","opsSec":12994420.896273622,"samples":6497211},{"name":"Using undefined assignment (proto: null)","opsSec":8299317.46025234,"samples":4149659},{"name":"Using undefined property (cached proto: null)","opsSec":12314318.443649624,"samples":6158584}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|268,586|134294|
|NodeError|266,943|133472|
|NodeError Range|263,554|131778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:00:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":268586.61033943115,"samples":134294},{"name":"NodeError","opsSec":266943.10740854306,"samples":133472},{"name":"NodeError Range","opsSec":263554.6896699868,"samples":131778}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,474,655|737328|
|Function returning explicitly undefined|1,529,787|764894|
|Function returning implicitly undefined|1,536,913|768457|
|Function returning string|1,517,923|758963|
|Function returning integer|1,553,105|776554|
|Function returning float|1,508,339|754170|
|Function returning functions|1,496,060|748031|
|Function returning arrow functions|1,509,926|754964|
|Function returning empty object|1,534,358|767180|
|Function returning empty array|1,446,440|723221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:10:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1474655.4381310558,"samples":737328},{"name":"Function returning explicitly undefined","opsSec":1529787.8878997094,"samples":764894},{"name":"Function returning implicitly undefined","opsSec":1536913.763461624,"samples":768457},{"name":"Function returning string","opsSec":1517923.8430487833,"samples":758963},{"name":"Function returning integer","opsSec":1553105.431402246,"samples":776554},{"name":"Function returning float","opsSec":1508339.874724308,"samples":754170},{"name":"Function returning functions","opsSec":1496060.5744520652,"samples":748031},{"name":"Function returning arrow functions","opsSec":1509926.9261247623,"samples":754964},{"name":"Function returning empty object","opsSec":1534358.5631806909,"samples":767180},{"name":"Function returning empty array","opsSec":1446440.5603243525,"samples":723221}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,037,331|6018666|
|using Array.includes (first item)|13,678,319|6839160|
|Using raw comparison|14,760,180|7380091|
|Using raw comparison (first item)|14,891,846|7445924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12037331.589085251,"samples":6018666},{"name":"using Array.includes (first item)","opsSec":13678319.007663041,"samples":6839160},{"name":"Using raw comparison","opsSec":14760180.722016362,"samples":7380091},{"name":"Using raw comparison (first item)","opsSec":14891846.634835472,"samples":7445924}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,480,211|6240106|
|Using Object.getOwnPropertyNames()|12,725,838|6362920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:29:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12480211.311331173,"samples":6240106},{"name":"Using Object.getOwnPropertyNames()","opsSec":12725838.436052177,"samples":6362920}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,232,365|4116183|
|Length = 10_000 - Array.at|8,132,501|4066251|
|Length = 1_000_000 - Array.at|8,176,705|4088353|
|Length = 100 - Array[length - 1]|14,017,101|7008551|
|Length = 10_000 - Array[length - 1]|14,220,367|7110308|
|Length = 1_000_000 - Array[length - 1]|13,824,546|6912274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8232365.995445808,"samples":4116183},{"name":"Length = 10_000 - Array.at","opsSec":8132501.072156929,"samples":4066251},{"name":"Length = 1_000_000 - Array.at","opsSec":8176705.206699349,"samples":4088353},{"name":"Length = 100 - Array[length - 1]","opsSec":14017101.17887555,"samples":7008551},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14220367.880787594,"samples":7110308},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13824546.691141821,"samples":6912274}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,778,313|6889157|
|~ (small)|14,012,390|7006196|
|Math.floor (long)|13,928,252|6964127|
|~ (long)|14,141,039|7070520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:51:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":13778313.67953227,"samples":6889157},{"name":"~ (small)","opsSec":14012390.387482941,"samples":7006196},{"name":"Math.floor (long)","opsSec":13928252.819160543,"samples":6964127},{"name":"~ (long)","opsSec":14141039.14443263,"samples":7070520}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,766,679|5883343|
|Object.create({})|1,138,429|569215|
|Cached Empty.prototype|14,096,528|7048265|
|Empty.prototype|1,214,389|607195|
|Empty class|822,861|411435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:02:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11766679.22694376,"samples":5883343},{"name":"Object.create({})","opsSec":1138429.148814297,"samples":569215},{"name":"Cached Empty.prototype","opsSec":14096528.56921279,"samples":7048265},{"name":"Empty.prototype","opsSec":1214389.8317993658,"samples":607195},{"name":"Empty class","opsSec":822861.1640154376,"samples":411435}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,917,153|6958577|
|Using optional chain (obj.field?.field2) (undefined)|13,936,918|6968460|
|Using and operator (obj.field && obj.field.field2) (Valid)|13,974,138|6987070|
|Using and operator (obj.field && obj.field.field2) (undefined)|13,939,266|6969634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:10:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13917153.84270094,"samples":6958577},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13936918.817647055,"samples":6968460},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":13974138.591942709,"samples":6987070},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":13939266.436505448,"samples":6969634}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,891,025|6945513|
|Using parseInt(x, 10) - big number (10 len)|7,777,594|3888798|
|Using + - small number (2 len)|14,510,928|7255465|
|Using + - big number (10 len)|14,147,515|7073758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:20:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13891025.02646298,"samples":6945513},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7777594.840265763,"samples":3888798},{"name":"Using + - small number (2 len)","opsSec":14510928.993396727,"samples":7255465},{"name":"Using + - big number (10 len)","opsSec":14147515.213082531,"samples":7073758}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|684,236|342119|
|Using ? operator to avoid rejection|693,430|346716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":684236.8955366989,"samples":342119},{"name":"Using ? operator to avoid rejection","opsSec":693430.1986112344,"samples":346716}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,246,386|6623194|
|Raw usage underscore usage|13,928,356|6964179|
|Manipulating private properties using #|12,450,951|6225476|
|Manipulating private properties using underscore(_)|11,684,765|5842383|
|Manipulating private properties using Symbol|12,137,221|6068612|
|Manipulating private properties using PrivateSymbol|9,313,406|4658487|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:35:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13246386.378617624,"samples":6623194},{"name":"Raw usage underscore usage","opsSec":13928356.248704225,"samples":6964179},{"name":"Manipulating private properties using #","opsSec":12450951.36417624,"samples":6225476},{"name":"Manipulating private properties using underscore(_)","opsSec":11684765.026078982,"samples":5842383},{"name":"Manipulating private properties using Symbol","opsSec":12137221.864375262,"samples":6068612},{"name":"Manipulating private properties using PrivateSymbol","opsSec":9313406.538463905,"samples":4658487}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,816,114|1408058|
|Adding property in the object creation - small object|2,809,627|1404814|
|Adding property after the function creation - small class|185,073|93268|
|Adding property in the function creation - small class|191,621|95811|
|Adding property after the class creation - small class|152,264|76133|
|Adding property in the class creation - small class|157,486|78744|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:49:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2816114.8850434353,"samples":1408058},{"name":"Adding property in the object creation - small object","opsSec":2809627.5352062215,"samples":1404814},{"name":"Adding property after the function creation - small class","opsSec":185073.80762303344,"samples":93268},{"name":"Adding property in the function creation - small class","opsSec":191621.33319087353,"samples":95811},{"name":"Adding property after the class creation - small class","opsSec":152264.00695837624,"samples":76133},{"name":"Adding property in the class creation - small class","opsSec":157486.71046450178,"samples":78744}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,857,111|7428556|
|Getter|12,545,043|6272522|
|Method|14,241,349|7120675|
|DefineProperty (getter)|14,278,937|7139470|
|DefineProperty (getter & enumerable=false)|12,428,269|6214135|
|DefineProperty (getter & configurable=false)|14,287,767|7143884|
|DefineProperty (getter & enumerable=false & configurable=false)|12,656,506|6328254|
|DefineProperty (writable)|14,655,000|7327501|
|DefineProperty (writable & enumerable=false)|14,696,194|7348098|
|DefineProperty (writable & enumerable=false & configurable=false)|14,379,723|7189862|
|DefineProperties (getter)|12,441,327|6220664|
|DefineProperties (getter & enumerable=false)|12,343,837|6171919|
|DefineProperties (getter & enumerable=false & configurable=false)|12,614,328|6307165|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:59:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14857111.905190496,"samples":7428556},{"name":"Getter","opsSec":12545043.190287968,"samples":6272522},{"name":"Method","opsSec":14241349.381877625,"samples":7120675},{"name":"DefineProperty (getter)","opsSec":14278937.44491845,"samples":7139470},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12428269.208844215,"samples":6214135},{"name":"DefineProperty (getter & configurable=false)","opsSec":14287767.728600204,"samples":7143884},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12656506.44172024,"samples":6328254},{"name":"DefineProperty (writable)","opsSec":14655000.573892098,"samples":7327501},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14696194.618225545,"samples":7348098},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14379723.372550474,"samples":7189862},{"name":"DefineProperties (getter)","opsSec":12441327.151654346,"samples":6220664},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12343837.769434324,"samples":6171919},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12614328.459977016,"samples":6307165}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,177,637|7088819|
|Setter|5,524,590|2762296|
|Method|14,617,882|7308942|
|DefineProperty (setter)|14,276,099|7138050|
|DefineProperty (setter & enumerable=false)|5,545,752|2772877|
|DefineProperty (setter & configurable=false)|5,536,056|2768029|
|DefineProperty (setter & enumerable=false & configurable=false)|5,537,838|2768920|
|DefineProperty (writable)|14,242,303|7121152|
|DefineProperty (writable & enumerable=false)|14,302,089|7151045|
|DefineProperty (writable & enumerable=false & configurable=false)|13,993,496|6996749|
|DefineProperties (setter)|13,982,953|6991477|
|DefineProperties (setter & enumerable=false)|5,526,594|2763298|
|DefineProperties (setter & enumerable=false & configurable=false)|5,533,161|2766581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:21:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14177637.597490666,"samples":7088819},{"name":"Setter","opsSec":5524590.840380196,"samples":2762296},{"name":"Method","opsSec":14617882.35412623,"samples":7308942},{"name":"DefineProperty (setter)","opsSec":14276099.913365517,"samples":7138050},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5545752.65948518,"samples":2772877},{"name":"DefineProperty (setter & configurable=false)","opsSec":5536056.3746684985,"samples":2768029},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5537838.549521377,"samples":2768920},{"name":"DefineProperty (writable)","opsSec":14242303.498295704,"samples":7121152},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14302089.79023886,"samples":7151045},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13993496.684034383,"samples":6996749},{"name":"DefineProperties (setter)","opsSec":13982953.268596446,"samples":6991477},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5526594.378887619,"samples":2763298},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5533161.852660891,"samples":2766581}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,459,911|1229956|
|Using replaceAll()|2,271,194|1135598|
|Using replaceAll(//g)|2,269,059|1134530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2459911.511207565,"samples":1229956},{"name":"Using replaceAll()","opsSec":2271194.3231086745,"samples":1135598},{"name":"Using replaceAll(//g)","opsSec":2269059.2721034884,"samples":1134530}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,422,483|4211242|
|{ ...object, __proto__: null }|8,586,325|4293163|
|{ ...object, newProp: true }|561,150|280576|
|structuredClone|243,994|121998|
|JSON.parse + JSON.stringify|188,705|94353|
|loop + object.keys starting with {}|1,082,516|541259|
|loop + object.keys starting with { __proto__: null }|625,493|312747|
|loop + object.keys starting with { randomProp: true }|454,761|227381|
|object.keys + reduce(FN, {})|1,035,673|517837|
|object.keys + reduce(FN, { __proto__: null })|592,088|296045|
|object.keys + reduce(FN, { newProp: true })|437,492|218747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:47:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":8422483.889744041,"samples":4211242},{"name":"{ ...object, __proto__: null }","opsSec":8586325.011071732,"samples":4293163},{"name":"{ ...object, newProp: true }","opsSec":561150.8607759029,"samples":280576},{"name":"structuredClone","opsSec":243994.16714412606,"samples":121998},{"name":"JSON.parse + JSON.stringify","opsSec":188705.95874465298,"samples":94353},{"name":"loop + object.keys starting with {}","opsSec":1082516.9637962864,"samples":541259},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":625493.5122004736,"samples":312747},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":454761.97464579454,"samples":227381},{"name":"object.keys + reduce(FN, {})","opsSec":1035673.6112994503,"samples":517837},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":592088.4856690239,"samples":296045},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":437492.05284219695,"samples":218747}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,890|125446|
|Sort using first char|988,393|494197|
|Sort using localeCompare|909,711|454856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:56:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":250890.40844053763,"samples":125446},{"name":"Sort using first char","opsSec":988393.6553819038,"samples":494197},{"name":"Sort using localeCompare","opsSec":909711.3754524388,"samples":454856}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,738|870|
|{...smallObject} - Total keys: 2|11,323,178|5661590|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,156|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,091|3046|
|{ ...bigObject, ...anotherBigObject }|1,073|537|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,072,913|3036457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,237,926|4618964|
|{ ...smallObject, ...anotherSmallObject }|7,684,843|3842422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:02:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1738.1146635481819,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":11323178.410957105,"samples":5661590},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2156.6708179571747,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6091.846388397672,"samples":3046},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1073.1230374320862,"samples":537},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6072913.097078909,"samples":3036457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9237926.595394291,"samples":4618964},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7684843.363135452,"samples":3842422}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,208|1105|
|streams.web.Readable reading 1e3 * "some data"|606|304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:12:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2208.4044985094765,"samples":1105},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":606.0914568105885,"samples":304}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,036|2519|
|streams.web.WritableStream writing 1e3 * "some data"|1,847|932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5036.105467225245,"samples":2519},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1847.6781690929367,"samples":932}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,756,733|7378367|
|Using backtick (`)|14,867,806|7433904|
|Using array.join|5,598,283|2799142|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:23:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14756733.864876077,"samples":7378367},{"name":"Using backtick (`)","opsSec":14867806.593283623,"samples":7433904},{"name":"Using array.join","opsSec":5598283.21721979,"samples":2799142}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,871,050|5935567|
|(short string) (true) String#slice and strict comparison|12,191,789|6095895|
|(long string) (true) String#endsWith|11,746,269|5873135|
|(long string) (true) String#slice and strict comparison|11,886,005|5943003|
|(short string) (false) String#endsWith|11,900,151|5950076|
|(short string) (false) String#slice and strict comparison|12,835,016|6417509|
|(long string) (false) String#endsWith|11,970,854|5985428|
|(long string) (false) String#slice and strict comparison|12,275,549|6137775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11871050.822697347,"samples":5935567},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12191789.874010589,"samples":6095895},{"name":"(long string) (true) String#endsWith","opsSec":11746269.392547788,"samples":5873135},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11886005.469274053,"samples":5943003},{"name":"(short string) (false) String#endsWith","opsSec":11900151.082514916,"samples":5950076},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12835016.71542469,"samples":6417509},{"name":"(long string) (false) String#endsWith","opsSec":11970854.3230531,"samples":5985428},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12275549.981525086,"samples":6137775}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,234,221|4117111|
|Using indexof|8,157,862|4078932|
|Using RegExp.test|7,513,995|3756998|
|Using RegExp.text with cached regex pattern|7,676,740|3838453|
|Using new RegExp.test|3,143,441|1571721|
|Using new RegExp.test with cached regex pattern|3,501,367|1750684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:51:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8234221.304355417,"samples":4117111},{"name":"Using indexof","opsSec":8157862.875311802,"samples":4078932},{"name":"Using RegExp.test","opsSec":7513995.379701399,"samples":3756998},{"name":"Using RegExp.text with cached regex pattern","opsSec":7676740.104107891,"samples":3838453},{"name":"Using new RegExp.test","opsSec":3143441.325537508,"samples":1571721},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3501367.2109138113,"samples":1750684}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,100,701|6550351|
|(short string) (true) String#slice and strict comparison|12,143,875|6071938|
|(long string) (true) String#startsWith|12,549,261|6274631|
|(long string) (true) String#slice and strict comparison|11,246,120|5623061|
|(short string) (false) String#startsWith|13,918,737|6959369|
|(short string) (false) String#slice and strict comparison|11,915,181|5957591|
|(long string) (false) String#startsWith|13,881,808|6940905|
|(long string) (false) String#slice and strict comparison|11,645,075|5822538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13100701.85895668,"samples":6550351},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12143875.286211787,"samples":6071938},{"name":"(long string) (true) String#startsWith","opsSec":12549261.314743755,"samples":6274631},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11246120.866235752,"samples":5623061},{"name":"(short string) (false) String#startsWith","opsSec":13918737.410346592,"samples":6959369},{"name":"(short string) (false) String#slice and strict comparison","opsSec":11915181.43796535,"samples":5957591},{"name":"(long string) (false) String#startsWith","opsSec":13881808.814720444,"samples":6940905},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11645075.962431803,"samples":5822538}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,497,172|7248587|
|Using this|14,873,010|7436506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:21:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14497172.757533893,"samples":7248587},{"name":"Using this","opsSec":14873010.470010938,"samples":7436506}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,719,772|2859887|
|Date.now()|8,612,409|4306205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5719772.305347074,"samples":2859887},{"name":"Date.now()","opsSec":8612409.670692634,"samples":4306205}]}-->
