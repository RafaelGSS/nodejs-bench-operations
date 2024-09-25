## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,084,133|7542069|
|Using dot notation|14,829,183|7414592|
|Using define property (writable)|2,843,328|1421665|
|Using define property initialized (writable)|3,627,291|1813646|
|Using define property (getter)|1,776,545|888273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15084133.324458163,"samples":7542069},{"name":"Using dot notation","opsSec":14829183.377337873,"samples":7414592},{"name":"Using define property (writable)","opsSec":2843328.5726163415,"samples":1421665},{"name":"Using define property initialized (writable)","opsSec":3627291.0062555242,"samples":1813646},{"name":"Using define property (getter)","opsSec":1776545.928948273,"samples":888273}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|29.045ms
new Array(length)|1,000,000|15.461ms
array.push|100,000,000|1,904.039ms
new Array(length)|100,000,000|4,338.591ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.468ms
new Array(length)|10,000|3.379ms
array.push|1,000,000|258.789ms
new Array(length)|1,000,000|4.87ms
array.push|100,000,000|2,332.183ms
new Array(length)|100,000,000|4,473.702ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|247|124|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:02:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":247.75755535692778,"samples":124},{"name":"Array.from","opsSec":21.329010364334348,"samples":11}]}-->

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
|[True conditional] Using instanceof only|265,739|132870|
|[True conditional] Using constructor name|268,915|134458|
|[True conditional] Check if property is valid then instanceof |278,523|139262|
|[False conditional] Using instanceof only|11,104,849|5552425|
|[False conditional] Using constructor name|14,483,027|7241514|
|[False conditional] Check if property is valid then instanceof |14,763,513|7381757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:19:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":265739.46536005056,"samples":132870},{"name":"[True conditional] Using constructor name","opsSec":268915.4842015227,"samples":134458},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":278523.4864747829,"samples":139262},{"name":"[False conditional] Using instanceof only","opsSec":11104849.050596694,"samples":5552425},{"name":"[False conditional] Using constructor name","opsSec":14483027.457430301,"samples":7241514},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14763513.594400741,"samples":7381757}]}-->

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
|Setter (class)|14,559,270|7279636|
|Setter|5,568,886|2784444|
|Method|14,390,458|7195230|
|DefineProperty (setter)|14,904,136|7452069|
|DefineProperty (setter & enumerable=false)|5,689,759|2844880|
|DefineProperty (setter & configurable=false)|5,673,674|2836838|
|DefineProperty (setter & enumerable=false & configurable=false)|5,651,142|2825572|
|DefineProperty (writable)|14,717,288|7358645|
|DefineProperty (writable & enumerable=false)|14,317,486|7158744|
|DefineProperty (writable & enumerable=false & configurable=false)|14,402,861|7201431|
|DefineProperties (setter)|14,230,525|7115263|
|DefineProperties (setter & enumerable=false)|5,637,517|2818759|
|DefineProperties (setter & enumerable=false & configurable=false)|5,655,134|2827568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:41:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14559270.548278825,"samples":7279636},{"name":"Setter","opsSec":5568886.6818584725,"samples":2784444},{"name":"Method","opsSec":14390458.554335924,"samples":7195230},{"name":"DefineProperty (setter)","opsSec":14904136.336109675,"samples":7452069},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5689759.295020871,"samples":2844880},{"name":"DefineProperty (setter & configurable=false)","opsSec":5673674.896548356,"samples":2836838},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5651142.91665647,"samples":2825572},{"name":"DefineProperty (writable)","opsSec":14717288.410698934,"samples":7358645},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14317486.143132914,"samples":7158744},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14402861.98138177,"samples":7201431},{"name":"DefineProperties (setter)","opsSec":14230525.131172612,"samples":7115263},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5637517.125775227,"samples":2818759},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5655134.098912459,"samples":2827568}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,587,910|1293956|
|Using replaceAll()|2,352,344|1176173|
|Using replaceAll(//g)|2,324,996|1162499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:01:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2587910.991455389,"samples":1293956},{"name":"Using replaceAll()","opsSec":2352344.174878113,"samples":1176173},{"name":"Using replaceAll(//g)","opsSec":2324996.4110176875,"samples":1162499}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,818,913|4409457|
|{ ...object, __proto__: null }|8,924,831|4462416|
|{ ...object, newProp: true }|553,958|276980|
|structuredClone|247,124|123563|
|JSON.parse + JSON.stringify|196,426|98214|
|loop + object.keys starting with {}|1,120,305|560153|
|loop + object.keys starting with { __proto__: null }|666,195|333098|
|loop + object.keys starting with { randomProp: true }|485,881|242941|
|object.keys + reduce(FN, {})|1,095,050|547526|
|object.keys + reduce(FN, { __proto__: null })|620,419|310210|
|object.keys + reduce(FN, { newProp: true })|479,589|239795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:08:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8818913.86333146,"samples":4409457},{"name":"{ ...object, __proto__: null }","opsSec":8924831.124790525,"samples":4462416},{"name":"{ ...object, newProp: true }","opsSec":553958.448658958,"samples":276980},{"name":"structuredClone","opsSec":247124.91426329545,"samples":123563},{"name":"JSON.parse + JSON.stringify","opsSec":196426.2978740946,"samples":98214},{"name":"loop + object.keys starting with {}","opsSec":1120305.2384182643,"samples":560153},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":666195.222667258,"samples":333098},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":485881.2817346152,"samples":242941},{"name":"object.keys + reduce(FN, {})","opsSec":1095050.2460215916,"samples":547526},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":620419.5149256061,"samples":310210},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":479589.5819956938,"samples":239795}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|255,786|127894|
|Sort using first char|1,029,146|514574|
|Sort using localeCompare|924,813|462407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:17:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":255786.94191469692,"samples":127894},{"name":"Sort using first char","opsSec":1029146.7931320512,"samples":514574},{"name":"Sort using localeCompare","opsSec":924813.358765924,"samples":462407}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|11,791,076|5895539|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,157|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,047|3024|
|{ ...bigObject, ...anotherBigObject }|1,087|544|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,248,364|3124183|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,532,227|4766114|
|{ ...smallObject, ...anotherSmallObject }|8,093,122|4046562|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.833417534062,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":11791076.359218739,"samples":5895539},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2157.2637216174967,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6047.231251637141,"samples":3024},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1087.621394698644,"samples":544},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6248364.720604485,"samples":3124183},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9532227.737259176,"samples":4766114},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8093122.874348269,"samples":4046562}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,335|1168|
|streams.web.Readable reading 1e3 * "some data"|613|307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:32:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2335.546245293549,"samples":1168},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":613.6161977979854,"samples":307}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,906|2454|
|streams.web.WritableStream writing 1e3 * "some data"|2,080|1043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:37:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4906.496620295064,"samples":2454},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2080.73296168174,"samples":1043}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,828,167|7414084|
|Using backtick (`)|15,109,329|7554665|
|Using array.join|5,738,324|2869163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:44:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14828167.513894787,"samples":7414084},{"name":"Using backtick (`)","opsSec":15109329.030912973,"samples":7554665},{"name":"Using array.join","opsSec":5738324.694040879,"samples":2869163}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,045,954|6022978|
|(short string) (true) String#slice and strict comparison|12,081,236|6040619|
|(long string) (true) String#endsWith|11,739,042|5869522|
|(long string) (true) String#slice and strict comparison|11,837,242|5918622|
|(short string) (false) String#endsWith|12,079,039|6039520|
|(short string) (false) String#slice and strict comparison|12,483,546|6241774|
|(long string) (false) String#endsWith|12,141,296|6070649|
|(long string) (false) String#slice and strict comparison|12,163,741|6081871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:53:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12045954.279460024,"samples":6022978},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12081236.906261401,"samples":6040619},{"name":"(long string) (true) String#endsWith","opsSec":11739042.958625533,"samples":5869522},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11837242.952251328,"samples":5918622},{"name":"(short string) (false) String#endsWith","opsSec":12079039.31265665,"samples":6039520},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12483546.742509248,"samples":6241774},{"name":"(long string) (false) String#endsWith","opsSec":12141296.442781363,"samples":6070649},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12163741.17751526,"samples":6081871}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,313,526|4156764|
|Using indexof|8,292,643|4146322|
|Using RegExp.test|7,631,183|3815592|
|Using RegExp.text with cached regex pattern|7,740,790|3870396|
|Using new RegExp.test|3,177,946|1588974|
|Using new RegExp.test with cached regex pattern|3,509,829|1754915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:09:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8313526.326674746,"samples":4156764},{"name":"Using indexof","opsSec":8292643.604205229,"samples":4146322},{"name":"Using RegExp.test","opsSec":7631183.757505963,"samples":3815592},{"name":"Using RegExp.text with cached regex pattern","opsSec":7740790.75673483,"samples":3870396},{"name":"Using new RegExp.test","opsSec":3177946.5851244917,"samples":1588974},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3509829.612740675,"samples":1754915}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,014,742|7007372|
|(short string) (true) String#slice and strict comparison|12,682,673|6341337|
|(long string) (true) String#startsWith|13,198,303|6599152|
|(long string) (true) String#slice and strict comparison|12,197,428|6098715|
|(short string) (false) String#startsWith|14,558,327|7279164|
|(short string) (false) String#slice and strict comparison|12,812,689|6406346|
|(long string) (false) String#startsWith|14,612,002|7306002|
|(long string) (false) String#slice and strict comparison|12,619,271|6309636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:18:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14014742.460148223,"samples":7007372},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12682673.154474143,"samples":6341337},{"name":"(long string) (true) String#startsWith","opsSec":13198303.786416322,"samples":6599152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12197428.489336269,"samples":6098715},{"name":"(short string) (false) String#startsWith","opsSec":14558327.016520746,"samples":7279164},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12812689.752252273,"samples":6406346},{"name":"(long string) (false) String#startsWith","opsSec":14612002.470514845,"samples":7306002},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12619271.543622553,"samples":6309636}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,236,132|7118067|
|Using this|14,604,368|7302185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:34:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14236132.42065564,"samples":7118067},{"name":"Using this","opsSec":14604368.697423207,"samples":7302185}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,665,452|2832727|
|Date.now()|8,190,404|4095204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5665452.680866795,"samples":2832727},{"name":"Date.now()","opsSec":8190404.488477023,"samples":4095204}]}-->
