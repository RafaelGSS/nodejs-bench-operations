## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,369,436|42724802|
|Using dot notation|80,754,165|40384663|
|Using define property (writable)|3,828,660|1914332|
|Using define property initialized (writable)|5,477,789|2739784|
|Using define property (getter)|2,096,649|1056986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42724802,"opsSec":85369436.29419807},{"name":"Using dot notation","samples":40384663,"opsSec":80754165.37450093},{"name":"Using define property (writable)","samples":1914332,"opsSec":3828660.875812725},{"name":"Using define property initialized (writable)","samples":2739784,"opsSec":5477789.4932185},{"name":"Using define property (getter)","samples":1056986,"opsSec":2096649.282350886}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.378ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|26.62ms
new Array(length)|1,000,000|8.548ms
array.push|10,000,000|314.984ms
new Array(length)|10,000,000|55.015ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.231ms
new Array(length)|10,000|3.197ms
array.push|1,000,000|17.397ms
new Array(length)|1,000,000|10.981ms
array.push|10,000,000|229.446ms
new Array(length)|10,000,000|63.641ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:55:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":117,"opsSec":232.7314742916887},{"name":"Array.from","samples":11,"opsSec":21.397732821504235}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,037|2019|
|new Blob (1024)|556|279|
|text (128)|46,597|23300|
|text (1024)|30,773|15500|
|arrayBuffer (128)|50,027|25020|
|arrayBuffer (1024)|33,562|16782|
|slice (0, 64)|90,064|45133|
|slice (0, 512)|53,977|27201|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:00:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2019,"opsSec":4037.8628741767925},{"name":"new Blob (1024)","samples":279,"opsSec":556.9584642795418},{"name":"text (128)","samples":23300,"opsSec":46597.73618878047},{"name":"text (1024)","samples":15500,"opsSec":30773.86679499197},{"name":"arrayBuffer (128)","samples":25020,"opsSec":50027.99808314786},{"name":"arrayBuffer (1024)","samples":16782,"opsSec":33562.790866896226},{"name":"slice (0, 64)","samples":45133,"opsSec":90064.83874163314},{"name":"slice (0, 512)","samples":27201,"opsSec":53977.011246274305}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.30 ms|1|
|Gzip|139.53 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:12:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133296457},{"name":"Gzip","samples":1,"totalTime":0.139532758}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,827|3414|
|crypto.verify('RSA-SHA256')|6,825|3413|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:12:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3414,"opsSec":6827.639500634366},{"name":"crypto.verify('RSA-SHA256')","samples":3413,"opsSec":6825.389578108472}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,660,786|1330442|
|fromUnixToISOString(new Date())|2,229,801|1115305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1330442,"opsSec":2660786.6684236694},{"name":"fromUnixToISOString(new Date())","samples":1115305,"opsSec":2229801.7370067663}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,277|9139|
|Intl.DateTimeFormat().format(new Date())|17,296|8653|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,373|9187|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,182|8897|
|Reusing Intl.DateTimeFormat()|361,172|180593|
|Date.toLocaleDateString()|712,745|356374|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,483|10742|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9139,"opsSec":18277.37633936455},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8653,"opsSec":17296.91610937917},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9187,"opsSec":18373.45530054416},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8897,"opsSec":17182.252166107068},{"name":"Reusing Intl.DateTimeFormat()","samples":180593,"opsSec":361172.9349302518},{"name":"Date.toLocaleDateString()","samples":356374,"opsSec":712745.6008983073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10742,"opsSec":21483.260760997215}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,030,417|515210|
|Using brackets {}|1,058,413|529283|
|Using '' + |1,060,725|530363|
|Using date.toString()|1,153,015|576546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":515210,"opsSec":1030417.4548688864},{"name":"Using brackets {}","samples":529283,"opsSec":1058413.0698955308},{"name":"Using '' + ","samples":530363,"opsSec":1060725.522673515},{"name":"Using date.toString()","samples":576546,"opsSec":1153015.5712098468}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,315,678|1657841|
|Using delete property (proto: null)|17,777,804|8888907|
|Using delete property (cached proto: null)|3,356,394|1678198|
|Using undefined assignment|85,640,612|42825086|
|Using undefined assignment (proto: null)|20,481,181|10240594|
|Using undefined property (cached proto: null)|84,075,667|42049019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1657841,"opsSec":3315678.71747807},{"name":"Using delete property (proto: null)","samples":8888907,"opsSec":17777804.11554091},{"name":"Using delete property (cached proto: null)","samples":1678198,"opsSec":3356394.2345366324},{"name":"Using undefined assignment","samples":42825086,"opsSec":85640612.28101352},{"name":"Using undefined assignment (proto: null)","samples":10240594,"opsSec":20481181.118323144},{"name":"Using undefined property (cached proto: null)","samples":42049019,"opsSec":84075667.31459227}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|298,181|149091|
|NodeError|291,067|145540|
|NodeError Range|265,841|132956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:33:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":149091,"opsSec":298181.28138311184},{"name":"NodeError","samples":145540,"opsSec":291067.00444038573},{"name":"NodeError Range","samples":132956,"opsSec":265841.53019549267}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,849,044|36425911|
|using Array.includes (first item)|84,256,266|42128145|
|Using raw comparison|93,162,501|46584038|
|Using raw comparison (first item)|104,537,678|52268848|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:38:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36425911,"opsSec":72849044.41163468},{"name":"using Array.includes (first item)","samples":42128145,"opsSec":84256266.5767579},{"name":"Using raw comparison","samples":46584038,"opsSec":93162501.15593083},{"name":"Using raw comparison (first item)","samples":52268848,"opsSec":104537678.64674535}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|21,992,269|10996136|
|Using Object.getOwnPropertyNames()|21,510,602|10755313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":10996136,"opsSec":21992269.36092768},{"name":"Using Object.getOwnPropertyNames()","samples":10755313,"opsSec":21510602.81157017}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,260,536|10630279|
|Length = 10_000 - Array.at|21,193,583|10596797|
|Length = 1_000_000 - Array.at|21,194,391|10597651|
|Length = 100 - Array[length - 1]|102,747,194|51376772|
|Length = 10_000 - Array[length - 1]|93,600,914|46800468|
|Length = 1_000_000 - Array[length - 1]|102,791,954|51396999|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10630279,"opsSec":21260536.69694223},{"name":"Length = 10_000 - Array.at","samples":10596797,"opsSec":21193583.106498286},{"name":"Length = 1_000_000 - Array.at","samples":10597651,"opsSec":21194391.488941636},{"name":"Length = 100 - Array[length - 1]","samples":51376772,"opsSec":102747194.0179153},{"name":"Length = 10_000 - Array[length - 1]","samples":46800468,"opsSec":93600914.28458788},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51396999,"opsSec":102791954.49594462}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|102,544,676|51273285|
|~ (small)|104,811,849|52406038|
|Math.floor (long)|101,522,164|50764324|
|~ (long)|104,226,626|52117448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":51273285,"opsSec":102544676.20491986},{"name":"~ (small)","samples":52406038,"opsSec":104811849.18715835},{"name":"Math.floor (long)","samples":50764324,"opsSec":101522164.99758758},{"name":"~ (long)","samples":52117448,"opsSec":104226626.45100412}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,191,485|18637203|
|Object.create({})|1,335,080|679791|
|new Function with empty prototype|111,252,411|55665544|
|Empty class|81,827,213|41077042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18637203,"opsSec":37191485.129266284},{"name":"Object.create({})","samples":679791,"opsSec":1335080.629656321},{"name":"new Function with empty prototype","samples":55665544,"opsSec":111252411.85187212},{"name":"Empty class","samples":41077042,"opsSec":81827213.57590671}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,121,858|46560936|
|Using parseInt(x, 10) - big number (10 len)|17,541,571|8787763|
|Using + - small number (2 len)|107,090,486|53545256|
|Using + - big number (10 len)|103,534,372|51767816|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46560936,"opsSec":93121858.0317213},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8787763,"opsSec":17541571.831899304},{"name":"Using + - small number (2 len)","samples":53545256,"opsSec":107090486.08410236},{"name":"Using + - big number (10 len)","samples":51767816,"opsSec":103534372.40082537}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|702,292|352777|
|Using ? operator to avoid rejection|730,750|365376|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:04:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":352777,"opsSec":702292.5156336018},{"name":"Using ? operator to avoid rejection","samples":365376,"opsSec":730750.1453561311}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|86,037,263|43018641|
|Raw usage underscore usage|87,280,674|43643153|
|Manipulating private properties using #|83,156,802|41578409|
|Manipulating private properties using underscore(_)|82,415,123|41207569|
|Manipulating private properties using Symbol|83,084,358|41543693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:08:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":43018641,"opsSec":86037263.76010008},{"name":"Raw usage underscore usage","samples":43643153,"opsSec":87280674.47632144},{"name":"Manipulating private properties using #","samples":41578409,"opsSec":83156802.53283472},{"name":"Manipulating private properties using underscore(_)","samples":41207569,"opsSec":82415123.16527782},{"name":"Manipulating private properties using Symbol","samples":41543693,"opsSec":83084358.90446767}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,720,562|1860654|
|Adding property in the object creation - small object|3,730,694|1865571|
|Adding property after the function creation - small class|190,509|95259|
|Adding property in the function creation - small class|191,712|95857|
|Adding property after the class creation - small class|159,551|80737|
|Adding property in the class creation - small class|161,696|81387|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1860654,"opsSec":3720562.815914726},{"name":"Adding property in the object creation - small object","samples":1865571,"opsSec":3730694.398747427},{"name":"Adding property after the function creation - small class","samples":95259,"opsSec":190509.5604264731},{"name":"Adding property in the function creation - small class","samples":95857,"opsSec":191712.80371210483},{"name":"Adding property after the class creation - small class","samples":80737,"opsSec":159551.64014904454},{"name":"Adding property in the class creation - small class","samples":81387,"opsSec":161696.72917479262}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,565,178|53300193|
|Getter|55,887,614|27943821|
|Method|104,728,454|52375322|
|DefineProperty (getter)|106,720,018|53360034|
|DefineProperty (getter & enumerable=false)|56,721,972|28360999|
|DefineProperty (getter & configurable=false)|106,625,865|53312942|
|DefineProperty (getter & enumerable=false & configurable=false)|56,873,722|28444130|
|DefineProperty (writable)|106,939,170|53469595|
|DefineProperty (writable & enumerable=false)|100,034,146|50338832|
|DefineProperty (writable & enumerable=false & configurable=false)|106,604,565|53305911|
|DefineProperties (getter)|56,488,656|28260187|
|DefineProperties (getter & enumerable=false)|56,551,514|28358235|
|DefineProperties (getter & enumerable=false & configurable=false)|56,761,851|28380933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":53300193,"opsSec":106565178.35698336},{"name":"Getter","samples":27943821,"opsSec":55887614.83861919},{"name":"Method","samples":52375322,"opsSec":104728454.34455039},{"name":"DefineProperty (getter)","samples":53360034,"opsSec":106720018.2684715},{"name":"DefineProperty (getter & enumerable=false)","samples":28360999,"opsSec":56721972.36166849},{"name":"DefineProperty (getter & configurable=false)","samples":53312942,"opsSec":106625865.8736028},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28444130,"opsSec":56873722.394071415},{"name":"DefineProperty (writable)","samples":53469595,"opsSec":106939170.10931435},{"name":"DefineProperty (writable & enumerable=false)","samples":50338832,"opsSec":100034146.53608458},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53305911,"opsSec":106604565.64042598},{"name":"DefineProperties (getter)","samples":28260187,"opsSec":56488656.749008566},{"name":"DefineProperties (getter & enumerable=false)","samples":28358235,"opsSec":56551514.773454286},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28380933,"opsSec":56761851.01487133}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,453,040|51726586|
|Setter|11,008,235|5505005|
|Method|102,773,261|51399517|
|DefineProperty (setter)|102,725,162|51369314|
|DefineProperty (setter & enumerable=false)|10,829,516|5414760|
|DefineProperty (setter & configurable=false)|11,026,129|5513069|
|DefineProperty (setter & enumerable=false & configurable=false)|10,894,647|5447325|
|DefineProperty (writable)|101,805,973|50903819|
|DefineProperty (writable & enumerable=false)|99,400,976|49700508|
|DefineProperty (writable & enumerable=false & configurable=false)|98,079,115|49044466|
|DefineProperties (setter)|95,628,529|47814276|
|DefineProperties (setter & enumerable=false)|11,057,922|5528964|
|DefineProperties (setter & enumerable=false & configurable=false)|10,914,187|5457097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:19:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":51726586,"opsSec":103453040.82154423},{"name":"Setter","samples":5505005,"opsSec":11008235.494454764},{"name":"Method","samples":51399517,"opsSec":102773261.9601913},{"name":"DefineProperty (setter)","samples":51369314,"opsSec":102725162.37481527},{"name":"DefineProperty (setter & enumerable=false)","samples":5414760,"opsSec":10829516.03639713},{"name":"DefineProperty (setter & configurable=false)","samples":5513069,"opsSec":11026129.70835046},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5447325,"opsSec":10894647.71212398},{"name":"DefineProperty (writable)","samples":50903819,"opsSec":101805973.67594235},{"name":"DefineProperty (writable & enumerable=false)","samples":49700508,"opsSec":99400976.23960951},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49044466,"opsSec":98079115.06521489},{"name":"DefineProperties (setter)","samples":47814276,"opsSec":95628529.62292406},{"name":"DefineProperties (setter & enumerable=false)","samples":5528964,"opsSec":11057922.050837936},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5457097,"opsSec":10914187.495144254}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,366,728|1683483|
|Using replaceAll()|2,888,294|1444148|
|Using replaceAll(//g)|3,010,685|1505555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1683483,"opsSec":3366728.3830441814},{"name":"Using replaceAll()","samples":1444148,"opsSec":2888294.7580332537},{"name":"Using replaceAll(//g)","samples":1505555,"opsSec":3010685.82447419}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,390,502|9717743|
|{ ...object, __proto__: null }|19,609,150|9804596|
|{ ...object, newProp: true }|567,775|288628|
|structuredClone|255,559|127784|
|JSON.parse + JSON.stringify|198,256|99212|
|loop + object.keys starting with {}|1,229,707|614860|
|loop + object.keys starting with { __proto__: null }|700,097|350129|
|loop + object.keys starting with { randomProp: true }|503,674|251900|
|object.keys + reduce(FN, {})|1,253,365|626779|
|object.keys + reduce(FN, { __proto__: null })|718,310|359318|
|object.keys + reduce(FN, { newProp: true })|507,298|253691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:06:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9717743,"opsSec":19390502.67091185},{"name":"{ ...object, __proto__: null }","samples":9804596,"opsSec":19609150.467819307},{"name":"{ ...object, newProp: true }","samples":288628,"opsSec":567775.6758017809},{"name":"structuredClone","samples":127784,"opsSec":255559.14947553538},{"name":"JSON.parse + JSON.stringify","samples":99212,"opsSec":198256.23161168557},{"name":"loop + object.keys starting with {}","samples":614860,"opsSec":1229707.213504394},{"name":"loop + object.keys starting with { __proto__: null }","samples":350129,"opsSec":700097.9296093741},{"name":"loop + object.keys starting with { randomProp: true }","samples":251900,"opsSec":503674.3292254636},{"name":"object.keys + reduce(FN, {})","samples":626779,"opsSec":1253365.3076176068},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":359318,"opsSec":718310.0596273434},{"name":"object.keys + reduce(FN, { newProp: true })","samples":253691,"opsSec":507298.83444367896}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|260,172|130087|
|Sort using first char|1,290,603|645302|
|Sort using localeCompare|1,137,432|570640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:14:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":130087,"opsSec":260172.3463445666},{"name":"Sort using first char","samples":645302,"opsSec":1290603.9251449725},{"name":"Sort using localeCompare","samples":570640,"opsSec":1137432.176141602}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,657|829|
|{...smallObject} - Total keys: 2|38,049,691|19045397|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,021|511|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,076|3039|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,483,158|5741581|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,240,259|13120971|
|{ ...smallObject, ...anotherSmallObject }|18,497,683|9249199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":829,"opsSec":1657.4518939182965},{"name":"{...smallObject} - Total keys: 2","samples":19045397,"opsSec":38049691.42962821},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":511,"opsSec":1021.2049143625951},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3039,"opsSec":6076.560086168861},{"name":"{ ...bigObject, ...anotherBigObject }","samples":540,"opsSec":1078.1360041935336},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5741581,"opsSec":11483158.279456718},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13120971,"opsSec":26240259.159699567},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9249199,"opsSec":18497683.91541013}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,851|926|
|streams.web.Readable reading 1e3 * "some data"|583|292|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":926,"opsSec":1851.4607953696432},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":292,"opsSec":583.5572889312106}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,884|2446|
|streams.web.WritableStream writing 1e3 * "some data"|1,585|800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2446,"opsSec":4884.364975582229},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":800,"opsSec":1585.391432837598}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,292,071|47646046|
|Using backtick (`)|107,152,146|53577484|
|Using array.join|11,046,348|5523175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47646046,"opsSec":95292071.41691257},{"name":"Using backtick (`)","samples":53577484,"opsSec":107152146.25538051},{"name":"Using array.join","samples":5523175,"opsSec":11046348.055842742}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,792,692|26423989|
|(short string) (true) String#slice and strict comparison|51,492,480|25747602|
|(long string) (true) String#endsWith|49,184,454|24601803|
|(long string) (true) String#slice and strict comparison|45,143,958|22571985|
|(short string) (false) String#endsWith|55,181,070|27839759|
|(short string) (false) String#slice and strict comparison|60,640,436|30321044|
|(long string) (false) String#endsWith|53,469,506|26738100|
|(long string) (false) String#slice and strict comparison|52,912,233|26462276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26423989,"opsSec":52792692.964001164},{"name":"(short string) (true) String#slice and strict comparison","samples":25747602,"opsSec":51492480.871641584},{"name":"(long string) (true) String#endsWith","samples":24601803,"opsSec":49184454.95040704},{"name":"(long string) (true) String#slice and strict comparison","samples":22571985,"opsSec":45143958.08199506},{"name":"(short string) (false) String#endsWith","samples":27839759,"opsSec":55181070.042993},{"name":"(short string) (false) String#slice and strict comparison","samples":30321044,"opsSec":60640436.760907},{"name":"(long string) (false) String#endsWith","samples":26738100,"opsSec":53469506.47330164},{"name":"(long string) (false) String#slice and strict comparison","samples":26462276,"opsSec":52912233.92611753}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,771,710|7885857|
|Using indexof|15,757,132|7878569|
|Using RegExp.test|13,344,486|6674066|
|Using RegExp.text with cached regex pattern|13,989,487|6994746|
|Using new RegExp.test|4,164,440|2083999|
|Using new RegExp.test with cached regex pattern|4,755,686|2379212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7885857,"opsSec":15771710.814114414},{"name":"Using indexof","samples":7878569,"opsSec":15757132.579546392},{"name":"Using RegExp.test","samples":6674066,"opsSec":13344486.446436672},{"name":"Using RegExp.text with cached regex pattern","samples":6994746,"opsSec":13989487.21559537},{"name":"Using new RegExp.test","samples":2083999,"opsSec":4164440.227096307},{"name":"Using new RegExp.test with cached regex pattern","samples":2379212,"opsSec":4755686.084941294}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|69,338,510|34689457|
|(short string) (true) String#slice and strict comparison|51,312,156|25662834|
|(long string) (true) String#startsWith|53,997,539|26998777|
|(long string) (true) String#slice and strict comparison|45,218,666|22617758|
|(short string) (false) String#startsWith|102,890,992|51455415|
|(short string) (false) String#slice and strict comparison|60,666,419|30346580|
|(long string) (false) String#startsWith|87,911,556|43955790|
|(long string) (false) String#slice and strict comparison|52,935,694|26467857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34689457,"opsSec":69338510.8657496},{"name":"(short string) (true) String#slice and strict comparison","samples":25662834,"opsSec":51312156.58555221},{"name":"(long string) (true) String#startsWith","samples":26998777,"opsSec":53997539.09667921},{"name":"(long string) (true) String#slice and strict comparison","samples":22617758,"opsSec":45218666.62044389},{"name":"(short string) (false) String#startsWith","samples":51455415,"opsSec":102890992.61662352},{"name":"(short string) (false) String#slice and strict comparison","samples":30346580,"opsSec":60666419.21307358},{"name":"(long string) (false) String#startsWith","samples":43955790,"opsSec":87911556.08805674},{"name":"(long string) (false) String#slice and strict comparison","samples":26467857,"opsSec":52935694.73140712}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|82,459,341|41265686|
|Using this|84,426,249|42218927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:52:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":41265686,"opsSec":82459341.62115104},{"name":"Using this","samples":42218927,"opsSec":84426249.10550295}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,670,863|4835433|
|Date.now()|19,063,737|9688760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4835433,"opsSec":9670863.775701333},{"name":"Date.now()","samples":9688760,"opsSec":19063737.814769458}]}-->
