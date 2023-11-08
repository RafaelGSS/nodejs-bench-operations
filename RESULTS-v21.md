## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,064,487|91|
|Using dot notation|680,391,326|99|
|Using define property (writable)|4,519,380|96|
|Using define property initialized (writable)|6,443,327|96|
|Using define property (getter)|2,469,749|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":847064487.0915711,"samples":6},{"name":"Using dot notation","opsSec":680391326.4644071,"samples":8},{"name":"Using define property (writable)","opsSec":4519379.650730098,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6443326.920516256,"samples":5},{"name":"Using define property (getter)","opsSec":2469748.8582799397,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.002ms
array.push|100|0.075ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.254ms
new Array(length)|10,000|0.155ms
array.push|1,000,000|26.758ms
new Array(length)|1,000,000|6.808ms
array.push|100,000,000|1,705.45ms
new Array(length)|100,000,000|3,579.748ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|18.851ms
new Array(length)|1,000,000|7.514ms
array.push|100,000,000|1,960.328ms
new Array(length)|100,000,000|4,276.416ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|86|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":303.44024478227345,"samples":4},{"name":"Array.from","opsSec":22.91329505713221,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,916,393|98|
|[async] async function|17,488,480|90|
|[async] function|180,264|17|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:18:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847916392.9586813,"samples":6},{"name":"[async] async function","opsSec":17488480.37700695,"samples":7},{"name":"[async] function","opsSec":180263.85988632138,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,921|86|
|new Blob (1024)|610|81|
|text (128)|5,018|84|
|text (1024)|636|88|
|arrayBuffer (128)|5,032|85|
|arrayBuffer (1024)|633|87|
|slice (0, 64)|165,197|53|
|slice (0, 512)|35,966|78|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:34:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4921.328819947006,"samples":5},{"name":"new Blob (1024)","opsSec":610.4905398412723,"samples":2},{"name":"text (128)","opsSec":5018.245493580835,"samples":5},{"name":"text (1024)","opsSec":635.9508001832664,"samples":2},{"name":"arrayBuffer (128)","opsSec":5032.493351372228,"samples":3},{"name":"arrayBuffer (1024)","opsSec":632.6872430206365,"samples":2},{"name":"slice (0, 64)","opsSec":165197.22147039635,"samples":3},{"name":"slice (0, 512)","opsSec":35966.429593942405,"samples":5}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|235,871|50|
|[True conditional] Using constructor name|189,428|95|
|[True conditional] Check if property is valid then instanceof |191,553|97|
|[False conditional] Using instanceof only|847,578,347|92|
|[False conditional] Using constructor name|847,815,083|92|
|[False conditional] Check if property is valid then instanceof |848,268,609|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:46:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":235871.4802534363,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":189428.35128675215,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":191552.5031490521,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847578347.1467098,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":847815083.197936,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848268608.7727288,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,731|94|
|crypto.verify('RSA-SHA256')|6,720|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:55:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6730.632105150494,"samples":5},{"name":"crypto.verify('RSA-SHA256')","opsSec":6719.942665440955,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,489,616|95|
|fromUnixToISOString(new Date())|2,276,263|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:05:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1489615.9798435655,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2276263.3653675313,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,340|83|
|Intl.DateTimeFormat().format(new Date())|19,438|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,305|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,151|84|
|Reusing Intl.DateTimeFormat()|731,954|100|
|Date.toLocaleDateString()|735,633|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,919|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:18:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20340.0109767972,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19438.01535174621,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19304.6855601913,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15150.932124841887,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":731954.3902071255,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":735632.5074795183,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20918.947798744386,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,073,970|95|
|Using brackets {}|1,080,332|100|
|Using '' + |1,077,820|96|
|Using date.toString()|1,176,553|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1073969.966381368,"samples":5},{"name":"Using brackets {}","opsSec":1080332.2800742735,"samples":4},{"name":"Using '' + ","opsSec":1077820.0565738846,"samples":6},{"name":"Using date.toString()","opsSec":1176553.4432804044,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,136,430|94|
|Using delete property (proto: null)|22,030,812|99|
|Using delete property (cached proto: null)|4,174,599|96|
|Using undefined assignment|843,426,991|95|
|Using undefined assignment (proto: null)|24,569,832|97|
|Using undefined property (cached proto: null)|678,094,341|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:41:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":4136430.174385261,"samples":5},{"name":"Using delete property (proto: null)","opsSec":22030812.211150013,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4174599.2583789197,"samples":5},{"name":"Using undefined assignment","opsSec":843426990.8984731,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24569831.968970355,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":678094341.1598455,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|228,835|53|
|NodeError|186,381|98|
|NodeError Range|184,580|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:50:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":228834.6462992782,"samples":3},{"name":"NodeError","opsSec":186380.85457603753,"samples":3},{"name":"NodeError Range","opsSec":184580.09469100428,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,034,239|95|
|Function returning explicitly undefined|2,042,704|101|
|Function returning implicitly undefined|1,988,090|96|
|Function returning string|2,053,396|100|
|Function returning integer|1,973,147|96|
|Function returning float|2,049,471|98|
|Function returning functions|2,008,769|101|
|Function returning arrow functions|2,048,917|100|
|Function returning empty object|2,073,850|101|
|Function returning empty array|2,060,609|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":2034238.5175452505,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2042703.7073176594,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1988089.8223754463,"samples":5},{"name":"Function returning string","opsSec":2053395.6172337288,"samples":6},{"name":"Function returning integer","opsSec":1973146.666357695,"samples":5},{"name":"Function returning float","opsSec":2049470.7626226817,"samples":7},{"name":"Function returning functions","opsSec":2008768.8324083604,"samples":5},{"name":"Function returning arrow functions","opsSec":2048917.0667069417,"samples":5},{"name":"Function returning empty object","opsSec":2073849.7301255034,"samples":8},{"name":"Function returning empty array","opsSec":2060609.406789918,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|843,933,650|96|
|using Array.includes (first item)|848,527,502|97|
|Using raw comparison|846,591,057|99|
|Using raw comparison (first item)|847,909,520|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:19:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":843933649.7664744,"samples":6},{"name":"using Array.includes (first item)","opsSec":848527502.3635097,"samples":9},{"name":"Using raw comparison","opsSec":846591057.1117842,"samples":6},{"name":"Using raw comparison (first item)","opsSec":847909520.0443454,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|87,520,667|91|
|Using Object.getOwnPropertyNames()|91,290,746|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:28:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":87520666.55464543,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":91290745.63107422,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|845,661,058|95|
|Length = 10_000 - Array.at|846,274,945|98|
|Length = 1_000_000 - Array.at|847,549,452|99|
|Length = 100 - Array[length - 1]|849,003,793|94|
|Length = 10_000 - Array[length - 1]|849,442,698|98|
|Length = 1_000_000 - Array[length - 1]|850,542,503|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":845661057.7890908,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":846274944.7669266,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":847549451.5917195,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":849003793.4915249,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":849442697.9976958,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":850542503.4308584,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,620,905|95|
|Object.create({})|2,634,628|89|
|Cached Empty.prototype|848,746,331|94|
|Empty.prototype|2,568,705|91|
|Empty class|1,556,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77620904.57525036,"samples":6},{"name":"Object.create({})","opsSec":2634628.0581515008,"samples":3},{"name":"Cached Empty.prototype","opsSec":848746330.9895827,"samples":6},{"name":"Empty.prototype","opsSec":2568704.9891105397,"samples":3},{"name":"Empty class","opsSec":1556280.1801171068,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,056,706|94|
|Using optional chain (obj.field?.field2) (undefined)|849,451,923|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,661,343|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|849,305,421|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848056705.5278697,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":849451922.5049692,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848661342.7503291,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":849305421.1936482,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|846,005,647|91|
|Using parseInt(x, 10) - big number (10 len)|846,045,313|95|
|Using + - small number (2 len)|851,349,713|96|
|Using + - big number (10 len)|850,386,420|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:12:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":846005646.8952788,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":846045312.8373644,"samples":6},{"name":"Using + - small number (2 len)","opsSec":851349713.2579122,"samples":6},{"name":"Using + - big number (10 len)","opsSec":850386419.8073206,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,298,888|82|
|Using ? operator to avoid rejection|1,362,373|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:20:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1298887.7808676234,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1362372.738669815,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|675,145,144|97|
|Raw usage underscore usage|677,608,180|101|
|Manipulating private properties using #|670,677,504|99|
|Manipulating private properties using underscore(_)|670,555,568|99|
|Manipulating private properties using Symbol|669,123,977|97|
|Manipulating private properties using PrivateSymbol|55,387,405|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":675145144.3769577,"samples":6},{"name":"Raw usage underscore usage","opsSec":677608179.7791673,"samples":7},{"name":"Manipulating private properties using #","opsSec":670677503.6119052,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":670555567.5923129,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":669123977.4069436,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55387404.61382397,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,354,667|94|
|Adding property in the object creation - small object|8,416,985|95|
|Adding property after the function creation - small class|270,697|90|
|Adding property in the function creation - small class|263,473|92|
|Adding property after the class creation - small class|268,293|90|
|Adding property in the class creation - small class|265,636|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:45:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8354666.7527443245,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":8416984.942144243,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":270696.9720926825,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":263472.9753830237,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":268292.9104319401,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":265635.53293810494,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|849,953,430|99|
|Getter|105,766,479|97|
|Method|850,741,875|97|
|DefineProperty (getter)|850,757,181|96|
|DefineProperty (getter & enumerable=false)|105,539,669|98|
|DefineProperty (getter & configurable=false)|851,568,375|96|
|DefineProperty (getter & enumerable=false & configurable=false)|106,128,914|96|
|DefineProperty (writable)|851,593,201|99|
|DefineProperty (writable & enumerable=false)|851,758,966|95|
|DefineProperty (writable & enumerable=false & configurable=false)|851,613,805|100|
|DefineProperties (getter)|103,230,891|100|
|DefineProperties (getter & enumerable=false)|105,839,889|98|
|DefineProperties (getter & enumerable=false & configurable=false)|67,756,298|64|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:07:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":849953430.367271,"samples":6},{"name":"Getter","opsSec":105766478.91189073,"samples":8},{"name":"Method","opsSec":850741875.092484,"samples":6},{"name":"DefineProperty (getter)","opsSec":850757180.7577964,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":105539669.37207277,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":851568375.4356092,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":106128913.95239276,"samples":6},{"name":"DefineProperty (writable)","opsSec":851593200.8107682,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":851758966.350892,"samples":5},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":851613804.717899,"samples":6},{"name":"DefineProperties (getter)","opsSec":103230891.41325898,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":105839889.32022093,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":67756297.76691824,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|844,076,474|97|
|Setter|12,884,458|100|
|Method|848,023,097|100|
|DefineProperty (setter)|848,244,993|96|
|DefineProperty (setter & enumerable=false)|12,867,167|99|
|DefineProperty (setter & configurable=false)|12,937,380|98|
|DefineProperty (setter & enumerable=false & configurable=false)|13,035,621|99|
|DefineProperty (writable)|849,363,834|98|
|DefineProperty (writable & enumerable=false)|822,182,996|97|
|DefineProperty (writable & enumerable=false & configurable=false)|849,658,911|100|
|DefineProperties (setter)|848,793,913|95|
|DefineProperties (setter & enumerable=false)|12,158,272|92|
|DefineProperties (setter & enumerable=false & configurable=false)|11,778,631|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:29:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":844076473.6376282,"samples":6},{"name":"Setter","opsSec":12884457.90171914,"samples":5},{"name":"Method","opsSec":848023097.1034461,"samples":6},{"name":"DefineProperty (setter)","opsSec":848244992.7232112,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12867166.628877925,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12937380.107409447,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13035620.70818234,"samples":4},{"name":"DefineProperty (writable)","opsSec":849363834.0933592,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":822182995.6709123,"samples":4},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":849658911.1374716,"samples":6},{"name":"DefineProperties (setter)","opsSec":848793912.9848667,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12158271.82625024,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11778630.919682544,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,612,910|90|
|Using replaceAll()|3,449,292|97|
|Using replaceAll(//g)|3,251,353|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:39:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3612910.0909649627,"samples":5},{"name":"Using replaceAll()","opsSec":3449292.216967881,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3251352.6419147905,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|32,317,844|97|
|{ ...object, __proto__: null }|2,747,008|93|
|{ ...object, newProp: true }|32,335,166|98|
|structuredClone|263,983|94|
|JSON.parse + JSON.stringify|277,546|96|
|loop + object.keys starting with {}|1,638,671|96|
|loop + object.keys starting with { __proto__: null }|872,460|98|
|loop + object.keys starting with { randomProp: true }|654,210|99|
|object.keys + reduce(FN, {})|637,991|98|
|object.keys + reduce(FN, { __proto__: null })|899,781|100|
|object.keys + reduce(FN, { newProp: true })|649,968|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:58:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":32317843.633368075,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":2747008.3616750543,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":32335165.872845776,"samples":7},{"name":"structuredClone","opsSec":263982.77830798255,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":277546.32992683473,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1638671.458987436,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":872459.6226412503,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":654210.2446938856,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":637991.4426511351,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899781.4823135975,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":649967.7388508201,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|320,547|97|
|Sort using first char|1,465,574|100|
|Sort using localeCompare|1,300,778|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:06:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":320546.6307431422,"samples":5},{"name":"Sort using first char","opsSec":1465574.2450850795,"samples":6},{"name":"Sort using localeCompare","opsSec":1300778.116551085,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|96|
|{...smallObject} - Total keys: 2|116,756,777|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,258|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,653|97|
|{ ...bigObject, ...anotherBigObject }|1,265|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,122,150|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,856,836|98|
|{ ...smallObject, ...anotherSmallObject }|26,741,120|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:21:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.158422401554,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":116756777.12480967,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2257.521806770171,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6653.336293718903,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.0379493825171,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15122150.482076978,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":39856835.55001262,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26741119.765730172,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,776|86|
|streams.web.Readable reading 1e3 * "some data"|2,740|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:28:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2775.5672672519377,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2740.2743904662234,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,292|96|
|streams.web.WritableStream writing 1e3 * "some data"|1,065|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6292.317955886864,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1065.0596649833376,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|849,019,713|98|
|Using backtick (`)|850,595,209|98|
|Using array.join|12,565,978|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:46:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":849019713.0224848,"samples":6},{"name":"Using backtick (`)","opsSec":850595208.6160744,"samples":6},{"name":"Using array.join","opsSec":12565977.59934238,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,219,746|97|
|Using indexof|850,089,106|97|
|Using RegExp.test|16,114,017|97|
|Using RegExp.text with cached regex pattern|16,614,509|100|
|Using new RegExp.test|4,839,132|101|
|Using new RegExp.test with cached regex pattern|5,493,500|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:59:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":845219745.5674785,"samples":6},{"name":"Using indexof","opsSec":850089106.2124943,"samples":9},{"name":"Using RegExp.test","opsSec":16114017.108033631,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":16614509.205093738,"samples":8},{"name":"Using new RegExp.test","opsSec":4839132.136935432,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5493499.555403267,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|844,244,063|93|
|Using this|841,763,032|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:11:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":844244062.7405694,"samples":6},{"name":"Using this","opsSec":841763032.2291173,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,721,777|89|
|Date.now()|16,953,563|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:58:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7721777.355119308,"samples":6},{"name":"Date.now()","opsSec":16953563.098794278,"samples":5}]}-->
