## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|596,022,321|91|
|Using dot notation|578,008,872|92|
|Using define property (writable)|2,585,783|90|
|Using define property initialized (writable)|3,271,672|89|
|Using define property (getter)|1,410,271|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":596022320.6016258,"samples":6},{"name":"Using dot notation","opsSec":578008871.7256588,"samples":6},{"name":"Using define property (writable)","opsSec":2585782.8103260156,"samples":4},{"name":"Using define property initialized (writable)","opsSec":3271672.048591781,"samples":5},{"name":"Using define property (getter)","opsSec":1410271.2821225221,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.023ms
new Array(length)|10|0.006ms
array.push|100|0.045ms
new Array(length)|100|0.013ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.538ms
new Array(length)|10,000|0.537ms
array.push|1,000,000|45.204ms
new Array(length)|1,000,000|8.08ms
array.push|100,000,000|1,830.538ms
new Array(length)|100,000,000|5,527.88ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.022ms
array.push|100|0.057ms
new Array(length)|100|0.012ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.383ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|36.697ms
new Array(length)|1,000,000|5.602ms
array.push|100,000,000|3,222.499ms
new Array(length)|100,000,000|5,102.649ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|276|80|
|Array.from|14|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":276.1194429852489,"samples":2},{"name":"Array.from","opsSec":13.588873525622375,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,236|89|
|new Blob (1024)|410|70|
|text (128)|3,593|86|
|text (1024)|452|87|
|arrayBuffer (128)|3,614|88|
|arrayBuffer (1024)|449|87|
|slice (0, 64)|50,826|68|
|slice (0, 512)|15,815|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"new Blob (128)","opsSec":3235.868941949478,"samples":3},{"name":"new Blob (1024)","opsSec":410.4229725789226,"samples":2},{"name":"text (128)","opsSec":3592.6132006078933,"samples":4},{"name":"text (1024)","opsSec":451.67473799148297,"samples":3},{"name":"arrayBuffer (128)","opsSec":3613.5329898570335,"samples":3},{"name":"arrayBuffer (1024)","opsSec":449.314968008656,"samples":2},{"name":"slice (0, 64)","opsSec":50825.57139465757,"samples":4},{"name":"slice (0, 512)","opsSec":15815.091813369916,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|167,078|57|
|[True conditional] Using constructor name|130,510|93|
|[True conditional] Check if property is valid then instanceof |132,277|95|
|[False conditional] Using instanceof only|599,536,391|98|
|[False conditional] Using constructor name|598,274,902|97|
|[False conditional] Check if property is valid then instanceof |599,491,752|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":167077.8268353799,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130510.36607761755,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":132277.41236849234,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":599536390.9558457,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":598274901.9229459,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":599491751.6776497,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,588|93|
|crypto.verify('RSA-SHA256')|4,585|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4588.446241335974,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":4585.118432466424,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|988,632|92|
|fromUnixToISOString(new Date())|1,579,181|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":988632.2033347125,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1579181.1205475056,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,345|76|
|Intl.DateTimeFormat().format(new Date())|8,001|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,829|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,123|75|
|Reusing Intl.DateTimeFormat()|440,809|87|
|Date.toLocaleDateString()|517,085|85|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,828|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7345.017420281236,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8001.1413907964115,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8828.882160055502,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8123.344667727571,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":440809.1820752137,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":517085.4084707734,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8827.749809795334,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|773,224|97|
|Using brackets {}|799,264|98|
|Using '' + |784,022|99|
|Using date.toString()|875,372|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":773223.9457075356,"samples":6},{"name":"Using brackets {}","opsSec":799263.5287504684,"samples":5},{"name":"Using '' + ","opsSec":784021.9795813628,"samples":4},{"name":"Using date.toString()","opsSec":875371.8222652371,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,682,852|97|
|Using delete property (proto: null)|12,136,423|88|
|Using delete property (cached proto: null)|2,704,249|93|
|Using undefined assignment|712,737,535|97|
|Using undefined assignment (proto: null)|13,645,843|98|
|Using undefined property (cached proto: null)|711,777,768|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2682851.550170374,"samples":5},{"name":"Using delete property (proto: null)","opsSec":12136422.532199332,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2704248.9026134936,"samples":5},{"name":"Using undefined assignment","opsSec":712737535.3974353,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":13645842.637866884,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":711777768.1076018,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|139,082|61|
|NodeError|111,120|90|
|NodeError Range|116,669|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":139081.71359473022,"samples":4},{"name":"NodeError","opsSec":111120.15614470697,"samples":3},{"name":"NodeError Range","opsSec":116669.38836018808,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,130,178|79|
|Function returning explicitly undefined|1,157,432|88|
|Function returning implicitly undefined|1,183,996|88|
|Function returning string|1,139,345|88|
|Function returning integer|1,134,434|87|
|Function returning float|1,134,929|87|
|Function returning functions|1,102,047|88|
|Function returning arrow functions|1,122,637|88|
|Function returning empty object|1,158,128|88|
|Function returning empty array|1,144,543|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1130178.4155062486,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1157431.6495431387,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1183996.019032365,"samples":5},{"name":"Function returning string","opsSec":1139345.4076265064,"samples":5},{"name":"Function returning integer","opsSec":1134434.2790416672,"samples":4},{"name":"Function returning float","opsSec":1134929.4468133354,"samples":4},{"name":"Function returning functions","opsSec":1102046.7436780832,"samples":7},{"name":"Function returning arrow functions","opsSec":1122637.3944588448,"samples":4},{"name":"Function returning empty object","opsSec":1158128.1099165124,"samples":6},{"name":"Function returning empty array","opsSec":1144543.2761451434,"samples":7}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|631,562,764|89|
|using Array.includes (first item)|678,347,326|85|
|Using raw comparison|634,084,354|81|
|Using raw comparison (first item)|614,045,935|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":631562763.9380212,"samples":9},{"name":"using Array.includes (first item)","opsSec":678347325.904903,"samples":7},{"name":"Using raw comparison","opsSec":634084354.260003,"samples":8},{"name":"Using raw comparison (first item)","opsSec":614045934.8166256,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,619,611|86|
|Using Object.getOwnPropertyNames()|40,967,387|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":44619611.432242155,"samples":10},{"name":"Using Object.getOwnPropertyNames()","opsSec":40967386.57663027,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|710,458,781|94|
|Length = 10_000 - Array.at|716,895,236|96|
|Length = 1_000_000 - Array.at|716,425,305|97|
|Length = 100 - Array[length - 1]|718,284,463|95|
|Length = 10_000 - Array[length - 1]|717,608,753|93|
|Length = 1_000_000 - Array[length - 1]|719,408,525|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":710458780.861558,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":716895236.478178,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":716425305.2199665,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":718284463.0115842,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":717608753.4881451,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":719408524.5113583,"samples":11}]}-->

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

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,220|94|
|{...smallObject} - Total keys: 2|64,225,361|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,304|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,640|98|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,099,423|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,803,357|94|
|{ ...smallObject, ...anotherSmallObject }|14,565,326|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1219.5047401377626,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":64225361.19842265,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1303.7529146926636,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3640.0184928585345,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.0835185827535,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8099422.893511924,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19803357.28874381,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14565325.933390738,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,461|83|
|streams.web.Readable reading 1e3 * "some data"|1,612|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1460.6912305699889,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1611.6114234353429,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,221|92|
|streams.web.WritableStream writing 1e3 * "some data"|792|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4220.9626022718685,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":792.049968480674,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|703,934,479|91|
|Using backtick (`)|719,840,764|96|
|Using array.join|6,592,748|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":703934478.7978464,"samples":7},{"name":"Using backtick (`)","opsSec":719840763.7776705,"samples":7},{"name":"Using array.join","opsSec":6592747.988566974,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,602,666|96|
|Using indexof|716,158,200|96|
|Using RegExp.test|12,003,624|98|
|Using RegExp.text with cached regex pattern|12,664,094|98|
|Using new RegExp.test|3,268,032|97|
|Using new RegExp.test with cached regex pattern|3,956,766|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":714602665.5474858,"samples":7},{"name":"Using indexof","opsSec":716158200.0847802,"samples":9},{"name":"Using RegExp.test","opsSec":12003623.872507334,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12664094.004841112,"samples":5},{"name":"Using new RegExp.test","opsSec":3268031.8320975862,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3956766.3158374634,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|709,325,009|98|
|Using this|705,134,484|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:06:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":709325009.042685,"samples":7},{"name":"Using this","opsSec":705134483.6709515,"samples":9}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,549,745|90|
|Date.now()|14,840,368|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7549744.985777698,"samples":5},{"name":"Date.now()","opsSec":14840368.096049698,"samples":6}]}-->
