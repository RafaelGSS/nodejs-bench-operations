## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|74,958,454|37508422|
|Using dot notation|66,141,494|33289219|
|Using define property (writable)|4,507,891|2254178|
|Using define property initialized (writable)|5,954,708|2977356|
|Using define property (getter)|2,167,666|1085669|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37508422,"opsSec":74958454.81179053},{"name":"Using dot notation","samples":33289219,"opsSec":66141494.71900227},{"name":"Using define property (writable)","samples":2254178,"opsSec":4507891.065131324},{"name":"Using define property initialized (writable)","samples":2977356,"opsSec":5954708.331899668},{"name":"Using define property (getter)","samples":1085669,"opsSec":2167666.514840489}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.035ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.283ms
new Array(length)|10,000|0.359ms
array.push|1,000,000|30.763ms
new Array(length)|1,000,000|13.11ms
array.push|100,000,000|1,937.361ms
new Array(length)|100,000,000|4,822.617ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.025ms
new Array(length)|100|0.012ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.23ms
new Array(length)|10,000|0.178ms
array.push|1,000,000|30.62ms
new Array(length)|1,000,000|5.185ms
array.push|100,000,000|2,130.319ms
new Array(length)|100,000,000|5,077.977ms

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
|Using Object.keys()|51,243,916|25625762|
|Using Object.getOwnPropertyNames()|43,341,088|21885632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:00:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":51243916.32818192,"samples":25625762},{"name":"Using Object.getOwnPropertyNames()","opsSec":43341088.61281894,"samples":21885632}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|127,645,443|64845586|
|Length = 10_000 - Array.at|94,191,965|48124752|
|Length = 1_000_000 - Array.at|99,127,031|49563688|
|Length = 100 - Array[length - 1]|99,090,776|49545396|
|Length = 10_000 - Array[length - 1]|98,353,228|49200061|
|Length = 1_000_000 - Array[length - 1]|98,923,445|49464071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":127645443.91219723,"samples":64845586},{"name":"Length = 10_000 - Array.at","opsSec":94191965.29098715,"samples":48124752},{"name":"Length = 1_000_000 - Array.at","opsSec":99127031.037932,"samples":49563688},{"name":"Length = 100 - Array[length - 1]","opsSec":99090776.74002038,"samples":49545396},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98353228.16434352,"samples":49200061},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":98923445.90617593,"samples":49464071}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,568,208|70925809|
|~ (small)|101,480,933|50767297|
|Math.floor (long)|103,260,946|51643588|
|~ (long)|102,127,935|51092983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141568208.6392153,"samples":70925809},{"name":"~ (small)","opsSec":101480933.52085845,"samples":50767297},{"name":"Math.floor (long)","opsSec":103260946.68693206,"samples":51643588},{"name":"~ (long)","opsSec":102127935.68141061,"samples":51092983}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,741,442|23374409|
|Object.create({})|2,010,956|1005526|
|Cached Empty.prototype|81,689,460|40847247|
|Empty.prototype|2,240,578|1126806|
|Empty class|1,379,695|701331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":46741442.200420775,"samples":23374409},{"name":"Object.create({})","opsSec":2010956.5881537185,"samples":1005526},{"name":"Cached Empty.prototype","opsSec":81689460.29545659,"samples":40847247},{"name":"Empty.prototype","opsSec":2240578.5991006037,"samples":1126806},{"name":"Empty class","opsSec":1379695.0254132308,"samples":701331}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|146,408,274|73206543|
|Using parseInt(x, 10) - big number (10 len)|101,965,889|50982983|
|Using + - small number (2 len)|97,286,707|48643362|
|Using + - big number (10 len)|100,610,095|50343311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":146408274.73127577,"samples":73206543},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":101965889.52558285,"samples":50982983},{"name":"Using + - small number (2 len)","opsSec":97286707.46125972,"samples":48643362},{"name":"Using + - big number (10 len)","opsSec":100610095.5466849,"samples":50343311}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|983,777|493010|
|Using ? operator to avoid rejection|1,075,735|550512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:34:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":983777.9327077975,"samples":493010},{"name":"Using ? operator to avoid rejection","opsSec":1075735.88060995,"samples":550512}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|133,523,316|66858972|
|Raw usage underscore usage|101,429,593|50718666|
|Manipulating private properties using #|91,420,260|45710808|
|Manipulating private properties using underscore(_)|100,936,387|50468312|
|Manipulating private properties using Symbol|100,899,738|50450342|
|Manipulating private properties using PrivateSymbol|36,624,972|18314899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:40:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":133523316.14164583,"samples":66858972},{"name":"Raw usage underscore usage","opsSec":101429593.32774746,"samples":50718666},{"name":"Manipulating private properties using #","opsSec":91420260.96889192,"samples":45710808},{"name":"Manipulating private properties using underscore(_)","opsSec":100936387.20323561,"samples":50468312},{"name":"Manipulating private properties using Symbol","opsSec":100899738.97304478,"samples":50450342},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36624972.806332655,"samples":18314899}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,912,337|3960460|
|Adding property in the object creation - small object|7,288,474|3644240|
|Adding property after the function creation - small class|240,251|120128|
|Adding property in the function creation - small class|252,454|126982|
|Adding property after the class creation - small class|214,674|108939|
|Adding property in the class creation - small class|213,149|106577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:46:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7912337.218799303,"samples":3960460},{"name":"Adding property in the object creation - small object","opsSec":7288474.489913286,"samples":3644240},{"name":"Adding property after the function creation - small class","opsSec":240251.83547468387,"samples":120128},{"name":"Adding property in the function creation - small class","opsSec":252454.34974866407,"samples":126982},{"name":"Adding property after the class creation - small class","opsSec":214674.6188965866,"samples":108939},{"name":"Adding property in the class creation - small class","opsSec":213149.2616919126,"samples":106577}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|151,640,867|75820458|
|Getter|53,823,658|26911835|
|Method|99,393,345|49696697|
|DefineProperty (getter)|101,179,251|50589635|
|DefineProperty (getter & enumerable=false)|47,992,262|24005986|
|DefineProperty (getter & configurable=false)|101,669,557|50836779|
|DefineProperty (getter & enumerable=false & configurable=false)|49,568,157|24793468|
|DefineProperty (writable)|102,306,795|51167669|
|DefineProperty (writable & enumerable=false)|103,438,432|51719227|
|DefineProperty (writable & enumerable=false & configurable=false)|103,881,983|51942436|
|DefineProperties (getter)|53,481,800|26740905|
|DefineProperties (getter & enumerable=false)|53,291,412|26645724|
|DefineProperties (getter & enumerable=false & configurable=false)|53,357,477|26678746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:52:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":151640867.4749224,"samples":75820458},{"name":"Getter","opsSec":53823658.051147915,"samples":26911835},{"name":"Method","opsSec":99393345.694834,"samples":49696697},{"name":"DefineProperty (getter)","opsSec":101179251.58537622,"samples":50589635},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47992262.53762104,"samples":24005986},{"name":"DefineProperty (getter & configurable=false)","opsSec":101669557.50625125,"samples":50836779},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":49568157.6982739,"samples":24793468},{"name":"DefineProperty (writable)","opsSec":102306795.83625682,"samples":51167669},{"name":"DefineProperty (writable & enumerable=false)","opsSec":103438432.69168288,"samples":51719227},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":103881983.87308437,"samples":51942436},{"name":"DefineProperties (getter)","opsSec":53481800.15934878,"samples":26740905},{"name":"DefineProperties (getter & enumerable=false)","opsSec":53291412.50791927,"samples":26645724},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":53357477.16662135,"samples":26678746}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|148,170,961|74162605|
|Setter|11,004,303|5502156|
|Method|99,764,764|49896392|
|DefineProperty (setter)|104,142,170|52071102|
|DefineProperty (setter & enumerable=false)|11,154,278|5577142|
|DefineProperty (setter & configurable=false)|10,962,816|5481410|
|DefineProperty (setter & enumerable=false & configurable=false)|11,178,347|5589244|
|DefineProperty (writable)|104,139,711|52074781|
|DefineProperty (writable & enumerable=false)|104,726,958|52363645|
|DefineProperty (writable & enumerable=false & configurable=false)|104,881,250|52444587|
|DefineProperties (setter)|93,612,883|46809438|
|DefineProperties (setter & enumerable=false)|11,148,217|5574146|
|DefineProperties (setter & enumerable=false & configurable=false)|11,116,160|5558083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:59:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":148170961.3621447,"samples":74162605},{"name":"Setter","opsSec":11004303.812797964,"samples":5502156},{"name":"Method","opsSec":99764764.06836377,"samples":49896392},{"name":"DefineProperty (setter)","opsSec":104142170.25793684,"samples":52071102},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11154278.86903172,"samples":5577142},{"name":"DefineProperty (setter & configurable=false)","opsSec":10962816.075311843,"samples":5481410},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11178347.599954143,"samples":5589244},{"name":"DefineProperty (writable)","opsSec":104139711.42469634,"samples":52074781},{"name":"DefineProperty (writable & enumerable=false)","opsSec":104726958.8533561,"samples":52363645},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":104881250.85078573,"samples":52444587},{"name":"DefineProperties (setter)","opsSec":93612883.65209167,"samples":46809438},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11148217.41842547,"samples":5574146},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11116160.931030616,"samples":5558083}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,577,786|1789272|
|Using replaceAll()|3,066,298|1536333|
|Using replaceAll(//g)|3,150,055|1578041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3577786.0603342624,"samples":1789272},{"name":"Using replaceAll()","opsSec":3066298.0104135093,"samples":1536333},{"name":"Using replaceAll(//g)","opsSec":3150055.5028153434,"samples":1578041}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,153,029|11090890|
|{ ...object, __proto__: null }|20,518,580|10259758|
|{ ...object, newProp: true }|824,012|413538|
|structuredClone|266,017|133011|
|JSON.parse + JSON.stringify|206,963|103485|
|loop + object.keys starting with {}|1,545,289|772867|
|loop + object.keys starting with { __proto__: null }|819,765|409883|
|loop + object.keys starting with { randomProp: true }|608,042|304130|
|object.keys + reduce(FN, {})|1,569,627|784816|
|object.keys + reduce(FN, { __proto__: null })|826,766|413603|
|object.keys + reduce(FN, { newProp: true })|607,022|303512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:11:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22153029.974922787,"samples":11090890},{"name":"{ ...object, __proto__: null }","opsSec":20518580.065488894,"samples":10259758},{"name":"{ ...object, newProp: true }","opsSec":824012.7113213325,"samples":413538},{"name":"structuredClone","opsSec":266017.54154600366,"samples":133011},{"name":"JSON.parse + JSON.stringify","opsSec":206963.79356975842,"samples":103485},{"name":"loop + object.keys starting with {}","opsSec":1545289.3182740374,"samples":772867},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":819765.3736992546,"samples":409883},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":608042.1093262072,"samples":304130},{"name":"object.keys + reduce(FN, {})","opsSec":1569627.1624090853,"samples":784816},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":826766.214940222,"samples":413603},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":607022.2262810548,"samples":303512}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|271,661|135859|
|Sort using first char|1,306,817|653410|
|Sort using localeCompare|1,246,528|623478|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:17:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":271661.9871015275,"samples":135859},{"name":"Sort using first char","opsSec":1306817.5118194574,"samples":653410},{"name":"Sort using localeCompare","opsSec":1246528.5229874977,"samples":623478}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,849|926|
|{...smallObject} - Total keys: 2|53,440,588|26720467|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,075|538|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,657|3329|
|{ ...bigObject, ...anotherBigObject }|1,150|576|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,191,689|6595851|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,941,670|14485267|
|{ ...smallObject, ...anotherSmallObject }|21,002,248|10505953|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:23:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1849.9330032578716,"samples":926},{"name":"{...smallObject} - Total keys: 2","opsSec":53440588.02563312,"samples":26720467},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1075.3565689997915,"samples":538},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6657.2787903595245,"samples":3329},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1150.9977916928394,"samples":576},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13191689.045761358,"samples":6595851},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28941670.24073555,"samples":14485267},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21002248.536055665,"samples":10505953}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,378|1192|
|streams.web.Readable reading 1e3 * "some data"|532|267|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:29:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2378.3825648148754,"samples":1192},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":532.1363923690111,"samples":267}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,331|3166|
|streams.web.WritableStream writing 1e3 * "some data"|1,645|823|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:34:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6331.007766476791,"samples":3166},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1645.1980284786418,"samples":823}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,945,782|76008331|
|Using backtick (`)|100,168,656|50084444|
|Using array.join|10,793,883|5397616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:41:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":151945782.02770814,"samples":76008331},{"name":"Using backtick (`)","opsSec":100168656.20972952,"samples":50084444},{"name":"Using array.join","opsSec":10793883.88707804,"samples":5397616}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|60,781,583|30393948|
|(short string) (true) String#slice and strict comparison|62,257,886|31192438|
|(long string) (true) String#endsWith|50,706,984|25353612|
|(long string) (true) String#slice and strict comparison|57,912,311|28956167|
|(short string) (false) String#endsWith|58,838,037|29419372|
|(short string) (false) String#slice and strict comparison|55,785,384|27901985|
|(long string) (false) String#endsWith|55,546,925|27773539|
|(long string) (false) String#slice and strict comparison|57,224,671|28612347|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:46:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":60781583.22476627,"samples":30393948},{"name":"(short string) (true) String#slice and strict comparison","opsSec":62257886.22366991,"samples":31192438},{"name":"(long string) (true) String#endsWith","opsSec":50706984.05455145,"samples":25353612},{"name":"(long string) (true) String#slice and strict comparison","opsSec":57912311.182549395,"samples":28956167},{"name":"(short string) (false) String#endsWith","opsSec":58838037.11982205,"samples":29419372},{"name":"(short string) (false) String#slice and strict comparison","opsSec":55785384.54128622,"samples":27901985},{"name":"(long string) (false) String#endsWith","opsSec":55546925.801423304,"samples":27773539},{"name":"(long string) (false) String#slice and strict comparison","opsSec":57224671.56792875,"samples":28612347}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|139,339,080|69669586|
|Using indexof|14,725,078|7363173|
|Using RegExp.test|12,807,586|6403795|
|Using RegExp.text with cached regex pattern|13,448,037|6724020|
|Using new RegExp.test|4,390,967|2195579|
|Using new RegExp.test with cached regex pattern|5,180,568|2590286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:52:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":139339080.31488514,"samples":69669586},{"name":"Using indexof","opsSec":14725078.082426636,"samples":7363173},{"name":"Using RegExp.test","opsSec":12807586.951794306,"samples":6403795},{"name":"Using RegExp.text with cached regex pattern","opsSec":13448037.391080745,"samples":6724020},{"name":"Using new RegExp.test","opsSec":4390967.361761021,"samples":2195579},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5180568.352879879,"samples":2590286}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|109,858,530|54968335|
|(short string) (true) String#slice and strict comparison|62,409,447|31205926|
|(long string) (true) String#startsWith|63,169,444|31584730|
|(long string) (true) String#slice and strict comparison|57,405,116|28714348|
|(short string) (false) String#startsWith|97,915,770|48957893|
|(short string) (false) String#slice and strict comparison|62,424,903|31217445|
|(long string) (false) String#startsWith|77,240,682|38624609|
|(long string) (false) String#slice and strict comparison|56,986,366|28495618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:58:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":109858530.7031497,"samples":54968335},{"name":"(short string) (true) String#slice and strict comparison","opsSec":62409447.23917898,"samples":31205926},{"name":"(long string) (true) String#startsWith","opsSec":63169444.460316665,"samples":31584730},{"name":"(long string) (true) String#slice and strict comparison","opsSec":57405116.159676015,"samples":28714348},{"name":"(short string) (false) String#startsWith","opsSec":97915770.92097127,"samples":48957893},{"name":"(short string) (false) String#slice and strict comparison","opsSec":62424903.76329517,"samples":31217445},{"name":"(long string) (false) String#startsWith","opsSec":77240682.90453905,"samples":38624609},{"name":"(long string) (false) String#slice and strict comparison","opsSec":56986366.05912932,"samples":28495618}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|125,374,015|62687323|
|Using this|100,419,050|50209532|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:08:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":125374015.11795592,"samples":62687323},{"name":"Using this","opsSec":100419050.94552337,"samples":50209532}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,762,569|5381758|
|Date.now()|20,631,938|10315972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":10762569.690297412,"samples":5381758},{"name":"Date.now()","opsSec":20631938.429376625,"samples":10315972}]}-->
