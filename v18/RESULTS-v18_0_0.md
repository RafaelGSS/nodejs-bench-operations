## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,396,695|99|
|Using dot notation|847,639,100|100|
|Using define property (writable)|4,764,877|98|
|Using define property initialized (writable)|5,976,802|98|
|Using define property (getter)|2,346,974|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:51:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848396694.7441775,"samples":6},{"name":"Using dot notation","opsSec":847639100.1376154,"samples":7},{"name":"Using define property (writable)","opsSec":4764877.284685347,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5976802.162373027,"samples":5},{"name":"Using define property (getter)","opsSec":2346973.9777646894,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.018ms
new Array(length)|100|0.009ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|32.406ms
new Array(length)|1,000,000|5.591ms
array.push|100,000,000|1,896.927ms
new Array(length)|100,000,000|3,836.322ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.461ms
new Array(length)|10,000|3.191ms
array.push|1,000,000|251.127ms
new Array(length)|1,000,000|4.478ms
array.push|100,000,000|2,244.195ms
new Array(length)|100,000,000|4,161.845ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|303|87|
|Array.from|20|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:08:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":303.3287543651004,"samples":4},{"name":"Array.from","opsSec":20.32127470051274,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|847,535,453|99|
|[async] async function|17,250,776|88|
|[async] function|187,561|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:14:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":847535452.7953986,"samples":7},{"name":"[async] async function","opsSec":17250775.806734253,"samples":7},{"name":"[async] function","opsSec":187560.69326310797,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,527|84|
|new Blob (1024)|582|77|
|text (128)|37,787|87|
|text (1024)|16,110|82|
|arrayBuffer (128)|43,362|88|
|arrayBuffer (1024)|17,620|82|
|slice (0, 64)|74,190|85|
|slice (0, 512)|21,941|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:27:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4526.756416746185,"samples":5},{"name":"new Blob (1024)","opsSec":582.0777593726007,"samples":2},{"name":"text (128)","opsSec":37786.95236175153,"samples":4},{"name":"text (1024)","opsSec":16109.974370661848,"samples":3},{"name":"arrayBuffer (128)","opsSec":43362.30134442238,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17620.427349138965,"samples":4},{"name":"slice (0, 64)","opsSec":74189.76495523694,"samples":3},{"name":"slice (0, 512)","opsSec":21941.328938736657,"samples":6}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|242,012|50|
|[True conditional] Using constructor name|182,699|99|
|[True conditional] Check if property is valid then instanceof |185,372|95|
|[False conditional] Using instanceof only|848,781,357|95|
|[False conditional] Using constructor name|849,843,022|97|
|[False conditional] Check if property is valid then instanceof |849,258,607|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:38:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":242011.88526538163,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":182698.6580897176,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":185371.7823296182,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848781357.438104,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":849843022.4887562,"samples":10},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":849258607.4868615,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,108|97|
|crypto.verify('RSA-SHA256')|2,093|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:50:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2108.445408687214,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":2092.6753916899975,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,570,130|98|
|fromUnixToISOString(new Date())|2,118,306|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:01:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2570129.5224817046,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2118306.321508058,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,203|86|
|Intl.DateTimeFormat().format(new Date())|10,290|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,724|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,556|96|
|Reusing Intl.DateTimeFormat()|532,034|100|
|Date.toLocaleDateString()|644,606|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,052|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13203.188589158699,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10289.707978855853,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13723.920220780174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15556.429773724463,"samples":7},{"name":"Reusing Intl.DateTimeFormat()","opsSec":532033.6480908742,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":644605.7265612734,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14052.361807136815,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,155|96|
|Using brackets {}|1,017,932|96|
|Using '' + |1,011,409|97|
|Using date.toString()|1,120,095|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:23:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":995154.9231939685,"samples":6},{"name":"Using brackets {}","opsSec":1017932.0398728173,"samples":5},{"name":"Using '' + ","opsSec":1011408.6893305867,"samples":7},{"name":"Using date.toString()","opsSec":1120095.005792838,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,476,514|97|
|Using delete property (proto: null)|21,903,859|96|
|Using delete property (cached proto: null)|3,515,428|98|
|Using undefined assignment|847,083,193|97|
|Using undefined assignment (proto: null)|25,040,174|95|
|Using undefined property (cached proto: null)|844,823,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3476513.6280086054,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21903859.26242696,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3515428.05424562,"samples":7},{"name":"Using undefined assignment","opsSec":847083192.5919515,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25040174.433300395,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":844823110.4042964,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,248|50|
|NodeError|178,548|94|
|NodeError Range|178,877|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":235248.39240552415,"samples":3},{"name":"NodeError","opsSec":178548.157072026,"samples":3},{"name":"NodeError Range","opsSec":178876.54809548543,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,915,636|94|
|Function returning explicitly undefined|1,923,690|94|
|Function returning implicitly undefined|1,978,612|95|
|Function returning string|1,937,015|99|
|Function returning integer|1,888,414|98|
|Function returning float|1,952,582|97|
|Function returning functions|1,896,174|96|
|Function returning arrow functions|1,635,333|97|
|Function returning empty object|1,957,180|100|
|Function returning empty array|1,678,160|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:00:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1915636.4431936732,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1923690.0382367373,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1978611.811232684,"samples":8},{"name":"Function returning string","opsSec":1937015.0995271993,"samples":9},{"name":"Function returning integer","opsSec":1888414.4185109471,"samples":7},{"name":"Function returning float","opsSec":1952581.8240767533,"samples":7},{"name":"Function returning functions","opsSec":1896174.4784068987,"samples":10},{"name":"Function returning arrow functions","opsSec":1635332.7296354542,"samples":8},{"name":"Function returning empty object","opsSec":1957180.1904315152,"samples":6},{"name":"Function returning empty array","opsSec":1678160.0845767388,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|118,904,522|98|
|using Array.includes (first item)|130,865,723|92|
|Using raw comparison|849,023,502|98|
|Using raw comparison (first item)|848,043,812|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:15:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":118904521.81247999,"samples":5},{"name":"using Array.includes (first item)","opsSec":130865722.95387892,"samples":6},{"name":"Using raw comparison","opsSec":849023501.8829561,"samples":8},{"name":"Using raw comparison (first item)","opsSec":848043812.3697596,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,049,892|94|
|Using Object.getOwnPropertyNames()|94,124,384|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:25:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":92049891.74516839,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":94124384.03647603,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,088,186|99|
|Length = 10_000 - Array.at|26,292,926|97|
|Length = 1_000_000 - Array.at|26,301,927|100|
|Length = 100 - Array[length - 1]|845,718,958|92|
|Length = 10_000 - Array[length - 1]|845,356,867|100|
|Length = 1_000_000 - Array[length - 1]|845,917,738|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:35:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26088186.36408932,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26292925.574929684,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26301926.731045373,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":845718958.1017936,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845356866.7499095,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845917737.5339876,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,778,009|96|
|Object.create({})|1,989,370|87|
|Cached Empty.prototype|845,982,728|96|
|Empty.prototype|2,152,255|88|
|Empty class|1,322,309|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:48:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78778008.72230054,"samples":5},{"name":"Object.create({})","opsSec":1989370.2646492273,"samples":3},{"name":"Cached Empty.prototype","opsSec":845982727.5361638,"samples":6},{"name":"Empty.prototype","opsSec":2152255.0629298207,"samples":3},{"name":"Empty class","opsSec":1322309.0071050287,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,992,312|97|
|Using optional chain (obj.field?.field2) (undefined)|847,371,927|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,106,836|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,583,535|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846992311.7054302,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847371926.6308289,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":849106835.7390113,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845583535.4366314,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|309,240,077|94|
|Using parseInt(x, 10) - big number (10 len)|20,609,748|93|
|Using + - small number (2 len)|846,549,160|95|
|Using + - big number (10 len)|847,969,361|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:08:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":309240077.4090514,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20609748.029467814,"samples":6},{"name":"Using + - small number (2 len)","opsSec":846549159.920924,"samples":6},{"name":"Using + - big number (10 len)","opsSec":847969361.2829858,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|570,904|71|
|Using ? operator to avoid rejection|640,785|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using if to check function existence","opsSec":570904.329101975,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":640785.3763807961,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|187,025,602|91|
|Raw usage underscore usage|173,810,857|84|
|Manipulating private properties using #|129,488,739|86|
|Manipulating private properties using underscore(_)|117,868,439|84|
|Manipulating private properties using Symbol|118,753,834|83|
|Manipulating private properties using PrivateSymbol|25,005,805|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":187025602.32200372,"samples":9},{"name":"Raw usage underscore usage","opsSec":173810857.27239618,"samples":6},{"name":"Manipulating private properties using #","opsSec":129488738.5430051,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":117868439.01443897,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":118753834.16190329,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":25005804.951870862,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,051,810|88|
|Adding property in the object creation - small object|2,048,313|89|
|Adding property after the function creation - small class|137,857|79|
|Adding property in the function creation - small class|145,899|84|
|Adding property after the class creation - small class|114,833|78|
|Adding property in the class creation - small class|120,151|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2051809.9181268343,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2048312.6246504334,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":137856.83766816603,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":145899.26727186728,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":114833.40538944404,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":120151.27348922394,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|591,466,527|96|
|Getter|69,535,468|95|
|Method|592,087,258|97|
|DefineProperty (getter)|592,085,909|97|
|DefineProperty (getter & enumerable=false)|69,729,867|97|
|DefineProperty (getter & configurable=false)|592,990,816|98|
|DefineProperty (getter & enumerable=false & configurable=false)|69,833,000|98|
|DefineProperty (writable)|592,640,275|94|
|DefineProperty (writable & enumerable=false)|593,467,214|100|
|DefineProperty (writable & enumerable=false & configurable=false)|453,956,589|80|
|DefineProperties (getter)|44,174,344|90|
|DefineProperties (getter & enumerable=false)|69,871,166|97|
|DefineProperties (getter & enumerable=false & configurable=false)|69,743,205|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":591466526.5777628,"samples":6},{"name":"Getter","opsSec":69535467.85248336,"samples":8},{"name":"Method","opsSec":592087257.8198944,"samples":6},{"name":"DefineProperty (getter)","opsSec":592085909.4186918,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":69729866.79722854,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":592990816.4461273,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":69833000.05404428,"samples":5},{"name":"DefineProperty (writable)","opsSec":592640275.2718022,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":593467214.4413372,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":453956589.11946875,"samples":6},{"name":"DefineProperties (getter)","opsSec":44174343.85041053,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":69871166.17309487,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":69743204.60904191,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|390,092,017|95|
|Setter|5,775,377|98|
|Method|393,520,533|96|
|DefineProperty (setter)|392,503,642|97|
|DefineProperty (setter & enumerable=false)|4,974,967|97|
|DefineProperty (setter & configurable=false)|5,780,856|93|
|DefineProperty (setter & enumerable=false & configurable=false)|5,772,458|92|
|DefineProperty (writable)|586,263,960|94|
|DefineProperty (writable & enumerable=false)|587,211,477|94|
|DefineProperty (writable & enumerable=false & configurable=false)|378,248,384|64|
|DefineProperties (setter)|58,840,210|84|
|DefineProperties (setter & enumerable=false)|5,680,944|97|
|DefineProperties (setter & enumerable=false & configurable=false)|5,756,164|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":390092016.9162838,"samples":7},{"name":"Setter","opsSec":5775377.043844006,"samples":6},{"name":"Method","opsSec":393520532.836069,"samples":8},{"name":"DefineProperty (setter)","opsSec":392503642.0881593,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":4974967.471102991,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":5780855.764052864,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5772457.903412471,"samples":5},{"name":"DefineProperty (writable)","opsSec":586263960.1473362,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":587211477.1679869,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":378248383.8593871,"samples":11},{"name":"DefineProperties (setter)","opsSec":58840209.50863844,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5680943.652216309,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5756163.82062624,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,878,757|80|
|Using replaceAll()|1,670,350|85|
|Using replaceAll(//g)|1,706,969|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1878756.7692822092,"samples":5},{"name":"Using replaceAll()","opsSec":1670350.0002570818,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706969.1678437563,"samples":4}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,154,721|85|
|{ ...object, __proto__: null }|16,399,351|91|
|{ ...object, newProp: true }|453,791|81|
|structuredClone|166,048|89|
|JSON.parse + JSON.stringify|130,813|94|
|loop + object.keys starting with {}|762,840|90|
|loop + object.keys starting with { __proto__: null }|408,299|90|
|loop + object.keys starting with { randomProp: true }|306,260|89|
|object.keys + reduce(FN, {})|299,251|89|
|object.keys + reduce(FN, { __proto__: null })|409,084|90|
|object.keys + reduce(FN, { newProp: true })|306,664|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":16154720.537335247,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":16399350.984602844,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":453791.3948042042,"samples":3},{"name":"structuredClone","opsSec":166047.64264725012,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":130813.04303033708,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":762839.9065518312,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":408299.4515387518,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":306260.46799515,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":299250.8142834734,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":409084.4123669708,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":306664.28224030166,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,094|97|
|Sort using first char|920,610|93|
|Sort using localeCompare|797,131|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":188093.90659750102,"samples":6},{"name":"Sort using first char","opsSec":920610.3590537608,"samples":6},{"name":"Sort using localeCompare","opsSec":797131.3743392349,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,189|93|
|{...smallObject} - Total keys: 2|53,487,975|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,321|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,574|98|
|{ ...bigObject, ...anotherBigObject }|751|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,601,261|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,832,411|94|
|{ ...smallObject, ...anotherSmallObject }|11,384,434|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1188.6131542615838,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":53487975.210608415,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1320.5163802462264,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3573.5675112874255,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":751.1728937734348,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7601260.952532687,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16832411.207639217,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11384434.095536536,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,537|88|
|streams.web.Readable reading 1e3 * "some data"|342|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1537.1030659036683,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":341.83805554192486,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|2,790|89|
|streams.web.WritableStream writing 1e3 * "some data"|699|60|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":2789.9461318017925,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":699.0412240543526,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|710,237,171|95|
|Using backtick (`)|709,666,122|92|
|Using array.join|6,097,245|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":710237170.756094,"samples":6},{"name":"Using backtick (`)","opsSec":709666121.9725071,"samples":7},{"name":"Using array.join","opsSec":6097244.510806267,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,416,419|92|
|Using indexof|588,356,966|95|
|Using RegExp.test|9,866,735|95|
|Using RegExp.text with cached regex pattern|10,569,205|94|
|Using new RegExp.test|2,515,304|92|
|Using new RegExp.test with cached regex pattern|2,790,895|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10416418.63997306,"samples":6},{"name":"Using indexof","opsSec":588356966.0677289,"samples":7},{"name":"Using RegExp.test","opsSec":9866735.262199836,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":10569205.313924706,"samples":7},{"name":"Using new RegExp.test","opsSec":2515304.3492302345,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":2790895.482937912,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,543,034|87|
|Using this|142,689,800|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":14543033.594436701,"samples":6},{"name":"Using this","opsSec":142689800.04800996,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,347,548|96|
|Date.now()|15,420,928|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7347548.065973262,"samples":5},{"name":"Date.now()","opsSec":15420928.031221354,"samples":6}]}-->
