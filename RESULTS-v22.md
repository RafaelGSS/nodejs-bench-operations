## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|103,322,372|51662020|
|Using dot notation|68,231,075|34507653|
|Using define property (writable)|4,686,026|2343237|
|Using define property initialized (writable)|6,729,092|3364873|
|Using define property (getter)|2,343,810|1176581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:04:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Directly in the object","opsSec":103322372.99683407,"samples":51662020},{"name":"Using dot notation","opsSec":68231075.21570168,"samples":34507653},{"name":"Using define property (writable)","opsSec":4686026.521955365,"samples":2343237},{"name":"Using define property initialized (writable)","opsSec":6729092.483996139,"samples":3364873},{"name":"Using define property (getter)","opsSec":2343810.715570851,"samples":1176581}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.078ms
new Array(length)|100|0.008ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.265ms
new Array(length)|10,000|0.141ms
array.push|1,000,000|27.7ms
new Array(length)|1,000,000|7.054ms
array.push|100,000,000|1,871.003ms
new Array(length)|100,000,000|3,952.495ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|17.751ms
new Array(length)|10,000|6.156ms
array.push|1,000,000|146.718ms
new Array(length)|1,000,000|7.214ms
array.push|100,000,000|2,002.879ms
new Array(length)|100,000,000|4,528.261ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|163|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":324.29845207235655,"samples":163},{"name":"Array.from","opsSec":23.785105001367764,"samples":12}]}-->

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
|[True conditional] Using instanceof only|450,375|225190|
|[True conditional] Using constructor name|353,069|176535|
|[True conditional] Check if property is valid then instanceof |353,118|176576|
|[False conditional] Using instanceof only|93,844,952|46935007|
|[False conditional] Using constructor name|93,902,546|46951281|
|[False conditional] Check if property is valid then instanceof |93,800,025|46900016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":450375.3016848528,"samples":225190},{"name":"[True conditional] Using constructor name","opsSec":353069.9357412717,"samples":176535},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":353118.292034079,"samples":176576},{"name":"[False conditional] Using instanceof only","opsSec":93844952.33010043,"samples":46935007},{"name":"[False conditional] Using constructor name","opsSec":93902546.59998235,"samples":46951281},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":93800025.62159824,"samples":46900016}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,801|3401|
|crypto.verify('RSA-SHA256')|7,013|3507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:11:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6801.037503570419,"samples":3401},{"name":"crypto.verify('RSA-SHA256')","opsSec":7013.356608691432,"samples":3507}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,441,419|720787|
|fromUnixToISOString(new Date())|2,040,880|1026726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1441419.9266240431,"samples":720787},{"name":"fromUnixToISOString(new Date())","opsSec":2040880.6933128887,"samples":1026726}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,468|9235|
|Intl.DateTimeFormat().format(new Date())|17,846|8950|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,513|9257|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,278|9140|
|Reusing Intl.DateTimeFormat()|498,325|249219|
|Date.toLocaleDateString()|944,290|472146|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,600|11301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:13:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18468.795354354217,"samples":9235},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17846.196074533163,"samples":8950},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18513.57637234545,"samples":9257},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18278.667046484305,"samples":9140},{"name":"Reusing Intl.DateTimeFormat()","opsSec":498325.91753128066,"samples":249219},{"name":"Date.toLocaleDateString()","opsSec":944290.7082103112,"samples":472146},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22600.794202427714,"samples":11301}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|918,478|459246|
|Using brackets {}|1,021,953|511947|
|Using '' + |998,554|499604|
|Using date.toString()|1,153,034|576543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:15:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":918478.9925005082,"samples":459246},{"name":"Using brackets {}","opsSec":1021953.2759824978,"samples":511947},{"name":"Using '' + ","opsSec":998554.6177540743,"samples":499604},{"name":"Using date.toString()","opsSec":1153034.6000236,"samples":576543}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,955,857|1979102|
|Using delete property (proto: null)|15,675,905|7838188|
|Using delete property (cached proto: null)|3,906,810|1953579|
|Using undefined assignment|71,847,374|35923692|
|Using undefined assignment (proto: null)|17,641,294|8820650|
|Using undefined property (cached proto: null)|71,970,639|35985325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:16:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":3955857.583074599,"samples":1979102},{"name":"Using delete property (proto: null)","opsSec":15675905.064460056,"samples":7838188},{"name":"Using delete property (cached proto: null)","opsSec":3906810.9892343143,"samples":1953579},{"name":"Using undefined assignment","opsSec":71847374.80353603,"samples":35923692},{"name":"Using undefined assignment (proto: null)","opsSec":17641294.00196004,"samples":8820650},{"name":"Using undefined property (cached proto: null)","opsSec":71970639.06046286,"samples":35985325}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|421,604|210807|
|NodeError|333,964|166986|
|NodeError Range|333,093|166547|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:22:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":421604.47932764783,"samples":210807},{"name":"NodeError","opsSec":333964.66747176094,"samples":166986},{"name":"NodeError Range","opsSec":333093.8561034542,"samples":166547}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,900,557|950290|
|Function returning explicitly undefined|1,849,213|924818|
|Function returning implicitly undefined|1,624,854|812434|
|Function returning string|1,840,786|920883|
|Function returning integer|1,674,052|837027|
|Function returning float|1,878,850|939486|
|Function returning functions|1,799,847|900923|
|Function returning arrow functions|1,721,741|860960|
|Function returning empty object|1,755,252|878312|
|Function returning empty array|1,773,836|886919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1900557.710259174,"samples":950290},{"name":"Function returning explicitly undefined","opsSec":1849213.170011824,"samples":924818},{"name":"Function returning implicitly undefined","opsSec":1624854.315476955,"samples":812434},{"name":"Function returning string","opsSec":1840786.1642510586,"samples":920883},{"name":"Function returning integer","opsSec":1674052.0179224107,"samples":837027},{"name":"Function returning float","opsSec":1878850.0137840048,"samples":939486},{"name":"Function returning functions","opsSec":1799847.1689274646,"samples":900923},{"name":"Function returning arrow functions","opsSec":1721741.768735584,"samples":860960},{"name":"Function returning empty object","opsSec":1755252.207210985,"samples":878312},{"name":"Function returning empty array","opsSec":1773836.1232813816,"samples":886919}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,603,741|43302638|
|using Array.includes (first item)|78,685,687|39342849|
|Using raw comparison|97,118,271|48561083|
|Using raw comparison (first item)|97,223,305|48611657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":86603741.38170272,"samples":43302638},{"name":"using Array.includes (first item)","opsSec":78685687.92823195,"samples":39342849},{"name":"Using raw comparison","opsSec":97118271.55731054,"samples":48561083},{"name":"Using raw comparison (first item)","opsSec":97223305.05545592,"samples":48611657}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,099,012|24052301|
|Using Object.getOwnPropertyNames()|41,274,882|20639464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:26:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":48099012.79851478,"samples":24052301},{"name":"Using Object.getOwnPropertyNames()","opsSec":41274882.648751594,"samples":20639464}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,543,631|66273696|
|Length = 10_000 - Array.at|99,551,055|49778026|
|Length = 1_000_000 - Array.at|99,271,164|49635642|
|Length = 100 - Array[length - 1]|95,905,021|47980159|
|Length = 10_000 - Array[length - 1]|99,503,670|49755303|
|Length = 1_000_000 - Array[length - 1]|99,514,327|49775785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:27:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132543631.20700814,"samples":66273696},{"name":"Length = 10_000 - Array.at","opsSec":99551055.13433859,"samples":49778026},{"name":"Length = 1_000_000 - Array.at","opsSec":99271164.08043379,"samples":49635642},{"name":"Length = 100 - Array[length - 1]","opsSec":95905021.082944,"samples":47980159},{"name":"Length = 10_000 - Array[length - 1]","opsSec":99503670.39516611,"samples":49755303},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":99514327.36007145,"samples":49775785}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,701,187|69850623|
|~ (small)|96,858,535|48429433|
|Math.floor (long)|95,832,718|47916368|
|~ (long)|94,483,102|47241558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:28:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":139701187.04609907,"samples":69850623},{"name":"~ (small)","opsSec":96858535.13124399,"samples":48429433},{"name":"Math.floor (long)","opsSec":95832718.94177602,"samples":47916368},{"name":"~ (long)","opsSec":94483102.58339943,"samples":47241558}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,496,321|20250246|
|Object.create({})|2,003,827|1002078|
|Cached Empty.prototype|107,582,651|53845083|
|Empty.prototype|2,509,402|1263649|
|Empty class|1,535,717|767860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:29:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":40496321.20288667,"samples":20250246},{"name":"Object.create({})","opsSec":2003827.3041919842,"samples":1002078},{"name":"Cached Empty.prototype","opsSec":107582651.12594427,"samples":53845083},{"name":"Empty.prototype","opsSec":2509402.7164831655,"samples":1263649},{"name":"Empty class","opsSec":1535717.294066128,"samples":767860}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,793,629|76414337|
|Using optional chain (obj.field?.field2) (undefined)|88,176,829|44090299|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,484,790|49242401|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,077,003|49538548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:31:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152793629.86422887,"samples":76414337},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":88176829.49866088,"samples":44090299},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98484790.18182519,"samples":49242401},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99077003.66023259,"samples":49538548}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|130,109,914|65057225|
|Using parseInt(x, 10) - big number (10 len)|92,341,624|46170989|
|Using + - small number (2 len)|92,390,831|46195427|
|Using + - big number (10 len)|93,509,397|46769139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:32:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":130109914.88880663,"samples":65057225},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":92341624.14689627,"samples":46170989},{"name":"Using + - small number (2 len)","opsSec":92390831.64141874,"samples":46195427},{"name":"Using + - big number (10 len)","opsSec":93509397.80950533,"samples":46769139}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|902,519|456972|
|Using ? operator to avoid rejection|1,061,926|533842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:33:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":902519.853157619,"samples":456972},{"name":"Using ? operator to avoid rejection","opsSec":1061926.8675563761,"samples":533842}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|142,338,702|71173352|
|Raw usage underscore usage|98,686,709|49403136|
|Manipulating private properties using #|97,094,111|48548373|
|Manipulating private properties using underscore(_)|96,136,831|48068422|
|Manipulating private properties using Symbol|99,196,672|49609916|
|Manipulating private properties using PrivateSymbol|36,296,266|18151956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:34:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":142338702.2875122,"samples":71173352},{"name":"Raw usage underscore usage","opsSec":98686709.69585533,"samples":49403136},{"name":"Manipulating private properties using #","opsSec":97094111.44837996,"samples":48548373},{"name":"Manipulating private properties using underscore(_)","opsSec":96136831.69448555,"samples":48068422},{"name":"Manipulating private properties using Symbol","opsSec":99196672.94955315,"samples":49609916},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36296266.91729921,"samples":18151956}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,985,477|3993160|
|Adding property in the object creation - small object|7,514,344|3757202|
|Adding property after the function creation - small class|257,375|128890|
|Adding property in the function creation - small class|275,752|137877|
|Adding property after the class creation - small class|263,452|131727|
|Adding property in the class creation - small class|265,404|132703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7985477.8515057815,"samples":3993160},{"name":"Adding property in the object creation - small object","opsSec":7514344.892163078,"samples":3757202},{"name":"Adding property after the function creation - small class","opsSec":257375.96554701307,"samples":128890},{"name":"Adding property in the function creation - small class","opsSec":275752.9201515647,"samples":137877},{"name":"Adding property after the class creation - small class","opsSec":263452.2569998677,"samples":131727},{"name":"Adding property in the class creation - small class","opsSec":265404.20745998283,"samples":132703}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,757,002|75378532|
|Getter|51,031,156|25547883|
|Method|100,950,027|50476317|
|DefineProperty (getter)|98,949,021|49481108|
|DefineProperty (getter & enumerable=false)|50,965,215|25489088|
|DefineProperty (getter & configurable=false)|99,577,168|49788656|
|DefineProperty (getter & enumerable=false & configurable=false)|51,093,561|25546795|
|DefineProperty (writable)|98,955,738|49483970|
|DefineProperty (writable & enumerable=false)|99,520,867|49760441|
|DefineProperty (writable & enumerable=false & configurable=false)|99,349,461|49675407|
|DefineProperties (getter)|51,520,635|25760708|
|DefineProperties (getter & enumerable=false)|51,277,547|25641629|
|DefineProperties (getter & enumerable=false & configurable=false)|51,304,920|25652520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":150757002.79265687,"samples":75378532},{"name":"Getter","opsSec":51031156.06567912,"samples":25547883},{"name":"Method","opsSec":100950027.06650104,"samples":50476317},{"name":"DefineProperty (getter)","opsSec":98949021.14802991,"samples":49481108},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50965215.3418777,"samples":25489088},{"name":"DefineProperty (getter & configurable=false)","opsSec":99577168.60887721,"samples":49788656},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51093561.38760563,"samples":25546795},{"name":"DefineProperty (writable)","opsSec":98955738.16374998,"samples":49483970},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99520867.07186994,"samples":49760441},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99349461.65512794,"samples":49675407},{"name":"DefineProperties (getter)","opsSec":51520635.668452166,"samples":25760708},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51277547.62974086,"samples":25641629},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51304920.972583346,"samples":25652520}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,495,110|68758296|
|Setter|11,370,876|5692391|
|Method|93,822,013|46929923|
|DefineProperty (setter)|93,696,723|46872533|
|DefineProperty (setter & enumerable=false)|11,033,772|5516890|
|DefineProperty (setter & configurable=false)|11,150,028|5575019|
|DefineProperty (setter & enumerable=false & configurable=false)|11,268,250|5634128|
|DefineProperty (writable)|100,711,707|50488189|
|DefineProperty (writable & enumerable=false)|100,326,458|50174987|
|DefineProperty (writable & enumerable=false & configurable=false)|100,715,151|50357582|
|DefineProperties (setter)|98,175,070|49096222|
|DefineProperties (setter & enumerable=false)|11,477,760|5738884|
|DefineProperties (setter & enumerable=false & configurable=false)|11,392,722|5696553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:38:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":137495110.86383954,"samples":68758296},{"name":"Setter","opsSec":11370876.396062985,"samples":5692391},{"name":"Method","opsSec":93822013.77409782,"samples":46929923},{"name":"DefineProperty (setter)","opsSec":93696723.17567751,"samples":46872533},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11033772.761845067,"samples":5516890},{"name":"DefineProperty (setter & configurable=false)","opsSec":11150028.433275605,"samples":5575019},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11268250.568703227,"samples":5634128},{"name":"DefineProperty (writable)","opsSec":100711707.23055129,"samples":50488189},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100326458.48139656,"samples":50174987},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100715151.91418178,"samples":50357582},{"name":"DefineProperties (setter)","opsSec":98175070.93944657,"samples":49096222},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11477760.516500143,"samples":5738884},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11392722.908299485,"samples":5696553}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,208,502|1608379|
|Using replaceAll()|3,153,183|1579907|
|Using replaceAll(//g)|2,877,849|1440275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:39:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":3208502.804631929,"samples":1608379},{"name":"Using replaceAll()","opsSec":3153183.699732694,"samples":1579907},{"name":"Using replaceAll(//g)","opsSec":2877849.6216088566,"samples":1440275}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,652,961|11828800|
|{ ...object, __proto__: null }|2,431,259|1215796|
|{ ...object, newProp: true }|20,481,963|10240984|
|structuredClone|297,201|148601|
|JSON.parse + JSON.stringify|300,489|150245|
|loop + object.keys starting with {}|1,630,527|815308|
|loop + object.keys starting with { __proto__: null }|869,476|434770|
|loop + object.keys starting with { randomProp: true }|631,689|315928|
|object.keys + reduce(FN, {})|1,718,498|859385|
|object.keys + reduce(FN, { __proto__: null })|913,648|456825|
|object.keys + reduce(FN, { newProp: true })|654,011|327028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:40:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":23652961.98529615,"samples":11828800},{"name":"{ ...object, __proto__: null }","opsSec":2431259.7683526548,"samples":1215796},{"name":"{ ...object, newProp: true }","opsSec":20481963.78071546,"samples":10240984},{"name":"structuredClone","opsSec":297201.2926609235,"samples":148601},{"name":"JSON.parse + JSON.stringify","opsSec":300489.1910830976,"samples":150245},{"name":"loop + object.keys starting with {}","opsSec":1630527.090618803,"samples":815308},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":869476.1282836163,"samples":434770},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":631689.8807219273,"samples":315928},{"name":"object.keys + reduce(FN, {})","opsSec":1718498.549406133,"samples":859385},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":913648.6715548316,"samples":456825},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":654011.121756825,"samples":327028}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,630|154338|
|Sort using first char|1,299,155|649606|
|Sort using localeCompare|1,168,637|584392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:41:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":308630.5350186254,"samples":154338},{"name":"Sort using first char","opsSec":1299155.0580338063,"samples":649606},{"name":"Sort using localeCompare","opsSec":1168637.775366995,"samples":584392}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,775|888|
|{...smallObject} - Total keys: 2|57,668,762|28834519|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,050|526|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,530|3266|
|{ ...bigObject, ...anotherBigObject }|1,104|553|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,002,389|6502731|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,058,878|14029445|
|{ ...smallObject, ...anotherSmallObject }|20,628,644|10347231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:43:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1775.7548286338297,"samples":888},{"name":"{...smallObject} - Total keys: 2","opsSec":57668762.22797903,"samples":28834519},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1050.4490833589582,"samples":526},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6530.486611971569,"samples":3266},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1104.310433748436,"samples":553},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13002389.977329617,"samples":6502731},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28058878.327506617,"samples":14029445},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20628644.412167694,"samples":10347231}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,948|975|
|streams.web.Readable reading 1e3 * "some data"|1,805|903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1948.4947838824612,"samples":975},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1805.9294495601234,"samples":903}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,536|5769|
|streams.web.WritableStream writing 1e3 * "some data"|1,739|870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:45:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":11536.546533575329,"samples":5769},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1739.3350626415624,"samples":870}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,707,267|75854916|
|Using backtick (`)|96,896,722|48503086|
|Using array.join|9,853,041|4926521|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":151707267.5403495,"samples":75854916},{"name":"Using backtick (`)","opsSec":96896722.88804214,"samples":48503086},{"name":"Using array.join","opsSec":9853041.684702666,"samples":4926521}]}-->

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
<<<<<<< HEAD
|new Date().getTime()|6,261,779|3130890|
|Date.now()|8,982,265|4491133|
=======
|new Date().getTime()|9,374,990|4687619|
|Date.now()|18,316,650|9159097|
>>>>>>> b73043c6 (chore: add benchmark results from bench-node)


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
<<<<<<< HEAD
* __Run:__ Thu Sep 26 2024 00:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6261779.561669382,"samples":3130890},{"name":"Date.now()","opsSec":8982265.604787434,"samples":4491133}]}-->
=======
* __Run:__ Mon Sep 30 2024 21:54:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9374990.762743605,"samples":4687619},{"name":"Date.now()","opsSec":18316650.272715013,"samples":9159097}]}-->
>>>>>>> b73043c6 (chore: add benchmark results from bench-node)
