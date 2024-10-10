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
