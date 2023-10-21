## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|708,220,357|97|
|Using dot notation|710,056,945|96|
|Using define property (writable)|3,156,237|96|
|Using define property initialized (writable)|4,149,693|93|
|Using define property (getter)|1,660,135|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":708220356.5698638,"samples":8},{"name":"Using dot notation","opsSec":710056945.3565415,"samples":6},{"name":"Using define property (writable)","opsSec":3156236.9569961936,"samples":6},{"name":"Using define property initialized (writable)","opsSec":4149693.441426524,"samples":6},{"name":"Using define property (getter)","opsSec":1660134.9350095561,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.003ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.525ms
new Array(length)|10,000|0.51ms
array.push|1,000,000|39.662ms
new Array(length)|1,000,000|10.686ms
array.push|100,000,000|1,790.732ms
new Array(length)|100,000,000|4,752.299ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.026ms
new Array(length)|100|0.015ms
array.push|1,000|0.057ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.68ms
new Array(length)|10,000|2.82ms
array.push|1,000,000|199.142ms
new Array(length)|1,000,000|4.394ms
array.push|100,000,000|3,301.523ms
new Array(length)|100,000,000|5,007.311ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|292|77|
|Array.from|13|37|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":292.15671329797084,"samples":3},{"name":"Array.from","opsSec":13.145741489485331,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,212|82|
|new Blob (1024)|384|66|
|text (128)|3,732|83|
|text (1024)|472|86|
|arrayBuffer (128)|3,752|82|
|arrayBuffer (1024)|470|87|
|slice (0, 64)|47,434|61|
|slice (0, 512)|12,773|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":3211.647928928569,"samples":3},{"name":"new Blob (1024)","opsSec":383.8977430042747,"samples":2},{"name":"text (128)","opsSec":3731.8518875094906,"samples":4},{"name":"text (1024)","opsSec":472.3680861224588,"samples":3},{"name":"arrayBuffer (128)","opsSec":3751.73774989339,"samples":3},{"name":"arrayBuffer (1024)","opsSec":469.94642432975235,"samples":2},{"name":"slice (0, 64)","opsSec":47434.04361033607,"samples":3},{"name":"slice (0, 512)","opsSec":12773.429012038345,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,426|56|
|[True conditional] Using constructor name|130,901|96|
|[True conditional] Check if property is valid then instanceof |131,601|98|
|[False conditional] Using instanceof only|597,454,542|95|
|[False conditional] Using constructor name|596,862,933|97|
|[False conditional] Check if property is valid then instanceof |598,456,639|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165426.23394401622,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130900.97325429757,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131600.98633036827,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597454542.1131063,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":596862932.9248109,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598456638.6070374,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,596|92|
|crypto.verify('RSA-SHA256')|4,587|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4595.684067460992,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":4586.911680059391,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|833,249|91|
|fromUnixToISOString(new Date())|1,397,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":833248.7232454087,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1397592.543552565,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,665|81|
|Intl.DateTimeFormat().format(new Date())|7,942|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,595|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,511|78|
|Reusing Intl.DateTimeFormat()|432,060|90|
|Date.toLocaleDateString()|495,581|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7665.355496494934,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7942.493962029965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8595.41907732375,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8510.697249872626,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":432060.0389791531,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":495581.2962201482,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8975.726530300342,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|611,011|90|
|Using brackets {}|650,779|83|
|Using '' + |614,205|90|
|Using date.toString()|715,967|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":611011.174286168,"samples":3},{"name":"Using brackets {}","opsSec":650779.4278579067,"samples":7},{"name":"Using '' + ","opsSec":614205.2094200691,"samples":6},{"name":"Using date.toString()","opsSec":715966.7825746011,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,231,876|88|
|Using delete property (proto: null)|10,303,595|92|
|Using delete property (cached proto: null)|2,278,416|93|
|Using undefined assignment|591,367,410|92|
|Using undefined assignment (proto: null)|11,371,054|88|
|Using undefined property (cached proto: null)|602,018,130|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2231876.0182390357,"samples":8},{"name":"Using delete property (proto: null)","opsSec":10303595.472905442,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2278416.0540333246,"samples":5},{"name":"Using undefined assignment","opsSec":591367410.0570949,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11371054.378996667,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":602018130.1430405,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|173,693|60|
|NodeError|143,949|96|
|NodeError Range|144,099|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":173692.7003148465,"samples":3},{"name":"NodeError","opsSec":143949.4096595153,"samples":3},{"name":"NodeError Range","opsSec":144098.96377015422,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,172,354|88|
|Function returning explicitly undefined|1,133,946|94|
|Function returning implicitly undefined|1,212,211|92|
|Function returning string|1,215,581|91|
|Function returning integer|1,219,698|94|
|Function returning float|1,217,919|92|
|Function returning functions|1,187,501|93|
|Function returning arrow functions|1,207,868|95|
|Function returning empty object|1,259,579|94|
|Function returning empty array|1,223,446|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1172353.8441996707,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1133945.992717131,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1212211.330182474,"samples":5},{"name":"Function returning string","opsSec":1215580.8370022492,"samples":5},{"name":"Function returning integer","opsSec":1219697.7692261643,"samples":6},{"name":"Function returning float","opsSec":1217918.8455409624,"samples":5},{"name":"Function returning functions","opsSec":1187500.6379409747,"samples":5},{"name":"Function returning arrow functions","opsSec":1207868.1868808132,"samples":5},{"name":"Function returning empty object","opsSec":1259579.0835362177,"samples":8},{"name":"Function returning empty array","opsSec":1223446.150650431,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|594,025,075|97|
|using Array.includes (first item)|597,212,779|95|
|Using raw comparison|599,311,170|96|
|Using raw comparison (first item)|598,256,157|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":594025074.795496,"samples":6},{"name":"using Array.includes (first item)","opsSec":597212778.712857,"samples":6},{"name":"Using raw comparison","opsSec":599311170.200288,"samples":6},{"name":"Using raw comparison (first item)","opsSec":598256156.7386185,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,106,080|92|
|Using Object.getOwnPropertyNames()|60,397,350|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":60106080.2379594,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":60397350.037962034,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|693,393,807|91|
|Length = 10_000 - Array.at|670,199,191|89|
|Length = 1_000_000 - Array.at|642,338,473|90|
|Length = 100 - Array[length - 1]|652,671,930|89|
|Length = 10_000 - Array[length - 1]|646,593,995|89|
|Length = 1_000_000 - Array[length - 1]|614,329,466|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":693393806.6183873,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":670199190.7562598,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":642338473.078916,"samples":10},{"name":"Length = 100 - Array[length - 1]","opsSec":652671930.2027539,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":646593995.4929851,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":614329465.6311858,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,248,340|91|
|Object.create({})|1,585,919|78|
|Cached Empty.prototype|717,546,525|98|
|Empty.prototype|1,428,725|70|
|Empty class|989,923|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":49248340.44906952,"cycles":8,"stats":{"deviation":2.5880444545465675e-9,"mean":2.0305252743169208e-8,"moe":5.317495206588293e-10,"rme":2.6187781427035555,"sem":2.7130077584634145e-10,"variance":6.69797409870924e-18}},{"name":"Object.create({})","hz":1585918.5042472777,"cycles":3,"stats":{"deviation":7.70588333048756e-8,"mean":6.3054942440099e-7,"moe":1.7101381656901117e-8,"rme":2.712139761787445,"sem":8.725194722908734e-9,"variance":5.9380637903086065e-15}},{"name":"Cached Empty.prototype","hz":717546525.420857,"cycles":6,"stats":{"deviation":2.5179181655652585e-11,"mean":1.3936378542331842e-9,"moe":4.985223626163162e-12,"rme":0.3577129891399342,"sem":2.5434814419199806e-12,"variance":6.339911888483516e-22}},{"name":"Empty.prototype","hz":1428724.8454566433,"cycles":3,"stats":{"deviation":6.288774007134127e-8,"mean":6.9992483379848e-7,"moe":1.47323843174918e-8,"rme":2.1048523507216346,"sem":7.516522610965204e-9,"variance":3.9548678512805815e-15}},{"name":"Empty class","hz":989923.2681118546,"cycles":6,"stats":{"deviation":1.0128329589002468e-7,"mean":0.0000010101793060257746,"moe":2.1406451003011323e-8,"rme":2.1190743935577254,"sem":1.0921658675005777e-8,"variance":1.025830602634629e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|762,499,066|87|
|Using optional chain (obj.field?.field2) (undefined)|762,518,368|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|774,204,544|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|778,052,312|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":762499066.4209808,"cycles":6,"stats":{"deviation":5.508097728346813e-11,"mean":1.3114770155638373e-9,"moe":1.1574389210637513e-11,"rme":0.8825460967504176,"sem":5.9053006176722e-12,"variance":3.033914058501932e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":762518367.7860674,"cycles":8,"stats":{"deviation":6.395204802304401e-11,"mean":1.3114438185973778e-9,"moe":1.328665092399235e-11,"rme":1.0131315375905892,"sem":6.778903532649158e-12,"variance":4.0898644463417275e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":774204543.703185,"cycles":6,"stats":{"deviation":5.2957295305947277e-11,"mean":1.2916483223112944e-9,"moe":1.094109056341054e-11,"rme":0.8470642027260481,"sem":5.582189062964562e-12,"variance":2.8044751261213054e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":778052311.7397103,"cycles":6,"stats":{"deviation":6.773538679283853e-11,"mean":1.2852606243968594e-9,"moe":1.4233511617606968e-11,"rme":1.1074416618253127,"sem":7.261995723268861e-12,"variance":4.588082623975444e-21}}]}-->
