## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,236,623|90|
|Using dot notation|594,536,832|88|
|Using define property (writable)|2,345,799|88|
|Using define property initialized (writable)|3,096,943|94|
|Using define property (getter)|1,245,901|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:48:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714236623.2429363,"samples":7},{"name":"Using dot notation","opsSec":594536831.5429496,"samples":7},{"name":"Using define property (writable)","opsSec":2345799.3189762556,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3096943.1227315417,"samples":5},{"name":"Using define property (getter)","opsSec":1245901.1812531508,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.048ms
new Array(length)|100|0.016ms
array.push|1,000|0.075ms
new Array(length)|1,000|0.04ms
array.push|10,000|0.471ms
new Array(length)|10,000|1.303ms
array.push|1,000,000|42.265ms
new Array(length)|1,000,000|10.457ms
array.push|100,000,000|2,008.945ms
new Array(length)|100,000,000|5,559.474ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.02ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.035ms
array.push|10,000|0.488ms
new Array(length)|10,000|0.228ms
array.push|1,000,000|31.065ms
new Array(length)|1,000,000|9.47ms
array.push|100,000,000|2,672.575ms
new Array(length)|100,000,000|5,898.011ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|307|74|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:01:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":306.5752068001279,"samples":4},{"name":"Array.from","opsSec":12.030764490648023,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,817|89|
|new Blob (1024)|361|70|
|text (128)|23,289|77|
|text (1024)|12,739|81|
|arrayBuffer (128)|24,854|75|
|arrayBuffer (1024)|14,682|77|
|slice (0, 64)|41,964|75|
|slice (0, 512)|18,263|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2816.982413525467,"samples":5},{"name":"new Blob (1024)","opsSec":361.4161786911569,"samples":2},{"name":"text (128)","opsSec":23288.86678087723,"samples":4},{"name":"text (1024)","opsSec":12738.9118908672,"samples":3},{"name":"arrayBuffer (128)","opsSec":24854.331838209157,"samples":5},{"name":"arrayBuffer (1024)","opsSec":14682.30950474123,"samples":3},{"name":"slice (0, 64)","opsSec":41963.85441541099,"samples":3},{"name":"slice (0, 512)","opsSec":18262.661234378327,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,268|60|
|[True conditional] Using constructor name|142,168|87|
|[True conditional] Check if property is valid then instanceof |143,255|88|
|[False conditional] Using instanceof only|691,788,164|88|
|[False conditional] Using constructor name|690,955,465|81|
|[False conditional] Check if property is valid then instanceof |691,053,987|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":164268.06455208693,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":142168.06854535182,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":143254.61041909704,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":691788164.3610694,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":690955465.2111573,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":691053986.6554868,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,105|87|
|crypto.verify('RSA-SHA256')|3,191|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:08:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3104.9250279967064,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3190.607716483362,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|726,377|87|
|fromUnixToISOString(new Date())|1,169,566|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":726377.3975779304,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1169565.8914565938,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,800|80|
|Intl.DateTimeFormat().format(new Date())|8,324|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,625|64|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,719|96|
|Reusing Intl.DateTimeFormat()|510,310|73|
|Date.toLocaleDateString()|515,294|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,163|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7800.150973792958,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8323.984726923129,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6625.02357728324,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10719.163954853648,"samples":7},{"name":"Reusing Intl.DateTimeFormat()","opsSec":510310.1897946742,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":515293.99554117233,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9163.127562192905,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|734,273|93|
|Using brackets {}|741,969|95|
|Using '' + |757,557|95|
|Using date.toString()|828,742|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":734273.431620485,"samples":8},{"name":"Using brackets {}","opsSec":741969.1759844808,"samples":3},{"name":"Using '' + ","opsSec":757557.3584446753,"samples":8},{"name":"Using date.toString()","opsSec":828741.6031011435,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|1,984,456|87|
|Using delete property (proto: null)|12,559,077|88|
|Using delete property (cached proto: null)|1,991,277|80|
|Using undefined assignment|634,158,218|85|
|Using undefined assignment (proto: null)|14,514,809|89|
|Using undefined property (cached proto: null)|624,468,841|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":1984455.8145832347,"samples":4},{"name":"Using delete property (proto: null)","opsSec":12559077.455596503,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":1991276.512799457,"samples":6},{"name":"Using undefined assignment","opsSec":634158217.6232731,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":14514808.698719436,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":624468840.853403,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|139,620|54|
|NodeError|114,386|84|
|NodeError Range|119,758|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:21:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":139620.4950926576,"samples":3},{"name":"NodeError","opsSec":114385.80152894786,"samples":3},{"name":"NodeError Range","opsSec":119757.93131179313,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,019,284|87|
|Function returning explicitly undefined|1,126,693|90|
|Function returning implicitly undefined|1,131,504|95|
|Function returning string|1,012,690|83|
|Function returning integer|1,141,249|89|
|Function returning float|1,157,245|96|
|Function returning functions|1,126,974|94|
|Function returning arrow functions|1,133,846|90|
|Function returning empty object|1,152,124|98|
|Function returning empty array|982,795|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:25:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1019283.8085828833,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1126692.5898636957,"samples":4},{"name":"Function returning implicitly undefined","opsSec":1131503.911978343,"samples":6},{"name":"Function returning string","opsSec":1012690.0378836106,"samples":9},{"name":"Function returning integer","opsSec":1141248.656072314,"samples":5},{"name":"Function returning float","opsSec":1157245.375186282,"samples":6},{"name":"Function returning functions","opsSec":1126973.756095972,"samples":7},{"name":"Function returning arrow functions","opsSec":1133846.0352351535,"samples":6},{"name":"Function returning empty object","opsSec":1152124.4989265518,"samples":5},{"name":"Function returning empty array","opsSec":982795.1562003257,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,510,328|93|
|using Array.includes (first item)|597,958,987|94|
|Using raw comparison|598,135,108|93|
|Using raw comparison (first item)|597,189,642|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":591510327.905767,"samples":6},{"name":"using Array.includes (first item)","opsSec":597958987.481519,"samples":7},{"name":"Using raw comparison","opsSec":598135108.1722621,"samples":6},{"name":"Using raw comparison (first item)","opsSec":597189642.470084,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|54,995,491|91|
|Using Object.getOwnPropertyNames()|49,228,479|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using Object.keys()","opsSec":54995490.606721826,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":49228479.209956095,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|677,592,064|84|
|Length = 10_000 - Array.at|635,043,663|82|
|Length = 1_000_000 - Array.at|651,162,036|87|
|Length = 100 - Array[length - 1]|794,278,791|88|
|Length = 10_000 - Array[length - 1]|800,429,622|89|
|Length = 1_000_000 - Array[length - 1]|795,602,662|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:32:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":677592064.0968108,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":635043663.4860573,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":651162036.1196299,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":794278791.421098,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":800429621.6321969,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":795602662.4057903,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|32,149,886|89|
|Object.create({})|965,459|72|
|Cached Empty.prototype|636,227,442|87|
|Empty.prototype|891,959|69|
|Empty class|650,607|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:59:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Object.create(null)","opsSec":32149885.553224612,"samples":6},{"name":"Object.create({})","opsSec":965458.7832299474,"samples":4},{"name":"Cached Empty.prototype","opsSec":636227441.990662,"samples":7},{"name":"Empty.prototype","opsSec":891959.255584631,"samples":4},{"name":"Empty class","opsSec":650607.3114520849,"samples":4}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|673,391,010|88|
|Using optional chain (obj.field?.field2) (undefined)|668,492,066|86|
|Using and operator (obj.field && obj.field.field2) (Valid)|672,496,765|89|
|Using and operator (obj.field && obj.field.field2) (undefined)|677,922,459|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":673391010.4619335,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":668492065.6324489,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":672496764.8207002,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":677922458.6350639,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|159,784,177|98|
|Using parseInt(x, 10) - big number (10 len)|14,311,025|99|
|Using + - small number (2 len)|717,098,271|97|
|Using + - big number (10 len)|716,019,761|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":159784176.7108131,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14311024.953802537,"samples":6},{"name":"Using + - small number (2 len)","opsSec":717098270.7461947,"samples":12},{"name":"Using + - big number (10 len)","opsSec":716019760.9232726,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|562,392|72|
|Using ? operator to avoid rejection|579,898|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:08:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":562391.7937685469,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":579897.6329748712,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|581,433,342|95|
|Raw usage underscore usage|579,162,013|91|
|Manipulating private properties using #|570,745,568|92|
|Manipulating private properties using underscore(_)|568,990,120|94|
|Manipulating private properties using Symbol|572,821,128|92|
|Manipulating private properties using PrivateSymbol|24,310,885|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:10:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":581433342.4574385,"samples":6},{"name":"Raw usage underscore usage","opsSec":579162012.7421497,"samples":8},{"name":"Manipulating private properties using #","opsSec":570745568.4791943,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":568990120.2772564,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":572821128.0943192,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":24310885.089389823,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,823,822|94|
|Adding property in the object creation - small object|1,864,131|96|
|Adding property after the function creation - small class|164,724|90|
|Adding property in the function creation - small class|164,487|89|
|Adding property after the class creation - small class|139,547|85|
|Adding property in the class creation - small class|140,104|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1823822.1326767246,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":1864131.1106701668,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":164723.7631407071,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":164486.97122145022,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":139547.1666012335,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":140104.10458582785,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|680,704,754|87|
|Getter|47,803,833|85|
|Method|663,982,287|84|
|DefineProperty (getter)|664,707,579|81|
|DefineProperty (getter & enumerable=false)|47,490,549|82|
|DefineProperty (getter & configurable=false)|669,634,270|87|
|DefineProperty (getter & enumerable=false & configurable=false)|48,379,535|86|
|DefineProperty (writable)|670,794,260|90|
|DefineProperty (writable & enumerable=false)|678,329,519|87|
|DefineProperty (writable & enumerable=false & configurable=false)|664,833,459|87|
|DefineProperties (getter)|47,666,817|85|
|DefineProperties (getter & enumerable=false)|50,289,604|87|
|DefineProperties (getter & enumerable=false & configurable=false)|50,643,587|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Getter (class)","opsSec":680704753.8450464,"samples":6},{"name":"Getter","opsSec":47803833.30390369,"samples":5},{"name":"Method","opsSec":663982287.2404923,"samples":6},{"name":"DefineProperty (getter)","opsSec":664707578.7600154,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":47490549.46520128,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":669634270.3130212,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48379534.89022427,"samples":5},{"name":"DefineProperty (writable)","opsSec":670794260.2700287,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":678329518.573252,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":664833458.9586533,"samples":7},{"name":"DefineProperties (getter)","opsSec":47666817.13023342,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50289604.46196559,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50643586.9984165,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|478,528,769|95|
|Setter|7,582,187|98|
|Method|480,683,605|99|
|DefineProperty (setter)|479,256,921|96|
|DefineProperty (setter & enumerable=false)|7,406,795|98|
|DefineProperty (setter & configurable=false)|7,603,397|96|
|DefineProperty (setter & enumerable=false & configurable=false)|7,676,450|99|
|DefineProperty (writable)|714,840,211|97|
|DefineProperty (writable & enumerable=false)|717,293,547|99|
|DefineProperty (writable & enumerable=false & configurable=false)|715,228,137|97|
|DefineProperties (setter)|715,116,944|95|
|DefineProperties (setter & enumerable=false)|7,181,336|93|
|DefineProperties (setter & enumerable=false & configurable=false)|6,926,159|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:22:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":478528769.4098363,"samples":7},{"name":"Setter","opsSec":7582186.604667132,"samples":5},{"name":"Method","opsSec":480683605.37841576,"samples":7},{"name":"DefineProperty (setter)","opsSec":479256921.49727494,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":7406795.16112556,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":7603396.55822216,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":7676449.735651805,"samples":8},{"name":"DefineProperty (writable)","opsSec":714840210.9874775,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":717293546.9736316,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":715228136.859472,"samples":6},{"name":"DefineProperties (setter)","opsSec":715116944.0238223,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7181335.723256968,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6926159.360938545,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,880,659|88|
|Using replaceAll()|1,604,861|85|
|Using replaceAll(//g)|1,600,456|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":1880659.3873529849,"samples":6},{"name":"Using replaceAll()","opsSec":1604861.314905843,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1600456.265316177,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,505,940|86|
|{ ...object, __proto__: null }|10,588,224|90|
|{ ...object, newProp: true }|423,751|78|
|structuredClone|148,958|89|
|JSON.parse + JSON.stringify|119,380|84|
|loop + object.keys starting with {}|738,609|88|
|loop + object.keys starting with { __proto__: null }|386,858|90|
|loop + object.keys starting with { randomProp: true }|293,368|81|
|object.keys + reduce(FN, {})|304,395|87|
|object.keys + reduce(FN, { __proto__: null })|426,468|85|
|object.keys + reduce(FN, { newProp: true })|315,435|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{ ...object }","opsSec":10505939.841444895,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":10588223.957776774,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":423751.1737426075,"samples":4},{"name":"structuredClone","opsSec":148958.05815637813,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":119380.12287472244,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":738608.5976181634,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":386858.3995466017,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":293368.21843791666,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":304394.889818032,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":426467.75979129423,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":315435.1516427457,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|169,303|94|
|Sort using first char|777,103|96|
|Sort using localeCompare|721,636|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:39:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":169303.12012503634,"samples":5},{"name":"Sort using first char","opsSec":777103.1964901431,"samples":7},{"name":"Sort using localeCompare","opsSec":721636.2029503856,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,296|97|
|{...smallObject} - Total keys: 2|66,528,295|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,313|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,622|98|
|{ ...bigObject, ...anotherBigObject }|794|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,075,123|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,154,199|94|
|{ ...smallObject, ...anotherSmallObject }|12,056,445|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1296.3831975287892,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":66528294.70205284,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1313.447321586401,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3622.0693358393346,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":793.5865510497499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8075122.776231784,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18154198.613713074,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12056445.157018755,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,169|83|
|streams.web.Readable reading 1e3 * "some data"|335|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1169.0643197096344,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":334.8919015660029,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,351|92|
|streams.web.WritableStream writing 1e3 * "some data"|818|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4350.70541588604,"samples":8},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":818.4128370471315,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|583,387,781|89|
|Using backtick (`)|590,734,850|97|
|Using array.join|5,663,342|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":583387780.7352558,"samples":12},{"name":"Using backtick (`)","opsSec":590734850.4018842,"samples":7},{"name":"Using array.join","opsSec":5663342.231818224,"samples":8}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|714,242,790|98|
|Using indexof|717,971,904|95|
|Using RegExp.test|12,127,354|96|
|Using RegExp.text with cached regex pattern|12,743,758|97|
|Using new RegExp.test|3,149,081|97|
|Using new RegExp.test with cached regex pattern|3,544,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":714242790.3193058,"samples":6},{"name":"Using indexof","opsSec":717971903.7817652,"samples":7},{"name":"Using RegExp.test","opsSec":12127354.412624683,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":12743758.119163122,"samples":6},{"name":"Using new RegExp.test","opsSec":3149081.2361637373,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3544323.0621585594,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|129,842,030|89|
|Using this|147,333,327|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:12:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":129842030.014767,"samples":7},{"name":"Using this","opsSec":147333327.13154712,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,342,406|98|
|Date.now()|15,921,103|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":9342406.344604969,"samples":5},{"name":"Date.now()","opsSec":15921102.524693666,"samples":5}]}-->
