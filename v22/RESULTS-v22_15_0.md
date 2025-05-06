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

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,250,030|49539250|
|Raw usage underscore usage|95,762,448|47881524|
|Manipulating private properties using #|95,910,669|47955344|
|Manipulating private properties using underscore(_)|96,021,561|48010788|
|Manipulating private properties using Symbol|99,472,920|49736950|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:18:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":49539250,"opsSec":97250030.21687026},{"name":"Raw usage underscore usage","samples":47881524,"opsSec":95762448.14402482},{"name":"Manipulating private properties using #","samples":47955344,"opsSec":95910669.00968754},{"name":"Manipulating private properties using underscore(_)","samples":48010788,"opsSec":96021561.02063648},{"name":"Manipulating private properties using Symbol","samples":49736950,"opsSec":99472920.58962388}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,730,512|3867338|
|Adding property in the object creation - small object|7,822,166|3912180|
|Adding property after the function creation - small class|265,480|132753|
|Adding property in the function creation - small class|275,824|138350|
|Adding property after the class creation - small class|271,349|138615|
|Adding property in the class creation - small class|272,152|137357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3867338,"opsSec":7730512.021543692},{"name":"Adding property in the object creation - small object","samples":3912180,"opsSec":7822166.961626304},{"name":"Adding property after the function creation - small class","samples":132753,"opsSec":265480.1709032125},{"name":"Adding property in the function creation - small class","samples":138350,"opsSec":275824.1458008309},{"name":"Adding property after the class creation - small class","samples":138615,"opsSec":271349.9119884885},{"name":"Adding property in the class creation - small class","samples":137357,"opsSec":272152.3038450288}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,493,195|48746605|
|Getter|51,466,371|25733192|
|Method|102,151,571|51087741|
|DefineProperty (getter)|99,067,651|49533851|
|DefineProperty (getter & enumerable=false)|51,841,146|25921041|
|DefineProperty (getter & configurable=false)|96,342,243|48202462|
|DefineProperty (getter & enumerable=false & configurable=false)|50,468,995|25239842|
|DefineProperty (writable)|95,364,644|47683346|
|DefineProperty (writable & enumerable=false)|93,044,136|46522075|
|DefineProperty (writable & enumerable=false & configurable=false)|98,787,235|49404963|
|DefineProperties (getter)|51,114,346|25642434|
|DefineProperties (getter & enumerable=false)|51,638,096|25823678|
|DefineProperties (getter & enumerable=false & configurable=false)|51,808,264|25904139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:28:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48746605,"opsSec":97493195.18103434},{"name":"Getter","samples":25733192,"opsSec":51466371.85393624},{"name":"Method","samples":51087741,"opsSec":102151571.38168667},{"name":"DefineProperty (getter)","samples":49533851,"opsSec":99067651.47549775},{"name":"DefineProperty (getter & enumerable=false)","samples":25921041,"opsSec":51841146.474670716},{"name":"DefineProperty (getter & configurable=false)","samples":48202462,"opsSec":96342243.92878442},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25239842,"opsSec":50468995.77701234},{"name":"DefineProperty (writable)","samples":47683346,"opsSec":95364644.90253252},{"name":"DefineProperty (writable & enumerable=false)","samples":46522075,"opsSec":93044136.41555607},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49404963,"opsSec":98787235.55986425},{"name":"DefineProperties (getter)","samples":25642434,"opsSec":51114346.654869005},{"name":"DefineProperties (getter & enumerable=false)","samples":25823678,"opsSec":51638096.050063916},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25904139,"opsSec":51808264.01176872}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,169,369|49111350|
|Setter|11,496,321|5748164|
|Method|92,732,039|46374995|
|DefineProperty (setter)|91,833,450|45920429|
|DefineProperty (setter & enumerable=false)|11,502,586|5751354|
|DefineProperty (setter & configurable=false)|11,585,174|5793325|
|DefineProperty (setter & enumerable=false & configurable=false)|11,635,673|5817839|
|DefineProperty (writable)|99,043,059|49521541|
|DefineProperty (writable & enumerable=false)|99,111,912|49561012|
|DefineProperty (writable & enumerable=false & configurable=false)|98,944,566|49472296|
|DefineProperties (setter)|97,207,257|48603637|
|DefineProperties (setter & enumerable=false)|11,376,496|5688607|
|DefineProperties (setter & enumerable=false & configurable=false)|11,171,587|5585796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49111350,"opsSec":98169369.68625668},{"name":"Setter","samples":5748164,"opsSec":11496321.125199968},{"name":"Method","samples":46374995,"opsSec":92732039.85904449},{"name":"DefineProperty (setter)","samples":45920429,"opsSec":91833450.16290917},{"name":"DefineProperty (setter & enumerable=false)","samples":5751354,"opsSec":11502586.118597487},{"name":"DefineProperty (setter & configurable=false)","samples":5793325,"opsSec":11585174.396337138},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5817839,"opsSec":11635673.229373977},{"name":"DefineProperty (writable)","samples":49521541,"opsSec":99043059.22009638},{"name":"DefineProperty (writable & enumerable=false)","samples":49561012,"opsSec":99111912.00806546},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49472296,"opsSec":98944566.47230184},{"name":"DefineProperties (setter)","samples":48603637,"opsSec":97207257.47476622},{"name":"DefineProperties (setter & enumerable=false)","samples":5688607,"opsSec":11376496.188596483},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5585796,"opsSec":11171587.419649158}]}-->
