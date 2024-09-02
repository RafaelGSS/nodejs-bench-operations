## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|13,954,545|6977273|
|Using dot notation|13,609,206|6804604|
|Using define property (writable)|3,239,014|1619508|
|Using define property initialized (writable)|4,059,012|2029507|
|Using define property (getter)|2,112,665|1056333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:23:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":13954545.10692932,"samples":6977273},{"name":"Using dot notation","opsSec":13609206.557391187,"samples":6804604},{"name":"Using define property (writable)","opsSec":3239014.9570253775,"samples":1619508},{"name":"Using define property initialized (writable)","opsSec":4059012.343906928,"samples":2029507},{"name":"Using define property (getter)","opsSec":2112665.116919486,"samples":1056333}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.076ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.131ms
array.push|1,000,000|27.375ms
new Array(length)|1,000,000|6.697ms
array.push|100,000,000|1,879.896ms
new Array(length)|100,000,000|4,006.083ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.02ms
array.push|10,000|158.577ms
new Array(length)|10,000|0.05ms
array.push|1,000,000|18.738ms
new Array(length)|1,000,000|7.031ms
array.push|100,000,000|2,025.084ms
new Array(length)|100,000,000|4,625.878ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|335|168|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":335.834667921311,"samples":168},{"name":"Array.from","opsSec":24.483773156161742,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,551|1776|
|new Blob (1024)|625|313|
|text (128)|4,183|2092|
|text (1024)|546|275|
|arrayBuffer (128)|4,298|2150|
|arrayBuffer (1024)|550|276|
|slice (0, 64)|150,157|75079|
|slice (0, 512)|37,864|18933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:41:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":3551.0966791286673,"samples":1776},{"name":"new Blob (1024)","opsSec":625.0034956764838,"samples":313},{"name":"text (128)","opsSec":4183.962587006515,"samples":2092},{"name":"text (1024)","opsSec":546.539834446543,"samples":275},{"name":"arrayBuffer (128)","opsSec":4298.276322421992,"samples":2150},{"name":"arrayBuffer (1024)","opsSec":550.745596495118,"samples":276},{"name":"slice (0, 64)","opsSec":150157.35672588673,"samples":75079},{"name":"slice (0, 512)","opsSec":37864.846939684474,"samples":18933}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|326,441|163221|
|[True conditional] Using constructor name|314,680|157341|
|[True conditional] Check if property is valid then instanceof |320,060|160031|
|[False conditional] Using instanceof only|15,249,948|7624975|
|[False conditional] Using constructor name|15,878,883|7939442|
|[False conditional] Check if property is valid then instanceof |15,099,948|7549975|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:50:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":326441.30663852853,"samples":163221},{"name":"[True conditional] Using constructor name","opsSec":314680.17988974426,"samples":157341},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320060.08348028857,"samples":160031},{"name":"[False conditional] Using instanceof only","opsSec":15249948.657999516,"samples":7624975},{"name":"[False conditional] Using constructor name","opsSec":15878883.999731846,"samples":7939442},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15099948.460232776,"samples":7549975}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,882|3442|
|crypto.verify('RSA-SHA256')|6,122|3062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:56:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6882.282815379239,"samples":3442},{"name":"crypto.verify('RSA-SHA256')","opsSec":6122.989388355555,"samples":3062}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,283|644642|
|fromUnixToISOString(new Date())|1,565,596|782799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:01:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289283.4739723005,"samples":644642},{"name":"fromUnixToISOString(new Date())","opsSec":1565596.6285371738,"samples":782799}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,196|10099|
|Intl.DateTimeFormat().format(new Date())|19,365|9683|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,066|11534|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,309|11155|
|Reusing Intl.DateTimeFormat()|909,059|454530|
|Date.toLocaleDateString()|930,324|465163|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,306|11654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:08:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20196.970116101595,"samples":10099},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19365.31253140524,"samples":9683},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23066.19280992575,"samples":11534},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22309.63372043424,"samples":11155},{"name":"Reusing Intl.DateTimeFormat()","opsSec":909059.8036435484,"samples":454530},{"name":"Date.toLocaleDateString()","opsSec":930324.4296126706,"samples":465163},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23306.724283143158,"samples":11654}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|884,375|442188|
|Using brackets {}|891,586|445794|
|Using '' + |813,670|406836|
|Using date.toString()|964,779|482390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:13:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":884375.209368144,"samples":442188},{"name":"Using brackets {}","opsSec":891586.0955714049,"samples":445794},{"name":"Using '' + ","opsSec":813670.668834344,"samples":406836},{"name":"Using date.toString()","opsSec":964779.324654546,"samples":482390}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,918,671|1459336|
|Using delete property (proto: null)|7,454,812|3727407|
|Using delete property (cached proto: null)|2,907,749|1453875|
|Using undefined assignment|13,922,134|6961068|
|Using undefined assignment (proto: null)|8,081,438|4040720|
|Using undefined property (cached proto: null)|13,764,141|6882071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:24:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2918671.492155331,"samples":1459336},{"name":"Using delete property (proto: null)","opsSec":7454812.240658969,"samples":3727407},{"name":"Using delete property (cached proto: null)","opsSec":2907749.1974380794,"samples":1453875},{"name":"Using undefined assignment","opsSec":13922134.023093374,"samples":6961068},{"name":"Using undefined assignment (proto: null)","opsSec":8081438.787774127,"samples":4040720},{"name":"Using undefined property (cached proto: null)","opsSec":13764141.311833661,"samples":6882071}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|301,640|150821|
|NodeError|301,093|150547|
|NodeError Range|299,812|149907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:29:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":301640.3325322026,"samples":150821},{"name":"NodeError","opsSec":301093.35024050414,"samples":150547},{"name":"NodeError Range","opsSec":299812.68262300506,"samples":149907}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,528,323|764162|
|Function returning explicitly undefined|1,517,706|758854|
|Function returning implicitly undefined|1,530,682|765342|
|Function returning string|1,509,702|754852|
|Function returning integer|1,530,970|765486|
|Function returning float|1,522,018|761010|
|Function returning functions|1,472,750|736376|
|Function returning arrow functions|1,508,330|754166|
|Function returning empty object|1,536,697|768349|
|Function returning empty array|1,529,131|764566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:38:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1528323.040212928,"samples":764162},{"name":"Function returning explicitly undefined","opsSec":1517706.470153221,"samples":758854},{"name":"Function returning implicitly undefined","opsSec":1530682.6652461796,"samples":765342},{"name":"Function returning string","opsSec":1509702.1068357402,"samples":754852},{"name":"Function returning integer","opsSec":1530970.864015859,"samples":765486},{"name":"Function returning float","opsSec":1522018.6849740155,"samples":761010},{"name":"Function returning functions","opsSec":1472750.2621536737,"samples":736376},{"name":"Function returning arrow functions","opsSec":1508330.3438520744,"samples":754166},{"name":"Function returning empty object","opsSec":1536697.127152326,"samples":768349},{"name":"Function returning empty array","opsSec":1529131.8103899944,"samples":764566}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,847,633|6923817|
|using Array.includes (first item)|14,936,160|7468081|
|Using raw comparison|15,095,380|7547691|
|Using raw comparison (first item)|14,604,486|7302244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:48:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13847633.002980616,"samples":6923817},{"name":"using Array.includes (first item)","opsSec":14936160.148243712,"samples":7468081},{"name":"Using raw comparison","opsSec":15095380.158230208,"samples":7547691},{"name":"Using raw comparison (first item)","opsSec":14604486.159965565,"samples":7302244}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,439,608|6719805|
|Using Object.getOwnPropertyNames()|12,610,943|6305472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13439608.790420914,"samples":6719805},{"name":"Using Object.getOwnPropertyNames()","opsSec":12610943.016317436,"samples":6305472}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,866,294|7433148|
|Length = 10_000 - Array.at|15,371,290|7685646|
|Length = 1_000_000 - Array.at|14,662,087|7331044|
|Length = 100 - Array[length - 1]|15,138,243|7569122|
|Length = 10_000 - Array[length - 1]|14,871,831|7435916|
|Length = 1_000_000 - Array[length - 1]|15,290,039|7645020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:09:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14866294.36488197,"samples":7433148},{"name":"Length = 10_000 - Array.at","opsSec":15371290.278364355,"samples":7685646},{"name":"Length = 1_000_000 - Array.at","opsSec":14662087.530893583,"samples":7331044},{"name":"Length = 100 - Array[length - 1]","opsSec":15138243.001012206,"samples":7569122},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14871831.018452546,"samples":7435916},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15290039.877552368,"samples":7645020}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,566,213|7283107|
|~ (small)|14,036,767|7018384|
|Math.floor (long)|14,854,608|7427305|
|~ (long)|14,335,647|7167824|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14566213.883422505,"samples":7283107},{"name":"~ (small)","opsSec":14036767.803531757,"samples":7018384},{"name":"Math.floor (long)","opsSec":14854608.841227822,"samples":7427305},{"name":"~ (long)","opsSec":14335647.111070773,"samples":7167824}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,292,205|6146103|
|Object.create({})|1,842,052|921027|
|Cached Empty.prototype|14,211,645|7105823|
|Empty.prototype|2,126,374|1068626|
|Empty class|1,295,478|647740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12292205.680339536,"samples":6146103},{"name":"Object.create({})","opsSec":1842052.7105664592,"samples":921027},{"name":"Cached Empty.prototype","opsSec":14211645.516886197,"samples":7105823},{"name":"Empty.prototype","opsSec":2126374.5733945984,"samples":1068626},{"name":"Empty class","opsSec":1295478.9972984076,"samples":647740}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,479,075|7239538|
|Using optional chain (obj.field?.field2) (undefined)|15,363,865|7681933|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,128,653|7564327|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,195,970|7097986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:39:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14479075.507776529,"samples":7239538},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15363865.416147094,"samples":7681933},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15128653.334459009,"samples":7564327},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14195970.2681212,"samples":7097986}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,840,796|7420399|
|Using parseInt(x, 10) - big number (10 len)|14,864,217|7432109|
|Using + - small number (2 len)|14,902,573|7451287|
|Using + - big number (10 len)|14,893,405|7446703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:49:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14840796.7237215,"samples":7420399},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14864217.791942952,"samples":7432109},{"name":"Using + - small number (2 len)","opsSec":14902573.016286395,"samples":7451287},{"name":"Using + - big number (10 len)","opsSec":14893405.91055241,"samples":7446703}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,014,777|507389|
|Using ? operator to avoid rejection|1,036,351|518176|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:54:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":1014777.5047882466,"samples":507389},{"name":"Using ? operator to avoid rejection","opsSec":1036351.7181119536,"samples":518176}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,078,125|7539063|
|Raw usage underscore usage|13,529,615|6764808|
|Manipulating private properties using #|13,569,223|6784612|
|Manipulating private properties using underscore(_)|14,566,365|7283184|
|Manipulating private properties using Symbol|15,079,550|7539776|
|Manipulating private properties using PrivateSymbol|10,612,030|5306016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":15078125.33655524,"samples":7539063},{"name":"Raw usage underscore usage","opsSec":13529615.756406784,"samples":6764808},{"name":"Manipulating private properties using #","opsSec":13569223.53871427,"samples":6784612},{"name":"Manipulating private properties using underscore(_)","opsSec":14566365.465274028,"samples":7283184},{"name":"Manipulating private properties using Symbol","opsSec":15079550.522315461,"samples":7539776},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10612030.450585738,"samples":5306016}]}-->
