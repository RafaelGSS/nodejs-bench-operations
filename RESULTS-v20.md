## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|851,030,980|99|
|Using dot notation|849,606,269|99|
|Using define property (writable)|4,635,975|97|
|Using define property initialized (writable)|6,299,871|91|
|Using define property (getter)|2,426,185|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":851030980.0887882,"samples":6},{"name":"Using dot notation","opsSec":849606269.0402344,"samples":6},{"name":"Using define property (writable)","opsSec":4635974.551298018,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6299871.10605873,"samples":6},{"name":"Using define property (getter)","opsSec":2426184.601857074,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.006ms
array.push|100|0.047ms
new Array(length)|100|0.013ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.543ms
new Array(length)|10,000|0.521ms
array.push|1,000,000|38.788ms
new Array(length)|1,000,000|9.889ms
array.push|100,000,000|1,792.783ms
new Array(length)|100,000,000|5,377.163ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.019ms
array.push|100|0.054ms
new Array(length)|100|0.013ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.382ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|30.961ms
new Array(length)|1,000,000|4.449ms
array.push|100,000,000|3,088.62ms
new Array(length)|100,000,000|4,932.473ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|353|81|
|Array.from|15|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Array","opsSec":352.98066466592405,"samples":3},{"name":"Array.from","opsSec":14.88743606144414,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,296|87|
|new Blob (1024)|431|73|
|text (128)|3,529|81|
|text (1024)|475|87|
|arrayBuffer (128)|3,677|83|
|arrayBuffer (1024)|472|87|
|slice (0, 64)|52,534|69|
|slice (0, 512)|15,945|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3295.5222567842234,"samples":4},{"name":"new Blob (1024)","opsSec":431.39995240058124,"samples":2},{"name":"text (128)","opsSec":3529.2129270604923,"samples":4},{"name":"text (1024)","opsSec":475.49104824036755,"samples":2},{"name":"arrayBuffer (128)","opsSec":3676.54604211186,"samples":4},{"name":"arrayBuffer (1024)","opsSec":472.46515709841503,"samples":2},{"name":"slice (0, 64)","opsSec":52533.75270082528,"samples":3},{"name":"slice (0, 512)","opsSec":15945.362057706117,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|143,922|55|
|[True conditional] Using constructor name|113,229|86|
|[True conditional] Check if property is valid then instanceof |114,047|86|
|[False conditional] Using instanceof only|641,765,617|88|
|[False conditional] Using constructor name|632,360,730|85|
|[False conditional] Check if property is valid then instanceof |645,141,004|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":143921.77905905613,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":113228.63114677787,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":114046.71259826362,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":641765617.3631127,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":632360730.0877753,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":645141003.5838996,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,892|89|
|crypto.verify('RSA-SHA256')|3,922|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3892.4267888156687,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3921.911704584812,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|941,237|89|
|fromUnixToISOString(new Date())|1,582,400|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":941237.3904853762,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1582399.6268295483,"samples":10}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,258|82|
|Intl.DateTimeFormat().format(new Date())|8,689|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,555|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,683|75|
|Reusing Intl.DateTimeFormat()|476,171|85|
|Date.toLocaleDateString()|425,810|82|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,234|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11258.24232843451,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8689.198315340298,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12554.626284278282,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11682.752169110976,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":476170.8781825927,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":425810.38468300225,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12233.881524547909,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|634,690|85|
|Using brackets {}|682,947|89|
|Using '' + |681,395|93|
|Using date.toString()|705,652|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:52:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":634690.330904808,"samples":4},{"name":"Using brackets {}","opsSec":682946.8282434036,"samples":7},{"name":"Using '' + ","opsSec":681395.0077900304,"samples":4},{"name":"Using date.toString()","opsSec":705651.7589311707,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,610,229|94|
|Using delete property (proto: null)|12,277,167|96|
|Using delete property (cached proto: null)|2,661,566|92|
|Using undefined assignment|718,071,807|99|
|Using undefined assignment (proto: null)|13,843,845|97|
|Using undefined property (cached proto: null)|711,536,790|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2610229.385960129,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12277166.71177969,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2661565.851019794,"samples":6},{"name":"Using undefined assignment","opsSec":718071806.8165172,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":13843845.009999031,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":711536790.1652242,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|160,726|53|
|NodeError|126,758|91|
|NodeError Range|128,438|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":160725.78591872973,"samples":3},{"name":"NodeError","opsSec":126758.12338701767,"samples":3},{"name":"NodeError Range","opsSec":128438.48287774499,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,400,871|94|
|Function returning explicitly undefined|1,417,125|96|
|Function returning implicitly undefined|1,428,487|96|
|Function returning string|1,418,552|97|
|Function returning integer|1,434,783|95|
|Function returning float|1,433,082|98|
|Function returning functions|1,385,395|99|
|Function returning arrow functions|1,421,539|97|
|Function returning empty object|1,424,146|95|
|Function returning empty array|1,418,849|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1400870.7142809727,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1417124.8979191103,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1428486.8891175499,"samples":6},{"name":"Function returning string","opsSec":1418551.715636503,"samples":6},{"name":"Function returning integer","opsSec":1434782.6647587044,"samples":6},{"name":"Function returning float","opsSec":1433081.5188586726,"samples":6},{"name":"Function returning functions","opsSec":1385394.7334995798,"samples":5},{"name":"Function returning arrow functions","opsSec":1421538.8096074264,"samples":6},{"name":"Function returning empty object","opsSec":1424145.8959122803,"samples":8},{"name":"Function returning empty array","opsSec":1418849.3815638477,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|671,645,215|87|
|using Array.includes (first item)|673,875,921|89|
|Using raw comparison|668,800,387|88|
|Using raw comparison (first item)|676,171,733|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":671645215.3319832,"samples":6},{"name":"using Array.includes (first item)","opsSec":673875921.439882,"samples":6},{"name":"Using raw comparison","opsSec":668800387.3062022,"samples":6},{"name":"Using raw comparison (first item)","opsSec":676171732.9859108,"samples":5}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|58,818,895|94|
|Using Object.getOwnPropertyNames()|60,892,489|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":58818895.07780947,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":60892488.97180881,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|713,436,129|95|
|Length = 10_000 - Array.at|716,121,258|98|
|Length = 1_000_000 - Array.at|711,472,161|93|
|Length = 100 - Array[length - 1]|716,131,556|96|
|Length = 10_000 - Array[length - 1]|715,537,709|95|
|Length = 1_000_000 - Array[length - 1]|715,199,597|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":713436129.3001529,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":716121257.9466088,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":711472161.3344755,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":716131555.7758018,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":715537709.4737694,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":715199596.6917496,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,588,547|86|
|Object.create({})|1,193,029|72|
|Cached Empty.prototype|720,046,418|87|
|Empty.prototype|1,119,507|72|
|Empty class|816,052|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":37588546.87984346,"samples":7},{"name":"Object.create({})","opsSec":1193029.0149864475,"samples":5},{"name":"Cached Empty.prototype","opsSec":720046418.0639176,"samples":6},{"name":"Empty.prototype","opsSec":1119506.6555635482,"samples":3},{"name":"Empty class","opsSec":816051.9014653382,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,564,067|87|
|Using optional chain (obj.field?.field2) (undefined)|628,310,195|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,249,322|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|683,732,201|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":594564067.0377232,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":628310195.1340344,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":638249322.4837779,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":683732201.105094,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|678,525,584|81|
|Using parseInt(x, 10) - big number (10 len)|694,901,262|88|
|Using + - small number (2 len)|631,507,092|81|
|Using + - big number (10 len)|685,590,816|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":678525583.6323838,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":694901262.3236777,"samples":6},{"name":"Using + - small number (2 len)","opsSec":631507091.6628474,"samples":10},{"name":"Using + - big number (10 len)","opsSec":685590815.764026,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|684,841|70|
|Using ? operator to avoid rejection|772,454|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":684841.085219614,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":772453.5637806996,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|710,860,444|95|
|Raw usage underscore usage|716,136,111|96|
|Manipulating private properties using #|705,183,240|93|
|Manipulating private properties using underscore(_)|705,454,737|94|
|Manipulating private properties using Symbol|708,104,156|96|
|Manipulating private properties using PrivateSymbol|33,174,968|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":710860443.7305679,"samples":7},{"name":"Raw usage underscore usage","opsSec":716136110.5079585,"samples":6},{"name":"Manipulating private properties using #","opsSec":705183240.0426404,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":705454737.3935969,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":708104155.8163626,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":33174967.969198838,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,836,506|97|
|Adding property in the object creation - small object|4,913,717|95|
|Adding property after the function creation - small class|159,671|78|
|Adding property in the function creation - small class|166,581|83|
|Adding property after the class creation - small class|127,257|73|
|Adding property in the class creation - small class|136,569|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4836505.645937885,"samples":8},{"name":"Adding property in the object creation - small object","opsSec":4913717.441158497,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":159670.55368539388,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":166581.3665469828,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":127257.24249150496,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":136569.05701738512,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|668,245,313|87|
|Getter|51,588,297|89|
|Method|645,456,147|87|
|DefineProperty (getter)|645,472,283|89|
|DefineProperty (getter & enumerable=false)|39,160,118|89|
|DefineProperty (getter & configurable=false)|637,615,150|92|
|DefineProperty (getter & enumerable=false & configurable=false)|48,143,327|91|
|DefineProperty (writable)|684,677,587|90|
|DefineProperty (writable & enumerable=false)|677,853,303|89|
|DefineProperty (writable & enumerable=false & configurable=false)|650,495,223|88|
|DefineProperties (getter)|46,959,322|95|
|DefineProperties (getter & enumerable=false)|40,124,813|78|
|DefineProperties (getter & enumerable=false & configurable=false)|27,196,701|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":668245312.944697,"samples":8},{"name":"Getter","opsSec":51588296.7697237,"samples":9},{"name":"Method","opsSec":645456147.1541146,"samples":5},{"name":"DefineProperty (getter)","opsSec":645472282.8481256,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":39160118.43489028,"samples":4},{"name":"DefineProperty (getter & configurable=false)","opsSec":637615149.6761731,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48143327.25969553,"samples":6},{"name":"DefineProperty (writable)","opsSec":684677587.2402549,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":677853302.8774275,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":650495223.4338434,"samples":5},{"name":"DefineProperties (getter)","opsSec":46959322.110557266,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":40124813.03561731,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":27196701.264920805,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|398,887,414|94|
|Setter|6,709,546|94|
|Method|396,835,453|93|
|DefineProperty (setter)|397,492,607|93|
|DefineProperty (setter & enumerable=false)|6,646,897|95|
|DefineProperty (setter & configurable=false)|6,613,683|93|
|DefineProperty (setter & enumerable=false & configurable=false)|6,658,796|94|
|DefineProperty (writable)|401,546,125|96|
|DefineProperty (writable & enumerable=false)|407,044,355|92|
|DefineProperty (writable & enumerable=false & configurable=false)|383,117,720|95|
|DefineProperties (setter)|54,110,280|84|
|DefineProperties (setter & enumerable=false)|6,612,134|91|
|DefineProperties (setter & enumerable=false & configurable=false)|6,729,706|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":398887414.06453884,"samples":7},{"name":"Setter","opsSec":6709546.4369349675,"samples":5},{"name":"Method","opsSec":396835452.88335323,"samples":6},{"name":"DefineProperty (setter)","opsSec":397492606.9394934,"samples":8},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6646897.207536822,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":6613682.504492846,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6658795.5126007665,"samples":5},{"name":"DefineProperty (writable)","opsSec":401546124.55719733,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":407044354.65217626,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":383117720.0894202,"samples":6},{"name":"DefineProperties (setter)","opsSec":54110279.50533904,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6612134.362026056,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6729705.77040094,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,188,327|91|
|Using replaceAll()|2,048,648|99|
|Using replaceAll(//g)|2,011,814|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2188326.6005223254,"samples":5},{"name":"Using replaceAll()","opsSec":2048647.8353346442,"samples":10},{"name":"Using replaceAll(//g)","opsSec":2011814.0469460806,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,057,243|84|
|{ ...object, __proto__: null }|15,740,084|84|
|{ ...object, newProp: true }|429,828|72|
|structuredClone|143,503|89|
|JSON.parse + JSON.stringify|109,222|91|
|loop + object.keys starting with {}|808,032|91|
|loop + object.keys starting with { __proto__: null }|360,766|90|
|loop + object.keys starting with { randomProp: true }|274,676|86|
|object.keys + reduce(FN, {})|273,529|88|
|object.keys + reduce(FN, { __proto__: null })|364,748|89|
|object.keys + reduce(FN, { newProp: true })|286,846|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":16057243.225925464,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15740084.023476662,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":429827.64346517326,"samples":3},{"name":"structuredClone","opsSec":143503.25698633128,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":109222.16627086038,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":808032.1088070995,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":360766.0711933288,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":274675.721257522,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":273529.0094185482,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":364747.6149400163,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":286845.90438605245,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|148,750|94|
|Sort using first char|760,264|93|
|Sort using localeCompare|700,999|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":148749.86598637816,"samples":4},{"name":"Sort using first char","opsSec":760264.0407413823,"samples":7},{"name":"Sort using localeCompare","opsSec":700998.7478825956,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,232|93|
|{...smallObject} - Total keys: 2|65,607,312|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,300|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,608|97|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,971|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,791,896|97|
|{ ...smallObject, ...anotherSmallObject }|14,613,851|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1231.7826255370333,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":65607311.99591686,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1299.8097448335739,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3607.927748015828,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.3838447391223,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013970.951960881,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19791896.195036467,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14613850.62595165,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,441|86|
|streams.web.Readable reading 1e3 * "some data"|1,720|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1441.213566063818,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1720.0200962977117,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,924|88|
|streams.web.WritableStream writing 1e3 * "some data"|985|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3924.279870231279,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":984.7163994086271,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|692,430,959|91|
|Using backtick (`)|691,397,499|85|
|Using array.join|5,240,258|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":692430959.3550252,"samples":7},{"name":"Using backtick (`)","opsSec":691397499.1679264,"samples":6},{"name":"Using array.join","opsSec":5240257.541365095,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|713,848,568|94|
|Using indexof|715,934,030|97|
|Using RegExp.test|11,235,327|99|
|Using RegExp.text with cached regex pattern|11,742,928|96|
|Using new RegExp.test|3,291,184|95|
|Using new RegExp.test with cached regex pattern|3,974,989|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":713848568.3240275,"samples":7},{"name":"Using indexof","opsSec":715934030.0020596,"samples":8},{"name":"Using RegExp.test","opsSec":11235327.095703771,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11742928.43658616,"samples":5},{"name":"Using new RegExp.test","opsSec":3291183.961865452,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3974988.941079553,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|589,772,247|94|
|Using this|594,683,731|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using super","opsSec":589772247.2472006,"samples":6},{"name":"Using this","opsSec":594683731.3316904,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,052,982|86|
|Date.now()|15,871,351|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:18:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8052981.901177147,"samples":7},{"name":"Date.now()","opsSec":15871351.07214695,"samples":7}]}-->
