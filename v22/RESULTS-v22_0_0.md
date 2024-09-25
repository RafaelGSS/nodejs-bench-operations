## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,237,386|7618694|
|Using dot notation|14,996,493|7498247|
|Using define property (writable)|3,301,993|1650997|
|Using define property initialized (writable)|3,979,474|1989738|
|Using define property (getter)|2,061,445|1030723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:22:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15237386.384958118,"samples":7618694},{"name":"Using dot notation","opsSec":14996493.339912929,"samples":7498247},{"name":"Using define property (writable)","opsSec":3301993.1481033545,"samples":1650997},{"name":"Using define property initialized (writable)","opsSec":3979474.5435009375,"samples":1989738},{"name":"Using define property (getter)","opsSec":2061445.6660356098,"samples":1030723}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.294ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|23.281ms
new Array(length)|1,000,000|16.606ms
array.push|100,000,000|1,938.221ms
new Array(length)|100,000,000|4,094.572ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.014ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|163.626ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|17.289ms
new Array(length)|1,000,000|8.513ms
array.push|100,000,000|2,069.805ms
new Array(length)|100,000,000|4,775.388ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|337|169|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":337.2830280234071,"samples":169},{"name":"Array.from","opsSec":23.774386822456485,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,279|2140|
|new Blob (1024)|593|297|
|text (128)|4,481|2241|
|text (1024)|576|289|
|arrayBuffer (128)|4,614|2308|
|arrayBuffer (1024)|565|283|
|slice (0, 64)|183,257|91629|
|slice (0, 512)|37,718|18860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:15:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4279.611068946148,"samples":2140},{"name":"new Blob (1024)","opsSec":593.81229830777,"samples":297},{"name":"text (128)","opsSec":4481.411787814181,"samples":2241},{"name":"text (1024)","opsSec":576.9789227084136,"samples":289},{"name":"arrayBuffer (128)","opsSec":4614.238698946286,"samples":2308},{"name":"arrayBuffer (1024)","opsSec":565.0752633726709,"samples":283},{"name":"slice (0, 64)","opsSec":183257.37252671938,"samples":91629},{"name":"slice (0, 512)","opsSec":37718.894383765815,"samples":18860}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,192|164097|
|[True conditional] Using constructor name|316,427|158214|
|[True conditional] Check if property is valid then instanceof |318,265|159133|
|[False conditional] Using instanceof only|14,151,869|7075935|
|[False conditional] Using constructor name|14,209,951|7104976|
|[False conditional] Check if property is valid then instanceof |14,421,532|7210767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:24:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328192.5789262169,"samples":164097},{"name":"[True conditional] Using constructor name","opsSec":316427.36714581354,"samples":158214},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318265.2253424097,"samples":159133},{"name":"[False conditional] Using instanceof only","opsSec":14151869.858499067,"samples":7075935},{"name":"[False conditional] Using constructor name","opsSec":14209951.573709993,"samples":7104976},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14421532.846151695,"samples":7210767}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,243|3622|
|crypto.verify('RSA-SHA256')|7,319|3660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:30:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7243.842721686802,"samples":3622},{"name":"crypto.verify('RSA-SHA256')","opsSec":7319.147655978938,"samples":3660}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,116,205|558103|
|fromUnixToISOString(new Date())|1,581,735|790868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1116205.2610724864,"samples":558103},{"name":"fromUnixToISOString(new Date())","opsSec":1581735.2977082313,"samples":790868}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,993|11285|
|Intl.DateTimeFormat().format(new Date())|23,096|11549|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,214|11608|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,709|11355|
|Reusing Intl.DateTimeFormat()|623,536|311769|
|Date.toLocaleDateString()|627,537|313769|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,289|11645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19993.503785513058,"samples":11285},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":23096.882942347613,"samples":11549},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23214.058376155375,"samples":11608},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22709.723395565292,"samples":11355},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623536.378805177,"samples":311769},{"name":"Date.toLocaleDateString()","opsSec":627537.1515696802,"samples":313769},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23289.270626620368,"samples":11645}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,407|438704|
|Using brackets {}|883,507|441754|
|Using '' + |876,316|438159|
|Using date.toString()|947,048|473525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":877407.3630018968,"samples":438704},{"name":"Using brackets {}","opsSec":883507.521139451,"samples":441754},{"name":"Using '' + ","opsSec":876316.3052043504,"samples":438159},{"name":"Using date.toString()","opsSec":947048.0471868685,"samples":473525}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,733,526|1366764|
|Using delete property (proto: null)|7,800,453|3900227|
|Using delete property (cached proto: null)|2,691,868|1345935|
|Using undefined assignment|12,810,091|6405046|
|Using undefined assignment (proto: null)|8,330,145|4165073|
|Using undefined property (cached proto: null)|12,764,534|6382268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2733526.0810695505,"samples":1366764},{"name":"Using delete property (proto: null)","opsSec":7800453.70361081,"samples":3900227},{"name":"Using delete property (cached proto: null)","opsSec":2691868.6863668924,"samples":1345935},{"name":"Using undefined assignment","opsSec":12810091.28244954,"samples":6405046},{"name":"Using undefined assignment (proto: null)","opsSec":8330145.200256271,"samples":4165073},{"name":"Using undefined property (cached proto: null)","opsSec":12764534.851195654,"samples":6382268}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|302,815|151408|
|NodeError|301,847|150924|
|NodeError Range|302,309|151155|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:03:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":302815.7304940367,"samples":151408},{"name":"NodeError","opsSec":301847.12041752745,"samples":150924},{"name":"NodeError Range","opsSec":302309.26599310996,"samples":151155}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,357,030|678516|
|Function returning explicitly undefined|1,351,188|675595|
|Function returning implicitly undefined|1,354,330|677166|
|Function returning string|1,353,349|676675|
|Function returning integer|1,358,415|679208|
|Function returning float|1,356,520|678261|
|Function returning functions|1,267,572|633787|
|Function returning arrow functions|1,355,035|677518|
|Function returning empty object|1,391,628|695815|
|Function returning empty array|1,380,330|690166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:15:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1357030.2630037016,"samples":678516},{"name":"Function returning explicitly undefined","opsSec":1351188.2731798831,"samples":675595},{"name":"Function returning implicitly undefined","opsSec":1354330.6294195012,"samples":677166},{"name":"Function returning string","opsSec":1353349.3693414421,"samples":676675},{"name":"Function returning integer","opsSec":1358415.3533916217,"samples":679208},{"name":"Function returning float","opsSec":1356520.9527609989,"samples":678261},{"name":"Function returning functions","opsSec":1267572.5220152512,"samples":633787},{"name":"Function returning arrow functions","opsSec":1355035.1192228026,"samples":677518},{"name":"Function returning empty object","opsSec":1391628.691865306,"samples":695815},{"name":"Function returning empty array","opsSec":1380330.746661648,"samples":690166}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,659,576|6829789|
|using Array.includes (first item)|14,732,821|7366411|
|Using raw comparison|14,658,519|7329260|
|Using raw comparison (first item)|14,991,257|7495629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13659576.879913073,"samples":6829789},{"name":"using Array.includes (first item)","opsSec":14732821.617054882,"samples":7366411},{"name":"Using raw comparison","opsSec":14658519.765604496,"samples":7329260},{"name":"Using raw comparison (first item)","opsSec":14991257.849881219,"samples":7495629}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,543,544|6271773|
|Using Object.getOwnPropertyNames()|12,586,119|6293060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:33:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12543544.720546803,"samples":6271773},{"name":"Using Object.getOwnPropertyNames()","opsSec":12586119.244881446,"samples":6293060}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,747,606|6873804|
|Length = 10_000 - Array.at|13,824,570|6912286|
|Length = 1_000_000 - Array.at|13,787,177|6893589|
|Length = 100 - Array[length - 1]|13,920,651|6960326|
|Length = 10_000 - Array[length - 1]|14,096,680|7048341|
|Length = 1_000_000 - Array[length - 1]|13,475,055|6737528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13747606.267853437,"samples":6873804},{"name":"Length = 10_000 - Array.at","opsSec":13824570.672906147,"samples":6912286},{"name":"Length = 1_000_000 - Array.at","opsSec":13787177.751751969,"samples":6893589},{"name":"Length = 100 - Array[length - 1]","opsSec":13920651.749415321,"samples":6960326},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14096680.703299811,"samples":7048341},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13475055.945800135,"samples":6737528}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,718,252|7359127|
|~ (small)|14,946,089|7473051|
|Math.floor (long)|14,758,233|7379117|
|~ (long)|15,016,215|7508108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14718252.734196693,"samples":7359127},{"name":"~ (small)","opsSec":14946089.116164938,"samples":7473051},{"name":"Math.floor (long)","opsSec":14758233.557007695,"samples":7379117},{"name":"~ (long)","opsSec":15016215.158937613,"samples":7508108}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,260,014|6130008|
|Object.create({})|1,904,039|952020|
|Cached Empty.prototype|12,740,827|6370414|
|Empty.prototype|2,411,627|1205814|
|Empty class|1,406,890|703446|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:27:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12260014.479739983,"samples":6130008},{"name":"Object.create({})","opsSec":1904039.424976096,"samples":952020},{"name":"Cached Empty.prototype","opsSec":12740827.388381446,"samples":6370414},{"name":"Empty.prototype","opsSec":2411627.966232845,"samples":1205814},{"name":"Empty class","opsSec":1406890.362381756,"samples":703446}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,329,440|7164721|
|Using optional chain (obj.field?.field2) (undefined)|14,046,834|7023418|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,982,680|7491341|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,894,045|7447024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:38:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14329440.452397022,"samples":7164721},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14046834.539275376,"samples":7023418},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14982680.801208202,"samples":7491341},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14894045.94478861,"samples":7447024}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,521,288|7260645|
|Using parseInt(x, 10) - big number (10 len)|14,267,343|7133672|
|Using + - small number (2 len)|13,817,233|6908618|
|Using + - big number (10 len)|13,900,451|6950226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:48:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14521288.983576678,"samples":7260645},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14267343.514876418,"samples":7133672},{"name":"Using + - small number (2 len)","opsSec":13817233.872088159,"samples":6908618},{"name":"Using + - big number (10 len)","opsSec":13900451.416204408,"samples":6950226}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,057,175|528588|
|Using ? operator to avoid rejection|1,046,916|523459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":1057175.4566114382,"samples":528588},{"name":"Using ? operator to avoid rejection","opsSec":1046916.5050032979,"samples":523459}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,011,537|7005769|
|Raw usage underscore usage|13,510,701|6755352|
|Manipulating private properties using #|14,104,421|7052211|
|Manipulating private properties using underscore(_)|14,335,534|7167768|
|Manipulating private properties using Symbol|13,995,815|6997908|
|Manipulating private properties using PrivateSymbol|11,011,675|5505838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":14011537.719934305,"samples":7005769},{"name":"Raw usage underscore usage","opsSec":13510701.919316992,"samples":6755352},{"name":"Manipulating private properties using #","opsSec":14104421.604886515,"samples":7052211},{"name":"Manipulating private properties using underscore(_)","opsSec":14335534.566164644,"samples":7167768},{"name":"Manipulating private properties using Symbol","opsSec":13995815.888116123,"samples":6997908},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11011675.713551477,"samples":5505838}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,948,881|2474441|
|Adding property in the object creation - small object|4,928,121|2464061|
|Adding property after the function creation - small class|250,846|125704|
|Adding property in the function creation - small class|291,621|145811|
|Adding property after the class creation - small class|264,231|132116|
|Adding property in the class creation - small class|270,803|135402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4948881.396234564,"samples":2474441},{"name":"Adding property in the object creation - small object","opsSec":4928121.970418493,"samples":2464061},{"name":"Adding property after the function creation - small class","opsSec":250846.7059125736,"samples":125704},{"name":"Adding property in the function creation - small class","opsSec":291621.3747635661,"samples":145811},{"name":"Adding property after the class creation - small class","opsSec":264231.468894784,"samples":132116},{"name":"Adding property in the class creation - small class","opsSec":270803.8201862607,"samples":135402}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,912,823|7456412|
|Getter|12,284,653|6142327|
|Method|14,690,919|7345460|
|DefineProperty (getter)|14,943,951|7471976|
|DefineProperty (getter & enumerable=false)|12,653,596|6326799|
|DefineProperty (getter & configurable=false)|14,922,654|7461328|
|DefineProperty (getter & enumerable=false & configurable=false)|12,567,078|6283540|
|DefineProperty (writable)|15,067,250|7533626|
|DefineProperty (writable & enumerable=false)|14,693,448|7346725|
|DefineProperty (writable & enumerable=false & configurable=false)|14,575,101|7287551|
|DefineProperties (getter)|12,806,718|6403360|
|DefineProperties (getter & enumerable=false)|12,782,057|6391029|
|DefineProperties (getter & enumerable=false & configurable=false)|12,716,227|6358114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14912823.46325905,"samples":7456412},{"name":"Getter","opsSec":12284653.090739973,"samples":6142327},{"name":"Method","opsSec":14690919.236204913,"samples":7345460},{"name":"DefineProperty (getter)","opsSec":14943951.820684912,"samples":7471976},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12653596.38043597,"samples":6326799},{"name":"DefineProperty (getter & configurable=false)","opsSec":14922654.239157474,"samples":7461328},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12567078.843904797,"samples":6283540},{"name":"DefineProperty (writable)","opsSec":15067250.433582949,"samples":7533626},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14693448.35442859,"samples":7346725},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14575101.446262399,"samples":7287551},{"name":"DefineProperties (getter)","opsSec":12806718.87294313,"samples":6403360},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12782057.182093147,"samples":6391029},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12716227.542197518,"samples":6358114}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,854,497|7427378|
|Setter|5,578,640|2789321|
|Method|13,354,951|6677476|
|DefineProperty (setter)|13,775,492|6887747|
|DefineProperty (setter & enumerable=false)|5,532,147|2766074|
|DefineProperty (setter & configurable=false)|5,644,161|2822081|
|DefineProperty (setter & enumerable=false & configurable=false)|5,673,662|2836832|
|DefineProperty (writable)|15,291,972|7645987|
|DefineProperty (writable & enumerable=false)|14,268,859|7134430|
|DefineProperty (writable & enumerable=false & configurable=false)|15,299,385|7649693|
|DefineProperties (setter)|13,805,590|6902796|
|DefineProperties (setter & enumerable=false)|5,571,094|2785548|
|DefineProperties (setter & enumerable=false & configurable=false)|5,504,834|2752418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:57:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14854497.20528381,"samples":7427378},{"name":"Setter","opsSec":5578640.449109991,"samples":2789321},{"name":"Method","opsSec":13354951.251903456,"samples":6677476},{"name":"DefineProperty (setter)","opsSec":13775492.539901936,"samples":6887747},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5532147.922509571,"samples":2766074},{"name":"DefineProperty (setter & configurable=false)","opsSec":5644161.232407611,"samples":2822081},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5673662.161754551,"samples":2836832},{"name":"DefineProperty (writable)","opsSec":15291972.531892031,"samples":7645987},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14268859.943093143,"samples":7134430},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15299385.63312386,"samples":7649693},{"name":"DefineProperties (setter)","opsSec":13805590.481610542,"samples":6902796},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5571094.127949113,"samples":2785548},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5504834.3262920445,"samples":2752418}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,666,711|1333356|
|Using replaceAll()|2,518,087|1259045|
|Using replaceAll(//g)|2,456,079|1228040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:04:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2666711.8933331813,"samples":1333356},{"name":"Using replaceAll()","opsSec":2518087.5222038976,"samples":1259045},{"name":"Using replaceAll(//g)","opsSec":2456079.115813051,"samples":1228040}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,454,084|5227043|
|{ ...object, __proto__: null }|2,179,677|1089839|
|{ ...object, newProp: true }|10,025,045|5012524|
|structuredClone|289,499|144750|
|JSON.parse + JSON.stringify|278,645|139323|
|loop + object.keys starting with {}|1,455,588|727795|
|loop + object.keys starting with { __proto__: null }|807,113|403557|
|loop + object.keys starting with { randomProp: true }|581,840|290921|
|object.keys + reduce(FN, {})|1,451,627|725814|
|object.keys + reduce(FN, { __proto__: null })|753,931|376966|
|object.keys + reduce(FN, { newProp: true })|584,857|292429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:14:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10454084.181036847,"samples":5227043},{"name":"{ ...object, __proto__: null }","opsSec":2179677.638167712,"samples":1089839},{"name":"{ ...object, newProp: true }","opsSec":10025045.77442851,"samples":5012524},{"name":"structuredClone","opsSec":289499.52753695234,"samples":144750},{"name":"JSON.parse + JSON.stringify","opsSec":278645.2961421572,"samples":139323},{"name":"loop + object.keys starting with {}","opsSec":1455588.8005964027,"samples":727795},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":807113.4850616807,"samples":403557},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":581840.5779823653,"samples":290921},{"name":"object.keys + reduce(FN, {})","opsSec":1451627.0303086329,"samples":725814},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":753931.6245418142,"samples":376966},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":584857.4724587429,"samples":292429}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|294,569|147285|
|Sort using first char|1,146,733|573367|
|Sort using localeCompare|1,058,262|529132|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:19:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":294569.7054303116,"samples":147285},{"name":"Sort using first char","opsSec":1146733.4954356833,"samples":573367},{"name":"Sort using localeCompare","opsSec":1058262.0083506552,"samples":529132}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,861|931|
|{...smallObject} - Total keys: 2|10,842,120|5421061|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,293|1147|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,707|3354|
|{ ...bigObject, ...anotherBigObject }|1,135|568|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,542,036|3271019|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,108,917|5054459|
|{ ...smallObject, ...anotherSmallObject }|8,165,703|4082852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1861.126428199456,"samples":931},{"name":"{...smallObject} - Total keys: 2","opsSec":10842120.807409221,"samples":5421061},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2293.6946725397593,"samples":1147},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6707.80067099606,"samples":3354},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1135.420519970902,"samples":568},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6542036.62625181,"samples":3271019},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10108917.656354642,"samples":5054459},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8165703.738723296,"samples":4082852}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,077|1039|
|streams.web.Readable reading 1e3 * "some data"|1,746|874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:35:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2077.6559235578243,"samples":1039},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1746.258773943844,"samples":874}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,099|3050|
|streams.web.WritableStream writing 1e3 * "some data"|2,257|1129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:40:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6099.581532109238,"samples":3050},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2257.910568678202,"samples":1129}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,999,146|6999574|
|Using backtick (`)|14,037,473|7018737|
|Using array.join|5,865,078|2932540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":13999146.74003705,"samples":6999574},{"name":"Using backtick (`)","opsSec":14037473.77534284,"samples":7018737},{"name":"Using array.join","opsSec":5865078.733147088,"samples":2932540}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,296,237|7148119|
|(short string) (true) String#slice and strict comparison|12,266,352|6133177|
|(long string) (true) String#endsWith|13,797,098|6898550|
|(long string) (true) String#slice and strict comparison|12,752,873|6376437|
|(short string) (false) String#endsWith|14,264,283|7132142|
|(short string) (false) String#slice and strict comparison|12,762,692|6381347|
|(long string) (false) String#endsWith|13,570,017|6785009|
|(long string) (false) String#slice and strict comparison|12,763,013|6381507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14296237.085082332,"samples":7148119},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12266352.552546525,"samples":6133177},{"name":"(long string) (true) String#endsWith","opsSec":13797098.123480381,"samples":6898550},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12752873.719715236,"samples":6376437},{"name":"(short string) (false) String#endsWith","opsSec":14264283.999643391,"samples":7132142},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12762692.187474415,"samples":6381347},{"name":"(long string) (false) String#endsWith","opsSec":13570017.674368635,"samples":6785009},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12763013.43817686,"samples":6381507}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,051,188|4025595|
|Using indexof|8,197,164|4098583|
|Using RegExp.test|7,590,803|3795402|
|Using RegExp.text with cached regex pattern|7,523,245|3761623|
|Using new RegExp.test|3,303,451|1651726|
|Using new RegExp.test with cached regex pattern|3,678,067|1839034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8051188.212634382,"samples":4025595},{"name":"Using indexof","opsSec":8197164.180210536,"samples":4098583},{"name":"Using RegExp.test","opsSec":7590803.741899717,"samples":3795402},{"name":"Using RegExp.text with cached regex pattern","opsSec":7523245.172402517,"samples":3761623},{"name":"Using new RegExp.test","opsSec":3303451.365731739,"samples":1651726},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3678067.1981838625,"samples":1839034}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,832,463|6916232|
|(short string) (true) String#slice and strict comparison|12,960,677|6480339|
|(long string) (true) String#startsWith|12,963,944|6481973|
|(long string) (true) String#slice and strict comparison|13,102,267|6551134|
|(short string) (false) String#startsWith|14,287,717|7143859|
|(short string) (false) String#slice and strict comparison|13,410,857|6705429|
|(long string) (false) String#startsWith|14,210,376|7105189|
|(long string) (false) String#slice and strict comparison|13,223,485|6611743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:30:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13832463.004085677,"samples":6916232},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12960677.714815015,"samples":6480339},{"name":"(long string) (true) String#startsWith","opsSec":12963944.158906508,"samples":6481973},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13102267.86892637,"samples":6551134},{"name":"(short string) (false) String#startsWith","opsSec":14287717.88561048,"samples":7143859},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13410857.061422547,"samples":6705429},{"name":"(long string) (false) String#startsWith","opsSec":14210376.323067702,"samples":7105189},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13223485.10103824,"samples":6611743}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,085,708|7042855|
|Using this|14,503,390|7251696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14085708.309724655,"samples":7042855},{"name":"Using this","opsSec":14503390.114527252,"samples":7251696}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,021,257|2510629|
|Date.now()|8,876,591|4438296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5021257.206631804,"samples":2510629},{"name":"Date.now()","opsSec":8876591.769213703,"samples":4438296}]}-->
