## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,992,566|49062546|
|Using dot notation|68,204,549|34143479|
|Using define property (writable)|4,733,358|2366681|
|Using define property initialized (writable)|6,717,229|3359660|
|Using define property (getter)|2,400,392|1200259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":97992566.26542723,"samples":49062546},{"name":"Using dot notation","opsSec":68204549.30766262,"samples":34143479},{"name":"Using define property (writable)","opsSec":4733358.478381292,"samples":2366681},{"name":"Using define property initialized (writable)","opsSec":6717229.786172977,"samples":3359660},{"name":"Using define property (getter)","opsSec":2400392.14743971,"samples":1200259}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.006ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.278ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|27.671ms
new Array(length)|1,000,000|6.21ms
array.push|100,000,000|1,858.852ms
new Array(length)|100,000,000|3,945.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|160.289ms
new Array(length)|10,000|0.07ms
array.push|1,000,000|18.341ms
new Array(length)|1,000,000|6.902ms
array.push|100,000,000|2,043.329ms
new Array(length)|100,000,000|4,580.019ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|328|167|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":328.6253158704228,"samples":167},{"name":"Array.from","opsSec":24.117939917184,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,803|2419|
|new Blob (1024)|553|281|
|text (128)|4,127|2066|
|text (1024)|526|264|
|arrayBuffer (128)|4,036|2026|
|arrayBuffer (1024)|505|253|
|slice (0, 64)|187,024|93521|
|slice (0, 512)|15,241|14621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4803.085039589582,"samples":2419},{"name":"new Blob (1024)","opsSec":553.9198875128666,"samples":281},{"name":"text (128)","opsSec":4127.294496308526,"samples":2066},{"name":"text (1024)","opsSec":526.3406962176344,"samples":264},{"name":"arrayBuffer (128)","opsSec":4036.031586325839,"samples":2026},{"name":"arrayBuffer (1024)","opsSec":505.29930347706556,"samples":253},{"name":"slice (0, 64)","opsSec":187024.25588669852,"samples":93521},{"name":"slice (0, 512)","opsSec":15241.67210297772,"samples":14621}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|427,272|213672|
|[True conditional] Using constructor name|340,710|170371|
|[True conditional] Check if property is valid then instanceof |342,372|171200|
|[False conditional] Using instanceof only|96,175,779|48088628|
|[False conditional] Using constructor name|94,154,957|47109770|
|[False conditional] Check if property is valid then instanceof |96,972,172|48492544|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":427272.967578232,"samples":213672},{"name":"[True conditional] Using constructor name","opsSec":340710.45770724636,"samples":170371},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342372.3897210033,"samples":171200},{"name":"[False conditional] Using instanceof only","opsSec":96175779.70178159,"samples":48088628},{"name":"[False conditional] Using constructor name","opsSec":94154957.6080973,"samples":47109770},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96972172.47029303,"samples":48492544}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,810|3406|
|crypto.verify('RSA-SHA256')|6,778|3390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:17:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6810.077719362155,"samples":3406},{"name":"crypto.verify('RSA-SHA256')","opsSec":6778.697757931119,"samples":3390}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,435,653|717828|
|fromUnixToISOString(new Date())|2,096,115|1048144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1435653.384239534,"samples":717828},{"name":"fromUnixToISOString(new Date())","opsSec":2096115.9843378612,"samples":1048144}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,747|8874|
|Intl.DateTimeFormat().format(new Date())|18,146|9074|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,908|8955|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,313|9158|
|Reusing Intl.DateTimeFormat()|512,660|256377|
|Date.toLocaleDateString()|949,399|474708|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,859|11430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17747.282228917535,"samples":8874},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18146.458639803135,"samples":9074},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17908.39662543333,"samples":8955},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18313.853213498605,"samples":9158},{"name":"Reusing Intl.DateTimeFormat()","opsSec":512660.2528955146,"samples":256377},{"name":"Date.toLocaleDateString()","opsSec":949399.3475354442,"samples":474708},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22859.031874282064,"samples":11430}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|993,881|497007|
|Using brackets {}|1,031,300|515651|
|Using '' + |1,013,192|506642|
|Using date.toString()|1,137,623|568814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":993881.3665316362,"samples":497007},{"name":"Using brackets {}","opsSec":1031300.5499914268,"samples":515651},{"name":"Using '' + ","opsSec":1013192.5188474733,"samples":506642},{"name":"Using date.toString()","opsSec":1137623.2993405273,"samples":568814}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,027,628|2013816|
|Using delete property (proto: null)|16,077,434|8039562|
|Using delete property (cached proto: null)|3,953,469|1976736|
|Using undefined assignment|69,369,946|34684975|
|Using undefined assignment (proto: null)|17,906,217|8954499|
|Using undefined property (cached proto: null)|69,509,845|34754994|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:40:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4027628.58457096,"samples":2013816},{"name":"Using delete property (proto: null)","opsSec":16077434.133053143,"samples":8039562},{"name":"Using delete property (cached proto: null)","opsSec":3953469.0111774276,"samples":1976736},{"name":"Using undefined assignment","opsSec":69369946.11528301,"samples":34684975},{"name":"Using undefined assignment (proto: null)","opsSec":17906217.3793156,"samples":8954499},{"name":"Using undefined property (cached proto: null)","opsSec":69509845.92187494,"samples":34754994}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|400,910|200462|
|NodeError|329,106|164554|
|NodeError Range|323,968|162253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:45:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":400910.3746600068,"samples":200462},{"name":"NodeError","opsSec":329106.8869605083,"samples":164554},{"name":"NodeError Range","opsSec":323968.2489911186,"samples":162253}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,668,057|834119|
|Function returning explicitly undefined|1,585,848|794420|
|Function returning implicitly undefined|1,624,108|812769|
|Function returning string|1,564,467|782235|
|Function returning integer|1,633,054|816586|
|Function returning float|1,625,360|812681|
|Function returning functions|1,629,460|814735|
|Function returning arrow functions|1,607,007|803504|
|Function returning empty object|1,635,541|817880|
|Function returning empty array|1,641,557|820792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1668057.949824896,"samples":834119},{"name":"Function returning explicitly undefined","opsSec":1585848.8701836895,"samples":794420},{"name":"Function returning implicitly undefined","opsSec":1624108.5473584766,"samples":812769},{"name":"Function returning string","opsSec":1564467.7190060655,"samples":782235},{"name":"Function returning integer","opsSec":1633054.0902285774,"samples":816586},{"name":"Function returning float","opsSec":1625360.3486338858,"samples":812681},{"name":"Function returning functions","opsSec":1629460.72185065,"samples":814735},{"name":"Function returning arrow functions","opsSec":1607007.7621628512,"samples":803504},{"name":"Function returning empty object","opsSec":1635541.776202968,"samples":817880},{"name":"Function returning empty array","opsSec":1641557.991155188,"samples":820792}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,644,044|42323732|
|using Array.includes (first item)|79,611,434|39805854|
|Using raw comparison|97,323,043|48661532|
|Using raw comparison (first item)|96,904,733|48701261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:58:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":84644044.04204454,"samples":42323732},{"name":"using Array.includes (first item)","opsSec":79611434.61433354,"samples":39805854},{"name":"Using raw comparison","opsSec":97323043.75680691,"samples":48661532},{"name":"Using raw comparison (first item)","opsSec":96904733.62432097,"samples":48701261}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,348,714|23176999|
|Using Object.getOwnPropertyNames()|40,565,096|20282552|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:03:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":46348714.06120216,"samples":23176999},{"name":"Using Object.getOwnPropertyNames()","opsSec":40565096.77941277,"samples":20282552}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|123,688,129|61905711|
|Length = 10_000 - Array.at|96,615,151|48308520|
|Length = 1_000_000 - Array.at|97,434,391|48765481|
|Length = 100 - Array[length - 1]|97,367,682|48688874|
|Length = 10_000 - Array[length - 1]|97,175,810|48593623|
|Length = 1_000_000 - Array[length - 1]|95,312,261|47656140|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":123688129.17808278,"samples":61905711},{"name":"Length = 10_000 - Array.at","opsSec":96615151.75347413,"samples":48308520},{"name":"Length = 1_000_000 - Array.at","opsSec":97434391.46185285,"samples":48765481},{"name":"Length = 100 - Array[length - 1]","opsSec":97367682.32373674,"samples":48688874},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97175810.73929545,"samples":48593623},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95312261.12817231,"samples":47656140}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|126,546,144|63495304|
|~ (small)|98,865,056|49432537|
|Math.floor (long)|92,490,367|46432697|
|~ (long)|96,376,265|48192947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:15:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":126546144.53222068,"samples":63495304},{"name":"~ (small)","opsSec":98865056.0065598,"samples":49432537},{"name":"Math.floor (long)","opsSec":92490367.01950108,"samples":46432697},{"name":"~ (long)","opsSec":96376265.62555894,"samples":48192947}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,474,943|19737483|
|Object.create({})|2,058,225|1029253|
|Cached Empty.prototype|75,031,866|37518606|
|Empty.prototype|2,521,688|1272027|
|Empty class|1,557,295|778648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:21:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":39474943.18348283,"samples":19737483},{"name":"Object.create({})","opsSec":2058225.6490843382,"samples":1029253},{"name":"Cached Empty.prototype","opsSec":75031866.57976113,"samples":37518606},{"name":"Empty.prototype","opsSec":2521688.879075833,"samples":1272027},{"name":"Empty class","opsSec":1557295.3147900614,"samples":778648}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|141,297,371|70661631|
|Using optional chain (obj.field?.field2) (undefined)|98,710,485|49410422|
|Using and operator (obj.field && obj.field.field2) (Valid)|96,650,001|48384161|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,941,359|48975110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":141297371.2348844,"samples":70661631},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98710485.6770131,"samples":49410422},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":96650001.71480072,"samples":48384161},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97941359.44109409,"samples":48975110}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,591,382|64295833|
|Using parseInt(x, 10) - big number (10 len)|99,837,666|49918845|
|Using + - small number (2 len)|96,196,219|48098142|
|Using + - big number (10 len)|97,595,106|48801343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:32:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128591382.32741058,"samples":64295833},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99837666.23863544,"samples":49918845},{"name":"Using + - small number (2 len)","opsSec":96196219.74092521,"samples":48098142},{"name":"Using + - big number (10 len)","opsSec":97595106.7640087,"samples":48801343}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,033,250|516654|
|Using ? operator to avoid rejection|1,082,209|541797|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:37:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":1033250.9273517769,"samples":516654},{"name":"Using ? operator to avoid rejection","opsSec":1082209.2915672539,"samples":541797}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,251,125|65125950|
|Raw usage underscore usage|99,494,568|49765047|
|Manipulating private properties using #|97,168,454|48586272|
|Manipulating private properties using underscore(_)|96,894,982|48451353|
|Manipulating private properties using Symbol|97,295,613|48648357|
|Manipulating private properties using PrivateSymbol|35,093,819|17546917|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:43:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":130251125.2663069,"samples":65125950},{"name":"Raw usage underscore usage","opsSec":99494568.86721855,"samples":49765047},{"name":"Manipulating private properties using #","opsSec":97168454.3740923,"samples":48586272},{"name":"Manipulating private properties using underscore(_)","opsSec":96894982.30717033,"samples":48451353},{"name":"Manipulating private properties using Symbol","opsSec":97295613.58661033,"samples":48648357},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35093819.050033085,"samples":17546917}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,247,486|3623769|
|Adding property in the object creation - small object|6,967,745|3483876|
|Adding property after the function creation - small class|254,292|127541|
|Adding property in the function creation - small class|269,824|134913|
|Adding property after the class creation - small class|256,082|128332|
|Adding property in the class creation - small class|259,991|131921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7247486.296432761,"samples":3623769},{"name":"Adding property in the object creation - small object","opsSec":6967745.129803302,"samples":3483876},{"name":"Adding property after the function creation - small class","opsSec":254292.72116618996,"samples":127541},{"name":"Adding property in the function creation - small class","opsSec":269824.7825505811,"samples":134913},{"name":"Adding property after the class creation - small class","opsSec":256082.92735120593,"samples":128332},{"name":"Adding property in the class creation - small class","opsSec":259991.53011878827,"samples":131921}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|140,685,356|70343570|
|Getter|51,059,989|25530003|
|Method|88,080,833|44046623|
|DefineProperty (getter)|95,207,617|47604496|
|DefineProperty (getter & enumerable=false)|51,172,614|25587940|
|DefineProperty (getter & configurable=false)|98,025,031|49024332|
|DefineProperty (getter & enumerable=false & configurable=false)|48,851,173|24431781|
|DefineProperty (writable)|97,019,074|48519030|
|DefineProperty (writable & enumerable=false)|98,039,071|49034556|
|DefineProperty (writable & enumerable=false & configurable=false)|95,951,257|47975638|
|DefineProperties (getter)|51,269,627|25634827|
|DefineProperties (getter & enumerable=false)|51,216,813|25629724|
|DefineProperties (getter & enumerable=false & configurable=false)|50,565,331|25288129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:56:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":140685356.6724188,"samples":70343570},{"name":"Getter","opsSec":51059989.04808364,"samples":25530003},{"name":"Method","opsSec":88080833.64892219,"samples":44046623},{"name":"DefineProperty (getter)","opsSec":95207617.77324507,"samples":47604496},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51172614.98247366,"samples":25587940},{"name":"DefineProperty (getter & configurable=false)","opsSec":98025031.53724682,"samples":49024332},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48851173.44011793,"samples":24431781},{"name":"DefineProperty (writable)","opsSec":97019074.14334275,"samples":48519030},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98039071.4559589,"samples":49034556},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":95951257.57735856,"samples":47975638},{"name":"DefineProperties (getter)","opsSec":51269627.64741139,"samples":25634827},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51216813.48551663,"samples":25629724},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50565331.13533364,"samples":25288129}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|127,260,416|63630252|
|Setter|11,239,316|5620256|
|Method|88,979,985|44490008|
|DefineProperty (setter)|92,293,112|46147589|
|DefineProperty (setter & enumerable=false)|11,529,685|5764847|
|DefineProperty (setter & configurable=false)|11,223,637|5611913|
|DefineProperty (setter & enumerable=false & configurable=false)|11,416,654|5708332|
|DefineProperty (writable)|92,119,995|46060226|
|DefineProperty (writable & enumerable=false)|92,639,377|46323121|
|DefineProperty (writable & enumerable=false & configurable=false)|93,933,338|46969568|
|DefineProperties (setter)|81,451,799|40726036|
|DefineProperties (setter & enumerable=false)|11,246,614|5623516|
|DefineProperties (setter & enumerable=false & configurable=false)|10,967,791|5485817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:02:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":127260416.95387481,"samples":63630252},{"name":"Setter","opsSec":11239316.65371661,"samples":5620256},{"name":"Method","opsSec":88979985.39088503,"samples":44490008},{"name":"DefineProperty (setter)","opsSec":92293112.84930688,"samples":46147589},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11529685.652507588,"samples":5764847},{"name":"DefineProperty (setter & configurable=false)","opsSec":11223637.285762677,"samples":5611913},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11416654.364343716,"samples":5708332},{"name":"DefineProperty (writable)","opsSec":92119995.82178068,"samples":46060226},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92639377.42213303,"samples":46323121},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93933338.43435183,"samples":46969568},{"name":"DefineProperties (setter)","opsSec":81451799.13647288,"samples":40726036},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11246614.458191624,"samples":5623516},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10967791.521982607,"samples":5485817}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,383,623|1694374|
|Using replaceAll()|3,173,473|1586800|
|Using replaceAll(//g)|3,024,937|1512469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:08:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3383623.1846263036,"samples":1694374},{"name":"Using replaceAll()","opsSec":3173473.2197448714,"samples":1586800},{"name":"Using replaceAll(//g)","opsSec":3024937.975800496,"samples":1512469}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,866,895|11934569|
|{ ...object, __proto__: null }|2,497,880|1249013|
|{ ...object, newProp: true }|20,378,798|10190479|
|structuredClone|302,377|151189|
|JSON.parse + JSON.stringify|298,582|149299|
|loop + object.keys starting with {}|1,640,140|820160|
|loop + object.keys starting with { __proto__: null }|882,370|441222|
|loop + object.keys starting with { randomProp: true }|661,017|330518|
|object.keys + reduce(FN, {})|1,723,515|861929|
|object.keys + reduce(FN, { __proto__: null })|879,212|439607|
|object.keys + reduce(FN, { newProp: true })|682,910|341537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:14:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23866895.275584742,"samples":11934569},{"name":"{ ...object, __proto__: null }","opsSec":2497880.1188053014,"samples":1249013},{"name":"{ ...object, newProp: true }","opsSec":20378798.580987163,"samples":10190479},{"name":"structuredClone","opsSec":302377.8627204503,"samples":151189},{"name":"JSON.parse + JSON.stringify","opsSec":298582.0270558806,"samples":149299},{"name":"loop + object.keys starting with {}","opsSec":1640140.1159926385,"samples":820160},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":882370.7367577269,"samples":441222},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":661017.3143625575,"samples":330518},{"name":"object.keys + reduce(FN, {})","opsSec":1723515.5443553987,"samples":861929},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":879212.2222328866,"samples":439607},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":682910.1602918038,"samples":341537}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|291,099|145550|
|Sort using first char|1,238,516|621330|
|Sort using localeCompare|1,175,230|587616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:20:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":291099.0667363921,"samples":145550},{"name":"Sort using first char","opsSec":1238516.5231555188,"samples":621330},{"name":"Sort using localeCompare","opsSec":1175230.7848113684,"samples":587616}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,855|928|
|{...smallObject} - Total keys: 2|52,273,168|26157440|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,064|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,373|3187|
|{ ...bigObject, ...anotherBigObject }|1,138|570|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,931,762|6467517|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,350,400|14177346|
|{ ...smallObject, ...anotherSmallObject }|20,482,600|10242662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:26:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1855.8503590738471,"samples":928},{"name":"{...smallObject} - Total keys: 2","opsSec":52273168.31170666,"samples":26157440},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1064.519166548759,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6373.982012622761,"samples":3187},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1138.1493145833203,"samples":570},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12931762.00557735,"samples":6467517},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28350400.656553417,"samples":14177346},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20482600.510540515,"samples":10242662}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,052|1027|
|streams.web.Readable reading 1e3 * "some data"|1,792|897|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:31:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2052.0184027647815,"samples":1027},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1792.4916684507652,"samples":897}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,755|3878|
|streams.web.WritableStream writing 1e3 * "some data"|1,687|846|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:37:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7755.333460110437,"samples":3878},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1687.9718577181786,"samples":846}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|140,059,721|70049215|
|Using backtick (`)|99,069,104|49541771|
|Using array.join|9,815,478|4907741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":140059721.13463113,"samples":70049215},{"name":"Using backtick (`)","opsSec":99069104.85748734,"samples":49541771},{"name":"Using array.join","opsSec":9815478.407534903,"samples":4907741}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|118,751,371|59375738|
|(short string) (true) String#slice and strict comparison|56,626,678|28313358|
|(long string) (true) String#endsWith|64,644,393|32329418|
|(long string) (true) String#slice and strict comparison|52,076,491|26038253|
|(short string) (false) String#endsWith|88,223,553|44120767|
|(short string) (false) String#slice and strict comparison|57,051,942|28532135|
|(long string) (false) String#endsWith|87,667,908|43836463|
|(long string) (false) String#slice and strict comparison|51,137,068|25568544|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":118751371.26129055,"samples":59375738},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56626678.852898665,"samples":28313358},{"name":"(long string) (true) String#endsWith","opsSec":64644393.408202305,"samples":32329418},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52076491.93934718,"samples":26038253},{"name":"(short string) (false) String#endsWith","opsSec":88223553.3340421,"samples":44120767},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57051942.558563605,"samples":28532135},{"name":"(long string) (false) String#endsWith","opsSec":87667908.06427823,"samples":43836463},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51137068.26109165,"samples":25568544}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|130,199,905|65261501|
|Using indexof|15,045,859|7526678|
|Using RegExp.test|11,712,602|5856354|
|Using RegExp.text with cached regex pattern|12,939,963|6469984|
|Using new RegExp.test|4,559,582|2279857|
|Using new RegExp.test with cached regex pattern|5,159,594|2579800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":130199905.72594483,"samples":65261501},{"name":"Using indexof","opsSec":15045859.190016545,"samples":7526678},{"name":"Using RegExp.test","opsSec":11712602.235201817,"samples":5856354},{"name":"Using RegExp.text with cached regex pattern","opsSec":12939963.05693411,"samples":6469984},{"name":"Using new RegExp.test","opsSec":4559582.419570535,"samples":2279857},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5159594.479233908,"samples":2579800}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,100,345|49669141|
|(short string) (true) String#slice and strict comparison|49,838,583|24919302|
|(long string) (true) String#startsWith|54,631,297|27590662|
|(long string) (true) String#slice and strict comparison|42,115,492|21057761|
|(short string) (false) String#startsWith|70,757,538|35460893|
|(short string) (false) String#slice and strict comparison|48,872,555|24528790|
|(long string) (false) String#startsWith|77,629,261|38814634|
|(long string) (false) String#slice and strict comparison|44,899,626|22453221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:42:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99100345.8354622,"samples":49669141},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49838583.96488925,"samples":24919302},{"name":"(long string) (true) String#startsWith","opsSec":54631297.300665446,"samples":27590662},{"name":"(long string) (true) String#slice and strict comparison","opsSec":42115492.51915524,"samples":21057761},{"name":"(short string) (false) String#startsWith","opsSec":70757538.22469993,"samples":35460893},{"name":"(short string) (false) String#slice and strict comparison","opsSec":48872555.54236461,"samples":24528790},{"name":"(long string) (false) String#startsWith","opsSec":77629261.63440055,"samples":38814634},{"name":"(long string) (false) String#slice and strict comparison","opsSec":44899626.68566538,"samples":22453221}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,116,141|57560400|
|Using this|94,791,544|47398216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":115116141.4799866,"samples":57560400},{"name":"Using this","opsSec":94791544.73753642,"samples":47398216}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,300,524|4161303|
|Date.now()|16,356,681|8193555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8300524.827646147,"samples":4161303},{"name":"Date.now()","opsSec":16356681.828361517,"samples":8193555}]}-->
