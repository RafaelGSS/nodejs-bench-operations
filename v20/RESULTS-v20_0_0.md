## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|71,929,195|36018614|
|Using dot notation|63,356,307|31684119|
|Using define property (writable)|4,497,471|2248738|
|Using define property initialized (writable)|5,963,578|2983463|
|Using define property (getter)|2,164,033|1082177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":36018614,"opsSec":71929195.81450549},{"name":"Using dot notation","samples":31684119,"opsSec":63356307.500447206},{"name":"Using define property (writable)","samples":2248738,"opsSec":4497471.808356274},{"name":"Using define property initialized (writable)","samples":2983463,"opsSec":5963578.440659591},{"name":"Using define property (getter)","samples":1082177,"opsSec":2164033.1344790845}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.035ms
new Array(length)|100|0.012ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.283ms
new Array(length)|10,000|0.336ms
array.push|1,000,000|29.813ms
new Array(length)|1,000,000|13.12ms
array.push|10,000,000|260.026ms
new Array(length)|10,000,000|70.422ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.021ms
array.push|100|0.02ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.229ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|28.201ms
new Array(length)|1,000,000|10.01ms
array.push|10,000,000|229.41ms
new Array(length)|10,000,000|69.876ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|236|119|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:11:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":119,"opsSec":236.22804586864186},{"name":"Array.from","samples":11,"opsSec":21.97739984854934}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,936|1994|
|new Blob (1024)|529|265|
|text (128)|4,373|2187|
|text (1024)|566|284|
|arrayBuffer (128)|4,479|2240|
|arrayBuffer (1024)|557|281|
|slice (0, 64)|76,545|38273|
|slice (0, 512)|19,524|12747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:15:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1994,"opsSec":3936.268457772782},{"name":"new Blob (1024)","samples":265,"opsSec":529.2171375558878},{"name":"text (128)","samples":2187,"opsSec":4373.925310851392},{"name":"text (1024)","samples":284,"opsSec":566.4735746410365},{"name":"arrayBuffer (128)","samples":2240,"opsSec":4479.5002221602135},{"name":"arrayBuffer (1024)","samples":281,"opsSec":557.3130131640547},{"name":"slice (0, 64)","samples":38273,"opsSec":76545.0271127054},{"name":"slice (0, 512)","samples":12747,"opsSec":19524.660461796866}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|398,657|199364|
|[True conditional] Using constructor name|313,121|156562|
|[True conditional] Check if property is valid then instanceof |323,157|161580|
|[False conditional] Using instanceof only|45,911,827|22955992|
|[False conditional] Using constructor name|99,758,451|49879232|
|[False conditional] Check if property is valid then instanceof |99,778,497|49907113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":398657.49343571096,"samples":199364},{"name":"[True conditional] Using constructor name","opsSec":313121.3672755439,"samples":156562},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323157.70493397955,"samples":161580},{"name":"[False conditional] Using instanceof only","opsSec":45911827.8079618,"samples":22955992},{"name":"[False conditional] Using constructor name","opsSec":99758451.03140135,"samples":49879232},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99778497.9141379,"samples":49907113}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|163.62 ms|1|
|Gzip|164.15 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:20:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.16362072},{"name":"Gzip","samples":1,"totalTime":0.164146439}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,461|3231|
|crypto.verify('RSA-SHA256')|6,566|3284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3231,"opsSec":6461.417180170349},{"name":"crypto.verify('RSA-SHA256')","samples":3284,"opsSec":6566.780351885243}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,475,527|749141|
|fromUnixToISOString(new Date())|2,083,339|1042035|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":749141,"opsSec":1475527.8002123134},{"name":"fromUnixToISOString(new Date())","samples":1042035,"opsSec":2083339.7602472769}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,491|6247|
|Intl.DateTimeFormat().format(new Date())|12,152|6077|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,792|6397|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,973|6487|
|Reusing Intl.DateTimeFormat()|634,448|317225|
|Date.toLocaleDateString()|646,399|323200|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,666|6334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6247,"opsSec":12491.975675341811},{"name":"Intl.DateTimeFormat().format(new Date())","samples":6077,"opsSec":12152.670862387778},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6397,"opsSec":12792.555285561382},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6487,"opsSec":12973.269163854924},{"name":"Reusing Intl.DateTimeFormat()","samples":317225,"opsSec":634448.6194398041},{"name":"Date.toLocaleDateString()","samples":323200,"opsSec":646399.3833349883},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6334,"opsSec":12666.046237035845}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,078,362|539225|
|Using brackets {}|1,066,471|533333|
|Using '' + |1,061,075|530539|
|Using date.toString()|1,166,827|583426|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:39:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":539225,"opsSec":1078362.7712354348},{"name":"Using brackets {}","samples":533333,"opsSec":1066471.1813104828},{"name":"Using '' + ","samples":530539,"opsSec":1061075.971222743},{"name":"Using date.toString()","samples":583426,"opsSec":1166827.568964361}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,639,920|1819964|
|Using delete property (proto: null)|17,100,501|8550251|
|Using delete property (cached proto: null)|3,654,782|1827392|
|Using undefined assignment|77,680,360|38840228|
|Using undefined assignment (proto: null)|17,536,315|8769404|
|Using undefined property (cached proto: null)|77,848,767|38935018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1819964,"opsSec":3639920.530883071},{"name":"Using delete property (proto: null)","samples":8550251,"opsSec":17100501.657989964},{"name":"Using delete property (cached proto: null)","samples":1827392,"opsSec":3654782.1506802323},{"name":"Using undefined assignment","samples":38840228,"opsSec":77680360.29779612},{"name":"Using undefined assignment (proto: null)","samples":8769404,"opsSec":17536315.52840132},{"name":"Using undefined property (cached proto: null)","samples":38935018,"opsSec":77848767.24969478}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|311,557|155793|
|NodeError|294,792|147417|
|NodeError Range|270,800|135429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":155793,"opsSec":311557.601524621},{"name":"NodeError","samples":147417,"opsSec":294792.87462523254},{"name":"NodeError Range","samples":135429,"opsSec":270800.21610828635}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,619,748|809914|
|Function returning explicitly undefined|1,594,439|797238|
|Function returning implicitly undefined|1,601,011|800568|
|Function returning string|1,575,831|787916|
|Function returning integer|1,611,488|805858|
|Function returning float|1,608,787|804396|
|Function returning functions|1,548,880|774441|
|Function returning arrow functions|1,589,253|794627|
|Function returning empty object|1,604,140|802071|
|Function returning empty array|1,617,059|808600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1619748.991883674,"samples":809914},{"name":"Function returning explicitly undefined","opsSec":1594439.6850417336,"samples":797238},{"name":"Function returning implicitly undefined","opsSec":1601011.809513936,"samples":800568},{"name":"Function returning string","opsSec":1575831.1458995189,"samples":787916},{"name":"Function returning integer","opsSec":1611488.892870328,"samples":805858},{"name":"Function returning float","opsSec":1608787.0288480807,"samples":804396},{"name":"Function returning functions","opsSec":1548880.2156899914,"samples":774441},{"name":"Function returning arrow functions","opsSec":1589253.930072827,"samples":794627},{"name":"Function returning empty object","opsSec":1604140.8450185915,"samples":802071},{"name":"Function returning empty array","opsSec":1617059.0603664168,"samples":808600}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,386,957|34702648|
|using Array.includes (first item)|77,454,939|38732851|
|Using raw comparison|100,964,754|50493343|
|Using raw comparison (first item)|101,206,309|50616428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34702648,"opsSec":69386957.30473217},{"name":"using Array.includes (first item)","samples":38732851,"opsSec":77454939.79102592},{"name":"Using raw comparison","samples":50493343,"opsSec":100964754.63792706},{"name":"Using raw comparison (first item)","samples":50616428,"opsSec":101206309.18027677}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,411,740|21255285|
|Using Object.getOwnPropertyNames()|43,986,675|21998758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:55:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21255285,"opsSec":42411740.46589675},{"name":"Using Object.getOwnPropertyNames()","samples":21998758,"opsSec":43986675.83563372}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,217,240|47608626|
|Length = 10_000 - Array.at|89,710,115|44855482|
|Length = 1_000_000 - Array.at|99,956,268|49998563|
|Length = 100 - Array[length - 1]|98,602,128|49308159|
|Length = 10_000 - Array[length - 1]|99,434,393|49784706|
|Length = 1_000_000 - Array[length - 1]|97,651,070|48841915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47608626,"opsSec":95217240.38349666},{"name":"Length = 10_000 - Array.at","samples":44855482,"opsSec":89710115.52172738},{"name":"Length = 1_000_000 - Array.at","samples":49998563,"opsSec":99956268.87509729},{"name":"Length = 100 - Array[length - 1]","samples":49308159,"opsSec":98602128.95643891},{"name":"Length = 10_000 - Array[length - 1]","samples":49784706,"opsSec":99434393.02074891},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48841915,"opsSec":97651070.7999766}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|100,161,618|50081051|
|~ (small)|101,728,949|50878510|
|Math.floor (long)|100,766,908|50415598|
|~ (long)|102,102,872|51051447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":50081051,"opsSec":100161618.62002853},{"name":"~ (small)","samples":50878510,"opsSec":101728949.32064027},{"name":"Math.floor (long)","samples":50415598,"opsSec":100766908.52616467},{"name":"~ (long)","samples":51051447,"opsSec":102102872.35419106}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,587,886|15794018|
|Object.create({})|1,945,485|980139|
|new Function with empty prototype|108,287,205|54172734|
|Empty class|78,998,897|39608163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15794018,"opsSec":31587886.14706812},{"name":"Object.create({})","samples":980139,"opsSec":1945485.8060603775},{"name":"new Function with empty prototype","samples":54172734,"opsSec":108287205.3685979},{"name":"Empty class","samples":39608163,"opsSec":78998897.33486524}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,080,685|76040794|
|Using optional chain (obj.field?.field2) (undefined)|100,228,919|50115154|
|Using and operator (obj.field && obj.field.field2) (Valid)|100,249,458|50149533|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,758,292|49879152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:23:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152080685.55321193,"samples":76040794},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":100228919.82946037,"samples":50115154},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":100249458.35752745,"samples":50149533},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99758292.02900496,"samples":49879152}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,658,564|50329285|
|Using parseInt(x, 10) - big number (10 len)|100,664,561|50348074|
|Using + - small number (2 len)|100,615,065|50307629|
|Using + - big number (10 len)|99,063,545|49563540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:11:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50329285,"opsSec":100658564.76575463},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50348074,"opsSec":100664561.6751667},{"name":"Using + - small number (2 len)","samples":50307629,"opsSec":100615065.62399451},{"name":"Using + - big number (10 len)","samples":49563540,"opsSec":99063545.19903241}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,056,847|528550|
|Using ? operator to avoid rejection|1,065,090|533803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:14:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":528550,"opsSec":1056847.958671424},{"name":"Using ? operator to avoid rejection","samples":533803,"opsSec":1065090.3099424315}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|100,752,229|50376131|
|Raw usage underscore usage|99,300,938|49650953|
|Manipulating private properties using #|100,892,265|50446266|
|Manipulating private properties using underscore(_)|98,773,021|49402699|
|Manipulating private properties using Symbol|101,198,292|50600068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:18:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":50376131,"opsSec":100752229.35627769},{"name":"Raw usage underscore usage","samples":49650953,"opsSec":99300938.61025606},{"name":"Manipulating private properties using #","samples":50446266,"opsSec":100892265.2408507},{"name":"Manipulating private properties using underscore(_)","samples":49402699,"opsSec":98773021.19138367},{"name":"Manipulating private properties using Symbol","samples":50600068,"opsSec":101198292.9766883}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,609,346|3804674|
|Adding property in the object creation - small object|7,539,906|3776265|
|Adding property after the function creation - small class|239,523|119764|
|Adding property in the function creation - small class|244,614|123637|
|Adding property after the class creation - small class|209,477|104740|
|Adding property in the class creation - small class|210,474|107142|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3804674,"opsSec":7609346.173756918},{"name":"Adding property in the object creation - small object","samples":3776265,"opsSec":7539906.628004142},{"name":"Adding property after the function creation - small class","samples":119764,"opsSec":239523.47013213285},{"name":"Adding property in the function creation - small class","samples":123637,"opsSec":244614.60868191632},{"name":"Adding property after the class creation - small class","samples":104740,"opsSec":209477.21060146362},{"name":"Adding property in the class creation - small class","samples":107142,"opsSec":210474.25063082116}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|89,922,822|44961414|
|Getter|53,533,093|26773457|
|Method|101,090,086|50545051|
|DefineProperty (getter)|100,988,715|50494408|
|DefineProperty (getter & enumerable=false)|53,610,719|26805620|
|DefineProperty (getter & configurable=false)|99,213,937|49629046|
|DefineProperty (getter & enumerable=false & configurable=false)|51,581,513|25805921|
|DefineProperty (writable)|98,308,287|49169887|
|DefineProperty (writable & enumerable=false)|101,538,396|50769210|
|DefineProperty (writable & enumerable=false & configurable=false)|99,397,833|49704388|
|DefineProperties (getter)|50,521,924|25260967|
|DefineProperties (getter & enumerable=false)|50,811,274|25405640|
|DefineProperties (getter & enumerable=false & configurable=false)|50,611,284|25305646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:27:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":44961414,"opsSec":89922822.424785},{"name":"Getter","samples":26773457,"opsSec":53533093.89647968},{"name":"Method","samples":50545051,"opsSec":101090086.0277664},{"name":"DefineProperty (getter)","samples":50494408,"opsSec":100988715.01128499},{"name":"DefineProperty (getter & enumerable=false)","samples":26805620,"opsSec":53610719.33269384},{"name":"DefineProperty (getter & configurable=false)","samples":49629046,"opsSec":99213937.82910854},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25805921,"opsSec":51581513.51433595},{"name":"DefineProperty (writable)","samples":49169887,"opsSec":98308287.23191564},{"name":"DefineProperty (writable & enumerable=false)","samples":50769210,"opsSec":101538396.03693853},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49704388,"opsSec":99397833.69008039},{"name":"DefineProperties (getter)","samples":25260967,"opsSec":50521924.805009685},{"name":"DefineProperties (getter & enumerable=false)","samples":25405640,"opsSec":50811274.00426967},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25305646,"opsSec":50611284.61075244}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|90,905,129|45452569|
|Setter|11,039,145|5528275|
|Method|91,763,788|45882892|
|DefineProperty (setter)|90,404,639|45202326|
|DefineProperty (setter & enumerable=false)|11,006,188|5503096|
|DefineProperty (setter & configurable=false)|11,099,400|5551349|
|DefineProperty (setter & enumerable=false & configurable=false)|11,141,552|5571374|
|DefineProperty (writable)|88,993,065|44496539|
|DefineProperty (writable & enumerable=false)|90,745,223|45373441|
|DefineProperty (writable & enumerable=false & configurable=false)|90,181,505|45096309|
|DefineProperties (setter)|87,681,021|44105120|
|DefineProperties (setter & enumerable=false)|10,828,111|5424934|
|DefineProperties (setter & enumerable=false & configurable=false)|11,007,960|5503982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:30:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":45452569,"opsSec":90905129.63672806},{"name":"Setter","samples":5528275,"opsSec":11039145.94743877},{"name":"Method","samples":45882892,"opsSec":91763788.68817875},{"name":"DefineProperty (setter)","samples":45202326,"opsSec":90404639.704969},{"name":"DefineProperty (setter & enumerable=false)","samples":5503096,"opsSec":11006188.01575994},{"name":"DefineProperty (setter & configurable=false)","samples":5551349,"opsSec":11099400.878571417},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5571374,"opsSec":11141552.288608387},{"name":"DefineProperty (writable)","samples":44496539,"opsSec":88993065.36298472},{"name":"DefineProperty (writable & enumerable=false)","samples":45373441,"opsSec":90745223.54029457},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45096309,"opsSec":90181505.47416945},{"name":"DefineProperties (setter)","samples":44105120,"opsSec":87681021.7281728},{"name":"DefineProperties (setter & enumerable=false)","samples":5424934,"opsSec":10828111.876087656},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5503982,"opsSec":11007960.235277599}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,291,330|1646338|
|Using replaceAll()|3,057,941|1528979|
|Using replaceAll(//g)|3,039,679|1520392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1646338,"opsSec":3291330.7607088215},{"name":"Using replaceAll()","samples":1528979,"opsSec":3057941.7011707327},{"name":"Using replaceAll(//g)","samples":1520392,"opsSec":3039679.8484537685}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,707,963|10358483|
|{ ...object, __proto__: null }|20,795,598|10399988|
|{ ...object, newProp: true }|764,434|383573|
|structuredClone|262,461|131242|
|JSON.parse + JSON.stringify|198,151|99122|
|loop + object.keys starting with {}|1,489,080|744563|
|loop + object.keys starting with { __proto__: null }|718,005|359084|
|loop + object.keys starting with { randomProp: true }|541,791|270930|
|object.keys + reduce(FN, {})|1,510,979|755627|
|object.keys + reduce(FN, { __proto__: null })|754,805|377479|
|object.keys + reduce(FN, { newProp: true })|535,623|267831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:38:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10358483,"opsSec":20707963.502778653},{"name":"{ ...object, __proto__: null }","samples":10399988,"opsSec":20795598.85916973},{"name":"{ ...object, newProp: true }","samples":383573,"opsSec":764434.1377899564},{"name":"structuredClone","samples":131242,"opsSec":262461.9936116836},{"name":"JSON.parse + JSON.stringify","samples":99122,"opsSec":198151.36067216127},{"name":"loop + object.keys starting with {}","samples":744563,"opsSec":1489080.2584326214},{"name":"loop + object.keys starting with { __proto__: null }","samples":359084,"opsSec":718005.7522401663},{"name":"loop + object.keys starting with { randomProp: true }","samples":270930,"opsSec":541791.7710786845},{"name":"object.keys + reduce(FN, {})","samples":755627,"opsSec":1510979.071314058},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":377479,"opsSec":754805.6138042402},{"name":"object.keys + reduce(FN, { newProp: true })","samples":267831,"opsSec":535623.7253998304}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,337|129169|
|Sort using first char|1,325,846|663550|
|Sort using localeCompare|1,211,550|605873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":129169,"opsSec":258337.71531183776},{"name":"Sort using first char","samples":663550,"opsSec":1325846.4148664365},{"name":"Sort using localeCompare","samples":605873,"opsSec":1211550.1214225688}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,697|850|
|{...smallObject} - Total keys: 2|37,243,605|18645783|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,039|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,588|3295|
|{ ...bigObject, ...anotherBigObject }|1,092|547|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,104,457|6054717|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,705,863|14355307|
|{ ...smallObject, ...anotherSmallObject }|20,036,837|10021574|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:47:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":850,"opsSec":1697.786493880738},{"name":"{...smallObject} - Total keys: 2","samples":18645783,"opsSec":37243605.844522566},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1039.804254769431},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3295,"opsSec":6588.7003129762625},{"name":"{ ...bigObject, ...anotherBigObject }","samples":547,"opsSec":1092.7794003787178},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6054717,"opsSec":12104457.32499757},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14355307,"opsSec":28705863.007437088},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10021574,"opsSec":20036837.558305714}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,116|1066|
|streams.web.Readable reading 1e3 * "some data"|519|261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1066,"opsSec":2116.493775035419},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":261,"opsSec":519.7639846935998}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,137|3074|
|streams.web.WritableStream writing 1e3 * "some data"|1,570|797|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:58:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3074,"opsSec":6137.21302572075},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":797,"opsSec":1570.4342768210845}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,838,126|50457492|
|Using backtick (`)|100,458,899|50251238|
|Using array.join|10,765,516|5384352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:07:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":50457492,"opsSec":100838126.99469094},{"name":"Using backtick (`)","samples":50251238,"opsSec":100458899.94297172},{"name":"Using array.join","samples":5384352,"opsSec":10765516.567385761}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,723,838|27373715|
|(short string) (true) String#slice and strict comparison|61,211,158|30618463|
|(long string) (true) String#endsWith|51,091,884|25545970|
|(long string) (true) String#slice and strict comparison|57,301,626|28652449|
|(short string) (false) String#endsWith|59,785,847|29898605|
|(short string) (false) String#slice and strict comparison|62,691,140|31345578|
|(long string) (false) String#endsWith|54,760,897|27380566|
|(long string) (false) String#slice and strict comparison|57,821,920|28927726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27373715,"opsSec":54723838.4437992},{"name":"(short string) (true) String#slice and strict comparison","samples":30618463,"opsSec":61211158.6730673},{"name":"(long string) (true) String#endsWith","samples":25545970,"opsSec":51091884.51421342},{"name":"(long string) (true) String#slice and strict comparison","samples":28652449,"opsSec":57301626.53553783},{"name":"(short string) (false) String#endsWith","samples":29898605,"opsSec":59785847.10189981},{"name":"(short string) (false) String#slice and strict comparison","samples":31345578,"opsSec":62691140.954126164},{"name":"(long string) (false) String#endsWith","samples":27380566,"opsSec":54760897.623358175},{"name":"(long string) (false) String#slice and strict comparison","samples":28927726,"opsSec":57821920.72124223}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,027,636|7513821|
|Using indexof|15,047,849|7523926|
|Using RegExp.test|12,650,658|6325331|
|Using RegExp.text with cached regex pattern|13,482,026|6741015|
|Using new RegExp.test|4,245,238|2122624|
|Using new RegExp.test with cached regex pattern|5,088,793|2544527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7513821,"opsSec":15027636.139221905},{"name":"Using indexof","samples":7523926,"opsSec":15047849.201100048},{"name":"Using RegExp.test","samples":6325331,"opsSec":12650658.533719562},{"name":"Using RegExp.text with cached regex pattern","samples":6741015,"opsSec":13482026.440745018},{"name":"Using new RegExp.test","samples":2122624,"opsSec":4245238.762360454},{"name":"Using new RegExp.test with cached regex pattern","samples":2544527,"opsSec":5088793.4028898375}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,771,871|44393296|
|(short string) (true) String#slice and strict comparison|63,419,926|31790734|
|(long string) (true) String#startsWith|66,165,767|33082940|
|(long string) (true) String#slice and strict comparison|57,771,785|28890825|
|(short string) (false) String#startsWith|89,429,278|44714649|
|(short string) (false) String#slice and strict comparison|63,409,829|31705550|
|(long string) (false) String#startsWith|92,475,067|46237549|
|(long string) (false) String#slice and strict comparison|57,562,781|28781442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44393296,"opsSec":88771871.84821013},{"name":"(short string) (true) String#slice and strict comparison","samples":31790734,"opsSec":63419926.032807745},{"name":"(long string) (true) String#startsWith","samples":33082940,"opsSec":66165767.1212013},{"name":"(long string) (true) String#slice and strict comparison","samples":28890825,"opsSec":57771785.58315525},{"name":"(short string) (false) String#startsWith","samples":44714649,"opsSec":89429278.50441729},{"name":"(short string) (false) String#slice and strict comparison","samples":31705550,"opsSec":63409829.90110709},{"name":"(long string) (false) String#startsWith","samples":46237549,"opsSec":92475067.85312787},{"name":"(long string) (false) String#slice and strict comparison","samples":28781442,"opsSec":57562781.30799815}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|95,596,369|47798196|
|Using this|100,561,145|50280612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:25:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":47798196,"opsSec":95596369.82164219},{"name":"Using this","samples":50280612,"opsSec":100561145.7634286}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,232,626|5116314|
|Date.now()|19,747,052|9874274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5116314,"opsSec":10232626.9358068},{"name":"Date.now()","samples":9874274,"opsSec":19747052.51621884}]}-->
