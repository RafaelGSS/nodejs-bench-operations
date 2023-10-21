## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|698,759,773|95|
|Using dot notation|706,187,680|94|
|Using define property (writable)|2,900,254|97|
|Using define property initialized (writable)|3,758,843|92|
|Using define property (getter)|1,492,693|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":698759772.592362,"samples":6},{"name":"Using dot notation","opsSec":706187680.0460653,"samples":6},{"name":"Using define property (writable)","opsSec":2900254.164579769,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3758843.3797920495,"samples":7},{"name":"Using define property (getter)","opsSec":1492692.9832559023,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.058ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.38ms
new Array(length)|10,000|0.208ms
array.push|1,000,000|28.99ms
new Array(length)|1,000,000|17.374ms
array.push|100,000,000|1,579.417ms
new Array(length)|100,000,000|4,341.191ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.02ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.612ms
new Array(length)|10,000|4.323ms
array.push|1,000,000|336.253ms
new Array(length)|1,000,000|4.379ms
array.push|100,000,000|2,143.975ms
new Array(length)|100,000,000|4,750.627ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|381|86|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":381.1493476840628,"samples":5},{"name":"Array.from","opsSec":16.064440387951755,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,378|91|
|new Blob (1024)|430|71|
|text (128)|31,171|78|
|text (1024)|22,674|83|
|arrayBuffer (128)|31,141|81|
|arrayBuffer (1024)|23,523|86|
|slice (0, 64)|54,420|75|
|slice (0, 512)|27,201|75|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3378.054237974091,"samples":3},{"name":"new Blob (1024)","opsSec":430.0173153812039,"samples":2},{"name":"text (128)","opsSec":31171.47618106299,"samples":4},{"name":"text (1024)","opsSec":22673.522626879192,"samples":4},{"name":"arrayBuffer (128)","opsSec":31141.42176477799,"samples":5},{"name":"arrayBuffer (1024)","opsSec":23523.115307515083,"samples":5},{"name":"slice (0, 64)","opsSec":54419.9762709935,"samples":4},{"name":"slice (0, 512)","opsSec":27200.766638190118,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|186,929|56|
|[True conditional] Using constructor name|147,195|95|
|[True conditional] Check if property is valid then instanceof |148,436|92|
|[False conditional] Using instanceof only|710,383,937|96|
|[False conditional] Using constructor name|711,270,795|96|
|[False conditional] Check if property is valid then instanceof |709,187,161|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":186928.61680602902,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":147195.09400614188,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":148435.6472283005,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":710383936.9322736,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":711270794.9951831,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":709187160.6412472,"samples":10}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,135|84|
|crypto.verify('RSA-SHA256')|3,276|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3134.8081558040385,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":3276.1473921331185,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,943,380|96|
|fromUnixToISOString(new Date())|1,481,966|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1943379.5663908797,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1481966.3058995241,"samples":9}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,360|82|
|Intl.DateTimeFormat().format(new Date())|7,681|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,327|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,835|89|
|Reusing Intl.DateTimeFormat()|453,595|85|
|Date.toLocaleDateString()|468,965|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,475|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7360.390332306133,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7680.972570099218,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7326.667020333126,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8835.432616243752,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":453595.3069313207,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":468965.2657166706,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8474.506643035857,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|662,440|96|
|Using brackets {}|671,277|97|
|Using '' + |673,280|95|
|Using date.toString()|729,625|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":662440.4410756422,"samples":6},{"name":"Using brackets {}","opsSec":671276.7889527377,"samples":3},{"name":"Using '' + ","opsSec":673279.6464200801,"samples":5},{"name":"Using date.toString()","opsSec":729625.2253810893,"samples":3}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,357,652|93|
|Using delete property (proto: null)|15,623,236|94|
|Using delete property (cached proto: null)|2,342,636|97|
|Using undefined assignment|591,401,134|95|
|Using undefined assignment (proto: null)|18,389,836|95|
|Using undefined property (cached proto: null)|596,774,611|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2357652.029733667,"samples":6},{"name":"Using delete property (proto: null)","opsSec":15623235.951504914,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2342636.438515452,"samples":8},{"name":"Using undefined assignment","opsSec":591401133.7591665,"samples":9},{"name":"Using undefined assignment (proto: null)","opsSec":18389836.432212405,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":596774611.3276551,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|147,145|58|
|NodeError|114,439|90|
|NodeError Range|115,260|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Error","opsSec":147145.472953704,"samples":3},{"name":"NodeError","opsSec":114438.67271547753,"samples":3},{"name":"NodeError Range","opsSec":115260.01499788812,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,169,279|95|
|Function returning explicitly undefined|1,155,889|95|
|Function returning implicitly undefined|1,175,871|94|
|Function returning string|1,164,542|94|
|Function returning integer|1,186,502|94|
|Function returning float|1,173,853|93|
|Function returning functions|1,153,259|97|
|Function returning arrow functions|1,158,654|95|
|Function returning empty object|1,119,176|99|
|Function returning empty array|1,142,587|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1169278.5168891784,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1155889.3298547731,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1175870.6054133289,"samples":5},{"name":"Function returning string","opsSec":1164541.6430596157,"samples":5},{"name":"Function returning integer","opsSec":1186501.6731318068,"samples":5},{"name":"Function returning float","opsSec":1173852.7365177416,"samples":5},{"name":"Function returning functions","opsSec":1153259.4257190733,"samples":8},{"name":"Function returning arrow functions","opsSec":1158653.9715933606,"samples":5},{"name":"Function returning empty object","opsSec":1119176.1153974072,"samples":8},{"name":"Function returning empty array","opsSec":1142587.203505465,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|742,757,015|89|
|using Array.includes (first item)|722,995,501|90|
|Using raw comparison|743,726,148|91|
|Using raw comparison (first item)|744,527,516|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":742757015.2512379,"cycles":6,"stats":{"deviation":5.09828907922983e-11,"mean":1.3463353148697621e-9,"moe":1.0592184206660667e-11,"rme":0.7867419126330577,"sem":5.4041756156431975e-12,"variance":2.5992551535394143e-21}},{"name":"using Array.includes (first item)","hz":722995501.0934469,"cycles":8,"stats":{"deviation":1.1263693711125373e-10,"mean":1.3831344710826223e-9,"moe":2.327103230253161e-11,"rme":1.6824851660530629,"sem":1.1872975664556945e-11,"variance":1.2687079601804529e-20}},{"name":"Using raw comparison","hz":743726148.2740531,"cycles":6,"stats":{"deviation":4.436996551841514e-11,"mean":1.344580935228209e-9,"moe":9.116422963530477e-12,"rme":0.678012213670365,"sem":4.6512362058828965e-12,"variance":1.9686938401053485e-21}},{"name":"Using raw comparison (first item)","hz":744527516.0292417,"cycles":6,"stats":{"deviation":6.324550991620634e-11,"mean":1.3431337035510244e-9,"moe":1.3367079904782982e-11,"rme":0.9952158798072465,"sem":6.819938726930093e-12,"variance":3.999994524560955e-21}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,266,274|92|
|Using Object.getOwnPropertyNames()|49,908,825|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":49266274.44077764,"cycles":6,"stats":{"deviation":2.1932224130683034e-9,"mean":2.0297861191068696e-8,"moe":4.481721166306253e-10,"rme":2.207977049462859,"sem":2.2865924317889047e-10,"variance":4.810224553185151e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":49908825.29911372,"cycles":7,"stats":{"deviation":7.180545407450609e-10,"mean":2.003653650445181e-8,"moe":1.4516087502222302e-10,"rme":0.7244808751750609,"sem":7.406167092970563e-11,"variance":5.156023234846004e-19}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,808,446|87|
|Length = 10_000 - Array.at|16,485,716|86|
|Length = 1_000_000 - Array.at|16,126,841|88|
|Length = 100 - Array[length - 1]|727,295,557|88|
|Length = 10_000 - Array[length - 1]|730,199,334|88|
|Length = 1_000_000 - Array[length - 1]|763,655,631|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":16808445.566478442,"cycles":4,"stats":{"deviation":3.590538921542591e-9,"mean":5.949390120846917e-8,"moe":7.544945097833227e-10,"rme":1.2681879897899815,"sem":3.8494617846087893e-10,"variance":1.289196974711223e-17}},{"name":"Length = 10_000 - Array.at","hz":16485716.376048384,"cycles":4,"stats":{"deviation":4.206101203031009e-9,"mean":6.065857116484612e-8,"moe":8.889688919104184e-10,"rme":1.4655289019165172,"sem":4.5355555709715223e-10,"variance":1.76912873301389e-17}},{"name":"Length = 1_000_000 - Array.at","hz":16126841.091051692,"cycles":6,"stats":{"deviation":3.265970184752632e-9,"mean":6.200842399041623e-8,"moe":6.8238103932562e-10,"rme":1.100465058475097,"sem":3.4815359149266323e-10,"variance":1.0666561247693142e-17}},{"name":"Length = 100 - Array[length - 1]","hz":727295557.3289608,"cycles":7,"stats":{"deviation":6.544518611383294e-11,"mean":1.3749568382798371e-9,"moe":1.3673901350265523e-11,"rme":0.9944967703402594,"sem":6.976480280747716e-12,"variance":4.283072385474233e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":730199334.2121863,"cycles":8,"stats":{"deviation":7.047982213028385e-11,"mean":1.3694890602425736e-9,"moe":1.472582159545667e-11,"rme":1.0752785124729898,"sem":7.513174283396261e-12,"variance":4.96740532751645e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":763655630.5246428,"cycles":9,"stats":{"deviation":7.359523224401852e-11,"mean":1.3094907704837914e-9,"moe":1.5738600385483247e-11,"rme":1.2018870800951595,"sem":8.0298981558588e-12,"variance":5.4162582090510236e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,752,776|92|
|Object.create({})|1,037,857|79|
|Cached Empty.prototype|589,320,717|97|
|Empty.prototype|1,143,858|82|
|Empty class|673,783|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":56752776.02944954,"cycles":7,"stats":{"deviation":6.355225686989943e-10,"mean":1.7620283446242185e-8,"moe":1.2986530371167148e-10,"rme":0.7370216495544933,"sem":6.625780801615892e-11,"variance":4.0388893532576793e-19}},{"name":"Object.create({})","hz":1037857.145348493,"cycles":3,"stats":{"deviation":9.255412362032329e-8,"mean":9.63523741665062e-7,"moe":2.0409778834543302e-8,"rme":2.1182434798413206,"sem":1.0413152466603725e-8,"variance":8.566265799126086e-15}},{"name":"Cached Empty.prototype","hz":589320716.8884526,"cycles":6,"stats":{"deviation":2.1777986710769435e-11,"mean":1.6968689057460732e-9,"moe":4.333990277057691e-12,"rme":0.2554110257063222,"sem":2.2112195291110667e-12,"variance":4.742807051744501e-22}},{"name":"Empty.prototype","hz":1143858.3801171998,"cycles":3,"stats":{"deviation":9.891713323941461e-8,"mean":8.742340987155595e-7,"moe":2.1410197158011867e-8,"rme":2.449023343915333,"sem":1.0923569978577484e-8,"variance":9.784599248304101e-15}},{"name":"Empty class","hz":673782.6034086883,"cycles":3,"stats":{"deviation":1.0327800728444967e-7,"mean":0.0000014841582358181514,"moe":2.1702226651814604e-8,"rme":1.4622582773225066,"sem":1.1072564618272757e-8,"variance":1.0666346788646839e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|706,987,303|98|
|Using optional chain (obj.field?.field2) (undefined)|709,603,454|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|705,892,765|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|707,949,865|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":706987303.2261463,"cycles":9,"stats":{"deviation":2.0905448143561297e-11,"mean":1.41445255867647e-9,"moe":4.139067560895656e-12,"rme":0.29262682127484435,"sem":2.1117691637222736e-12,"variance":4.370377620831304e-22}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":709603453.6784859,"cycles":6,"stats":{"deviation":1.9052862001818766e-11,"mean":1.4092377860002495e-9,"moe":3.914673961201718e-12,"rme":0.2777866162893978,"sem":1.9972826332661827e-12,"variance":3.630115504603494e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":705892764.5515935,"cycles":9,"stats":{"deviation":5.122232043843642e-11,"mean":1.4166457714511823e-9,"moe":1.0300386415027323e-11,"rme":0.7270968242453314,"sem":5.255299191340471e-12,"variance":2.6237261110978615e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":707949864.703982,"cycles":6,"stats":{"deviation":9.896230859249327e-12,"mean":1.4125294033612595e-9,"moe":1.9900504512500673e-12,"rme":0.14088559477165832,"sem":1.0153318628826873e-12,"variance":9.793538521955867e-23}}]}-->
