## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,278,196|47654854|
|Using dot notation|70,230,487|35125336|
|Using define property (writable)|5,037,301|2518653|
|Using define property initialized (writable)|7,000,445|3500407|
|Using define property (getter)|2,423,998|1212396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":47654854,"opsSec":95278196.83251798},{"name":"Using dot notation","samples":35125336,"opsSec":70230487.19613594},{"name":"Using define property (writable)","samples":2518653,"opsSec":5037301.436204899},{"name":"Using define property initialized (writable)","samples":3500407,"opsSec":7000445.090544619},{"name":"Using define property (getter)","samples":1212396,"opsSec":2423998.1890730425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.456ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|26.133ms
new Array(length)|1,000,000|7.658ms
array.push|10,000,000|228.439ms
new Array(length)|10,000,000|63.106ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.362ms
new Array(length)|10,000|0.117ms
array.push|1,000,000|17.45ms
new Array(length)|1,000,000|10.954ms
array.push|10,000,000|334.932ms
new Array(length)|10,000,000|49.569ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|327|164|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:47:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":164,"opsSec":327.16986796796647},{"name":"Array.from","samples":12,"opsSec":22.941020340076424}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,829|2419|
|new Blob (1024)|617|311|
|text (128)|4,446|2226|
|text (1024)|555|279|
|arrayBuffer (128)|4,439|2225|
|arrayBuffer (1024)|553|278|
|slice (0, 64)|171,457|85731|
|slice (0, 512)|27,054|13528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:51:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2419,"opsSec":4829.293787793716},{"name":"new Blob (1024)","samples":311,"opsSec":617.0784868258495},{"name":"text (128)","samples":2226,"opsSec":4446.253466384892},{"name":"text (1024)","samples":279,"opsSec":555.0466588932549},{"name":"arrayBuffer (128)","samples":2225,"opsSec":4439.462456397794},{"name":"arrayBuffer (1024)","samples":278,"opsSec":553.5901622360489},{"name":"slice (0, 64)","samples":85731,"opsSec":171457.6003979738},{"name":"slice (0, 512)","samples":13528,"opsSec":27054.796981397423}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.39 ms|1|
|Gzip|135.53 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:56:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133387988},{"name":"Gzip","samples":1,"totalTime":0.135533589}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,787|3394|
|crypto.verify('RSA-SHA256')|6,817|3409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:00:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3394,"opsSec":6787.0964338517615},{"name":"crypto.verify('RSA-SHA256')","samples":3409,"opsSec":6817.974828036935}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,751|774376|
|fromUnixToISOString(new Date())|2,934,941|1467475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":774376,"opsSec":1548751.073846858},{"name":"fromUnixToISOString(new Date())","samples":1467475,"opsSec":2934941.711724606}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,838|10920|
|Intl.DateTimeFormat().format(new Date())|21,739|10870|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,574|10788|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,547|10275|
|Reusing Intl.DateTimeFormat()|441,285|220645|
|Date.toLocaleDateString()|994,660|497331|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,613|13307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10920,"opsSec":21838.93426000811},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10870,"opsSec":21739.437774660273},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10788,"opsSec":21574.468514778007},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10275,"opsSec":20547.45363626067},{"name":"Reusing Intl.DateTimeFormat()","samples":220645,"opsSec":441285.62156406284},{"name":"Date.toLocaleDateString()","samples":497331,"opsSec":994660.6472615198},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13307,"opsSec":26613.00105439242}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,133,423|567661|
|Using brackets {}|1,139,076|569623|
|Using '' + |1,139,919|569982|
|Using date.toString()|1,262,320|631313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":567661,"opsSec":1133423.3707757592},{"name":"Using brackets {}","samples":569623,"opsSec":1139076.7218083718},{"name":"Using '' + ","samples":569982,"opsSec":1139919.7893508899},{"name":"Using date.toString()","samples":631313,"opsSec":1262320.1297340044}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,186,431|2093217|
|Using delete property (proto: null)|18,274,040|9137545|
|Using delete property (cached proto: null)|4,210,515|2105260|
|Using undefined assignment|74,957,533|37478769|
|Using undefined assignment (proto: null)|19,957,798|9979522|
|Using undefined property (cached proto: null)|76,059,951|38050710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2093217,"opsSec":4186431.2202096693},{"name":"Using delete property (proto: null)","samples":9137545,"opsSec":18274040.30257694},{"name":"Using delete property (cached proto: null)","samples":2105260,"opsSec":4210515.149486547},{"name":"Using undefined assignment","samples":37478769,"opsSec":74957533.8023781},{"name":"Using undefined assignment (proto: null)","samples":9979522,"opsSec":19957798.274147324},{"name":"Using undefined property (cached proto: null)","samples":38050710,"opsSec":76059951.20188531}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|344,990|172496|
|NodeError|303,170|152036|
|NodeError Range|296,163|148175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":172496,"opsSec":344990.9153485622},{"name":"NodeError","samples":152036,"opsSec":303170.2286436658},{"name":"NodeError Range","samples":148175,"opsSec":296163.40224841336}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,821,356|34413631|
|using Array.includes (first item)|79,415,790|39709922|
|Using raw comparison|96,902,805|48455086|
|Using raw comparison (first item)|98,884,333|49453510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34413631,"opsSec":68821356.02651124},{"name":"using Array.includes (first item)","samples":39709922,"opsSec":79415790.30039991},{"name":"Using raw comparison","samples":48455086,"opsSec":96902805.64252068},{"name":"Using raw comparison (first item)","samples":49453510,"opsSec":98884333.9561038}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,348,406|21176276|
|Using Object.getOwnPropertyNames()|45,356,257|22678133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:23:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21176276,"opsSec":42348406.34510925},{"name":"Using Object.getOwnPropertyNames()","samples":22678133,"opsSec":45356257.2008861}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|90,605,016|45436220|
|Length = 10_000 - Array.at|80,809,795|40414787|
|Length = 1_000_000 - Array.at|89,001,850|44501808|
|Length = 100 - Array[length - 1]|91,409,698|45705777|
|Length = 10_000 - Array[length - 1]|91,400,097|45760118|
|Length = 1_000_000 - Array[length - 1]|90,722,364|45361204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":45436220,"opsSec":90605016.21407361},{"name":"Length = 10_000 - Array.at","samples":40414787,"opsSec":80809795.6408973},{"name":"Length = 1_000_000 - Array.at","samples":44501808,"opsSec":89001850.91529265},{"name":"Length = 100 - Array[length - 1]","samples":45705777,"opsSec":91409698.56593852},{"name":"Length = 10_000 - Array[length - 1]","samples":45760118,"opsSec":91400097.70077993},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45361204,"opsSec":90722364.6347097}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,510,051|47256527|
|~ (small)|91,179,507|45603091|
|Math.floor (long)|95,386,748|47703234|
|~ (long)|94,939,376|47476183|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47256527,"opsSec":94510051.79369472},{"name":"~ (small)","samples":45603091,"opsSec":91179507.43509987},{"name":"Math.floor (long)","samples":47703234,"opsSec":95386748.88817585},{"name":"~ (long)","samples":47476183,"opsSec":94939376.96408004}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,257,961|16629030|
|Object.create({})|2,038,418|1019210|
|new Function with empty prototype|71,880,680|35941228|
|Empty class|78,399,620|39223915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:33:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":16629030,"opsSec":33257961.024307992},{"name":"Object.create({})","samples":1019210,"opsSec":2038418.1124248279},{"name":"new Function with empty prototype","samples":35941228,"opsSec":71880680.40343268},{"name":"Empty class","samples":39223915,"opsSec":78399620.03525022}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|88,094,667|44047338|
|Using parseInt(x, 10) - big number (10 len)|89,160,081|44580066|
|Using + - small number (2 len)|89,022,219|44523034|
|Using + - big number (10 len)|89,888,335|44957591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44047338,"opsSec":88094667.19053328},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":44580066,"opsSec":89160081.3570738},{"name":"Using + - small number (2 len)","samples":44523034,"opsSec":89022219.65953095},{"name":"Using + - big number (10 len)","samples":44957591,"opsSec":89888335.9495853}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|922,114|461066|
|Using ? operator to avoid rejection|1,244,356|634904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:37:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":461066,"opsSec":922114.8136241037},{"name":"Using ? operator to avoid rejection","samples":634904,"opsSec":1244356.3752037396}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,000,854|49000628|
|Raw usage underscore usage|97,513,017|48786988|
|Manipulating private properties using #|98,344,212|49172117|
|Manipulating private properties using underscore(_)|98,264,282|49133774|
|Manipulating private properties using Symbol|98,461,833|49230927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":49000628,"opsSec":98000854.3924987},{"name":"Raw usage underscore usage","samples":48786988,"opsSec":97513017.88215736},{"name":"Manipulating private properties using #","samples":49172117,"opsSec":98344212.95433843},{"name":"Manipulating private properties using underscore(_)","samples":49133774,"opsSec":98264282.6778866},{"name":"Manipulating private properties using Symbol","samples":49230927,"opsSec":98461833.91378587}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,650,008|3825470|
|Adding property in the object creation - small object|7,664,874|3838173|
|Adding property after the function creation - small class|283,723|144119|
|Adding property in the function creation - small class|297,372|148919|
|Adding property after the class creation - small class|286,110|143082|
|Adding property in the class creation - small class|272,717|136359|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3825470,"opsSec":7650008.993905442},{"name":"Adding property in the object creation - small object","samples":3838173,"opsSec":7664874.488235175},{"name":"Adding property after the function creation - small class","samples":144119,"opsSec":283723.50228382566},{"name":"Adding property in the function creation - small class","samples":148919,"opsSec":297372.00142094126},{"name":"Adding property after the class creation - small class","samples":143082,"opsSec":286110.0951414148},{"name":"Adding property in the class creation - small class","samples":136359,"opsSec":272717.12185086764}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,786,887|46893463|
|Getter|52,090,137|26051098|
|Method|99,065,288|49534339|
|DefineProperty (getter)|94,474,785|47237410|
|DefineProperty (getter & enumerable=false)|53,644,278|26873640|
|DefineProperty (getter & configurable=false)|95,150,879|47575572|
|DefineProperty (getter & enumerable=false & configurable=false)|51,680,028|25840020|
|DefineProperty (writable)|93,886,921|46943495|
|DefineProperty (writable & enumerable=false)|90,621,746|45352577|
|DefineProperty (writable & enumerable=false & configurable=false)|94,766,745|47383383|
|DefineProperties (getter)|53,810,424|26905217|
|DefineProperties (getter & enumerable=false)|52,419,481|26209748|
|DefineProperties (getter & enumerable=false & configurable=false)|53,958,620|27006882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:48:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":46893463,"opsSec":93786887.9225235},{"name":"Getter","samples":26051098,"opsSec":52090137.13325366},{"name":"Method","samples":49534339,"opsSec":99065288.38209271},{"name":"DefineProperty (getter)","samples":47237410,"opsSec":94474785.04432954},{"name":"DefineProperty (getter & enumerable=false)","samples":26873640,"opsSec":53644278.47920054},{"name":"DefineProperty (getter & configurable=false)","samples":47575572,"opsSec":95150879.67085627},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25840020,"opsSec":51680028.11359353},{"name":"DefineProperty (writable)","samples":46943495,"opsSec":93886921.27477363},{"name":"DefineProperty (writable & enumerable=false)","samples":45352577,"opsSec":90621746.46952341},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47383383,"opsSec":94766745.71991642},{"name":"DefineProperties (getter)","samples":26905217,"opsSec":53810424.74460694},{"name":"DefineProperties (getter & enumerable=false)","samples":26209748,"opsSec":52419481.8467399},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27006882,"opsSec":53958620.017018445}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|89,297,418|44649013|
|Setter|10,721,952|5360981|
|Method|91,975,147|45999962|
|DefineProperty (setter)|96,188,512|48103710|
|DefineProperty (setter & enumerable=false)|10,769,023|5387339|
|DefineProperty (setter & configurable=false)|10,908,089|5454328|
|DefineProperty (setter & enumerable=false & configurable=false)|10,604,434|5302220|
|DefineProperty (writable)|95,794,590|47897308|
|DefineProperty (writable & enumerable=false)|96,095,298|48047670|
|DefineProperty (writable & enumerable=false & configurable=false)|95,364,131|47682088|
|DefineProperties (setter)|96,155,808|48097364|
|DefineProperties (setter & enumerable=false)|10,561,662|5281329|
|DefineProperties (setter & enumerable=false & configurable=false)|10,726,585|5363295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:51:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":44649013,"opsSec":89297418.95614593},{"name":"Setter","samples":5360981,"opsSec":10721952.521793969},{"name":"Method","samples":45999962,"opsSec":91975147.36690171},{"name":"DefineProperty (setter)","samples":48103710,"opsSec":96188512.2241521},{"name":"DefineProperty (setter & enumerable=false)","samples":5387339,"opsSec":10769023.422719246},{"name":"DefineProperty (setter & configurable=false)","samples":5454328,"opsSec":10908089.630170222},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5302220,"opsSec":10604434.125143494},{"name":"DefineProperty (writable)","samples":47897308,"opsSec":95794590.71022804},{"name":"DefineProperty (writable & enumerable=false)","samples":48047670,"opsSec":96095298.29464054},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47682088,"opsSec":95364131.75104287},{"name":"DefineProperties (setter)","samples":48097364,"opsSec":96155808.5518654},{"name":"DefineProperties (setter & enumerable=false)","samples":5281329,"opsSec":10561662.288726067},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5363295,"opsSec":10726585.816631531}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,018,177|2009486|
|Using replaceAll()|3,055,646|1528141|
|Using replaceAll(//g)|3,454,188|1727262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2009486,"opsSec":4018177.8794693253},{"name":"Using replaceAll()","samples":1528141,"opsSec":3055646.4988637525},{"name":"Using replaceAll(//g)","samples":1727262,"opsSec":3454188.3910559253}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,424,653|11812209|
|{ ...object, __proto__: null }|2,320,387|1160471|
|{ ...object, newProp: true }|22,819,807|11413236|
|structuredClone|285,973|143003|
|JSON.parse + JSON.stringify|285,150|142623|
|loop + object.keys starting with {}|1,723,999|862000|
|loop + object.keys starting with { __proto__: null }|926,212|463129|
|loop + object.keys starting with { randomProp: true }|680,657|340330|
|object.keys + reduce(FN, {})|1,783,931|892100|
|object.keys + reduce(FN, { __proto__: null })|959,438|479740|
|object.keys + reduce(FN, { newProp: true })|674,297|337149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:58:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11812209,"opsSec":23424653.213287376},{"name":"{ ...object, __proto__: null }","samples":1160471,"opsSec":2320387.8542541983},{"name":"{ ...object, newProp: true }","samples":11413236,"opsSec":22819807.52085315},{"name":"structuredClone","samples":143003,"opsSec":285973.7261491617},{"name":"JSON.parse + JSON.stringify","samples":142623,"opsSec":285150.0777950304},{"name":"loop + object.keys starting with {}","samples":862000,"opsSec":1723999.7482960366},{"name":"loop + object.keys starting with { __proto__: null }","samples":463129,"opsSec":926212.8156340021},{"name":"loop + object.keys starting with { randomProp: true }","samples":340330,"opsSec":680657.6449245486},{"name":"object.keys + reduce(FN, {})","samples":892100,"opsSec":1783931.6574322258},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":479740,"opsSec":959438.0936629451},{"name":"object.keys + reduce(FN, { newProp: true })","samples":337149,"opsSec":674297.2205124131}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|319,679|159873|
|Sort using first char|1,352,069|676144|
|Sort using localeCompare|1,247,906|623974|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:01:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":159873,"opsSec":319679.3212871659},{"name":"Sort using first char","samples":676144,"opsSec":1352069.213568137},{"name":"Sort using localeCompare","samples":623974,"opsSec":1247906.1626979895}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,002|1502|
|{...smallObject} - Total keys: 2|39,488,544|19750994|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,122|562|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,713|3357|
|{ ...bigObject, ...anotherBigObject }|1,535|769|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,401,807|6202438|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,534,956|13768374|
|{ ...smallObject, ...anotherSmallObject }|20,000,392|10000293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:06:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1502,"opsSec":3002.3732601249453},{"name":"{...smallObject} - Total keys: 2","samples":19750994,"opsSec":39488544.519903645},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":562,"opsSec":1122.0434726000449},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3357,"opsSec":6713.129790411528},{"name":"{ ...bigObject, ...anotherBigObject }","samples":769,"opsSec":1535.5988485756338},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6202438,"opsSec":12401807.718359632},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13768374,"opsSec":27534956.08012822},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10000293,"opsSec":20000392.996207587}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,872|939|
|streams.web.Readable reading 1e3 * "some data"|1,770|886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:08:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":939,"opsSec":1872.8474744679731},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":886,"opsSec":1770.936842859505}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,981|4994|
|streams.web.WritableStream writing 1e3 * "some data"|1,636|886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:11:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4994,"opsSec":9981.786737027669},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":886,"opsSec":1636.164990220193}]}-->
