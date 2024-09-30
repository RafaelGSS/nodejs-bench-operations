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
|Raw usage private field|13,595,880|6797941|
|Raw usage underscore usage|13,570,850|6785426|
|Manipulating private properties using #|14,314,939|7157470|
|Manipulating private properties using underscore(_)|14,372,781|7186391|
|Manipulating private properties using Symbol|14,366,256|7183129|
|Manipulating private properties using PrivateSymbol|11,111,259|5555630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:47:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13595880.803662194,"samples":6797941},{"name":"Raw usage underscore usage","opsSec":13570850.452919958,"samples":6785426},{"name":"Manipulating private properties using #","opsSec":14314939.227137066,"samples":7157470},{"name":"Manipulating private properties using underscore(_)","opsSec":14372781.913648037,"samples":7186391},{"name":"Manipulating private properties using Symbol","opsSec":14366256.793195136,"samples":7183129},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11111259.622199906,"samples":5555630}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,796,298|2398150|
|Adding property in the object creation - small object|4,787,081|2393541|
|Adding property after the function creation - small class|263,141|131571|
|Adding property in the function creation - small class|277,372|139443|
|Adding property after the class creation - small class|266,897|133449|
|Adding property in the class creation - small class|271,490|135746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:54:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4796298.618664972,"samples":2398150},{"name":"Adding property in the object creation - small object","opsSec":4787081.348981359,"samples":2393541},{"name":"Adding property after the function creation - small class","opsSec":263141.9331621887,"samples":131571},{"name":"Adding property in the function creation - small class","opsSec":277372.7734183189,"samples":139443},{"name":"Adding property after the class creation - small class","opsSec":266897.8900383389,"samples":133449},{"name":"Adding property in the class creation - small class","opsSec":271490.469336994,"samples":135746}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,922,806|7461404|
|Getter|12,436,136|6218069|
|Method|14,489,532|7244863|
|DefineProperty (getter)|14,526,309|7263155|
|DefineProperty (getter & enumerable=false)|12,344,798|6172400|
|DefineProperty (getter & configurable=false)|14,707,673|7353837|
|DefineProperty (getter & enumerable=false & configurable=false)|12,552,200|6276104|
|DefineProperty (writable)|14,533,995|7266998|
|DefineProperty (writable & enumerable=false)|14,690,064|7345033|
|DefineProperty (writable & enumerable=false & configurable=false)|14,779,128|7389565|
|DefineProperties (getter)|12,530,857|6265429|
|DefineProperties (getter & enumerable=false)|12,684,299|6342150|
|DefineProperties (getter & enumerable=false & configurable=false)|12,721,558|6360780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:19:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14922806.776145719,"samples":7461404},{"name":"Getter","opsSec":12436136.557601852,"samples":6218069},{"name":"Method","opsSec":14489532.101126479,"samples":7244863},{"name":"DefineProperty (getter)","opsSec":14526309.244655127,"samples":7263155},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12344798.691348681,"samples":6172400},{"name":"DefineProperty (getter & configurable=false)","opsSec":14707673.823006822,"samples":7353837},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12552200.51857617,"samples":6276104},{"name":"DefineProperty (writable)","opsSec":14533995.157180909,"samples":7266998},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14690064.824593902,"samples":7345033},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14779128.285163313,"samples":7389565},{"name":"DefineProperties (getter)","opsSec":12530857.774502654,"samples":6265429},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12684299.56825985,"samples":6342150},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12721558.422496602,"samples":6360780}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,712,693|7356347|
|Setter|5,950,622|2975312|
|Method|14,704,864|7352433|
|DefineProperty (setter)|14,973,781|7486891|
|DefineProperty (setter & enumerable=false)|5,962,052|2981027|
|DefineProperty (setter & configurable=false)|5,992,316|2996159|
|DefineProperty (setter & enumerable=false & configurable=false)|6,040,636|3020319|
|DefineProperty (writable)|14,621,531|7310766|
|DefineProperty (writable & enumerable=false)|14,702,740|7351371|
|DefineProperty (writable & enumerable=false & configurable=false)|14,641,900|7320951|
|DefineProperties (setter)|14,865,137|7432569|
|DefineProperties (setter & enumerable=false)|6,002,733|3001367|
|DefineProperties (setter & enumerable=false & configurable=false)|5,984,869|2992435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14712693.676255973,"samples":7356347},{"name":"Setter","opsSec":5950622.5004825415,"samples":2975312},{"name":"Method","opsSec":14704864.50013755,"samples":7352433},{"name":"DefineProperty (setter)","opsSec":14973781.071438087,"samples":7486891},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5962052.903040197,"samples":2981027},{"name":"DefineProperty (setter & configurable=false)","opsSec":5992316.525921986,"samples":2996159},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6040636.961102828,"samples":3020319},{"name":"DefineProperty (writable)","opsSec":14621531.386032714,"samples":7310766},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14702740.559057124,"samples":7351371},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14641900.682616062,"samples":7320951},{"name":"DefineProperties (setter)","opsSec":14865137.049286347,"samples":7432569},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6002733.0034450935,"samples":3001367},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5984869.54504647,"samples":2992435}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,957|1279979|
|Using replaceAll()|2,369,947|1184974|
|Using replaceAll(//g)|2,348,678|1174340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2559957.0425742334,"samples":1279979},{"name":"Using replaceAll()","opsSec":2369947.725088544,"samples":1184974},{"name":"Using replaceAll(//g)","opsSec":2348678.769289815,"samples":1174340}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,696,738|4848370|
|{ ...object, __proto__: null }|2,080,951|1040476|
|{ ...object, newProp: true }|9,522,061|4761031|
|structuredClone|286,424|143213|
|JSON.parse + JSON.stringify|270,497|135249|
|loop + object.keys starting with {}|1,407,148|703575|
|loop + object.keys starting with { __proto__: null }|803,021|401511|
|loop + object.keys starting with { randomProp: true }|550,297|275149|
|object.keys + reduce(FN, {})|1,399,920|699961|
|object.keys + reduce(FN, { __proto__: null })|759,760|379881|
|object.keys + reduce(FN, { newProp: true })|565,037|282519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:55:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9696738.79772431,"samples":4848370},{"name":"{ ...object, __proto__: null }","opsSec":2080951.388192272,"samples":1040476},{"name":"{ ...object, newProp: true }","opsSec":9522061.428672796,"samples":4761031},{"name":"structuredClone","opsSec":286424.94595675485,"samples":143213},{"name":"JSON.parse + JSON.stringify","opsSec":270497.36974110804,"samples":135249},{"name":"loop + object.keys starting with {}","opsSec":1407148.632247739,"samples":703575},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":803021.9004241289,"samples":401511},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":550297.1679516777,"samples":275149},{"name":"object.keys + reduce(FN, {})","opsSec":1399920.4264944694,"samples":699961},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":759760.3011757232,"samples":379881},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565037.5276288863,"samples":282519}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|294,702|147352|
|Sort using first char|1,072,229|536115|
|Sort using localeCompare|1,002,594|501298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:00:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":294702.67678499996,"samples":147352},{"name":"Sort using first char","opsSec":1072229.114338877,"samples":536115},{"name":"Sort using localeCompare","opsSec":1002594.0870506404,"samples":501298}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,748|875|
|{...smallObject} - Total keys: 2|11,655,721|5827861|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,249|1125|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,711|3356|
|{ ...bigObject, ...anotherBigObject }|1,075|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,565,558|3282780|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,310,909|5155555|
|{ ...smallObject, ...anotherSmallObject }|8,185,803|4092902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:10:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1748.2265395586446,"samples":875},{"name":"{...smallObject} - Total keys: 2","opsSec":11655721.860143164,"samples":5827861},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2249.6248975447456,"samples":1125},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6711.572942615001,"samples":3356},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1075.347176085653,"samples":538},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6565558.831209416,"samples":3282780},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10310909.37033985,"samples":5155555},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8185803.246928835,"samples":4092902}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,077|1039|
|streams.web.Readable reading 1e3 * "some data"|1,701|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:15:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2077.121992225405,"samples":1039},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1701.5403220758162,"samples":851}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,366|5184|
|streams.web.WritableStream writing 1e3 * "some data"|1,853|936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:21:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":10366.203454012533,"samples":5184},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1853.9157856615168,"samples":936}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,664,179|6832090|
|Using backtick (`)|13,843,917|6921959|
|Using array.join|5,651,921|2825961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":13664179.016064942,"samples":6832090},{"name":"Using backtick (`)","opsSec":13843917.39077506,"samples":6921959},{"name":"Using array.join","opsSec":5651921.740020271,"samples":2825961}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,795,573|7397787|
|(short string) (true) String#slice and strict comparison|13,232,784|6616393|
|(long string) (true) String#endsWith|14,038,049|7019025|
|(long string) (true) String#slice and strict comparison|12,776,337|6388169|
|(short string) (false) String#endsWith|14,883,863|7441932|
|(short string) (false) String#slice and strict comparison|13,125,472|6562737|
|(long string) (false) String#endsWith|14,876,035|7438018|
|(long string) (false) String#slice and strict comparison|12,946,880|6473441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14795573.20103092,"samples":7397787},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13232784.517802754,"samples":6616393},{"name":"(long string) (true) String#endsWith","opsSec":14038049.298075235,"samples":7019025},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12776337.795610504,"samples":6388169},{"name":"(short string) (false) String#endsWith","opsSec":14883863.880491538,"samples":7441932},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13125472.188558547,"samples":6562737},{"name":"(long string) (false) String#endsWith","opsSec":14876035.940143198,"samples":7438018},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12946880.213624962,"samples":6473441}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,276,426|4138215|
|Using indexof|8,118,718|4059360|
|Using RegExp.test|7,577,325|3788663|
|Using RegExp.text with cached regex pattern|7,667,493|3833747|
|Using new RegExp.test|3,511,989|1755995|
|Using new RegExp.test with cached regex pattern|3,875,500|1937751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:59:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8276426.441121334,"samples":4138215},{"name":"Using indexof","opsSec":8118718.489909284,"samples":4059360},{"name":"Using RegExp.test","opsSec":7577325.136173781,"samples":3788663},{"name":"Using RegExp.text with cached regex pattern","opsSec":7667493.248640247,"samples":3833747},{"name":"Using new RegExp.test","opsSec":3511989.9367909315,"samples":1755995},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3875500.395550809,"samples":1937751}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,839,575|7419788|
|(short string) (true) String#slice and strict comparison|13,520,249|6760125|
|(long string) (true) String#startsWith|13,918,991|6959496|
|(long string) (true) String#slice and strict comparison|12,820,188|6410095|
|(short string) (false) String#startsWith|14,443,535|7221768|
|(short string) (false) String#slice and strict comparison|12,879,516|6439759|
|(long string) (false) String#startsWith|14,293,181|7146591|
|(long string) (false) String#slice and strict comparison|12,828,579|6414290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14839575.228256207,"samples":7419788},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13520249.51329102,"samples":6760125},{"name":"(long string) (true) String#startsWith","opsSec":13918991.860950803,"samples":6959496},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12820188.666810557,"samples":6410095},{"name":"(short string) (false) String#startsWith","opsSec":14443535.653686063,"samples":7221768},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12879516.402831282,"samples":6439759},{"name":"(long string) (false) String#startsWith","opsSec":14293181.59973171,"samples":7146591},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12828579.974127775,"samples":6414290}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,198,808|7599405|
|Using this|15,199,866|7599934|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":15198808.23698282,"samples":7599405},{"name":"Using this","opsSec":15199866.236821998,"samples":7599934}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,261,779|3130890|
|Date.now()|8,982,265|4491133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6261779.561669382,"samples":3130890},{"name":"Date.now()","opsSec":8982265.604787434,"samples":4491133}]}-->
