## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,204,937|7602469|
|Using dot notation|15,320,771|7660386|
|Using define property (writable)|3,448,002|1724002|
|Using define property initialized (writable)|4,379,398|2189700|
|Using define property (getter)|2,235,069|1117535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15204937.908768682,"samples":7602469},{"name":"Using dot notation","opsSec":15320771.846775925,"samples":7660386},{"name":"Using define property (writable)","opsSec":3448002.296686339,"samples":1724002},{"name":"Using define property initialized (writable)","opsSec":4379398.624866502,"samples":2189700},{"name":"Using define property (getter)","opsSec":2235069.0299810297,"samples":1117535}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|30.619ms
new Array(length)|1,000,000|8.475ms
array.push|100,000,000|1,966.701ms
new Array(length)|100,000,000|4,215.846ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.315ms
new Array(length)|10,000|0.198ms
array.push|1,000,000|19.726ms
new Array(length)|1,000,000|7.307ms
array.push|100,000,000|2,150.726ms
new Array(length)|100,000,000|4,814.395ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|234|118|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":234.8105343647007,"samples":118},{"name":"Array.from","opsSec":22.21075394620827,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|318,565|159283|
|[True conditional] Using constructor name|325,618|162810|
|[True conditional] Check if property is valid then instanceof |330,367|165184|
|[False conditional] Using instanceof only|15,299,436|7649719|
|[False conditional] Using constructor name|15,339,811|7669906|
|[False conditional] Check if property is valid then instanceof |15,295,420|7647711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":318565.54636268836,"samples":159283},{"name":"[True conditional] Using constructor name","opsSec":325618.68840793264,"samples":162810},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":330367.251387826,"samples":165184},{"name":"[False conditional] Using instanceof only","opsSec":15299436.56185192,"samples":7649719},{"name":"[False conditional] Using constructor name","opsSec":15339811.631790739,"samples":7669906},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15295420.929365022,"samples":7647711}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,658|3330|
|crypto.verify('RSA-SHA256')|7,014|3508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6658.363440849907,"samples":3330},{"name":"crypto.verify('RSA-SHA256')","opsSec":7014.293941341801,"samples":3508}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,668|529835|
|Using brackets {}|1,075,411|537706|
|Using '' + |1,070,893|535447|
|Using date.toString()|1,179,559|589780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1059668.8894669074,"samples":529835},{"name":"Using brackets {}","opsSec":1075411.1740841265,"samples":537706},{"name":"Using '' + ","opsSec":1070893.3296208044,"samples":535447},{"name":"Using date.toString()","opsSec":1179559.240364094,"samples":589780}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,983,939|1491970|
|Using delete property (proto: null)|8,701,295|4350648|
|Using delete property (cached proto: null)|2,909,106|1454554|
|Using undefined assignment|15,232,898|7616450|
|Using undefined assignment (proto: null)|9,325,026|4662514|
|Using undefined property (cached proto: null)|15,252,661|7626331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2983939.4330508504,"samples":1491970},{"name":"Using delete property (proto: null)","opsSec":8701295.582340742,"samples":4350648},{"name":"Using delete property (cached proto: null)","opsSec":2909106.673446622,"samples":1454554},{"name":"Using undefined assignment","opsSec":15232898.293929055,"samples":7616450},{"name":"Using undefined assignment (proto: null)","opsSec":9325026.582618447,"samples":4662514},{"name":"Using undefined property (cached proto: null)","opsSec":15252661.633907808,"samples":7626331}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|317,716|158859|
|NodeError|312,960|156481|
|NodeError Range|313,862|156932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:29:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":317716.2360394684,"samples":158859},{"name":"NodeError","opsSec":312960.3056328881,"samples":156481},{"name":"NodeError Range","opsSec":313862.8437292592,"samples":156932}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,642,615|821308|
|Function returning explicitly undefined|1,632,500|816251|
|Function returning implicitly undefined|1,667,447|833724|
|Function returning string|1,610,377|805189|
|Function returning integer|1,659,802|829902|
|Function returning float|1,645,506|822754|
|Function returning functions|1,616,727|808364|
|Function returning arrow functions|1,609,904|804953|
|Function returning empty object|1,628,695|814348|
|Function returning empty array|1,630,609|815305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1642615.7700335912,"samples":821308},{"name":"Function returning explicitly undefined","opsSec":1632500.4785103735,"samples":816251},{"name":"Function returning implicitly undefined","opsSec":1667447.5998129079,"samples":833724},{"name":"Function returning string","opsSec":1610377.2076938674,"samples":805189},{"name":"Function returning integer","opsSec":1659802.579210691,"samples":829902},{"name":"Function returning float","opsSec":1645506.0813394573,"samples":822754},{"name":"Function returning functions","opsSec":1616727.760724972,"samples":808364},{"name":"Function returning arrow functions","opsSec":1609904.5607446567,"samples":804953},{"name":"Function returning empty object","opsSec":1628695.24102558,"samples":814348},{"name":"Function returning empty array","opsSec":1630609.6575731905,"samples":815305}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,240,298|7620150|
|using Array.includes (first item)|15,301,004|7650503|
|Using raw comparison|15,258,321|7629161|
|Using raw comparison (first item)|15,304,793|7652397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:44:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15240298.994144283,"samples":7620150},{"name":"using Array.includes (first item)","opsSec":15301004.01085102,"samples":7650503},{"name":"Using raw comparison","opsSec":15258321.481224831,"samples":7629161},{"name":"Using raw comparison (first item)","opsSec":15304793.051048558,"samples":7652397}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,096,780|6548391|
|Using Object.getOwnPropertyNames()|13,253,811|6626906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:50:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13096780.821290739,"samples":6548391},{"name":"Using Object.getOwnPropertyNames()","opsSec":13253811.12527998,"samples":6626906}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,046,076|7523039|
|Length = 10_000 - Array.at|15,006,393|7503197|
|Length = 1_000_000 - Array.at|15,062,881|7531441|
|Length = 100 - Array[length - 1]|15,132,091|7566046|
|Length = 10_000 - Array[length - 1]|15,085,789|7542895|
|Length = 1_000_000 - Array[length - 1]|15,138,261|7569131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:59:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15046076.976866009,"samples":7523039},{"name":"Length = 10_000 - Array.at","opsSec":15006393.189702507,"samples":7503197},{"name":"Length = 1_000_000 - Array.at","opsSec":15062881.457745345,"samples":7531441},{"name":"Length = 100 - Array[length - 1]","opsSec":15132091.576239746,"samples":7566046},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15085789.366392024,"samples":7542895},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15138261.848576795,"samples":7569131}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,693,359|6346680|
|Object.create({})|2,078,476|1042807|
|Cached Empty.prototype|15,171,541|7585771|
|Empty.prototype|1,963,651|982858|
|Empty class|1,350,605|675303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:07:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12693359.746127559,"samples":6346680},{"name":"Object.create({})","opsSec":2078476.8223628765,"samples":1042807},{"name":"Cached Empty.prototype","opsSec":15171541.817976512,"samples":7585771},{"name":"Empty.prototype","opsSec":1963651.1148187697,"samples":982858},{"name":"Empty class","opsSec":1350605.1248086097,"samples":675303}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,281,852|7640927|
|Using optional chain (obj.field?.field2) (undefined)|15,346,195|7673098|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,360,543|7680272|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,367,615|7683808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15281852.624632528,"samples":7640927},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15346195.47821765,"samples":7673098},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15360543.139789455,"samples":7680272},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15367615.631151102,"samples":7683808}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,320,789|7660396|
|Using parseInt(x, 10) - big number (10 len)|15,388,163|7694082|
|Using + - small number (2 len)|15,340,846|7670424|
|Using + - big number (10 len)|15,358,939|7679470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:22:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15320789.395459669,"samples":7660396},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15388163.507572945,"samples":7694082},{"name":"Using + - small number (2 len)","opsSec":15340846.09768393,"samples":7670424},{"name":"Using + - big number (10 len)","opsSec":15358939.754239336,"samples":7679470}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,089,146|544574|
|Using ? operator to avoid rejection|1,101,146|551034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:28:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1089146.1876606902,"samples":544574},{"name":"Using ? operator to avoid rejection","opsSec":1101146.9192318788,"samples":551034}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,060,130|7530066|
|Raw usage underscore usage|15,090,203|7545102|
|Manipulating private properties using #|15,131,045|7565523|
|Manipulating private properties using underscore(_)|15,157,256|7578629|
|Manipulating private properties using Symbol|15,127,204|7563603|
|Manipulating private properties using PrivateSymbol|12,160,012|6080007|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:36:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15060130.403613308,"samples":7530066},{"name":"Raw usage underscore usage","opsSec":15090203.185156915,"samples":7545102},{"name":"Manipulating private properties using #","opsSec":15131045.546084004,"samples":7565523},{"name":"Manipulating private properties using underscore(_)","opsSec":15157256.69650912,"samples":7578629},{"name":"Manipulating private properties using Symbol","opsSec":15127204.608313546,"samples":7563603},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12160012.710986104,"samples":6080007}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,719,202|1859602|
|Adding property in the object creation - small object|3,724,626|1862314|
|Adding property after the function creation - small class|264,046|132024|
|Adding property in the function creation - small class|272,252|136127|
|Adding property after the class creation - small class|262,285|131143|
|Adding property in the class creation - small class|263,326|132700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:43:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3719202.289168795,"samples":1859602},{"name":"Adding property in the object creation - small object","opsSec":3724626.852815513,"samples":1862314},{"name":"Adding property after the function creation - small class","opsSec":264046.5382383116,"samples":132024},{"name":"Adding property in the function creation - small class","opsSec":272252.5935431394,"samples":136127},{"name":"Adding property after the class creation - small class","opsSec":262285.60552239255,"samples":131143},{"name":"Adding property in the class creation - small class","opsSec":263326.4135107415,"samples":132700}]}-->
