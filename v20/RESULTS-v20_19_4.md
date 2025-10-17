## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|81,490,368|40748764|
|Using dot notation|78,859,730|39526976|
|Using define property (writable)|4,436,350|2218179|
|Using define property initialized (writable)|5,977,831|2989147|
|Using define property (getter)|2,181,712|1099830|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:41:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":40748764,"opsSec":81490368.256245},{"name":"Using dot notation","samples":39526976,"opsSec":78859730.42030084},{"name":"Using define property (writable)","samples":2218179,"opsSec":4436350.786493621},{"name":"Using define property initialized (writable)","samples":2989147,"opsSec":5977831.817955162},{"name":"Using define property (getter)","samples":1099830,"opsSec":2181712.8677852624}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.098ms
new Array(length)|100|0.009ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.26ms
new Array(length)|10,000|0.294ms
array.push|1,000,000|34.798ms
new Array(length)|1,000,000|7.9ms
array.push|10,000,000|236.713ms
new Array(length)|10,000,000|65.263ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.238ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|25.831ms
new Array(length)|1,000,000|9.378ms
array.push|10,000,000|214.161ms
new Array(length)|10,000,000|66.006ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|247|124|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":124,"opsSec":247.44305369009604},{"name":"Array.from","samples":12,"opsSec":22.774070984581563}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,376|2189|
|new Blob (1024)|546|278|
|text (128)|4,418|2219|
|text (1024)|560|281|
|arrayBuffer (128)|4,426|2220|
|arrayBuffer (1024)|554|278|
|slice (0, 64)|61,221|31011|
|slice (0, 512)|24,901|12451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:50:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2189,"opsSec":4376.669842501467},{"name":"new Blob (1024)","samples":278,"opsSec":546.5884938686415},{"name":"text (128)","samples":2219,"opsSec":4418.352056748956},{"name":"text (1024)","samples":281,"opsSec":560.6263007390569},{"name":"arrayBuffer (128)","samples":2220,"opsSec":4426.937285635408},{"name":"arrayBuffer (1024)","samples":278,"opsSec":554.7624226732025},{"name":"slice (0, 64)","samples":31011,"opsSec":61221.32087312536},{"name":"slice (0, 512)","samples":12451,"opsSec":24901.556005256425}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.86 ms|1|
|Gzip|134.79 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:57:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133857123},{"name":"Gzip","samples":1,"totalTime":0.134792712}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,721|3361|
|crypto.verify('RSA-SHA256')|6,875|3438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:00:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3361,"opsSec":6721.423315322392},{"name":"crypto.verify('RSA-SHA256')","samples":3438,"opsSec":6875.732025220049}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,435,459|717941|
|fromUnixToISOString(new Date())|2,157,617|1078841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":717941,"opsSec":1435459.5155553815},{"name":"fromUnixToISOString(new Date())","samples":1078841,"opsSec":2157617.7504586265}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,044|9524|
|Intl.DateTimeFormat().format(new Date())|19,177|9589|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,957|9979|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,865|9439|
|Reusing Intl.DateTimeFormat()|418,793|209451|
|Date.toLocaleDateString()|945,102|472552|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,851|11427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9524,"opsSec":19044.57414773486},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9589,"opsSec":19177.70569892834},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9979,"opsSec":19957.39688746606},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9439,"opsSec":18865.883424102638},{"name":"Reusing Intl.DateTimeFormat()","samples":209451,"opsSec":418793.8414649156},{"name":"Date.toLocaleDateString()","samples":472552,"opsSec":945102.7467937578},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11427,"opsSec":22851.738729045806}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,716|536394|
|Using brackets {}|1,088,560|544299|
|Using '' + |1,070,186|535398|
|Using date.toString()|1,222,032|611159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":536394,"opsSec":1072716.3404030283},{"name":"Using brackets {}","samples":544299,"opsSec":1088560.61229721},{"name":"Using '' + ","samples":535398,"opsSec":1070186.2870474258},{"name":"Using date.toString()","samples":611159,"opsSec":1222032.6578184646}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,543,308|1771830|
|Using delete property (proto: null)|17,002,077|8501044|
|Using delete property (cached proto: null)|3,772,917|1886720|
|Using undefined assignment|85,703,037|42853177|
|Using undefined assignment (proto: null)|17,482,734|8741972|
|Using undefined property (cached proto: null)|85,559,513|42797563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:13:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":1771830,"opsSec":3543308.2912190133},{"name":"Using delete property (proto: null)","samples":8501044,"opsSec":17002077.73074505},{"name":"Using delete property (cached proto: null)","samples":1886720,"opsSec":3772917.6093736417},{"name":"Using undefined assignment","samples":42853177,"opsSec":85703037.46385622},{"name":"Using undefined assignment (proto: null)","samples":8741972,"opsSec":17482734.12486762},{"name":"Using undefined property (cached proto: null)","samples":42797563,"opsSec":85559513.0505259}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|314,525|157295|
|NodeError|299,171|149587|
|NodeError Range|272,617|136312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:15:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":157295,"opsSec":314525.4688095643},{"name":"NodeError","samples":149587,"opsSec":299171.6634693083},{"name":"NodeError Range","samples":136312,"opsSec":272617.93207006797}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|72,695,068|36347831|
|using Array.includes (first item)|89,170,622|44591609|
|Using raw comparison|100,863,001|50431507|
|Using raw comparison (first item)|96,443,131|48233484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:19:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":36347831,"opsSec":72695068.51746061},{"name":"using Array.includes (first item)","samples":44591609,"opsSec":89170622.82786681},{"name":"Using raw comparison","samples":50431507,"opsSec":100863001.89643978},{"name":"Using raw comparison (first item)","samples":48233484,"opsSec":96443131.11571343}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|43,725,425|21867058|
|Using Object.getOwnPropertyNames()|46,687,372|23348332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:23:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21867058,"opsSec":43725425.48423416},{"name":"Using Object.getOwnPropertyNames()","samples":23348332,"opsSec":46687372.83930599}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,996,002|50498008|
|Length = 10_000 - Array.at|97,096,371|48548195|
|Length = 1_000_000 - Array.at|97,478,277|48749338|
|Length = 100 - Array[length - 1]|99,007,565|49511579|
|Length = 10_000 - Array[length - 1]|87,010,032|43505441|
|Length = 1_000_000 - Array[length - 1]|99,505,077|49755679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50498008,"opsSec":100996002.66852765},{"name":"Length = 10_000 - Array.at","samples":48548195,"opsSec":97096371.74588211},{"name":"Length = 1_000_000 - Array.at","samples":48749338,"opsSec":97478277.30577788},{"name":"Length = 100 - Array[length - 1]","samples":49511579,"opsSec":99007565.10055718},{"name":"Length = 10_000 - Array[length - 1]","samples":43505441,"opsSec":87010032.26002495},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49755679,"opsSec":99505077.04052705}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,565,959|47282982|
|~ (small)|101,645,716|50834255|
|Math.floor (long)|100,562,859|50322519|
|~ (long)|98,248,070|49124065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47282982,"opsSec":94565959.83909775},{"name":"~ (small)","samples":50834255,"opsSec":101645716.15144446},{"name":"Math.floor (long)","samples":50322519,"opsSec":100562859.84106936},{"name":"~ (long)","samples":49124065,"opsSec":98248070.85466135}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,331,309|17702749|
|Object.create({})|1,922,290|967491|
|new Function with empty prototype|105,944,784|53026809|
|Empty class|80,891,728|40447483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17702749,"opsSec":35331309.73978412},{"name":"Object.create({})","samples":967491,"opsSec":1922290.3127296208},{"name":"new Function with empty prototype","samples":53026809,"opsSec":105944784.73665228},{"name":"Empty class","samples":40447483,"opsSec":80891728.06590898}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,923,594|49461803|
|Using parseInt(x, 10) - big number (10 len)|98,715,462|49379419|
|Using + - small number (2 len)|100,032,822|50016412|
|Using + - big number (10 len)|99,065,560|49545290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49461803,"opsSec":98923594.72271019},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49379419,"opsSec":98715462.22846588},{"name":"Using + - small number (2 len)","samples":50016412,"opsSec":100032822.39947484},{"name":"Using + - big number (10 len)","samples":49545290,"opsSec":99065560.00216584}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|990,318|496409|
|Using ? operator to avoid rejection|1,015,122|508375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:38:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":496409,"opsSec":990318.1814080353},{"name":"Using ? operator to avoid rejection","samples":508375,"opsSec":1015122.279847688}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|90,911,162|45455587|
|Raw usage underscore usage|97,279,875|48643766|
|Manipulating private properties using #|102,105,064|51052665|
|Manipulating private properties using underscore(_)|100,264,965|50132504|
|Manipulating private properties using Symbol|99,605,815|49803751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:06:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":45455587,"opsSec":90911162.18154891},{"name":"Raw usage underscore usage","samples":48643766,"opsSec":97279875.29557523},{"name":"Manipulating private properties using #","samples":51052665,"opsSec":102105064.52683224},{"name":"Manipulating private properties using underscore(_)","samples":50132504,"opsSec":100264965.48765463},{"name":"Manipulating private properties using Symbol","samples":49803751,"opsSec":99605815.07591587}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,649,805|3825013|
|Adding property in the object creation - small object|7,546,654|3773349|
|Adding property after the function creation - small class|234,633|117322|
|Adding property in the function creation - small class|245,958|123331|
|Adding property after the class creation - small class|238,247|119682|
|Adding property in the class creation - small class|232,766|118146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3825013,"opsSec":7649805.609100401},{"name":"Adding property in the object creation - small object","samples":3773349,"opsSec":7546654.274685132},{"name":"Adding property after the function creation - small class","samples":117322,"opsSec":234633.09613075663},{"name":"Adding property in the function creation - small class","samples":123331,"opsSec":245958.89697792096},{"name":"Adding property after the class creation - small class","samples":119682,"opsSec":238247.55433009015},{"name":"Adding property in the class creation - small class","samples":118146,"opsSec":232766.88426684172}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,656,532|50397038|
|Getter|53,583,007|26791522|
|Method|100,945,730|50473685|
|DefineProperty (getter)|94,129,053|47078598|
|DefineProperty (getter & enumerable=false)|53,308,561|26706136|
|DefineProperty (getter & configurable=false)|100,704,928|50361967|
|DefineProperty (getter & enumerable=false & configurable=false)|53,609,802|26804907|
|DefineProperty (writable)|99,372,255|49700135|
|DefineProperty (writable & enumerable=false)|101,000,671|50503905|
|DefineProperty (writable & enumerable=false & configurable=false)|100,956,581|50480030|
|DefineProperties (getter)|48,762,744|24384543|
|DefineProperties (getter & enumerable=false)|47,027,590|23514503|
|DefineProperties (getter & enumerable=false & configurable=false)|47,903,621|23951813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50397038,"opsSec":100656532.47201216},{"name":"Getter","samples":26791522,"opsSec":53583007.99221862},{"name":"Method","samples":50473685,"opsSec":100945730.84322257},{"name":"DefineProperty (getter)","samples":47078598,"opsSec":94129053.67204934},{"name":"DefineProperty (getter & enumerable=false)","samples":26706136,"opsSec":53308561.04741923},{"name":"DefineProperty (getter & configurable=false)","samples":50361967,"opsSec":100704928.56306186},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26804907,"opsSec":53609802.52750226},{"name":"DefineProperty (writable)","samples":49700135,"opsSec":99372255.17256626},{"name":"DefineProperty (writable & enumerable=false)","samples":50503905,"opsSec":101000671.67652859},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50480030,"opsSec":100956581.2381237},{"name":"DefineProperties (getter)","samples":24384543,"opsSec":48762744.50260293},{"name":"DefineProperties (getter & enumerable=false)","samples":23514503,"opsSec":47027590.845736265},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23951813,"opsSec":47903621.30544512}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,410,630|45208914|
|Setter|11,390,657|5695552|
|Method|92,917,739|46458875|
|DefineProperty (setter)|91,348,135|45674074|
|DefineProperty (setter & enumerable=false)|11,549,969|5777454|
|DefineProperty (setter & configurable=false)|11,102,201|5551320|
|DefineProperty (setter & enumerable=false & configurable=false)|11,339,798|5669901|
|DefineProperty (writable)|92,072,261|46036135|
|DefineProperty (writable & enumerable=false)|92,103,648|46061663|
|DefineProperty (writable & enumerable=false & configurable=false)|91,366,803|45683407|
|DefineProperties (setter)|83,536,367|41768192|
|DefineProperties (setter & enumerable=false)|11,529,079|5764711|
|DefineProperties (setter & enumerable=false & configurable=false)|11,375,753|5687880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:20:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45208914,"opsSec":90410630.59051995},{"name":"Setter","samples":5695552,"opsSec":11390657.349544011},{"name":"Method","samples":46458875,"opsSec":92917739.03570679},{"name":"DefineProperty (setter)","samples":45674074,"opsSec":91348135.02856483},{"name":"DefineProperty (setter & enumerable=false)","samples":5777454,"opsSec":11549969.902767831},{"name":"DefineProperty (setter & configurable=false)","samples":5551320,"opsSec":11102201.418635158},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5669901,"opsSec":11339798.280546164},{"name":"DefineProperty (writable)","samples":46036135,"opsSec":92072261.71349646},{"name":"DefineProperty (writable & enumerable=false)","samples":46061663,"opsSec":92103648.05559291},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45683407,"opsSec":91366803.4014508},{"name":"DefineProperties (setter)","samples":41768192,"opsSec":83536367.29272655},{"name":"DefineProperties (setter & enumerable=false)","samples":5764711,"opsSec":11529079.355761549},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5687880,"opsSec":11375753.675080957}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,401,060|1700975|
|Using replaceAll()|3,043,334|1521668|
|Using replaceAll(//g)|3,096,421|1548393|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1700975,"opsSec":3401060.0378177846},{"name":"Using replaceAll()","samples":1521668,"opsSec":3043334.9470061082},{"name":"Using replaceAll(//g)","samples":1548393,"opsSec":3096421.9041339806}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,323,561|11162460|
|{ ...object, __proto__: null }|22,143,199|11071606|
|{ ...object, newProp: true }|846,767|423649|
|structuredClone|287,802|143904|
|JSON.parse + JSON.stringify|189,301|94652|
|loop + object.keys starting with {}|1,532,739|766376|
|loop + object.keys starting with { __proto__: null }|807,299|403889|
|loop + object.keys starting with { randomProp: true }|572,383|286197|
|object.keys + reduce(FN, {})|1,529,579|764834|
|object.keys + reduce(FN, { __proto__: null })|828,034|414056|
|object.keys + reduce(FN, { newProp: true })|576,211|288224|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11162460,"opsSec":22323561.923786804},{"name":"{ ...object, __proto__: null }","samples":11071606,"opsSec":22143199.821240097},{"name":"{ ...object, newProp: true }","samples":423649,"opsSec":846767.1735136646},{"name":"structuredClone","samples":143904,"opsSec":287802.31532866764},{"name":"JSON.parse + JSON.stringify","samples":94652,"opsSec":189301.4171714641},{"name":"loop + object.keys starting with {}","samples":766376,"opsSec":1532739.9833185307},{"name":"loop + object.keys starting with { __proto__: null }","samples":403889,"opsSec":807299.1053269254},{"name":"loop + object.keys starting with { randomProp: true }","samples":286197,"opsSec":572383.8756740071},{"name":"object.keys + reduce(FN, {})","samples":764834,"opsSec":1529579.0396830519},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":414056,"opsSec":828034.5638636567},{"name":"object.keys + reduce(FN, { newProp: true })","samples":288224,"opsSec":576211.0666190947}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|266,850|133426|
|Sort using first char|1,354,284|677199|
|Sort using localeCompare|1,241,903|621092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:35:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":133426,"opsSec":266850.37114533456},{"name":"Sort using first char","samples":677199,"opsSec":1354284.17783199},{"name":"Sort using localeCompare","samples":621092,"opsSec":1241903.6725354204}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,803|902|
|{...smallObject} - Total keys: 2|37,962,633|18981376|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,088|545|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,442|3222|
|{ ...bigObject, ...anotherBigObject }|1,132|567|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,291,997|6146614|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,175,508|13587758|
|{ ...smallObject, ...anotherSmallObject }|20,194,622|10099113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":902,"opsSec":1803.4746081701985},{"name":"{...smallObject} - Total keys: 2","samples":18981376,"opsSec":37962633.55658331},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":545,"opsSec":1088.6341625660832},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3222,"opsSec":6442.09097652838},{"name":"{ ...bigObject, ...anotherBigObject }","samples":567,"opsSec":1132.81304755128},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6146614,"opsSec":12291997.423553934},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13587758,"opsSec":27175508.499559656},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10099113,"opsSec":20194622.794622492}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,079|1041|
|streams.web.Readable reading 1e3 * "some data"|1,547|776|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:44:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1041,"opsSec":2079.033410594156},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":776,"opsSec":1547.1755785448745}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|8,286|4145|
|streams.web.WritableStream writing 1e3 * "some data"|1,429|716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:48:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4145,"opsSec":8286.549265435593},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":716,"opsSec":1429.0372884547553}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|101,118,164|50559094|
|Using backtick (`)|101,032,893|50529804|
|Using array.join|10,741,906|5370955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:51:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50559094,"opsSec":101118164.13611327},{"name":"Using backtick (`)","samples":50529804,"opsSec":101032893.28648876},{"name":"Using array.join","samples":5370955,"opsSec":10741906.046978574}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|49,752,260|24877033|
|(short string) (true) String#slice and strict comparison|61,304,440|30659231|
|(long string) (true) String#endsWith|50,827,761|25413884|
|(long string) (true) String#slice and strict comparison|60,171,839|30091037|
|(short string) (false) String#endsWith|52,538,948|26278757|
|(short string) (false) String#slice and strict comparison|62,144,087|31072989|
|(long string) (false) String#endsWith|55,236,595|27621020|
|(long string) (false) String#slice and strict comparison|58,481,436|29240725|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":24877033,"opsSec":49752260.191964075},{"name":"(short string) (true) String#slice and strict comparison","samples":30659231,"opsSec":61304440.57096149},{"name":"(long string) (true) String#endsWith","samples":25413884,"opsSec":50827761.087424494},{"name":"(long string) (true) String#slice and strict comparison","samples":30091037,"opsSec":60171839.73281088},{"name":"(short string) (false) String#endsWith","samples":26278757,"opsSec":52538948.83703894},{"name":"(short string) (false) String#slice and strict comparison","samples":31072989,"opsSec":62144087.576855905},{"name":"(long string) (false) String#endsWith","samples":27621020,"opsSec":55236595.77064765},{"name":"(long string) (false) String#slice and strict comparison","samples":29240725,"opsSec":58481436.432306744}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,570,812|8286362|
|Using indexof|16,702,992|8352264|
|Using RegExp.test|13,847,966|6924534|
|Using RegExp.text with cached regex pattern|14,472,177|7236092|
|Using new RegExp.test|4,542,908|2271815|
|Using new RegExp.test with cached regex pattern|5,361,147|2681646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8286362,"opsSec":16570812.192255756},{"name":"Using indexof","samples":8352264,"opsSec":16702992.79452627},{"name":"Using RegExp.test","samples":6924534,"opsSec":13847966.255804688},{"name":"Using RegExp.text with cached regex pattern","samples":7236092,"opsSec":14472177.574353155},{"name":"Using new RegExp.test","samples":2271815,"opsSec":4542908.985829041},{"name":"Using new RegExp.test with cached regex pattern","samples":2681646,"opsSec":5361147.444521538}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,288,676|44678137|
|(short string) (true) String#slice and strict comparison|64,477,327|32258173|
|(long string) (true) String#startsWith|64,644,172|32322186|
|(long string) (true) String#slice and strict comparison|59,860,451|29933448|
|(short string) (false) String#startsWith|100,613,984|50307481|
|(short string) (false) String#slice and strict comparison|63,827,400|31913717|
|(long string) (false) String#startsWith|91,802,806|45901411|
|(long string) (false) String#slice and strict comparison|58,736,181|29393145|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:05:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44678137,"opsSec":89288676.75721946},{"name":"(short string) (true) String#slice and strict comparison","samples":32258173,"opsSec":64477327.029729344},{"name":"(long string) (true) String#startsWith","samples":32322186,"opsSec":64644172.895947486},{"name":"(long string) (true) String#slice and strict comparison","samples":29933448,"opsSec":59860451.66321575},{"name":"(short string) (false) String#startsWith","samples":50307481,"opsSec":100613984.43452722},{"name":"(short string) (false) String#slice and strict comparison","samples":31913717,"opsSec":63827400.809751585},{"name":"(long string) (false) String#startsWith","samples":45901411,"opsSec":91802806.94433966},{"name":"(long string) (false) String#slice and strict comparison","samples":29393145,"opsSec":58736181.69350781}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|96,732,385|48366194|
|Using this|102,268,046|51145922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:10:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":48366194,"opsSec":96732385.67842275},{"name":"Using this","samples":51145922,"opsSec":102268046.02115479}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,769,957|5385823|
|Date.now()|20,966,656|10484355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:16:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5385823,"opsSec":10769957.033798046},{"name":"Date.now()","samples":10484355,"opsSec":20966656.525659874}]}-->
