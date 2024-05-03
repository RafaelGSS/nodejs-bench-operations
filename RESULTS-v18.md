## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,714,204|100|
|Using dot notation|909,496,022|95|
|Using define property (writable)|4,494,770|95|
|Using define property initialized (writable)|6,305,786|96|
|Using define property (getter)|2,591,783|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911714204.1435252,"samples":8},{"name":"Using dot notation","opsSec":909496022.3682208,"samples":6},{"name":"Using define property (writable)","opsSec":4494770.131145988,"samples":8},{"name":"Using define property initialized (writable)","opsSec":6305785.538697922,"samples":5},{"name":"Using define property (getter)","opsSec":2591782.76034946,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.095ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.278ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|26.148ms
new Array(length)|1,000,000|15.446ms
array.push|100,000,000|2,198.742ms
new Array(length)|100,000,000|4,261.828ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.073ms
new Array(length)|100|0.008ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.473ms
new Array(length)|10,000|3.135ms
array.push|1,000,000|255.31ms
new Array(length)|1,000,000|4.491ms
array.push|100,000,000|2,608.008ms
new Array(length)|100,000,000|4,637.439ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|214|86|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:29:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":214.14052151067182,"samples":2},{"name":"Array.from","opsSec":22.265471978337644,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,401,717|99|
|[async] async function|18,624,576|85|
|[async] function|388,481|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:36:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910401716.7408183,"samples":6},{"name":"[async] async function","opsSec":18624576.029875536,"samples":8},{"name":"[async] function","opsSec":388480.55204941134,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,658|89|
|new Blob (1024)|735|78|
|text (128)|42,894|77|
|text (1024)|25,550|76|
|arrayBuffer (128)|40,436|74|
|arrayBuffer (1024)|26,779|75|
|slice (0, 64)|94,515|78|
|slice (0, 512)|44,131|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5658.4301100432185,"samples":3},{"name":"new Blob (1024)","opsSec":734.5668723397673,"samples":2},{"name":"text (128)","opsSec":42894.01160969626,"samples":4},{"name":"text (1024)","opsSec":25550.421263792647,"samples":4},{"name":"arrayBuffer (128)","opsSec":40436.220937867234,"samples":3},{"name":"arrayBuffer (1024)","opsSec":26779.41989213329,"samples":5},{"name":"slice (0, 64)","opsSec":94515.40936049458,"samples":3},{"name":"slice (0, 512)","opsSec":44130.94454830563,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|293,548|55|
|[True conditional] Using constructor name|230,278|96|
|[True conditional] Check if property is valid then instanceof |233,946|97|
|[False conditional] Using instanceof only|909,795,879|90|
|[False conditional] Using constructor name|910,225,681|95|
|[False conditional] Check if property is valid then instanceof |910,600,847|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:59:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":293547.999978238,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":230277.53534609708,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":233945.54632482803,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":909795878.6366311,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":910225680.6722298,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":910600846.6672902,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,270|93|
|crypto.verify('RSA-SHA256')|7,278|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7270.422421639404,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7278.156500912281,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,739|77|
|Intl.DateTimeFormat().format(new Date())|15,190|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,265|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,138|78|
|Reusing Intl.DateTimeFormat()|790,446|96|
|Date.toLocaleDateString()|816,010|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,452|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:26:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15738.69911268256,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15190.387540603751,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16264.753115342603,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17137.822299471347,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":790445.616167678,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":816009.529963813,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17452.247095664567,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,165,893|93|
|Using brackets {}|1,181,995|97|
|Using '' + |1,167,069|95|
|Using date.toString()|1,311,457|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:39:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1165893.2212676618,"samples":6},{"name":"Using brackets {}","opsSec":1181994.8908609396,"samples":5},{"name":"Using '' + ","opsSec":1167068.6999717418,"samples":6},{"name":"Using date.toString()","opsSec":1311456.6936082502,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,747,284|91|
|Using delete property (proto: null)|24,330,960|98|
|Using delete property (cached proto: null)|3,768,832|96|
|Using undefined assignment|908,649,650|95|
|Using undefined assignment (proto: null)|27,099,336|96|
|Using undefined property (cached proto: null)|905,793,875|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:49:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3747283.7917112224,"samples":4},{"name":"Using delete property (proto: null)","opsSec":24330959.53095083,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3768832.1686716233,"samples":5},{"name":"Using undefined assignment","opsSec":908649650.1343354,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":27099335.690648776,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":905793874.6617936,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|282,398|55|
|NodeError|224,891|93|
|NodeError Range|224,745|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:57:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":282398.2482336771,"samples":3},{"name":"NodeError","opsSec":224891.43383871322,"samples":3},{"name":"NodeError Range","opsSec":224744.73306533234,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,868,330|96|
|Function returning explicitly undefined|1,861,668|96|
|Function returning implicitly undefined|1,897,333|99|
|Function returning string|1,878,502|99|
|Function returning integer|1,908,634|96|
|Function returning float|1,880,347|96|
|Function returning functions|1,837,610|98|
|Function returning arrow functions|1,854,184|98|
|Function returning empty object|1,824,734|96|
|Function returning empty array|1,866,038|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:06:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1868329.5456633195,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1861668.3121939697,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1897333.1901410858,"samples":8},{"name":"Function returning string","opsSec":1878501.7073614884,"samples":10},{"name":"Function returning integer","opsSec":1908634.2747750152,"samples":5},{"name":"Function returning float","opsSec":1880346.6158870445,"samples":7},{"name":"Function returning functions","opsSec":1837610.1167771677,"samples":7},{"name":"Function returning arrow functions","opsSec":1854183.8702183396,"samples":6},{"name":"Function returning empty object","opsSec":1824734.0037877732,"samples":5},{"name":"Function returning empty array","opsSec":1866037.5133866298,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,383,778|99|
|using Array.includes (first item)|908,548,001|93|
|Using raw comparison|910,442,148|97|
|Using raw comparison (first item)|909,293,411|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909383778.074399,"samples":6},{"name":"using Array.includes (first item)","opsSec":908548001.4001092,"samples":6},{"name":"Using raw comparison","opsSec":910442148.2248315,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909293410.9049754,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|102,570,519|94|
|Using Object.getOwnPropertyNames()|102,846,849|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":102570519.28198093,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":102846848.64440064,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,399,596|95|
|Length = 10_000 - Array.at|26,454,975|97|
|Length = 1_000_000 - Array.at|26,437,618|95|
|Length = 100 - Array[length - 1]|908,868,726|98|
|Length = 10_000 - Array[length - 1]|907,656,690|99|
|Length = 1_000_000 - Array[length - 1]|906,528,922|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26399595.976020604,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26454975.021592163,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26437617.581210673,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":908868725.6214248,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":907656690.1643428,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":906528922.1848562,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|85,404,110|93|
|Object.create({})|1,729,813|91|
|Cached Empty.prototype|909,969,342|97|
|Empty.prototype|1,838,373|87|
|Empty class|1,168,841|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:46:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":85404109.64765747,"samples":5},{"name":"Object.create({})","opsSec":1729813.3424350305,"samples":3},{"name":"Cached Empty.prototype","opsSec":909969342.3505026,"samples":6},{"name":"Empty.prototype","opsSec":1838373.32985113,"samples":3},{"name":"Empty class","opsSec":1168841.154956424,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|910,376,115|97|
|Using optional chain (obj.field?.field2) (undefined)|910,228,456|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|909,926,019|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|908,264,241|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:55:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":910376114.5959765,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910228456.1480523,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":909926018.6779265,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":908264241.0688523,"samples":9}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|266,710,040|95|
|Using parseInt(x, 10) - big number (10 len)|20,787,201|94|
|Using + - small number (2 len)|910,743,210|97|
|Using + - big number (10 len)|907,884,710|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":266710039.6432981,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20787201.494356856,"samples":6},{"name":"Using + - small number (2 len)","opsSec":910743209.6467143,"samples":7},{"name":"Using + - big number (10 len)","opsSec":907884709.5867459,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|861,634|77|
|Using ? operator to avoid rejection|935,107|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:12:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":861634.2313850406,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":935107.2324389217,"samples":4}]}-->
