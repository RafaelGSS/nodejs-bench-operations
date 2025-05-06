## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,747,234|37883686|
|Using dot notation|64,996,035|32522072|
|Using define property (writable)|3,876,713|1938358|
|Using define property initialized (writable)|5,527,575|2763789|
|Using define property (getter)|2,040,130|1027033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37883686,"opsSec":75747234.14331959},{"name":"Using dot notation","samples":32522072,"opsSec":64996035.10474411},{"name":"Using define property (writable)","samples":1938358,"opsSec":3876713.3328212267},{"name":"Using define property initialized (writable)","samples":2763789,"opsSec":5527575.866355716},{"name":"Using define property (getter)","samples":1027033,"opsSec":2040130.6225655847}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.013ms
new Array(length)|10|0.003ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.4ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.325ms
new Array(length)|1,000,000|9.48ms
array.push|100,000,000|2,074.637ms
new Array(length)|100,000,000|4,423.069ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.469ms
new Array(length)|10,000|3.366ms
array.push|1,000,000|281.483ms
new Array(length)|1,000,000|5.237ms
array.push|100,000,000|2,453.348ms
new Array(length)|100,000,000|4,794.319ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|225|113|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:08:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":113,"opsSec":225.65363971532813},{"name":"Array.from","samples":11,"opsSec":20.81900043728039}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,906|1994|
|new Blob (1024)|527|264|
|text (128)|44,149|22088|
|text (1024)|29,994|14998|
|arrayBuffer (128)|47,559|23806|
|arrayBuffer (1024)|30,219|15110|
|slice (0, 64)|77,131|38774|
|slice (0, 512)|41,618|20849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1994,"opsSec":3906.9962008831358},{"name":"new Blob (1024)","samples":264,"opsSec":527.7672725768808},{"name":"text (128)","samples":22088,"opsSec":44149.11689633595},{"name":"text (1024)","samples":14998,"opsSec":29994.6281056997},{"name":"arrayBuffer (128)","samples":23806,"opsSec":47559.02808868843},{"name":"arrayBuffer (1024)","samples":15110,"opsSec":30219.453874029587},{"name":"slice (0, 64)","samples":38774,"opsSec":77131.42443779942},{"name":"slice (0, 512)","samples":20849,"opsSec":41618.087944032195}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.77 ms|1|
|Gzip|135.21 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:19:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135768861},{"name":"Gzip","samples":1,"totalTime":0.135214537}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,706|3354|
|crypto.verify('RSA-SHA256')|6,702|3352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:27:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3354,"opsSec":6706.0787620832925},{"name":"crypto.verify('RSA-SHA256')","samples":3352,"opsSec":6702.391680687519}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,487,826|1243914|
|fromUnixToISOString(new Date())|2,012,628|1006315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1243914,"opsSec":2487826.054520025},{"name":"fromUnixToISOString(new Date())","samples":1006315,"opsSec":2012628.8085237455}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,268|9135|
|Intl.DateTimeFormat().format(new Date())|17,778|8890|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,667|9334|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,454|9138|
|Reusing Intl.DateTimeFormat()|368,789|202869|
|Date.toLocaleDateString()|710,666|355334|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,028|10515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9135,"opsSec":18268.467933205247},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8890,"opsSec":17778.587526778174},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9334,"opsSec":18667.319949534238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9138,"opsSec":17454.720724821775},{"name":"Reusing Intl.DateTimeFormat()","samples":202869,"opsSec":368789.92637142906},{"name":"Date.toLocaleDateString()","samples":355334,"opsSec":710666.7961304473},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10515,"opsSec":21028.237749563636}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,024,197|512141|
|Using brackets {}|1,029,848|515043|
|Using '' + |1,005,547|502774|
|Using date.toString()|1,143,281|571650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":512141,"opsSec":1024197.950219413},{"name":"Using brackets {}","samples":515043,"opsSec":1029848.4922213298},{"name":"Using '' + ","samples":502774,"opsSec":1005547.5716367345},{"name":"Using date.toString()","samples":571650,"opsSec":1143281.0192485184}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,265,528|1632767|
|Using delete property (proto: null)|18,361,126|9180749|
|Using delete property (cached proto: null)|3,270,598|1635300|
|Using undefined assignment|82,671,059|41427233|
|Using undefined assignment (proto: null)|20,349,405|10174706|
|Using undefined property (cached proto: null)|83,391,593|41710284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:44:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1632767,"opsSec":3265528.7098434903},{"name":"Using delete property (proto: null)","samples":9180749,"opsSec":18361126.29735924},{"name":"Using delete property (cached proto: null)","samples":1635300,"opsSec":3270598.3974067857},{"name":"Using undefined assignment","samples":41427233,"opsSec":82671059.92287685},{"name":"Using undefined assignment (proto: null)","samples":10174706,"opsSec":20349405.650985435},{"name":"Using undefined property (cached proto: null)","samples":41710284,"opsSec":83391593.9242574}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|298,880|149441|
|NodeError|287,382|143695|
|NodeError Range|262,777|131394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:45:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":149441,"opsSec":298880.5731441438},{"name":"NodeError","samples":143695,"opsSec":287382.23665625893},{"name":"NodeError Range","samples":131394,"opsSec":262777.0238037157}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|71,997,276|36053992|
|using Array.includes (first item)|86,729,948|43369690|
|Using raw comparison|102,997,797|51499780|
|Using raw comparison (first item)|106,399,624|53199842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":36053992,"opsSec":71997276.52378587},{"name":"using Array.includes (first item)","samples":43369690,"opsSec":86729948.46502422},{"name":"Using raw comparison","samples":51499780,"opsSec":102997797.08970502},{"name":"Using raw comparison (first item)","samples":53199842,"opsSec":106399624.62900946}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,869,944|21435603|
|Using Object.getOwnPropertyNames()|44,195,039|22098390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:54:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21435603,"opsSec":42869944.423275515},{"name":"Using Object.getOwnPropertyNames()","samples":22098390,"opsSec":44195039.77611378}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,047,933|10523972|
|Length = 10_000 - Array.at|21,282,903|10641453|
|Length = 1_000_000 - Array.at|21,391,990|10696001|
|Length = 100 - Array[length - 1]|98,220,803|49119959|
|Length = 10_000 - Array[length - 1]|89,212,563|44606290|
|Length = 1_000_000 - Array[length - 1]|101,697,979|50851521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10523972,"opsSec":21047933.307649877},{"name":"Length = 10_000 - Array.at","samples":10641453,"opsSec":21282903.616314795},{"name":"Length = 1_000_000 - Array.at","samples":10696001,"opsSec":21391990.02048559},{"name":"Length = 100 - Array[length - 1]","samples":49119959,"opsSec":98220803.64228639},{"name":"Length = 10_000 - Array[length - 1]","samples":44606290,"opsSec":89212563.7633134},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50851521,"opsSec":101697979.47458175}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,670,557|52366020|
|~ (small)|107,317,016|53665560|
|Math.floor (long)|105,152,690|52647729|
|~ (long)|105,362,861|52681445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":52366020,"opsSec":104670557.97963057},{"name":"~ (small)","samples":53665560,"opsSec":107317016.82691666},{"name":"Math.floor (long)","samples":52647729,"opsSec":105152690.08961155},{"name":"~ (long)","samples":52681445,"opsSec":105362861.55202739}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,853,325|15440491|
|Object.create({})|1,312,280|659631|
|new Function with empty prototype|78,429,375|39223033|
|Empty class|77,754,742|38936427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15440491,"opsSec":30853325.202701602},{"name":"Object.create({})","samples":659631,"opsSec":1312280.105557986},{"name":"new Function with empty prototype","samples":39223033,"opsSec":78429375.28778626},{"name":"Empty class","samples":38936427,"opsSec":77754742.3692084}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,467,764|46233942|
|Using parseInt(x, 10) - big number (10 len)|16,126,614|8067514|
|Using + - small number (2 len)|107,057,029|53533301|
|Using + - big number (10 len)|94,170,158|47085082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46233942,"opsSec":92467764.34671293},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8067514,"opsSec":16126614.293777736},{"name":"Using + - small number (2 len)","samples":53533301,"opsSec":107057029.38866018},{"name":"Using + - big number (10 len)","samples":47085082,"opsSec":94170158.3497905}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|689,400|354345|
|Using ? operator to avoid rejection|731,773|365889|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:12:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":354345,"opsSec":689400.2541141652},{"name":"Using ? operator to avoid rejection","samples":365889,"opsSec":731773.8040090079}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|84,590,905|42347214|
|Raw usage underscore usage|85,071,491|42617797|
|Manipulating private properties using #|81,439,724|40724977|
|Manipulating private properties using underscore(_)|81,112,684|40563034|
|Manipulating private properties using Symbol|81,417,609|40709963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:15:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":42347214,"opsSec":84590905.14274088},{"name":"Raw usage underscore usage","samples":42617797,"opsSec":85071491.09368028},{"name":"Manipulating private properties using #","samples":40724977,"opsSec":81439724.68194161},{"name":"Manipulating private properties using underscore(_)","samples":40563034,"opsSec":81112684.40707284},{"name":"Manipulating private properties using Symbol","samples":40709963,"opsSec":81417609.66900492}]}-->
