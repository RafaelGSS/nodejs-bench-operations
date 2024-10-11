## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|107,211,881|53614078|
|Using dot notation|71,891,852|35947831|
|Using define property (writable)|4,261,840|2131061|
|Using define property initialized (writable)|5,577,955|2789241|
|Using define property (getter)|2,084,680|1050459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":107211881.66521075,"samples":53614078},{"name":"Using dot notation","opsSec":71891852.16318646,"samples":35947831},{"name":"Using define property (writable)","opsSec":4261840.471342144,"samples":2131061},{"name":"Using define property initialized (writable)","opsSec":5577955.797961843,"samples":2789241},{"name":"Using define property (getter)","opsSec":2084680.6434443602,"samples":1050459}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.119ms
new Array(length)|100|0.013ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.266ms
new Array(length)|10,000|0.3ms
array.push|1,000,000|31.657ms
new Array(length)|1,000,000|8.834ms
array.push|100,000,000|1,845.662ms
new Array(length)|100,000,000|4,632.279ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.233ms
new Array(length)|10,000|0.262ms
array.push|1,000,000|23.858ms
new Array(length)|1,000,000|4.802ms
array.push|100,000,000|2,572.304ms
new Array(length)|100,000,000|4,251.93ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|242|122|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:02:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":242.62934702742913,"samples":122},{"name":"Array.from","opsSec":22.462568964719626,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,006|2007|
|new Blob (1024)|524|263|
|text (128)|4,455|2228|
|text (1024)|568|286|
|arrayBuffer (128)|4,496|2249|
|arrayBuffer (1024)|572|288|
|slice (0, 64)|61,192|35268|
|slice (0, 512)|25,052|12527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:02:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4006.52064328919,"samples":2007},{"name":"new Blob (1024)","opsSec":524.5387044086266,"samples":263},{"name":"text (128)","opsSec":4455.5763103374975,"samples":2228},{"name":"text (1024)","opsSec":568.7871964204242,"samples":286},{"name":"arrayBuffer (128)","opsSec":4496.79767321892,"samples":2249},{"name":"arrayBuffer (1024)","opsSec":572.1138753097595,"samples":288},{"name":"slice (0, 64)","opsSec":61192.72841540543,"samples":35268},{"name":"slice (0, 512)","opsSec":25052.506770386455,"samples":12527}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|384,035|192065|
|[True conditional] Using constructor name|321,645|160824|
|[True conditional] Check if property is valid then instanceof |313,081|156584|
|[False conditional] Using instanceof only|83,037,918|41518963|
|[False conditional] Using constructor name|83,478,370|41745158|
|[False conditional] Check if property is valid then instanceof |83,341,405|41672439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:04:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":384035.08035339956,"samples":192065},{"name":"[True conditional] Using constructor name","opsSec":321645.2943197842,"samples":160824},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313081.579465457,"samples":156584},{"name":"[False conditional] Using instanceof only","opsSec":83037918.85873897,"samples":41518963},{"name":"[False conditional] Using constructor name","opsSec":83478370.41215077,"samples":41745158},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":83341405.3303227,"samples":41672439}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,811|3407|
|crypto.verify('RSA-SHA256')|6,903|3452|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:06:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6811.685607204612,"samples":3407},{"name":"crypto.verify('RSA-SHA256')","opsSec":6903.013573166421,"samples":3452}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,399,936|699969|
|fromUnixToISOString(new Date())|1,981,541|990780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:06:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1399936.521667033,"samples":699969},{"name":"fromUnixToISOString(new Date())","opsSec":1981541.7658526707,"samples":990780}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,390|8696|
|Intl.DateTimeFormat().format(new Date())|17,292|8647|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,954|8978|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,785|8894|
|Reusing Intl.DateTimeFormat()|535,886|317872|
|Date.toLocaleDateString()|931,813|465907|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,009|10505|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:07:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17390.60871652146,"samples":8696},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17292.0869764178,"samples":8647},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17954.035864384507,"samples":8978},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17785.318898746653,"samples":8894},{"name":"Reusing Intl.DateTimeFormat()","opsSec":535886.5146004277,"samples":317872},{"name":"Date.toLocaleDateString()","opsSec":931813.4241393039,"samples":465907},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21009.4385017466,"samples":10505}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,013,482|507775|
|Using brackets {}|1,004,786|502684|
|Using '' + |1,028,296|514149|
|Using date.toString()|1,157,766|580571|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1013482.1963287591,"samples":507775},{"name":"Using brackets {}","opsSec":1004786.7449350695,"samples":502684},{"name":"Using '' + ","opsSec":1028296.4390460056,"samples":514149},{"name":"Using date.toString()","opsSec":1157766.2753999582,"samples":580571}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,587,161|1793827|
|Using delete property (proto: null)|15,227,659|7614951|
|Using delete property (cached proto: null)|3,473,850|1737326|
|Using undefined assignment|70,252,638|35126346|
|Using undefined assignment (proto: null)|16,604,679|8303977|
|Using undefined property (cached proto: null)|69,138,875|34569503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:11:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3587161.446861732,"samples":1793827},{"name":"Using delete property (proto: null)","opsSec":15227659.392146,"samples":7614951},{"name":"Using delete property (cached proto: null)","opsSec":3473850.499317396,"samples":1737326},{"name":"Using undefined assignment","opsSec":70252638.18647914,"samples":35126346},{"name":"Using undefined assignment (proto: null)","opsSec":16604679.391177265,"samples":8303977},{"name":"Using undefined property (cached proto: null)","opsSec":69138875.88063559,"samples":34569503}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|370,152|185320|
|NodeError|303,710|151860|
|NodeError Range|302,280|151146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:12:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":370152.09142373165,"samples":185320},{"name":"NodeError","opsSec":303710.67972666054,"samples":151860},{"name":"NodeError Range","opsSec":302280.65177977085,"samples":151146}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,818,866|914221|
|Function returning explicitly undefined|1,787,976|893989|
|Function returning implicitly undefined|1,586,654|793328|
|Function returning string|1,534,643|767347|
|Function returning integer|1,609,048|804529|
|Function returning float|1,592,236|796119|
|Function returning functions|1,653,573|826800|
|Function returning arrow functions|1,835,268|917752|
|Function returning empty object|1,890,572|945520|
|Function returning empty array|1,856,696|928356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:01:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1818866.0847651786,"samples":914221},{"name":"Function returning explicitly undefined","opsSec":1787976.2799668184,"samples":893989},{"name":"Function returning implicitly undefined","opsSec":1586654.69576984,"samples":793328},{"name":"Function returning string","opsSec":1534643.4918133975,"samples":767347},{"name":"Function returning integer","opsSec":1609048.8638205512,"samples":804529},{"name":"Function returning float","opsSec":1592236.2867537555,"samples":796119},{"name":"Function returning functions","opsSec":1653573.8603044164,"samples":826800},{"name":"Function returning arrow functions","opsSec":1835268.8433325663,"samples":917752},{"name":"Function returning empty object","opsSec":1890572.38204588,"samples":945520},{"name":"Function returning empty array","opsSec":1856696.3331963404,"samples":928356}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,490,263|42745152|
|using Array.includes (first item)|85,517,913|42759058|
|Using raw comparison|95,899,162|47949585|
|Using raw comparison (first item)|97,935,148|48985764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":85490263.64859556,"samples":42745152},{"name":"using Array.includes (first item)","opsSec":85517913.49358083,"samples":42759058},{"name":"Using raw comparison","opsSec":95899162.51986532,"samples":47949585},{"name":"Using raw comparison (first item)","opsSec":97935148.81375135,"samples":48985764}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,065,208|23033939|
|Using Object.getOwnPropertyNames()|40,463,425|20233051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:06:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":46065208.5211662,"samples":23033939},{"name":"Using Object.getOwnPropertyNames()","opsSec":40463425.50625646,"samples":20233051}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|130,176,870|65088460|
|Length = 10_000 - Array.at|72,473,806|36236907|
|Length = 1_000_000 - Array.at|95,050,145|47525447|
|Length = 100 - Array[length - 1]|95,983,924|47991967|
|Length = 10_000 - Array[length - 1]|95,937,795|47968903|
|Length = 1_000_000 - Array[length - 1]|94,047,970|47024658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":130176870.79314284,"samples":65088460},{"name":"Length = 10_000 - Array.at","opsSec":72473806.46272413,"samples":36236907},{"name":"Length = 1_000_000 - Array.at","opsSec":95050145.95535134,"samples":47525447},{"name":"Length = 100 - Array[length - 1]","opsSec":95983924.5935754,"samples":47991967},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95937795.63871807,"samples":47968903},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":94047970.54973333,"samples":47024658}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,724,834|64862437|
|~ (small)|68,045,344|34024309|
|Math.floor (long)|57,491,337|28770981|
|~ (long)|68,541,345|34270684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":129724834.04475112,"samples":64862437},{"name":"~ (small)","opsSec":68045344.61065216,"samples":34024309},{"name":"Math.floor (long)","opsSec":57491337.313032955,"samples":28770981},{"name":"~ (long)","opsSec":68541345.38135603,"samples":34270684}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,079,426|21041559|
|Object.create({})|1,857,698|934974|
|Cached Empty.prototype|75,856,869|37930164|
|Empty.prototype|2,080,244|1040291|
|Empty class|1,381,382|694240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42079426.28777292,"samples":21041559},{"name":"Object.create({})","opsSec":1857698.938807358,"samples":934974},{"name":"Cached Empty.prototype","opsSec":75856869.53360422,"samples":37930164},{"name":"Empty.prototype","opsSec":2080244.7257621225,"samples":1040291},{"name":"Empty class","opsSec":1381382.2590340378,"samples":694240}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|134,703,063|67351554|
|Using optional chain (obj.field?.field2) (undefined)|95,111,443|47558540|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,335,284|48667736|
|Using and operator (obj.field && obj.field.field2) (undefined)|96,127,870|48071092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":134703063.278583,"samples":67351554},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95111443.12521173,"samples":47558540},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97335284.72691219,"samples":48667736},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":96127870.75230072,"samples":48071092}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,841,294|66938038|
|Using parseInt(x, 10) - big number (10 len)|97,431,048|48715525|
|Using + - small number (2 len)|94,518,863|47259433|
|Using + - big number (10 len)|97,921,898|48960954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:16:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133841294.39514294,"samples":66938038},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97431048.24624114,"samples":48715525},{"name":"Using + - small number (2 len)","opsSec":94518863.35347182,"samples":47259433},{"name":"Using + - big number (10 len)","opsSec":97921898.0119664,"samples":48960954}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,024,713|517062|
|Using ? operator to avoid rejection|1,092,335|546662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:19:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":1024713.1979441922,"samples":517062},{"name":"Using ? operator to avoid rejection","opsSec":1092335.1090257987,"samples":546662}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|116,729,977|58478965|
|Raw usage underscore usage|73,241,314|36994093|
|Manipulating private properties using #|84,782,349|42395301|
|Manipulating private properties using underscore(_)|88,162,998|44081505|
|Manipulating private properties using Symbol|93,204,504|46608695|
|Manipulating private properties using PrivateSymbol|34,641,715|17320862|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:21:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":116729977.83161078,"samples":58478965},{"name":"Raw usage underscore usage","opsSec":73241314.72426552,"samples":36994093},{"name":"Manipulating private properties using #","opsSec":84782349.1165723,"samples":42395301},{"name":"Manipulating private properties using underscore(_)","opsSec":88162998.18615824,"samples":44081505},{"name":"Manipulating private properties using Symbol","opsSec":93204504.10448955,"samples":46608695},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34641715.68598823,"samples":17320862}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,452,403|3726205|
|Adding property in the object creation - small object|7,317,635|3658820|
|Adding property after the function creation - small class|234,322|118237|
|Adding property in the function creation - small class|243,098|122681|
|Adding property after the class creation - small class|239,387|121434|
|Adding property in the class creation - small class|240,724|121955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7452403.337551416,"samples":3726205},{"name":"Adding property in the object creation - small object","opsSec":7317635.155725528,"samples":3658820},{"name":"Adding property after the function creation - small class","opsSec":234322.6746200517,"samples":118237},{"name":"Adding property in the function creation - small class","opsSec":243098.18702900235,"samples":122681},{"name":"Adding property after the class creation - small class","opsSec":239387.46048999997,"samples":121434},{"name":"Adding property in the class creation - small class","opsSec":240724.4086834512,"samples":121955}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,183,713|72591877|
|Getter|51,134,945|25570376|
|Method|95,823,917|47911977|
|DefineProperty (getter)|100,380,646|50190381|
|DefineProperty (getter & enumerable=false)|52,216,650|26108332|
|DefineProperty (getter & configurable=false)|99,826,900|49913454|
|DefineProperty (getter & enumerable=false & configurable=false)|48,471,630|24241129|
|DefineProperty (writable)|99,487,560|49767008|
|DefineProperty (writable & enumerable=false)|99,779,928|49913027|
|DefineProperty (writable & enumerable=false & configurable=false)|99,129,612|49564856|
|DefineProperties (getter)|49,949,560|25021948|
|DefineProperties (getter & enumerable=false)|46,676,259|23347629|
|DefineProperties (getter & enumerable=false & configurable=false)|51,553,226|25776618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:48:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":145183713.34856024,"samples":72591877},{"name":"Getter","opsSec":51134945.52466579,"samples":25570376},{"name":"Method","opsSec":95823917.97020684,"samples":47911977},{"name":"DefineProperty (getter)","opsSec":100380646.96377859,"samples":50190381},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52216650.736970715,"samples":26108332},{"name":"DefineProperty (getter & configurable=false)","opsSec":99826900.013848,"samples":49913454},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48471630.69191406,"samples":24241129},{"name":"DefineProperty (writable)","opsSec":99487560.2837255,"samples":49767008},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99779928.93181255,"samples":49913027},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99129612.07735103,"samples":49564856},{"name":"DefineProperties (getter)","opsSec":49949560.460920535,"samples":25021948},{"name":"DefineProperties (getter & enumerable=false)","opsSec":46676259.548780896,"samples":23347629},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51553226.10178059,"samples":25776618}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|136,142,803|68091200|
|Setter|10,341,679|5170895|
|Method|96,024,461|48054066|
|DefineProperty (setter)|100,408,338|50204227|
|DefineProperty (setter & enumerable=false)|10,465,713|5234087|
|DefineProperty (setter & configurable=false)|10,368,446|5184226|
|DefineProperty (setter & enumerable=false & configurable=false)|10,393,520|5197371|
|DefineProperty (writable)|100,554,897|50293160|
|DefineProperty (writable & enumerable=false)|101,668,137|50834088|
|DefineProperty (writable & enumerable=false & configurable=false)|83,982,667|42000401|
|DefineProperties (setter)|94,435,574|47217791|
|DefineProperties (setter & enumerable=false)|10,225,511|5112758|
|DefineProperties (setter & enumerable=false & configurable=false)|10,223,619|5111919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:57:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":136142803.41019937,"samples":68091200},{"name":"Setter","opsSec":10341679.923158897,"samples":5170895},{"name":"Method","opsSec":96024461.66147803,"samples":48054066},{"name":"DefineProperty (setter)","opsSec":100408338.93204358,"samples":50204227},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10465713.531680128,"samples":5234087},{"name":"DefineProperty (setter & configurable=false)","opsSec":10368446.235143892,"samples":5184226},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10393520.740525948,"samples":5197371},{"name":"DefineProperty (writable)","opsSec":100554897.399002,"samples":50293160},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101668137.97611639,"samples":50834088},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":83982667.11879304,"samples":42000401},{"name":"DefineProperties (setter)","opsSec":94435574.06741177,"samples":47217791},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10225511.05085265,"samples":5112758},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10223619.337229615,"samples":5111919}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,424,791|1712628|
|Using replaceAll()|2,934,544|1467298|
|Using replaceAll(//g)|3,059,126|1532614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3424791.7009890964,"samples":1712628},{"name":"Using replaceAll()","opsSec":2934544.2757225963,"samples":1467298},{"name":"Using replaceAll(//g)","opsSec":3059126.1324147354,"samples":1532614}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,541,482|10772814|
|{ ...object, __proto__: null }|19,519,799|9761047|
|{ ...object, newProp: true }|814,162|409215|
|structuredClone|282,658|141332|
|JSON.parse + JSON.stringify|191,217|95612|
|loop + object.keys starting with {}|1,523,367|761711|
|loop + object.keys starting with { __proto__: null }|809,245|404642|
|loop + object.keys starting with { randomProp: true }|596,616|298492|
|object.keys + reduce(FN, {})|1,571,024|785517|
|object.keys + reduce(FN, { __proto__: null })|841,401|422333|
|object.keys + reduce(FN, { newProp: true })|622,166|311844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:23:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":21541482.772470094,"samples":10772814},{"name":"{ ...object, __proto__: null }","opsSec":19519799.057224844,"samples":9761047},{"name":"{ ...object, newProp: true }","opsSec":814162.2980130814,"samples":409215},{"name":"structuredClone","opsSec":282658.74141677463,"samples":141332},{"name":"JSON.parse + JSON.stringify","opsSec":191217.77127231858,"samples":95612},{"name":"loop + object.keys starting with {}","opsSec":1523367.012544315,"samples":761711},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809245.4232706727,"samples":404642},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":596616.4389307692,"samples":298492},{"name":"object.keys + reduce(FN, {})","opsSec":1571024.1905249546,"samples":785517},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":841401.8639262808,"samples":422333},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":622166.5923892999,"samples":311844}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|222,156|111225|
|Sort using first char|1,182,976|597375|
|Sort using localeCompare|986,545|493273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:25:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Sort using default","opsSec":222156.18467208772,"samples":111225},{"name":"Sort using first char","opsSec":1182976.3357463304,"samples":597375},{"name":"Sort using localeCompare","opsSec":986545.9052915932,"samples":493273}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|52,148,059|26074734|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,069|535|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,464|3233|
|{ ...bigObject, ...anotherBigObject }|1,160|581|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,878,431|6439350|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,175,390|13087698|
|{ ...smallObject, ...anotherSmallObject }|20,893,017|10446530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:29:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.2426991866848,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":52148059.79379332,"samples":26074734},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1069.3795395748614,"samples":535},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6464.486172486072,"samples":3233},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1160.686629686924,"samples":581},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12878431.278652938,"samples":6439350},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26175390.55551877,"samples":13087698},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20893017.3364586,"samples":10446530}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,795|906|
|streams.web.Readable reading 1e3 * "some data"|1,542|772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:31:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1795.1879819702017,"samples":906},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1542.1067986622727,"samples":772}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,071|2537|
|streams.web.WritableStream writing 1e3 * "some data"|920|469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:33:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5071.882712130524,"samples":2537},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":920.6577992009024,"samples":469}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|141,367,847|70683942|
|Using backtick (`)|92,101,648|46050853|
|Using array.join|9,544,928|4822027|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":141367847.24435973,"samples":70683942},{"name":"Using backtick (`)","opsSec":92101648.52857132,"samples":46050853},{"name":"Using array.join","opsSec":9544928.58040252,"samples":4822027}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|59,369,773|29710910|
|(short string) (true) String#slice and strict comparison|60,900,331|30450174|
|(long string) (true) String#endsWith|48,865,923|24433881|
|(long string) (true) String#slice and strict comparison|56,287,612|28146214|
|(short string) (false) String#endsWith|57,220,139|28610389|
|(short string) (false) String#slice and strict comparison|59,781,098|29891555|
|(long string) (false) String#endsWith|52,659,298|26329755|
|(long string) (false) String#slice and strict comparison|55,678,846|27841686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":59369773.25080059,"samples":29710910},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60900331.43510985,"samples":30450174},{"name":"(long string) (true) String#endsWith","opsSec":48865923.56622359,"samples":24433881},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56287612.81987371,"samples":28146214},{"name":"(short string) (false) String#endsWith","opsSec":57220139.76656104,"samples":28610389},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59781098.485598154,"samples":29891555},{"name":"(long string) (false) String#endsWith","opsSec":52659298.204302624,"samples":26329755},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55678846.312014066,"samples":27841686}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|116,200,048|58101217|
|Using indexof|16,108,476|8054774|
|Using RegExp.test|13,240,903|6621554|
|Using RegExp.text with cached regex pattern|14,233,280|7116643|
|Using new RegExp.test|4,366,782|2183392|
|Using new RegExp.test with cached regex pattern|5,291,667|2645907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":116200048.87779674,"samples":58101217},{"name":"Using indexof","opsSec":16108476.01313828,"samples":8054774},{"name":"Using RegExp.test","opsSec":13240903.177766452,"samples":6621554},{"name":"Using RegExp.text with cached regex pattern","opsSec":14233280.904485434,"samples":7116643},{"name":"Using new RegExp.test","opsSec":4366782.017480964,"samples":2183392},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5291667.791218929,"samples":2645907}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,533,273|42938296|
|(short string) (true) String#slice and strict comparison|26,898,094|13456901|
|(long string) (true) String#startsWith|41,342,476|20728037|
|(long string) (true) String#slice and strict comparison|43,818,676|21913218|
|(short string) (false) String#startsWith|57,229,141|28657121|
|(short string) (false) String#slice and strict comparison|47,559,096|24176356|
|(long string) (false) String#startsWith|73,051,235|36526299|
|(long string) (false) String#slice and strict comparison|47,243,288|23667421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:41:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":85533273.41516979,"samples":42938296},{"name":"(short string) (true) String#slice and strict comparison","opsSec":26898094.104800865,"samples":13456901},{"name":"(long string) (true) String#startsWith","opsSec":41342476.203232,"samples":20728037},{"name":"(long string) (true) String#slice and strict comparison","opsSec":43818676.501127824,"samples":21913218},{"name":"(short string) (false) String#startsWith","opsSec":57229141.92258626,"samples":28657121},{"name":"(short string) (false) String#slice and strict comparison","opsSec":47559096.96346208,"samples":24176356},{"name":"(long string) (false) String#startsWith","opsSec":73051235.74055591,"samples":36526299},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47243288.192459494,"samples":23667421}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|76,137,298|38108131|
|Using this|51,271,831|25635969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:44:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":76137298.33287841,"samples":38108131},{"name":"Using this","opsSec":51271831.55967769,"samples":25635969}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,104,062|3552034|
|Date.now()|13,735,354|6872011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:45:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7104062.061004118,"samples":3552034},{"name":"Date.now()","opsSec":13735354.496839734,"samples":6872011}]}-->
