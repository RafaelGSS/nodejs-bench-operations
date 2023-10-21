## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,425,960|96|
|Using dot notation|715,431,223|98|
|Using define property (writable)|3,158,485|91|
|Using define property initialized (writable)|4,124,274|91|
|Using define property (getter)|1,669,905|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714425960.3726394,"samples":6},{"name":"Using dot notation","opsSec":715431223.2614391,"samples":6},{"name":"Using define property (writable)","opsSec":3158485.3118226384,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4124274.4847405734,"samples":6},{"name":"Using define property (getter)","opsSec":1669905.1233866913,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.022ms
new Array(length)|10|0.006ms
array.push|100|0.041ms
new Array(length)|100|0.011ms
array.push|1,000|0.072ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.528ms
new Array(length)|10,000|0.616ms
array.push|1,000,000|40.347ms
new Array(length)|1,000,000|7.215ms
array.push|100,000,000|2,051.566ms
new Array(length)|100,000,000|4,803.633ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.069ms
new Array(length)|100|0.013ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.393ms
array.push|1,000,000|24.236ms
new Array(length)|1,000,000|4.373ms
array.push|100,000,000|2,096.211ms
new Array(length)|100,000,000|5,407.064ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|329|81|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":329.2566294027517,"samples":4},{"name":"Array.from","opsSec":15.674287175202183,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,912|83|
|new Blob (1024)|352|67|
|text (128)|3,430|82|
|text (1024)|424|85|
|arrayBuffer (128)|3,428|83|
|arrayBuffer (1024)|426|82|
|slice (0, 64)|43,105|64|
|slice (0, 512)|12,776|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2911.658774610719,"samples":4},{"name":"new Blob (1024)","opsSec":352.1933195930236,"samples":2},{"name":"text (128)","opsSec":3429.679092337315,"samples":4},{"name":"text (1024)","opsSec":424.28466901974,"samples":2},{"name":"arrayBuffer (128)","opsSec":3427.71113732267,"samples":4},{"name":"arrayBuffer (1024)","opsSec":425.7806231370435,"samples":2},{"name":"slice (0, 64)","opsSec":43105.14147472552,"samples":3},{"name":"slice (0, 512)","opsSec":12775.629227151767,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,557|59|
|[True conditional] Using constructor name|126,362|90|
|[True conditional] Check if property is valid then instanceof |125,636|90|
|[False conditional] Using instanceof only|616,996,643|91|
|[False conditional] Using constructor name|621,757,676|89|
|[False conditional] Check if property is valid then instanceof |633,709,186|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":156556.8227807308,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":126362.10984656894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125636.30812340691,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":616996643.0776935,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":621757675.8649681,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":633709185.6713152,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,972|93|
|crypto.verify('RSA-SHA256')|4,942|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4971.696072174688,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4942.071958221702,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|773,480|81|
|fromUnixToISOString(new Date())|1,331,801|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":773479.5256467701,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1331800.582203007,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,163|82|
|Intl.DateTimeFormat().format(new Date())|11,078|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,731|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,753|74|
|Reusing Intl.DateTimeFormat()|594,243|99|
|Date.toLocaleDateString()|548,351|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,248|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12163.35852829241,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11077.888661067645,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13730.665629938809,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":13753.365408648624,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":594243.3229724745,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":548351.4226388264,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14247.989598081624,"samples":8},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|695,382|94|
|Using brackets {}|704,913|97|
|Using '' + |711,340|92|
|Using date.toString()|770,662|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":695382.1095053023,"samples":5},{"name":"Using brackets {}","opsSec":704912.642720235,"samples":3},{"name":"Using '' + ","opsSec":711340.4802767121,"samples":5},{"name":"Using date.toString()","opsSec":770662.1511189259,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,744,454|96|
|Using delete property (proto: null)|14,866,876|95|
|Using delete property (cached proto: null)|2,764,277|99|
|Using undefined assignment|596,938,140|95|
|Using undefined assignment (proto: null)|15,781,740|98|
|Using undefined property (cached proto: null)|601,322,020|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2744453.621034274,"samples":5},{"name":"Using delete property (proto: null)","opsSec":14866876.000449091,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2764276.617822917,"samples":6},{"name":"Using undefined assignment","opsSec":596938140.399758,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":15781739.704478145,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":601322019.8550787,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|174,167|56|
|NodeError|142,221|91|
|NodeError Range|143,183|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":174167.2132415695,"samples":3},{"name":"NodeError","opsSec":142220.51068815912,"samples":3},{"name":"NodeError Range","opsSec":143182.77984279854,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,390,070|90|
|Function returning explicitly undefined|1,400,964|96|
|Function returning implicitly undefined|1,432,998|93|
|Function returning string|1,419,871|98|
|Function returning integer|1,425,202|96|
|Function returning float|1,430,391|95|
|Function returning functions|1,398,284|99|
|Function returning arrow functions|1,410,693|98|
|Function returning empty object|1,429,358|98|
|Function returning empty array|1,433,167|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1390069.5818061037,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1400964.3625336224,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1432997.7939310046,"samples":5},{"name":"Function returning string","opsSec":1419871.3534032088,"samples":5},{"name":"Function returning integer","opsSec":1425201.9237857806,"samples":5},{"name":"Function returning float","opsSec":1430390.5634839963,"samples":8},{"name":"Function returning functions","opsSec":1398283.8871244686,"samples":6},{"name":"Function returning arrow functions","opsSec":1410693.2017787446,"samples":6},{"name":"Function returning empty object","opsSec":1429358.0955189492,"samples":7},{"name":"Function returning empty array","opsSec":1433167.4276030457,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|599,794,723|89|
|using Array.includes (first item)|610,525,867|93|
|Using raw comparison|606,506,176|91|
|Using raw comparison (first item)|597,707,286|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"using Array.includes","opsSec":599794722.8556126,"samples":8},{"name":"using Array.includes (first item)","opsSec":610525867.3741038,"samples":10},{"name":"Using raw comparison","opsSec":606506176.0073173,"samples":8},{"name":"Using raw comparison (first item)","opsSec":597707285.9817854,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,833,573|92|
|Using Object.getOwnPropertyNames()|64,048,299|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":60833573.36392764,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":64048298.819271214,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|714,392,981|98|
|Length = 10_000 - Array.at|715,724,226|98|
|Length = 1_000_000 - Array.at|716,012,616|96|
|Length = 100 - Array[length - 1]|718,928,652|97|
|Length = 10_000 - Array[length - 1]|716,196,012|95|
|Length = 1_000_000 - Array[length - 1]|717,330,420|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":714392980.5796946,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":715724225.8957796,"samples":8},{"name":"Length = 1_000_000 - Array.at","opsSec":716012616.4210298,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":718928652.1014781,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":716196012.4050256,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":717330419.9529456,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|50,506,366|93|
|Object.create({})|1,566,145|78|
|Cached Empty.prototype|715,171,542|98|
|Empty.prototype|1,413,527|71|
|Empty class|984,172|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":50506365.558774054,"samples":6},{"name":"Object.create({})","opsSec":1566144.661878002,"samples":3},{"name":"Cached Empty.prototype","opsSec":715171542.4173375,"samples":7},{"name":"Empty.prototype","opsSec":1413527.0684528062,"samples":3},{"name":"Empty class","opsSec":984171.9329073924,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|718,580,635|88|
|Using optional chain (obj.field?.field2) (undefined)|699,388,468|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|725,492,058|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|717,074,408|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":718580635.1236346,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":699388467.6228687,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":725492057.5551934,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":717074407.9960955,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|595,316,694|94|
|Using parseInt(x, 10) - big number (10 len)|598,332,817|97|
|Using + - small number (2 len)|595,746,961|95|
|Using + - big number (10 len)|597,742,801|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":595316693.6618696,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":598332816.5916547,"samples":6},{"name":"Using + - small number (2 len)","opsSec":595746960.769768,"samples":6},{"name":"Using + - big number (10 len)","opsSec":597742800.5607612,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|591,911|69|
|Using ? operator to avoid rejection|677,591|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":591910.9994900367,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":677590.520499506,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|704,800,309|92|
|Raw usage underscore usage|707,273,185|97|
|Manipulating private properties using #|702,115,049|97|
|Manipulating private properties using underscore(_)|704,794,648|96|
|Manipulating private properties using Symbol|702,500,354|97|
|Manipulating private properties using PrivateSymbol|31,555,464|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":704800309.1245873,"samples":6},{"name":"Raw usage underscore usage","opsSec":707273184.9378386,"samples":8},{"name":"Manipulating private properties using #","opsSec":702115049.2182814,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":704794647.7909535,"samples":9},{"name":"Manipulating private properties using Symbol","opsSec":702500353.6110097,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":31555463.7890555,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,654,245|89|
|Adding property in the object creation - small object|4,852,301|92|
|Adding property after the function creation - small class|165,728|81|
|Adding property in the function creation - small class|167,075|81|
|Adding property after the class creation - small class|138,076|77|
|Adding property in the class creation - small class|135,024|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4654245.070731403,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":4852301.3007336585,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":165728.46417008445,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":167075.02272504027,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":138075.53087866114,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":135024.04728518976,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|619,787,372|88|
|Getter|47,392,602|92|
|Method|622,824,278|90|
|DefineProperty (getter)|626,962,846|90|
|DefineProperty (getter & enumerable=false)|46,711,192|91|
|DefineProperty (getter & configurable=false)|614,729,864|91|
|DefineProperty (getter & enumerable=false & configurable=false)|47,458,231|94|
|DefineProperty (writable)|622,129,007|92|
|DefineProperty (writable & enumerable=false)|628,469,209|90|
|DefineProperty (writable & enumerable=false & configurable=false)|505,989,233|81|
|DefineProperties (getter)|27,357,877|86|
|DefineProperties (getter & enumerable=false)|45,137,050|93|
|DefineProperties (getter & enumerable=false & configurable=false)|45,608,291|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":619787371.7166961,"samples":6},{"name":"Getter","opsSec":47392602.36951491,"samples":5},{"name":"Method","opsSec":622824278.1002834,"samples":9},{"name":"DefineProperty (getter)","opsSec":626962845.5028124,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":46711192.069660895,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":614729864.2265128,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":47458231.183327526,"samples":5},{"name":"DefineProperty (writable)","opsSec":622129006.7905831,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":628469208.9084446,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":505989233.27017856,"samples":6},{"name":"DefineProperties (getter)","opsSec":27357877.17506966,"samples":4},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45137050.377844214,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":45608291.441150226,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|583,777,655|86|
|Setter|7,001,076|88|
|Method|603,208,366|88|
|DefineProperty (setter)|594,476,478|87|
|DefineProperty (setter & enumerable=false)|6,864,385|87|
|DefineProperty (setter & configurable=false)|7,143,920|91|
|DefineProperty (setter & enumerable=false & configurable=false)|6,910,480|85|
|DefineProperty (writable)|621,522,424|89|
|DefineProperty (writable & enumerable=false)|623,774,117|91|
|DefineProperty (writable & enumerable=false & configurable=false)|619,522,629|90|
|DefineProperties (setter)|619,366,534|88|
|DefineProperties (setter & enumerable=false)|7,269,712|89|
|DefineProperties (setter & enumerable=false & configurable=false)|7,338,741|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Setter (class)","opsSec":583777654.5525314,"samples":7},{"name":"Setter","opsSec":7001076.277173399,"samples":7},{"name":"Method","opsSec":603208365.7754401,"samples":8},{"name":"DefineProperty (setter)","opsSec":594476477.605056,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6864384.955209443,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":7143920.062240904,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6910479.610195861,"samples":5},{"name":"DefineProperty (writable)","opsSec":621522423.673249,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":623774117.150327,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":619522629.4312088,"samples":6},{"name":"DefineProperties (setter)","opsSec":619366534.2695694,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7269711.557091986,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7338740.647773316,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,840,179|89|
|Using replaceAll()|1,770,852|89|
|Using replaceAll(//g)|1,718,655|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1840178.712744644,"samples":5},{"name":"Using replaceAll()","opsSec":1770852.2441654736,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1718654.8985549593,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|17,084,711|89|
|{ ...object, __proto__: null }|17,591,675|87|
|{ ...object, newProp: true }|477,097|82|
|structuredClone|156,017|92|
|JSON.parse + JSON.stringify|126,186|92|
|loop + object.keys starting with {}|306,683|88|
|loop + object.keys starting with { __proto__: null }|413,839|91|
|loop + object.keys starting with { randomProp: true }|317,844|93|
|object.keys + reduce(FN, {})|309,016|92|
|object.keys + reduce(FN, { __proto__: null })|410,510|90|
|object.keys + reduce(FN, { newProp: true })|304,046|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":17084710.82673127,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":17591675.028329942,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":477096.5464209532,"samples":3},{"name":"structuredClone","opsSec":156016.87119782146,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":126186.373218388,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":306683.3919235672,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":413838.9885163343,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":317844.01549695374,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":309016.1192759498,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":410510.05766880186,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":304046.2473726509,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|145,086|95|
|Sort using first char|740,967|95|
|Sort using localeCompare|678,027|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":145085.53571666504,"samples":3},{"name":"Sort using first char","opsSec":740966.7603362049,"samples":6},{"name":"Sort using localeCompare","opsSec":678027.0136605505,"samples":5}]}-->
