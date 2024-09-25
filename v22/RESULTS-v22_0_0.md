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
|Sort using default|294,569|147285|
|Sort using first char|1,146,733|573367|
|Sort using localeCompare|1,058,262|529132|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:19:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":294569.7054303116,"samples":147285},{"name":"Sort using first char","opsSec":1146733.4954356833,"samples":573367},{"name":"Sort using localeCompare","opsSec":1058262.0083506552,"samples":529132}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,861|931|
|{...smallObject} - Total keys: 2|10,842,120|5421061|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,293|1147|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,707|3354|
|{ ...bigObject, ...anotherBigObject }|1,135|568|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,542,036|3271019|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,108,917|5054459|
|{ ...smallObject, ...anotherSmallObject }|8,165,703|4082852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1861.126428199456,"samples":931},{"name":"{...smallObject} - Total keys: 2","opsSec":10842120.807409221,"samples":5421061},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2293.6946725397593,"samples":1147},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6707.80067099606,"samples":3354},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1135.420519970902,"samples":568},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6542036.62625181,"samples":3271019},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10108917.656354642,"samples":5054459},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8165703.738723296,"samples":4082852}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,077|1039|
|streams.web.Readable reading 1e3 * "some data"|1,746|874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:35:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2077.6559235578243,"samples":1039},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1746.258773943844,"samples":874}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,099|3050|
|streams.web.WritableStream writing 1e3 * "some data"|2,257|1129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:40:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6099.581532109238,"samples":3050},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2257.910568678202,"samples":1129}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|13,999,146|6999574|
|Using backtick (`)|14,037,473|7018737|
|Using array.join|5,865,078|2932540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":13999146.74003705,"samples":6999574},{"name":"Using backtick (`)","opsSec":14037473.77534284,"samples":7018737},{"name":"Using array.join","opsSec":5865078.733147088,"samples":2932540}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,296,237|7148119|
|(short string) (true) String#slice and strict comparison|12,266,352|6133177|
|(long string) (true) String#endsWith|13,797,098|6898550|
|(long string) (true) String#slice and strict comparison|12,752,873|6376437|
|(short string) (false) String#endsWith|14,264,283|7132142|
|(short string) (false) String#slice and strict comparison|12,762,692|6381347|
|(long string) (false) String#endsWith|13,570,017|6785009|
|(long string) (false) String#slice and strict comparison|12,763,013|6381507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14296237.085082332,"samples":7148119},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12266352.552546525,"samples":6133177},{"name":"(long string) (true) String#endsWith","opsSec":13797098.123480381,"samples":6898550},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12752873.719715236,"samples":6376437},{"name":"(short string) (false) String#endsWith","opsSec":14264283.999643391,"samples":7132142},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12762692.187474415,"samples":6381347},{"name":"(long string) (false) String#endsWith","opsSec":13570017.674368635,"samples":6785009},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12763013.43817686,"samples":6381507}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,051,188|4025595|
|Using indexof|8,197,164|4098583|
|Using RegExp.test|7,590,803|3795402|
|Using RegExp.text with cached regex pattern|7,523,245|3761623|
|Using new RegExp.test|3,303,451|1651726|
|Using new RegExp.test with cached regex pattern|3,678,067|1839034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8051188.212634382,"samples":4025595},{"name":"Using indexof","opsSec":8197164.180210536,"samples":4098583},{"name":"Using RegExp.test","opsSec":7590803.741899717,"samples":3795402},{"name":"Using RegExp.text with cached regex pattern","opsSec":7523245.172402517,"samples":3761623},{"name":"Using new RegExp.test","opsSec":3303451.365731739,"samples":1651726},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3678067.1981838625,"samples":1839034}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,832,463|6916232|
|(short string) (true) String#slice and strict comparison|12,960,677|6480339|
|(long string) (true) String#startsWith|12,963,944|6481973|
|(long string) (true) String#slice and strict comparison|13,102,267|6551134|
|(short string) (false) String#startsWith|14,287,717|7143859|
|(short string) (false) String#slice and strict comparison|13,410,857|6705429|
|(long string) (false) String#startsWith|14,210,376|7105189|
|(long string) (false) String#slice and strict comparison|13,223,485|6611743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:30:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13832463.004085677,"samples":6916232},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12960677.714815015,"samples":6480339},{"name":"(long string) (true) String#startsWith","opsSec":12963944.158906508,"samples":6481973},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13102267.86892637,"samples":6551134},{"name":"(short string) (false) String#startsWith","opsSec":14287717.88561048,"samples":7143859},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13410857.061422547,"samples":6705429},{"name":"(long string) (false) String#startsWith","opsSec":14210376.323067702,"samples":7105189},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13223485.10103824,"samples":6611743}]}-->

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
