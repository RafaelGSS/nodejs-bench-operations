## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,649,459|46333303|
|Using dot notation|63,154,814|31776183|
|Using define property (writable)|4,897,941|2449009|
|Using define property initialized (writable)|6,789,759|3395197|
|Using define property (getter)|2,421,244|1216326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":46333303,"opsSec":92649459.17929077},{"name":"Using dot notation","samples":31776183,"opsSec":63154814.526372746},{"name":"Using define property (writable)","samples":2449009,"opsSec":4897941.905574555},{"name":"Using define property initialized (writable)","samples":3395197,"opsSec":6789759.551288008},{"name":"Using define property (getter)","samples":1216326,"opsSec":2421244.312265251}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.176ms
array.push|1,000,000|32.741ms
new Array(length)|1,000,000|7.17ms
array.push|100,000,000|2,027.44ms
new Array(length)|100,000,000|4,440.007ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|15.459ms
new Array(length)|10,000|5.25ms
array.push|1,000,000|182.105ms
new Array(length)|1,000,000|8.032ms
array.push|100,000,000|2,137.956ms
new Array(length)|100,000,000|5,063.974ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|137|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":137,"opsSec":273.3456427859563},{"name":"Array.from","samples":13,"opsSec":24.06206817148176}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,583|2292|
|new Blob (1024)|547|279|
|text (128)|4,292|2150|
|text (1024)|536|269|
|arrayBuffer (128)|4,270|2140|
|arrayBuffer (1024)|529|266|
|slice (0, 64)|142,022|78939|
|slice (0, 512)|31,058|15531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2292,"opsSec":4583.065485449124},{"name":"new Blob (1024)","samples":279,"opsSec":547.3134799063027},{"name":"text (128)","samples":2150,"opsSec":4292.662766166929},{"name":"text (1024)","samples":269,"opsSec":536.280203016945},{"name":"arrayBuffer (128)","samples":2140,"opsSec":4270.955789851763},{"name":"arrayBuffer (1024)","samples":266,"opsSec":529.8554535001055},{"name":"slice (0, 64)","samples":78939,"opsSec":142022.5029572459},{"name":"slice (0, 512)","samples":15531,"opsSec":31058.769950042737}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.17 ms|1|
|Gzip|134.58 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:23:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13416985},{"name":"Gzip","samples":1,"totalTime":0.134578189}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,654|3328|
|crypto.verify('RSA-SHA256')|6,695|3348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:27:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3328,"opsSec":6654.8668891245225},{"name":"crypto.verify('RSA-SHA256')","samples":3348,"opsSec":6695.224438591483}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,477,154|738752|
|fromUnixToISOString(new Date())|2,016,000|1008081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":738752,"opsSec":1477154.1596717483},{"name":"fromUnixToISOString(new Date())","samples":1008081,"opsSec":2016000.9900649274}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,394|9202|
|Intl.DateTimeFormat().format(new Date())|18,776|9394|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,350|9676|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,270|9136|
|Reusing Intl.DateTimeFormat()|515,529|258211|
|Date.toLocaleDateString()|977,020|488530|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,729|11618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9202,"opsSec":18394.35425814799},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9394,"opsSec":18776.834505575935},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9676,"opsSec":19350.290556631648},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9136,"opsSec":18270.137651788606},{"name":"Reusing Intl.DateTimeFormat()","samples":258211,"opsSec":515529.49368828814},{"name":"Date.toLocaleDateString()","samples":488530,"opsSec":977020.0633278915},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11618,"opsSec":22729.69628794244}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|915,710|457908|
|Using brackets {}|923,684|461843|
|Using '' + |918,196|459099|
|Using date.toString()|1,012,603|506303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":457908,"opsSec":915710.9130156223},{"name":"Using brackets {}","samples":461843,"opsSec":923684.6569625088},{"name":"Using '' + ","samples":459099,"opsSec":918196.0332240968},{"name":"Using date.toString()","samples":506303,"opsSec":1012603.3611556408}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,921,734|1961478|
|Using delete property (proto: null)|17,110,189|8556473|
|Using delete property (cached proto: null)|3,953,556|1977073|
|Using undefined assignment|70,602,966|35307295|
|Using undefined assignment (proto: null)|18,395,249|9200595|
|Using undefined property (cached proto: null)|74,419,301|37209756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1961478,"opsSec":3921734.379740711},{"name":"Using delete property (proto: null)","samples":8556473,"opsSec":17110189.03524075},{"name":"Using delete property (cached proto: null)","samples":1977073,"opsSec":3953556.999078277},{"name":"Using undefined assignment","samples":35307295,"opsSec":70602966.7747858},{"name":"Using undefined assignment (proto: null)","samples":9200595,"opsSec":18395249.58526093},{"name":"Using undefined property (cached proto: null)","samples":37209756,"opsSec":74419301.0957007}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|343,899|171955|
|NodeError|309,742|154872|
|NodeError Range|295,465|147807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:45:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":171955,"opsSec":343899.74215849093},{"name":"NodeError","samples":154872,"opsSec":309742.0672095006},{"name":"NodeError Range","samples":147807,"opsSec":295465.3502004527}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,366,444|35183229|
|using Array.includes (first item)|79,800,055|39900039|
|Using raw comparison|100,238,704|50120379|
|Using raw comparison (first item)|99,461,999|49881497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35183229,"opsSec":70366444.3489098},{"name":"using Array.includes (first item)","samples":39900039,"opsSec":79800055.49638435},{"name":"Using raw comparison","samples":50120379,"opsSec":100238704.50989942},{"name":"Using raw comparison (first item)","samples":49881497,"opsSec":99461999.51106761}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,301,475|20654337|
|Using Object.getOwnPropertyNames()|40,705,413|20352934|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:53:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":20654337,"opsSec":41301475.483235076},{"name":"Using Object.getOwnPropertyNames()","samples":20352934,"opsSec":40705413.727582805}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,289,886|48653698|
|Length = 10_000 - Array.at|97,293,312|48651908|
|Length = 1_000_000 - Array.at|98,250,606|49125314|
|Length = 100 - Array[length - 1]|99,084,509|49546063|
|Length = 10_000 - Array[length - 1]|97,399,585|48712843|
|Length = 1_000_000 - Array[length - 1]|97,810,116|48915834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48653698,"opsSec":97289886.15544929},{"name":"Length = 10_000 - Array.at","samples":48651908,"opsSec":97293312.21401337},{"name":"Length = 1_000_000 - Array.at","samples":49125314,"opsSec":98250606.9743701},{"name":"Length = 100 - Array[length - 1]","samples":49546063,"opsSec":99084509.9682258},{"name":"Length = 10_000 - Array[length - 1]","samples":48712843,"opsSec":97399585.05399641},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48915834,"opsSec":97810116.71450335}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,977,581|47999647|
|~ (small)|93,048,054|46524034|
|Math.floor (long)|95,885,973|47943022|
|~ (long)|98,061,358|49045476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47999647,"opsSec":95977581.95141095},{"name":"~ (small)","samples":46524034,"opsSec":93048054.78717622},{"name":"Math.floor (long)","samples":47943022,"opsSec":95885973.42792355},{"name":"~ (long)","samples":49045476,"opsSec":98061358.6509409}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,957,823|14478923|
|Object.create({})|2,050,304|1038308|
|new Function with empty prototype|99,848,100|49948809|
|Empty class|77,461,578|38752649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":14478923,"opsSec":28957823.181235336},{"name":"Object.create({})","samples":1038308,"opsSec":2050304.4066440575},{"name":"new Function with empty prototype","samples":49948809,"opsSec":99848100.730797},{"name":"Empty class","samples":38752649,"opsSec":77461578.83982596}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|99,138,527|49602752|
|Using parseInt(x, 10) - big number (10 len)|98,751,043|49381904|
|Using + - small number (2 len)|96,755,162|48386388|
|Using + - big number (10 len)|91,359,250|45679633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49602752,"opsSec":99138527.39882873},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49381904,"opsSec":98751043.24264838},{"name":"Using + - small number (2 len)","samples":48386388,"opsSec":96755162.49670877},{"name":"Using + - big number (10 len)","samples":45679633,"opsSec":91359250.46892741}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,038,078|526252|
|Using ? operator to avoid rejection|1,080,211|553107|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:14:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":526252,"opsSec":1038078.0719444567},{"name":"Using ? operator to avoid rejection","samples":553107,"opsSec":1080211.3679919709}]}-->
