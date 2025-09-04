## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|69,597,806|34799548|
|Using dot notation|79,133,496|39566778|
|Using define property (writable)|4,822,552|2411648|
|Using define property initialized (writable)|6,491,582|3245801|
|Using define property (getter)|2,265,979|1134154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":34799548,"opsSec":69597806.07426222},{"name":"Using dot notation","samples":39566778,"opsSec":79133496.96641126},{"name":"Using define property (writable)","samples":2411648,"opsSec":4822552.52636722},{"name":"Using define property initialized (writable)","samples":3245801,"opsSec":6491582.09680929},{"name":"Using define property (getter)","samples":1134154,"opsSec":2265979.4342138134}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.014ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|29.737ms
new Array(length)|1,000,000|7.769ms
array.push|10,000,000|256.872ms
new Array(length)|10,000,000|70.752ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.015ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.349ms
new Array(length)|10,000|0.122ms
array.push|1,000,000|19.156ms
new Array(length)|1,000,000|12.474ms
array.push|10,000,000|371.479ms
new Array(length)|10,000,000|52.192ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|162|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:22:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":162,"opsSec":323.801193191007},{"name":"Array.from","samples":12,"opsSec":23.22927468723011}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,515|2265|
|new Blob (1024)|599|300|
|text (128)|4,220|2111|
|text (1024)|536|270|
|arrayBuffer (128)|4,258|2130|
|arrayBuffer (1024)|533|267|
|slice (0, 64)|163,731|81868|
|slice (0, 512)|21,609|10807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2265,"opsSec":4515.007880213687},{"name":"new Blob (1024)","samples":300,"opsSec":599.1964081099412},{"name":"text (128)","samples":2111,"opsSec":4220.897628166452},{"name":"text (1024)","samples":270,"opsSec":536.7964054935712},{"name":"arrayBuffer (128)","samples":2130,"opsSec":4258.739872941515},{"name":"arrayBuffer (1024)","samples":267,"opsSec":533.459931566801},{"name":"slice (0, 64)","samples":81868,"opsSec":163731.81075788994},{"name":"slice (0, 512)","samples":10807,"opsSec":21609.75597358532}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.88 ms|1|
|Gzip|134.79 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135881236},{"name":"Gzip","samples":1,"totalTime":0.134790446}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,841|3421|
|crypto.verify('RSA-SHA256')|6,904|3453|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3421,"opsSec":6841.3053338564005},{"name":"crypto.verify('RSA-SHA256')","samples":3453,"opsSec":6904.786456161184}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,534,858|767716|
|fromUnixToISOString(new Date())|2,763,539|1383317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":767716,"opsSec":1534858.5461499875},{"name":"fromUnixToISOString(new Date())","samples":1383317,"opsSec":2763539.4438016196}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,702|10854|
|Intl.DateTimeFormat().format(new Date())|21,384|10693|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,340|10671|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,983|9992|
|Reusing Intl.DateTimeFormat()|419,135|209603|
|Date.toLocaleDateString()|1,065,602|532889|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,032|13021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10854,"opsSec":21702.324885447106},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10693,"opsSec":21384.031514362978},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10671,"opsSec":21340.83969854559},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9992,"opsSec":19983.664554206793},{"name":"Reusing Intl.DateTimeFormat()","samples":209603,"opsSec":419135.4670453347},{"name":"Date.toLocaleDateString()","samples":532889,"opsSec":1065602.239566606},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13021,"opsSec":26032.966404459858}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,095,484|547766|
|Using brackets {}|1,115,489|557746|
|Using '' + |1,120,756|560379|
|Using date.toString()|1,232,289|616146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:40:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":547766,"opsSec":1095484.0747626973},{"name":"Using brackets {}","samples":557746,"opsSec":1115489.8181019158},{"name":"Using '' + ","samples":560379,"opsSec":1120756.527325923},{"name":"Using date.toString()","samples":616146,"opsSec":1232289.1608057737}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,155,040|2077524|
|Using delete property (proto: null)|16,952,091|8477355|
|Using delete property (cached proto: null)|4,069,387|2037306|
|Using undefined assignment|78,284,961|39152727|
|Using undefined assignment (proto: null)|19,042,275|9521141|
|Using undefined property (cached proto: null)|77,906,120|38954281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:40:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2077524,"opsSec":4155040.7619189927},{"name":"Using delete property (proto: null)","samples":8477355,"opsSec":16952091.95282299},{"name":"Using delete property (cached proto: null)","samples":2037306,"opsSec":4069387.3461413877},{"name":"Using undefined assignment","samples":39152727,"opsSec":78284961.50219749},{"name":"Using undefined assignment (proto: null)","samples":9521141,"opsSec":19042275.48754178},{"name":"Using undefined property (cached proto: null)","samples":38954281,"opsSec":77906120.7338007}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|343,134|171568|
|NodeError|310,840|155480|
|NodeError Range|301,364|150739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":171568,"opsSec":343134.6871666869},{"name":"NodeError","samples":155480,"opsSec":310840.44454821787},{"name":"NodeError Range","samples":150739,"opsSec":301364.60071985354}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,163,678|35081859|
|using Array.includes (first item)|78,558,790|39283828|
|Using raw comparison|97,629,149|48814603|
|Using raw comparison (first item)|97,831,492|48946335|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35081859,"opsSec":70163678.98899448},{"name":"using Array.includes (first item)","samples":39283828,"opsSec":78558790.01207681},{"name":"Using raw comparison","samples":48814603,"opsSec":97629149.17983519},{"name":"Using raw comparison (first item)","samples":48946335,"opsSec":97831492.25029917}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,408,454|22206915|
|Using Object.getOwnPropertyNames()|46,743,003|23373138|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:54:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":22206915,"opsSec":44408454.88943709},{"name":"Using Object.getOwnPropertyNames()","samples":23373138,"opsSec":46743003.61580286}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|94,589,972|47324148|
|Length = 10_000 - Array.at|93,329,085|46664551|
|Length = 1_000_000 - Array.at|87,189,704|43598579|
|Length = 100 - Array[length - 1]|87,722,841|43861428|
|Length = 10_000 - Array[length - 1]|92,941,941|46471003|
|Length = 1_000_000 - Array[length - 1]|90,704,008|45352013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47324148,"opsSec":94589972.57962717},{"name":"Length = 10_000 - Array.at","samples":46664551,"opsSec":93329085.01410653},{"name":"Length = 1_000_000 - Array.at","samples":43598579,"opsSec":87189704.84965004},{"name":"Length = 100 - Array[length - 1]","samples":43861428,"opsSec":87722841.96434529},{"name":"Length = 10_000 - Array[length - 1]","samples":46471003,"opsSec":92941941.8700601},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45352013,"opsSec":90704008.04060641}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,610,979|47306749|
|~ (small)|95,559,701|47780466|
|Math.floor (long)|94,137,408|47068730|
|~ (long)|95,351,899|47679515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:00:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47306749,"opsSec":94610979.83416073},{"name":"~ (small)","samples":47780466,"opsSec":95559701.38216561},{"name":"Math.floor (long)","samples":47068730,"opsSec":94137408.22442548},{"name":"~ (long)","samples":47679515,"opsSec":95351899.3942595}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,569,212|15789002|
|Object.create({})|2,004,419|1002822|
|new Function with empty prototype|71,648,790|35828670|
|Empty class|75,393,946|37709810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15789002,"opsSec":31569212.03758596},{"name":"Object.create({})","samples":1002822,"opsSec":2004419.5241657216},{"name":"new Function with empty prototype","samples":35828670,"opsSec":71648790.43643238},{"name":"Empty class","samples":37709810,"opsSec":75393946.25027129}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|94,167,013|47162339|
|Using parseInt(x, 10) - big number (10 len)|93,384,866|46703536|
|Using + - small number (2 len)|94,615,800|47307906|
|Using + - big number (10 len)|93,094,243|46550781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:11:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47162339,"opsSec":94167013.79213977},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":46703536,"opsSec":93384866.57288682},{"name":"Using + - small number (2 len)","samples":47307906,"opsSec":94615800.45687233},{"name":"Using + - big number (10 len)","samples":46550781,"opsSec":93094243.11679463}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|885,778|444759|
|Using ? operator to avoid rejection|1,208,364|618405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:13:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":444759,"opsSec":885778.5071049979},{"name":"Using ? operator to avoid rejection","samples":618405,"opsSec":1208364.235865477}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,034,111|46517062|
|Raw usage underscore usage|92,885,818|46442911|
|Manipulating private properties using #|93,719,765|46859889|
|Manipulating private properties using underscore(_)|93,217,593|46615193|
|Manipulating private properties using Symbol|93,767,411|46884407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:19:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":46517062,"opsSec":93034111.34736086},{"name":"Raw usage underscore usage","samples":46442911,"opsSec":92885818.09879565},{"name":"Manipulating private properties using #","samples":46859889,"opsSec":93719765.81643043},{"name":"Manipulating private properties using underscore(_)","samples":46615193,"opsSec":93217593.00397132},{"name":"Manipulating private properties using Symbol","samples":46884407,"opsSec":93767411.23952787}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,577,848|3788925|
|Adding property in the object creation - small object|7,530,002|3765003|
|Adding property after the function creation - small class|280,230|140119|
|Adding property in the function creation - small class|288,720|144364|
|Adding property after the class creation - small class|280,106|143284|
|Adding property in the class creation - small class|290,343|145173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3788925,"opsSec":7577848.226783515},{"name":"Adding property in the object creation - small object","samples":3765003,"opsSec":7530002.777158811},{"name":"Adding property after the function creation - small class","samples":140119,"opsSec":280230.7700461328},{"name":"Adding property in the function creation - small class","samples":144364,"opsSec":288720.0844501647},{"name":"Adding property after the class creation - small class","samples":143284,"opsSec":280106.6143436071},{"name":"Adding property in the class creation - small class","samples":145173,"opsSec":290343.30329139903}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|92,363,874|46197957|
|Getter|54,018,134|27009078|
|Method|95,344,608|47672329|
|DefineProperty (getter)|90,994,775|45502872|
|DefineProperty (getter & enumerable=false)|54,334,486|27183490|
|DefineProperty (getter & configurable=false)|93,305,318|46652730|
|DefineProperty (getter & enumerable=false & configurable=false)|54,324,608|27163932|
|DefineProperty (writable)|94,217,936|47122551|
|DefineProperty (writable & enumerable=false)|94,223,229|47111619|
|DefineProperty (writable & enumerable=false & configurable=false)|94,650,641|47327724|
|DefineProperties (getter)|53,659,368|26829696|
|DefineProperties (getter & enumerable=false)|51,574,035|25787037|
|DefineProperties (getter & enumerable=false & configurable=false)|50,942,229|25471128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":46197957,"opsSec":92363874.81910275},{"name":"Getter","samples":27009078,"opsSec":54018134.6088187},{"name":"Method","samples":47672329,"opsSec":95344608.23011452},{"name":"DefineProperty (getter)","samples":45502872,"opsSec":90994775.85369769},{"name":"DefineProperty (getter & enumerable=false)","samples":27183490,"opsSec":54334486.78154593},{"name":"DefineProperty (getter & configurable=false)","samples":46652730,"opsSec":93305318.36252673},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27163932,"opsSec":54324608.217580296},{"name":"DefineProperty (writable)","samples":47122551,"opsSec":94217936.33085361},{"name":"DefineProperty (writable & enumerable=false)","samples":47111619,"opsSec":94223229.70835578},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47327724,"opsSec":94650641.45112583},{"name":"DefineProperties (getter)","samples":26829696,"opsSec":53659368.92647136},{"name":"DefineProperties (getter & enumerable=false)","samples":25787037,"opsSec":51574035.525769494},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25471128,"opsSec":50942229.91757829}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,387,304|49193663|
|Setter|10,613,172|5312898|
|Method|92,904,235|46452125|
|DefineProperty (setter)|97,093,288|48557590|
|DefineProperty (setter & enumerable=false)|10,623,481|5311994|
|DefineProperty (setter & configurable=false)|10,648,468|5324235|
|DefineProperty (setter & enumerable=false & configurable=false)|10,666,996|5333500|
|DefineProperty (writable)|97,473,739|48737976|
|DefineProperty (writable & enumerable=false)|91,549,196|45781501|
|DefineProperty (writable & enumerable=false & configurable=false)|96,792,580|48396764|
|DefineProperties (setter)|96,706,442|48353251|
|DefineProperties (setter & enumerable=false)|10,747,328|5373666|
|DefineProperties (setter & enumerable=false & configurable=false)|10,643,294|5321650|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:31:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":49193663,"opsSec":98387304.74834216},{"name":"Setter","samples":5312898,"opsSec":10613172.90441095},{"name":"Method","samples":46452125,"opsSec":92904235.87855615},{"name":"DefineProperty (setter)","samples":48557590,"opsSec":97093288.3762698},{"name":"DefineProperty (setter & enumerable=false)","samples":5311994,"opsSec":10623481.451157447},{"name":"DefineProperty (setter & configurable=false)","samples":5324235,"opsSec":10648468.509214409},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5333500,"opsSec":10666996.991906848},{"name":"DefineProperty (writable)","samples":48737976,"opsSec":97473739.5410599},{"name":"DefineProperty (writable & enumerable=false)","samples":45781501,"opsSec":91549196.19811493},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48396764,"opsSec":96792580.01347136},{"name":"DefineProperties (setter)","samples":48353251,"opsSec":96706442.42883147},{"name":"DefineProperties (setter & enumerable=false)","samples":5373666,"opsSec":10747328.001993984},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5321650,"opsSec":10643294.465486879}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,966,010|1983622|
|Using replaceAll()|2,966,897|1483519|
|Using replaceAll(//g)|3,308,505|1655296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1983622,"opsSec":3966010.340755425},{"name":"Using replaceAll()","samples":1483519,"opsSec":2966897.7844107086},{"name":"Using replaceAll(//g)","samples":1655296,"opsSec":3308505.9208467873}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,444,248|12227015|
|{ ...object, __proto__: null }|2,303,205|1151889|
|{ ...object, newProp: true }|22,520,392|11260984|
|structuredClone|284,328|142165|
|JSON.parse + JSON.stringify|306,030|153037|
|loop + object.keys starting with {}|1,713,071|856814|
|loop + object.keys starting with { __proto__: null }|902,709|451356|
|loop + object.keys starting with { randomProp: true }|666,867|333476|
|object.keys + reduce(FN, {})|1,768,170|884257|
|object.keys + reduce(FN, { __proto__: null })|932,578|466415|
|object.keys + reduce(FN, { newProp: true })|659,698|329851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12227015,"opsSec":24444248.536171257},{"name":"{ ...object, __proto__: null }","samples":1151889,"opsSec":2303205.5106318668},{"name":"{ ...object, newProp: true }","samples":11260984,"opsSec":22520392.653493103},{"name":"structuredClone","samples":142165,"opsSec":284328.93035456404},{"name":"JSON.parse + JSON.stringify","samples":153037,"opsSec":306030.02776942996},{"name":"loop + object.keys starting with {}","samples":856814,"opsSec":1713071.1696424498},{"name":"loop + object.keys starting with { __proto__: null }","samples":451356,"opsSec":902709.5699058378},{"name":"loop + object.keys starting with { randomProp: true }","samples":333476,"opsSec":666867.85194697},{"name":"object.keys + reduce(FN, {})","samples":884257,"opsSec":1768170.0909173165},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":466415,"opsSec":932578.2877943413},{"name":"object.keys + reduce(FN, { newProp: true })","samples":329851,"opsSec":659698.5405408534}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|310,866|155434|
|Sort using first char|1,283,726|642400|
|Sort using localeCompare|1,190,054|595125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":155434,"opsSec":310866.07263034966},{"name":"Sort using first char","samples":642400,"opsSec":1283726.547860679},{"name":"Sort using localeCompare","samples":595125,"opsSec":1190054.3027102451}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,880|1441|
|{...smallObject} - Total keys: 2|36,797,161|18429555|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,115|558|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,464|3233|
|{ ...bigObject, ...anotherBigObject }|1,501|751|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,917,953|5958978|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,457,786|12729640|
|{ ...smallObject, ...anotherSmallObject }|19,832,138|9916109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:52:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1441,"opsSec":2880.6800723908304},{"name":"{...smallObject} - Total keys: 2","samples":18429555,"opsSec":36797161.97781036},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":558,"opsSec":1115.270118162789},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3233,"opsSec":6464.068613867},{"name":"{ ...bigObject, ...anotherBigObject }","samples":751,"opsSec":1501.4586070583841},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5958978,"opsSec":11917953.330378452},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12729640,"opsSec":25457786.493497573},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9916109,"opsSec":19832138.1954759}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,825|913|
|streams.web.Readable reading 1e3 * "some data"|1,635|818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:58:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":913,"opsSec":1825.3046428950706},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":818,"opsSec":1635.364569284417}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,451|4731|
|streams.web.WritableStream writing 1e3 * "some data"|1,710|931|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:02:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4731,"opsSec":9451.997046046139},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":931,"opsSec":1710.7312133038279}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,421,458|46722697|
|Using backtick (`)|83,041,165|41552535|
|Using array.join|10,182,391|5098347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:05:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":46722697,"opsSec":93421458.3013257},{"name":"Using backtick (`)","samples":41552535,"opsSec":83041165.83691253},{"name":"Using array.join","samples":5098347,"opsSec":10182391.58876181}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,748,023|41374025|
|(short string) (true) String#slice and strict comparison|56,424,090|28217201|
|(long string) (true) String#endsWith|66,720,945|33581413|
|(long string) (true) String#slice and strict comparison|49,776,962|24888486|
|(short string) (false) String#endsWith|91,227,748|45614252|
|(short string) (false) String#slice and strict comparison|56,170,457|28085895|
|(long string) (false) String#endsWith|86,197,200|43098636|
|(long string) (false) String#slice and strict comparison|51,468,689|25735049|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:11:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41374025,"opsSec":82748023.68612845},{"name":"(short string) (true) String#slice and strict comparison","samples":28217201,"opsSec":56424090.49746159},{"name":"(long string) (true) String#endsWith","samples":33581413,"opsSec":66720945.18977823},{"name":"(long string) (true) String#slice and strict comparison","samples":24888486,"opsSec":49776962.1441615},{"name":"(short string) (false) String#endsWith","samples":45614252,"opsSec":91227748.8166953},{"name":"(short string) (false) String#slice and strict comparison","samples":28085895,"opsSec":56170457.52440661},{"name":"(long string) (false) String#endsWith","samples":43098636,"opsSec":86197200.80111215},{"name":"(long string) (false) String#slice and strict comparison","samples":25735049,"opsSec":51468689.50784292}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,006,012|8004924|
|Using indexof|15,345,287|7672668|
|Using RegExp.test|12,608,581|6305545|
|Using RegExp.text with cached regex pattern|13,339,192|6669937|
|Using new RegExp.test|4,620,784|2310402|
|Using new RegExp.test with cached regex pattern|5,138,903|2570641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:16:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8004924,"opsSec":16006012.831277523},{"name":"Using indexof","samples":7672668,"opsSec":15345287.570272429},{"name":"Using RegExp.test","samples":6305545,"opsSec":12608581.194948154},{"name":"Using RegExp.text with cached regex pattern","samples":6669937,"opsSec":13339192.87413346},{"name":"Using new RegExp.test","samples":2310402,"opsSec":4620784.648153894},{"name":"Using new RegExp.test with cached regex pattern","samples":2570641,"opsSec":5138903.057885219}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|82,398,567|41200150|
|(short string) (true) String#slice and strict comparison|56,252,066|28129282|
|(long string) (true) String#startsWith|66,911,645|33456068|
|(long string) (true) String#slice and strict comparison|49,886,421|24948789|
|(short string) (false) String#startsWith|90,829,023|45414517|
|(short string) (false) String#slice and strict comparison|55,373,348|27686685|
|(long string) (false) String#startsWith|87,540,763|43770390|
|(long string) (false) String#slice and strict comparison|51,384,825|25697686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41200150,"opsSec":82398567.65251367},{"name":"(short string) (true) String#slice and strict comparison","samples":28129282,"opsSec":56252066.32381893},{"name":"(long string) (true) String#startsWith","samples":33456068,"opsSec":66911645.93910514},{"name":"(long string) (true) String#slice and strict comparison","samples":24948789,"opsSec":49886421.799720086},{"name":"(short string) (false) String#startsWith","samples":45414517,"opsSec":90829023.10051723},{"name":"(short string) (false) String#slice and strict comparison","samples":27686685,"opsSec":55373348.182900816},{"name":"(long string) (false) String#startsWith","samples":43770390,"opsSec":87540763.01709197},{"name":"(long string) (false) String#slice and strict comparison","samples":25697686,"opsSec":51384825.88110582}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|90,149,312|45074670|
|Using this|96,278,436|48194141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:26:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":45074670,"opsSec":90149312.77490754},{"name":"Using this","samples":48194141,"opsSec":96278436.39146599}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,477,996|6241962|
|Date.now()|19,847,045|9934078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6241962,"opsSec":12477996.826727336},{"name":"Date.now()","samples":9934078,"opsSec":19847045.729503907}]}-->
