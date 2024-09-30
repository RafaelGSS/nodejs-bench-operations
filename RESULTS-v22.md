## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,425,387|51232569|
|Using dot notation|67,375,071|33689286|
|Using define property (writable)|4,726,425|2363461|
|Using define property initialized (writable)|6,706,944|3353722|
|Using define property (getter)|2,318,633|1161770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 20:59:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":102425387.11696145,"samples":51232569},{"name":"Using dot notation","opsSec":67375071.86501661,"samples":33689286},{"name":"Using define property (writable)","opsSec":4726425.073120663,"samples":2363461},{"name":"Using define property initialized (writable)","opsSec":6706944.708208142,"samples":3353722},{"name":"Using define property (getter)","opsSec":2318633.8496077806,"samples":1161770}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.074ms
new Array(length)|100|0.007ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.239ms
new Array(length)|10,000|0.134ms
array.push|1,000,000|28.066ms
new Array(length)|1,000,000|6.131ms
array.push|100,000,000|1,859.78ms
new Array(length)|100,000,000|3,942.313ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|17.189ms
new Array(length)|10,000|6.321ms
array.push|1,000,000|143.128ms
new Array(length)|1,000,000|8.518ms
array.push|100,000,000|1,967.082ms
new Array(length)|100,000,000|4,496.175ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|329|165|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:03:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":329.62362651378504,"samples":165},{"name":"Array.from","opsSec":23.954842869435886,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,774|2388|
|new Blob (1024)|553|289|
|text (128)|4,194|2098|
|text (1024)|527|264|
|arrayBuffer (128)|4,187|2094|
|arrayBuffer (1024)|525|263|
|slice (0, 64)|149,110|87710|
|slice (0, 512)|39,641|19821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4774.648755303772,"samples":2388},{"name":"new Blob (1024)","opsSec":553.6435631552614,"samples":289},{"name":"text (128)","opsSec":4194.627937201869,"samples":2098},{"name":"text (1024)","opsSec":527.371609304196,"samples":264},{"name":"arrayBuffer (128)","opsSec":4187.2899193756175,"samples":2094},{"name":"arrayBuffer (1024)","opsSec":525.0730758973702,"samples":263},{"name":"slice (0, 64)","opsSec":149110.32249118472,"samples":87710},{"name":"slice (0, 512)","opsSec":39641.40989797482,"samples":19821}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|461,257|230630|
|[True conditional] Using constructor name|352,097|176129|
|[True conditional] Check if property is valid then instanceof |353,731|177170|
|[False conditional] Using instanceof only|97,686,768|48843458|
|[False conditional] Using constructor name|98,181,956|49090989|
|[False conditional] Check if property is valid then instanceof |98,294,719|49154048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:06:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":461257.4667739924,"samples":230630},{"name":"[True conditional] Using constructor name","opsSec":352097.9595060739,"samples":176129},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":353731.0032630043,"samples":177170},{"name":"[False conditional] Using instanceof only","opsSec":97686768.29760632,"samples":48843458},{"name":"[False conditional] Using constructor name","opsSec":98181956.9890612,"samples":49090989},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98294719.46480691,"samples":49154048}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,806|3404|
|crypto.verify('RSA-SHA256')|7,008|3505|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6806.235075182655,"samples":3404},{"name":"crypto.verify('RSA-SHA256')","opsSec":7008.440243590027,"samples":3505}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,391,085|695579|
|fromUnixToISOString(new Date())|1,989,287|994747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:09:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1391085.0514998995,"samples":695579},{"name":"fromUnixToISOString(new Date())","opsSec":1989287.1578998957,"samples":994747}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,489|9246|
|Intl.DateTimeFormat().format(new Date())|18,565|9283|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,393|9197|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,376|9189|
|Reusing Intl.DateTimeFormat()|518,997|259500|
|Date.toLocaleDateString()|960,373|480196|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,678|11341|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:10:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18489.916704105115,"samples":9246},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18565.14618892677,"samples":9283},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18393.232303270128,"samples":9197},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18376.664788289814,"samples":9189},{"name":"Reusing Intl.DateTimeFormat()","opsSec":518997.30536599056,"samples":259500},{"name":"Date.toLocaleDateString()","opsSec":960373.3764394841,"samples":480196},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22678.807912428707,"samples":11341}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,874|452296|
|Using brackets {}|887,984|443993|
|Using '' + |877,779|439731|
|Using date.toString()|1,118,504|559522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":903874.9867047966,"samples":452296},{"name":"Using brackets {}","opsSec":887984.8012205183,"samples":443993},{"name":"Using '' + ","opsSec":877779.545899901,"samples":439731},{"name":"Using date.toString()","opsSec":1118504.390978625,"samples":559522}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,964,146|2007280|
|Using delete property (proto: null)|16,794,321|8397169|
|Using delete property (cached proto: null)|3,957,022|1978558|
|Using undefined assignment|72,764,239|36383776|
|Using undefined assignment (proto: null)|18,096,959|9048909|
|Using undefined property (cached proto: null)|72,483,878|36243857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:13:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3964146.521592165,"samples":2007280},{"name":"Using delete property (proto: null)","opsSec":16794321.91103961,"samples":8397169},{"name":"Using delete property (cached proto: null)","opsSec":3957022.123607139,"samples":1978558},{"name":"Using undefined assignment","opsSec":72764239.04419632,"samples":36383776},{"name":"Using undefined assignment (proto: null)","opsSec":18096959.842164285,"samples":9048909},{"name":"Using undefined property (cached proto: null)","opsSec":72483878.44308831,"samples":36243857}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|426,180|213091|
|NodeError|337,204|168603|
|NodeError Range|337,501|168790|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:14:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":426180.2961311761,"samples":213091},{"name":"NodeError","opsSec":337204.2600260183,"samples":168603},{"name":"NodeError Range","opsSec":337501.6388694873,"samples":168790}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,851,052|925618|
|Function returning explicitly undefined|1,824,707|914412|
|Function returning implicitly undefined|1,701,403|850709|
|Function returning string|1,874,640|937523|
|Function returning integer|1,695,311|847784|
|Function returning float|1,859,951|930065|
|Function returning functions|1,848,948|924626|
|Function returning arrow functions|1,751,911|875962|
|Function returning empty object|1,754,658|877631|
|Function returning empty array|1,799,996|901869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:16:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1851052.6643399133,"samples":925618},{"name":"Function returning explicitly undefined","opsSec":1824707.5218707153,"samples":914412},{"name":"Function returning implicitly undefined","opsSec":1701403.738833861,"samples":850709},{"name":"Function returning string","opsSec":1874640.8413735174,"samples":937523},{"name":"Function returning integer","opsSec":1695311.1400185535,"samples":847784},{"name":"Function returning float","opsSec":1859951.686431822,"samples":930065},{"name":"Function returning functions","opsSec":1848948.8278606955,"samples":924626},{"name":"Function returning arrow functions","opsSec":1751911.2916354905,"samples":875962},{"name":"Function returning empty object","opsSec":1754658.3483977173,"samples":877631},{"name":"Function returning empty array","opsSec":1799996.3188520612,"samples":901869}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,099,811|45549906|
|using Array.includes (first item)|81,806,767|40904263|
|Using raw comparison|99,519,406|49827641|
|Using raw comparison (first item)|99,359,178|49687404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91099811.2712015,"samples":45549906},{"name":"using Array.includes (first item)","opsSec":81806767.97255628,"samples":40904263},{"name":"Using raw comparison","opsSec":99519406.76067795,"samples":49827641},{"name":"Using raw comparison (first item)","opsSec":99359178.80117458,"samples":49687404}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,026,486|23516983|
|Using Object.getOwnPropertyNames()|40,845,134|20437138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:20:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":47026486.155218095,"samples":23516983},{"name":"Using Object.getOwnPropertyNames()","opsSec":40845134.6302467,"samples":20437138}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|107,640,667|53881277|
|Length = 10_000 - Array.at|79,718,392|39908921|
|Length = 1_000_000 - Array.at|82,343,565|41338313|
|Length = 100 - Array[length - 1]|80,823,384|40411697|
|Length = 10_000 - Array[length - 1]|80,949,786|40476656|
|Length = 1_000_000 - Array[length - 1]|81,024,745|40628956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":107640667.30565776,"samples":53881277},{"name":"Length = 10_000 - Array.at","opsSec":79718392.98587655,"samples":39908921},{"name":"Length = 1_000_000 - Array.at","opsSec":82343565.38173804,"samples":41338313},{"name":"Length = 100 - Array[length - 1]","opsSec":80823384.78613412,"samples":40411697},{"name":"Length = 10_000 - Array[length - 1]","opsSec":80949786.47489946,"samples":40476656},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":81024745.3078831,"samples":40628956}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|134,356,376|67180305|
|~ (small)|97,960,476|48980438|
|Math.floor (long)|97,715,939|48857972|
|~ (long)|97,215,159|48607604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:22:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":134356376.69928297,"samples":67180305},{"name":"~ (small)","opsSec":97960476.32125661,"samples":48980438},{"name":"Math.floor (long)","opsSec":97715939.11420305,"samples":48857972},{"name":"~ (long)","opsSec":97215159.39242029,"samples":48607604}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,013,954|19506983|
|Object.create({})|2,011,805|1005909|
|Cached Empty.prototype|65,741,477|32871532|
|Empty.prototype|2,488,878|1257003|
|Empty class|1,553,367|776715|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:23:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":39013954.52989737,"samples":19506983},{"name":"Object.create({})","opsSec":2011805.6555604972,"samples":1005909},{"name":"Cached Empty.prototype","opsSec":65741477.526664324,"samples":32871532},{"name":"Empty.prototype","opsSec":2488878.831844796,"samples":1257003},{"name":"Empty class","opsSec":1553367.085526302,"samples":776715}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|150,336,068|75169438|
|Using optional chain (obj.field?.field2) (undefined)|98,708,655|49619581|
|Using and operator (obj.field && obj.field.field2) (Valid)|93,894,872|46947441|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,628,101|49816987|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":150336068.32358798,"samples":75169438},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98708655.0970234,"samples":49619581},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":93894872.9860922,"samples":46947441},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99628101.91967286,"samples":49816987}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|140,534,713|70297937|
|Using parseInt(x, 10) - big number (10 len)|95,344,979|47722001|
|Using + - small number (2 len)|97,756,252|48878129|
|Using + - big number (10 len)|98,454,644|49227331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:26:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":140534713.57372215,"samples":70297937},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":95344979.75506574,"samples":47722001},{"name":"Using + - small number (2 len)","opsSec":97756252.33013737,"samples":48878129},{"name":"Using + - big number (10 len)","opsSec":98454644.08125478,"samples":49227331}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|988,325|496879|
|Using ? operator to avoid rejection|1,048,331|532990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:28:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":988325.7210438714,"samples":496879},{"name":"Using ? operator to avoid rejection","opsSec":1048331.304744696,"samples":532990}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|143,074,568|71541117|
|Raw usage underscore usage|96,798,193|48447411|
|Manipulating private properties using #|97,837,311|48923338|
|Manipulating private properties using underscore(_)|99,034,990|49520728|
|Manipulating private properties using Symbol|99,085,848|49543149|
|Manipulating private properties using PrivateSymbol|35,879,745|17939878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:30:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":143074568.6369107,"samples":71541117},{"name":"Raw usage underscore usage","opsSec":96798193.59044112,"samples":48447411},{"name":"Manipulating private properties using #","opsSec":97837311.79521346,"samples":48923338},{"name":"Manipulating private properties using underscore(_)","opsSec":99034990.20355958,"samples":49520728},{"name":"Manipulating private properties using Symbol","opsSec":99085848.7447618,"samples":49543149},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35879745.09255749,"samples":17939878}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,956,836|3978702|
|Adding property in the object creation - small object|7,757,021|3884754|
|Adding property after the function creation - small class|256,592|128859|
|Adding property in the function creation - small class|274,330|137166|
|Adding property after the class creation - small class|265,121|132572|
|Adding property in the class creation - small class|267,196|133602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:32:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7956836.836670282,"samples":3978702},{"name":"Adding property in the object creation - small object","opsSec":7757021.92517219,"samples":3884754},{"name":"Adding property after the function creation - small class","opsSec":256592.433683145,"samples":128859},{"name":"Adding property in the function creation - small class","opsSec":274330.60585186107,"samples":137166},{"name":"Adding property after the class creation - small class","opsSec":265121.3368978793,"samples":132572},{"name":"Adding property in the class creation - small class","opsSec":267196.4276532403,"samples":133602}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|149,155,529|74582605|
|Getter|49,978,599|24990049|
|Method|101,368,746|50684423|
|DefineProperty (getter)|98,600,340|49304754|
|DefineProperty (getter & enumerable=false)|50,808,383|25404193|
|DefineProperty (getter & configurable=false)|99,082,115|49541135|
|DefineProperty (getter & enumerable=false & configurable=false)|49,184,209|24597868|
|DefineProperty (writable)|92,684,822|46342418|
|DefineProperty (writable & enumerable=false)|97,621,925|48965452|
|DefineProperty (writable & enumerable=false & configurable=false)|99,048,586|49526802|
|DefineProperties (getter)|50,892,802|25453462|
|DefineProperties (getter & enumerable=false)|50,122,693|25062981|
|DefineProperties (getter & enumerable=false & configurable=false)|50,270,208|25225771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:34:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":149155529.8061156,"samples":74582605},{"name":"Getter","opsSec":49978599.34172014,"samples":24990049},{"name":"Method","opsSec":101368746.45589098,"samples":50684423},{"name":"DefineProperty (getter)","opsSec":98600340.92910314,"samples":49304754},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50808383.967664644,"samples":25404193},{"name":"DefineProperty (getter & configurable=false)","opsSec":99082115.43189992,"samples":49541135},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49184209.090389155,"samples":24597868},{"name":"DefineProperty (writable)","opsSec":92684822.09727669,"samples":46342418},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97621925.14010376,"samples":48965452},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99048586.39671032,"samples":49526802},{"name":"DefineProperties (getter)","opsSec":50892802.87577167,"samples":25453462},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50122693.499156915,"samples":25062981},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50270208.81088365,"samples":25225771}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|140,447,776|70228312|
|Setter|11,167,319|5583663|
|Method|94,071,105|47208324|
|DefineProperty (setter)|100,652,363|50326191|
|DefineProperty (setter & enumerable=false)|11,021,230|5510618|
|DefineProperty (setter & configurable=false)|11,448,570|5724289|
|DefineProperty (setter & enumerable=false & configurable=false)|11,403,837|5702094|
|DefineProperty (writable)|100,788,101|50394174|
|DefineProperty (writable & enumerable=false)|100,225,000|50114945|
|DefineProperty (writable & enumerable=false & configurable=false)|99,128,129|49566761|
|DefineProperties (setter)|99,883,107|49946826|
|DefineProperties (setter & enumerable=false)|11,352,924|5676624|
|DefineProperties (setter & enumerable=false & configurable=false)|11,212,006|5606193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":140447776.35188094,"samples":70228312},{"name":"Setter","opsSec":11167319.589958556,"samples":5583663},{"name":"Method","opsSec":94071105.45103064,"samples":47208324},{"name":"DefineProperty (setter)","opsSec":100652363.68126981,"samples":50326191},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11021230.22487536,"samples":5510618},{"name":"DefineProperty (setter & configurable=false)","opsSec":11448570.558429137,"samples":5724289},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11403837.195160203,"samples":5702094},{"name":"DefineProperty (writable)","opsSec":100788101.06915238,"samples":50394174},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100225000.42312935,"samples":50114945},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99128129.42975903,"samples":49566761},{"name":"DefineProperties (setter)","opsSec":99883107.93959346,"samples":49946826},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11352924.85034706,"samples":5676624},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11212006.989315731,"samples":5606193}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,236,096|1618158|
|Using replaceAll()|3,160,453|1580229|
|Using replaceAll(//g)|2,913,044|1456855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:37:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3236096.3078938494,"samples":1618158},{"name":"Using replaceAll()","opsSec":3160453.935656239,"samples":1580229},{"name":"Using replaceAll(//g)","opsSec":2913044.4276091796,"samples":1456855}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,022,106|12011054|
|{ ...object, __proto__: null }|2,582,515|1291288|
|{ ...object, newProp: true }|21,029,476|10515371|
|structuredClone|290,678|145476|
|JSON.parse + JSON.stringify|291,641|145828|
|loop + object.keys starting with {}|1,638,653|819327|
|loop + object.keys starting with { __proto__: null }|875,324|437826|
|loop + object.keys starting with { randomProp: true }|656,852|328499|
|object.keys + reduce(FN, {})|1,720,185|860171|
|object.keys + reduce(FN, { __proto__: null })|910,959|455511|
|object.keys + reduce(FN, { newProp: true })|699,667|349887|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:38:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":24022106.126275722,"samples":12011054},{"name":"{ ...object, __proto__: null }","opsSec":2582515.403858564,"samples":1291288},{"name":"{ ...object, newProp: true }","opsSec":21029476.193768945,"samples":10515371},{"name":"structuredClone","opsSec":290678.8943888503,"samples":145476},{"name":"JSON.parse + JSON.stringify","opsSec":291641.8197914381,"samples":145828},{"name":"loop + object.keys starting with {}","opsSec":1638653.960672305,"samples":819327},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":875324.6863387387,"samples":437826},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656852.4874684511,"samples":328499},{"name":"object.keys + reduce(FN, {})","opsSec":1720185.9722515729,"samples":860171},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":910959.2440176795,"samples":455511},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":699667.2307805829,"samples":349887}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|301,907|150954|
|Sort using first char|1,309,223|654898|
|Sort using localeCompare|1,216,577|608377|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:40:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":301907.5060793201,"samples":150954},{"name":"Sort using first char","opsSec":1309223.9031941255,"samples":654898},{"name":"Sort using localeCompare","opsSec":1216577.7470823138,"samples":608377}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,736|869|
|{...smallObject} - Total keys: 2|56,333,310|28168767|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,054|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,623|3312|
|{ ...bigObject, ...anotherBigObject }|1,107|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,894,890|6449053|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,193,677|14097484|
|{ ...smallObject, ...anotherSmallObject }|20,186,948|10093553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:42:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1736.9599813155075,"samples":869},{"name":"{...smallObject} - Total keys: 2","opsSec":56333310.9170138,"samples":28168767},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1054.3534583781893,"samples":528},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6623.430067089587,"samples":3312},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1107.703244085503,"samples":554},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12894890.298047254,"samples":6449053},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28193677.237068735,"samples":14097484},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20186948.339933462,"samples":10093553}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,023|1012|
|streams.web.Readable reading 1e3 * "some data"|1,803|902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:43:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2023.1159711527814,"samples":1012},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1803.7468621653638,"samples":902}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,182|5592|
|streams.web.WritableStream writing 1e3 * "some data"|1,683|850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:45:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":11182.915033583444,"samples":5592},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1683.0141260761245,"samples":850}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|149,026,107|74517537|
|Using backtick (`)|97,114,684|48558154|
|Using array.join|10,009,566|5006314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:46:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":149026107.09913585,"samples":74517537},{"name":"Using backtick (`)","opsSec":97114684.04825334,"samples":48558154},{"name":"Using array.join","opsSec":10009566.073738042,"samples":5006314}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|127,259,515|63631461|
|(short string) (true) String#slice and strict comparison|58,125,397|29065626|
|(long string) (true) String#endsWith|64,230,487|32118143|
|(long string) (true) String#slice and strict comparison|53,208,792|26604400|
|(short string) (false) String#endsWith|96,261,605|48130808|
|(short string) (false) String#slice and strict comparison|58,653,841|29326926|
|(long string) (false) String#endsWith|88,955,574|44477805|
|(long string) (false) String#slice and strict comparison|52,869,644|26441083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":127259515.77180086,"samples":63631461},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58125397.842430905,"samples":29065626},{"name":"(long string) (true) String#endsWith","opsSec":64230487.785406634,"samples":32118143},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53208792.0186812,"samples":26604400},{"name":"(short string) (false) String#endsWith","opsSec":96261605.41122341,"samples":48130808},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58653841.44230854,"samples":29326926},{"name":"(long string) (false) String#endsWith","opsSec":88955574.23985916,"samples":44477805},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52869644.56485984,"samples":26441083}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|134,338,923|67173221|
|Using indexof|15,453,309|7726656|
|Using RegExp.test|12,782,775|6391389|
|Using RegExp.text with cached regex pattern|13,842,794|6921807|
|Using new RegExp.test|4,684,892|2342591|
|Using new RegExp.test with cached regex pattern|5,401,457|2701059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":134338923.05047685,"samples":67173221},{"name":"Using indexof","opsSec":15453309.836536622,"samples":7726656},{"name":"Using RegExp.test","opsSec":12782775.136658369,"samples":6391389},{"name":"Using RegExp.text with cached regex pattern","opsSec":13842794.229725715,"samples":6921807},{"name":"Using new RegExp.test","opsSec":4684892.436168305,"samples":2342591},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5401457.315347017,"samples":2701059}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|127,405,970|63703478|
|(short string) (true) String#slice and strict comparison|57,564,209|28784158|
|(long string) (true) String#startsWith|64,322,407|32171042|
|(long string) (true) String#slice and strict comparison|52,855,805|26434227|
|(short string) (false) String#startsWith|96,664,717|48332408|
|(short string) (false) String#slice and strict comparison|58,128,032|29064887|
|(long string) (false) String#startsWith|89,382,668|44691380|
|(long string) (false) String#slice and strict comparison|52,435,310|26220279|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:51:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":127405970.64222306,"samples":63703478},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57564209.023942985,"samples":28784158},{"name":"(long string) (true) String#startsWith","opsSec":64322407.38964507,"samples":32171042},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52855805.28865959,"samples":26434227},{"name":"(short string) (false) String#startsWith","opsSec":96664717.01532978,"samples":48332408},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58128032.484146774,"samples":29064887},{"name":"(long string) (false) String#startsWith","opsSec":89382668.82967779,"samples":44691380},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52435310.37900789,"samples":26220279}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|128,144,787|64080176|
|Using this|97,986,417|48995200|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":128144787.0215892,"samples":64080176},{"name":"Using this","opsSec":97986417.63601443,"samples":48995200}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,374,990|4687619|
|Date.now()|18,316,650|9159097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:54:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9374990.762743605,"samples":4687619},{"name":"Date.now()","opsSec":18316650.272715013,"samples":9159097}]}-->
