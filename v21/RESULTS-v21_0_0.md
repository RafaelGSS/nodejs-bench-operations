## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,396,592|89|
|Using dot notation|680,659,752|100|
|Using define property (writable)|4,511,005|97|
|Using define property initialized (writable)|6,366,543|97|
|Using define property (getter)|2,476,928|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:56:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849396592.3319985,"samples":6},{"name":"Using dot notation","opsSec":680659751.9116153,"samples":7},{"name":"Using define property (writable)","opsSec":4511005.3964373525,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6366542.849661416,"samples":6},{"name":"Using define property (getter)","opsSec":2476927.606987024,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.002ms
array.push|100|0.081ms
new Array(length)|100|0.009ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.264ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|29.847ms
new Array(length)|1,000,000|8.689ms
array.push|100,000,000|1,719.05ms
new Array(length)|100,000,000|3,578.625ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.352ms
new Array(length)|10,000|0.24ms
array.push|1,000,000|22.153ms
new Array(length)|1,000,000|9.245ms
array.push|100,000,000|1,910.005ms
new Array(length)|100,000,000|4,291.234ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|313|88|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:11:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":313.04868601882396,"samples":4},{"name":"Array.from","opsSec":23.02334203579574,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|846,351,727|96|
|[async] async function|18,066,000|89|
|[async] function|170,867|16|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:19:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":846351727.4488513,"samples":7},{"name":"[async] async function","opsSec":18065999.702499572,"samples":7},{"name":"[async] function","opsSec":170866.54747540626,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,897|87|
|new Blob (1024)|610|76|
|text (128)|5,612|88|
|text (1024)|705|90|
|arrayBuffer (128)|5,548|86|
|arrayBuffer (1024)|688|87|
|slice (0, 64)|152,467|52|
|slice (0, 512)|35,916|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:33:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4896.969465329006,"samples":3},{"name":"new Blob (1024)","opsSec":609.9968620418482,"samples":2},{"name":"text (128)","opsSec":5611.766670783203,"samples":4},{"name":"text (1024)","opsSec":704.8402516965219,"samples":3},{"name":"arrayBuffer (128)","opsSec":5548.327767332359,"samples":3},{"name":"arrayBuffer (1024)","opsSec":688.4909852999234,"samples":3},{"name":"slice (0, 64)","opsSec":152467.10471663123,"samples":3},{"name":"slice (0, 512)","opsSec":35915.64439442849,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,131|49|
|[True conditional] Using constructor name|185,826|94|
|[True conditional] Check if property is valid then instanceof |192,466|96|
|[False conditional] Using instanceof only|850,975,159|98|
|[False conditional] Using constructor name|849,524,614|97|
|[False conditional] Check if property is valid then instanceof |852,132,903|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:45:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236130.86732775197,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185826.02599939532,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":192465.5331739105,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":850975158.5134815,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":849524614.3875488,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":852132903.129695,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,787|96|
|crypto.verify('RSA-SHA256')|6,782|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:54:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6786.901188884431,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6781.681121977067,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,483,477|100|
|fromUnixToISOString(new Date())|2,230,774|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1483476.73153534,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2230773.84635785,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,140|85|
|Intl.DateTimeFormat().format(new Date())|19,588|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,072|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,659|88|
|Reusing Intl.DateTimeFormat()|728,463|101|
|Date.toLocaleDateString()|734,691|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,223|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20140.308402745,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19588.47259991827,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19072.478221906327,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19658.548652699337,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":728463.0683632717,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":734690.8970846384,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21223.33526473269,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,729|95|
|Using brackets {}|1,087,693|100|
|Using '' + |1,086,979|96|
|Using date.toString()|1,183,637|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:28:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1070728.5516800648,"samples":4},{"name":"Using brackets {}","opsSec":1087692.9664279437,"samples":4},{"name":"Using '' + ","opsSec":1086978.956124584,"samples":4},{"name":"Using date.toString()","opsSec":1183636.7486195168,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,270,764|91|
|Using delete property (proto: null)|11,155,538|89|
|Using delete property (cached proto: null)|2,305,066|92|
|Using undefined assignment|584,533,460|95|
|Using undefined assignment (proto: null)|13,238,794|94|
|Using undefined property (cached proto: null)|586,252,558|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:15:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2270763.6922898716,"samples":8},{"name":"Using delete property (proto: null)","opsSec":11155537.515724763,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2305065.6738850167,"samples":4},{"name":"Using undefined assignment","opsSec":584533460.0797694,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":13238794.194433143,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":586252557.5578027,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|163,688|51|
|NodeError|131,565|93|
|NodeError Range|131,315|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:16:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Error","opsSec":163688.29013567095,"samples":3},{"name":"NodeError","opsSec":131564.80695911238,"samples":3},{"name":"NodeError Range","opsSec":131315.42747803952,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,499,406|93|
|Function returning explicitly undefined|1,516,802|92|
|Function returning implicitly undefined|1,553,737|95|
|Function returning string|1,517,915|99|
|Function returning integer|1,548,193|98|
|Function returning float|1,547,796|97|
|Function returning functions|1,486,894|97|
|Function returning arrow functions|1,493,749|96|
|Function returning empty object|1,535,297|97|
|Function returning empty array|1,538,977|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:18:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1499405.7957374414,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1516802.1988911377,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1553736.5716802964,"samples":7},{"name":"Function returning string","opsSec":1517914.60419713,"samples":6},{"name":"Function returning integer","opsSec":1548192.9947436722,"samples":7},{"name":"Function returning float","opsSec":1547796.450825901,"samples":5},{"name":"Function returning functions","opsSec":1486893.5220471588,"samples":4},{"name":"Function returning arrow functions","opsSec":1493749.4573884015,"samples":7},{"name":"Function returning empty object","opsSec":1535297.150194072,"samples":6},{"name":"Function returning empty array","opsSec":1538976.5829495436,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|585,742,530|97|
|using Array.includes (first item)|582,351,968|96|
|Using raw comparison|589,143,038|95|
|Using raw comparison (first item)|590,623,486|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":585742530.1006917,"samples":6},{"name":"using Array.includes (first item)","opsSec":582351967.9275491,"samples":6},{"name":"Using raw comparison","opsSec":589143037.7082245,"samples":6},{"name":"Using raw comparison (first item)","opsSec":590623485.6486257,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|90,676,751|93|
|Using Object.getOwnPropertyNames()|88,635,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:21:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Using Object.keys()","opsSec":90676751.27976142,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":88635897.73853593,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|594,316,914|91|
|Length = 10_000 - Array.at|593,397,580|97|
|Length = 1_000_000 - Array.at|596,020,635|96|
|Length = 100 - Array[length - 1]|590,351,584|99|
|Length = 10_000 - Array[length - 1]|590,759,911|100|
|Length = 1_000_000 - Array[length - 1]|590,086,311|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":594316914.3661816,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":593397580.4513993,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":596020634.5631065,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":590351583.6599178,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":590759910.9382839,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":590086310.9318001,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|81,676,231|94|
|Object.create({})|2,492,941|80|
|Cached Empty.prototype|821,181,741|99|
|Empty.prototype|2,506,013|91|
|Empty class|1,519,672|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:23:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Object.create(null)","opsSec":81676231.47857925,"samples":5},{"name":"Object.create({})","opsSec":2492940.6821776815,"samples":3},{"name":"Cached Empty.prototype","opsSec":821181740.9949559,"samples":7},{"name":"Empty.prototype","opsSec":2506013.053669825,"samples":4},{"name":"Empty class","opsSec":1519672.4015344377,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|580,136,076|91|
|Using optional chain (obj.field?.field2) (undefined)|582,364,642|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|583,440,619|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|584,348,528|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":580136075.5618768,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":582364642.4775295,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":583440619.4261454,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":584348528.4298753,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|820,947,762|97|
|Using parseInt(x, 10) - big number (10 len)|821,963,212|91|
|Using + - small number (2 len)|822,076,793|96|
|Using + - big number (10 len)|821,127,266|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606910705566406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":820947762.4204906,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":821963211.5578542,"samples":6},{"name":"Using + - small number (2 len)","opsSec":822076792.9511677,"samples":7},{"name":"Using + - big number (10 len)","opsSec":821127266.4135127,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|615,312|66|
|Using ? operator to avoid rejection|737,663|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:28:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":615312.4880824218,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":737663.1204488319,"samples":6}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|819,383,457|97|
|Raw usage underscore usage|818,620,781|95|
|Manipulating private properties using #|814,066,595|86|
|Manipulating private properties using underscore(_)|810,700,296|96|
|Manipulating private properties using Symbol|810,320,061|97|
|Manipulating private properties using PrivateSymbol|49,921,216|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Raw usage private field","opsSec":819383457.3908353,"samples":6},{"name":"Raw usage underscore usage","opsSec":818620781.398617,"samples":6},{"name":"Manipulating private properties using #","opsSec":814066594.608728,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":810700295.5356841,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":810320061.3540742,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49921215.65270842,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,210,204|98|
|Adding property in the object creation - small object|5,184,127|95|
|Adding property after the function creation - small class|271,562|89|
|Adding property in the function creation - small class|273,988|92|
|Adding property after the class creation - small class|277,101|88|
|Adding property in the class creation - small class|277,118|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5210203.816703333,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5184127.036976368,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":271561.56869022193,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":273988.3755766129,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":277100.56004455115,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":277117.5932067762,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,193,738|97|
|Getter|56,719,857|94|
|Method|710,478,493|97|
|DefineProperty (getter)|710,687,889|95|
|DefineProperty (getter & enumerable=false)|56,674,645|97|
|DefineProperty (getter & configurable=false)|712,352,200|95|
|DefineProperty (getter & enumerable=false & configurable=false)|56,981,767|99|
|DefineProperty (writable)|712,658,451|93|
|DefineProperty (writable & enumerable=false)|712,235,472|94|
|DefineProperty (writable & enumerable=false & configurable=false)|318,167,195|47|
|DefineProperties (getter)|37,129,858|93|
|DefineProperties (getter & enumerable=false)|37,172,042|95|
|DefineProperties (getter & enumerable=false & configurable=false)|56,969,582|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:35:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710193738.3813092,"samples":7},{"name":"Getter","opsSec":56719857.33674735,"samples":7},{"name":"Method","opsSec":710478492.6038377,"samples":7},{"name":"DefineProperty (getter)","opsSec":710687888.7548915,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56674645.43135256,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":712352199.631936,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56981766.6244992,"samples":5},{"name":"DefineProperty (writable)","opsSec":712658450.7900271,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":712235471.7325711,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":318167194.8145236,"samples":6},{"name":"DefineProperties (getter)","opsSec":37129858.060331754,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":37172041.716963224,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56969581.505066685,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|651,892,924|85|
|Setter|7,737,431|83|
|Method|626,315,603|85|
|DefineProperty (setter)|646,645,717|82|
|DefineProperty (setter & enumerable=false)|7,708,016|87|
|DefineProperty (setter & configurable=false)|7,600,871|80|
|DefineProperty (setter & enumerable=false & configurable=false)|7,909,249|80|
|DefineProperty (writable)|632,176,320|81|
|DefineProperty (writable & enumerable=false)|634,902,978|85|
|DefineProperty (writable & enumerable=false & configurable=false)|517,113,931|72|
|DefineProperties (setter)|638,682,413|86|
|DefineProperties (setter & enumerable=false)|7,776,897|83|
|DefineProperties (setter & enumerable=false & configurable=false)|7,895,260|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:38:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":651892924.245494,"samples":9},{"name":"Setter","opsSec":7737431.187130003,"samples":5},{"name":"Method","opsSec":626315602.6795619,"samples":6},{"name":"DefineProperty (setter)","opsSec":646645717.246242,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7708016.475380411,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7600870.51227999,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7909249.097657357,"samples":5},{"name":"DefineProperty (writable)","opsSec":632176319.7742302,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":634902978.027198,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":517113931.4498037,"samples":6},{"name":"DefineProperties (setter)","opsSec":638682413.4795297,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7776897.132753654,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7895260.29022597,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,752,579|90|
|Using replaceAll()|1,644,776|93|
|Using replaceAll(//g)|1,576,793|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:39:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1752579.4019151896,"samples":8},{"name":"Using replaceAll()","opsSec":1644775.8029184265,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1576793.4466587093,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,127,448|82|
|{ ...object, __proto__: null }|1,173,469|92|
|{ ...object, newProp: true }|17,397,927|95|
|structuredClone|152,843|94|
|JSON.parse + JSON.stringify|153,830|95|
|loop + object.keys starting with {}|699,032|92|
|loop + object.keys starting with { __proto__: null }|373,826|90|
|loop + object.keys starting with { randomProp: true }|298,055|93|
|object.keys + reduce(FN, {})|317,808|45|
|object.keys + reduce(FN, { __proto__: null })|392,585|95|
|object.keys + reduce(FN, { newProp: true })|301,870|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:42:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":18127448.427160155,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":1173468.7256769706,"samples":3},{"name":"{ ...object, newProp: true }","opsSec":17397927.19446143,"samples":6},{"name":"structuredClone","opsSec":152843.36026195114,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":153829.56163223737,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":699031.8912373462,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":373825.70226475626,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":298054.5453603477,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":317808.31470541575,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":392584.9094800364,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":301869.7580114368,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|164,412|81|
|Sort using first char|779,443|83|
|Sort using localeCompare|664,659|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:43:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":164411.94014239978,"samples":4},{"name":"Sort using first char","opsSec":779442.6216258089,"samples":6},{"name":"Sort using localeCompare","opsSec":664658.7291469685,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,132|93|
|{...smallObject} - Total keys: 2|60,551,923|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,102|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,042|95|
|{ ...bigObject, ...anotherBigObject }|700|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,928,371|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,785,646|92|
|{ ...smallObject, ...anotherSmallObject }|11,736,774|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:46:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1132.4655259328479,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":60551922.738095306,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1102.1565893076277,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3041.5611589634555,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":700.4456212632748,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6928371.150590653,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16785645.62538187,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11736773.60942684,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,247|85|
|streams.web.Readable reading 1e3 * "some data"|2,740|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:47:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2246.567633842824,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2739.7319255952634,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,781|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,564|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:51:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5780.751643470282,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1564.0615869462836,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|585,201,442|95|
|Using backtick (`)|586,852,752|92|
|Using array.join|5,539,111|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:53:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":585201442.0584515,"samples":7},{"name":"Using backtick (`)","opsSec":586852751.9640403,"samples":9},{"name":"Using array.join","opsSec":5539111.035696682,"samples":9}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|591,968,725|98|
|Using indexof|593,326,051|94|
|Using RegExp.test|11,244,170|98|
|Using RegExp.text with cached regex pattern|11,767,611|97|
|Using new RegExp.test|3,394,929|99|
|Using new RegExp.test with cached regex pattern|3,970,941|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:55:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using includes","opsSec":591968724.5742807,"samples":6},{"name":"Using indexof","opsSec":593326050.7263244,"samples":5},{"name":"Using RegExp.test","opsSec":11244170.151363626,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11767610.624907369,"samples":7},{"name":"Using new RegExp.test","opsSec":3394928.9611566467,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3970940.830058832,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|605,928,420|85|
|Using this|622,474,285|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":605928420.3055066,"samples":7},{"name":"Using this","opsSec":622474284.5260755,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,676,790|89|
|Date.now()|16,791,854|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:58:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":8676789.559367772,"samples":6},{"name":"Date.now()","opsSec":16791854.226528972,"samples":6}]}-->
