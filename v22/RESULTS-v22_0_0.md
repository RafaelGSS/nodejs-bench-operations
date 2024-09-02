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
|Adding property after object creation - small object|3,822,643|1911322|
|Adding property in the object creation - small object|3,973,637|1986819|
|Adding property after the function creation - small class|298,624|149313|
|Adding property in the function creation - small class|317,525|158763|
|Adding property after the class creation - small class|313,037|156520|
|Adding property in the class creation - small class|320,645|160323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3822643.9388366523,"samples":1911322},{"name":"Adding property in the object creation - small object","opsSec":3973637.086062586,"samples":1986819},{"name":"Adding property after the function creation - small class","opsSec":298624.8819484603,"samples":149313},{"name":"Adding property in the function creation - small class","opsSec":317525.9460205917,"samples":158763},{"name":"Adding property after the class creation - small class","opsSec":313037.99405253836,"samples":156520},{"name":"Adding property in the class creation - small class","opsSec":320645.1874848677,"samples":160323}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,085,140|8042571|
|Getter|13,879,805|6939903|
|Method|15,992,637|7996319|
|DefineProperty (getter)|16,016,061|8008031|
|DefineProperty (getter & enumerable=false)|13,167,784|6583893|
|DefineProperty (getter & configurable=false)|16,248,295|8124148|
|DefineProperty (getter & enumerable=false & configurable=false)|13,549,661|6774831|
|DefineProperty (writable)|16,151,466|8075734|
|DefineProperty (writable & enumerable=false)|16,043,768|8021885|
|DefineProperty (writable & enumerable=false & configurable=false)|16,148,930|8074466|
|DefineProperties (getter)|13,963,492|6981747|
|DefineProperties (getter & enumerable=false)|14,014,638|7007320|
|DefineProperties (getter & enumerable=false & configurable=false)|14,042,224|7021113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16085140.230647845,"samples":8042571},{"name":"Getter","opsSec":13879805.55581926,"samples":6939903},{"name":"Method","opsSec":15992637.616128977,"samples":7996319},{"name":"DefineProperty (getter)","opsSec":16016061.32735829,"samples":8008031},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13167784.44616498,"samples":6583893},{"name":"DefineProperty (getter & configurable=false)","opsSec":16248295.317610262,"samples":8124148},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13549661.756154213,"samples":6774831},{"name":"DefineProperty (writable)","opsSec":16151466.804809736,"samples":8075734},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16043768.716464682,"samples":8021885},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16148930.611268343,"samples":8074466},{"name":"DefineProperties (getter)","opsSec":13963492.71530764,"samples":6981747},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14014638.262021929,"samples":7007320},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14042224.736487875,"samples":7021113}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,750,169|7875086|
|Setter|6,813,893|3406948|
|Method|16,008,473|8004237|
|DefineProperty (setter)|16,032,045|8016023|
|DefineProperty (setter & enumerable=false)|6,937,110|3468556|
|DefineProperty (setter & configurable=false)|6,958,285|3479143|
|DefineProperty (setter & enumerable=false & configurable=false)|6,488,839|3244420|
|DefineProperty (writable)|15,948,123|7974062|
|DefineProperty (writable & enumerable=false)|15,910,866|7955434|
|DefineProperty (writable & enumerable=false & configurable=false)|15,924,815|7962408|
|DefineProperties (setter)|15,879,229|7939615|
|DefineProperties (setter & enumerable=false)|6,608,576|3304289|
|DefineProperties (setter & enumerable=false & configurable=false)|6,525,841|3262921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15750169.920971038,"samples":7875086},{"name":"Setter","opsSec":6813893.724158936,"samples":3406948},{"name":"Method","opsSec":16008473.583733656,"samples":8004237},{"name":"DefineProperty (setter)","opsSec":16032045.679292021,"samples":8016023},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6937110.459968882,"samples":3468556},{"name":"DefineProperty (setter & configurable=false)","opsSec":6958285.791253026,"samples":3479143},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6488839.506843167,"samples":3244420},{"name":"DefineProperty (writable)","opsSec":15948123.425970057,"samples":7974062},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15910866.504361141,"samples":7955434},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15924815.39498415,"samples":7962408},{"name":"DefineProperties (setter)","opsSec":15879229.555360394,"samples":7939615},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6608576.9558843,"samples":3304289},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6525841.399553064,"samples":3262921}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,811,395|1405698|
|Using replaceAll()|2,657,993|1328997|
|Using replaceAll(//g)|2,664,186|1332094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2811395.246545451,"samples":1405698},{"name":"Using replaceAll()","opsSec":2657993.138811498,"samples":1328997},{"name":"Using replaceAll(//g)","opsSec":2664186.129740006,"samples":1332094}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,441,113|5220557|
|{ ...object, __proto__: null }|2,228,206|1114104|
|{ ...object, newProp: true }|10,231,858|5115930|
|structuredClone|322,742|161372|
|JSON.parse + JSON.stringify|290,809|145405|
|loop + object.keys starting with {}|1,458,291|729146|
|loop + object.keys starting with { __proto__: null }|890,614|445308|
|loop + object.keys starting with { randomProp: true }|670,755|335378|
|object.keys + reduce(FN, {})|1,551,797|775899|
|object.keys + reduce(FN, { __proto__: null })|867,279|433640|
|object.keys + reduce(FN, { newProp: true })|684,316|342159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10441113.436183002,"samples":5220557},{"name":"{ ...object, __proto__: null }","opsSec":2228206.5739462683,"samples":1114104},{"name":"{ ...object, newProp: true }","opsSec":10231858.894955682,"samples":5115930},{"name":"structuredClone","opsSec":322742.8355439741,"samples":161372},{"name":"JSON.parse + JSON.stringify","opsSec":290809.15083765966,"samples":145405},{"name":"loop + object.keys starting with {}","opsSec":1458291.4050168416,"samples":729146},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":890614.8600130501,"samples":445308},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":670755.3855887373,"samples":335378},{"name":"object.keys + reduce(FN, {})","opsSec":1551797.3016905375,"samples":775899},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":867279.9670429683,"samples":433640},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":684316.7778098261,"samples":342159}]}-->

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
