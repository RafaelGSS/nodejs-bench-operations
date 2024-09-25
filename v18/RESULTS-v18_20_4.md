## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,084,133|7542069|
|Using dot notation|14,829,183|7414592|
|Using define property (writable)|2,843,328|1421665|
|Using define property initialized (writable)|3,627,291|1813646|
|Using define property (getter)|1,776,545|888273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15084133.324458163,"samples":7542069},{"name":"Using dot notation","opsSec":14829183.377337873,"samples":7414592},{"name":"Using define property (writable)","opsSec":2843328.5726163415,"samples":1421665},{"name":"Using define property initialized (writable)","opsSec":3627291.0062555242,"samples":1813646},{"name":"Using define property (getter)","opsSec":1776545.928948273,"samples":888273}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|29.045ms
new Array(length)|1,000,000|15.461ms
array.push|100,000,000|1,904.039ms
new Array(length)|100,000,000|4,338.591ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.468ms
new Array(length)|10,000|3.379ms
array.push|1,000,000|258.789ms
new Array(length)|1,000,000|4.87ms
array.push|100,000,000|2,332.183ms
new Array(length)|100,000,000|4,473.702ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|137|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:31:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":272.51970023989526,"samples":137},{"name":"Array.from","opsSec":21.628210499182504,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,388|2195|
|new Blob (1024)|534|268|
|text (128)|47,737|23869|
|text (1024)|29,674|14838|
|arrayBuffer (128)|50,162|25082|
|arrayBuffer (1024)|35,332|17667|
|slice (0, 64)|91,717|45859|
|slice (0, 512)|48,405|24371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4388.805490006513,"samples":2195},{"name":"new Blob (1024)","opsSec":534.869221212033,"samples":268},{"name":"text (128)","opsSec":47737.06635857147,"samples":23869},{"name":"text (1024)","opsSec":29674.127088056244,"samples":14838},{"name":"arrayBuffer (128)","opsSec":50162.48298641103,"samples":25082},{"name":"arrayBuffer (1024)","opsSec":35332.398525067234,"samples":17667},{"name":"slice (0, 64)","opsSec":91717.23471551748,"samples":45859},{"name":"slice (0, 512)","opsSec":48405.36864002685,"samples":24371}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,729|139865|
|[True conditional] Using constructor name|269,649|134825|
|[True conditional] Check if property is valid then instanceof |276,429|138215|
|[False conditional] Using instanceof only|11,350,843|5675422|
|[False conditional] Using constructor name|15,033,422|7516743|
|[False conditional] Check if property is valid then instanceof |15,138,404|7569203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279729.7521748769,"samples":139865},{"name":"[True conditional] Using constructor name","opsSec":269649.58203067345,"samples":134825},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":276429.8142205015,"samples":138215},{"name":"[False conditional] Using instanceof only","opsSec":11350843.904472472,"samples":5675422},{"name":"[False conditional] Using constructor name","opsSec":15033422.955042426,"samples":7516743},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15138404.302392144,"samples":7569203}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,192|3597|
|crypto.verify('RSA-SHA256')|7,166|3584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7192.32640305407,"samples":3597},{"name":"crypto.verify('RSA-SHA256')","opsSec":7166.623864859068,"samples":3584}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,650,834|825418|
|fromUnixToISOString(new Date())|1,830,227|915114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1650834.3823006705,"samples":825418},{"name":"fromUnixToISOString(new Date())","opsSec":1830227.5608954486,"samples":915114}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,260|8631|
|Intl.DateTimeFormat().format(new Date())|19,856|9929|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,059|11030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,465|10733|
|Reusing Intl.DateTimeFormat()|669,220|334611|
|Date.toLocaleDateString()|692,390|346196|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,350|10676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17260.76261131604,"samples":8631},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19856.771741085508,"samples":9929},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22059.210502106882,"samples":11030},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21465.72103180423,"samples":10733},{"name":"Reusing Intl.DateTimeFormat()","opsSec":669220.1690489129,"samples":334611},{"name":"Date.toLocaleDateString()","opsSec":692390.1455184206,"samples":346196},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21350.31255713024,"samples":10676}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|824,028|412015|
|Using brackets {}|827,673|413837|
|Using '' + |828,466|414234|
|Using date.toString()|894,218|447110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":824028.6353068643,"samples":412015},{"name":"Using brackets {}","opsSec":827673.0646409927,"samples":413837},{"name":"Using '' + ","opsSec":828466.7242448897,"samples":414234},{"name":"Using date.toString()","opsSec":894218.698045138,"samples":447110}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,600,844|1300423|
|Using delete property (proto: null)|7,875,765|3937883|
|Using delete property (cached proto: null)|2,536,225|1268113|
|Using undefined assignment|13,940,298|6970150|
|Using undefined assignment (proto: null)|8,589,785|4294893|
|Using undefined property (cached proto: null)|13,660,966|6830484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:16:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2600844.8141316897,"samples":1300423},{"name":"Using delete property (proto: null)","opsSec":7875765.191036314,"samples":3937883},{"name":"Using delete property (cached proto: null)","opsSec":2536225.818531218,"samples":1268113},{"name":"Using undefined assignment","opsSec":13940298.598702077,"samples":6970150},{"name":"Using undefined assignment (proto: null)","opsSec":8589785.376018839,"samples":4294893},{"name":"Using undefined property (cached proto: null)","opsSec":13660966.516958,"samples":6830484}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|271,434|135718|
|NodeError|268,981|134491|
|NodeError Range|267,818|133910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:25:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":271434.8713997171,"samples":135718},{"name":"NodeError","opsSec":268981.3108960729,"samples":134491},{"name":"NodeError Range","opsSec":267818.4708657335,"samples":133910}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,497,800|748901|
|Function returning explicitly undefined|1,445,322|722662|
|Function returning implicitly undefined|1,569,513|784757|
|Function returning string|1,474,992|737497|
|Function returning integer|1,567,544|783773|
|Function returning float|1,533,048|766525|
|Function returning functions|1,514,842|757422|
|Function returning arrow functions|1,528,758|764380|
|Function returning empty object|1,539,782|769892|
|Function returning empty array|1,564,051|782026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1497800.6423929248,"samples":748901},{"name":"Function returning explicitly undefined","opsSec":1445322.756247056,"samples":722662},{"name":"Function returning implicitly undefined","opsSec":1569513.0054875952,"samples":784757},{"name":"Function returning string","opsSec":1474992.55661315,"samples":737497},{"name":"Function returning integer","opsSec":1567544.2175627379,"samples":783773},{"name":"Function returning float","opsSec":1533048.3200689328,"samples":766525},{"name":"Function returning functions","opsSec":1514842.8604062526,"samples":757422},{"name":"Function returning arrow functions","opsSec":1528758.244039605,"samples":764380},{"name":"Function returning empty object","opsSec":1539782.3334086514,"samples":769892},{"name":"Function returning empty array","opsSec":1564051.0556803246,"samples":782026}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,414,616|6707309|
|using Array.includes (first item)|14,044,827|7022414|
|Using raw comparison|15,388,859|7694430|
|Using raw comparison (first item)|15,248,783|7624392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:40:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13414616.278193561,"samples":6707309},{"name":"using Array.includes (first item)","opsSec":14044827.33560103,"samples":7022414},{"name":"Using raw comparison","opsSec":15388859.936480608,"samples":7694430},{"name":"Using raw comparison (first item)","opsSec":15248783.492096255,"samples":7624392}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,771,082|6385542|
|Using Object.getOwnPropertyNames()|12,342,581|6171291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:50:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12771082.630263453,"samples":6385542},{"name":"Using Object.getOwnPropertyNames()","opsSec":12342581.73947902,"samples":6171291}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,560,644|4280323|
|Length = 10_000 - Array.at|8,600,756|4300379|
|Length = 1_000_000 - Array.at|8,563,489|4281745|
|Length = 100 - Array[length - 1]|15,133,383|7566692|
|Length = 10_000 - Array[length - 1]|15,215,981|7607991|
|Length = 1_000_000 - Array[length - 1]|14,952,804|7476403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:57:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8560644.771993563,"samples":4280323},{"name":"Length = 10_000 - Array.at","opsSec":8600756.607912388,"samples":4300379},{"name":"Length = 1_000_000 - Array.at","opsSec":8563489.188952642,"samples":4281745},{"name":"Length = 100 - Array[length - 1]","opsSec":15133383.050398529,"samples":7566692},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15215981.711336989,"samples":7607991},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14952804.191501135,"samples":7476403}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,697,149|7348575|
|~ (small)|15,285,317|7642659|
|Math.floor (long)|15,299,511|7649756|
|~ (long)|15,008,973|7504488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:10:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14697149.860494072,"samples":7348575},{"name":"~ (small)","opsSec":15285317.545600884,"samples":7642659},{"name":"Math.floor (long)","opsSec":15299511.702770436,"samples":7649756},{"name":"~ (long)","opsSec":15008973.576907694,"samples":7504488}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,121,536|6060769|
|Object.create({})|1,223,103|611552|
|Cached Empty.prototype|14,632,609|7316305|
|Empty.prototype|1,327,053|663529|
|Empty class|884,492|442686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12121536.275415404,"samples":6060769},{"name":"Object.create({})","opsSec":1223103.1314540415,"samples":611552},{"name":"Cached Empty.prototype","opsSec":14632609.604170417,"samples":7316305},{"name":"Empty.prototype","opsSec":1327053.3730836513,"samples":663529},{"name":"Empty class","opsSec":884492.5169754109,"samples":442686}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,009,721|7504861|
|Using optional chain (obj.field?.field2) (undefined)|15,443,665|7721833|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,211,068|7605535|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,346,588|7673295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:30:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15009721.194144825,"samples":7504861},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15443665.109575134,"samples":7721833},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15211068.374659292,"samples":7605535},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15346588.387620479,"samples":7673295}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,460,841|7230421|
|Using parseInt(x, 10) - big number (10 len)|7,784,290|3892146|
|Using + - small number (2 len)|14,884,168|7442085|
|Using + - big number (10 len)|14,755,956|7377979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:41:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14460841.427137569,"samples":7230421},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7784290.866758112,"samples":3892146},{"name":"Using + - small number (2 len)","opsSec":14884168.415466841,"samples":7442085},{"name":"Using + - big number (10 len)","opsSec":14755956.95138802,"samples":7377979}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|696,602|348302|
|Using ? operator to avoid rejection|705,520|352761|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:51:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":696602.4204031397,"samples":348302},{"name":"Using ? operator to avoid rejection","opsSec":705520.4292258976,"samples":352761}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,798,796|6899399|
|Raw usage underscore usage|14,246,621|7123311|
|Manipulating private properties using #|13,294,540|6647271|
|Manipulating private properties using underscore(_)|13,384,006|6692004|
|Manipulating private properties using Symbol|12,896,591|6448296|
|Manipulating private properties using PrivateSymbol|10,523,993|5261997|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:58:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":13798796.694427913,"samples":6899399},{"name":"Raw usage underscore usage","opsSec":14246621.405584635,"samples":7123311},{"name":"Manipulating private properties using #","opsSec":13294540.399863744,"samples":6647271},{"name":"Manipulating private properties using underscore(_)","opsSec":13384006.242708668,"samples":6692004},{"name":"Manipulating private properties using Symbol","opsSec":12896591.003528826,"samples":6448296},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10523993.487121094,"samples":5261997}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,824,218|1412110|
|Adding property in the object creation - small object|2,833,602|1416802|
|Adding property after the function creation - small class|186,731|93367|
|Adding property in the function creation - small class|191,877|95939|
|Adding property after the class creation - small class|160,975|80488|
|Adding property in the class creation - small class|157,104|78553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:10:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2824218.8211285523,"samples":1412110},{"name":"Adding property in the object creation - small object","opsSec":2833602.1054952852,"samples":1416802},{"name":"Adding property after the function creation - small class","opsSec":186731.26689010966,"samples":93367},{"name":"Adding property in the function creation - small class","opsSec":191877.28241799565,"samples":95939},{"name":"Adding property after the class creation - small class","opsSec":160975.64319700006,"samples":80488},{"name":"Adding property in the class creation - small class","opsSec":157104.788154009,"samples":78553}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,665,104|7332553|
|Getter|12,416,532|6208267|
|Method|14,264,230|7132117|
|DefineProperty (getter)|14,533,199|7266600|
|DefineProperty (getter & enumerable=false)|12,421,318|6210660|
|DefineProperty (getter & configurable=false)|13,711,581|6855791|
|DefineProperty (getter & enumerable=false & configurable=false)|12,329,991|6164996|
|DefineProperty (writable)|13,837,469|6918735|
|DefineProperty (writable & enumerable=false)|14,055,065|7027533|
|DefineProperty (writable & enumerable=false & configurable=false)|13,740,445|6870223|
|DefineProperties (getter)|12,130,212|6065107|
|DefineProperties (getter & enumerable=false)|12,371,127|6185564|
|DefineProperties (getter & enumerable=false & configurable=false)|12,452,349|6226175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:21:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14665104.493201109,"samples":7332553},{"name":"Getter","opsSec":12416532.507992653,"samples":6208267},{"name":"Method","opsSec":14264230.90314713,"samples":7132117},{"name":"DefineProperty (getter)","opsSec":14533199.320429869,"samples":7266600},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12421318.508990835,"samples":6210660},{"name":"DefineProperty (getter & configurable=false)","opsSec":13711581.315992799,"samples":6855791},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12329991.743097859,"samples":6164996},{"name":"DefineProperty (writable)","opsSec":13837469.426676575,"samples":6918735},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14055065.634166272,"samples":7027533},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13740445.925676258,"samples":6870223},{"name":"DefineProperties (getter)","opsSec":12130212.936713075,"samples":6065107},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12371127.189484812,"samples":6185564},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12452349.656956175,"samples":6226175}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,559,270|7279636|
|Setter|5,568,886|2784444|
|Method|14,390,458|7195230|
|DefineProperty (setter)|14,904,136|7452069|
|DefineProperty (setter & enumerable=false)|5,689,759|2844880|
|DefineProperty (setter & configurable=false)|5,673,674|2836838|
|DefineProperty (setter & enumerable=false & configurable=false)|5,651,142|2825572|
|DefineProperty (writable)|14,717,288|7358645|
|DefineProperty (writable & enumerable=false)|14,317,486|7158744|
|DefineProperty (writable & enumerable=false & configurable=false)|14,402,861|7201431|
|DefineProperties (setter)|14,230,525|7115263|
|DefineProperties (setter & enumerable=false)|5,637,517|2818759|
|DefineProperties (setter & enumerable=false & configurable=false)|5,655,134|2827568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:41:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14559270.548278825,"samples":7279636},{"name":"Setter","opsSec":5568886.6818584725,"samples":2784444},{"name":"Method","opsSec":14390458.554335924,"samples":7195230},{"name":"DefineProperty (setter)","opsSec":14904136.336109675,"samples":7452069},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5689759.295020871,"samples":2844880},{"name":"DefineProperty (setter & configurable=false)","opsSec":5673674.896548356,"samples":2836838},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5651142.91665647,"samples":2825572},{"name":"DefineProperty (writable)","opsSec":14717288.410698934,"samples":7358645},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14317486.143132914,"samples":7158744},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14402861.98138177,"samples":7201431},{"name":"DefineProperties (setter)","opsSec":14230525.131172612,"samples":7115263},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5637517.125775227,"samples":2818759},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5655134.098912459,"samples":2827568}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,587,910|1293956|
|Using replaceAll()|2,352,344|1176173|
|Using replaceAll(//g)|2,324,996|1162499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:01:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2587910.991455389,"samples":1293956},{"name":"Using replaceAll()","opsSec":2352344.174878113,"samples":1176173},{"name":"Using replaceAll(//g)","opsSec":2324996.4110176875,"samples":1162499}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,818,913|4409457|
|{ ...object, __proto__: null }|8,924,831|4462416|
|{ ...object, newProp: true }|553,958|276980|
|structuredClone|247,124|123563|
|JSON.parse + JSON.stringify|196,426|98214|
|loop + object.keys starting with {}|1,120,305|560153|
|loop + object.keys starting with { __proto__: null }|666,195|333098|
|loop + object.keys starting with { randomProp: true }|485,881|242941|
|object.keys + reduce(FN, {})|1,095,050|547526|
|object.keys + reduce(FN, { __proto__: null })|620,419|310210|
|object.keys + reduce(FN, { newProp: true })|479,589|239795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:08:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8818913.86333146,"samples":4409457},{"name":"{ ...object, __proto__: null }","opsSec":8924831.124790525,"samples":4462416},{"name":"{ ...object, newProp: true }","opsSec":553958.448658958,"samples":276980},{"name":"structuredClone","opsSec":247124.91426329545,"samples":123563},{"name":"JSON.parse + JSON.stringify","opsSec":196426.2978740946,"samples":98214},{"name":"loop + object.keys starting with {}","opsSec":1120305.2384182643,"samples":560153},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":666195.222667258,"samples":333098},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":485881.2817346152,"samples":242941},{"name":"object.keys + reduce(FN, {})","opsSec":1095050.2460215916,"samples":547526},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":620419.5149256061,"samples":310210},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":479589.5819956938,"samples":239795}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|255,786|127894|
|Sort using first char|1,029,146|514574|
|Sort using localeCompare|924,813|462407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:17:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":255786.94191469692,"samples":127894},{"name":"Sort using first char","opsSec":1029146.7931320512,"samples":514574},{"name":"Sort using localeCompare","opsSec":924813.358765924,"samples":462407}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|11,791,076|5895539|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,157|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,047|3024|
|{ ...bigObject, ...anotherBigObject }|1,087|544|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,248,364|3124183|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,532,227|4766114|
|{ ...smallObject, ...anotherSmallObject }|8,093,122|4046562|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.833417534062,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":11791076.359218739,"samples":5895539},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2157.2637216174967,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6047.231251637141,"samples":3024},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1087.621394698644,"samples":544},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6248364.720604485,"samples":3124183},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9532227.737259176,"samples":4766114},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8093122.874348269,"samples":4046562}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,335|1168|
|streams.web.Readable reading 1e3 * "some data"|613|307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:32:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2335.546245293549,"samples":1168},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":613.6161977979854,"samples":307}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,906|2454|
|streams.web.WritableStream writing 1e3 * "some data"|2,080|1043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:37:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4906.496620295064,"samples":2454},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2080.73296168174,"samples":1043}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,828,167|7414084|
|Using backtick (`)|15,109,329|7554665|
|Using array.join|5,738,324|2869163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:44:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14828167.513894787,"samples":7414084},{"name":"Using backtick (`)","opsSec":15109329.030912973,"samples":7554665},{"name":"Using array.join","opsSec":5738324.694040879,"samples":2869163}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,045,954|6022978|
|(short string) (true) String#slice and strict comparison|12,081,236|6040619|
|(long string) (true) String#endsWith|11,739,042|5869522|
|(long string) (true) String#slice and strict comparison|11,837,242|5918622|
|(short string) (false) String#endsWith|12,079,039|6039520|
|(short string) (false) String#slice and strict comparison|12,483,546|6241774|
|(long string) (false) String#endsWith|12,141,296|6070649|
|(long string) (false) String#slice and strict comparison|12,163,741|6081871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:53:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12045954.279460024,"samples":6022978},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12081236.906261401,"samples":6040619},{"name":"(long string) (true) String#endsWith","opsSec":11739042.958625533,"samples":5869522},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11837242.952251328,"samples":5918622},{"name":"(short string) (false) String#endsWith","opsSec":12079039.31265665,"samples":6039520},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12483546.742509248,"samples":6241774},{"name":"(long string) (false) String#endsWith","opsSec":12141296.442781363,"samples":6070649},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12163741.17751526,"samples":6081871}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,313,526|4156764|
|Using indexof|8,292,643|4146322|
|Using RegExp.test|7,631,183|3815592|
|Using RegExp.text with cached regex pattern|7,740,790|3870396|
|Using new RegExp.test|3,177,946|1588974|
|Using new RegExp.test with cached regex pattern|3,509,829|1754915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:09:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8313526.326674746,"samples":4156764},{"name":"Using indexof","opsSec":8292643.604205229,"samples":4146322},{"name":"Using RegExp.test","opsSec":7631183.757505963,"samples":3815592},{"name":"Using RegExp.text with cached regex pattern","opsSec":7740790.75673483,"samples":3870396},{"name":"Using new RegExp.test","opsSec":3177946.5851244917,"samples":1588974},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3509829.612740675,"samples":1754915}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,014,742|7007372|
|(short string) (true) String#slice and strict comparison|12,682,673|6341337|
|(long string) (true) String#startsWith|13,198,303|6599152|
|(long string) (true) String#slice and strict comparison|12,197,428|6098715|
|(short string) (false) String#startsWith|14,558,327|7279164|
|(short string) (false) String#slice and strict comparison|12,812,689|6406346|
|(long string) (false) String#startsWith|14,612,002|7306002|
|(long string) (false) String#slice and strict comparison|12,619,271|6309636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:18:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14014742.460148223,"samples":7007372},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12682673.154474143,"samples":6341337},{"name":"(long string) (true) String#startsWith","opsSec":13198303.786416322,"samples":6599152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12197428.489336269,"samples":6098715},{"name":"(short string) (false) String#startsWith","opsSec":14558327.016520746,"samples":7279164},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12812689.752252273,"samples":6406346},{"name":"(long string) (false) String#startsWith","opsSec":14612002.470514845,"samples":7306002},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12619271.543622553,"samples":6309636}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,236,132|7118067|
|Using this|14,604,368|7302185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:34:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14236132.42065564,"samples":7118067},{"name":"Using this","opsSec":14604368.697423207,"samples":7302185}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,665,452|2832727|
|Date.now()|8,190,404|4095204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5665452.680866795,"samples":2832727},{"name":"Date.now()","opsSec":8190404.488477023,"samples":4095204}]}-->
