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
|Raw usage private field|15,573,299|7786650|
|Raw usage underscore usage|15,588,625|7794313|
|Manipulating private properties using #|14,817,956|7409922|
|Manipulating private properties using underscore(_)|14,195,005|7097503|
|Manipulating private properties using Symbol|14,631,885|7315943|
|Manipulating private properties using PrivateSymbol|11,406,656|5703329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:18:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15573299.556561876,"samples":7786650},{"name":"Raw usage underscore usage","opsSec":15588625.118058199,"samples":7794313},{"name":"Manipulating private properties using #","opsSec":14817956.68438703,"samples":7409922},{"name":"Manipulating private properties using underscore(_)","opsSec":14195005.253406443,"samples":7097503},{"name":"Manipulating private properties using Symbol","opsSec":14631885.435460428,"samples":7315943},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11406656.739399469,"samples":5703329}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,011,703|1505852|
|Adding property in the object creation - small object|2,964,399|1482200|
|Adding property after the function creation - small class|208,688|104345|
|Adding property in the function creation - small class|213,631|106817|
|Adding property after the class creation - small class|192,295|96148|
|Adding property in the class creation - small class|184,646|92324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:26:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3011703.3430888564,"samples":1505852},{"name":"Adding property in the object creation - small object","opsSec":2964399.023500891,"samples":1482200},{"name":"Adding property after the function creation - small class","opsSec":208688.48828464694,"samples":104345},{"name":"Adding property in the function creation - small class","opsSec":213631.77867337572,"samples":106817},{"name":"Adding property after the class creation - small class","opsSec":192295.2643195483,"samples":96148},{"name":"Adding property in the class creation - small class","opsSec":184646.83526898813,"samples":92324}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,094,899|8547450|
|Getter|13,870,455|6935228|
|Method|16,906,133|8453067|
|DefineProperty (getter)|17,066,833|8533417|
|DefineProperty (getter & enumerable=false)|14,113,784|7056893|
|DefineProperty (getter & configurable=false)|16,522,841|8261421|
|DefineProperty (getter & enumerable=false & configurable=false)|14,068,101|7034051|
|DefineProperty (writable)|16,707,842|8353922|
|DefineProperty (writable & enumerable=false)|16,973,288|8486645|
|DefineProperty (writable & enumerable=false & configurable=false)|16,302,370|8151186|
|DefineProperties (getter)|13,948,555|6974278|
|DefineProperties (getter & enumerable=false)|13,690,806|6845404|
|DefineProperties (getter & enumerable=false & configurable=false)|13,816,882|6908442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:33:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":17094899.3850088,"samples":8547450},{"name":"Getter","opsSec":13870455.073453005,"samples":6935228},{"name":"Method","opsSec":16906133.62690497,"samples":8453067},{"name":"DefineProperty (getter)","opsSec":17066833.136280537,"samples":8533417},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14113784.911531363,"samples":7056893},{"name":"DefineProperty (getter & configurable=false)","opsSec":16522841.803832557,"samples":8261421},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14068101.870212173,"samples":7034051},{"name":"DefineProperty (writable)","opsSec":16707842.97525487,"samples":8353922},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16973288.344848745,"samples":8486645},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16302370.741470171,"samples":8151186},{"name":"DefineProperties (getter)","opsSec":13948555.753750093,"samples":6974278},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13690806.575329239,"samples":6845404},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13816882.531094963,"samples":6908442}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,986,653|8493366|
|Setter|6,059,891|3029946|
|Method|16,561,927|8280964|
|DefineProperty (setter)|16,527,850|8263926|
|DefineProperty (setter & enumerable=false)|6,102,651|3051326|
|DefineProperty (setter & configurable=false)|6,194,776|3097389|
|DefineProperty (setter & enumerable=false & configurable=false)|5,883,192|2941597|
|DefineProperty (writable)|16,611,820|8305911|
|DefineProperty (writable & enumerable=false)|16,568,979|8284490|
|DefineProperty (writable & enumerable=false & configurable=false)|16,591,969|8295985|
|DefineProperties (setter)|16,544,397|8272199|
|DefineProperties (setter & enumerable=false)|5,895,022|2947512|
|DefineProperties (setter & enumerable=false & configurable=false)|6,054,264|3027133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16986653.330479853,"samples":8493366},{"name":"Setter","opsSec":6059891.394971321,"samples":3029946},{"name":"Method","opsSec":16561927.850845112,"samples":8280964},{"name":"DefineProperty (setter)","opsSec":16527850.662892472,"samples":8263926},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6102651.0988297835,"samples":3051326},{"name":"DefineProperty (setter & configurable=false)","opsSec":6194776.587401334,"samples":3097389},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5883192.393425588,"samples":2941597},{"name":"DefineProperty (writable)","opsSec":16611820.089862075,"samples":8305911},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16568979.520001302,"samples":8284490},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16591969.357795114,"samples":8295985},{"name":"DefineProperties (setter)","opsSec":16544397.233566776,"samples":8272199},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5895022.892204902,"samples":2947512},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6054264.598230432,"samples":3027133}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,917,498|1458750|
|Using replaceAll()|2,578,297|1289149|
|Using replaceAll(//g)|2,516,050|1258026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2917498.990639555,"samples":1458750},{"name":"Using replaceAll()","opsSec":2578297.214606869,"samples":1289149},{"name":"Using replaceAll(//g)","opsSec":2516050.2606256865,"samples":1258026}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,283,859|5141930|
|{ ...object, __proto__: null }|10,029,398|5014700|
|{ ...object, newProp: true }|683,100|341551|
|structuredClone|272,591|136296|
|JSON.parse + JSON.stringify|186,884|93443|
|loop + object.keys starting with {}|1,189,360|594681|
|loop + object.keys starting with { __proto__: null }|740,842|370422|
|loop + object.keys starting with { randomProp: true }|543,249|271625|
|object.keys + reduce(FN, {})|1,194,268|597135|
|object.keys + reduce(FN, { __proto__: null })|726,530|363266|
|object.keys + reduce(FN, { newProp: true })|547,079|273540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:59:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10283859.907020748,"samples":5141930},{"name":"{ ...object, __proto__: null }","opsSec":10029398.233355336,"samples":5014700},{"name":"{ ...object, newProp: true }","opsSec":683100.6039944789,"samples":341551},{"name":"structuredClone","opsSec":272591.5742852608,"samples":136296},{"name":"JSON.parse + JSON.stringify","opsSec":186884.34615136153,"samples":93443},{"name":"loop + object.keys starting with {}","opsSec":1189360.9641387418,"samples":594681},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":740842.4118508422,"samples":370422},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":543249.8310380237,"samples":271625},{"name":"object.keys + reduce(FN, {})","opsSec":1194268.3933294597,"samples":597135},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":726530.3842274265,"samples":363266},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":547079.4415390918,"samples":273540}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|277,085|138543|
|Sort using first char|1,208,063|604032|
|Sort using localeCompare|1,154,016|577009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:05:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":277085.64514909877,"samples":138543},{"name":"Sort using first char","opsSec":1208063.2882773844,"samples":604032},{"name":"Sort using localeCompare","opsSec":1154016.2069283586,"samples":577009}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,178|1090|
|{...smallObject} - Total keys: 2|13,482,830|6741416|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,447|1224|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,496|3249|
|{ ...bigObject, ...anotherBigObject }|1,311|656|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,520,643|3260322|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,885,146|5442574|
|{ ...smallObject, ...anotherSmallObject }|9,194,931|4597466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:09:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2178.472729392507,"samples":1090},{"name":"{...smallObject} - Total keys: 2","opsSec":13482830.838138422,"samples":6741416},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2447.192710070052,"samples":1224},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6496.57090949159,"samples":3249},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1311.776672618227,"samples":656},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6520643.002988371,"samples":3260322},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10885146.795330744,"samples":5442574},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9194931.382472698,"samples":4597466}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,454|1228|
|streams.web.Readable reading 1e3 * "some data"|756|379|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2454.7643209175794,"samples":1228},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":756.9448113607475,"samples":379}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,078|2543|
|streams.web.WritableStream writing 1e3 * "some data"|2,451|1238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:20:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5078.551492309589,"samples":2543},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2451.4434155097447,"samples":1238}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,766,671|8383336|
|Using backtick (`)|17,016,551|8508276|
|Using array.join|6,303,570|3151786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16766671.054532127,"samples":8383336},{"name":"Using backtick (`)","opsSec":17016551.80247179,"samples":8508276},{"name":"Using array.join","opsSec":6303570.163047882,"samples":3151786}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,275,484|7137743|
|(short string) (true) String#slice and strict comparison|16,425,890|8212946|
|(long string) (true) String#endsWith|13,852,897|6926449|
|(long string) (true) String#slice and strict comparison|17,084,436|8542219|
|(short string) (false) String#endsWith|14,683,023|7341512|
|(short string) (false) String#slice and strict comparison|17,215,211|8607606|
|(long string) (false) String#endsWith|14,542,841|7271421|
|(long string) (false) String#slice and strict comparison|17,094,014|8547008|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:31:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14275484.2143643,"samples":7137743},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16425890.5428537,"samples":8212946},{"name":"(long string) (true) String#endsWith","opsSec":13852897.765863279,"samples":6926449},{"name":"(long string) (true) String#slice and strict comparison","opsSec":17084436.853699148,"samples":8542219},{"name":"(short string) (false) String#endsWith","opsSec":14683023.656329162,"samples":7341512},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17215211.89815892,"samples":8607606},{"name":"(long string) (false) String#endsWith","opsSec":14542841.163138615,"samples":7271421},{"name":"(long string) (false) String#slice and strict comparison","opsSec":17094014.423151728,"samples":8547008}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,308,129|8654065|
|Using indexof|17,296,650|8648326|
|Using RegExp.test|8,546,534|4273268|
|Using RegExp.text with cached regex pattern|8,744,144|4372073|
|Using new RegExp.test|2,954,612|1477307|
|Using new RegExp.test with cached regex pattern|3,118,531|1559266|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:40:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17308129.336072028,"samples":8654065},{"name":"Using indexof","opsSec":17296650.924836826,"samples":8648326},{"name":"Using RegExp.test","opsSec":8546534.728186354,"samples":4273268},{"name":"Using RegExp.text with cached regex pattern","opsSec":8744144.689235605,"samples":4372073},{"name":"Using new RegExp.test","opsSec":2954612.2301194523,"samples":1477307},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3118531.9970724056,"samples":1559266}]}-->

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
