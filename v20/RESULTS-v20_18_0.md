## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,188,193|54100299|
|Using dot notation|66,411,065|33217082|
|Using define property (writable)|4,255,099|2127550|
|Using define property initialized (writable)|5,674,180|2837633|
|Using define property (getter)|2,128,752|1067070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:43:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":108188193.57447752,"samples":54100299},{"name":"Using dot notation","opsSec":66411065.30173314,"samples":33217082},{"name":"Using define property (writable)","opsSec":4255099.080898598,"samples":2127550},{"name":"Using define property initialized (writable)","opsSec":5674180.109455734,"samples":2837633},{"name":"Using define property (getter)","opsSec":2128752.5870128293,"samples":1067070}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.084ms
new Array(length)|100|0.007ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.285ms
new Array(length)|10,000|0.317ms
array.push|1,000,000|32.133ms
new Array(length)|1,000,000|7.056ms
array.push|100,000,000|1,768.426ms
new Array(length)|100,000,000|4,427.88ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.248ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|25.401ms
new Array(length)|1,000,000|4.618ms
array.push|100,000,000|2,475.612ms
new Array(length)|100,000,000|4,115.02ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|258|130|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:57:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":258.92845359478474,"samples":130},{"name":"Array.from","opsSec":22.32475793367294,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,413|2207|
|new Blob (1024)|576|289|
|text (128)|4,489|2245|
|text (1024)|564|284|
|arrayBuffer (128)|4,541|2275|
|arrayBuffer (1024)|567|284|
|slice (0, 64)|63,916|36623|
|slice (0, 512)|24,690|12346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:03:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4413.217033513217,"samples":2207},{"name":"new Blob (1024)","opsSec":576.642355544675,"samples":289},{"name":"text (128)","opsSec":4489.486232174562,"samples":2245},{"name":"text (1024)","opsSec":564.3592081339233,"samples":284},{"name":"arrayBuffer (128)","opsSec":4541.335903123943,"samples":2275},{"name":"arrayBuffer (1024)","opsSec":567.0394906726706,"samples":284},{"name":"slice (0, 64)","opsSec":63916.070685914005,"samples":36623},{"name":"slice (0, 512)","opsSec":24690.84970269405,"samples":12346}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|390,674|195503|
|[True conditional] Using constructor name|317,239|158620|
|[True conditional] Check if property is valid then instanceof |316,449|158225|
|[False conditional] Using instanceof only|97,094,140|48547929|
|[False conditional] Using constructor name|97,085,882|48542946|
|[False conditional] Check if property is valid then instanceof |97,105,488|48552806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":390674.87803767086,"samples":195503},{"name":"[True conditional] Using constructor name","opsSec":317239.634539941,"samples":158620},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316449.57279307675,"samples":158225},{"name":"[False conditional] Using instanceof only","opsSec":97094140.2104714,"samples":48547929},{"name":"[False conditional] Using constructor name","opsSec":97085882.29141177,"samples":48542946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":97105488.28760792,"samples":48552806}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,643|3322|
|crypto.verify('RSA-SHA256')|6,710|3356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:15:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6643.616025568185,"samples":3322},{"name":"crypto.verify('RSA-SHA256')","opsSec":6710.885831890646,"samples":3356}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,202|698353|
|fromUnixToISOString(new Date())|2,099,075|1049858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396202.2613937072,"samples":698353},{"name":"fromUnixToISOString(new Date())","opsSec":2099075.173340331,"samples":1049858}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,736|8869|
|Intl.DateTimeFormat().format(new Date())|17,362|8697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,192|9097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,880|8941|
|Reusing Intl.DateTimeFormat()|545,233|315115|
|Date.toLocaleDateString()|912,065|456033|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,203|10602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17736.69592716865,"samples":8869},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17362.89451338243,"samples":8697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18192.115296855245,"samples":9097},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17880.531865289606,"samples":8941},{"name":"Reusing Intl.DateTimeFormat()","opsSec":545233.3458135821,"samples":315115},{"name":"Date.toLocaleDateString()","opsSec":912065.4983639759,"samples":456033},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21203.82667992072,"samples":10602}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,023,260|511669|
|Using brackets {}|1,039,678|519840|
|Using '' + |1,041,182|520856|
|Using date.toString()|1,156,117|578089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1023260.0173540774,"samples":511669},{"name":"Using brackets {}","opsSec":1039678.6733700127,"samples":519840},{"name":"Using '' + ","opsSec":1041182.9437108121,"samples":520856},{"name":"Using date.toString()","opsSec":1156117.0587575987,"samples":578089}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,655,915|1828162|
|Using delete property (proto: null)|16,003,078|8001549|
|Using delete property (cached proto: null)|3,620,518|1810459|
|Using undefined assignment|73,322,871|36665539|
|Using undefined assignment (proto: null)|16,971,252|8486424|
|Using undefined property (cached proto: null)|73,312,508|36656261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:38:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3655915.897420203,"samples":1828162},{"name":"Using delete property (proto: null)","opsSec":16003078.95633604,"samples":8001549},{"name":"Using delete property (cached proto: null)","opsSec":3620518.960882208,"samples":1810459},{"name":"Using undefined assignment","opsSec":73322871.70419887,"samples":36665539},{"name":"Using undefined assignment (proto: null)","opsSec":16971252.227095593,"samples":8486424},{"name":"Using undefined property (cached proto: null)","opsSec":73312508.51049843,"samples":36656261}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|367,731|183991|
|NodeError|315,507|157754|
|NodeError Range|308,188|154105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:44:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":367731.8202752485,"samples":183991},{"name":"NodeError","opsSec":315507.1134250113,"samples":157754},{"name":"NodeError Range","opsSec":308188.5020028543,"samples":154105}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,672,523|836263|
|Function returning explicitly undefined|1,576,618|788805|
|Function returning implicitly undefined|1,612,441|806293|
|Function returning string|1,596,578|798330|
|Function returning integer|1,623,309|811655|
|Function returning float|1,609,957|805021|
|Function returning functions|1,556,193|778150|
|Function returning arrow functions|1,563,626|781895|
|Function returning empty object|1,618,813|809407|
|Function returning empty array|1,625,682|812842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1672523.7186776476,"samples":836263},{"name":"Function returning explicitly undefined","opsSec":1576618.3638074263,"samples":788805},{"name":"Function returning implicitly undefined","opsSec":1612441.5478114977,"samples":806293},{"name":"Function returning string","opsSec":1596578.641545584,"samples":798330},{"name":"Function returning integer","opsSec":1623309.7597501555,"samples":811655},{"name":"Function returning float","opsSec":1609957.9054587663,"samples":805021},{"name":"Function returning functions","opsSec":1556193.6746233753,"samples":778150},{"name":"Function returning arrow functions","opsSec":1563626.2289160357,"samples":781895},{"name":"Function returning empty object","opsSec":1618813.216494403,"samples":809407},{"name":"Function returning empty array","opsSec":1625682.9303006318,"samples":812842}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|77,350,595|38748307|
|using Array.includes (first item)|73,508,985|36786647|
|Using raw comparison|97,666,529|48864719|
|Using raw comparison (first item)|98,183,655|49092563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:55:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":77350595.41350815,"samples":38748307},{"name":"using Array.includes (first item)","opsSec":73508985.10543443,"samples":36786647},{"name":"Using raw comparison","opsSec":97666529.81614706,"samples":48864719},{"name":"Using raw comparison (first item)","opsSec":98183655.99430245,"samples":49092563}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,578,540|24791235|
|Using Object.getOwnPropertyNames()|42,417,080|21211765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49578540.206589065,"samples":24791235},{"name":"Using Object.getOwnPropertyNames()","opsSec":42417080.14362752,"samples":21211765}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,854,685|65927390|
|Length = 10_000 - Array.at|91,730,058|45865955|
|Length = 1_000_000 - Array.at|97,514,925|48757472|
|Length = 100 - Array[length - 1]|95,092,439|47546442|
|Length = 10_000 - Array[length - 1]|95,418,296|47714963|
|Length = 1_000_000 - Array[length - 1]|95,371,580|47693982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131854685.59204513,"samples":65927390},{"name":"Length = 10_000 - Array.at","opsSec":91730058.52049881,"samples":45865955},{"name":"Length = 1_000_000 - Array.at","opsSec":97514925.08210453,"samples":48757472},{"name":"Length = 100 - Array[length - 1]","opsSec":95092439.53793761,"samples":47546442},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95418296.6088459,"samples":47714963},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95371580.30696222,"samples":47693982}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|140,595,610|70297844|
|~ (small)|97,605,146|48802584|
|Math.floor (long)|99,300,443|49665174|
|~ (long)|99,576,514|49806921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":140595610.67241412,"samples":70297844},{"name":"~ (small)","opsSec":97605146.52686776,"samples":48802584},{"name":"Math.floor (long)","opsSec":99300443.47284727,"samples":49665174},{"name":"~ (long)","opsSec":99576514.94676009,"samples":49806921}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,299,270|22210241|
|Object.create({})|1,910,672|955337|
|Cached Empty.prototype|82,621,637|41310864|
|Empty.prototype|2,197,915|1102864|
|Empty class|1,366,466|683234|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":44299270.33650526,"samples":22210241},{"name":"Object.create({})","opsSec":1910672.3988565297,"samples":955337},{"name":"Cached Empty.prototype","opsSec":82621637.77717155,"samples":41310864},{"name":"Empty.prototype","opsSec":2197915.715194419,"samples":1102864},{"name":"Empty class","opsSec":1366466.9997461562,"samples":683234}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|119,513,569|59768289|
|Using optional chain (obj.field?.field2) (undefined)|96,443,879|48221952|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,884,533|48942559|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,696,965|48848876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":119513569.7256107,"samples":59768289},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96443879.5032546,"samples":48221952},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97884533.04203054,"samples":48942559},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97696965.34403504,"samples":48848876}]}-->
