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
|Function returning null|1,833,021|917839|
|Function returning explicitly undefined|1,827,019|913580|
|Function returning implicitly undefined|1,606,006|803004|
|Function returning string|1,598,840|799432|
|Function returning integer|1,612,607|806405|
|Function returning float|1,600,448|800225|
|Function returning functions|1,693,164|846584|
|Function returning arrow functions|1,644,585|822701|
|Function returning empty object|1,866,582|933571|
|Function returning empty array|1,893,358|947401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:14:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1833021.0982408174,"samples":917839},{"name":"Function returning explicitly undefined","opsSec":1827019.3560499712,"samples":913580},{"name":"Function returning implicitly undefined","opsSec":1606006.0920647627,"samples":803004},{"name":"Function returning string","opsSec":1598840.3403606433,"samples":799432},{"name":"Function returning integer","opsSec":1612607.3726584108,"samples":806405},{"name":"Function returning float","opsSec":1600448.8572795158,"samples":800225},{"name":"Function returning functions","opsSec":1693164.5798075488,"samples":846584},{"name":"Function returning arrow functions","opsSec":1644585.3285283886,"samples":822701},{"name":"Function returning empty object","opsSec":1866582.3612764422,"samples":933571},{"name":"Function returning empty array","opsSec":1893358.359691336,"samples":947401}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,723,922|43362469|
|using Array.includes (first item)|82,618,574|41319695|
|Using raw comparison|97,593,936|48797700|
|Using raw comparison (first item)|94,642,861|47323965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:14:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":86723922.28942214,"samples":43362469},{"name":"using Array.includes (first item)","opsSec":82618574.58060873,"samples":41319695},{"name":"Using raw comparison","opsSec":97593936.48132853,"samples":48797700},{"name":"Using raw comparison (first item)","opsSec":94642861.68547101,"samples":47323965}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,858,402|25026015|
|Using Object.getOwnPropertyNames()|42,538,880|21300594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:16:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49858402.79867841,"samples":25026015},{"name":"Using Object.getOwnPropertyNames()","opsSec":42538880.366072446,"samples":21300594}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|130,836,624|65444153|
|Length = 10_000 - Array.at|90,473,452|45255582|
|Length = 1_000_000 - Array.at|95,964,565|47982404|
|Length = 100 - Array[length - 1]|96,277,513|48138764|
|Length = 10_000 - Array[length - 1]|96,081,711|48043102|
|Length = 1_000_000 - Array[length - 1]|96,155,505|48077759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:17:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":130836624.22506484,"samples":65444153},{"name":"Length = 10_000 - Array.at","opsSec":90473452.85538082,"samples":45255582},{"name":"Length = 1_000_000 - Array.at","opsSec":95964565.20965002,"samples":47982404},{"name":"Length = 100 - Array[length - 1]","opsSec":96277513.55837297,"samples":48138764},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96081711.98780115,"samples":48043102},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96155505.88440625,"samples":48077759}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|138,544,058|69375634|
|~ (small)|97,235,783|48694531|
|Math.floor (long)|98,100,371|49064351|
|~ (long)|98,071,277|49046853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:18:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":138544058.45820063,"samples":69375634},{"name":"~ (small)","opsSec":97235783.59464431,"samples":48694531},{"name":"Math.floor (long)","opsSec":98100371.39754336,"samples":49064351},{"name":"~ (long)","opsSec":98071277.49112289,"samples":49046853}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,632,078|21818819|
|Object.create({})|1,837,072|920653|
|Cached Empty.prototype|101,143,589|50572051|
|Empty.prototype|2,075,677|1038882|
|Empty class|1,395,702|697944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:20:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43632078.40057019,"samples":21818819},{"name":"Object.create({})","opsSec":1837072.470166646,"samples":920653},{"name":"Cached Empty.prototype","opsSec":101143589.60657506,"samples":50572051},{"name":"Empty.prototype","opsSec":2075677.0064025584,"samples":1038882},{"name":"Empty class","opsSec":1395702.2069136202,"samples":697944}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|132,068,000|66052899|
|Using optional chain (obj.field?.field2) (undefined)|95,144,399|47572241|
|Using and operator (obj.field && obj.field.field2) (Valid)|81,062,363|40531200|
|Using and operator (obj.field && obj.field.field2) (undefined)|96,267,707|48134554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:21:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":132068000.93054168,"samples":66052899},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95144399.9855272,"samples":47572241},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":81062363.35981175,"samples":40531200},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":96267707.11232612,"samples":48134554}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|132,697,516|66558251|
|Using parseInt(x, 10) - big number (10 len)|97,283,478|48641745|
|Using + - small number (2 len)|97,465,419|48739985|
|Using + - big number (10 len)|98,227,554|49141323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:22:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":132697516.22738783,"samples":66558251},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97283478.71511647,"samples":48641745},{"name":"Using + - small number (2 len)","opsSec":97465419.38753964,"samples":48739985},{"name":"Using + - big number (10 len)","opsSec":98227554.29035582,"samples":49141323}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|970,511|485315|
|Using ? operator to avoid rejection|1,081,018|545873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:24:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":970511.9061702334,"samples":485315},{"name":"Using ? operator to avoid rejection","opsSec":1081018.6861925952,"samples":545873}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,274,053|65211067|
|Raw usage underscore usage|95,342,106|47684521|
|Manipulating private properties using #|95,073,440|47536728|
|Manipulating private properties using underscore(_)|95,924,889|47964239|
|Manipulating private properties using Symbol|95,848,514|47924264|
|Manipulating private properties using PrivateSymbol|35,594,532|17797792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:25:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":130274053.82794674,"samples":65211067},{"name":"Raw usage underscore usage","opsSec":95342106.71074893,"samples":47684521},{"name":"Manipulating private properties using #","opsSec":95073440.40795577,"samples":47536728},{"name":"Manipulating private properties using underscore(_)","opsSec":95924889.25804308,"samples":47964239},{"name":"Manipulating private properties using Symbol","opsSec":95848514.38951096,"samples":47924264},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35594532.25276099,"samples":17797792}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,766,148|3884706|
|Adding property in the object creation - small object|7,378,661|3689435|
|Adding property after the function creation - small class|227,264|113645|
|Adding property in the function creation - small class|243,525|122812|
|Adding property after the class creation - small class|235,345|118969|
|Adding property in the class creation - small class|233,113|116563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:26:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7766148.52459929,"samples":3884706},{"name":"Adding property in the object creation - small object","opsSec":7378661.582324945,"samples":3689435},{"name":"Adding property after the function creation - small class","opsSec":227264.24823350416,"samples":113645},{"name":"Adding property in the function creation - small class","opsSec":243525.84560508977,"samples":122812},{"name":"Adding property after the class creation - small class","opsSec":235345.82948887735,"samples":118969},{"name":"Adding property in the class creation - small class","opsSec":233113.30418322756,"samples":116563}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,816,791|72908412|
|Getter|51,651,057|25852911|
|Method|95,072,704|47563327|
|DefineProperty (getter)|99,881,043|49940527|
|DefineProperty (getter & enumerable=false)|52,100,686|26055126|
|DefineProperty (getter & configurable=false)|98,347,037|49189821|
|DefineProperty (getter & enumerable=false & configurable=false)|52,187,050|26093532|
|DefineProperty (writable)|96,199,928|48099976|
|DefineProperty (writable & enumerable=false)|96,364,022|48182022|
|DefineProperty (writable & enumerable=false & configurable=false)|98,264,172|49156211|
|DefineProperties (getter)|45,535,505|22768925|
|DefineProperties (getter & enumerable=false)|51,651,290|25825648|
|DefineProperties (getter & enumerable=false & configurable=false)|52,317,985|26165572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:27:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":145816791.9203058,"samples":72908412},{"name":"Getter","opsSec":51651057.93280558,"samples":25852911},{"name":"Method","opsSec":95072704.80351382,"samples":47563327},{"name":"DefineProperty (getter)","opsSec":99881043.61237147,"samples":49940527},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52100686.730721734,"samples":26055126},{"name":"DefineProperty (getter & configurable=false)","opsSec":98347037.79333667,"samples":49189821},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52187050.53574096,"samples":26093532},{"name":"DefineProperty (writable)","opsSec":96199928.91201705,"samples":48099976},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96364022.22173098,"samples":48182022},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98264172.91540012,"samples":49156211},{"name":"DefineProperties (getter)","opsSec":45535505.92322608,"samples":22768925},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51651290.628265776,"samples":25825648},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52317985.398856364,"samples":26165572}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|126,975,598|63503045|
|Setter|10,413,428|5206792|
|Method|92,306,859|46153439|
|DefineProperty (setter)|101,059,541|50530038|
|DefineProperty (setter & enumerable=false)|10,573,178|5286655|
|DefineProperty (setter & configurable=false)|10,218,109|5109056|
|DefineProperty (setter & enumerable=false & configurable=false)|10,582,046|5292341|
|DefineProperty (writable)|102,258,164|51129827|
|DefineProperty (writable & enumerable=false)|101,561,781|50784864|
|DefineProperty (writable & enumerable=false & configurable=false)|102,273,839|51143167|
|DefineProperties (setter)|94,358,561|47179284|
|DefineProperties (setter & enumerable=false)|10,049,287|5024644|
|DefineProperties (setter & enumerable=false & configurable=false)|10,045,120|5022795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:29:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":126975598.0798771,"samples":63503045},{"name":"Setter","opsSec":10413428.694124455,"samples":5206792},{"name":"Method","opsSec":92306859.35401441,"samples":46153439},{"name":"DefineProperty (setter)","opsSec":101059541.59714402,"samples":50530038},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10573178.15246844,"samples":5286655},{"name":"DefineProperty (setter & configurable=false)","opsSec":10218109.568089923,"samples":5109056},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10582046.901008898,"samples":5292341},{"name":"DefineProperty (writable)","opsSec":102258164.30306242,"samples":51129827},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101561781.39997613,"samples":50784864},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":102273839.8186324,"samples":51143167},{"name":"DefineProperties (setter)","opsSec":94358561.0174665,"samples":47179284},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10049287.5176342,"samples":5024644},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10045120.912943607,"samples":5022795}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,240,986|1631338|
|Using replaceAll()|2,897,271|1448637|
|Using replaceAll(//g)|2,887,901|1444041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:30:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3240986.7655968755,"samples":1631338},{"name":"Using replaceAll()","opsSec":2897271.259181389,"samples":1448637},{"name":"Using replaceAll(//g)","opsSec":2887901.4946049815,"samples":1444041}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,113,692|11058495|
|{ ...object, __proto__: null }|20,895,332|10452264|
|{ ...object, newProp: true }|773,058|389571|
|structuredClone|268,324|134163|
|JSON.parse + JSON.stringify|186,926|93470|
|loop + object.keys starting with {}|1,472,107|736496|
|loop + object.keys starting with { __proto__: null }|727,467|363736|
|loop + object.keys starting with { randomProp: true }|570,084|285056|
|object.keys + reduce(FN, {})|1,492,459|746234|
|object.keys + reduce(FN, { __proto__: null })|773,711|386856|
|object.keys + reduce(FN, { newProp: true })|558,000|279110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:31:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22113692.583071556,"samples":11058495},{"name":"{ ...object, __proto__: null }","opsSec":20895332.716303535,"samples":10452264},{"name":"{ ...object, newProp: true }","opsSec":773058.26645273,"samples":389571},{"name":"structuredClone","opsSec":268324.8064912607,"samples":134163},{"name":"JSON.parse + JSON.stringify","opsSec":186926.99773189175,"samples":93470},{"name":"loop + object.keys starting with {}","opsSec":1472107.287074185,"samples":736496},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":727467.6802969144,"samples":363736},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":570084.1616502183,"samples":285056},{"name":"object.keys + reduce(FN, {})","opsSec":1492459.2840377812,"samples":746234},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":773711.1396332127,"samples":386856},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":558000.3487427209,"samples":279110}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,665|125356|
|Sort using first char|1,326,537|663269|
|Sort using localeCompare|1,208,787|604394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:32:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":250665.53613489095,"samples":125356},{"name":"Sort using first char","opsSec":1326537.697549405,"samples":663269},{"name":"Sort using localeCompare","opsSec":1208787.2167058834,"samples":604394}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,645|823|
|{...smallObject} - Total keys: 2|47,790,559|23896126|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,030|516|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,425|3213|
|{ ...bigObject, ...anotherBigObject }|1,084|543|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,991,970|6496314|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,354,501|13177407|
|{ ...smallObject, ...anotherSmallObject }|19,085,579|9544579|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:34:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1645.4618582810965,"samples":823},{"name":"{...smallObject} - Total keys: 2","opsSec":47790559.16281333,"samples":23896126},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1030.0363017131072,"samples":516},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6425.368399137102,"samples":3213},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1084.555794658275,"samples":543},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12991970.372443689,"samples":6496314},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26354501.066654336,"samples":13177407},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19085579.835492443,"samples":9544579}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,902|958|
|streams.web.Readable reading 1e3 * "some data"|1,492|747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:35:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1902.8457113228365,"samples":958},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1492.4274321995463,"samples":747}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,940|2972|
|streams.web.WritableStream writing 1e3 * "some data"|1,272|651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:36:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5940.80128248387,"samples":2972},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1272.4308498236494,"samples":651}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|147,205,755|73605588|
|Using backtick (`)|98,783,506|49451897|
|Using array.join|9,961,293|4981066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:38:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":147205755.00086632,"samples":73605588},{"name":"Using backtick (`)","opsSec":98783506.11487196,"samples":49451897},{"name":"Using array.join","opsSec":9961293.37863304,"samples":4981066}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|58,644,793|29332386|
|(short string) (true) String#slice and strict comparison|60,435,075|30220352|
|(long string) (true) String#endsWith|49,879,928|24950137|
|(long string) (true) String#slice and strict comparison|56,418,524|28249068|
|(short string) (false) String#endsWith|57,184,188|28592100|
|(short string) (false) String#slice and strict comparison|59,895,544|29952633|
|(long string) (false) String#endsWith|53,193,835|26612231|
|(long string) (false) String#slice and strict comparison|55,136,391|27568211|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:39:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":58644793.00920721,"samples":29332386},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60435075.3188251,"samples":30220352},{"name":"(long string) (true) String#endsWith","opsSec":49879928.475973934,"samples":24950137},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56418524.159070276,"samples":28249068},{"name":"(short string) (false) String#endsWith","opsSec":57184188.44879393,"samples":28592100},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59895544.83328248,"samples":29952633},{"name":"(long string) (false) String#endsWith","opsSec":53193835.96810438,"samples":26612231},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55136391.89553002,"samples":27568211}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,908,568|68473284|
|Using indexof|16,096,054|8048531|
|Using RegExp.test|13,139,234|6569619|
|Using RegExp.text with cached regex pattern|14,079,705|7040243|
|Using new RegExp.test|4,326,646|2163458|
|Using new RegExp.test with cached regex pattern|5,177,770|2588909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:41:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":136908568.20544317,"samples":68473284},{"name":"Using indexof","opsSec":16096054.869846793,"samples":8048531},{"name":"Using RegExp.test","opsSec":13139234.189622086,"samples":6569619},{"name":"Using RegExp.text with cached regex pattern","opsSec":14079705.871657064,"samples":7040243},{"name":"Using new RegExp.test","opsSec":4326646.077857787,"samples":2163458},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5177770.613043349,"samples":2588909}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|114,824,287|57412169|
|(short string) (true) String#slice and strict comparison|61,069,358|30535024|
|(long string) (true) String#startsWith|58,363,796|29182380|
|(long string) (true) String#slice and strict comparison|54,876,049|27439234|
|(short string) (false) String#startsWith|97,237,553|48619272|
|(short string) (false) String#slice and strict comparison|60,087,751|30043881|
|(long string) (false) String#startsWith|87,943,085|43971549|
|(long string) (false) String#slice and strict comparison|54,866,044|27454301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:42:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":114824287.24766505,"samples":57412169},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61069358.4048049,"samples":30535024},{"name":"(long string) (true) String#startsWith","opsSec":58363796.64717255,"samples":29182380},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54876049.06375728,"samples":27439234},{"name":"(short string) (false) String#startsWith","opsSec":97237553.92722592,"samples":48619272},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60087751.30438026,"samples":30043881},{"name":"(long string) (false) String#startsWith","opsSec":87943085.33619572,"samples":43971549},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54866044.05560739,"samples":27454301}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|122,057,828|61029003|
|Using this|82,390,338|41205963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:43:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":122057828.77203262,"samples":61029003},{"name":"Using this","opsSec":82390338.08361532,"samples":41205963}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,956,203|5478105|
|Date.now()|19,202,235|9601119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10956203.426277945,"samples":5478105},{"name":"Date.now()","opsSec":19202235.65732725,"samples":9601119}]}-->
