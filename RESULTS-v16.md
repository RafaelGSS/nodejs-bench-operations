## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,196,136|97|
|Using dot notation|712,161,600|92|
|Using define property (writable)|3,059,697|98|
|Using define property initialized (writable)|3,751,052|95|
|Using define property (getter)|1,556,144|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":711196136.4482746,"samples":6},{"name":"Using dot notation","opsSec":712161599.8740793,"samples":6},{"name":"Using define property (writable)","opsSec":3059697.0996847255,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3751051.5852475585,"samples":5},{"name":"Using define property (getter)","opsSec":1556144.1803353305,"samples":3}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.022ms
new Array(length)|10|0.003ms
array.push|100|0.036ms
new Array(length)|100|0.015ms
array.push|1,000|0.131ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.497ms
new Array(length)|10,000|0.243ms
array.push|1,000,000|46.167ms
new Array(length)|1,000,000|7.153ms
array.push|100,000,000|1,990.248ms
new Array(length)|100,000,000|5,152.373ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.022ms
array.push|100|0.073ms
new Array(length)|100|0.012ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.675ms
new Array(length)|10,000|4.451ms
array.push|1,000,000|365.487ms
new Array(length)|1,000,000|5.108ms
array.push|100,000,000|2,757.078ms
new Array(length)|100,000,000|5,675.509ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|274|80|
|Array.from|12|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":273.8762041773307,"samples":3},{"name":"Array.from","opsSec":12.226022165778884,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,147|84|
|new Blob (1024)|420|72|
|text (128)|26,499|81|
|text (1024)|17,468|82|
|arrayBuffer (128)|31,965|86|
|arrayBuffer (1024)|20,733|85|
|slice (0, 64)|67,317|78|
|slice (0, 512)|33,195|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3146.8126010243536,"samples":4},{"name":"new Blob (1024)","opsSec":419.80543753889685,"samples":2},{"name":"text (128)","opsSec":26498.726680166266,"samples":4},{"name":"text (1024)","opsSec":17468.012937094467,"samples":3},{"name":"arrayBuffer (128)","opsSec":31964.75407339948,"samples":4},{"name":"arrayBuffer (1024)","opsSec":20733.11835240124,"samples":4},{"name":"slice (0, 64)","opsSec":67317.05908151966,"samples":3},{"name":"slice (0, 512)","opsSec":33194.587255267994,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|197,105|57|
|[True conditional] Using constructor name|154,911|91|
|[True conditional] Check if property is valid then instanceof |158,405|90|
|[False conditional] Using instanceof only|712,978,053|95|
|[False conditional] Using constructor name|712,681,779|95|
|[False conditional] Check if property is valid then instanceof |713,987,145|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":197104.96344618677,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":154910.98937721044,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":158404.60820954994,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":712978052.5671902,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":712681778.5674716,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713987145.2995459,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|22,332|90|
|crypto.verify('RSA-SHA256')|21,349|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":22331.769501091992,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":21349.07832973495,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,401,872|88|
|fromUnixToISOString(new Date())|1,112,381|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1401871.9608306845,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1112380.5526508228,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,390|81|
|Intl.DateTimeFormat().format(new Date())|8,577|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,588|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,518|90|
|Reusing Intl.DateTimeFormat()|362,536|75|
|Date.toLocaleDateString()|452,016|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,865|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8389.928459050892,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8576.644191183335,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7587.950075972596,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10517.620389418931,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":362535.774685518,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":452015.9701095497,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9865.017323255144,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|720,962|96|
|Using brackets {}|716,072|91|
|Using '' + |734,424|97|
|Using date.toString()|800,700|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":720961.5615429272,"samples":6},{"name":"Using brackets {}","opsSec":716072.1233094444,"samples":7},{"name":"Using '' + ","opsSec":734423.7674999037,"samples":6},{"name":"Using date.toString()","opsSec":800700.2838869216,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,957,383|90|
|Using delete property (proto: null)|9,984,237|94|
|Using delete property (cached proto: null)|1,961,014|95|
|Using undefined assignment|587,984,873|96|
|Using undefined assignment (proto: null)|11,483,991|93|
|Using undefined property (cached proto: null)|585,067,977|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1957382.756215492,"samples":7},{"name":"Using delete property (proto: null)","opsSec":9984236.50956101,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1961014.046825172,"samples":6},{"name":"Using undefined assignment","opsSec":587984873.206031,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":11483991.452570606,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":585067977.3829693,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|157,092|55|
|NodeError|124,197|90|
|NodeError Range|124,240|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":157091.94968608205,"samples":4},{"name":"NodeError","opsSec":124197.35282754587,"samples":3},{"name":"NodeError Range","opsSec":124239.67606677432,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,026,422|87|
|Function returning explicitly undefined|1,055,746|85|
|Function returning implicitly undefined|1,080,382|86|
|Function returning string|1,037,549|92|
|Function returning integer|1,098,143|93|
|Function returning float|1,095,720|93|
|Function returning functions|1,107,062|89|
|Function returning arrow functions|1,086,038|92|
|Function returning empty object|1,154,672|89|
|Function returning empty array|1,139,645|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1026421.924455919,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1055746.232711335,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1080382.4819160474,"samples":6},{"name":"Function returning string","opsSec":1037548.7977082198,"samples":10},{"name":"Function returning integer","opsSec":1098142.614135206,"samples":5},{"name":"Function returning float","opsSec":1095720.247443614,"samples":6},{"name":"Function returning functions","opsSec":1107062.4876147455,"samples":7},{"name":"Function returning arrow functions","opsSec":1086037.728502017,"samples":5},{"name":"Function returning empty object","opsSec":1154671.907179576,"samples":8},{"name":"Function returning empty array","opsSec":1139645.4856723065,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|682,274,115|86|
|using Array.includes (first item)|662,210,382|87|
|Using raw comparison|655,034,665|87|
|Using raw comparison (first item)|632,342,076|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":682274114.9879324,"samples":6},{"name":"using Array.includes (first item)","opsSec":662210381.9524121,"samples":8},{"name":"Using raw comparison","opsSec":655034665.0217266,"samples":7},{"name":"Using raw comparison (first item)","opsSec":632342075.9629763,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,753,701|84|
|Using Object.getOwnPropertyNames()|44,678,302|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":50753701.01792435,"samples":4},{"name":"Using Object.getOwnPropertyNames()","opsSec":44678301.555387475,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,696,543|88|
|Length = 10_000 - Array.at|13,507,969|84|
|Length = 1_000_000 - Array.at|13,742,551|84|
|Length = 100 - Array[length - 1]|660,884,892|90|
|Length = 10_000 - Array[length - 1]|652,363,238|85|
|Length = 1_000_000 - Array[length - 1]|665,426,639|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13696543.422417933,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":13507969.188053286,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":13742551.13588658,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":660884891.9703271,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":652363237.936635,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":665426639.169129,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|33,971,678|89|
|Object.create({})|1,143,609|78|
|Cached Empty.prototype|596,891,483|91|
|Empty.prototype|1,181,791|78|
|Empty class|788,408|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":33971677.67556904,"samples":6},{"name":"Object.create({})","opsSec":1143608.6983008804,"samples":3},{"name":"Cached Empty.prototype","opsSec":596891483.4596708,"samples":6},{"name":"Empty.prototype","opsSec":1181791.421592888,"samples":3},{"name":"Empty class","opsSec":788407.9392128147,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|592,946,862|93|
|Using optional chain (obj.field?.field2) (undefined)|598,116,576|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|594,167,824|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|596,335,165|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":592946861.974609,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":598116576.1638625,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":594167824.2057695,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":596335164.816092,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|217,428,208|91|
|Using parseInt(x, 10) - big number (10 len)|15,158,517|95|
|Using + - small number (2 len)|594,858,426|98|
|Using + - big number (10 len)|594,971,159|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":217428207.62218094,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15158516.783278037,"samples":7},{"name":"Using + - small number (2 len)","opsSec":594858425.5540836,"samples":6},{"name":"Using + - big number (10 len)","opsSec":594971158.5777063,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|655,287|73|
|Using ? operator to avoid rejection|694,725|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":655286.5215775007,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":694725.0112168932,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|8,618,685|91|
|Raw usage underscore usage|6,713,033|91|
|Manipulating private properties using #|2,508,788|91|
|Manipulating private properties using underscore(_)|698,266,060|97|
|Manipulating private properties using Symbol|695,430,515|95|
|Manipulating private properties using PrivateSymbol|24,117,773|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":8618684.725002848,"samples":6},{"name":"Raw usage underscore usage","opsSec":6713032.898269313,"samples":6},{"name":"Manipulating private properties using #","opsSec":2508788.132737166,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":698266059.9262207,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":695430515.131134,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":24117773.22856836,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,129,743|86|
|Adding property in the object creation - small object|2,168,522|84|
|Adding property after the function creation - small class|150,579|79|
|Adding property in the function creation - small class|152,674|76|
|Adding property after the class creation - small class|124,901|75|
|Adding property in the class creation - small class|124,506|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2129742.959351642,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2168521.993939475,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":150578.7502576894,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":152674.1033036861,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":124900.57921797886,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":124506.0925723913,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|755,100,523|82|
|Getter|49,756,877|85|
|Method|756,635,645|83|
|DefineProperty (getter)|819,253,309|85|
|DefineProperty (getter & enumerable=false)|59,891,814|87|
|DefineProperty (getter & configurable=false)|823,201,481|86|
|DefineProperty (getter & enumerable=false & configurable=false)|57,291,857|85|
|DefineProperty (writable)|816,383,918|86|
|DefineProperty (writable & enumerable=false)|833,045,918|88|
|DefineProperty (writable & enumerable=false & configurable=false)|96,447,019|14|
|DefineProperties (getter)|37,344,020|85|
|DefineProperties (getter & enumerable=false)|36,472,401|84|
|DefineProperties (getter & enumerable=false & configurable=false)|37,567,734|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":755100523.3390785,"samples":10},{"name":"Getter","opsSec":49756876.79240223,"samples":6},{"name":"Method","opsSec":756635645.1575266,"samples":6},{"name":"DefineProperty (getter)","opsSec":819253308.5695103,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":59891814.24437717,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":823201480.8354009,"samples":5},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":57291856.5318115,"samples":5},{"name":"DefineProperty (writable)","opsSec":816383917.848456,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":833045917.9677566,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96447018.8624729,"samples":6},{"name":"DefineProperties (getter)","opsSec":37344019.69065468,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":36472400.94953971,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":37567734.02337541,"samples":8}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|555,390,546|87|
|Setter|5,780,797|82|
|Method|620,319,141|87|
|DefineProperty (setter)|594,053,858|88|
|DefineProperty (setter & enumerable=false)|5,509,065|86|
|DefineProperty (setter & configurable=false)|5,401,772|86|
|DefineProperty (setter & enumerable=false & configurable=false)|5,410,975|85|
|DefineProperty (writable)|703,634,840|88|
|DefineProperty (writable & enumerable=false)|544,997,972|73|
|DefineProperty (writable & enumerable=false & configurable=false)|68,186,270|78|
|DefineProperties (setter)|54,687,385|81|
|DefineProperties (setter & enumerable=false)|4,770,851|85|
|DefineProperties (setter & enumerable=false & configurable=false)|5,301,620|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":555390545.8856165,"samples":6},{"name":"Setter","opsSec":5780797.203422049,"samples":4},{"name":"Method","opsSec":620319140.987456,"samples":11},{"name":"DefineProperty (setter)","opsSec":594053857.969352,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5509064.936135608,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5401771.889312664,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5410974.8242252795,"samples":5},{"name":"DefineProperty (writable)","opsSec":703634839.8856195,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":544997972.251475,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":68186270.01476835,"samples":5},{"name":"DefineProperties (setter)","opsSec":54687384.94880025,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":4770851.274096002,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5301620.311648539,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,030,559|89|
|Using replaceAll()|1,897,827|97|
|Using replaceAll(//g)|1,813,136|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2030558.6863702452,"samples":10},{"name":"Using replaceAll()","opsSec":1897826.6590786756,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1813135.862616253,"samples":6}]}-->
