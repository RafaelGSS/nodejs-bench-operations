## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,120,057|98|
|Using dot notation|820,383,625|98|
|Using define property (writable)|4,236,163|92|
|Using define property initialized (writable)|6,196,162|92|
|Using define property (getter)|2,402,875|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Directly in the object","opsSec":820120057.1834788,"samples":6},{"name":"Using dot notation","opsSec":820383624.584437,"samples":6},{"name":"Using define property (writable)","opsSec":4236163.266394479,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6196161.770511278,"samples":5},{"name":"Using define property (getter)","opsSec":2402874.9575527916,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.02ms
new Array(length)|10|0.002ms
array.push|100|0.102ms
new Array(length)|100|0.015ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.167ms
array.push|1,000,000|25.453ms
new Array(length)|1,000,000|6.21ms
array.push|100,000,000|969.511ms
new Array(length)|100,000,000|3,612.535ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.345ms
new Array(length)|10,000|0.224ms
array.push|1,000,000|15.834ms
new Array(length)|1,000,000|7.485ms
array.push|100,000,000|1,119.249ms
new Array(length)|100,000,000|3,579.89ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|577|86|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":577.2244209160618,"samples":3},{"name":"Array.from","opsSec":22.203194595909228,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|823,583,220|98|
|[async] async function|16,721,348|86|
|[async] function|168,367|22|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":823583220.4964,"samples":6},{"name":"[async] async function","opsSec":16721347.673194252,"samples":5},{"name":"[async] function","opsSec":168367.05586191601,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,545|92|
|new Blob (1024)|707|82|
|text (128)|5,899|87|
|text (1024)|750|89|
|arrayBuffer (128)|5,827|87|
|arrayBuffer (1024)|744|89|
|slice (0, 64)|193,572|58|
|slice (0, 512)|38,769|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5545.411171899344,"samples":5},{"name":"new Blob (1024)","opsSec":706.5889478300968,"samples":2},{"name":"text (128)","opsSec":5898.524951994253,"samples":6},{"name":"text (1024)","opsSec":749.6069197693243,"samples":3},{"name":"arrayBuffer (128)","opsSec":5827.136819250665,"samples":5},{"name":"arrayBuffer (1024)","opsSec":744.3593794557218,"samples":3},{"name":"slice (0, 64)","opsSec":193572.0765257397,"samples":5},{"name":"slice (0, 512)","opsSec":38769.2266797144,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,656|56|
|[True conditional] Using constructor name|206,968|96|
|[True conditional] Check if property is valid then instanceof |203,417|92|
|[False conditional] Using instanceof only|820,041,882|97|
|[False conditional] Using constructor name|820,102,586|92|
|[False conditional] Check if property is valid then instanceof |821,607,113|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250656.38330313435,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206967.70551866438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":203417.00412694016,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":820041882.4170234,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":820102586.1353441,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":821607113.440325,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,349|94|
|crypto.verify('RSA-SHA256')|6,382|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6349.112195076472,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6382.07342586019,"samples":6}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,479,226|88|
|fromUnixToISOString(new Date())|2,301,991|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1479225.8475829107,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2301990.824387005,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,200|81|
|Intl.DateTimeFormat().format(new Date())|16,696|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,591|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,434|81|
|Reusing Intl.DateTimeFormat()|785,965|93|
|Date.toLocaleDateString()|797,209|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,820|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17200.3231260596,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16695.772979064783,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15590.983960744436,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17433.93611009695,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":785965.1932518678,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":797209.1827879155,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19820.38495585699,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,209|96|
|Using brackets {}|1,082,059|96|
|Using '' + |1,073,140|96|
|Using date.toString()|1,212,448|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1045208.9400810722,"samples":4},{"name":"Using brackets {}","opsSec":1082059.1883080392,"samples":4},{"name":"Using '' + ","opsSec":1073140.299435095,"samples":5},{"name":"Using date.toString()","opsSec":1212448.0526477466,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,034,624|94|
|Using delete property (proto: null)|20,837,785|97|
|Using delete property (cached proto: null)|4,121,995|95|
|Using undefined assignment|820,150,987|94|
|Using undefined assignment (proto: null)|22,904,811|97|
|Using undefined property (cached proto: null)|818,890,030|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4034624.1056352407,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20837784.52190242,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4121995.291200839,"samples":5},{"name":"Using undefined assignment","opsSec":820150986.9395106,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22904810.661143754,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":818890029.8691102,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|246,152|52|
|NodeError|203,305|95|
|NodeError Range|204,834|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":246152.02379333513,"samples":3},{"name":"NodeError","opsSec":203304.88048910373,"samples":3},{"name":"NodeError Range","opsSec":204834.015236898,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,901,532|98|
|Function returning explicitly undefined|1,874,111|94|
|Function returning implicitly undefined|1,928,723|96|
|Function returning string|1,853,795|97|
|Function returning integer|1,900,533|95|
|Function returning float|1,905,013|94|
|Function returning functions|1,806,755|93|
|Function returning arrow functions|1,895,263|98|
|Function returning empty object|1,856,760|96|
|Function returning empty array|1,910,422|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Function returning null","opsSec":1901532.1549706422,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1874111.1982770236,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1928723.4271044573,"samples":6},{"name":"Function returning string","opsSec":1853795.2381768778,"samples":8},{"name":"Function returning integer","opsSec":1900533.3385676139,"samples":5},{"name":"Function returning float","opsSec":1905013.3661353458,"samples":5},{"name":"Function returning functions","opsSec":1806755.1679650191,"samples":5},{"name":"Function returning arrow functions","opsSec":1895263.427545549,"samples":6},{"name":"Function returning empty object","opsSec":1856760.1805894068,"samples":6},{"name":"Function returning empty array","opsSec":1910422.1257659055,"samples":8}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|821,804,752|98|
|using Array.includes (first item)|819,350,627|95|
|Using raw comparison|823,554,197|97|
|Using raw comparison (first item)|823,378,141|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":821804751.8955947,"samples":7},{"name":"using Array.includes (first item)","opsSec":819350627.2004595,"samples":7},{"name":"Using raw comparison","opsSec":823554197.3595597,"samples":7},{"name":"Using raw comparison (first item)","opsSec":823378140.7085564,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,083,346|92|
|Using Object.getOwnPropertyNames()|90,627,903|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using Object.keys()","opsSec":91083346.3107362,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":90627903.37357123,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|867,723,129|96|
|Length = 10_000 - Array.at|873,817,983|91|
|Length = 1_000_000 - Array.at|867,089,937|95|
|Length = 100 - Array[length - 1]|818,737,279|95|
|Length = 10_000 - Array[length - 1]|821,315,871|94|
|Length = 1_000_000 - Array[length - 1]|822,874,415|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":867723128.7217239,"samples":10},{"name":"Length = 10_000 - Array.at","opsSec":873817982.8560684,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":867089937.3164809,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":818737278.7109885,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":821315870.6655908,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822874415.2115588,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|82,919,677|95|
|Object.create({})|2,478,189|77|
|Cached Empty.prototype|822,429,383|99|
|Empty.prototype|2,544,638|90|
|Empty class|1,518,125|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":82919677.10937494,"samples":5},{"name":"Object.create({})","opsSec":2478189.237413242,"samples":4},{"name":"Cached Empty.prototype","opsSec":822429383.1779258,"samples":7},{"name":"Empty.prototype","opsSec":2544638.0715606646,"samples":4},{"name":"Empty class","opsSec":1518125.3696933396,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,647,087|95|
|Using optional chain (obj.field?.field2) (undefined)|822,333,457|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,900,255|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|823,590,778|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821647086.7683747,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822333456.8051999,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822900254.6798103,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":823590778.3120296,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|822,206,832|96|
|Using parseInt(x, 10) - big number (10 len)|823,518,143|99|
|Using + - small number (2 len)|823,922,777|99|
|Using + - big number (10 len)|823,514,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":822206832.310753,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":823518142.5262095,"samples":6},{"name":"Using + - small number (2 len)","opsSec":823922776.6009359,"samples":7},{"name":"Using + - big number (10 len)","opsSec":823514752.2593809,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,350,356|81|
|Using ? operator to avoid rejection|1,421,844|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1350356.0288240872,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1421843.7758961802,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|817,667,138|96|
|Raw usage underscore usage|821,141,558|88|
|Manipulating private properties using #|809,524,794|96|
|Manipulating private properties using underscore(_)|812,216,669|96|
|Manipulating private properties using Symbol|810,620,668|93|
|Manipulating private properties using PrivateSymbol|49,840,777|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":817667138.3517002,"samples":6},{"name":"Raw usage underscore usage","opsSec":821141557.9454606,"samples":6},{"name":"Manipulating private properties using #","opsSec":809524793.609015,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":812216668.6982199,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":810620667.9257599,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49840776.711497575,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,130,501|88|
|Adding property in the object creation - small object|5,302,208|92|
|Adding property after the function creation - small class|271,038|90|
|Adding property in the function creation - small class|274,340|90|
|Adding property after the class creation - small class|274,900|87|
|Adding property in the class creation - small class|274,206|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5130500.851268233,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5302208.23742757,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":271038.1030965287,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":274340.238880486,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":274899.9482947969,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":274205.9211553847,"samples":5}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|822,232,243|95|
|Getter|92,052,979|97|
|Method|819,362,955|98|
|DefineProperty (getter)|822,265,338|97|
|DefineProperty (getter & enumerable=false)|91,844,713|98|
|DefineProperty (getter & configurable=false)|822,971,405|94|
|DefineProperty (getter & enumerable=false & configurable=false)|92,514,760|97|
|DefineProperty (writable)|824,515,855|97|
|DefineProperty (writable & enumerable=false)|824,153,487|99|
|DefineProperty (writable & enumerable=false & configurable=false)|824,448,166|98|
|DefineProperties (getter)|92,517,037|96|
|DefineProperties (getter & enumerable=false)|68,070,568|74|
|DefineProperties (getter & enumerable=false & configurable=false)|56,919,198|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Getter (class)","opsSec":822232243.1883911,"samples":6},{"name":"Getter","opsSec":92052979.4617706,"samples":7},{"name":"Method","opsSec":819362955.1747456,"samples":6},{"name":"DefineProperty (getter)","opsSec":822265337.8962309,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":91844712.72876312,"samples":7},{"name":"DefineProperty (getter & configurable=false)","opsSec":822971404.920675,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":92514760.40419936,"samples":6},{"name":"DefineProperty (writable)","opsSec":824515855.4565619,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":824153486.8248069,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":824448166.428762,"samples":7},{"name":"DefineProperties (getter)","opsSec":92517037.48628365,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":68070567.66480796,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56919197.68832083,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|761,848,769|91|
|Setter|12,474,309|93|
|Method|782,228,756|97|
|DefineProperty (setter)|784,186,215|100|
|DefineProperty (setter & enumerable=false)|12,449,589|96|
|DefineProperty (setter & configurable=false)|12,402,231|95|
|DefineProperty (setter & enumerable=false & configurable=false)|12,431,155|95|
|DefineProperty (writable)|785,118,532|99|
|DefineProperty (writable & enumerable=false)|757,601,898|99|
|DefineProperty (writable & enumerable=false & configurable=false)|189,947,356|26|
|DefineProperties (setter)|110,434,043|82|
|DefineProperties (setter & enumerable=false)|11,218,098|95|
|DefineProperties (setter & enumerable=false & configurable=false)|11,239,974|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":761848768.7329481,"samples":5},{"name":"Setter","opsSec":12474308.766126383,"samples":5},{"name":"Method","opsSec":782228756.0747968,"samples":8},{"name":"DefineProperty (setter)","opsSec":784186214.6581216,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12449589.223660883,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12402230.750361566,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12431154.63349346,"samples":5},{"name":"DefineProperty (writable)","opsSec":785118532.1526872,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":757601897.9857697,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":189947356.4580935,"samples":8},{"name":"DefineProperties (setter)","opsSec":110434043.14230964,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11218097.76486374,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11239973.585293572,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,297,164|90|
|Using replaceAll()|2,961,297|96|
|Using replaceAll(//g)|3,050,613|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3297163.782167611,"samples":4},{"name":"Using replaceAll()","opsSec":2961297.170362676,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3050612.5763850366,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,432,329|92|
|{ ...object, __proto__: null }|2,492,476|96|
|{ ...object, newProp: true }|27,904,520|98|
|structuredClone|256,322|93|
|JSON.parse + JSON.stringify|234,011|99|
|loop + object.keys starting with {}|1,497,587|98|
|loop + object.keys starting with { __proto__: null }|792,967|98|
|loop + object.keys starting with { randomProp: true }|631,400|96|
|object.keys + reduce(FN, {})|614,481|94|
|object.keys + reduce(FN, { __proto__: null })|793,992|93|
|object.keys + reduce(FN, { newProp: true })|642,804|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30432329.061042156,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2492475.9755413085,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":27904519.804504722,"samples":6},{"name":"structuredClone","opsSec":256322.28864293406,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":234011.12344376938,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1497587.0520212513,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":792966.7681719383,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":631399.9735814985,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":614480.9295506044,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":793992.2728525089,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":642804.4848808831,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,768|90|
|Sort using first char|1,398,070|96|
|Sort using localeCompare|1,296,757|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":308768.3940828705,"samples":4},{"name":"Sort using first char","opsSec":1398070.1016417095,"samples":7},{"name":"Sort using localeCompare","opsSec":1296757.315425037,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,116|91|
|{...smallObject} - Total keys: 2|114,833,848|91|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,210|93|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,241|93|
|{ ...bigObject, ...anotherBigObject }|1,306|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,116,154|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,078,595|93|
|{ ...smallObject, ...anotherSmallObject }|24,834,212|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2116.1852740472154,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":114833847.96840301,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2209.748463364956,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6241.316614985528,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1306.1043148403426,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15116154.346137386,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37078595.188562214,"samples":9},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24834212.47770129,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,281|85|
|streams.web.Readable reading 1e3 * "some data"|2,806|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2280.9291610027312,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2805.548183649561,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,501|95|
|streams.web.WritableStream writing 1e3 * "some data"|1,515|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5500.864575480467,"samples":7},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1515.3167776310027,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|819,124,229|96|
|Using backtick (`)|819,388,442|96|
|Using array.join|10,766,679|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":819124228.6233578,"samples":6},{"name":"Using backtick (`)","opsSec":819388442.2235913,"samples":7},{"name":"Using array.join","opsSec":10766679.134596989,"samples":5}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|820,819,811|98|
|Using indexof|823,935,389|96|
|Using RegExp.test|16,932,440|94|
|Using RegExp.text with cached regex pattern|17,496,519|96|
|Using new RegExp.test|4,544,901|97|
|Using new RegExp.test with cached regex pattern|5,138,428|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":820819811.328139,"samples":6},{"name":"Using indexof","opsSec":823935388.9466988,"samples":7},{"name":"Using RegExp.test","opsSec":16932439.524971534,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":17496518.602528516,"samples":5},{"name":"Using new RegExp.test","opsSec":4544900.558378366,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5138427.761562769,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|817,698,726|96|
|Using this|821,241,974|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":817698726.3901011,"samples":6},{"name":"Using this","opsSec":821241974.4722159,"samples":9}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,008,897|93|
|Date.now()|21,639,901|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":12008897.43687197,"samples":5},{"name":"Date.now()","opsSec":21639901.39610351,"samples":6}]}-->
