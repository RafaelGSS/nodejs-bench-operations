## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|823,551,140|97|
|Using dot notation|821,571,328|97|
|Using define property (writable)|4,375,551|93|
|Using define property initialized (writable)|5,988,563|96|
|Using define property (getter)|2,338,622|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":823551139.9442039,"samples":9},{"name":"Using dot notation","opsSec":821571327.6636469,"samples":7},{"name":"Using define property (writable)","opsSec":4375550.62360609,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5988562.528924391,"samples":5},{"name":"Using define property (getter)","opsSec":2338622.1801580624,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.333ms
new Array(length)|10,000|0.339ms
array.push|1,000,000|26.937ms
new Array(length)|1,000,000|5.824ms
array.push|100,000,000|1,093.641ms
new Array(length)|100,000,000|3,615.617ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.304ms
new Array(length)|10,000|0.173ms
array.push|1,000,000|25.099ms
new Array(length)|1,000,000|2.45ms
array.push|100,000,000|1,336.888ms
new Array(length)|100,000,000|3,560.584ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|617|82|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":616.5334869222276,"samples":3},{"name":"Array.from","opsSec":22.49553417763914,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|827,285,724|100|
|[async] async function|17,739,461|86|
|[async] function|352,815|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":827285723.8030511,"samples":6},{"name":"[async] async function","opsSec":17739461.388320867,"samples":6},{"name":"[async] function","opsSec":352814.6687229978,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,358|91|
|new Blob (1024)|698|92|
|text (128)|5,978|89|
|text (1024)|726|87|
|arrayBuffer (128)|5,993|90|
|arrayBuffer (1024)|724|87|
|slice (0, 64)|76,775|71|
|slice (0, 512)|21,254|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5358.2180189981,"samples":4},{"name":"new Blob (1024)","opsSec":697.8925220554731,"samples":4},{"name":"text (128)","opsSec":5978.271510043439,"samples":6},{"name":"text (1024)","opsSec":726.3946276330998,"samples":3},{"name":"arrayBuffer (128)","opsSec":5993.172186722711,"samples":4},{"name":"arrayBuffer (1024)","opsSec":724.48346516968,"samples":3},{"name":"slice (0, 64)","opsSec":76775.17583699913,"samples":3},{"name":"slice (0, 512)","opsSec":21254.074299950567,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|237,832|53|
|[True conditional] Using constructor name|192,759|92|
|[True conditional] Check if property is valid then instanceof |194,860|93|
|[False conditional] Using instanceof only|825,796,207|98|
|[False conditional] Using constructor name|824,147,695|96|
|[False conditional] Check if property is valid then instanceof |826,812,673|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":237831.71331725176,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":192758.64795988708,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":194859.85955512314,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":825796206.5021873,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":824147694.9729468,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":826812672.7685115,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,309|94|
|crypto.verify('RSA-SHA256')|6,350|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6308.705432501754,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6349.820749547614,"samples":5}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,502,399|93|
|fromUnixToISOString(new Date())|2,167,840|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1502399.0838222608,"samples":8},{"name":"fromUnixToISOString(new Date())","opsSec":2167839.8891623444,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,908|85|
|Intl.DateTimeFormat().format(new Date())|8,248|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,270|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,518|84|
|Reusing Intl.DateTimeFormat()|663,982|96|
|Date.toLocaleDateString()|656,291|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,374|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10908.103749621934,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8247.627750084037,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12269.950918235769,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14517.759288750938,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":663981.7489089955,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":656290.8640153036,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13373.571293281304,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,125,119|96|
|Using brackets {}|1,145,624|94|
|Using '' + |1,128,781|96|
|Using date.toString()|1,237,871|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1125119.4842223518,"samples":6},{"name":"Using brackets {}","opsSec":1145624.0209500382,"samples":9},{"name":"Using '' + ","opsSec":1128780.5583079788,"samples":4},{"name":"Using date.toString()","opsSec":1237871.1693344484,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,786,835|92|
|Using delete property (proto: null)|19,890,972|94|
|Using delete property (cached proto: null)|3,807,433|93|
|Using undefined assignment|825,291,661|96|
|Using undefined assignment (proto: null)|22,348,287|93|
|Using undefined property (cached proto: null)|821,672,792|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3786835.0515425247,"samples":6},{"name":"Using delete property (proto: null)","opsSec":19890971.805721782,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3807432.664620352,"samples":4},{"name":"Using undefined assignment","opsSec":825291661.1207492,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22348287.194767497,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":821672792.3414497,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|238,143|51|
|NodeError|194,936|92|
|NodeError Range|197,048|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Error","opsSec":238143.05330088842,"samples":3},{"name":"NodeError","opsSec":194935.6547442725,"samples":3},{"name":"NodeError Range","opsSec":197047.77942686353,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,758,079|95|
|Function returning explicitly undefined|1,774,508|98|
|Function returning implicitly undefined|1,783,167|93|
|Function returning string|1,699,948|96|
|Function returning integer|1,795,917|95|
|Function returning float|1,771,256|95|
|Function returning functions|1,738,168|96|
|Function returning arrow functions|1,740,856|95|
|Function returning empty object|1,758,313|95|
|Function returning empty array|1,790,263|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1758078.6417244864,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1774507.6708418028,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1783167.3326335307,"samples":5},{"name":"Function returning string","opsSec":1699947.6942179722,"samples":5},{"name":"Function returning integer","opsSec":1795917.2570271299,"samples":5},{"name":"Function returning float","opsSec":1771255.785890043,"samples":5},{"name":"Function returning functions","opsSec":1738168.159838799,"samples":5},{"name":"Function returning arrow functions","opsSec":1740856.2819786498,"samples":6},{"name":"Function returning empty object","opsSec":1758313.2619859877,"samples":5},{"name":"Function returning empty array","opsSec":1790262.641078447,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|825,152,543|97|
|using Array.includes (first item)|825,589,123|96|
|Using raw comparison|826,968,683|96|
|Using raw comparison (first item)|827,085,476|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"using Array.includes","opsSec":825152542.6667063,"samples":6},{"name":"using Array.includes (first item)","opsSec":825589122.710746,"samples":8},{"name":"Using raw comparison","opsSec":826968683.3030281,"samples":7},{"name":"Using raw comparison (first item)","opsSec":827085475.5419201,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|96,525,310|91|
|Using Object.getOwnPropertyNames()|98,468,014|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":96525310.19799636,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":98468014.27237278,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|906,191,607|99|
|Length = 10_000 - Array.at|906,374,203|100|
|Length = 1_000_000 - Array.at|906,330,287|97|
|Length = 100 - Array[length - 1]|825,645,769|97|
|Length = 10_000 - Array[length - 1]|824,096,684|100|
|Length = 1_000_000 - Array[length - 1]|825,989,114|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":906191606.7099653,"samples":9},{"name":"Length = 10_000 - Array.at","opsSec":906374203.1624742,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":906330286.7522161,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":825645769.1473738,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":824096683.8783512,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":825989114.1311703,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|88,030,056|93|
|Object.create({})|2,442,771|78|
|Cached Empty.prototype|826,564,084|100|
|Empty.prototype|2,450,604|79|
|Empty class|1,524,021|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":88030056.17338052,"samples":7},{"name":"Object.create({})","opsSec":2442770.9522424657,"samples":3},{"name":"Cached Empty.prototype","opsSec":826564083.8375082,"samples":6},{"name":"Empty.prototype","opsSec":2450604.4516225234,"samples":3},{"name":"Empty class","opsSec":1524021.338425353,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|826,546,925|100|
|Using optional chain (obj.field?.field2) (undefined)|827,072,262|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|826,681,178|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|826,401,378|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":826546924.5372735,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":827072262.060481,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":826681178.2748749,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":826401377.9236037,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|823,674,426|94|
|Using parseInt(x, 10) - big number (10 len)|825,517,193|94|
|Using + - small number (2 len)|827,250,516|95|
|Using + - big number (10 len)|826,159,454|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":823674426.2257408,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":825517193.3030456,"samples":7},{"name":"Using + - small number (2 len)","opsSec":827250515.8084037,"samples":7},{"name":"Using + - big number (10 len)","opsSec":826159453.5299639,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,294,028|84|
|Using ? operator to avoid rejection|1,354,855|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using if to check function existence","opsSec":1294027.6515743118,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1354854.5284629152,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|821,342,563|98|
|Raw usage underscore usage|820,686,077|96|
|Manipulating private properties using #|813,876,347|94|
|Manipulating private properties using underscore(_)|815,581,849|97|
|Manipulating private properties using Symbol|812,985,641|94|
|Manipulating private properties using PrivateSymbol|49,982,427|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":821342563.4777734,"samples":7},{"name":"Raw usage underscore usage","opsSec":820686076.6888596,"samples":8},{"name":"Manipulating private properties using #","opsSec":813876346.928886,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":815581848.6277207,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":812985640.9692434,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":49982426.90460132,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,059,663|90|
|Adding property in the object creation - small object|5,186,229|93|
|Adding property after the function creation - small class|267,060|88|
|Adding property in the function creation - small class|270,513|89|
|Adding property after the class creation - small class|228,037|85|
|Adding property in the class creation - small class|226,240|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5059662.936137498,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5186229.254426773,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":267060.1212411771,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":270513.37801999965,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":228037.20362982253,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":226240.2810058991,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|826,057,658|98|
|Getter|89,409,124|95|
|Method|824,143,565|95|
|DefineProperty (getter)|823,980,707|97|
|DefineProperty (getter & enumerable=false)|89,751,788|99|
|DefineProperty (getter & configurable=false)|823,827,826|95|
|DefineProperty (getter & enumerable=false & configurable=false)|89,624,354|94|
|DefineProperty (writable)|825,054,470|97|
|DefineProperty (writable & enumerable=false)|826,514,827|99|
|DefineProperty (writable & enumerable=false & configurable=false)|827,016,412|99|
|DefineProperties (getter)|90,285,673|96|
|DefineProperties (getter & enumerable=false)|71,080,658|79|
|DefineProperties (getter & enumerable=false & configurable=false)|55,433,081|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Getter (class)","opsSec":826057657.8734856,"samples":6},{"name":"Getter","opsSec":89409124.27581047,"samples":7},{"name":"Method","opsSec":824143565.3531018,"samples":6},{"name":"DefineProperty (getter)","opsSec":823980707.3974905,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":89751788.22528927,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":823827826.4302897,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":89624354.24442597,"samples":5},{"name":"DefineProperty (writable)","opsSec":825054470.43199,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":826514827.0910897,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":827016412.1926733,"samples":7},{"name":"DefineProperties (getter)","opsSec":90285672.5680333,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":71080658.34511052,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55433080.65318801,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|781,198,361|97|
|Setter|11,795,393|92|
|Method|784,306,445|98|
|DefineProperty (setter)|787,963,798|100|
|DefineProperty (setter & enumerable=false)|11,878,989|95|
|DefineProperty (setter & configurable=false)|11,907,207|91|
|DefineProperty (setter & enumerable=false & configurable=false)|12,079,501|95|
|DefineProperty (writable)|758,273,060|91|
|DefineProperty (writable & enumerable=false)|787,321,758|95|
|DefineProperty (writable & enumerable=false & configurable=false)|788,661,409|98|
|DefineProperties (setter)|794,879,892|97|
|DefineProperties (setter & enumerable=false)|11,305,172|90|
|DefineProperties (setter & enumerable=false & configurable=false)|10,919,313|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":781198361.0221204,"samples":6},{"name":"Setter","opsSec":11795393.289378595,"samples":6},{"name":"Method","opsSec":784306445.4804481,"samples":9},{"name":"DefineProperty (setter)","opsSec":787963798.3209372,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11878988.810024539,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":11907206.847061248,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12079500.685088268,"samples":4},{"name":"DefineProperty (writable)","opsSec":758273059.8627577,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":787321757.8292335,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":788661409.0795926,"samples":9},{"name":"DefineProperties (setter)","opsSec":794879892.0383996,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11305172.04439787,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10919313.06201768,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,281,509|95|
|Using replaceAll()|2,834,053|93|
|Using replaceAll(//g)|3,049,065|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using replace(//g)","opsSec":3281508.8882570975,"samples":4},{"name":"Using replaceAll()","opsSec":2834052.8108113594,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3049064.776454398,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,211,969|93|
|{ ...object, __proto__: null }|26,876,258|95|
|{ ...object, newProp: true }|845,380|92|
|structuredClone|253,750|95|
|JSON.parse + JSON.stringify|174,184|97|
|loop + object.keys starting with {}|1,457,271|94|
|loop + object.keys starting with { __proto__: null }|769,030|93|
|loop + object.keys starting with { randomProp: true }|613,058|94|
|object.keys + reduce(FN, {})|570,548|96|
|object.keys + reduce(FN, { __proto__: null })|774,853|95|
|object.keys + reduce(FN, { newProp: true })|617,300|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26211969.145927154,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":26876257.516975548,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":845380.4132052643,"samples":3},{"name":"structuredClone","opsSec":253749.7535141092,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":174183.79884858854,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1457271.0823472533,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":769029.9985283656,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":613058.4815872835,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":570548.3417061786,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":774852.7203878431,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":617300.1514280981,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|257,508|94|
|Sort using first char|1,396,805|94|
|Sort using localeCompare|1,294,248|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Sort using default","opsSec":257507.72094100938,"samples":4},{"name":"Sort using first char","opsSec":1396805.0468806503,"samples":6},{"name":"Sort using localeCompare","opsSec":1294247.8425584615,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,191|88|
|{...smallObject} - Total keys: 2|105,080,144|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,264|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,085|94|
|{ ...bigObject, ...anotherBigObject }|1,316|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,070|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,471,486|94|
|{ ...smallObject, ...anotherSmallObject }|25,081,598|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2191.297394669498,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105080144.48824868,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1263.7258298696117,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6084.579081440129,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1315.5348572676419,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931070.463881228,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37471485.7899704,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25081597.68965937,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,284|87|
|streams.web.Readable reading 1e3 * "some data"|579|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2284.0581862309928,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":579.3084816655061,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,632|94|
|streams.web.WritableStream writing 1e3 * "some data"|1,047|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:36:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6631.77076987607,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1047.2931859367748,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|854,169,820|100|
|Using backtick (`)|854,605,223|98|
|Using array.join|12,860,634|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:43:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":854169819.9200343,"samples":6},{"name":"Using backtick (`)","opsSec":854605223.1797024,"samples":7},{"name":"Using array.join","opsSec":12860634.350154098,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|854,565,943|98|
|Using indexof|855,246,484|99|
|Using RegExp.test|16,058,804|101|
|Using RegExp.text with cached regex pattern|16,505,920|99|
|Using new RegExp.test|4,681,797|96|
|Using new RegExp.test with cached regex pattern|5,476,575|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:55:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":854565942.6195331,"samples":6},{"name":"Using indexof","opsSec":855246483.9977725,"samples":7},{"name":"Using RegExp.test","opsSec":16058804.447682038,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":16505919.959932378,"samples":6},{"name":"Using new RegExp.test","opsSec":4681796.866863197,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5476574.834936297,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|850,096,340|100|
|Using this|853,611,577|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:08:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":850096340.1115507,"samples":7},{"name":"Using this","opsSec":853611577.18909,"samples":8}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,218,475|93|
|Date.now()|25,403,805|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:16:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":12218475.19811108,"samples":5},{"name":"Date.now()","opsSec":25403805.145554494,"samples":5}]}-->
