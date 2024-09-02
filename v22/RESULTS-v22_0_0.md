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
array.push|10|0.003ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.298ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|23.406ms
new Array(length)|1,000,000|13.919ms
array.push|100,000,000|1,869.894ms
new Array(length)|100,000,000|4,072.93ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|157.17ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|16.845ms
new Array(length)|1,000,000|7.163ms
array.push|100,000,000|2,031.074ms
new Array(length)|100,000,000|4,690.214ms

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
|new Blob (128)|4,971|2486|
|new Blob (1024)|609|313|
|text (128)|4,722|2362|
|text (1024)|585|293|
|arrayBuffer (128)|4,689|2345|
|arrayBuffer (1024)|578|290|
|slice (0, 64)|221,271|110636|
|slice (0, 512)|38,240|19121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:40:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4971.802162047773,"samples":2486},{"name":"new Blob (1024)","opsSec":609.8496707312576,"samples":313},{"name":"text (128)","opsSec":4722.669775049511,"samples":2362},{"name":"text (1024)","opsSec":585.8483742388672,"samples":293},{"name":"arrayBuffer (128)","opsSec":4689.594293817849,"samples":2345},{"name":"arrayBuffer (1024)","opsSec":578.5471258444128,"samples":290},{"name":"slice (0, 64)","opsSec":221271.20740654122,"samples":110636},{"name":"slice (0, 512)","opsSec":38240.87984813861,"samples":19121}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|324,507|162254|
|[True conditional] Using constructor name|318,153|159077|
|[True conditional] Check if property is valid then instanceof |319,808|159905|
|[False conditional] Using instanceof only|14,144,256|7072129|
|[False conditional] Using constructor name|13,822,249|6911125|
|[False conditional] Check if property is valid then instanceof |13,719,510|6859756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:50:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":324507.9487275343,"samples":162254},{"name":"[True conditional] Using constructor name","opsSec":318153.47122904,"samples":159077},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":319808.4214256687,"samples":159905},{"name":"[False conditional] Using instanceof only","opsSec":14144256.783581207,"samples":7072129},{"name":"[False conditional] Using constructor name","opsSec":13822249.778857103,"samples":6911125},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13719510.682719298,"samples":6859756}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,205|3603|
|crypto.verify('RSA-SHA256')|7,189|3595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:55:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7205.007020342488,"samples":3603},{"name":"crypto.verify('RSA-SHA256')","opsSec":7189.734166768907,"samples":3595}]}-->

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
|Sort using default|331,720|165861|
|Sort using first char|1,341,374|670688|
|Sort using localeCompare|1,277,133|638567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":331720.6379550669,"samples":165861},{"name":"Sort using first char","opsSec":1341374.2615789422,"samples":670688},{"name":"Sort using localeCompare","opsSec":1277133.80332106,"samples":638567}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,271|1136|
|{...smallObject} - Total keys: 2|12,265,164|6132583|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,460|1231|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,842|3422|
|{ ...bigObject, ...anotherBigObject }|1,349|675|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,844,688|3422345|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,162,978|5581490|
|{ ...smallObject, ...anotherSmallObject }|8,820,010|4410006|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2271.8825164113136,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12265164.62629672,"samples":6132583},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2460.243720576584,"samples":1231},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6842.425927285079,"samples":3422},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1349.1049767763159,"samples":675},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6844688.247753899,"samples":3422345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11162978.548792602,"samples":5581490},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8820010.35947123,"samples":4410006}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,179|1090|
|streams.web.Readable reading 1e3 * "some data"|2,182|1092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:17:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2179.4485210640178,"samples":1090},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2182.9239625594437,"samples":1092}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,792|3397|
|streams.web.WritableStream writing 1e3 * "some data"|2,999|1500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:22:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6792.43386852295,"samples":3397},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2999.6713020180605,"samples":1500}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,228,484|8114243|
|Using backtick (`)|16,247,327|8123664|
|Using array.join|6,143,819|3071910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:27:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16228484.961383455,"samples":8114243},{"name":"Using backtick (`)","opsSec":16247327.187667854,"samples":8123664},{"name":"Using array.join","opsSec":6143819.520785984,"samples":3071910}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,655,395|7827698|
|(short string) (true) String#slice and strict comparison|15,939,621|7969811|
|(long string) (true) String#endsWith|14,707,435|7353718|
|(long string) (true) String#slice and strict comparison|15,902,127|7951064|
|(short string) (false) String#endsWith|15,716,114|7858058|
|(short string) (false) String#slice and strict comparison|16,005,276|8002639|
|(long string) (false) String#endsWith|15,446,981|7723491|
|(long string) (false) String#slice and strict comparison|15,954,832|7977417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:36:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15655395.467734316,"samples":7827698},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15939621.713058414,"samples":7969811},{"name":"(long string) (true) String#endsWith","opsSec":14707435.823551804,"samples":7353718},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15902127.363949515,"samples":7951064},{"name":"(short string) (false) String#endsWith","opsSec":15716114.051169295,"samples":7858058},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16005276.495496627,"samples":8002639},{"name":"(long string) (false) String#endsWith","opsSec":15446981.474863144,"samples":7723491},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15954832.34070593,"samples":7977417}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,077,564|8038783|
|Using indexof|16,134,997|8067499|
|Using RegExp.test|7,885,531|3942767|
|Using RegExp.text with cached regex pattern|8,041,043|4020522|
|Using new RegExp.test|3,561,331|1780666|
|Using new RegExp.test with cached regex pattern|3,887,029|1943515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:43:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16077564.9388786,"samples":8038783},{"name":"Using indexof","opsSec":16134997.515932828,"samples":8067499},{"name":"Using RegExp.test","opsSec":7885531.965546121,"samples":3942767},{"name":"Using RegExp.text with cached regex pattern","opsSec":8041043.935666829,"samples":4020522},{"name":"Using new RegExp.test","opsSec":3561331.3019800335,"samples":1780666},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3887029.4946913966,"samples":1943515}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,671,859|7835930|
|(short string) (true) String#slice and strict comparison|16,081,003|8040502|
|(long string) (true) String#startsWith|14,799,076|7399539|
|(long string) (true) String#slice and strict comparison|16,103,125|8051563|
|(short string) (false) String#startsWith|16,039,284|8019643|
|(short string) (false) String#slice and strict comparison|16,102,012|8051007|
|(long string) (false) String#startsWith|15,604,746|7802374|
|(long string) (false) String#slice and strict comparison|16,115,762|8057882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15671859.65521967,"samples":7835930},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16081003.903480714,"samples":8040502},{"name":"(long string) (true) String#startsWith","opsSec":14799076.105755087,"samples":7399539},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16103125.613441141,"samples":8051563},{"name":"(short string) (false) String#startsWith","opsSec":16039284.877145814,"samples":8019643},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16102012.77618874,"samples":8051007},{"name":"(long string) (false) String#startsWith","opsSec":15604746.377025215,"samples":7802374},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16115762.291886095,"samples":8057882}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,787,768|7893885|
|Using this|15,994,863|7997432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:59:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15787768.610682951,"samples":7893885},{"name":"Using this","opsSec":15994863.968013637,"samples":7997432}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,425,159|3212580|
|Date.now()|9,558,684|4779343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:04:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6425159.370332415,"samples":3212580},{"name":"Date.now()","opsSec":9558684.317676084,"samples":4779343}]}-->
