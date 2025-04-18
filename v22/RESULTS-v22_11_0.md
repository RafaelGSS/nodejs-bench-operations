## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,354,657|52677580|
|Using dot notation|72,858,303|36505473|
|Using define property (writable)|4,933,376|2466690|
|Using define property initialized (writable)|6,866,553|3433432|
|Using define property (getter)|2,455,899|1227986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105354657.66899224,"samples":52677580},{"name":"Using dot notation","opsSec":72858303.48270552,"samples":36505473},{"name":"Using define property (writable)","opsSec":4933376.793305084,"samples":2466690},{"name":"Using define property initialized (writable)","opsSec":6866553.769100712,"samples":3433432},{"name":"Using define property (getter)","opsSec":2455899.742517776,"samples":1227986}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.006ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|28.305ms
new Array(length)|1,000,000|7.137ms
array.push|100,000,000|1,851.871ms
new Array(length)|100,000,000|3,945.689ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|18.209ms
new Array(length)|10,000|6.65ms
array.push|1,000,000|142.99ms
new Array(length)|1,000,000|7.163ms
array.push|100,000,000|1,979.962ms
new Array(length)|100,000,000|4,548.412ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|332|167|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":332.7602491157997,"samples":167},{"name":"Array.from","opsSec":24.69608733714296,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2284|
|new Blob (1024)|625|315|
|text (128)|3,738|1871|
|text (1024)|536|275|
|arrayBuffer (128)|4,329|2179|
|arrayBuffer (1024)|537|269|
|slice (0, 64)|146,774|77711|
|slice (0, 512)|31,704|15853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4567.2908184854505,"samples":2284},{"name":"new Blob (1024)","opsSec":625.721714129238,"samples":315},{"name":"text (128)","opsSec":3738.440234777803,"samples":1871},{"name":"text (1024)","opsSec":536.4502379639611,"samples":275},{"name":"arrayBuffer (128)","opsSec":4329.035411084507,"samples":2179},{"name":"arrayBuffer (1024)","opsSec":537.3876929392374,"samples":269},{"name":"slice (0, 64)","opsSec":146774.1617905084,"samples":77711},{"name":"slice (0, 512)","opsSec":31704.75451042381,"samples":15853}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|455,614|228102|
|[True conditional] Using constructor name|368,301|184151|
|[True conditional] Check if property is valid then instanceof |367,092|183550|
|[False conditional] Using instanceof only|94,613,392|47306709|
|[False conditional] Using constructor name|94,706,984|47375194|
|[False conditional] Check if property is valid then instanceof |96,160,248|48097177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":455614.3075140707,"samples":228102},{"name":"[True conditional] Using constructor name","opsSec":368301.585292415,"samples":184151},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":367092.7440448212,"samples":183550},{"name":"[False conditional] Using instanceof only","opsSec":94613392.2651573,"samples":47306709},{"name":"[False conditional] Using constructor name","opsSec":94706984.35731095,"samples":47375194},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96160248.84454231,"samples":48097177}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,641|3321|
|crypto.verify('RSA-SHA256')|6,809|3405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6641.83000900275,"samples":3321},{"name":"crypto.verify('RSA-SHA256')","opsSec":6809.023654098239,"samples":3405}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,405,288|702661|
|fromUnixToISOString(new Date())|2,152,480|1076241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1405288.6749843615,"samples":702661},{"name":"fromUnixToISOString(new Date())","opsSec":2152480.4114694563,"samples":1076241}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,164|9583|
|Intl.DateTimeFormat().format(new Date())|19,139|9572|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,163|9582|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,057|9210|
|Reusing Intl.DateTimeFormat()|606,398|303387|
|Date.toLocaleDateString()|1,103,192|551736|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,412|11707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19164.043351173845,"samples":9583},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19139.90980127547,"samples":9572},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19163.591470557032,"samples":9582},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18057.328772061235,"samples":9210},{"name":"Reusing Intl.DateTimeFormat()","opsSec":606398.0889734606,"samples":303387},{"name":"Date.toLocaleDateString()","opsSec":1103192.1223649401,"samples":551736},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23412.304059518538,"samples":11707}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,940|517474|
|Using brackets {}|1,054,166|527084|
|Using '' + |1,053,103|526552|
|Using date.toString()|1,155,629|577815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1034940.1178960621,"samples":517474},{"name":"Using brackets {}","opsSec":1054166.3597171444,"samples":527084},{"name":"Using '' + ","opsSec":1053103.12803061,"samples":526552},{"name":"Using date.toString()","opsSec":1155629.2234171617,"samples":577815}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,068,660|2034332|
|Using delete property (proto: null)|16,978,415|8489211|
|Using delete property (cached proto: null)|4,038,433|2019409|
|Using undefined assignment|74,430,591|37219608|
|Using undefined assignment (proto: null)|18,594,854|9297912|
|Using undefined property (cached proto: null)|74,603,525|37301767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:40:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4068660.777620664,"samples":2034332},{"name":"Using delete property (proto: null)","opsSec":16978415.95568392,"samples":8489211},{"name":"Using delete property (cached proto: null)","opsSec":4038433.371528829,"samples":2019409},{"name":"Using undefined assignment","opsSec":74430591.72733656,"samples":37219608},{"name":"Using undefined assignment (proto: null)","opsSec":18594854.575851545,"samples":9297912},{"name":"Using undefined property (cached proto: null)","opsSec":74603525.79361217,"samples":37301767}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|426,793|213441|
|NodeError|353,945|176979|
|NodeError Range|350,998|175539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Apr 11 2025 20:06:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597869873046875},"benchmarks":[{"name":"Error","opsSec":426793.9413132646,"samples":213441},{"name":"NodeError","opsSec":353945.4299819997,"samples":176979},{"name":"NodeError Range","opsSec":350998.2981144506,"samples":175539}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,839,054|920006|
|Function returning explicitly undefined|1,766,366|883358|
|Function returning implicitly undefined|1,897,055|948616|
|Function returning string|1,800,893|902021|
|Function returning integer|1,884,780|942391|
|Function returning float|1,853,762|927320|
|Function returning functions|1,673,022|836512|
|Function returning arrow functions|1,832,722|916362|
|Function returning empty object|1,848,329|924171|
|Function returning empty array|1,838,117|921048|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:52:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1839054.5183336837,"samples":920006},{"name":"Function returning explicitly undefined","opsSec":1766366.2524165565,"samples":883358},{"name":"Function returning implicitly undefined","opsSec":1897055.7786946055,"samples":948616},{"name":"Function returning string","opsSec":1800893.016100623,"samples":902021},{"name":"Function returning integer","opsSec":1884780.3300846275,"samples":942391},{"name":"Function returning float","opsSec":1853762.9699088323,"samples":927320},{"name":"Function returning functions","opsSec":1673022.4541272523,"samples":836512},{"name":"Function returning arrow functions","opsSec":1832722.3322226775,"samples":916362},{"name":"Function returning empty object","opsSec":1848329.6975175333,"samples":924171},{"name":"Function returning empty array","opsSec":1838117.112440088,"samples":921048}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|90,754,886|45378116|
|using Array.includes (first item)|82,494,612|41249777|
|Using raw comparison|98,511,723|49255868|
|Using raw comparison (first item)|96,557,480|48295199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:57:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":90754886.83106738,"samples":45378116},{"name":"using Array.includes (first item)","opsSec":82494612.57270691,"samples":41249777},{"name":"Using raw comparison","opsSec":98511723.39049941,"samples":49255868},{"name":"Using raw comparison (first item)","opsSec":96557480.5892923,"samples":48295199}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,310,967|24659334|
|Using Object.getOwnPropertyNames()|42,366,582|21183342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:02:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49310967.00766048,"samples":24659334},{"name":"Using Object.getOwnPropertyNames()","opsSec":42366582.57440132,"samples":21183342}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,386,004|66208172|
|Length = 10_000 - Array.at|86,770,303|43389558|
|Length = 1_000_000 - Array.at|99,193,056|49985508|
|Length = 100 - Array[length - 1]|98,222,323|49111170|
|Length = 10_000 - Array[length - 1]|97,918,678|48959364|
|Length = 1_000_000 - Array[length - 1]|99,309,669|49670135|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132386004.30507739,"samples":66208172},{"name":"Length = 10_000 - Array.at","opsSec":86770303.08739662,"samples":43389558},{"name":"Length = 1_000_000 - Array.at","opsSec":99193056.16847903,"samples":49985508},{"name":"Length = 100 - Array[length - 1]","opsSec":98222323.89153887,"samples":49111170},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97918678.84482321,"samples":48959364},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":99309669.91002998,"samples":49670135}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|137,155,659|68604898|
|~ (small)|97,172,246|48586127|
|Math.floor (long)|96,935,546|48468146|
|~ (long)|98,290,384|49150634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":137155659.28972176,"samples":68604898},{"name":"~ (small)","opsSec":97172246.42056477,"samples":48586127},{"name":"Math.floor (long)","opsSec":96935546.1779077,"samples":48468146},{"name":"~ (long)","opsSec":98290384.50230484,"samples":49150634}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,611,272|20807019|
|Object.create({})|2,107,667|1054124|
|Cached Empty.prototype|112,346,353|56177964|
|Empty.prototype|2,514,749|1264364|
|Empty class|1,558,830|779421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":41611272.18196061,"samples":20807019},{"name":"Object.create({})","opsSec":2107667.4598595216,"samples":1054124},{"name":"Cached Empty.prototype","opsSec":112346353.16970477,"samples":56177964},{"name":"Empty.prototype","opsSec":2514749.203249914,"samples":1264364},{"name":"Empty class","opsSec":1558830.3804783442,"samples":779421}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,757,558|74378819|
|Using optional chain (obj.field?.field2) (undefined)|98,110,006|49055376|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,992,645|49496324|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,771,417|49385795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148757558.8609787,"samples":74378819},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98110006.75638866,"samples":49055376},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98992645.6241765,"samples":49496324},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98771417.94018994,"samples":49385795}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|139,710,708|69855369|
|Using parseInt(x, 10) - big number (10 len)|98,909,300|49456287|
|Using + - small number (2 len)|99,470,325|49736067|
|Using + - big number (10 len)|99,721,670|49860842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":139710708.38132983,"samples":69855369},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":98909300.10216662,"samples":49456287},{"name":"Using + - small number (2 len)","opsSec":99470325.23160599,"samples":49736067},{"name":"Using + - big number (10 len)","opsSec":99721670.2384095,"samples":49860842}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|989,293|497050|
|Using ? operator to avoid rejection|1,048,910|531828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:37:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":989293.497755286,"samples":497050},{"name":"Using ? operator to avoid rejection","opsSec":1048910.3573594403,"samples":531828}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|143,368,906|71684476|
|Raw usage underscore usage|96,300,313|48150167|
|Manipulating private properties using #|95,570,864|47846290|
|Manipulating private properties using underscore(_)|99,325,166|49668956|
|Manipulating private properties using Symbol|98,661,992|49646528|
|Manipulating private properties using PrivateSymbol|37,130,017|18574216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:43:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":143368906.12195003,"samples":71684476},{"name":"Raw usage underscore usage","opsSec":96300313.7769341,"samples":48150167},{"name":"Manipulating private properties using #","opsSec":95570864.19676837,"samples":47846290},{"name":"Manipulating private properties using underscore(_)","opsSec":99325166.39599775,"samples":49668956},{"name":"Manipulating private properties using Symbol","opsSec":98661992.97657928,"samples":49646528},{"name":"Manipulating private properties using PrivateSymbol","opsSec":37130017.51633284,"samples":18574216}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,354,246|4177259|
|Adding property in the object creation - small object|8,278,490|4139250|
|Adding property after the function creation - small class|263,474|134632|
|Adding property in the function creation - small class|251,336|126951|
|Adding property after the class creation - small class|277,262|140143|
|Adding property in the class creation - small class|275,659|137836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:48:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8354246.7041925285,"samples":4177259},{"name":"Adding property in the object creation - small object","opsSec":8278490.496292911,"samples":4139250},{"name":"Adding property after the function creation - small class","opsSec":263474.8762697268,"samples":134632},{"name":"Adding property in the function creation - small class","opsSec":251336.11861317832,"samples":126951},{"name":"Adding property after the class creation - small class","opsSec":277262.0075343378,"samples":140143},{"name":"Adding property in the class creation - small class","opsSec":275659.2739139605,"samples":137836}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|149,782,416|74891562|
|Getter|49,224,533|24612271|
|Method|100,477,459|50238819|
|DefineProperty (getter)|99,051,657|49538847|
|DefineProperty (getter & enumerable=false)|46,221,888|23110973|
|DefineProperty (getter & configurable=false)|98,435,985|49217998|
|DefineProperty (getter & enumerable=false & configurable=false)|51,897,065|25949101|
|DefineProperty (writable)|98,838,767|49419463|
|DefineProperty (writable & enumerable=false)|97,276,532|48638272|
|DefineProperty (writable & enumerable=false & configurable=false)|96,580,045|48290253|
|DefineProperties (getter)|49,966,247|24983128|
|DefineProperties (getter & enumerable=false)|51,597,698|25798853|
|DefineProperties (getter & enumerable=false & configurable=false)|50,837,472|25423800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:55:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":149782416.4278648,"samples":74891562},{"name":"Getter","opsSec":49224533.23803308,"samples":24612271},{"name":"Method","opsSec":100477459.35107729,"samples":50238819},{"name":"DefineProperty (getter)","opsSec":99051657.08331576,"samples":49538847},{"name":"DefineProperty (getter & enumerable=false)","opsSec":46221888.68485803,"samples":23110973},{"name":"DefineProperty (getter & configurable=false)","opsSec":98435985.7626575,"samples":49217998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51897065.76564212,"samples":25949101},{"name":"DefineProperty (writable)","opsSec":98838767.26493977,"samples":49419463},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97276532.7159222,"samples":48638272},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96580045.31318384,"samples":48290253},{"name":"DefineProperties (getter)","opsSec":49966247.00607554,"samples":24983128},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51597698.36354064,"samples":25798853},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50837472.76872469,"samples":25423800}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|133,706,878|66853462|
|Setter|11,020,361|5510183|
|Method|83,939,241|41971573|
|DefineProperty (setter)|85,474,393|42737287|
|DefineProperty (setter & enumerable=false)|11,338,321|5669164|
|DefineProperty (setter & configurable=false)|11,412,688|5706347|
|DefineProperty (setter & enumerable=false & configurable=false)|11,163,488|5581810|
|DefineProperty (writable)|93,986,633|46993323|
|DefineProperty (writable & enumerable=false)|95,636,253|47818137|
|DefineProperty (writable & enumerable=false & configurable=false)|94,019,491|47009761|
|DefineProperties (setter)|93,968,148|46988064|
|DefineProperties (setter & enumerable=false)|11,333,264|5666815|
|DefineProperties (setter & enumerable=false & configurable=false)|11,226,923|5613538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":133706878.80707496,"samples":66853462},{"name":"Setter","opsSec":11020361.591855364,"samples":5510183},{"name":"Method","opsSec":83939241.98585524,"samples":41971573},{"name":"DefineProperty (setter)","opsSec":85474393.30713256,"samples":42737287},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11338321.80927629,"samples":5669164},{"name":"DefineProperty (setter & configurable=false)","opsSec":11412688.681687076,"samples":5706347},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11163488.337818544,"samples":5581810},{"name":"DefineProperty (writable)","opsSec":93986633.96971086,"samples":46993323},{"name":"DefineProperty (writable & enumerable=false)","opsSec":95636253.91638668,"samples":47818137},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94019491.72572367,"samples":47009761},{"name":"DefineProperties (setter)","opsSec":93968148.41277309,"samples":46988064},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11333264.615548795,"samples":5666815},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11226923.92008858,"samples":5613538}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,386,280|1693264|
|Using replaceAll()|3,316,649|1662642|
|Using replaceAll(//g)|3,081,890|1540946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3386280.1242949013,"samples":1693264},{"name":"Using replaceAll()","opsSec":3316649.8582901093,"samples":1662642},{"name":"Using replaceAll(//g)","opsSec":3081890.311124109,"samples":1540946}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,698,204|12363889|
|{ ...object, __proto__: null }|2,542,973|1271686|
|{ ...object, newProp: true }|21,478,682|10739342|
|structuredClone|312,136|156155|
|JSON.parse + JSON.stringify|309,484|154799|
|loop + object.keys starting with {}|1,674,608|837371|
|loop + object.keys starting with { __proto__: null }|904,485|452243|
|loop + object.keys starting with { randomProp: true }|676,206|338157|
|object.keys + reduce(FN, {})|1,733,642|866855|
|object.keys + reduce(FN, { __proto__: null })|953,509|476755|
|object.keys + reduce(FN, { newProp: true })|694,299|347210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:14:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":24698204.37008726,"samples":12363889},{"name":"{ ...object, __proto__: null }","opsSec":2542973.8313293857,"samples":1271686},{"name":"{ ...object, newProp: true }","opsSec":21478682.195790693,"samples":10739342},{"name":"structuredClone","opsSec":312136.3835007692,"samples":156155},{"name":"JSON.parse + JSON.stringify","opsSec":309484.015180305,"samples":154799},{"name":"loop + object.keys starting with {}","opsSec":1674608.0481022324,"samples":837371},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":904485.70513766,"samples":452243},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":676206.3384840246,"samples":338157},{"name":"object.keys + reduce(FN, {})","opsSec":1733642.5474357642,"samples":866855},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":953509.8951139116,"samples":476755},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":694299.7958763399,"samples":347210}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|310,400|155465|
|Sort using first char|1,390,555|696043|
|Sort using localeCompare|1,265,789|633045|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:19:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":310400.70843678206,"samples":155465},{"name":"Sort using first char","opsSec":1390555.8934792746,"samples":696043},{"name":"Sort using localeCompare","opsSec":1265789.7496082338,"samples":633045}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,846|924|
|{...smallObject} - Total keys: 2|60,099,156|30049597|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,113|557|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,645|3323|
|{ ...bigObject, ...anotherBigObject }|1,170|586|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,576,607|6789163|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,381,137|14190575|
|{ ...smallObject, ...anotherSmallObject }|21,478,887|10739764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1846.9780005810703,"samples":924},{"name":"{...smallObject} - Total keys: 2","opsSec":60099156.858721055,"samples":30049597},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1113.0040061050568,"samples":557},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6645.210455964886,"samples":3323},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1170.3692285835377,"samples":586},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13576607.201528287,"samples":6789163},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28381137.68258625,"samples":14190575},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21478887.886183217,"samples":10739764}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,080|1049|
|streams.web.Readable reading 1e3 * "some data"|1,837|920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2080.6430096908534,"samples":1049},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1837.4802596449886,"samples":920}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,252|5627|
|streams.web.WritableStream writing 1e3 * "some data"|1,717|868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":11252.86519355669,"samples":5627},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1717.909274646217,"samples":868}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|146,826,651|73455018|
|Using backtick (`)|85,889,756|42945317|
|Using array.join|10,115,028|5057516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":146826651.38275993,"samples":73455018},{"name":"Using backtick (`)","opsSec":85889756.55024709,"samples":42945317},{"name":"Using array.join","opsSec":10115028.56089029,"samples":5057516}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|127,013,371|63507868|
|(short string) (true) String#slice and strict comparison|60,501,133|30271089|
|(long string) (true) String#endsWith|63,560,780|31781503|
|(long string) (true) String#slice and strict comparison|54,806,425|27404139|
|(short string) (false) String#endsWith|93,573,670|46786860|
|(short string) (false) String#slice and strict comparison|60,519,280|30262717|
|(long string) (false) String#endsWith|86,030,991|43016540|
|(long string) (false) String#slice and strict comparison|54,686,011|27343014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":127013371.51907581,"samples":63507868},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60501133.063311726,"samples":30271089},{"name":"(long string) (true) String#endsWith","opsSec":63560780.86418351,"samples":31781503},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54806425.762034945,"samples":27404139},{"name":"(short string) (false) String#endsWith","opsSec":93573670.96739641,"samples":46786860},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60519280.399568975,"samples":30262717},{"name":"(long string) (false) String#endsWith","opsSec":86030991.85576567,"samples":43016540},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54686011.15670857,"samples":27343014}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|137,463,093|68731564|
|Using indexof|16,078,526|8040203|
|Using RegExp.test|13,268,565|6635279|
|Using RegExp.text with cached regex pattern|14,521,533|7261833|
|Using new RegExp.test|4,704,632|2352429|
|Using new RegExp.test with cached regex pattern|5,507,605|2753804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":137463093.9091527,"samples":68731564},{"name":"Using indexof","opsSec":16078526.80610101,"samples":8040203},{"name":"Using RegExp.test","opsSec":13268565.167660339,"samples":6635279},{"name":"Using RegExp.text with cached regex pattern","opsSec":14521533.83223048,"samples":7261833},{"name":"Using new RegExp.test","opsSec":4704632.516372755,"samples":2352429},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5507605.907109756,"samples":2753804}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|126,589,063|63294539|
|(short string) (true) String#slice and strict comparison|60,375,624|30245825|
|(long string) (true) String#startsWith|63,280,920|31640598|
|(long string) (true) String#slice and strict comparison|54,283,379|27141697|
|(short string) (false) String#startsWith|93,748,836|46876729|
|(short string) (false) String#slice and strict comparison|60,445,194|30222605|
|(long string) (false) String#startsWith|87,917,047|43980194|
|(long string) (false) String#slice and strict comparison|54,281,871|27140942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:01:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":126589063.82202485,"samples":63294539},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60375624.110375874,"samples":30245825},{"name":"(long string) (true) String#startsWith","opsSec":63280920.98111741,"samples":31640598},{"name":"(long string) (true) String#slice and strict comparison","opsSec":54283379.12635412,"samples":27141697},{"name":"(short string) (false) String#startsWith","opsSec":93748836.74484149,"samples":46876729},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60445194.04246877,"samples":30222605},{"name":"(long string) (false) String#startsWith","opsSec":87917047.88457254,"samples":43980194},{"name":"(long string) (false) String#slice and strict comparison","opsSec":54281871.406605825,"samples":27140942}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|125,079,745|62545767|
|Using this|96,500,329|48393262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:10:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":125079745.98441944,"samples":62545767},{"name":"Using this","opsSec":96500329.88365349,"samples":48393262}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,836,232|4918390|
|Date.now()|19,263,162|9632930|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":9836232.43661272,"samples":4918390},{"name":"Date.now()","opsSec":19263162.194134712,"samples":9632930}]}-->
