## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|822,497,604|96|
|Using dot notation|823,122,487|96|
|Using define property (writable)|4,288,677|92|
|Using define property initialized (writable)|6,288,244|94|
|Using define property (getter)|2,430,513|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":822497604.3513371,"samples":5},{"name":"Using dot notation","opsSec":823122487.2002578,"samples":9},{"name":"Using define property (writable)","opsSec":4288677.202090691,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6288243.748767417,"samples":5},{"name":"Using define property (getter)","opsSec":2430512.5132306577,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.019ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.014ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|23.955ms
new Array(length)|1,000,000|5.795ms
array.push|100,000,000|969.034ms
new Array(length)|100,000,000|3,481.389ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.011ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.363ms
new Array(length)|10,000|0.221ms
array.push|1,000,000|15.489ms
new Array(length)|1,000,000|6.274ms
array.push|100,000,000|1,106.562ms
new Array(length)|100,000,000|3,507.181ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|603|81|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":603.0199986403456,"samples":2},{"name":"Array.from","opsSec":22.390198790743757,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,703,621|98|
|[async] async function|15,853,446|89|
|[async] function|182,484|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":822703621.3770522,"samples":6},{"name":"[async] async function","opsSec":15853445.868081078,"samples":6},{"name":"[async] function","opsSec":182484.2006750794,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,539|91|
|new Blob (1024)|696|75|
|text (128)|5,929|87|
|text (1024)|751|88|
|arrayBuffer (128)|5,985|88|
|arrayBuffer (1024)|748|88|
|slice (0, 64)|183,786|58|
|slice (0, 512)|41,709|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5538.722723302259,"samples":3},{"name":"new Blob (1024)","opsSec":695.8910595161203,"samples":2},{"name":"text (128)","opsSec":5928.89001285375,"samples":4},{"name":"text (1024)","opsSec":751.0373882616789,"samples":3},{"name":"arrayBuffer (128)","opsSec":5985.2792481333545,"samples":4},{"name":"arrayBuffer (1024)","opsSec":747.9412436662649,"samples":2},{"name":"slice (0, 64)","opsSec":183785.81280080345,"samples":3},{"name":"slice (0, 512)","opsSec":41709.01842747698,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|251,593|51|
|[True conditional] Using constructor name|199,704|92|
|[True conditional] Check if property is valid then instanceof |209,887|93|
|[False conditional] Using instanceof only|822,897,160|97|
|[False conditional] Using constructor name|819,613,532|95|
|[False conditional] Check if property is valid then instanceof |819,373,788|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":251593.32385216028,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":199703.8361242393,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":209886.57771134793,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":822897160.2151258,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":819613531.8428692,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":819373787.8498353,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,349|94|
|crypto.verify('RSA-SHA256')|6,382|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6349.112195076472,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6382.07342586019,"samples":6}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,479,226|88|
|fromUnixToISOString(new Date())|2,301,991|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1479225.8475829107,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2301990.824387005,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,200|81|
|Intl.DateTimeFormat().format(new Date())|16,696|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,591|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,434|81|
|Reusing Intl.DateTimeFormat()|785,965|93|
|Date.toLocaleDateString()|797,209|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,820|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17200.3231260596,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16695.772979064783,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15590.983960744436,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17433.93611009695,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":785965.1932518678,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":797209.1827879155,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19820.38495585699,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,209|96|
|Using brackets {}|1,082,059|96|
|Using '' + |1,073,140|96|
|Using date.toString()|1,212,448|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1045208.9400810722,"samples":4},{"name":"Using brackets {}","opsSec":1082059.1883080392,"samples":4},{"name":"Using '' + ","opsSec":1073140.299435095,"samples":5},{"name":"Using date.toString()","opsSec":1212448.0526477466,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,034,624|94|
|Using delete property (proto: null)|20,837,785|97|
|Using delete property (cached proto: null)|4,121,995|95|
|Using undefined assignment|820,150,987|94|
|Using undefined assignment (proto: null)|22,904,811|97|
|Using undefined property (cached proto: null)|818,890,030|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4034624.1056352407,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20837784.52190242,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4121995.291200839,"samples":5},{"name":"Using undefined assignment","opsSec":820150986.9395106,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22904810.661143754,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":818890029.8691102,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|225,617|55|
|NodeError|185,159|96|
|NodeError Range|185,095|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:51:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":225616.5421269358,"samples":3},{"name":"NodeError","opsSec":185159.14180330044,"samples":3},{"name":"NodeError Range","opsSec":185095.0745001923,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,064,113|96|
|Function returning explicitly undefined|2,058,378|99|
|Function returning implicitly undefined|2,098,983|96|
|Function returning string|2,058,964|100|
|Function returning integer|2,092,612|93|
|Function returning float|2,090,888|101|
|Function returning functions|2,024,317|98|
|Function returning arrow functions|2,051,838|96|
|Function returning empty object|2,096,004|96|
|Function returning empty array|1,991,877|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:09:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":2064112.6748855375,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2058378.1271892411,"samples":5},{"name":"Function returning implicitly undefined","opsSec":2098983.2151926076,"samples":7},{"name":"Function returning string","opsSec":2058964.3904588388,"samples":5},{"name":"Function returning integer","opsSec":2092611.7723408116,"samples":7},{"name":"Function returning float","opsSec":2090887.8266918415,"samples":6},{"name":"Function returning functions","opsSec":2024316.9775803809,"samples":5},{"name":"Function returning arrow functions","opsSec":2051837.7595241077,"samples":5},{"name":"Function returning empty object","opsSec":2096003.5516086982,"samples":5},{"name":"Function returning empty array","opsSec":1991876.8277887178,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,589,433|99|
|using Array.includes (first item)|850,154,313|97|
|Using raw comparison|846,936,153|95|
|Using raw comparison (first item)|850,615,308|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847589432.549216,"samples":7},{"name":"using Array.includes (first item)","opsSec":850154313.1508331,"samples":7},{"name":"Using raw comparison","opsSec":846936153.0084305,"samples":7},{"name":"Using raw comparison (first item)","opsSec":850615307.7944437,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,278,327|97|
|Using Object.getOwnPropertyNames()|89,959,212|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:29:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":87278326.78890887,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":89959212.2697022,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|845,870,263|98|
|Length = 10_000 - Array.at|847,516,138|97|
|Length = 1_000_000 - Array.at|846,760,162|96|
|Length = 100 - Array[length - 1]|846,592,484|92|
|Length = 10_000 - Array[length - 1]|849,741,191|94|
|Length = 1_000_000 - Array[length - 1]|848,152,540|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:41:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":845870263.3180512,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":847516138.2249008,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":846760162.1973292,"samples":9},{"name":"Length = 100 - Array[length - 1]","opsSec":846592483.7208861,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":849741191.2887024,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":848152539.7529279,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,619,032|93|
|Object.create({})|2,625,940|88|
|Cached Empty.prototype|842,926,167|98|
|Empty.prototype|2,552,532|91|
|Empty class|1,546,186|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:53:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77619032.39928403,"samples":8},{"name":"Object.create({})","opsSec":2625939.5081269117,"samples":3},{"name":"Cached Empty.prototype","opsSec":842926167.4833289,"samples":6},{"name":"Empty.prototype","opsSec":2552532.0338958674,"samples":4},{"name":"Empty class","opsSec":1546186.357655236,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,505,681|101|
|Using optional chain (obj.field?.field2) (undefined)|849,640,496|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,204,506|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,852,370|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:02:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848505680.5433637,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":849640495.6214217,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848204506.2346504,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848852370.1779175,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|850,351,121|95|
|Using parseInt(x, 10) - big number (10 len)|850,887,674|97|
|Using + - small number (2 len)|844,736,554|99|
|Using + - big number (10 len)|844,436,931|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:13:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":850351120.9937941,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":850887673.9039176,"samples":5},{"name":"Using + - small number (2 len)","opsSec":844736553.961048,"samples":6},{"name":"Using + - big number (10 len)","opsSec":844436931.0430553,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,331,808|82|
|Using ? operator to avoid rejection|1,340,836|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:20:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1331808.3496810964,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1340836.3685365745,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|675,832,926|96|
|Raw usage underscore usage|677,208,099|100|
|Manipulating private properties using #|670,174,801|92|
|Manipulating private properties using underscore(_)|670,063,731|99|
|Manipulating private properties using Symbol|670,705,012|93|
|Manipulating private properties using PrivateSymbol|55,898,061|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:32:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":675832926.2569312,"samples":6},{"name":"Raw usage underscore usage","opsSec":677208099.1699343,"samples":8},{"name":"Manipulating private properties using #","opsSec":670174801.4566557,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":670063731.1351595,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":670705012.1572663,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55898061.43009549,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,601,697|94|
|Adding property in the object creation - small object|8,641,298|95|
|Adding property after the function creation - small class|259,124|88|
|Adding property in the function creation - small class|262,616|90|
|Adding property after the class creation - small class|258,579|88|
|Adding property in the class creation - small class|259,118|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:44:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8601696.55141781,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8641298.127252892,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":259123.6136855893,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":262615.75356214016,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":258578.5223813281,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":259117.78986061199,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|847,741,330|93|
|Getter|106,127,466|98|
|Method|849,501,818|98|
|DefineProperty (getter)|850,144,022|100|
|DefineProperty (getter & enumerable=false)|105,966,411|98|
|DefineProperty (getter & configurable=false)|845,778,293|101|
|DefineProperty (getter & enumerable=false & configurable=false)|105,853,059|96|
|DefineProperty (writable)|849,131,828|98|
|DefineProperty (writable & enumerable=false)|851,382,779|97|
|DefineProperty (writable & enumerable=false & configurable=false)|851,703,605|99|
|DefineProperties (getter)|99,350,392|93|
|DefineProperties (getter & enumerable=false)|64,485,145|88|
|DefineProperties (getter & enumerable=false & configurable=false)|64,614,797|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:04:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":847741330.319115,"samples":7},{"name":"Getter","opsSec":106127465.91865821,"samples":6},{"name":"Method","opsSec":849501818.4774122,"samples":7},{"name":"DefineProperty (getter)","opsSec":850144022.433709,"samples":9},{"name":"DefineProperty (getter & enumerable=false)","opsSec":105966411.48868653,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":845778292.9373568,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":105853058.5896906,"samples":5},{"name":"DefineProperty (writable)","opsSec":849131827.8409817,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":851382778.8922056,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":851703604.5484645,"samples":9},{"name":"DefineProperties (getter)","opsSec":99350391.51013431,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":64485144.70499446,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":64614796.775210336,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|842,958,747|93|
|Setter|13,350,013|100|
|Method|837,181,635|95|
|DefineProperty (setter)|844,517,869|100|
|DefineProperty (setter & enumerable=false)|13,342,757|99|
|DefineProperty (setter & configurable=false)|13,374,263|99|
|DefineProperty (setter & enumerable=false & configurable=false)|13,182,726|99|
|DefineProperty (writable)|849,868,139|99|
|DefineProperty (writable & enumerable=false)|819,122,153|94|
|DefineProperty (writable & enumerable=false & configurable=false)|839,384,708|92|
|DefineProperties (setter)|842,691,252|98|
|DefineProperties (setter & enumerable=false)|12,163,461|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,714,966|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":842958747.2897732,"samples":6},{"name":"Setter","opsSec":13350013.076052008,"samples":6},{"name":"Method","opsSec":837181635.2486871,"samples":8},{"name":"DefineProperty (setter)","opsSec":844517869.0477856,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13342757.48867084,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":13374262.57277534,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13182725.626551019,"samples":5},{"name":"DefineProperty (writable)","opsSec":849868139.2400776,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819122152.6434989,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":839384707.5645647,"samples":5},{"name":"DefineProperties (setter)","opsSec":842691251.942219,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12163461.418259595,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11714965.552110508,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,712,159|95|
|Using replaceAll()|3,455,171|95|
|Using replaceAll(//g)|3,389,871|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:40:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3712159.384908394,"samples":6},{"name":"Using replaceAll()","opsSec":3455170.929037162,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3389870.694259773,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|34,971,131|92|
|{ ...object, __proto__: null }|2,730,864|98|
|{ ...object, newProp: true }|32,616,543|96|
|structuredClone|268,833|97|
|JSON.parse + JSON.stringify|273,973|95|
|loop + object.keys starting with {}|1,633,772|94|
|loop + object.keys starting with { __proto__: null }|888,350|99|
|loop + object.keys starting with { randomProp: true }|628,952|96|
|object.keys + reduce(FN, {})|637,352|96|
|object.keys + reduce(FN, { __proto__: null })|899,188|95|
|object.keys + reduce(FN, { newProp: true })|657,702|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:56:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":34971130.87329279,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2730863.610900028,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":32616542.797331672,"samples":5},{"name":"structuredClone","opsSec":268832.6209886768,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":273973.09597570036,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1633771.8266950264,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":888350.3600266498,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":628951.6626330107,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":637352.0200472597,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899188.354513264,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":657702.4921199136,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|318,873|98|
|Sort using first char|1,487,218|99|
|Sort using localeCompare|1,296,848|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:05:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":318873.3568111859,"samples":4},{"name":"Sort using first char","opsSec":1487217.5517480639,"samples":4},{"name":"Sort using localeCompare","opsSec":1296847.8440728833,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,125|96|
|{...smallObject} - Total keys: 2|116,593,277|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,248|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,690|99|
|{ ...bigObject, ...anotherBigObject }|1,273|98|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,591,106|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,848,603|99|
|{ ...smallObject, ...anotherSmallObject }|26,686,790|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:20:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2125.0445692050484,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":116593277.19606233,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2247.7755772054884,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6690.003839472226,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1273.0229154486835,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14591106.098192265,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":39848603.131306134,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26686789.945705038,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,587|86|
|streams.web.Readable reading 1e3 * "some data"|2,763|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:27:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2586.6921674101122,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2763.278679121824,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,245|96|
|streams.web.WritableStream writing 1e3 * "some data"|1,062|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:38:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6244.775450817661,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1062.2634745661467,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,515,737|97|
|Using backtick (`)|850,746,905|98|
|Using array.join|12,478,663|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:46:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848515736.7355814,"samples":7},{"name":"Using backtick (`)","opsSec":850746905.1588899,"samples":6},{"name":"Using array.join","opsSec":12478663.002385965,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,706,114|95|
|Using indexof|851,027,217|94|
|Using RegExp.test|16,943,922|98|
|Using RegExp.text with cached regex pattern|17,470,383|100|
|Using new RegExp.test|4,740,212|97|
|Using new RegExp.test with cached regex pattern|5,542,879|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:59:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":847706113.7235386,"samples":6},{"name":"Using indexof","opsSec":851027217.3782984,"samples":8},{"name":"Using RegExp.test","opsSec":16943922.434333872,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17470382.71604766,"samples":7},{"name":"Using new RegExp.test","opsSec":4740211.736377912,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5542879.109951419,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|842,001,931|97|
|Using this|847,505,120|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:10:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":842001931.3662089,"samples":6},{"name":"Using this","opsSec":847505119.7997193,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,613,129|93|
|Date.now()|25,589,481|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:17:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":13613128.682507634,"samples":5},{"name":"Date.now()","opsSec":25589480.77956875,"samples":5}]}-->
