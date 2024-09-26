## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,237,386|7618694|
|Using dot notation|14,996,493|7498247|
|Using define property (writable)|3,301,993|1650997|
|Using define property initialized (writable)|3,979,474|1989738|
|Using define property (getter)|2,061,445|1030723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:22:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15237386.384958118,"samples":7618694},{"name":"Using dot notation","opsSec":14996493.339912929,"samples":7498247},{"name":"Using define property (writable)","opsSec":3301993.1481033545,"samples":1650997},{"name":"Using define property initialized (writable)","opsSec":3979474.5435009375,"samples":1989738},{"name":"Using define property (getter)","opsSec":2061445.6660356098,"samples":1030723}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.01ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.294ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|23.281ms
new Array(length)|1,000,000|16.606ms
array.push|100,000,000|1,938.221ms
new Array(length)|100,000,000|4,094.572ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.014ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.019ms
array.push|10,000|163.626ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|17.289ms
new Array(length)|1,000,000|8.513ms
array.push|100,000,000|2,069.805ms
new Array(length)|100,000,000|4,775.388ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|337|169|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":337.2830280234071,"samples":169},{"name":"Array.from","opsSec":23.774386822456485,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,279|2140|
|new Blob (1024)|593|297|
|text (128)|4,481|2241|
|text (1024)|576|289|
|arrayBuffer (128)|4,614|2308|
|arrayBuffer (1024)|565|283|
|slice (0, 64)|183,257|91629|
|slice (0, 512)|37,718|18860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:15:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4279.611068946148,"samples":2140},{"name":"new Blob (1024)","opsSec":593.81229830777,"samples":297},{"name":"text (128)","opsSec":4481.411787814181,"samples":2241},{"name":"text (1024)","opsSec":576.9789227084136,"samples":289},{"name":"arrayBuffer (128)","opsSec":4614.238698946286,"samples":2308},{"name":"arrayBuffer (1024)","opsSec":565.0752633726709,"samples":283},{"name":"slice (0, 64)","opsSec":183257.37252671938,"samples":91629},{"name":"slice (0, 512)","opsSec":37718.894383765815,"samples":18860}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,192|164097|
|[True conditional] Using constructor name|316,427|158214|
|[True conditional] Check if property is valid then instanceof |318,265|159133|
|[False conditional] Using instanceof only|14,151,869|7075935|
|[False conditional] Using constructor name|14,209,951|7104976|
|[False conditional] Check if property is valid then instanceof |14,421,532|7210767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:24:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328192.5789262169,"samples":164097},{"name":"[True conditional] Using constructor name","opsSec":316427.36714581354,"samples":158214},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318265.2253424097,"samples":159133},{"name":"[False conditional] Using instanceof only","opsSec":14151869.858499067,"samples":7075935},{"name":"[False conditional] Using constructor name","opsSec":14209951.573709993,"samples":7104976},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14421532.846151695,"samples":7210767}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,243|3622|
|crypto.verify('RSA-SHA256')|7,319|3660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:30:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7243.842721686802,"samples":3622},{"name":"crypto.verify('RSA-SHA256')","opsSec":7319.147655978938,"samples":3660}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,116,205|558103|
|fromUnixToISOString(new Date())|1,581,735|790868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1116205.2610724864,"samples":558103},{"name":"fromUnixToISOString(new Date())","opsSec":1581735.2977082313,"samples":790868}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,993|11285|
|Intl.DateTimeFormat().format(new Date())|23,096|11549|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,214|11608|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,709|11355|
|Reusing Intl.DateTimeFormat()|623,536|311769|
|Date.toLocaleDateString()|627,537|313769|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,289|11645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19993.503785513058,"samples":11285},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":23096.882942347613,"samples":11549},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23214.058376155375,"samples":11608},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22709.723395565292,"samples":11355},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623536.378805177,"samples":311769},{"name":"Date.toLocaleDateString()","opsSec":627537.1515696802,"samples":313769},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23289.270626620368,"samples":11645}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|877,407|438704|
|Using brackets {}|883,507|441754|
|Using '' + |876,316|438159|
|Using date.toString()|947,048|473525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":877407.3630018968,"samples":438704},{"name":"Using brackets {}","opsSec":883507.521139451,"samples":441754},{"name":"Using '' + ","opsSec":876316.3052043504,"samples":438159},{"name":"Using date.toString()","opsSec":947048.0471868685,"samples":473525}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,733,526|1366764|
|Using delete property (proto: null)|7,800,453|3900227|
|Using delete property (cached proto: null)|2,691,868|1345935|
|Using undefined assignment|12,810,091|6405046|
|Using undefined assignment (proto: null)|8,330,145|4165073|
|Using undefined property (cached proto: null)|12,764,534|6382268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:57:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2733526.0810695505,"samples":1366764},{"name":"Using delete property (proto: null)","opsSec":7800453.70361081,"samples":3900227},{"name":"Using delete property (cached proto: null)","opsSec":2691868.6863668924,"samples":1345935},{"name":"Using undefined assignment","opsSec":12810091.28244954,"samples":6405046},{"name":"Using undefined assignment (proto: null)","opsSec":8330145.200256271,"samples":4165073},{"name":"Using undefined property (cached proto: null)","opsSec":12764534.851195654,"samples":6382268}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|302,815|151408|
|NodeError|301,847|150924|
|NodeError Range|302,309|151155|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:03:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":302815.7304940367,"samples":151408},{"name":"NodeError","opsSec":301847.12041752745,"samples":150924},{"name":"NodeError Range","opsSec":302309.26599310996,"samples":151155}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,357,030|678516|
|Function returning explicitly undefined|1,351,188|675595|
|Function returning implicitly undefined|1,354,330|677166|
|Function returning string|1,353,349|676675|
|Function returning integer|1,358,415|679208|
|Function returning float|1,356,520|678261|
|Function returning functions|1,267,572|633787|
|Function returning arrow functions|1,355,035|677518|
|Function returning empty object|1,391,628|695815|
|Function returning empty array|1,380,330|690166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:15:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1357030.2630037016,"samples":678516},{"name":"Function returning explicitly undefined","opsSec":1351188.2731798831,"samples":675595},{"name":"Function returning implicitly undefined","opsSec":1354330.6294195012,"samples":677166},{"name":"Function returning string","opsSec":1353349.3693414421,"samples":676675},{"name":"Function returning integer","opsSec":1358415.3533916217,"samples":679208},{"name":"Function returning float","opsSec":1356520.9527609989,"samples":678261},{"name":"Function returning functions","opsSec":1267572.5220152512,"samples":633787},{"name":"Function returning arrow functions","opsSec":1355035.1192228026,"samples":677518},{"name":"Function returning empty object","opsSec":1391628.691865306,"samples":695815},{"name":"Function returning empty array","opsSec":1380330.746661648,"samples":690166}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,659,576|6829789|
|using Array.includes (first item)|14,732,821|7366411|
|Using raw comparison|14,658,519|7329260|
|Using raw comparison (first item)|14,991,257|7495629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13659576.879913073,"samples":6829789},{"name":"using Array.includes (first item)","opsSec":14732821.617054882,"samples":7366411},{"name":"Using raw comparison","opsSec":14658519.765604496,"samples":7329260},{"name":"Using raw comparison (first item)","opsSec":14991257.849881219,"samples":7495629}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,543,544|6271773|
|Using Object.getOwnPropertyNames()|12,586,119|6293060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:33:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12543544.720546803,"samples":6271773},{"name":"Using Object.getOwnPropertyNames()","opsSec":12586119.244881446,"samples":6293060}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,747,606|6873804|
|Length = 10_000 - Array.at|13,824,570|6912286|
|Length = 1_000_000 - Array.at|13,787,177|6893589|
|Length = 100 - Array[length - 1]|13,920,651|6960326|
|Length = 10_000 - Array[length - 1]|14,096,680|7048341|
|Length = 1_000_000 - Array[length - 1]|13,475,055|6737528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13747606.267853437,"samples":6873804},{"name":"Length = 10_000 - Array.at","opsSec":13824570.672906147,"samples":6912286},{"name":"Length = 1_000_000 - Array.at","opsSec":13787177.751751969,"samples":6893589},{"name":"Length = 100 - Array[length - 1]","opsSec":13920651.749415321,"samples":6960326},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14096680.703299811,"samples":7048341},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":13475055.945800135,"samples":6737528}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,718,252|7359127|
|~ (small)|14,946,089|7473051|
|Math.floor (long)|14,758,233|7379117|
|~ (long)|15,016,215|7508108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14718252.734196693,"samples":7359127},{"name":"~ (small)","opsSec":14946089.116164938,"samples":7473051},{"name":"Math.floor (long)","opsSec":14758233.557007695,"samples":7379117},{"name":"~ (long)","opsSec":15016215.158937613,"samples":7508108}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,961,353|5980790|
|Object.create({})|1,820,410|910206|
|Cached Empty.prototype|13,866,449|6933225|
|Empty.prototype|2,048,205|1024103|
|Empty class|1,214,997|607499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11961353.451994276,"samples":5980790},{"name":"Object.create({})","opsSec":1820410.9041100263,"samples":910206},{"name":"Cached Empty.prototype","opsSec":13866449.944612524,"samples":6933225},{"name":"Empty.prototype","opsSec":2048205.73784132,"samples":1024103},{"name":"Empty class","opsSec":1214997.3293242883,"samples":607499}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,653,714|6826858|
|Using optional chain (obj.field?.field2) (undefined)|14,004,708|7002355|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,656,009|7328005|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,204,684|7602343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:17:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13653714.93505458,"samples":6826858},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14004708.319503315,"samples":7002355},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14656009.501639418,"samples":7328005},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15204684.449069446,"samples":7602343}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,160,271|7580136|
|Using parseInt(x, 10) - big number (10 len)|15,352,076|7676039|
|Using + - small number (2 len)|15,009,087|7504544|
|Using + - big number (10 len)|15,055,736|7527869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15160271.818115724,"samples":7580136},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15352076.894539282,"samples":7676039},{"name":"Using + - small number (2 len)","opsSec":15009087.009239173,"samples":7504544},{"name":"Using + - big number (10 len)","opsSec":15055736.945831534,"samples":7527869}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,008,464|504233|
|Using ? operator to avoid rejection|1,007,222|503612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:33:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":1008464.9249760692,"samples":504233},{"name":"Using ? operator to avoid rejection","opsSec":1007222.8296074609,"samples":503612}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,488,652|6744327|
|Raw usage underscore usage|14,211,412|7105707|
|Manipulating private properties using #|13,623,004|6811503|
|Manipulating private properties using underscore(_)|14,078,141|7039071|
|Manipulating private properties using Symbol|14,057,007|7028504|
|Manipulating private properties using PrivateSymbol|10,880,352|5440177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13488652.489392795,"samples":6744327},{"name":"Raw usage underscore usage","opsSec":14211412.69256996,"samples":7105707},{"name":"Manipulating private properties using #","opsSec":13623004.82852338,"samples":6811503},{"name":"Manipulating private properties using underscore(_)","opsSec":14078141.746558946,"samples":7039071},{"name":"Manipulating private properties using Symbol","opsSec":14057007.550198926,"samples":7028504},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10880352.977186467,"samples":5440177}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,866,742|2433372|
|Adding property in the object creation - small object|4,775,119|2387560|
|Adding property after the function creation - small class|259,874|129938|
|Adding property in the function creation - small class|250,322|125162|
|Adding property after the class creation - small class|261,818|131936|
|Adding property in the class creation - small class|272,344|136221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:53:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4866742.968241147,"samples":2433372},{"name":"Adding property in the object creation - small object","opsSec":4775119.331480496,"samples":2387560},{"name":"Adding property after the function creation - small class","opsSec":259874.18503863033,"samples":129938},{"name":"Adding property in the function creation - small class","opsSec":250322.601697999,"samples":125162},{"name":"Adding property after the class creation - small class","opsSec":261818.48691594924,"samples":131936},{"name":"Adding property in the class creation - small class","opsSec":272344.90958425234,"samples":136221}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,069,324|7034663|
|Getter|12,237,885|6118943|
|Method|14,026,115|7013058|
|DefineProperty (getter)|13,573,765|6786883|
|DefineProperty (getter & enumerable=false)|12,716,347|6358174|
|DefineProperty (getter & configurable=false)|14,733,882|7366942|
|DefineProperty (getter & enumerable=false & configurable=false)|12,156,780|6078391|
|DefineProperty (writable)|14,469,670|7234836|
|DefineProperty (writable & enumerable=false)|14,224,626|7112314|
|DefineProperty (writable & enumerable=false & configurable=false)|14,240,589|7120295|
|DefineProperties (getter)|11,901,843|5950922|
|DefineProperties (getter & enumerable=false)|11,875,762|5937882|
|DefineProperties (getter & enumerable=false & configurable=false)|11,957,726|5978864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:17:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14069324.424378445,"samples":7034663},{"name":"Getter","opsSec":12237885.486195982,"samples":6118943},{"name":"Method","opsSec":14026115.270323966,"samples":7013058},{"name":"DefineProperty (getter)","opsSec":13573765.674334595,"samples":6786883},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12716347.288062327,"samples":6358174},{"name":"DefineProperty (getter & configurable=false)","opsSec":14733882.968738904,"samples":7366942},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12156780.371309306,"samples":6078391},{"name":"DefineProperty (writable)","opsSec":14469670.293352563,"samples":7234836},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14224626.719987465,"samples":7112314},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14240589.801032247,"samples":7120295},{"name":"DefineProperties (getter)","opsSec":11901843.762460114,"samples":5950922},{"name":"DefineProperties (getter & enumerable=false)","opsSec":11875762.289961888,"samples":5937882},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":11957726.732961321,"samples":5978864}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,605,085|7302543|
|Setter|5,935,290|2967646|
|Method|13,108,479|6554240|
|DefineProperty (setter)|14,348,399|7174200|
|DefineProperty (setter & enumerable=false)|5,949,132|2974567|
|DefineProperty (setter & configurable=false)|5,855,515|2927758|
|DefineProperty (setter & enumerable=false & configurable=false)|5,940,059|2970030|
|DefineProperty (writable)|14,456,461|7228231|
|DefineProperty (writable & enumerable=false)|13,658,107|6829054|
|DefineProperty (writable & enumerable=false & configurable=false)|13,661,879|6830940|
|DefineProperties (setter)|14,309,572|7154787|
|DefineProperties (setter & enumerable=false)|5,907,941|2953971|
|DefineProperties (setter & enumerable=false & configurable=false)|6,021,235|3010618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14605085.474376144,"samples":7302543},{"name":"Setter","opsSec":5935290.646805269,"samples":2967646},{"name":"Method","opsSec":13108479.18729767,"samples":6554240},{"name":"DefineProperty (setter)","opsSec":14348399.91359951,"samples":7174200},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5949132.405605485,"samples":2974567},{"name":"DefineProperty (setter & configurable=false)","opsSec":5855515.730669873,"samples":2927758},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5940059.952508203,"samples":2970030},{"name":"DefineProperty (writable)","opsSec":14456461.363748873,"samples":7228231},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13658107.8907669,"samples":6829054},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13661879.426609814,"samples":6830940},{"name":"DefineProperties (setter)","opsSec":14309572.369119039,"samples":7154787},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5907941.054626633,"samples":2953971},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6021235.927836445,"samples":3010618}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,573,521|1286761|
|Using replaceAll()|2,448,103|1224053|
|Using replaceAll(//g)|2,401,188|1200595|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2573521.5727936123,"samples":1286761},{"name":"Using replaceAll()","opsSec":2448103.8456688575,"samples":1224053},{"name":"Using replaceAll(//g)","opsSec":2401188.79460466,"samples":1200595}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,024,252|4512127|
|{ ...object, __proto__: null }|2,105,328|1052665|
|{ ...object, newProp: true }|8,705,106|4352554|
|structuredClone|291,556|145779|
|JSON.parse + JSON.stringify|276,556|138279|
|loop + object.keys starting with {}|1,422,657|711329|
|loop + object.keys starting with { __proto__: null }|773,302|386652|
|loop + object.keys starting with { randomProp: true }|564,984|282493|
|object.keys + reduce(FN, {})|565,138|282570|
|object.keys + reduce(FN, { __proto__: null })|752,852|376427|
|object.keys + reduce(FN, { newProp: true })|570,802|285402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9024252.790708482,"samples":4512127},{"name":"{ ...object, __proto__: null }","opsSec":2105328.3620607965,"samples":1052665},{"name":"{ ...object, newProp: true }","opsSec":8705106.537562065,"samples":4352554},{"name":"structuredClone","opsSec":291556.164362856,"samples":145779},{"name":"JSON.parse + JSON.stringify","opsSec":276556.7682166368,"samples":138279},{"name":"loop + object.keys starting with {}","opsSec":1422657.7069306741,"samples":711329},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":773302.270896049,"samples":386652},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":564984.6598557604,"samples":282493},{"name":"object.keys + reduce(FN, {})","opsSec":565138.6594917644,"samples":282570},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":752852.6237854636,"samples":376427},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":570802.5729941975,"samples":285402}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|292,948|146475|
|Sort using first char|1,107,241|553621|
|Sort using localeCompare|1,017,793|508897|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:00:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":292948.84695330984,"samples":146475},{"name":"Sort using first char","opsSec":1107241.6966154329,"samples":553621},{"name":"Sort using localeCompare","opsSec":1017793.4422489068,"samples":508897}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,734|868|
|{...smallObject} - Total keys: 2|10,035,525|5017763|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,249|1125|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,761|3381|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,391,466|3195734|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,623,280|4811641|
|{ ...smallObject, ...anotherSmallObject }|8,020,389|4010195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:08:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1734.5170122376956,"samples":868},{"name":"{...smallObject} - Total keys: 2","opsSec":10035525.71899978,"samples":5017763},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2249.2204067114844,"samples":1125},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6761.662295538814,"samples":3381},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1103.121868661457,"samples":552},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6391466.696106172,"samples":3195734},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9623280.267785229,"samples":4811641},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8020389.454663285,"samples":4010195}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,002|1002|
|streams.web.Readable reading 1e3 * "some data"|1,650|826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:14:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2002.584925429667,"samples":1002},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1650.872879748353,"samples":826}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,995|2998|
|streams.web.WritableStream writing 1e3 * "some data"|2,147|1074|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:20:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5995.436404996258,"samples":2998},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2147.953230466409,"samples":1074}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,888,561|6944281|
|Using backtick (`)|13,141,037|6570519|
|Using array.join|5,404,774|2702388|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:29:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":13888561.666711796,"samples":6944281},{"name":"Using backtick (`)","opsSec":13141037.684604663,"samples":6570519},{"name":"Using array.join","opsSec":5404774.994703607,"samples":2702388}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,676,256|7338129|
|(short string) (true) String#slice and strict comparison|13,109,009|6554505|
|(long string) (true) String#endsWith|13,513,486|6756744|
|(long string) (true) String#slice and strict comparison|12,424,728|6212365|
|(short string) (false) String#endsWith|14,836,227|7418114|
|(short string) (false) String#slice and strict comparison|12,700,771|6350386|
|(long string) (false) String#endsWith|13,955,706|6977854|
|(long string) (false) String#slice and strict comparison|12,508,928|6254465|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14676256.708577283,"samples":7338129},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13109009.344470147,"samples":6554505},{"name":"(long string) (true) String#endsWith","opsSec":13513486.134989422,"samples":6756744},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12424728.757609691,"samples":6212365},{"name":"(short string) (false) String#endsWith","opsSec":14836227.821916413,"samples":7418114},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12700771.822021134,"samples":6350386},{"name":"(long string) (false) String#endsWith","opsSec":13955706.102081003,"samples":6977854},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12508928.323958853,"samples":6254465}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,006,316|4003159|
|Using indexof|8,011,064|4005533|
|Using RegExp.test|7,200,998|3600500|
|Using RegExp.text with cached regex pattern|7,143,441|3571722|
|Using new RegExp.test|3,306,293|1653147|
|Using new RegExp.test with cached regex pattern|3,633,936|1816969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:58:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8006316.638921457,"samples":4003159},{"name":"Using indexof","opsSec":8011064.878394435,"samples":4005533},{"name":"Using RegExp.test","opsSec":7200998.790271299,"samples":3600500},{"name":"Using RegExp.text with cached regex pattern","opsSec":7143441.414084819,"samples":3571722},{"name":"Using new RegExp.test","opsSec":3306293.1800520523,"samples":1653147},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3633936.4083097996,"samples":1816969}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,478,551|6739276|
|(short string) (true) String#slice and strict comparison|13,676,962|6838482|
|(long string) (true) String#startsWith|13,891,931|6945966|
|(long string) (true) String#slice and strict comparison|13,517,427|6758714|
|(short string) (false) String#startsWith|14,126,228|7063115|
|(short string) (false) String#slice and strict comparison|13,473,998|6737000|
|(long string) (false) String#startsWith|13,173,576|6586789|
|(long string) (false) String#slice and strict comparison|12,460,711|6230356|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:13:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13478551.649598628,"samples":6739276},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13676962.413567556,"samples":6838482},{"name":"(long string) (true) String#startsWith","opsSec":13891931.833132006,"samples":6945966},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13517427.621502064,"samples":6758714},{"name":"(short string) (false) String#startsWith","opsSec":14126228.333029255,"samples":7063115},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13473998.437127806,"samples":6737000},{"name":"(long string) (false) String#startsWith","opsSec":13173576.919606641,"samples":6586789},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12460711.32724702,"samples":6230356}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,085,708|7042855|
|Using this|14,503,390|7251696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14085708.309724655,"samples":7042855},{"name":"Using this","opsSec":14503390.114527252,"samples":7251696}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,021,257|2510629|
|Date.now()|8,876,591|4438296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5021257.206631804,"samples":2510629},{"name":"Date.now()","opsSec":8876591.769213703,"samples":4438296}]}-->
