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

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,955,774|2477888|
|Adding property in the object creation - small object|4,937,509|2468755|
|Adding property after the function creation - small class|260,675|130338|
|Adding property in the function creation - small class|273,535|136768|
|Adding property after the class creation - small class|273,512|136757|
|Adding property in the class creation - small class|274,201|137101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:15:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4955774.939462461,"samples":2477888},{"name":"Adding property in the object creation - small object","opsSec":4937509.5654928675,"samples":2468755},{"name":"Adding property after the function creation - small class","opsSec":260675.9103275238,"samples":130338},{"name":"Adding property in the function creation - small class","opsSec":273535.13617641723,"samples":136768},{"name":"Adding property after the class creation - small class","opsSec":273512.9978482406,"samples":136757},{"name":"Adding property in the class creation - small class","opsSec":274201.9210299058,"samples":137101}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,949,935|7474968|
|Getter|12,525,479|6262740|
|Method|15,084,260|7542131|
|DefineProperty (getter)|14,753,336|7376669|
|DefineProperty (getter & enumerable=false)|12,663,547|6331774|
|DefineProperty (getter & configurable=false)|14,495,540|7247771|
|DefineProperty (getter & enumerable=false & configurable=false)|12,402,450|6201226|
|DefineProperty (writable)|14,879,963|7439982|
|DefineProperty (writable & enumerable=false)|14,638,163|7319082|
|DefineProperty (writable & enumerable=false & configurable=false)|14,634,950|7317476|
|DefineProperties (getter)|12,040,819|6020410|
|DefineProperties (getter & enumerable=false)|12,336,823|6168412|
|DefineProperties (getter & enumerable=false & configurable=false)|12,409,725|6204863|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:39:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14949935.252468394,"samples":7474968},{"name":"Getter","opsSec":12525479.022875056,"samples":6262740},{"name":"Method","opsSec":15084260.159635348,"samples":7542131},{"name":"DefineProperty (getter)","opsSec":14753336.878785307,"samples":7376669},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12663547.594888518,"samples":6331774},{"name":"DefineProperty (getter & configurable=false)","opsSec":14495540.492890637,"samples":7247771},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12402450.709980454,"samples":6201226},{"name":"DefineProperty (writable)","opsSec":14879963.970327757,"samples":7439982},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14638163.385130256,"samples":7319082},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14634950.565844424,"samples":7317476},{"name":"DefineProperties (getter)","opsSec":12040819.663001664,"samples":6020410},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12336823.925759831,"samples":6168412},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12409725.99942646,"samples":6204863}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,443,238|7221620|
|Setter|5,913,462|2956732|
|Method|13,920,092|6960047|
|DefineProperty (setter)|14,180,613|7090307|
|DefineProperty (setter & enumerable=false)|5,966,270|2983136|
|DefineProperty (setter & configurable=false)|6,066,860|3033431|
|DefineProperty (setter & enumerable=false & configurable=false)|6,032,312|3016157|
|DefineProperty (writable)|14,076,283|7038142|
|DefineProperty (writable & enumerable=false)|15,082,126|7541064|
|DefineProperty (writable & enumerable=false & configurable=false)|14,142,344|7071173|
|DefineProperties (setter)|14,023,053|7011527|
|DefineProperties (setter & enumerable=false)|5,831,045|2915523|
|DefineProperties (setter & enumerable=false & configurable=false)|5,766,061|2883031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:59:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14443238.844646009,"samples":7221620},{"name":"Setter","opsSec":5913462.237861661,"samples":2956732},{"name":"Method","opsSec":13920092.663338246,"samples":6960047},{"name":"DefineProperty (setter)","opsSec":14180613.262615083,"samples":7090307},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5966270.234051133,"samples":2983136},{"name":"DefineProperty (setter & configurable=false)","opsSec":6066860.980856353,"samples":3033431},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6032312.455861004,"samples":3016157},{"name":"DefineProperty (writable)","opsSec":14076283.436879646,"samples":7038142},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15082126.189846419,"samples":7541064},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14142344.133530987,"samples":7071173},{"name":"DefineProperties (setter)","opsSec":14023053.775619227,"samples":7011527},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5831045.335023443,"samples":2915523},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5766061.042330352,"samples":2883031}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,558,626|1279314|
|Using replaceAll()|2,365,321|1182661|
|Using replaceAll(//g)|2,363,068|1181535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2558626.188489816,"samples":1279314},{"name":"Using replaceAll()","opsSec":2365321.47489944,"samples":1182661},{"name":"Using replaceAll(//g)","opsSec":2363068.4214706155,"samples":1181535}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,343,053|5171527|
|{ ...object, __proto__: null }|2,130,255|1065128|
|{ ...object, newProp: true }|10,380,794|5190398|
|structuredClone|292,557|146279|
|JSON.parse + JSON.stringify|272,924|136463|
|loop + object.keys starting with {}|1,466,908|733455|
|loop + object.keys starting with { __proto__: null }|809,043|404522|
|loop + object.keys starting with { randomProp: true }|568,485|284243|
|object.keys + reduce(FN, {})|1,471,989|735995|
|object.keys + reduce(FN, { __proto__: null })|783,425|391713|
|object.keys + reduce(FN, { newProp: true })|574,178|287090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10343053.462101737,"samples":5171527},{"name":"{ ...object, __proto__: null }","opsSec":2130255.786975233,"samples":1065128},{"name":"{ ...object, newProp: true }","opsSec":10380794.546613572,"samples":5190398},{"name":"structuredClone","opsSec":292557.3218525327,"samples":146279},{"name":"JSON.parse + JSON.stringify","opsSec":272924.4481519501,"samples":136463},{"name":"loop + object.keys starting with {}","opsSec":1466908.4656122862,"samples":733455},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809043.8074475498,"samples":404522},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":568485.6464016056,"samples":284243},{"name":"object.keys + reduce(FN, {})","opsSec":1471989.0726428002,"samples":735995},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":783425.5722492989,"samples":391713},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":574178.5301026909,"samples":287090}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|304,606|152304|
|Sort using first char|1,146,131|573066|
|Sort using localeCompare|1,068,992|534497|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:21:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":304606.2156167428,"samples":152304},{"name":"Sort using first char","opsSec":1146131.541547497,"samples":573066},{"name":"Sort using localeCompare","opsSec":1068992.7941761536,"samples":534497}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,825|913|
|{...smallObject} - Total keys: 2|10,841,053|5420527|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,317|1159|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,695|3348|
|{ ...bigObject, ...anotherBigObject }|1,121|561|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,640,568|3320285|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,323,441|5161721|
|{ ...smallObject, ...anotherSmallObject }|8,734,394|4367343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:31:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1825.9342663663374,"samples":913},{"name":"{...smallObject} - Total keys: 2","opsSec":10841053.457995102,"samples":5420527},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2317.9060367249795,"samples":1159},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6695.725542209918,"samples":3348},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1121.3134735831484,"samples":561},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6640568.207102266,"samples":3320285},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10323441.256733686,"samples":5161721},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8734394.323602227,"samples":4367343}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,145|1073|
|streams.web.Readable reading 1e3 * "some data"|1,780|891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2145.0221316006614,"samples":1073},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1780.5103680497587,"samples":891}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|13,975|6988|
|streams.web.WritableStream writing 1e3 * "some data"|2,280|1148|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:41:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":13975.160009032741,"samples":6988},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2280.8373173927966,"samples":1148}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,726,629|7363315|
|Using backtick (`)|14,709,883|7354942|
|Using array.join|5,814,344|2907173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:50:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14726629.882170474,"samples":7363315},{"name":"Using backtick (`)","opsSec":14709883.146708488,"samples":7354942},{"name":"Using array.join","opsSec":5814344.3254593825,"samples":2907173}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,910,869|7455435|
|(short string) (true) String#slice and strict comparison|13,708,285|6854143|
|(long string) (true) String#endsWith|14,388,496|7194249|
|(long string) (true) String#slice and strict comparison|13,511,743|6755872|
|(short string) (false) String#endsWith|14,996,436|7498219|
|(short string) (false) String#slice and strict comparison|13,399,809|6699905|
|(long string) (false) String#endsWith|14,529,436|7264719|
|(long string) (false) String#slice and strict comparison|12,798,895|6399448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:05:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14910869.940253759,"samples":7455435},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13708285.533922324,"samples":6854143},{"name":"(long string) (true) String#endsWith","opsSec":14388496.73384892,"samples":7194249},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13511743.675689926,"samples":6755872},{"name":"(short string) (false) String#endsWith","opsSec":14996436.770452164,"samples":7498219},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13399809.035174813,"samples":6699905},{"name":"(long string) (false) String#endsWith","opsSec":14529436.604794094,"samples":7264719},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12798895.667402556,"samples":6399448}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,774,869|3887435|
|Using indexof|7,870,278|3935140|
|Using RegExp.test|7,483,650|3741826|
|Using RegExp.text with cached regex pattern|7,187,341|3593671|
|Using new RegExp.test|3,306,065|1653033|
|Using new RegExp.test with cached regex pattern|3,669,965|1834983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":7774869.8755838815,"samples":3887435},{"name":"Using indexof","opsSec":7870278.158364853,"samples":3935140},{"name":"Using RegExp.test","opsSec":7483650.159019695,"samples":3741826},{"name":"Using RegExp.text with cached regex pattern","opsSec":7187341.252539109,"samples":3593671},{"name":"Using new RegExp.test","opsSec":3306065.6561713647,"samples":1653033},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3669965.7137459954,"samples":1834983}]}-->
