## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,099,625|7549813|
|Using dot notation|15,103,744|7551873|
|Using define property (writable)|3,521,863|1760932|
|Using define property initialized (writable)|4,403,450|2201726|
|Using define property (getter)|2,326,675|1163338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:30:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15099625.728196258,"samples":7549813},{"name":"Using dot notation","opsSec":15103744.942746425,"samples":7551873},{"name":"Using define property (writable)","opsSec":3521863.3097058325,"samples":1760932},{"name":"Using define property initialized (writable)","opsSec":4403450.361917497,"samples":2201726},{"name":"Using define property (getter)","opsSec":2326675.4369405867,"samples":1163338}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.011ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.271ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|32.01ms
new Array(length)|1,000,000|8.102ms
array.push|100,000,000|1,964.034ms
new Array(length)|100,000,000|4,157.641ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.307ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|19.533ms
new Array(length)|1,000,000|7.116ms
array.push|100,000,000|2,105.143ms
new Array(length)|100,000,000|4,789.418ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|233|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:52:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":233.88029470970562,"samples":118},{"name":"Array.from","opsSec":23.59023808347528,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|315,017|157509|
|[True conditional] Using constructor name|325,934|162968|
|[True conditional] Check if property is valid then instanceof |329,050|164526|
|[False conditional] Using instanceof only|14,346,824|7173413|
|[False conditional] Using constructor name|14,291,786|7146078|
|[False conditional] Check if property is valid then instanceof |14,253,977|7126989|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:49:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":315017.69002258446,"samples":157509},{"name":"[True conditional] Using constructor name","opsSec":325934.6147778327,"samples":162968},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329050.6541828243,"samples":164526},{"name":"[False conditional] Using instanceof only","opsSec":14346824.220986448,"samples":7173413},{"name":"[False conditional] Using constructor name","opsSec":14291786.785957398,"samples":7146078},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14253977.914440168,"samples":7126989}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,646|3324|
|crypto.verify('RSA-SHA256')|7,269|3635|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 15:55:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6646.825173650557,"samples":3324},{"name":"crypto.verify('RSA-SHA256')","opsSec":7269.399198695118,"samples":3635}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,061,758|530880|
|Using brackets {}|1,068,015|534008|
|Using '' + |1,086,140|543071|
|Using date.toString()|1,185,525|592763|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:09:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1061758.3988685089,"samples":530880},{"name":"Using brackets {}","opsSec":1068015.743676348,"samples":534008},{"name":"Using '' + ","opsSec":1086140.6271179772,"samples":543071},{"name":"Using date.toString()","opsSec":1185525.7462970312,"samples":592763}]}-->

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

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,283,531|7641766|
|Getter|13,380,021|6690011|
|Method|15,204,229|7602115|
|DefineProperty (getter)|15,372,668|7686335|
|DefineProperty (getter & enumerable=false)|13,279,174|6639588|
|DefineProperty (getter & configurable=false)|15,337,251|7668627|
|DefineProperty (getter & enumerable=false & configurable=false)|13,401,263|6700632|
|DefineProperty (writable)|15,357,440|7678749|
|DefineProperty (writable & enumerable=false)|15,355,988|7677995|
|DefineProperty (writable & enumerable=false & configurable=false)|15,211,084|7605543|
|DefineProperties (getter)|13,366,308|6683155|
|DefineProperties (getter & enumerable=false)|13,394,230|6697116|
|DefineProperties (getter & enumerable=false & configurable=false)|13,356,950|6678476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:59:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15283531.54149968,"samples":7641766},{"name":"Getter","opsSec":13380021.705673814,"samples":6690011},{"name":"Method","opsSec":15204229.726394903,"samples":7602115},{"name":"DefineProperty (getter)","opsSec":15372668.92392036,"samples":7686335},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13279174.247088019,"samples":6639588},{"name":"DefineProperty (getter & configurable=false)","opsSec":15337251.944806203,"samples":7668627},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13401263.437109888,"samples":6700632},{"name":"DefineProperty (writable)","opsSec":15357440.870382415,"samples":7678749},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15355988.986536784,"samples":7677995},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15211084.14423604,"samples":7605543},{"name":"DefineProperties (getter)","opsSec":13366308.663218718,"samples":6683155},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13394230.044632375,"samples":6697116},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13356950.691018973,"samples":6678476}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,135,859|7567930|
|Setter|6,737,927|3368964|
|Method|15,130,536|7565269|
|DefineProperty (setter)|15,117,902|7558952|
|DefineProperty (setter & enumerable=false)|6,673,943|3336972|
|DefineProperty (setter & configurable=false)|6,611,723|3305862|
|DefineProperty (setter & enumerable=false & configurable=false)|6,647,834|3323918|
|DefineProperty (writable)|15,184,278|7592140|
|DefineProperty (writable & enumerable=false)|15,217,736|7608869|
|DefineProperty (writable & enumerable=false & configurable=false)|15,222,493|7611247|
|DefineProperties (setter)|15,018,574|7509288|
|DefineProperties (setter & enumerable=false)|6,741,154|3370578|
|DefineProperties (setter & enumerable=false & configurable=false)|6,788,281|3394141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:13:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15135859.72754985,"samples":7567930},{"name":"Setter","opsSec":6737927.016264174,"samples":3368964},{"name":"Method","opsSec":15130536.396224469,"samples":7565269},{"name":"DefineProperty (setter)","opsSec":15117902.427740036,"samples":7558952},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6673943.345940462,"samples":3336972},{"name":"DefineProperty (setter & configurable=false)","opsSec":6611723.325602549,"samples":3305862},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6647834.869880169,"samples":3323918},{"name":"DefineProperty (writable)","opsSec":15184278.633395568,"samples":7592140},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15217736.265248453,"samples":7608869},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15222493.878218235,"samples":7611247},{"name":"DefineProperties (setter)","opsSec":15018574.58845698,"samples":7509288},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6741154.638183988,"samples":3370578},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6788281.565590827,"samples":3394141}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,415,058|5207530|
|{ ...object, __proto__: null }|2,268,126|1134064|
|{ ...object, newProp: true }|10,262,814|5131408|
|structuredClone|303,085|151543|
|JSON.parse + JSON.stringify|244,205|122103|
|loop + object.keys starting with {}|1,450,006|725004|
|loop + object.keys starting with { __proto__: null }|802,896|401501|
|loop + object.keys starting with { randomProp: true }|652,890|326446|
|object.keys + reduce(FN, {})|1,476,269|738135|
|object.keys + reduce(FN, { __proto__: null })|807,574|403788|
|object.keys + reduce(FN, { newProp: true })|667,542|333772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:27:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10415058.541895676,"samples":5207530},{"name":"{ ...object, __proto__: null }","opsSec":2268126.448603546,"samples":1134064},{"name":"{ ...object, newProp: true }","opsSec":10262814.973690135,"samples":5131408},{"name":"structuredClone","opsSec":303085.7448019056,"samples":151543},{"name":"JSON.parse + JSON.stringify","opsSec":244205.28301341683,"samples":122103},{"name":"loop + object.keys starting with {}","opsSec":1450006.9849991398,"samples":725004},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802896.8510219369,"samples":401501},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652890.1457922109,"samples":326446},{"name":"object.keys + reduce(FN, {})","opsSec":1476269.4242576673,"samples":738135},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":807574.6755774216,"samples":403788},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":667542.3631864504,"samples":333772}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|335,575|167788|
|Sort using first char|1,318,298|659150|
|Sort using localeCompare|1,233,585|616793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":335575.0597186791,"samples":167788},{"name":"Sort using first char","opsSec":1318298.18602157,"samples":659150},{"name":"Sort using localeCompare","opsSec":1233585.9777953092,"samples":616793}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|11,961,965|5980983|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,478|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,874|3438|
|{ ...bigObject, ...anotherBigObject }|1,401|701|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,953,303|3476652|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,322,749|5161375|
|{ ...smallObject, ...anotherSmallObject }|8,776,918|4388460|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.830926619197,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":11961965.545449832,"samples":5980983},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2478.556781000384,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6874.999247609868,"samples":3438},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1401.134650832828,"samples":701},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6953303.332478911,"samples":3476652},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10322749.174181664,"samples":5161375},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8776918.841430452,"samples":4388460}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,129,699|7564850|
|Using backtick (`)|15,377,059|7688530|
|Using array.join|6,278,288|3139145|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:01:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15129699.818438042,"samples":7564850},{"name":"Using backtick (`)","opsSec":15377059.53867975,"samples":7688530},{"name":"Using array.join","opsSec":6278288.229516912,"samples":3139145}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,437,305|7218653|
|(short string) (true) String#slice and strict comparison|15,358,476|7679239|
|(long string) (true) String#endsWith|13,787,381|6893691|
|(long string) (true) String#slice and strict comparison|15,271,773|7635887|
|(short string) (false) String#endsWith|15,095,218|7547610|
|(short string) (false) String#slice and strict comparison|15,324,887|7662444|
|(long string) (false) String#endsWith|14,845,467|7422734|
|(long string) (false) String#slice and strict comparison|15,392,559|7696280|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:13:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14437305.451382797,"samples":7218653},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15358476.77135318,"samples":7679239},{"name":"(long string) (true) String#endsWith","opsSec":13787381.696646303,"samples":6893691},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15271773.847271431,"samples":7635887},{"name":"(short string) (false) String#endsWith","opsSec":15095218.490548536,"samples":7547610},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15324887.693631152,"samples":7662444},{"name":"(long string) (false) String#endsWith","opsSec":14845467.198395915,"samples":7422734},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15392559.969274003,"samples":7696280}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,207,942|7603972|
|Using indexof|15,299,501|7649751|
|Using RegExp.test|8,219,425|4109713|
|Using RegExp.text with cached regex pattern|8,276,553|4138277|
|Using new RegExp.test|3,625,998|1813000|
|Using new RegExp.test with cached regex pattern|3,893,803|1946902|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:22:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15207942.844186047,"samples":7603972},{"name":"Using indexof","opsSec":15299501.755198007,"samples":7649751},{"name":"Using RegExp.test","opsSec":8219425.210934135,"samples":4109713},{"name":"Using RegExp.text with cached regex pattern","opsSec":8276553.784792125,"samples":4138277},{"name":"Using new RegExp.test","opsSec":3625998.520584135,"samples":1813000},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3893803.4003501916,"samples":1946902}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,542,062|7271032|
|(short string) (true) String#slice and strict comparison|15,144,849|7572425|
|(long string) (true) String#startsWith|13,477,614|6738808|
|(long string) (true) String#slice and strict comparison|15,170,182|7585092|
|(short string) (false) String#startsWith|14,812,468|7406235|
|(short string) (false) String#slice and strict comparison|15,252,213|7626108|
|(long string) (false) String#startsWith|14,598,871|7299436|
|(long string) (false) String#slice and strict comparison|15,215,360|7607681|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14542062.051369984,"samples":7271032},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15144849.727402668,"samples":7572425},{"name":"(long string) (true) String#startsWith","opsSec":13477614.436572416,"samples":6738808},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15170182.78639319,"samples":7585092},{"name":"(short string) (false) String#startsWith","opsSec":14812468.696562883,"samples":7406235},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15252213.986699527,"samples":7626108},{"name":"(long string) (false) String#startsWith","opsSec":14598871.883213554,"samples":7299436},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15215360.9957317,"samples":7607681}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,980,630|7490316|
|Using this|15,102,881|7551441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:40:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14980630.801538521,"samples":7490316},{"name":"Using this","opsSec":15102881.456349296,"samples":7551441}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,799,799|3399900|
|Date.now()|8,936,520|4468261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6799799.061629681,"samples":3399900},{"name":"Date.now()","opsSec":8936520.337806825,"samples":4468261}]}-->
