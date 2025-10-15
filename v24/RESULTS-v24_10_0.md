## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,994,870|53532390|
|Using dot notation|78,892,510|39446282|
|Using define property (writable)|4,854,596|2428070|
|Using define property initialized (writable)|6,929,654|3464837|
|Using define property (getter)|2,319,770|1159993|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:48:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53532390,"opsSec":106994870.83533464},{"name":"Using dot notation","samples":39446282,"opsSec":78892510.51087788},{"name":"Using define property (writable)","samples":2428070,"opsSec":4854596.937235919},{"name":"Using define property initialized (writable)","samples":3464837,"opsSec":6929654.998885994},{"name":"Using define property (getter)","samples":1159993,"opsSec":2319770.548990492}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.31ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|26.948ms
new Array(length)|1,000,000|7.666ms
array.push|10,000,000|256.177ms
new Array(length)|10,000,000|64.658ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.117ms
array.push|1,000,000|18.331ms
new Array(length)|1,000,000|11.173ms
array.push|10,000,000|354.164ms
new Array(length)|10,000,000|50.711ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|152|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:59:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":152,"opsSec":303.3403142915782},{"name":"Array.from","samples":12,"opsSec":23.19972089498445}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,573|2303|
|new Blob (1024)|614|310|
|text (128)|4,445|2227|
|text (1024)|555|279|
|arrayBuffer (128)|4,428|2215|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,239|93207|
|slice (0, 512)|31,098|15550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:04:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2303,"opsSec":4573.157739644327},{"name":"new Blob (1024)","samples":310,"opsSec":614.5838824318162},{"name":"text (128)","samples":2227,"opsSec":4445.271469425124},{"name":"text (1024)","samples":279,"opsSec":555.8729000957311},{"name":"arrayBuffer (128)","samples":2215,"opsSec":4428.384100355317},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.5767595994066},{"name":"slice (0, 64)","samples":93207,"opsSec":161239.73972746846},{"name":"slice (0, 512)","samples":15550,"opsSec":31098.94226277576}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.13 ms|1|
|Gzip|134.92 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:09:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135131942},{"name":"Gzip","samples":1,"totalTime":0.134919868}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,460|10731|
|crypto.verify('RSA-SHA256')|21,354|10740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10731,"opsSec":21460.119578482052},{"name":"crypto.verify('RSA-SHA256')","samples":10740,"opsSec":21354.46126498862}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,450,662|725382|
|fromUnixToISOString(new Date())|3,015,941|1507972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":725382,"opsSec":1450662.5232551731},{"name":"fromUnixToISOString(new Date())","samples":1507972,"opsSec":3015941.6535973935}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,134|11068|
|Intl.DateTimeFormat().format(new Date())|21,076|10539|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,797|10399|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,988|9995|
|Reusing Intl.DateTimeFormat()|459,739|229872|
|Date.toLocaleDateString()|1,026,874|513620|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,677|13339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11068,"opsSec":22134.51871373864},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10539,"opsSec":21076.13084226012},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10399,"opsSec":20797.617240652304},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9995,"opsSec":19988.66711569939},{"name":"Reusing Intl.DateTimeFormat()","samples":229872,"opsSec":459739.4200758972},{"name":"Date.toLocaleDateString()","samples":513620,"opsSec":1026874.0097804263},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13339,"opsSec":26677.669090192605}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,117,402|558736|
|Using brackets {}|1,136,980|568508|
|Using '' + |1,131,006|565537|
|Using date.toString()|1,260,729|630419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:28:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":558736,"opsSec":1117402.01264234},{"name":"Using brackets {}","samples":568508,"opsSec":1136980.8172655907},{"name":"Using '' + ","samples":565537,"opsSec":1131006.2029641694},{"name":"Using date.toString()","samples":630419,"opsSec":1260729.2091550836}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,163,261|2081633|
|Using delete property (proto: null)|17,275,468|8640122|
|Using delete property (cached proto: null)|4,216,790|2108511|
|Using undefined assignment|78,939,068|39952642|
|Using undefined assignment (proto: null)|19,229,821|9619030|
|Using undefined property (cached proto: null)|76,532,980|38269336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2081633,"opsSec":4163261.1789435553},{"name":"Using delete property (proto: null)","samples":8640122,"opsSec":17275468.024110053},{"name":"Using delete property (cached proto: null)","samples":2108511,"opsSec":4216790.590965949},{"name":"Using undefined assignment","samples":39952642,"opsSec":78939068.07016172},{"name":"Using undefined assignment (proto: null)","samples":9619030,"opsSec":19229821.944279067},{"name":"Using undefined property (cached proto: null)","samples":38269336,"opsSec":76532980.54836854}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|358,645|179323|
|NodeError|327,158|163580|
|NodeError Range|315,536|157769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:37:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":179323,"opsSec":358645.5237187445},{"name":"NodeError","samples":163580,"opsSec":327158.3543934774},{"name":"NodeError Range","samples":157769,"opsSec":315536.1522202926}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,640,017|33425968|
|using Array.includes (first item)|79,531,609|39765815|
|Using raw comparison|96,821,797|48853203|
|Using raw comparison (first item)|90,276,439|45394851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33425968,"opsSec":66640017.94405714},{"name":"using Array.includes (first item)","samples":39765815,"opsSec":79531609.48084475},{"name":"Using raw comparison","samples":48853203,"opsSec":96821797.32794155},{"name":"Using raw comparison (first item)","samples":45394851,"opsSec":90276439.27665591}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,366,925|22218943|
|Using Object.getOwnPropertyNames()|46,472,068|23236534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22218943,"opsSec":44366925.89366109},{"name":"Using Object.getOwnPropertyNames()","samples":23236534,"opsSec":46472068.94346186}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,775,555|47887784|
|Length = 10_000 - Array.at|97,102,857|48587788|
|Length = 1_000_000 - Array.at|95,233,567|47616921|
|Length = 100 - Array[length - 1]|93,851,104|46925565|
|Length = 10_000 - Array[length - 1]|96,136,553|48068715|
|Length = 1_000_000 - Array[length - 1]|94,832,901|47416485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47887784,"opsSec":95775555.54917777},{"name":"Length = 10_000 - Array.at","samples":48587788,"opsSec":97102857.41793115},{"name":"Length = 1_000_000 - Array.at","samples":47616921,"opsSec":95233567.91779153},{"name":"Length = 100 - Array[length - 1]","samples":46925565,"opsSec":93851104.8479039},{"name":"Length = 10_000 - Array[length - 1]","samples":48068715,"opsSec":96136553.81144856},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47416485,"opsSec":94832901.53064509}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,340,289|45120950|
|~ (small)|93,776,633|46896685|
|Math.floor (long)|94,110,871|47067583|
|~ (long)|92,663,533|46332799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:53:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45120950,"opsSec":89340289.23658144},{"name":"~ (small)","samples":46896685,"opsSec":93776633.87170617},{"name":"Math.floor (long)","samples":47067583,"opsSec":94110871.4667526},{"name":"~ (long)","samples":46332799,"opsSec":92663533.45647459}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,516,010|18260793|
|Object.create({})|2,042,687|1022876|
|new Function with empty prototype|71,006,315|35504833|
|Empty class|79,159,846|39587322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18260793,"opsSec":36516010.516418286},{"name":"Object.create({})","samples":1022876,"opsSec":2042687.596835604},{"name":"new Function with empty prototype","samples":35504833,"opsSec":71006315.9220148},{"name":"Empty class","samples":39587322,"opsSec":79159846.49157563}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,749,039|46938409|
|Using parseInt(x, 10) - big number (10 len)|96,187,428|48097321|
|Using + - small number (2 len)|93,710,895|46855469|
|Using + - big number (10 len)|95,105,213|47630896|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46938409,"opsSec":93749039.1845799},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48097321,"opsSec":96187428.90470642},{"name":"Using + - small number (2 len)","samples":46855469,"opsSec":93710895.08041006},{"name":"Using + - big number (10 len)","samples":47630896,"opsSec":95105213.05974354}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,232,982|616516|
|Using ? operator to avoid rejection|1,239,850|619954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:04:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":616516,"opsSec":1232982.3157446047},{"name":"Using ? operator to avoid rejection","samples":619954,"opsSec":1239850.3296017689}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,445,311|48722666|
|Raw usage underscore usage|98,201,871|49100950|
|Manipulating private properties using #|98,430,722|49215389|
|Manipulating private properties using underscore(_)|98,448,244|49224130|
|Manipulating private properties using Symbol|98,256,919|49128468|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:07:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":48722666,"opsSec":97445311.73137517},{"name":"Raw usage underscore usage","samples":49100950,"opsSec":98201871.91426465},{"name":"Manipulating private properties using #","samples":49215389,"opsSec":98430722.48507251},{"name":"Manipulating private properties using underscore(_)","samples":49224130,"opsSec":98448244.24828093},{"name":"Manipulating private properties using Symbol","samples":49128468,"opsSec":98256919.68935134}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,777,158|3888581|
|Adding property in the object creation - small object|7,821,645|3910826|
|Adding property after the function creation - small class|281,919|143295|
|Adding property in the function creation - small class|297,809|149019|
|Adding property after the class creation - small class|283,559|141783|
|Adding property in the class creation - small class|274,226|144249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3888581,"opsSec":7777158.406952816},{"name":"Adding property in the object creation - small object","samples":3910826,"opsSec":7821645.554964063},{"name":"Adding property after the function creation - small class","samples":143295,"opsSec":281919.91318971803},{"name":"Adding property in the function creation - small class","samples":149019,"opsSec":297809.9079870925},{"name":"Adding property after the class creation - small class","samples":141783,"opsSec":283559.0380584976},{"name":"Adding property in the class creation - small class","samples":144249,"opsSec":274226.60887461936}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,301,238|47650642|
|Getter|50,234,322|25118320|
|Method|99,893,510|49975304|
|DefineProperty (getter)|96,007,813|48006213|
|DefineProperty (getter & enumerable=false)|54,209,348|27124476|
|DefineProperty (getter & configurable=false)|95,472,638|47736349|
|DefineProperty (getter & enumerable=false & configurable=false)|53,884,993|26942502|
|DefineProperty (writable)|94,281,344|47140700|
|DefineProperty (writable & enumerable=false)|95,744,784|47874851|
|DefineProperty (writable & enumerable=false & configurable=false)|94,162,555|47081285|
|DefineProperties (getter)|54,350,293|27175913|
|DefineProperties (getter & enumerable=false)|54,113,016|27062615|
|DefineProperties (getter & enumerable=false & configurable=false)|53,341,617|26670813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:19:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47650642,"opsSec":95301238.82721281},{"name":"Getter","samples":25118320,"opsSec":50234322.08791022},{"name":"Method","samples":49975304,"opsSec":99893510.66738571},{"name":"DefineProperty (getter)","samples":48006213,"opsSec":96007813.78462578},{"name":"DefineProperty (getter & enumerable=false)","samples":27124476,"opsSec":54209348.16809014},{"name":"DefineProperty (getter & configurable=false)","samples":47736349,"opsSec":95472638.04318331},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26942502,"opsSec":53884993.54631125},{"name":"DefineProperty (writable)","samples":47140700,"opsSec":94281344.5625694},{"name":"DefineProperty (writable & enumerable=false)","samples":47874851,"opsSec":95744784.54786561},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47081285,"opsSec":94162555.49896644},{"name":"DefineProperties (getter)","samples":27175913,"opsSec":54350293.97391347},{"name":"DefineProperties (getter & enumerable=false)","samples":27062615,"opsSec":54113016.90853581},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26670813,"opsSec":53341617.46534121}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|88,961,277|44480644|
|Setter|10,928,521|5464997|
|Method|84,650,141|42360727|
|DefineProperty (setter)|88,910,873|44455456|
|DefineProperty (setter & enumerable=false)|10,849,214|5424609|
|DefineProperty (setter & configurable=false)|10,903,222|5451612|
|DefineProperty (setter & enumerable=false & configurable=false)|11,013,723|5506865|
|DefineProperty (writable)|88,712,598|44356317|
|DefineProperty (writable & enumerable=false)|88,965,263|44482636|
|DefineProperty (writable & enumerable=false & configurable=false)|88,785,581|44392802|
|DefineProperties (setter)|88,844,126|44422569|
|DefineProperties (setter & enumerable=false)|10,797,201|5398603|
|DefineProperties (setter & enumerable=false & configurable=false)|10,779,492|5389759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:21:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":44480644,"opsSec":88961277.32464673},{"name":"Setter","samples":5464997,"opsSec":10928521.731409388},{"name":"Method","samples":42360727,"opsSec":84650141.84240714},{"name":"DefineProperty (setter)","samples":44455456,"opsSec":88910873.5905026},{"name":"DefineProperty (setter & enumerable=false)","samples":5424609,"opsSec":10849214.332965555},{"name":"DefineProperty (setter & configurable=false)","samples":5451612,"opsSec":10903222.27729088},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5506865,"opsSec":11013723.964479268},{"name":"DefineProperty (writable)","samples":44356317,"opsSec":88712598.86981085},{"name":"DefineProperty (writable & enumerable=false)","samples":44482636,"opsSec":88965263.10347368},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44392802,"opsSec":88785581.27089119},{"name":"DefineProperties (setter)","samples":44422569,"opsSec":88844126.42077658},{"name":"DefineProperties (setter & enumerable=false)","samples":5398603,"opsSec":10797201.745902512},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5389759,"opsSec":10779492.323249286}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,027,751|2014148|
|Using replaceAll()|3,081,048|1540527|
|Using replaceAll(//g)|3,306,749|1653376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2014148,"opsSec":4027751.657419003},{"name":"Using replaceAll()","samples":1540527,"opsSec":3081048.922431376},{"name":"Using replaceAll(//g)","samples":1653376,"opsSec":3306749.3215330495}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,253,135|12626577|
|{ ...object, __proto__: null }|2,372,946|1186708|
|{ ...object, newProp: true }|23,555,530|11781452|
|structuredClone|294,210|147120|
|JSON.parse + JSON.stringify|310,259|155134|
|loop + object.keys starting with {}|1,733,793|866983|
|loop + object.keys starting with { __proto__: null }|921,972|460999|
|loop + object.keys starting with { randomProp: true }|693,651|346860|
|object.keys + reduce(FN, {})|1,792,258|896229|
|object.keys + reduce(FN, { __proto__: null })|934,175|467089|
|object.keys + reduce(FN, { newProp: true })|694,140|347138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12626577,"opsSec":25253135.363186102},{"name":"{ ...object, __proto__: null }","samples":1186708,"opsSec":2372946.69284077},{"name":"{ ...object, newProp: true }","samples":11781452,"opsSec":23555530.600700308},{"name":"structuredClone","samples":147120,"opsSec":294210.5712933958},{"name":"JSON.parse + JSON.stringify","samples":155134,"opsSec":310259.92889820965},{"name":"loop + object.keys starting with {}","samples":866983,"opsSec":1733793.3765962524},{"name":"loop + object.keys starting with { __proto__: null }","samples":460999,"opsSec":921972.9831850743},{"name":"loop + object.keys starting with { randomProp: true }","samples":346860,"opsSec":693651.0455368652},{"name":"object.keys + reduce(FN, {})","samples":896229,"opsSec":1792258.9588890618},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":467089,"opsSec":934175.8289753734},{"name":"object.keys + reduce(FN, { newProp: true })","samples":347138,"opsSec":694140.7147512578}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|318,780|159391|
|Sort using first char|1,354,973|677539|
|Sort using localeCompare|1,237,506|618874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:37:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":159391,"opsSec":318780.4194866801},{"name":"Sort using first char","samples":677539,"opsSec":1354973.526121242},{"name":"Sort using localeCompare","samples":618874,"opsSec":1237506.2902713842}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,044|1523|
|{...smallObject} - Total keys: 2|40,385,768|20193321|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|558|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,515|3258|
|{ ...bigObject, ...anotherBigObject }|1,540|771|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,206,366|6103563|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,447,486|13723747|
|{ ...smallObject, ...anotherSmallObject }|19,822,665|9914380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1523,"opsSec":3044.566806710543},{"name":"{...smallObject} - Total keys: 2","samples":20193321,"opsSec":40385768.13274914},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":558,"opsSec":1115.4088243997976},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3258,"opsSec":6515.723629066549},{"name":"{ ...bigObject, ...anotherBigObject }","samples":771,"opsSec":1540.7137259016486},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6103563,"opsSec":12206366.519875133},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13723747,"opsSec":27447486.80875846},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9914380,"opsSec":19822665.085520823}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,034|1021|
|streams.web.Readable reading 1e3 * "some data"|1,788|895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:46:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1021,"opsSec":2034.3381657459067},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":895,"opsSec":1788.2169438502497}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,384|4695|
|streams.web.WritableStream writing 1e3 * "some data"|1,704|889|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:48:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4695,"opsSec":9384.895011279456},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":889,"opsSec":1704.901920962281}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,944,109|46972078|
|Using backtick (`)|93,340,213|46704150|
|Using array.join|10,558,421|5280670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:53:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":46972078,"opsSec":93944109.96738613},{"name":"Using backtick (`)","samples":46704150,"opsSec":93340213.72781797},{"name":"Using array.join","samples":5280670,"opsSec":10558421.567811284}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,217,953|44109024|
|(short string) (true) String#slice and strict comparison|53,856,507|27704631|
|(long string) (true) String#endsWith|63,381,205|31690612|
|(long string) (true) String#slice and strict comparison|51,418,248|25710460|
|(short string) (false) String#endsWith|91,851,489|45925752|
|(short string) (false) String#slice and strict comparison|57,347,849|28679264|
|(long string) (false) String#endsWith|80,640,375|40469676|
|(long string) (false) String#slice and strict comparison|50,329,970|25176992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44109024,"opsSec":88217953.60678965},{"name":"(short string) (true) String#slice and strict comparison","samples":27704631,"opsSec":53856507.16166175},{"name":"(long string) (true) String#endsWith","samples":31690612,"opsSec":63381205.61945037},{"name":"(long string) (true) String#slice and strict comparison","samples":25710460,"opsSec":51418248.8219737},{"name":"(short string) (false) String#endsWith","samples":45925752,"opsSec":91851489.30376172},{"name":"(short string) (false) String#slice and strict comparison","samples":28679264,"opsSec":57347849.945035934},{"name":"(long string) (false) String#endsWith","samples":40469676,"opsSec":80640375.0676639},{"name":"(long string) (false) String#slice and strict comparison","samples":25176992,"opsSec":50329970.06138462}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,448,507|8224259|
|Using indexof|16,347,794|8174044|
|Using RegExp.test|12,350,712|6175499|
|Using RegExp.text with cached regex pattern|13,326,355|6663524|
|Using new RegExp.test|4,700,812|2350460|
|Using new RegExp.test with cached regex pattern|5,210,116|2605201|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:02:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8224259,"opsSec":16448507.769028168},{"name":"Using indexof","samples":8174044,"opsSec":16347794.785952717},{"name":"Using RegExp.test","samples":6175499,"opsSec":12350712.698536664},{"name":"Using RegExp.text with cached regex pattern","samples":6663524,"opsSec":13326355.376005687},{"name":"Using new RegExp.test","samples":2350460,"opsSec":4700812.426608429},{"name":"Using new RegExp.test with cached regex pattern","samples":2605201,"opsSec":5210116.506455912}]}-->
