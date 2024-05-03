## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,469,783|98|
|Using dot notation|912,069,795|96|
|Using define property (writable)|4,753,912|97|
|Using define property initialized (writable)|6,856,884|95|
|Using define property (getter)|2,661,421|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912469783.2943633,"samples":6},{"name":"Using dot notation","opsSec":912069795.1796272,"samples":6},{"name":"Using define property (writable)","opsSec":4753912.026638876,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6856884.326699565,"samples":6},{"name":"Using define property (getter)","opsSec":2661420.8297384307,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.095ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.153ms
array.push|1,000,000|30.554ms
new Array(length)|1,000,000|8.267ms
array.push|100,000,000|1,933.705ms
new Array(length)|100,000,000|4,202.263ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.345ms
new Array(length)|10,000|0.197ms
array.push|1,000,000|21.658ms
new Array(length)|1,000,000|7.827ms
array.push|100,000,000|2,068.478ms
new Array(length)|100,000,000|4,800.218ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|224|87|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:22:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":223.9469234739886,"samples":3},{"name":"Array.from","opsSec":23.25438292227884,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,882,655|98|
|[async] async function|18,262,586|88|
|[async] function|215,588|25|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:23:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910882654.6548169,"samples":6},{"name":"[async] async function","opsSec":18262586.081368785,"samples":6},{"name":"[async] function","opsSec":215587.86602412837,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,008|91|
|new Blob (1024)|761|77|
|text (128)|6,548|89|
|text (1024)|828|90|
|arrayBuffer (128)|6,533|89|
|arrayBuffer (1024)|823|89|
|slice (0, 64)|196,494|58|
|slice (0, 512)|29,747|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6008.360594286962,"samples":4},{"name":"new Blob (1024)","opsSec":760.6641523729096,"samples":2},{"name":"text (128)","opsSec":6548.485805680427,"samples":6},{"name":"text (1024)","opsSec":827.7579112801415,"samples":2},{"name":"arrayBuffer (128)","opsSec":6533.005150848201,"samples":5},{"name":"arrayBuffer (1024)","opsSec":823.1575392027016,"samples":2},{"name":"slice (0, 64)","opsSec":196494.40736468078,"samples":4},{"name":"slice (0, 512)","opsSec":29747.38618908927,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,484|51|
|[True conditional] Using constructor name|230,785|93|
|[True conditional] Check if property is valid then instanceof |231,499|92|
|[False conditional] Using instanceof only|912,007,475|96|
|[False conditional] Using constructor name|913,369,355|98|
|[False conditional] Check if property is valid then instanceof |913,663,294|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:31:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279483.6244066246,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":230785.0230823704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":231499.32351916222,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912007474.9715859,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913369354.8466684,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913663294.3579303,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,072|93|
|crypto.verify('RSA-SHA256')|7,018|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7072.344572796575,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":7018.194633306479,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,623,902|91|
|fromUnixToISOString(new Date())|2,372,435|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1623901.7832623746,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2372435.3703514826,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,246|82|
|Intl.DateTimeFormat().format(new Date())|18,133|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,936|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,552|88|
|Reusing Intl.DateTimeFormat()|894,994|98|
|Date.toLocaleDateString()|910,448|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,425|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:35:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18246.214243981613,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18132.84236478236,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":20935.828022864174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15552.24095045049,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":894993.9756774461,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":910447.8030634733,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21424.57987479227,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,189,582|93|
|Using brackets {}|1,214,416|99|
|Using '' + |1,208,706|99|
|Using date.toString()|1,328,592|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:36:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1189582.2178840952,"samples":6},{"name":"Using brackets {}","opsSec":1214416.4180768467,"samples":5},{"name":"Using '' + ","opsSec":1208706.4984898528,"samples":5},{"name":"Using date.toString()","opsSec":1328592.216855907,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,345,442|95|
|Using delete property (proto: null)|23,178,651|99|
|Using delete property (cached proto: null)|4,452,069|95|
|Using undefined assignment|911,368,570|95|
|Using undefined assignment (proto: null)|25,388,808|98|
|Using undefined property (cached proto: null)|907,733,799|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:38:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4345441.708185158,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23178651.49736016,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":4452069.438911501,"samples":5},{"name":"Using undefined assignment","opsSec":911368570.1974441,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":25388807.51247176,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":907733798.659244,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|269,845|53|
|NodeError|221,381|83|
|NodeError Range|226,922|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":269845.0331735588,"samples":3},{"name":"NodeError","opsSec":221381.16979261333,"samples":3},{"name":"NodeError Range","opsSec":226922.20484033378,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,034,993|96|
|Function returning explicitly undefined|2,040,644|99|
|Function returning implicitly undefined|2,094,069|98|
|Function returning string|2,040,292|97|
|Function returning integer|2,096,066|94|
|Function returning float|2,063,155|98|
|Function returning functions|1,976,103|97|
|Function returning arrow functions|2,024,807|97|
|Function returning empty object|2,067,848|97|
|Function returning empty array|2,046,892|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2034992.9633694699,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2040644.2325710757,"samples":7},{"name":"Function returning implicitly undefined","opsSec":2094068.839481064,"samples":8},{"name":"Function returning string","opsSec":2040292.2880244078,"samples":6},{"name":"Function returning integer","opsSec":2096066.1348794284,"samples":5},{"name":"Function returning float","opsSec":2063154.5917155878,"samples":6},{"name":"Function returning functions","opsSec":1976103.0097551488,"samples":7},{"name":"Function returning arrow functions","opsSec":2024807.1889831922,"samples":5},{"name":"Function returning empty object","opsSec":2067847.7990464922,"samples":4},{"name":"Function returning empty array","opsSec":2046892.4034158909,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|911,291,951|96|
|using Array.includes (first item)|912,051,347|99|
|Using raw comparison|913,730,434|99|
|Using raw comparison (first item)|912,336,368|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:42:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":911291950.6373439,"samples":7},{"name":"using Array.includes (first item)","opsSec":912051347.0605773,"samples":8},{"name":"Using raw comparison","opsSec":913730434.118422,"samples":6},{"name":"Using raw comparison (first item)","opsSec":912336367.9874817,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|100,588,113|90|
|Using Object.getOwnPropertyNames()|98,842,926|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:46:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":100588112.9080902,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":98842926.22915517,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|965,771,280|95|
|Length = 10_000 - Array.at|968,988,251|99|
|Length = 1_000_000 - Array.at|968,155,078|96|
|Length = 100 - Array[length - 1]|911,512,176|97|
|Length = 10_000 - Array[length - 1]|911,666,769|97|
|Length = 1_000_000 - Array[length - 1]|911,754,506|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":965771280.3754638,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":968988250.5395525,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":968155077.8000712,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":911512176.3025482,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":911666769.2039686,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":911754505.9749589,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|90,623,440|91|
|Object.create({})|2,856,175|88|
|Cached Empty.prototype|912,493,401|100|
|Empty.prototype|2,665,477|84|
|Empty class|1,683,411|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:54:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":90623440.24662656,"samples":7},{"name":"Object.create({})","opsSec":2856175.225003506,"samples":3},{"name":"Cached Empty.prototype","opsSec":912493401.4523312,"samples":6},{"name":"Empty.prototype","opsSec":2665476.8295552805,"samples":4},{"name":"Empty class","opsSec":1683410.6566520878,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|911,051,924|89|
|Using optional chain (obj.field?.field2) (undefined)|911,953,321|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|912,740,717|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|912,877,914|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:55:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":911051923.8326392,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":911953321.2329333,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":912740717.2831824,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":912877914.3829656,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|913,073,176|100|
|Using parseInt(x, 10) - big number (10 len)|913,775,170|97|
|Using + - small number (2 len)|913,419,250|97|
|Using + - big number (10 len)|912,888,955|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:56:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":913073176.2157964,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":913775170.3236157,"samples":7},{"name":"Using + - small number (2 len)","opsSec":913419249.9032608,"samples":6},{"name":"Using + - big number (10 len)","opsSec":912888955.0022565,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,457,904|84|
|Using ? operator to avoid rejection|1,543,979|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:57:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1457904.3004909274,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1543978.7403356938,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|909,785,953|97|
|Raw usage underscore usage|909,795,299|96|
|Manipulating private properties using #|901,306,371|99|
|Manipulating private properties using underscore(_)|902,732,548|97|
|Manipulating private properties using Symbol|901,636,233|96|
|Manipulating private properties using PrivateSymbol|53,345,435|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:58:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":909785952.9613467,"samples":6},{"name":"Raw usage underscore usage","opsSec":909795299.15072,"samples":6},{"name":"Manipulating private properties using #","opsSec":901306370.7104765,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":902732548.4682845,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":901636233.0333589,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":53345434.695718214,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,678,241|98|
|Adding property in the object creation - small object|5,720,551|99|
|Adding property after the function creation - small class|287,744|89|
|Adding property in the function creation - small class|291,904|92|
|Adding property after the class creation - small class|294,874|88|
|Adding property in the class creation - small class|291,510|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:00:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5678241.39246706,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5720550.524755492,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":287743.7202524514,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":291904.460006997,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":294874.1031723559,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":291510.1964441651,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|912,293,949|94|
|Getter|102,759,538|98|
|Method|912,681,345|99|
|DefineProperty (getter)|913,192,683|99|
|DefineProperty (getter & enumerable=false)|102,610,553|97|
|DefineProperty (getter & configurable=false)|912,789,811|97|
|DefineProperty (getter & enumerable=false & configurable=false)|102,601,276|98|
|DefineProperty (writable)|912,885,882|96|
|DefineProperty (writable & enumerable=false)|913,803,324|98|
|DefineProperty (writable & enumerable=false & configurable=false)|912,451,898|95|
|DefineProperties (getter)|102,801,875|100|
|DefineProperties (getter & enumerable=false)|102,824,671|99|
|DefineProperties (getter & enumerable=false & configurable=false)|69,087,785|69|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":912293949.3422636,"samples":6},{"name":"Getter","opsSec":102759538.46098062,"samples":6},{"name":"Method","opsSec":912681344.931039,"samples":9},{"name":"DefineProperty (getter)","opsSec":913192682.8867384,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102610552.57377191,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":912789810.8247468,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":102601275.6829558,"samples":7},{"name":"DefineProperty (writable)","opsSec":912885882.1783856,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":913803323.7396636,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":912451898.4221344,"samples":7},{"name":"DefineProperties (getter)","opsSec":102801874.9933504,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":102824671.1138641,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69087785.2681848,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|868,830,228|98|
|Setter|13,759,469|98|
|Method|869,293,834|97|
|DefineProperty (setter)|870,313,404|99|
|DefineProperty (setter & enumerable=false)|13,781,365|96|
|DefineProperty (setter & configurable=false)|13,737,521|99|
|DefineProperty (setter & enumerable=false & configurable=false)|13,739,756|99|
|DefineProperty (writable)|871,601,267|98|
|DefineProperty (writable & enumerable=false)|871,691,385|98|
|DefineProperty (writable & enumerable=false & configurable=false)|872,236,292|98|
|DefineProperties (setter)|870,049,875|97|
|DefineProperties (setter & enumerable=false)|13,677,147|99|
|DefineProperties (setter & enumerable=false & configurable=false)|13,048,908|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":868830227.8883955,"samples":6},{"name":"Setter","opsSec":13759469.30156521,"samples":4},{"name":"Method","opsSec":869293834.1711546,"samples":6},{"name":"DefineProperty (setter)","opsSec":870313403.8669031,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13781365.028653776,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":13737521.323463626,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13739756.00768191,"samples":5},{"name":"DefineProperty (writable)","opsSec":871601266.6923369,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":871691384.8392708,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":872236292.15871,"samples":6},{"name":"DefineProperties (setter)","opsSec":870049874.6691028,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13677147.413323408,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":13048907.784362331,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,627,015|96|
|Using replaceAll()|3,291,686|93|
|Using replaceAll(//g)|3,358,053|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:06:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3627015.3867721586,"samples":5},{"name":"Using replaceAll()","opsSec":3291686.421008121,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3358053.290193173,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|34,007,551|91|
|{ ...object, __proto__: null }|2,768,097|96|
|{ ...object, newProp: true }|31,080,367|98|
|structuredClone|284,535|95|
|JSON.parse + JSON.stringify|257,809|99|
|loop + object.keys starting with {}|1,628,952|94|
|loop + object.keys starting with { __proto__: null }|902,811|95|
|loop + object.keys starting with { randomProp: true }|692,991|94|
|object.keys + reduce(FN, {})|679,539|95|
|object.keys + reduce(FN, { __proto__: null })|907,243|97|
|object.keys + reduce(FN, { newProp: true })|708,508|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:08:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":34007551.016957454,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":2768097.2814032724,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":31080367.028073996,"samples":6},{"name":"structuredClone","opsSec":284535.1285208856,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":257809.175355183,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1628952.1746545853,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":902810.8490368124,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":692990.5625437397,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":679538.8107964882,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":907243.1212571965,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708508.0692512551,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|353,783|95|
|Sort using first char|1,529,785|99|
|Sort using localeCompare|1,428,220|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:10:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":353782.8708020927,"samples":4},{"name":"Sort using first char","opsSec":1529785.4499736188,"samples":6},{"name":"Sort using localeCompare","opsSec":1428219.9483368646,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,257|93|
|{...smallObject} - Total keys: 2|125,858,462|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,336|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,904|99|
|{ ...bigObject, ...anotherBigObject }|1,398|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,357,380|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,571,611|94|
|{ ...smallObject, ...anotherSmallObject }|27,211,547|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2257.063212836993,"samples":8},{"name":"{...smallObject} - Total keys: 2","opsSec":125858461.8647761,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1335.54467783477,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6903.527598687537,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1398.406538648846,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16357379.794480372,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40571610.840234324,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27211546.66569759,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,735|85|
|streams.web.Readable reading 1e3 * "some data"|3,075|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:13:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2735.259099433279,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":3075.059775226106,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,055|98|
|streams.web.WritableStream writing 1e3 * "some data"|1,654|46|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:14:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6055.356654345887,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1654.248455112626,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|911,663,454|97|
|Using backtick (`)|913,536,906|96|
|Using array.join|12,661,531|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":911663454.3187681,"samples":6},{"name":"Using backtick (`)","opsSec":913536905.6322938,"samples":7},{"name":"Using array.join","opsSec":12661530.764894674,"samples":5}]}-->
