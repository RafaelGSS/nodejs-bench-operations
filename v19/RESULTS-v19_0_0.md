## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|586,912,147|95|
|Using dot notation|603,479,256|95|
|Using define property (writable)|3,183,473|95|
|Using define property initialized (writable)|4,374,571|97|
|Using define property (getter)|1,679,026|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":586912147.4887776,"samples":7},{"name":"Using dot notation","opsSec":603479256.2441746,"samples":6},{"name":"Using define property (writable)","opsSec":3183473.184946333,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4374570.524907555,"samples":7},{"name":"Using define property (getter)","opsSec":1679026.3497326549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.04ms
new Array(length)|100|0.011ms
array.push|1,000|0.082ms
new Array(length)|1,000|0.045ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|36.54ms
new Array(length)|1,000,000|12.215ms
array.push|100,000,000|2,083.827ms
new Array(length)|100,000,000|6,231.648ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.021ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.074ms
new Array(length)|1,000|0.042ms
array.push|10,000|9.261ms
new Array(length)|10,000|0.275ms
array.push|1,000,000|31.781ms
new Array(length)|1,000,000|11.061ms
array.push|100,000,000|2,996.849ms
new Array(length)|100,000,000|6,422.806ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|299|75|
|Array.from|14|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:38:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":298.82302994221703,"samples":2},{"name":"Array.from","opsSec":14.044556317959367,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,863|83|
|new Blob (1024)|369|69|
|text (128)|24,020|76|
|text (1024)|11,829|78|
|arrayBuffer (128)|25,747|77|
|arrayBuffer (1024)|14,151|82|
|slice (0, 64)|44,259|77|
|slice (0, 512)|22,139|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2862.5289942667364,"samples":5},{"name":"new Blob (1024)","opsSec":368.88264631508935,"samples":2},{"name":"text (128)","opsSec":24019.593565031606,"samples":6},{"name":"text (1024)","opsSec":11829.27200230327,"samples":3},{"name":"arrayBuffer (128)","opsSec":25747.024652297587,"samples":5},{"name":"arrayBuffer (1024)","opsSec":14150.609880837434,"samples":4},{"name":"slice (0, 64)","opsSec":44258.61283461409,"samples":5},{"name":"slice (0, 512)","opsSec":22138.690394847697,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,809|56|
|[True conditional] Using constructor name|145,021|94|
|[True conditional] Check if property is valid then instanceof |144,684|93|
|[False conditional] Using instanceof only|717,240,089|94|
|[False conditional] Using constructor name|716,919,831|95|
|[False conditional] Check if property is valid then instanceof |714,261,694|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:43:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":178809.23780410583,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":145020.68869573664,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":144683.95467273841,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":717240089.3303782,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":716919831.437428,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":714261693.8423669,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,564|92|
|crypto.verify('RSA-SHA256')|4,575|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:45:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4563.954457927041,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":4575.029340696502,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|956,218|97|
|fromUnixToISOString(new Date())|1,549,726|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":956218.4280724992,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1549726.1009184343,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,180|80|
|Intl.DateTimeFormat().format(new Date())|7,432|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,645|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,343|92|
|Reusing Intl.DateTimeFormat()|343,757|78|
|Date.toLocaleDateString()|416,523|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,171|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6180.027605202336,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7432.060610031819,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5645.30931066347,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9342.86391892148,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":343756.6917806138,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":416522.7243717482,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9171.077142407665,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|682,799|96|
|Using brackets {}|695,524|94|
|Using '' + |694,752|97|
|Using date.toString()|750,919|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":682798.8497476443,"samples":5},{"name":"Using brackets {}","opsSec":695523.9261144428,"samples":3},{"name":"Using '' + ","opsSec":694751.9783757286,"samples":5},{"name":"Using date.toString()","opsSec":750918.531583909,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,739,151|95|
|Using delete property (proto: null)|16,970,428|97|
|Using delete property (cached proto: null)|2,767,045|97|
|Using undefined assignment|594,743,073|94|
|Using undefined assignment (proto: null)|19,014,382|96|
|Using undefined property (cached proto: null)|599,232,597|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:54:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2739150.887146375,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16970427.614856925,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2767044.869521533,"samples":5},{"name":"Using undefined assignment","opsSec":594743072.8661352,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":19014382.41770142,"samples":9},{"name":"Using undefined property (cached proto: null)","opsSec":599232597.3733352,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|154,593|51|
|NodeError|122,547|85|
|NodeError Range|125,267|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":154592.60920318947,"samples":3},{"name":"NodeError","opsSec":122547.24899423248,"samples":3},{"name":"NodeError Range","opsSec":125266.9502471048,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,155,877|92|
|Function returning explicitly undefined|1,169,191|94|
|Function returning implicitly undefined|1,198,603|93|
|Function returning string|1,171,109|96|
|Function returning integer|1,196,331|97|
|Function returning float|1,179,349|97|
|Function returning functions|1,156,688|98|
|Function returning arrow functions|1,165,816|95|
|Function returning empty object|1,189,408|98|
|Function returning empty array|1,184,662|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:58:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1155877.3951134079,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1169191.022769571,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1198603.4884694193,"samples":7},{"name":"Function returning string","opsSec":1171108.5496732488,"samples":8},{"name":"Function returning integer","opsSec":1196331.2589629472,"samples":6},{"name":"Function returning float","opsSec":1179349.0902593394,"samples":5},{"name":"Function returning functions","opsSec":1156687.515312917,"samples":6},{"name":"Function returning arrow functions","opsSec":1165815.5509809393,"samples":6},{"name":"Function returning empty object","opsSec":1189407.7174763824,"samples":6},{"name":"Function returning empty array","opsSec":1184661.8930195,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|588,064,333|94|
|using Array.includes (first item)|587,980,881|95|
|Using raw comparison|589,642,645|96|
|Using raw comparison (first item)|588,871,066|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":588064333.1225121,"samples":9},{"name":"using Array.includes (first item)","opsSec":587980880.9495317,"samples":6},{"name":"Using raw comparison","opsSec":589642644.6378647,"samples":6},{"name":"Using raw comparison (first item)","opsSec":588871066.303892,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,553,430|89|
|Using Object.getOwnPropertyNames()|40,336,464|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:03:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":46553430.1268319,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":40336464.01172658,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|472,441,049|96|
|Length = 10_000 - Array.at|472,266,731|93|
|Length = 1_000_000 - Array.at|474,481,590|90|
|Length = 100 - Array[length - 1]|591,187,911|98|
|Length = 10_000 - Array[length - 1]|589,868,345|97|
|Length = 1_000_000 - Array[length - 1]|588,786,883|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":472441049.1333834,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":472266730.88890564,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":474481589.9106997,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":591187910.600039,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":589868344.6773887,"samples":11},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":588786882.6116095,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,592,331|86|
|Object.create({})|1,575,050|79|
|Cached Empty.prototype|596,744,787|95|
|Empty.prototype|1,515,254|77|
|Empty class|1,007,065|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:09:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":42592330.75608526,"samples":6},{"name":"Object.create({})","opsSec":1575050.3840194123,"samples":4},{"name":"Cached Empty.prototype","opsSec":596744786.7398041,"samples":6},{"name":"Empty.prototype","opsSec":1515253.600380415,"samples":3},{"name":"Empty class","opsSec":1007065.106221726,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|713,383,559|96|
|Using optional chain (obj.field?.field2) (undefined)|714,282,175|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|715,579,524|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|714,293,387|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":713383559.0485055,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":714282175.14262,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":715579524.4886951,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":714293387.1458824,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,450,256|81|
|Using parseInt(x, 10) - big number (10 len)|12,750,843|85|
|Using + - small number (2 len)|750,693,675|86|
|Using + - big number (10 len)|720,008,502|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":150450255.96142447,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12750842.899290834,"samples":6},{"name":"Using + - small number (2 len)","opsSec":750693675.1907848,"samples":8},{"name":"Using + - big number (10 len)","opsSec":720008502.3199868,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|758,819|76|
|Using ? operator to avoid rejection|819,283|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":758818.8575832304,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":819282.5973846116,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|590,772,263|90|
|Raw usage underscore usage|594,073,545|93|
|Manipulating private properties using #|584,545,854|90|
|Manipulating private properties using underscore(_)|589,822,193|92|
|Manipulating private properties using Symbol|584,956,134|90|
|Manipulating private properties using PrivateSymbol|27,167,730|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":590772262.7232274,"samples":7},{"name":"Raw usage underscore usage","opsSec":594073544.8031601,"samples":8},{"name":"Manipulating private properties using #","opsSec":584545854.2027268,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":589822192.7759391,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":584956133.8199735,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":27167729.985184263,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,858,505|97|
|Adding property in the object creation - small object|1,846,806|95|
|Adding property after the function creation - small class|163,310|90|
|Adding property in the function creation - small class|164,245|90|
|Adding property after the class creation - small class|139,366|84|
|Adding property in the class creation - small class|139,992|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1858505.24899396,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1846806.436849161,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":163309.75381438623,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":164244.63967829358,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":139366.37444458067,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":139991.5840407064,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|714,728,669|94|
|Getter|52,066,450|95|
|Method|717,965,722|93|
|DefineProperty (getter)|715,944,298|94|
|DefineProperty (getter & enumerable=false)|52,171,383|92|
|DefineProperty (getter & configurable=false)|716,977,134|98|
|DefineProperty (getter & enumerable=false & configurable=false)|51,517,957|96|
|DefineProperty (writable)|719,263,427|98|
|DefineProperty (writable & enumerable=false)|719,514,947|98|
|DefineProperty (writable & enumerable=false & configurable=false)|719,719,138|97|
|DefineProperties (getter)|52,097,816|95|
|DefineProperties (getter & enumerable=false)|51,983,319|94|
|DefineProperties (getter & enumerable=false & configurable=false)|43,292,925|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":714728668.5056046,"samples":6},{"name":"Getter","opsSec":52066450.05249492,"samples":5},{"name":"Method","opsSec":717965722.1695694,"samples":7},{"name":"DefineProperty (getter)","opsSec":715944298.4827048,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52171383.02529614,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":716977133.500382,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51517957.23379923,"samples":5},{"name":"DefineProperty (writable)","opsSec":719263427.4686328,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":719514947.1128896,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":719719137.6196437,"samples":7},{"name":"DefineProperties (getter)","opsSec":52097815.99226284,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51983319.01386157,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":43292925.23755297,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|421,428,175|85|
|Setter|6,921,385|87|
|Method|434,943,904|89|
|DefineProperty (setter)|440,121,387|89|
|DefineProperty (setter & enumerable=false)|6,642,829|92|
|DefineProperty (setter & configurable=false)|6,746,057|88|
|DefineProperty (setter & enumerable=false & configurable=false)|6,735,887|89|
|DefineProperty (writable)|620,623,435|89|
|DefineProperty (writable & enumerable=false)|590,734,127|89|
|DefineProperty (writable & enumerable=false & configurable=false)|83,647,866|85|
|DefineProperties (setter)|60,958,736|81|
|DefineProperties (setter & enumerable=false)|6,298,994|88|
|DefineProperties (setter & enumerable=false & configurable=false)|6,807,540|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Setter (class)","opsSec":421428175.431667,"samples":5},{"name":"Setter","opsSec":6921384.527557432,"samples":5},{"name":"Method","opsSec":434943904.3914674,"samples":8},{"name":"DefineProperty (setter)","opsSec":440121387.46376485,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6642828.888381087,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":6746056.621737962,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6735886.848562771,"samples":4},{"name":"DefineProperty (writable)","opsSec":620623434.7355955,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":590734127.2629822,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83647865.6288469,"samples":5},{"name":"DefineProperties (setter)","opsSec":60958735.76229106,"samples":8},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6298994.033360253,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6807540.084833251,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,328,333|96|
|Using replaceAll()|2,098,583|98|
|Using replaceAll(//g)|2,061,244|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2328333.0015532635,"samples":5},{"name":"Using replaceAll()","opsSec":2098583.4582554633,"samples":6},{"name":"Using replaceAll(//g)","opsSec":2061243.9266219395,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,812,224|93|
|{ ...object, __proto__: null }|11,126,723|96|
|{ ...object, newProp: true }|423,547|84|
|structuredClone|146,516|94|
|JSON.parse + JSON.stringify|122,389|94|
|loop + object.keys starting with {}|625,361|93|
|loop + object.keys starting with { __proto__: null }|375,900|93|
|loop + object.keys starting with { randomProp: true }|270,537|95|
|object.keys + reduce(FN, {})|261,551|96|
|object.keys + reduce(FN, { __proto__: null })|381,365|92|
|object.keys + reduce(FN, { newProp: true })|272,898|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":10812223.542266702,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":11126723.254419561,"samples":8},{"name":"{ ...object, newProp: true }","opsSec":423547.3590374744,"samples":3},{"name":"structuredClone","opsSec":146515.776934771,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":122389.11828372262,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":625361.1666900826,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":375900.1990452162,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":270537.36272940226,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":261551.23324384735,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":381364.7008377605,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":272898.19691847445,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|195,846|98|
|Sort using first char|905,733|95|
|Sort using localeCompare|813,988|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":195846.31656851462,"samples":8},{"name":"Sort using first char","opsSec":905733.4486048496,"samples":5},{"name":"Sort using localeCompare","opsSec":813987.7944043673,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,394|87|
|{...smallObject} - Total keys: 2|71,438,649|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,413|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,894|91|
|{ ...bigObject, ...anotherBigObject }|836|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,546,921|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,225,356|90|
|{ ...smallObject, ...anotherSmallObject }|16,369,449|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1393.9247651887517,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":71438648.56345463,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1412.513753401434,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3893.927934830996,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":835.7395643681372,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10546921.21864111,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27225355.57276729,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16369448.625441333,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,135|84|
|streams.web.Readable reading 1e3 * "some data"|324|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1135.4959142307562,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":324.29270059616516,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,460|94|
|streams.web.WritableStream writing 1e3 * "some data"|986|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4460.294206036722,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":986.4182323058582,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|609,703,984|88|
|Using backtick (`)|658,965,393|89|
|Using array.join|6,075,973|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":609703983.7136326,"samples":7},{"name":"Using backtick (`)","opsSec":658965393.3392593,"samples":6},{"name":"Using array.join","opsSec":6075972.733305786,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|613,176,406|86|
|Using indexof|647,677,625|90|
|Using RegExp.test|10,510,352|87|
|Using RegExp.text with cached regex pattern|11,324,532|89|
|Using new RegExp.test|2,721,431|89|
|Using new RegExp.test with cached regex pattern|3,101,971|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":613176405.9709163,"samples":7},{"name":"Using indexof","opsSec":647677624.8117579,"samples":8},{"name":"Using RegExp.test","opsSec":10510351.724324968,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11324532.374668619,"samples":5},{"name":"Using new RegExp.test","opsSec":2721430.962476684,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3101970.670356353,"samples":4}]}-->
