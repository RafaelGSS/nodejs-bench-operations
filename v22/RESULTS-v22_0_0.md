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
|new Date().toISOString()|1,132,677|566339|
|fromUnixToISOString(new Date())|1,582,873|791438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:00:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1132677.0462858535,"samples":566339},{"name":"fromUnixToISOString(new Date())","opsSec":1582873.9834178681,"samples":791438}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|24,067|12034|
|Intl.DateTimeFormat().format(new Date())|22,501|11251|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,136|11569|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,893|11447|
|Reusing Intl.DateTimeFormat()|640,543|320272|
|Date.toLocaleDateString()|643,525|321763|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,919|11960|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:07:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":24067.993886727745,"samples":12034},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22501.53822343031,"samples":11251},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23136.580431974588,"samples":11569},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22893.334170268703,"samples":11447},{"name":"Reusing Intl.DateTimeFormat()","opsSec":640543.8693286686,"samples":320272},{"name":"Date.toLocaleDateString()","opsSec":643525.1209452722,"samples":321763},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23919.33939568605,"samples":11960}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|879,782|439892|
|Using brackets {}|891,960|445981|
|Using '' + |888,293|444147|
|Using date.toString()|951,528|475765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":879782.6099431192,"samples":439892},{"name":"Using brackets {}","opsSec":891960.1197474392,"samples":445981},{"name":"Using '' + ","opsSec":888293.3124603652,"samples":444147},{"name":"Using date.toString()","opsSec":951528.6697629713,"samples":475765}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,040,914|1520458|
|Using delete property (proto: null)|8,234,972|4117488|
|Using delete property (cached proto: null)|2,990,735|1495368|
|Using undefined assignment|13,604,057|6802029|
|Using undefined assignment (proto: null)|8,600,119|4300060|
|Using undefined property (cached proto: null)|13,810,527|6905264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":3040914.5099520828,"samples":1520458},{"name":"Using delete property (proto: null)","opsSec":8234972.689497108,"samples":4117488},{"name":"Using delete property (cached proto: null)","opsSec":2990735.706923099,"samples":1495368},{"name":"Using undefined assignment","opsSec":13604057.86384515,"samples":6802029},{"name":"Using undefined assignment (proto: null)","opsSec":8600119.604466762,"samples":4300060},{"name":"Using undefined property (cached proto: null)","opsSec":13810527.806614965,"samples":6905264}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|298,667|149334|
|NodeError|299,897|149949|
|NodeError Range|282,140|141071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:28:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":298667.06338014593,"samples":149334},{"name":"NodeError","opsSec":299897.761881172,"samples":149949},{"name":"NodeError Range","opsSec":282140.5531832354,"samples":141071}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,463,608|731805|
|Function returning explicitly undefined|1,484,201|742101|
|Function returning implicitly undefined|1,512,135|756068|
|Function returning string|1,495,247|747624|
|Function returning integer|1,512,167|756084|
|Function returning float|1,504,098|752050|
|Function returning functions|1,460,713|730357|
|Function returning arrow functions|1,483,243|741622|
|Function returning empty object|1,514,380|757191|
|Function returning empty array|1,519,347|759674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1463608.4251571156,"samples":731805},{"name":"Function returning explicitly undefined","opsSec":1484201.8248631372,"samples":742101},{"name":"Function returning implicitly undefined","opsSec":1512135.7610841522,"samples":756068},{"name":"Function returning string","opsSec":1495247.8534641813,"samples":747624},{"name":"Function returning integer","opsSec":1512167.6612687178,"samples":756084},{"name":"Function returning float","opsSec":1504098.9381068954,"samples":752050},{"name":"Function returning functions","opsSec":1460713.4157093025,"samples":730357},{"name":"Function returning arrow functions","opsSec":1483243.830905117,"samples":741622},{"name":"Function returning empty object","opsSec":1514380.7582166905,"samples":757191},{"name":"Function returning empty array","opsSec":1519347.1461261064,"samples":759674}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,410,449|6705225|
|using Array.includes (first item)|13,297,987|6648994|
|Using raw comparison|14,417,369|7208685|
|Using raw comparison (first item)|14,459,861|7229931|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:46:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13410449.731765447,"samples":6705225},{"name":"using Array.includes (first item)","opsSec":13297987.707460815,"samples":6648994},{"name":"Using raw comparison","opsSec":14417369.27907601,"samples":7208685},{"name":"Using raw comparison (first item)","opsSec":14459861.132220028,"samples":7229931}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,921,246|5960624|
|Using Object.getOwnPropertyNames()|11,215,341|5607671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:54:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":11921246.545606932,"samples":5960624},{"name":"Using Object.getOwnPropertyNames()","opsSec":11215341.730862431,"samples":5607671}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,108,408|7054205|
|Length = 10_000 - Array.at|14,148,620|7074311|
|Length = 1_000_000 - Array.at|14,020,232|7010117|
|Length = 100 - Array[length - 1]|13,271,873|6635937|
|Length = 10_000 - Array[length - 1]|14,114,473|7057237|
|Length = 1_000_000 - Array[length - 1]|13,990,325|6995163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:07:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14108408.87127661,"samples":7054205},{"name":"Length = 10_000 - Array.at","opsSec":14148620.698257586,"samples":7074311},{"name":"Length = 1_000_000 - Array.at","opsSec":14020232.149447063,"samples":7010117},{"name":"Length = 100 - Array[length - 1]","opsSec":13271873.973448519,"samples":6635937},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14114473.745868115,"samples":7057237},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13990325.412397379,"samples":6995163}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,411,273|7205637|
|~ (small)|14,082,236|7041119|
|Math.floor (long)|14,677,100|7338551|
|~ (long)|14,047,367|7023684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:17:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14411273.481348693,"samples":7205637},{"name":"~ (small)","opsSec":14082236.620068524,"samples":7041119},{"name":"Math.floor (long)","opsSec":14677100.56163266,"samples":7338551},{"name":"~ (long)","opsSec":14047367.494423585,"samples":7023684}]}-->

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
