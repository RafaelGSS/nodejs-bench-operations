## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,104,624|8552313|
|Using dot notation|17,037,835|8518918|
|Using define property (writable)|3,361,117|1680559|
|Using define property initialized (writable)|4,114,837|2057419|
|Using define property (getter)|2,008,810|1004406|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17104624.08469563,"samples":8552313},{"name":"Using dot notation","opsSec":17037835.38589392,"samples":8518918},{"name":"Using define property (writable)","opsSec":3361117.5563428975,"samples":1680559},{"name":"Using define property initialized (writable)","opsSec":4114837.473343738,"samples":2057419},{"name":"Using define property (getter)","opsSec":2008810.8067767632,"samples":1004406}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.375ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|26.537ms
new Array(length)|1,000,000|16.624ms
array.push|100,000,000|2,208.518ms
new Array(length)|100,000,000|4,388.353ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.018ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.472ms
new Array(length)|10,000|3.123ms
array.push|1,000,000|258.661ms
new Array(length)|1,000,000|4.594ms
array.push|100,000,000|2,637.765ms
new Array(length)|100,000,000|4,833.128ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|220|111|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:48:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":220.77052145980863,"samples":111},{"name":"Array.from","opsSec":22.361286441450364,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,904|2453|
|new Blob (1024)|691|346|
|text (128)|51,002|25502|
|text (1024)|29,167|14585|
|arrayBuffer (128)|43,464|21733|
|arrayBuffer (1024)|25,839|12921|
|slice (0, 64)|96,345|49198|
|slice (0, 512)|52,799|26401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":4904.9173179854315,"samples":2453},{"name":"new Blob (1024)","opsSec":691.0715288142579,"samples":346},{"name":"text (128)","opsSec":51002.100681843076,"samples":25502},{"name":"text (1024)","opsSec":29167.913619462623,"samples":14585},{"name":"arrayBuffer (128)","opsSec":43464.69162588855,"samples":21733},{"name":"arrayBuffer (1024)","opsSec":25839.470883853697,"samples":12921},{"name":"slice (0, 64)","opsSec":96345.58425809864,"samples":49198},{"name":"slice (0, 512)","opsSec":52799.85759381426,"samples":26401}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|303,284|151643|
|[True conditional] Using constructor name|302,530|151266|
|[True conditional] Check if property is valid then instanceof |302,992|151497|
|[False conditional] Using instanceof only|13,191,951|6595976|
|[False conditional] Using constructor name|17,003,027|8501514|
|[False conditional] Check if property is valid then instanceof |16,992,635|8496318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:57:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":303284.8426601823,"samples":151643},{"name":"[True conditional] Using constructor name","opsSec":302530.17573689774,"samples":151266},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":302992.21056898095,"samples":151497},{"name":"[False conditional] Using instanceof only","opsSec":13191951.050934022,"samples":6595976},{"name":"[False conditional] Using constructor name","opsSec":17003027.969026145,"samples":8501514},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16992635.24022758,"samples":8496318}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,893|3448|
|crypto.verify('RSA-SHA256')|6,891|3446|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:03:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6893.581455869389,"samples":3448},{"name":"crypto.verify('RSA-SHA256')","opsSec":6891.792984360264,"samples":3446}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,083,740|1041871|
|fromUnixToISOString(new Date())|1,903,771|951886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2083740.6827718546,"samples":1041871},{"name":"fromUnixToISOString(new Date())","opsSec":1903771.7638161436,"samples":951886}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,497|8250|
|Intl.DateTimeFormat().format(new Date())|15,333|7667|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,890|7768|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,179|10590|
|Reusing Intl.DateTimeFormat()|721,739|360870|
|Date.toLocaleDateString()|722,968|361485|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,989|10495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16497.848812404158,"samples":8250},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15333.15636956742,"samples":7667},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11890.994372922369,"samples":7768},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21179.969373639575,"samples":10590},{"name":"Reusing Intl.DateTimeFormat()","opsSec":721739.7777528687,"samples":360870},{"name":"Date.toLocaleDateString()","opsSec":722968.6380729239,"samples":361485},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20989.97573489503,"samples":10495}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,020,529|510265|
|Using brackets {}|1,087,698|543850|
|Using '' + |1,078,289|539145|
|Using date.toString()|1,164,535|582273|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:15:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1020529.0836296631,"samples":510265},{"name":"Using brackets {}","opsSec":1087698.8511553684,"samples":543850},{"name":"Using '' + ","opsSec":1078289.0879025848,"samples":539145},{"name":"Using date.toString()","opsSec":1164535.9685885499,"samples":582273}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,914,415|1457208|
|Using delete property (proto: null)|8,987,750|4493876|
|Using delete property (cached proto: null)|2,998,456|1499229|
|Using undefined assignment|17,316,277|8658139|
|Using undefined assignment (proto: null)|9,096,756|4548379|
|Using undefined property (cached proto: null)|17,090,493|8545247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:20:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2914415.1804615683,"samples":1457208},{"name":"Using delete property (proto: null)","opsSec":8987750.826858351,"samples":4493876},{"name":"Using delete property (cached proto: null)","opsSec":2998456.4020947083,"samples":1499229},{"name":"Using undefined assignment","opsSec":17316277.199034438,"samples":8658139},{"name":"Using undefined assignment (proto: null)","opsSec":9096756.479307255,"samples":4548379},{"name":"Using undefined property (cached proto: null)","opsSec":17090493.222275168,"samples":8545247}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,027|150014|
|NodeError|294,704|147353|
|NodeError Range|302,921|151461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:26:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":300027.903390978,"samples":150014},{"name":"NodeError","opsSec":294704.63018817647,"samples":147353},{"name":"NodeError Range","opsSec":302921.53409988864,"samples":151461}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,563,611|781806|
|Function returning explicitly undefined|1,528,509|764255|
|Function returning implicitly undefined|1,567,766|783884|
|Function returning string|1,497,692|748847|
|Function returning integer|1,567,759|783880|
|Function returning float|1,510,473|755237|
|Function returning functions|1,508,694|754348|
|Function returning arrow functions|1,450,787|725394|
|Function returning empty object|1,544,395|772198|
|Function returning empty array|1,538,190|769096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:30:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1563611.7493920843,"samples":781806},{"name":"Function returning explicitly undefined","opsSec":1528509.376648133,"samples":764255},{"name":"Function returning implicitly undefined","opsSec":1567766.1285409497,"samples":783884},{"name":"Function returning string","opsSec":1497692.7330169235,"samples":748847},{"name":"Function returning integer","opsSec":1567759.7117767716,"samples":783880},{"name":"Function returning float","opsSec":1510473.8822320793,"samples":755237},{"name":"Function returning functions","opsSec":1508694.96474987,"samples":754348},{"name":"Function returning arrow functions","opsSec":1450787.4745724571,"samples":725394},{"name":"Function returning empty object","opsSec":1544395.7522748774,"samples":772198},{"name":"Function returning empty array","opsSec":1538190.8306895846,"samples":769096}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,804,348|8402175|
|using Array.includes (first item)|16,997,613|8498807|
|Using raw comparison|16,227,346|8113674|
|Using raw comparison (first item)|16,050,343|8025172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:37:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16804348.183989756,"samples":8402175},{"name":"using Array.includes (first item)","opsSec":16997613.159239016,"samples":8498807},{"name":"Using raw comparison","opsSec":16227346.744995026,"samples":8113674},{"name":"Using raw comparison (first item)","opsSec":16050343.011769678,"samples":8025172}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,352,426|7176214|
|Using Object.getOwnPropertyNames()|14,778,682|7389342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:42:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14352426.519272773,"samples":7176214},{"name":"Using Object.getOwnPropertyNames()","opsSec":14778682.577712156,"samples":7389342}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|9,788,863|4894432|
|Length = 10_000 - Array.at|9,015,006|4507504|
|Length = 1_000_000 - Array.at|9,217,569|4608785|
|Length = 100 - Array[length - 1]|16,890,436|8445219|
|Length = 10_000 - Array[length - 1]|16,903,863|8451932|
|Length = 1_000_000 - Array[length - 1]|16,449,296|8224649|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:48:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":9788863.890673853,"samples":4894432},{"name":"Length = 10_000 - Array.at","opsSec":9015006.731231516,"samples":4507504},{"name":"Length = 1_000_000 - Array.at","opsSec":9217569.447585462,"samples":4608785},{"name":"Length = 100 - Array[length - 1]","opsSec":16890436.830598712,"samples":8445219},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16903863.998425707,"samples":8451932},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16449296.059282336,"samples":8224649}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,217,762|6608882|
|Object.create({})|1,453,169|726585|
|Cached Empty.prototype|16,085,565|8042783|
|Empty.prototype|1,556,309|778155|
|Empty class|979,061|489531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:55:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13217762.570021082,"samples":6608882},{"name":"Object.create({})","opsSec":1453169.0817173638,"samples":726585},{"name":"Cached Empty.prototype","opsSec":16085565.735198485,"samples":8042783},{"name":"Empty.prototype","opsSec":1556309.8355741608,"samples":778155},{"name":"Empty class","opsSec":979061.5973192706,"samples":489531}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|17,103,107|8551554|
|Using optional chain (obj.field?.field2) (undefined)|16,996,997|8498499|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,968,685|8484343|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,997,555|8498778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:01:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":17103107.154578414,"samples":8551554},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16996997.728647493,"samples":8498499},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16968685.158536445,"samples":8484343},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16997555.792814244,"samples":8498778}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,566,918|8283460|
|Using parseInt(x, 10) - big number (10 len)|8,978,011|4489006|
|Using + - small number (2 len)|16,894,930|8447466|
|Using + - big number (10 len)|17,071,826|8535914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:07:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16566918.176305931,"samples":8283460},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8978011.13001051,"samples":4489006},{"name":"Using + - small number (2 len)","opsSec":16894930.52276998,"samples":8447466},{"name":"Using + - big number (10 len)","opsSec":17071826.49541012,"samples":8535914}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|779,151|389576|
|Using ? operator to avoid rejection|777,611|388806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:14:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":779151.2151015796,"samples":389576},{"name":"Using ? operator to avoid rejection","opsSec":777611.1868779269,"samples":388806}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,203,906|8101954|
|Raw usage underscore usage|16,049,415|8024708|
|Manipulating private properties using #|14,479,194|7239734|
|Manipulating private properties using underscore(_)|14,034,063|7017032|
|Manipulating private properties using Symbol|14,836,033|7418017|
|Manipulating private properties using PrivateSymbol|10,613,013|5306507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:31:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16203906.810099768,"samples":8101954},{"name":"Raw usage underscore usage","opsSec":16049415.82398197,"samples":8024708},{"name":"Manipulating private properties using #","opsSec":14479194.93817148,"samples":7239734},{"name":"Manipulating private properties using underscore(_)","opsSec":14034063.76578129,"samples":7017032},{"name":"Manipulating private properties using Symbol","opsSec":14836033.738248229,"samples":7418017},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10613013.519235475,"samples":5306507}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,912,868|1456435|
|Adding property in the object creation - small object|2,906,996|1453499|
|Adding property after the function creation - small class|211,279|105640|
|Adding property in the function creation - small class|219,056|109530|
|Adding property after the class creation - small class|180,662|90332|
|Adding property in the class creation - small class|180,217|90109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:40:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2912868.630481496,"samples":1456435},{"name":"Adding property in the object creation - small object","opsSec":2906996.179966934,"samples":1453499},{"name":"Adding property after the function creation - small class","opsSec":211279.96957466562,"samples":105640},{"name":"Adding property in the function creation - small class","opsSec":219056.88192988277,"samples":109530},{"name":"Adding property after the class creation - small class","opsSec":180662.91644565435,"samples":90332},{"name":"Adding property in the class creation - small class","opsSec":180217.81197520607,"samples":90109}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,341,100|8170551|
|Getter|14,159,022|7079512|
|Method|16,569,268|8284635|
|DefineProperty (getter)|16,461,087|8230544|
|DefineProperty (getter & enumerable=false)|13,861,744|6930873|
|DefineProperty (getter & configurable=false)|16,690,327|8345164|
|DefineProperty (getter & enumerable=false & configurable=false)|14,012,608|7006305|
|DefineProperty (writable)|16,396,668|8198335|
|DefineProperty (writable & enumerable=false)|17,157,603|8578802|
|DefineProperty (writable & enumerable=false & configurable=false)|17,201,763|8600882|
|DefineProperties (getter)|13,763,595|6881798|
|DefineProperties (getter & enumerable=false)|13,766,879|6883440|
|DefineProperties (getter & enumerable=false & configurable=false)|14,051,472|7025737|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16341100.433799177,"samples":8170551},{"name":"Getter","opsSec":14159022.852236804,"samples":7079512},{"name":"Method","opsSec":16569268.593649955,"samples":8284635},{"name":"DefineProperty (getter)","opsSec":16461087.379908608,"samples":8230544},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13861744.598723479,"samples":6930873},{"name":"DefineProperty (getter & configurable=false)","opsSec":16690327.570237307,"samples":8345164},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14012608.175887093,"samples":7006305},{"name":"DefineProperty (writable)","opsSec":16396668.631755348,"samples":8198335},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17157603.198224492,"samples":8578802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17201763.52425848,"samples":8600882},{"name":"DefineProperties (getter)","opsSec":13763595.763732221,"samples":6881798},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13766879.599561855,"samples":6883440},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14051472.720249515,"samples":7025737}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,839,349|8419675|
|Setter|6,131,888|3065945|
|Method|16,209,950|8104976|
|DefineProperty (setter)|16,014,376|8007189|
|DefineProperty (setter & enumerable=false)|6,160,452|3080227|
|DefineProperty (setter & configurable=false)|6,245,057|3122530|
|DefineProperty (setter & enumerable=false & configurable=false)|5,896,263|2948132|
|DefineProperty (writable)|15,535,315|7767658|
|DefineProperty (writable & enumerable=false)|15,533,474|7766738|
|DefineProperty (writable & enumerable=false & configurable=false)|15,571,324|7785663|
|DefineProperties (setter)|16,767,062|8383532|
|DefineProperties (setter & enumerable=false)|6,242,392|3121197|
|DefineProperties (setter & enumerable=false & configurable=false)|6,165,505|3082753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:07:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16839349.735022288,"samples":8419675},{"name":"Setter","opsSec":6131888.684239431,"samples":3065945},{"name":"Method","opsSec":16209950.941057548,"samples":8104976},{"name":"DefineProperty (setter)","opsSec":16014376.80874501,"samples":8007189},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6160452.105291553,"samples":3080227},{"name":"DefineProperty (setter & configurable=false)","opsSec":6245057.784460548,"samples":3122530},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5896263.350530227,"samples":2948132},{"name":"DefineProperty (writable)","opsSec":15535315.059207434,"samples":7767658},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15533474.726006674,"samples":7766738},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15571324.826852169,"samples":7785663},{"name":"DefineProperties (setter)","opsSec":16767062.608842423,"samples":8383532},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6242392.508721043,"samples":3121197},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6165505.223855315,"samples":3082753}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,304,558|5152280|
|{ ...object, __proto__: null }|10,614,453|5307227|
|{ ...object, newProp: true }|602,119|301550|
|structuredClone|269,704|134853|
|JSON.parse + JSON.stringify|187,642|93822|
|loop + object.keys starting with {}|1,169,998|585000|
|loop + object.keys starting with { __proto__: null }|739,087|369544|
|loop + object.keys starting with { randomProp: true }|552,038|276020|
|object.keys + reduce(FN, {})|1,197,894|598948|
|object.keys + reduce(FN, { __proto__: null })|746,665|373333|
|object.keys + reduce(FN, { newProp: true })|557,191|278597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:23:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10304558.270414108,"samples":5152280},{"name":"{ ...object, __proto__: null }","opsSec":10614453.868404483,"samples":5307227},{"name":"{ ...object, newProp: true }","opsSec":602119.2481217523,"samples":301550},{"name":"structuredClone","opsSec":269704.5322295063,"samples":134853},{"name":"JSON.parse + JSON.stringify","opsSec":187642.47391603704,"samples":93822},{"name":"loop + object.keys starting with {}","opsSec":1169998.3781884739,"samples":585000},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":739087.2133890819,"samples":369544},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":552038.7025266816,"samples":276020},{"name":"object.keys + reduce(FN, {})","opsSec":1197894.8861584528,"samples":598948},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":746665.7365319036,"samples":373333},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":557191.896799538,"samples":278597}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|276,187|138094|
|Sort using first char|1,201,791|600896|
|Sort using localeCompare|1,152,474|576238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:31:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":276187.9437655201,"samples":138094},{"name":"Sort using first char","opsSec":1201791.1438503414,"samples":600896},{"name":"Sort using localeCompare","opsSec":1152474.9789493033,"samples":576238}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,186|1094|
|{...smallObject} - Total keys: 2|13,567,651|6783826|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,435|1218|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,504|3253|
|{ ...bigObject, ...anotherBigObject }|1,299|650|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,552,010|3276006|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,787,125|5393563|
|{ ...smallObject, ...anotherSmallObject }|9,372,528|4686265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:39:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2186.315096659777,"samples":1094},{"name":"{...smallObject} - Total keys: 2","opsSec":13567651.165426731,"samples":6783826},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2435.5788693446502,"samples":1218},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.608027926244,"samples":3253},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1299.2806831148512,"samples":650},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6552010.222306338,"samples":3276006},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10787125.91770076,"samples":5393563},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9372528.239147127,"samples":4686265}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,870,620|8435311|
|Using backtick (`)|17,002,751|8501376|
|Using array.join|6,090,271|3045136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:58:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16870620.14171159,"samples":8435311},{"name":"Using backtick (`)","opsSec":17002751.083847582,"samples":8501376},{"name":"Using array.join","opsSec":6090271.63989559,"samples":3045136}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|13,486,829|6743415|
|(short string) (true) String#slice and strict comparison|17,310,203|8655102|
|(long string) (true) String#endsWith|13,569,254|6784628|
|(long string) (true) String#slice and strict comparison|15,993,587|7996794|
|(short string) (false) String#endsWith|14,140,092|7070047|
|(short string) (false) String#slice and strict comparison|16,148,292|8074147|
|(long string) (false) String#endsWith|13,976,541|6988271|
|(long string) (false) String#slice and strict comparison|16,272,510|8136256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":13486829.52410441,"samples":6743415},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17310203.966983408,"samples":8655102},{"name":"(long string) (true) String#endsWith","opsSec":13569254.194779433,"samples":6784628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15993587.336508704,"samples":7996794},{"name":"(short string) (false) String#endsWith","opsSec":14140092.05815386,"samples":7070047},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16148292.744882718,"samples":8074147},{"name":"(long string) (false) String#endsWith","opsSec":13976541.520153528,"samples":6988271},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16272510.060165636,"samples":8136256}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,260,312|8630157|
|Using indexof|17,233,824|8616913|
|Using RegExp.test|8,176,747|4088374|
|Using RegExp.text with cached regex pattern|8,633,317|4316659|
|Using new RegExp.test|3,036,810|1518406|
|Using new RegExp.test with cached regex pattern|3,186,542|1593272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:19:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17260312.91359267,"samples":8630157},{"name":"Using indexof","opsSec":17233824.676945794,"samples":8616913},{"name":"Using RegExp.test","opsSec":8176747.672485922,"samples":4088374},{"name":"Using RegExp.text with cached regex pattern","opsSec":8633317.386613708,"samples":4316659},{"name":"Using new RegExp.test","opsSec":3036810.0581463394,"samples":1518406},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3186542.1477761846,"samples":1593272}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,112,195|7556098|
|(short string) (true) String#slice and strict comparison|17,075,396|8537699|
|(long string) (true) String#startsWith|14,435,171|7217586|
|(long string) (true) String#slice and strict comparison|15,901,506|7950754|
|(short string) (false) String#startsWith|16,003,285|8001643|
|(short string) (false) String#slice and strict comparison|16,599,503|8299752|
|(long string) (false) String#startsWith|15,717,258|7858630|
|(long string) (false) String#slice and strict comparison|16,571,501|8285751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15112195.128067201,"samples":7556098},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17075396.59954442,"samples":8537699},{"name":"(long string) (true) String#startsWith","opsSec":14435171.717787724,"samples":7217586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15901506.240876462,"samples":7950754},{"name":"(short string) (false) String#startsWith","opsSec":16003285.229272934,"samples":8001643},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16599503.390524978,"samples":8299752},{"name":"(long string) (false) String#startsWith","opsSec":15717258.426139703,"samples":7858630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16571501.352043575,"samples":8285751}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,899,062|7949655|
|Using this|15,409,177|7704589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:37:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15899062.744659254,"samples":7949655},{"name":"Using this","opsSec":15409177.49301088,"samples":7704589}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,388,841|3194421|
|Date.now()|8,953,626|4476814|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6388841.451641339,"samples":3194421},{"name":"Date.now()","opsSec":8953626.586821364,"samples":4476814}]}-->
