## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,932,250|7466126|
|Using dot notation|13,966,219|6983110|
|Using define property (writable)|3,120,230|1560116|
|Using define property initialized (writable)|3,778,930|1889466|
|Using define property (getter)|1,673,887|836944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14932250.626255834,"samples":7466126},{"name":"Using dot notation","opsSec":13966219.608990937,"samples":6983110},{"name":"Using define property (writable)","opsSec":3120230.1840278925,"samples":1560116},{"name":"Using define property initialized (writable)","opsSec":3778930.8965389645,"samples":1889466},{"name":"Using define property (getter)","opsSec":1673887.5279614015,"samples":836944}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.012ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.256ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|29.189ms
new Array(length)|1,000,000|7.248ms
array.push|100,000,000|1,766.111ms
new Array(length)|100,000,000|3,808.735ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.324ms
new Array(length)|10,000|0.191ms
array.push|1,000,000|19.501ms
new Array(length)|1,000,000|7.503ms
array.push|100,000,000|1,937.905ms
new Array(length)|100,000,000|4,538.039ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|283|142|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":283.9766338346155,"samples":142},{"name":"Array.from","opsSec":22.844738425260644,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,325|2163|
|new Blob (1024)|595|298|
|text (128)|4,730|2367|
|text (1024)|603|302|
|arrayBuffer (128)|4,677|2339|
|arrayBuffer (1024)|600|301|
|slice (0, 64)|251,751|125876|
|slice (0, 512)|37,980|18991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:39:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4325.605573981527,"samples":2163},{"name":"new Blob (1024)","opsSec":595.380651704767,"samples":298},{"name":"text (128)","opsSec":4730.298106544068,"samples":2367},{"name":"text (1024)","opsSec":603.4145804491736,"samples":302},{"name":"arrayBuffer (128)","opsSec":4677.178640659618,"samples":2339},{"name":"arrayBuffer (1024)","opsSec":600.218274859374,"samples":301},{"name":"slice (0, 64)","opsSec":251751.1823121889,"samples":125876},{"name":"slice (0, 512)","opsSec":37980.55073814731,"samples":18991}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|318,042|159022|
|[True conditional] Using constructor name|310,446|155224|
|[True conditional] Check if property is valid then instanceof |313,870|156936|
|[False conditional] Using instanceof only|15,341,948|7670975|
|[False conditional] Using constructor name|15,156,328|7578165|
|[False conditional] Check if property is valid then instanceof |14,442,860|7221431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":318042.14008983993,"samples":159022},{"name":"[True conditional] Using constructor name","opsSec":310446.26025931735,"samples":155224},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313870.2630420226,"samples":156936},{"name":"[False conditional] Using instanceof only","opsSec":15341948.772477414,"samples":7670975},{"name":"[False conditional] Using constructor name","opsSec":15156328.57527155,"samples":7578165},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14442860.844495606,"samples":7221431}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,202|3602|
|crypto.verify('RSA-SHA256')|7,265|3633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:55:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7202.640991292487,"samples":3602},{"name":"crypto.verify('RSA-SHA256')","opsSec":7265.248700631896,"samples":3633}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,282,509|641255|
|fromUnixToISOString(new Date())|1,846,177|923089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1282509.1407184834,"samples":641255},{"name":"fromUnixToISOString(new Date())","opsSec":1846177.531071808,"samples":923089}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,156|11579|
|Intl.DateTimeFormat().format(new Date())|20,245|10123|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,767|11384|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,047|11024|
|Reusing Intl.DateTimeFormat()|659,056|329529|
|Date.toLocaleDateString()|649,642|324822|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,920|11461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:06:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23156.374515133637,"samples":11579},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20245.978296307825,"samples":10123},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22767.164445062866,"samples":11384},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22047.626072263643,"samples":11024},{"name":"Reusing Intl.DateTimeFormat()","opsSec":659056.673976878,"samples":329529},{"name":"Date.toLocaleDateString()","opsSec":649642.5473987912,"samples":324822},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22920.886915889674,"samples":11461}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|937,903|468952|
|Using brackets {}|936,169|468085|
|Using '' + |939,471|469736|
|Using date.toString()|1,029,697|514849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:12:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":937903.8949544963,"samples":468952},{"name":"Using brackets {}","opsSec":936169.3091074189,"samples":468085},{"name":"Using '' + ","opsSec":939471.1995705592,"samples":469736},{"name":"Using date.toString()","opsSec":1029697.9546940145,"samples":514849}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,915,152|1457577|
|Using delete property (proto: null)|7,935,829|3967916|
|Using delete property (cached proto: null)|2,882,503|1441252|
|Using undefined assignment|14,187,573|7093787|
|Using undefined assignment (proto: null)|8,661,721|4330861|
|Using undefined property (cached proto: null)|14,139,026|7069514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:21:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2915152.7639761777,"samples":1457577},{"name":"Using delete property (proto: null)","opsSec":7935829.619252359,"samples":3967916},{"name":"Using delete property (cached proto: null)","opsSec":2882503.089122172,"samples":1441252},{"name":"Using undefined assignment","opsSec":14187573.26208088,"samples":7093787},{"name":"Using undefined assignment (proto: null)","opsSec":8661721.151117828,"samples":4330861},{"name":"Using undefined property (cached proto: null)","opsSec":14139026.557786295,"samples":7069514}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|294,403|147202|
|NodeError|291,918|145960|
|NodeError Range|293,608|146805|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:28:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":294403.8739951694,"samples":147202},{"name":"NodeError","opsSec":291918.7114708588,"samples":145960},{"name":"NodeError Range","opsSec":293608.9148214402,"samples":146805}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,516,323|758162|
|Function returning explicitly undefined|1,522,824|761413|
|Function returning implicitly undefined|1,535,016|767509|
|Function returning string|1,428,915|714458|
|Function returning integer|1,532,207|766104|
|Function returning float|1,522,558|761280|
|Function returning functions|1,486,345|743173|
|Function returning arrow functions|1,502,914|751458|
|Function returning empty object|1,518,395|759198|
|Function returning empty array|1,487,704|743853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1516323.405604135,"samples":758162},{"name":"Function returning explicitly undefined","opsSec":1522824.8152421475,"samples":761413},{"name":"Function returning implicitly undefined","opsSec":1535016.0198316013,"samples":767509},{"name":"Function returning string","opsSec":1428915.5627468345,"samples":714458},{"name":"Function returning integer","opsSec":1532207.9632303186,"samples":766104},{"name":"Function returning float","opsSec":1522558.3647795506,"samples":761280},{"name":"Function returning functions","opsSec":1486345.515448408,"samples":743173},{"name":"Function returning arrow functions","opsSec":1502914.3347731635,"samples":751458},{"name":"Function returning empty object","opsSec":1518395.526262457,"samples":759198},{"name":"Function returning empty array","opsSec":1487704.3010420655,"samples":743853}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,773,506|6886754|
|using Array.includes (first item)|14,378,186|7189094|
|Using raw comparison|15,189,662|7594832|
|Using raw comparison (first item)|15,059,855|7529928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13773506.732837804,"samples":6886754},{"name":"using Array.includes (first item)","opsSec":14378186.734616721,"samples":7189094},{"name":"Using raw comparison","opsSec":15189662.359642897,"samples":7594832},{"name":"Using raw comparison (first item)","opsSec":15059855.789071549,"samples":7529928}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,238,275|6619138|
|Using Object.getOwnPropertyNames()|12,343,954|6171978|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:53:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13238275.52343791,"samples":6619138},{"name":"Using Object.getOwnPropertyNames()","opsSec":12343954.86441271,"samples":6171978}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,273,873|6636937|
|Length = 10_000 - Array.at|13,892,467|6946234|
|Length = 1_000_000 - Array.at|14,682,269|7341135|
|Length = 100 - Array[length - 1]|14,939,500|7469751|
|Length = 10_000 - Array[length - 1]|14,045,965|7022983|
|Length = 1_000_000 - Array[length - 1]|14,070,145|7035073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:06:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13273873.708048563,"samples":6636937},{"name":"Length = 10_000 - Array.at","opsSec":13892467.861143405,"samples":6946234},{"name":"Length = 1_000_000 - Array.at","opsSec":14682269.911848238,"samples":7341135},{"name":"Length = 100 - Array[length - 1]","opsSec":14939500.266923575,"samples":7469751},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14045965.97205134,"samples":7022983},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14070145.240419103,"samples":7035073}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,209,673|7604837|
|~ (small)|15,297,351|7648676|
|Math.floor (long)|15,363,466|7681734|
|~ (long)|15,353,080|7676541|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:26:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15209673.99995339,"samples":7604837},{"name":"~ (small)","opsSec":15297351.204541449,"samples":7648676},{"name":"Math.floor (long)","opsSec":15363466.12567634,"samples":7681734},{"name":"~ (long)","opsSec":15353080.526094891,"samples":7676541}]}-->

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
