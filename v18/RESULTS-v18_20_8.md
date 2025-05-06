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

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,803,531|1901766|
|Adding property in the object creation - small object|3,819,339|1909688|
|Adding property after the function creation - small class|191,685|95843|
|Adding property in the function creation - small class|191,918|95965|
|Adding property after the class creation - small class|161,064|81255|
|Adding property in the class creation - small class|164,176|82660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1901766,"opsSec":3803531.2012584475},{"name":"Adding property in the object creation - small object","samples":1909688,"opsSec":3819339.1968474993},{"name":"Adding property after the function creation - small class","samples":95843,"opsSec":191685.46634766168},{"name":"Adding property in the function creation - small class","samples":95965,"opsSec":191918.78541769288},{"name":"Adding property after the class creation - small class","samples":81255,"opsSec":161064.11679331472},{"name":"Adding property in the class creation - small class","samples":82660,"opsSec":164176.19267444676}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|101,212,287|50625411|
|Getter|55,245,906|27623365|
|Method|102,132,782|52017732|
|DefineProperty (getter)|104,561,806|52281033|
|DefineProperty (getter & enumerable=false)|56,705,035|28353668|
|DefineProperty (getter & configurable=false)|103,160,829|51648389|
|DefineProperty (getter & enumerable=false & configurable=false)|56,738,307|28369160|
|DefineProperty (writable)|103,580,851|52107725|
|DefineProperty (writable & enumerable=false)|104,565,835|52283134|
|DefineProperty (writable & enumerable=false & configurable=false)|102,727,164|51363585|
|DefineProperties (getter)|53,859,127|26929570|
|DefineProperties (getter & enumerable=false)|53,914,444|26957230|
|DefineProperties (getter & enumerable=false & configurable=false)|55,072,847|27538305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":50625411,"opsSec":101212287.64814828},{"name":"Getter","samples":27623365,"opsSec":55245906.39402748},{"name":"Method","samples":52017732,"opsSec":102132782.75355166},{"name":"DefineProperty (getter)","samples":52281033,"opsSec":104561806.05935013},{"name":"DefineProperty (getter & enumerable=false)","samples":28353668,"opsSec":56705035.476710714},{"name":"DefineProperty (getter & configurable=false)","samples":51648389,"opsSec":103160829.77002583},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28369160,"opsSec":56738307.51757234},{"name":"DefineProperty (writable)","samples":52107725,"opsSec":103580851.7607642},{"name":"DefineProperty (writable & enumerable=false)","samples":52283134,"opsSec":104565835.7248351},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51363585,"opsSec":102727164.65818743},{"name":"DefineProperties (getter)","samples":26929570,"opsSec":53859127.504682414},{"name":"DefineProperties (getter & enumerable=false)","samples":26957230,"opsSec":53914444.79612657},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27538305,"opsSec":55072847.973754905}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,682,850|51841970|
|Setter|10,786,126|5400105|
|Method|101,505,309|50752669|
|DefineProperty (setter)|104,627,678|52321871|
|DefineProperty (setter & enumerable=false)|10,931,796|5465900|
|DefineProperty (setter & configurable=false)|11,175,632|5587818|
|DefineProperty (setter & enumerable=false & configurable=false)|11,109,633|5554822|
|DefineProperty (writable)|98,873,322|49436681|
|DefineProperty (writable & enumerable=false)|98,633,161|49316622|
|DefineProperty (writable & enumerable=false & configurable=false)|92,299,288|46154475|
|DefineProperties (setter)|89,593,902|44796962|
|DefineProperties (setter & enumerable=false)|10,730,568|5365286|
|DefineProperties (setter & enumerable=false & configurable=false)|11,101,175|5550609|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:30:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51841970,"opsSec":103682850.08587989},{"name":"Setter","samples":5400105,"opsSec":10786126.66227833},{"name":"Method","samples":50752669,"opsSec":101505309.37550275},{"name":"DefineProperty (setter)","samples":52321871,"opsSec":104627678.30329475},{"name":"DefineProperty (setter & enumerable=false)","samples":5465900,"opsSec":10931796.895369682},{"name":"DefineProperty (setter & configurable=false)","samples":5587818,"opsSec":11175632.826120278},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5554822,"opsSec":11109633.334751999},{"name":"DefineProperty (writable)","samples":49436681,"opsSec":98873322.84616417},{"name":"DefineProperty (writable & enumerable=false)","samples":49316622,"opsSec":98633161.3454108},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46154475,"opsSec":92299288.66425836},{"name":"DefineProperties (setter)","samples":44796962,"opsSec":89593902.13908789},{"name":"DefineProperties (setter & enumerable=false)","samples":5365286,"opsSec":10730568.33014563},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5550609,"opsSec":11101175.904340971}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,355,854|1678451|
|Using replaceAll()|2,900,242|1450197|
|Using replaceAll(//g)|2,907,928|1455053|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1678451,"opsSec":3355854.0070638424},{"name":"Using replaceAll()","samples":1450197,"opsSec":2900242.2883258974},{"name":"Using replaceAll(//g)","samples":1455053,"opsSec":2907928.054940548}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,769,991|9892450|
|{ ...object, __proto__: null }|19,989,097|9998921|
|{ ...object, newProp: true }|589,375|302538|
|structuredClone|258,165|129120|
|JSON.parse + JSON.stringify|194,678|97344|
|loop + object.keys starting with {}|1,246,594|623547|
|loop + object.keys starting with { __proto__: null }|675,184|337655|
|loop + object.keys starting with { randomProp: true }|496,199|248447|
|object.keys + reduce(FN, {})|1,261,085|630768|
|object.keys + reduce(FN, { __proto__: null })|674,193|337206|
|object.keys + reduce(FN, { newProp: true })|492,637|246504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:39:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":9892450,"opsSec":19769991.01483591},{"name":"{ ...object, __proto__: null }","samples":9998921,"opsSec":19989097.16977017},{"name":"{ ...object, newProp: true }","samples":302538,"opsSec":589375.9810124222},{"name":"structuredClone","samples":129120,"opsSec":258165.89296409287},{"name":"JSON.parse + JSON.stringify","samples":97344,"opsSec":194678.89564676618},{"name":"loop + object.keys starting with {}","samples":623547,"opsSec":1246594.297689394},{"name":"loop + object.keys starting with { __proto__: null }","samples":337655,"opsSec":675184.0255148874},{"name":"loop + object.keys starting with { randomProp: true }","samples":248447,"opsSec":496199.4636563267},{"name":"object.keys + reduce(FN, {})","samples":630768,"opsSec":1261085.4872983466},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":337206,"opsSec":674193.6435111269},{"name":"object.keys + reduce(FN, { newProp: true })","samples":246504,"opsSec":492637.27862454037}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|248,868|124509|
|Sort using first char|1,222,537|611269|
|Sort using localeCompare|1,149,448|574725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:45:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":124509,"opsSec":248868.59820764957},{"name":"Sort using first char","samples":611269,"opsSec":1222537.1319986363},{"name":"Sort using localeCompare","samples":574725,"opsSec":1149448.289620945}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,702|853|
|{...smallObject} - Total keys: 2|38,116,859|19058892|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,035|519|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,180|3091|
|{ ...bigObject, ...anotherBigObject }|1,089|546|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,691,586|5845851|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,149,250|14079761|
|{ ...smallObject, ...anotherSmallObject }|19,198,145|9599123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:48:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":853,"opsSec":1702.9576151318386},{"name":"{...smallObject} - Total keys: 2","samples":19058892,"opsSec":38116859.74238497},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":519,"opsSec":1035.4040618566187},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3091,"opsSec":6180.860113416164},{"name":"{ ...bigObject, ...anotherBigObject }","samples":546,"opsSec":1089.0338963894546},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5845851,"opsSec":11691586.440359624},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14079761,"opsSec":28149250.39482943},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9599123,"opsSec":19198145.977659456}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,984|993|
|streams.web.Readable reading 1e3 * "some data"|615|309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:56:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":993,"opsSec":1984.7567563068765},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":309,"opsSec":615.6565084259288}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,957|2479|
|streams.web.WritableStream writing 1e3 * "some data"|1,605|805|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:00:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2479,"opsSec":4957.0766948948085},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":805,"opsSec":1605.268964151006}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,233,012|53198708|
|Using backtick (`)|106,599,886|53304705|
|Using array.join|10,625,581|5313088|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:03:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":53198708,"opsSec":106233012.55183312},{"name":"Using backtick (`)","samples":53304705,"opsSec":106599886.57933277},{"name":"Using array.join","samples":5313088,"opsSec":10625581.34996533}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,844,483|26422252|
|(short string) (true) String#slice and strict comparison|51,666,252|25835535|
|(long string) (true) String#endsWith|50,689,221|25344690|
|(long string) (true) String#slice and strict comparison|45,591,982|22800706|
|(short string) (false) String#endsWith|57,846,820|28925966|
|(short string) (false) String#slice and strict comparison|60,302,257|30154112|
|(long string) (false) String#endsWith|55,818,480|27909253|
|(long string) (false) String#slice and strict comparison|52,392,406|26196212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:09:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26422252,"opsSec":52844483.81340718},{"name":"(short string) (true) String#slice and strict comparison","samples":25835535,"opsSec":51666252.225312494},{"name":"(long string) (true) String#endsWith","samples":25344690,"opsSec":50689221.444115326},{"name":"(long string) (true) String#slice and strict comparison","samples":22800706,"opsSec":45591982.93964032},{"name":"(short string) (false) String#endsWith","samples":28925966,"opsSec":57846820.539243504},{"name":"(short string) (false) String#slice and strict comparison","samples":30154112,"opsSec":60302257.694623694},{"name":"(long string) (false) String#endsWith","samples":27909253,"opsSec":55818480.65840978},{"name":"(long string) (false) String#slice and strict comparison","samples":26196212,"opsSec":52392406.60572101}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,065,269|8033438|
|Using indexof|15,788,384|7894200|
|Using RegExp.test|13,612,723|6806600|
|Using RegExp.text with cached regex pattern|14,488,241|7244750|
|Using new RegExp.test|4,160,598|2081339|
|Using new RegExp.test with cached regex pattern|4,904,994|2453286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:16:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8033438,"opsSec":16065269.376670716},{"name":"Using indexof","samples":7894200,"opsSec":15788384.116885578},{"name":"Using RegExp.test","samples":6806600,"opsSec":13612723.200757172},{"name":"Using RegExp.text with cached regex pattern","samples":7244750,"opsSec":14488241.928000424},{"name":"Using new RegExp.test","samples":2081339,"opsSec":4160598.7241452136},{"name":"Using new RegExp.test with cached regex pattern","samples":2453286,"opsSec":4904994.8773770975}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|71,592,940|35796987|
|(short string) (true) String#slice and strict comparison|50,835,063|25731320|
|(long string) (true) String#startsWith|52,250,144|26125383|
|(long string) (true) String#slice and strict comparison|45,362,162|22689294|
|(short string) (false) String#startsWith|102,472,692|51236355|
|(short string) (false) String#slice and strict comparison|60,369,552|30217942|
|(long string) (false) String#startsWith|90,070,559|45229779|
|(long string) (false) String#slice and strict comparison|51,146,494|25573254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35796987,"opsSec":71592940.7706788},{"name":"(short string) (true) String#slice and strict comparison","samples":25731320,"opsSec":50835063.14980332},{"name":"(long string) (true) String#startsWith","samples":26125383,"opsSec":52250144.118784696},{"name":"(long string) (true) String#slice and strict comparison","samples":22689294,"opsSec":45362162.814466506},{"name":"(short string) (false) String#startsWith","samples":51236355,"opsSec":102472692.37469691},{"name":"(short string) (false) String#slice and strict comparison","samples":30217942,"opsSec":60369552.47126578},{"name":"(long string) (false) String#startsWith","samples":45229779,"opsSec":90070559.46636547},{"name":"(long string) (false) String#slice and strict comparison","samples":25573254,"opsSec":51146494.59961842}]}-->
