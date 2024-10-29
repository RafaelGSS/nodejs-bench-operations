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
|Error|429,662|214868|
|NodeError|347,339|173672|
|NodeError Range|344,859|172431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:46:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":429662.608470522,"samples":214868},{"name":"NodeError","opsSec":347339.44499051844,"samples":173672},{"name":"NodeError Range","opsSec":344859.65702349023,"samples":172431}]}-->

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
