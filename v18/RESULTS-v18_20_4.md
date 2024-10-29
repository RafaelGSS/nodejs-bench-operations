## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,901,731|58453830|
|Using dot notation|74,760,492|37576596|
|Using define property (writable)|3,743,952|1872162|
|Using define property initialized (writable)|5,564,682|2782369|
|Using define property (getter)|2,091,801|1051458|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":116901731.67938308,"samples":58453830},{"name":"Using dot notation","opsSec":74760492.7749296,"samples":37576596},{"name":"Using define property (writable)","opsSec":3743952.045852149,"samples":1872162},{"name":"Using define property initialized (writable)","opsSec":5564682.698183346,"samples":2782369},{"name":"Using define property (getter)","opsSec":2091801.522198424,"samples":1051458}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.358ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|27.225ms
new Array(length)|1,000,000|8.08ms
array.push|100,000,000|1,930.366ms
new Array(length)|100,000,000|4,026.761ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.45ms
new Array(length)|10,000|3.263ms
array.push|1,000,000|250.224ms
new Array(length)|1,000,000|4.544ms
array.push|100,000,000|2,303.42ms
new Array(length)|100,000,000|4,365.673ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:56:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":254.9255063257713,"samples":128},{"name":"Array.from","opsSec":21.218884728705774,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,296|2149|
|new Blob (1024)|571|289|
|text (128)|48,218|24110|
|text (1024)|33,423|16716|
|arrayBuffer (128)|50,444|25223|
|arrayBuffer (1024)|30,535|15268|
|slice (0, 64)|76,395|38596|
|slice (0, 512)|30,884|15443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:02:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4296.595348455492,"samples":2149},{"name":"new Blob (1024)","opsSec":571.9597470246184,"samples":289},{"name":"text (128)","opsSec":48218.76839621762,"samples":24110},{"name":"text (1024)","opsSec":33423.897779786996,"samples":16716},{"name":"arrayBuffer (128)","opsSec":50444.01825629878,"samples":25223},{"name":"arrayBuffer (1024)","opsSec":30535.564196427786,"samples":15268},{"name":"slice (0, 64)","opsSec":76395.06849445542,"samples":38596},{"name":"slice (0, 512)","opsSec":30884.76547415447,"samples":15443}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|397,918|199393|
|[True conditional] Using constructor name|313,132|156709|
|[True conditional] Check if property is valid then instanceof |313,455|156732|
|[False conditional] Using instanceof only|44,431,341|22215679|
|[False conditional] Using constructor name|106,580,424|53294995|
|[False conditional] Check if property is valid then instanceof |106,633,487|53318170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:07:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":397918.6670273658,"samples":199393},{"name":"[True conditional] Using constructor name","opsSec":313132.65911691036,"samples":156709},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313455.86832786386,"samples":156732},{"name":"[False conditional] Using instanceof only","opsSec":44431341.47154098,"samples":22215679},{"name":"[False conditional] Using constructor name","opsSec":106580424.40690947,"samples":53294995},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":106633487.12768538,"samples":53318170}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,705|3353|
|crypto.verify('RSA-SHA256')|6,816|3409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:13:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6705.198541028788,"samples":3353},{"name":"crypto.verify('RSA-SHA256')","opsSec":6816.210390329598,"samples":3409}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,612,094|1306368|
|fromUnixToISOString(new Date())|2,166,493|1083400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2612094.3755859584,"samples":1306368},{"name":"fromUnixToISOString(new Date())","opsSec":2166493.8917450476,"samples":1083400}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,463|8733|
|Intl.DateTimeFormat().format(new Date())|16,999|8688|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,452|9227|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,111|9057|
|Reusing Intl.DateTimeFormat()|436,878|277606|
|Date.toLocaleDateString()|766,003|383004|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,894|10448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:24:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17463.803123422284,"samples":8733},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16999.505458793024,"samples":8688},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18452.027441362465,"samples":9227},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18111.073286779003,"samples":9057},{"name":"Reusing Intl.DateTimeFormat()","opsSec":436878.3471352039,"samples":277606},{"name":"Date.toLocaleDateString()","opsSec":766003.842131145,"samples":383004},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20894.129097892317,"samples":10448}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|967,173|484497|
|Using brackets {}|995,158|497580|
|Using '' + |982,123|491148|
|Using date.toString()|1,115,203|557668|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":967173.0336930077,"samples":484497},{"name":"Using brackets {}","opsSec":995158.1947830346,"samples":497580},{"name":"Using '' + ","opsSec":982123.7688831461,"samples":491148},{"name":"Using date.toString()","opsSec":1115203.7145353816,"samples":557668}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,304,540|1652296|
|Using delete property (proto: null)|17,223,447|8612736|
|Using delete property (cached proto: null)|3,320,563|1660426|
|Using undefined assignment|81,586,723|40794271|
|Using undefined assignment (proto: null)|18,959,825|9480808|
|Using undefined property (cached proto: null)|81,248,447|40624226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:36:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3304540.217854786,"samples":1652296},{"name":"Using delete property (proto: null)","opsSec":17223447.969288442,"samples":8612736},{"name":"Using delete property (cached proto: null)","opsSec":3320563.8680320433,"samples":1660426},{"name":"Using undefined assignment","opsSec":81586723.4319347,"samples":40794271},{"name":"Using undefined assignment (proto: null)","opsSec":18959825.813246716,"samples":9480808},{"name":"Using undefined property (cached proto: null)","opsSec":81248447.12509316,"samples":40624226}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|380,995|190880|
|NodeError|298,123|149127|
|NodeError Range|305,191|152596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:42:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":380995.5431106238,"samples":190880},{"name":"NodeError","opsSec":298123.28784444457,"samples":149127},{"name":"NodeError Range","opsSec":305191.6978602191,"samples":152596}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,811,203|905924|
|Function returning explicitly undefined|1,784,775|893213|
|Function returning implicitly undefined|1,832,402|916294|
|Function returning string|1,827,705|913877|
|Function returning integer|1,867,870|933936|
|Function returning float|1,847,745|924136|
|Function returning functions|1,785,991|893079|
|Function returning arrow functions|1,828,574|914480|
|Function returning empty object|1,850,883|925443|
|Function returning empty array|1,859,734|929969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1811203.6461908312,"samples":905924},{"name":"Function returning explicitly undefined","opsSec":1784775.9282501587,"samples":893213},{"name":"Function returning implicitly undefined","opsSec":1832402.7404181384,"samples":916294},{"name":"Function returning string","opsSec":1827705.766844813,"samples":913877},{"name":"Function returning integer","opsSec":1867870.539325238,"samples":933936},{"name":"Function returning float","opsSec":1847745.451674127,"samples":924136},{"name":"Function returning functions","opsSec":1785991.842034968,"samples":893079},{"name":"Function returning arrow functions","opsSec":1828574.8253416403,"samples":914480},{"name":"Function returning empty object","opsSec":1850883.734518309,"samples":925443},{"name":"Function returning empty array","opsSec":1859734.5227263994,"samples":929969}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,079,528|46046627|
|using Array.includes (first item)|85,065,128|42659254|
|Using raw comparison|103,394,962|51703142|
|Using raw comparison (first item)|106,518,331|53260569|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":92079528.07306825,"samples":46046627},{"name":"using Array.includes (first item)","opsSec":85065128.24536118,"samples":42659254},{"name":"Using raw comparison","opsSec":103394962.04486617,"samples":51703142},{"name":"Using raw comparison (first item)","opsSec":106518331.24197178,"samples":53260569}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,753,988|26384274|
|Using Object.getOwnPropertyNames()|45,554,028|22781056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:07:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":52753988.74317071,"samples":26384274},{"name":"Using Object.getOwnPropertyNames()","opsSec":45554028.437653735,"samples":22781056}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,809,617|10411301|
|Length = 10_000 - Array.at|19,728,733|9864370|
|Length = 1_000_000 - Array.at|21,448,984|10725492|
|Length = 100 - Array[length - 1]|101,700,720|50850374|
|Length = 10_000 - Array[length - 1]|101,090,654|50799685|
|Length = 1_000_000 - Array[length - 1]|62,115,886|31083079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":20809617.96372924,"samples":10411301},{"name":"Length = 10_000 - Array.at","opsSec":19728733.213315774,"samples":9864370},{"name":"Length = 1_000_000 - Array.at","opsSec":21448984.740132373,"samples":10725492},{"name":"Length = 100 - Array[length - 1]","opsSec":101700720.54080546,"samples":50850374},{"name":"Length = 10_000 - Array[length - 1]","opsSec":101090654.33074969,"samples":50799685},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":62115886.49497367,"samples":31083079}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|116,227,602|59129730|
|~ (small)|85,835,048|42963093|
|Math.floor (long)|93,191,734|46712852|
|~ (long)|85,571,303|42989735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:10:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":116227602.98310935,"samples":59129730},{"name":"~ (small)","opsSec":85835048.23415604,"samples":42963093},{"name":"Math.floor (long)","opsSec":93191734.96635877,"samples":46712852},{"name":"~ (long)","opsSec":85571303.78038317,"samples":42989735}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|45,856,622|22932835|
|Object.create({})|1,229,570|624222|
|Cached Empty.prototype|107,491,739|53746631|
|Empty.prototype|1,424,650|713765|
|Empty class|874,420|447851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:12:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":45856622.85516366,"samples":22932835},{"name":"Object.create({})","opsSec":1229570.2249227392,"samples":624222},{"name":"Cached Empty.prototype","opsSec":107491739.05704103,"samples":53746631},{"name":"Empty.prototype","opsSec":1424650.868922262,"samples":713765},{"name":"Empty class","opsSec":874420.5144135769,"samples":447851}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|158,021,741|79012192|
|Using optional chain (obj.field?.field2) (undefined)|105,416,527|52708276|
|Using and operator (obj.field && obj.field.field2) (Valid)|106,848,624|53425015|
|Using and operator (obj.field && obj.field.field2) (undefined)|106,257,646|53128834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:14:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":158021741.24439943,"samples":79012192},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":105416527.3325326,"samples":52708276},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":106848624.08580428,"samples":53425015},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":106257646.96098591,"samples":53128834}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,942,802|64471424|
|Using parseInt(x, 10) - big number (10 len)|17,116,017|8561862|
|Using + - small number (2 len)|102,966,605|51483311|
|Using + - big number (10 len)|105,692,256|52846140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128942802.61213347,"samples":64471424},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17116017.68419787,"samples":8561862},{"name":"Using + - small number (2 len)","opsSec":102966605.7312763,"samples":51483311},{"name":"Using + - big number (10 len)","opsSec":105692256.95908798,"samples":52846140}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|523,538|263772|
|Using ? operator to avoid rejection|597,993|299076|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:19:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":523538.0751228669,"samples":263772},{"name":"Using ? operator to avoid rejection","opsSec":597993.7624785355,"samples":299076}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|91,919,360|46033894|
|Raw usage underscore usage|68,853,684|34507700|
|Manipulating private properties using #|67,505,228|33753063|
|Manipulating private properties using underscore(_)|68,778,025|35082027|
|Manipulating private properties using Symbol|65,270,976|32642032|
|Manipulating private properties using PrivateSymbol|30,472,090|15432719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:21:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":91919360.29377203,"samples":46033894},{"name":"Raw usage underscore usage","opsSec":68853684.59036893,"samples":34507700},{"name":"Manipulating private properties using #","opsSec":67505228.99051718,"samples":33753063},{"name":"Manipulating private properties using underscore(_)","opsSec":68778025.47502226,"samples":35082027},{"name":"Manipulating private properties using Symbol","opsSec":65270976.77753024,"samples":32642032},{"name":"Manipulating private properties using PrivateSymbol","opsSec":30472090.783502422,"samples":15432719}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,763,041|1881523|
|Adding property in the object creation - small object|3,707,293|1853980|
|Adding property after the function creation - small class|184,101|92758|
|Adding property in the function creation - small class|187,011|93650|
|Adding property after the class creation - small class|161,179|80730|
|Adding property in the class creation - small class|159,922|79974|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3763041.6875542263,"samples":1881523},{"name":"Adding property in the object creation - small object","opsSec":3707293.0060861027,"samples":1853980},{"name":"Adding property after the function creation - small class","opsSec":184101.4809407899,"samples":92758},{"name":"Adding property in the function creation - small class","opsSec":187011.37449907587,"samples":93650},{"name":"Adding property after the class creation - small class","opsSec":161179.62996782653,"samples":80730},{"name":"Adding property in the class creation - small class","opsSec":159922.39482536452,"samples":79974}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|161,197,690|80598912|
|Getter|53,549,195|26776953|
|Method|105,588,211|52794116|
|DefineProperty (getter)|106,923,828|53461927|
|DefineProperty (getter & enumerable=false)|55,774,980|27887498|
|DefineProperty (getter & configurable=false)|106,762,504|53383453|
|DefineProperty (getter & enumerable=false & configurable=false)|55,636,011|27821143|
|DefineProperty (writable)|106,935,784|53471429|
|DefineProperty (writable & enumerable=false)|107,011,386|53505702|
|DefineProperty (writable & enumerable=false & configurable=false)|106,952,578|53483600|
|DefineProperties (getter)|55,673,582|27836867|
|DefineProperties (getter & enumerable=false)|54,615,743|27307879|
|DefineProperties (getter & enumerable=false & configurable=false)|51,437,133|25718573|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":161197690.85070735,"samples":80598912},{"name":"Getter","opsSec":53549195.4914694,"samples":26776953},{"name":"Method","opsSec":105588211.0935342,"samples":52794116},{"name":"DefineProperty (getter)","opsSec":106923828.5521288,"samples":53461927},{"name":"DefineProperty (getter & enumerable=false)","opsSec":55774980.159905635,"samples":27887498},{"name":"DefineProperty (getter & configurable=false)","opsSec":106762504.8225012,"samples":53383453},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":55636011.926934995,"samples":27821143},{"name":"DefineProperty (writable)","opsSec":106935784.62559016,"samples":53471429},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107011386.45013262,"samples":53505702},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":106952578.51299149,"samples":53483600},{"name":"DefineProperties (getter)","opsSec":55673582.01112111,"samples":27836867},{"name":"DefineProperties (getter & enumerable=false)","opsSec":54615743.58144369,"samples":27307879},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51437133.44933944,"samples":25718573}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,838,997|76919579|
|Setter|10,318,916|5159513|
|Method|102,619,664|51319807|
|DefineProperty (setter)|104,571,518|52290823|
|DefineProperty (setter & enumerable=false)|10,502,737|5251372|
|DefineProperty (setter & configurable=false)|10,409,619|5204890|
|DefineProperty (setter & enumerable=false & configurable=false)|10,604,530|5302463|
|DefineProperty (writable)|98,836,972|49574393|
|DefineProperty (writable & enumerable=false)|97,762,668|48883644|
|DefineProperty (writable & enumerable=false & configurable=false)|98,450,815|49228257|
|DefineProperties (setter)|94,869,587|47434798|
|DefineProperties (setter & enumerable=false)|9,964,653|4982336|
|DefineProperties (setter & enumerable=false & configurable=false)|10,326,024|5163481|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:58:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":153838997.08440906,"samples":76919579},{"name":"Setter","opsSec":10318916.392470079,"samples":5159513},{"name":"Method","opsSec":102619664.32677622,"samples":51319807},{"name":"DefineProperty (setter)","opsSec":104571518.03933486,"samples":52290823},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10502737.488302758,"samples":5251372},{"name":"DefineProperty (setter & configurable=false)","opsSec":10409619.60858107,"samples":5204890},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10604530.196514945,"samples":5302463},{"name":"DefineProperty (writable)","opsSec":98836972.15513583,"samples":49574393},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97762668.51838715,"samples":48883644},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98450815.27300873,"samples":49228257},{"name":"DefineProperties (setter)","opsSec":94869587.27199796,"samples":47434798},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9964653.645107985,"samples":4982336},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10326024.58283632,"samples":5163481}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,371,729|1686050|
|Using replaceAll()|2,925,064|1462645|
|Using replaceAll(//g)|3,027,770|1514072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:05:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3371729.3862493224,"samples":1686050},{"name":"Using replaceAll()","opsSec":2925064.740764314,"samples":1462645},{"name":"Using replaceAll(//g)","opsSec":3027770.306533227,"samples":1514072}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,561,807|10782758|
|{ ...object, __proto__: null }|19,781,542|9892436|
|{ ...object, newProp: true }|601,395|305153|
|structuredClone|252,558|126280|
|JSON.parse + JSON.stringify|199,689|99914|
|loop + object.keys starting with {}|1,288,532|644267|
|loop + object.keys starting with { __proto__: null }|756,165|378092|
|loop + object.keys starting with { randomProp: true }|533,401|266701|
|object.keys + reduce(FN, {})|1,315,521|657840|
|object.keys + reduce(FN, { __proto__: null })|789,206|394660|
|object.keys + reduce(FN, { newProp: true })|545,604|272875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":21561807.239783917,"samples":10782758},{"name":"{ ...object, __proto__: null }","opsSec":19781542.64768314,"samples":9892436},{"name":"{ ...object, newProp: true }","opsSec":601395.9023381048,"samples":305153},{"name":"structuredClone","opsSec":252558.7649876392,"samples":126280},{"name":"JSON.parse + JSON.stringify","opsSec":199689.98746020667,"samples":99914},{"name":"loop + object.keys starting with {}","opsSec":1288532.7140443514,"samples":644267},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":756165.661470378,"samples":378092},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":533401.5540763008,"samples":266701},{"name":"object.keys + reduce(FN, {})","opsSec":1315521.821656164,"samples":657840},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":789206.6809695063,"samples":394660},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":545604.0389163011,"samples":272875}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|198,057|99029|
|Sort using first char|1,005,511|503509|
|Sort using localeCompare|984,473|492611|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:26:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Sort using default","opsSec":198057.6577563674,"samples":99029},{"name":"Sort using first char","opsSec":1005511.6289515048,"samples":503509},{"name":"Sort using localeCompare","opsSec":984473.0286713553,"samples":492611}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,889|945|
|{...smallObject} - Total keys: 2|55,317,885|27659719|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,084|543|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,269|3135|
|{ ...bigObject, ...anotherBigObject }|1,180|591|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,447,778|6223945|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,183,549|13592794|
|{ ...smallObject, ...anotherSmallObject }|20,008,411|10008033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:28:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1889.7611493088164,"samples":945},{"name":"{...smallObject} - Total keys: 2","opsSec":55317885.89075767,"samples":27659719},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1084.415690364691,"samples":543},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6269.822538942858,"samples":3135},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1180.8756717406764,"samples":591},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12447778.592381598,"samples":6223945},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27183549.66871164,"samples":13592794},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20008411.102046933,"samples":10008033}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,277|1139|
|streams.web.Readable reading 1e3 * "some data"|624|313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:30:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2277.060380142376,"samples":1139},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":624.155402331719,"samples":313}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,123|2062|
|streams.web.WritableStream writing 1e3 * "some data"|1,005|510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:33:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4123.276290791992,"samples":2062},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1005.1812104913647,"samples":510}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|158,772,311|79386181|
|Using backtick (`)|104,619,955|52310253|
|Using array.join|10,420,820|5210888|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":158772311.5104049,"samples":79386181},{"name":"Using backtick (`)","opsSec":104619955.90827183,"samples":52310253},{"name":"Using array.join","opsSec":10420820.077332666,"samples":5210888}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|61,873,916|30957415|
|(short string) (true) String#slice and strict comparison|50,613,437|25311164|
|(long string) (true) String#endsWith|50,056,527|25028272|
|(long string) (true) String#slice and strict comparison|44,735,699|22367862|
|(short string) (false) String#endsWith|57,637,746|28826061|
|(short string) (false) String#slice and strict comparison|59,446,264|29723134|
|(long string) (false) String#endsWith|54,326,819|27163726|
|(long string) (false) String#slice and strict comparison|51,886,201|25943104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":61873916.12046101,"samples":30957415},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50613437.74965927,"samples":25311164},{"name":"(long string) (true) String#endsWith","opsSec":50056527.48134593,"samples":25028272},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44735699.03747994,"samples":22367862},{"name":"(short string) (false) String#endsWith","opsSec":57637746.339134574,"samples":28826061},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59446264.19543909,"samples":29723134},{"name":"(long string) (false) String#endsWith","opsSec":54326819.52716706,"samples":27163726},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51886201.35856623,"samples":25943104}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|153,361,714|76680892|
|Using indexof|15,542,922|7802268|
|Using RegExp.test|13,428,306|6714491|
|Using RegExp.text with cached regex pattern|14,717,636|7358821|
|Using new RegExp.test|4,270,962|2135651|
|Using new RegExp.test with cached regex pattern|4,977,970|2489034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":153361714.06705838,"samples":76680892},{"name":"Using indexof","opsSec":15542922.394593127,"samples":7802268},{"name":"Using RegExp.test","opsSec":13428306.771022325,"samples":6714491},{"name":"Using RegExp.text with cached regex pattern","opsSec":14717636.112945555,"samples":7358821},{"name":"Using new RegExp.test","opsSec":4270962.057046032,"samples":2135651},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4977970.063416972,"samples":2489034}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|76,757,827|38380116|
|(short string) (true) String#slice and strict comparison|43,936,742|21968399|
|(long string) (true) String#startsWith|47,629,526|23814768|
|(long string) (true) String#slice and strict comparison|36,289,133|18154381|
|(short string) (false) String#startsWith|87,755,514|43877769|
|(short string) (false) String#slice and strict comparison|50,907,939|25469988|
|(long string) (false) String#startsWith|76,878,983|38439574|
|(long string) (false) String#slice and strict comparison|47,152,631|23579613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:41:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":76757827.17727453,"samples":38380116},{"name":"(short string) (true) String#slice and strict comparison","opsSec":43936742.02459066,"samples":21968399},{"name":"(long string) (true) String#startsWith","opsSec":47629526.569353744,"samples":23814768},{"name":"(long string) (true) String#slice and strict comparison","opsSec":36289133.93323819,"samples":18154381},{"name":"(short string) (false) String#startsWith","opsSec":87755514.83254407,"samples":43877769},{"name":"(short string) (false) String#slice and strict comparison","opsSec":50907939.73534043,"samples":25469988},{"name":"(long string) (false) String#startsWith","opsSec":76878983.01770245,"samples":38439574},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47152631.13870368,"samples":23579613}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|102,255,073|51130836|
|Using this|86,655,759|43413487|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:43:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":102255073.27561139,"samples":51130836},{"name":"Using this","opsSec":86655759.89622009,"samples":43413487}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,292,372|4146191|
|Date.now()|17,298,140|8676716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:46:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8292372.347678588,"samples":4146191},{"name":"Date.now()","opsSec":17298140.190100085,"samples":8676716}]}-->
