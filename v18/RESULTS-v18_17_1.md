## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,379,920|99|
|Using dot notation|847,423,699|99|
|Using define property (writable)|4,392,885|100|
|Using define property initialized (writable)|5,993,589|98|
|Using define property (getter)|2,259,359|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:53:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":847379919.9204516,"samples":6},{"name":"Using dot notation","opsSec":847423699.3247547,"samples":7},{"name":"Using define property (writable)","opsSec":4392884.794741179,"samples":7},{"name":"Using define property initialized (writable)","opsSec":5993589.393736493,"samples":5},{"name":"Using define property (getter)","opsSec":2259359.415473058,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.007ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.258ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|32.105ms
new Array(length)|1,000,000|5.829ms
array.push|100,000,000|1,912.485ms
new Array(length)|100,000,000|3,875.563ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.488ms
new Array(length)|10,000|3.226ms
array.push|1,000,000|277.558ms
new Array(length)|1,000,000|4.498ms
array.push|100,000,000|2,215.924ms
new Array(length)|100,000,000|4,197.715ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|306|86|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:09:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":306.1053142752302,"samples":3},{"name":"Array.from","opsSec":21.64148388893145,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|848,302,785|99|
|[async] async function|17,182,390|88|
|[async] function|303,902|32|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:15:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":848302785.4545801,"samples":7},{"name":"[async] async function","opsSec":17182390.387785655,"samples":6},{"name":"[async] function","opsSec":303902.077938215,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,636|83|
|new Blob (1024)|599|79|
|text (128)|49,702|88|
|text (1024)|32,494|82|
|arrayBuffer (128)|50,131|87|
|arrayBuffer (1024)|32,528|77|
|slice (0, 64)|93,307|85|
|slice (0, 512)|55,999|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:24:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4635.916555044053,"samples":3},{"name":"new Blob (1024)","opsSec":599.4580205385046,"samples":2},{"name":"text (128)","opsSec":49702.08472059349,"samples":5},{"name":"text (1024)","opsSec":32493.964446013968,"samples":3},{"name":"arrayBuffer (128)","opsSec":50130.658069387486,"samples":4},{"name":"arrayBuffer (1024)","opsSec":32528.270411855374,"samples":3},{"name":"slice (0, 64)","opsSec":93306.50410282041,"samples":3},{"name":"slice (0, 512)","opsSec":55998.88455612108,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|241,386|53|
|[True conditional] Using constructor name|180,413|95|
|[True conditional] Check if property is valid then instanceof |184,270|96|
|[False conditional] Using instanceof only|847,857,251|98|
|[False conditional] Using constructor name|848,004,989|98|
|[False conditional] Check if property is valid then instanceof |845,864,780|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:39:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":241386.07504362086,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":180412.98930188353,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":184270.42837647116,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":847857250.506875,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848004988.5038116,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845864779.8353766,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,704|95|
|crypto.verify('RSA-SHA256')|6,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:51:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6704.393863703143,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":6751.604956096172,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,590,578|95|
|fromUnixToISOString(new Date())|2,082,956|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:01:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2590578.154439389,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2082955.9066769383,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,030|87|
|Intl.DateTimeFormat().format(new Date())|16,958|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,540|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,813|78|
|Reusing Intl.DateTimeFormat()|689,258|99|
|Date.toLocaleDateString()|708,900|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,320|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18030.313691915086,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16957.79621994293,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17540.327144492545,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17812.877530158865,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":689258.159832502,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":708899.7203070669,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19320.23080322655,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,021,372|98|
|Using brackets {}|1,053,909|96|
|Using '' + |1,020,180|94|
|Using date.toString()|1,133,160|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:24:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1021372.4312051972,"samples":6},{"name":"Using brackets {}","opsSec":1053908.5735699637,"samples":4},{"name":"Using '' + ","opsSec":1020180.082876438,"samples":6},{"name":"Using date.toString()","opsSec":1133159.625870271,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,385,876|97|
|Using delete property (proto: null)|22,877,829|97|
|Using delete property (cached proto: null)|3,352,440|92|
|Using undefined assignment|845,357,927|99|
|Using undefined assignment (proto: null)|25,757,557|95|
|Using undefined property (cached proto: null)|844,588,037|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:34:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3385875.5259383176,"samples":6},{"name":"Using delete property (proto: null)","opsSec":22877829.12316185,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3352440.455920644,"samples":7},{"name":"Using undefined assignment","opsSec":845357926.5966681,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25757557.107978426,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":844588036.6691691,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|230,601|53|
|NodeError|178,315|97|
|NodeError Range|175,546|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:45:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":230600.8253884414,"samples":3},{"name":"NodeError","opsSec":178314.7012962127,"samples":3},{"name":"NodeError Range","opsSec":175546.31135225092,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,732,413|98|
|Function returning explicitly undefined|1,720,723|97|
|Function returning implicitly undefined|1,774,686|98|
|Function returning string|1,588,507|100|
|Function returning integer|1,739,796|93|
|Function returning float|1,747,188|97|
|Function returning functions|1,703,601|93|
|Function returning arrow functions|1,694,204|92|
|Function returning empty object|1,742,591|96|
|Function returning empty array|1,732,185|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1732412.6852733106,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1720723.2551671637,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1774686.0512034327,"samples":5},{"name":"Function returning string","opsSec":1588506.7526970494,"samples":9},{"name":"Function returning integer","opsSec":1739796.1365314862,"samples":5},{"name":"Function returning float","opsSec":1747188.4245436084,"samples":6},{"name":"Function returning functions","opsSec":1703600.6143422038,"samples":4},{"name":"Function returning arrow functions","opsSec":1694204.3566362844,"samples":5},{"name":"Function returning empty object","opsSec":1742591.0968536937,"samples":6},{"name":"Function returning empty array","opsSec":1732185.0017664402,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,177,433|99|
|using Array.includes (first item)|848,036,206|97|
|Using raw comparison|848,735,321|98|
|Using raw comparison (first item)|847,391,852|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:14:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847177432.8921969,"samples":8},{"name":"using Array.includes (first item)","opsSec":848036205.8582162,"samples":8},{"name":"Using raw comparison","opsSec":848735320.7634144,"samples":7},{"name":"Using raw comparison (first item)","opsSec":847391851.7958301,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|94,284,619|96|
|Using Object.getOwnPropertyNames()|94,801,768|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:25:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":94284619.09455726,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":94801767.87824053,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,135,337|99|
|Length = 10_000 - Array.at|27,200,316|94|
|Length = 1_000_000 - Array.at|26,770,248|96|
|Length = 100 - Array[length - 1]|846,650,909|101|
|Length = 10_000 - Array[length - 1]|845,155,568|98|
|Length = 1_000_000 - Array[length - 1]|842,931,878|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:36:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27135336.764652956,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":27200316.170272958,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":26770248.25897284,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":846650909.2896446,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845155568.1907703,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":842931877.7061819,"samples":8}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,071,682|96|
|Object.create({})|1,511,002|89|
|Cached Empty.prototype|848,636,358|98|
|Empty.prototype|1,635,393|87|
|Empty class|946,367|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77071681.5224479,"samples":5},{"name":"Object.create({})","opsSec":1511002.2184664237,"samples":3},{"name":"Cached Empty.prototype","opsSec":848636357.8210123,"samples":10},{"name":"Empty.prototype","opsSec":1635392.5336648256,"samples":5},{"name":"Empty class","opsSec":946367.2943644682,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|590,419,090|95|
|Using optional chain (obj.field?.field2) (undefined)|592,243,151|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|592,371,618|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,025,512|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":590419090.081836,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":592243151.3022157,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":592371617.9682833,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592025511.558404,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,292,441|79|
|Using parseInt(x, 10) - big number (10 len)|11,603,862|87|
|Using + - small number (2 len)|701,114,233|86|
|Using + - big number (10 len)|701,052,382|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142292440.63735244,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11603862.094019089,"samples":6},{"name":"Using + - small number (2 len)","opsSec":701114233.2855191,"samples":6},{"name":"Using + - big number (10 len)","opsSec":701052381.8984606,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|458,576|69|
|Using ? operator to avoid rejection|506,710|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:19:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":458576.2345438182,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":506710.0183175374,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|190,899,304|87|
|Raw usage underscore usage|188,025,577|87|
|Manipulating private properties using #|132,513,728|87|
|Manipulating private properties using underscore(_)|116,101,621|88|
|Manipulating private properties using Symbol|114,432,008|90|
|Manipulating private properties using PrivateSymbol|21,994,638|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Raw usage private field","opsSec":190899303.53976476,"samples":6},{"name":"Raw usage underscore usage","opsSec":188025576.67739332,"samples":8},{"name":"Manipulating private properties using #","opsSec":132513727.71410877,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":116101621.03221332,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":114432008.34074138,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":21994638.02908857,"samples":9}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|1,971,818|94|
|Adding property in the object creation - small object|1,968,366|95|
|Adding property after the function creation - small class|144,371|83|
|Adding property in the function creation - small class|144,808|85|
|Adding property after the class creation - small class|116,681|83|
|Adding property in the class creation - small class|116,703|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":1971818.0000372601,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":1968366.2304761787,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":144371.0890259159,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":144808.24494086122,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":116681.47146821507,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":116702.72757156339,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|710,713,517|88|
|Getter|51,187,790|84|
|Method|717,775,003|86|
|DefineProperty (getter)|730,529,734|87|
|DefineProperty (getter & enumerable=false)|52,524,768|87|
|DefineProperty (getter & configurable=false)|738,519,587|88|
|DefineProperty (getter & enumerable=false & configurable=false)|51,248,729|86|
|DefineProperty (writable)|741,930,312|90|
|DefineProperty (writable & enumerable=false)|260,590,692|36|
|DefineProperty (writable & enumerable=false & configurable=false)|712,278,864|91|
|DefineProperties (getter)|51,706,172|85|
|DefineProperties (getter & enumerable=false)|52,790,525|87|
|DefineProperties (getter & enumerable=false & configurable=false)|51,454,785|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Getter (class)","opsSec":710713516.8381191,"samples":6},{"name":"Getter","opsSec":51187790.15054272,"samples":7},{"name":"Method","opsSec":717775003.050625,"samples":8},{"name":"DefineProperty (getter)","opsSec":730529733.9800127,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":52524768.15641603,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":738519587.2314054,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51248728.997690775,"samples":8},{"name":"DefineProperty (writable)","opsSec":741930311.9637858,"samples":5},{"name":"DefineProperty (writable & enumerable=false)","opsSec":260590692.2786555,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":712278863.825875,"samples":8},{"name":"DefineProperties (getter)","opsSec":51706171.53541699,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52790524.77257173,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51454784.79801917,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|574,432,109|95|
|Setter|8,478,350|98|
|Method|579,424,153|99|
|DefineProperty (setter)|581,694,744|97|
|DefineProperty (setter & enumerable=false)|8,320,480|98|
|DefineProperty (setter & configurable=false)|8,546,883|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,380,402|97|
|DefineProperty (writable)|591,992,814|98|
|DefineProperty (writable & enumerable=false)|591,969,194|98|
|DefineProperty (writable & enumerable=false & configurable=false)|161,088,182|28|
|DefineProperties (setter)|85,817,780|78|
|DefineProperties (setter & enumerable=false)|8,112,184|98|
|DefineProperties (setter & enumerable=false & configurable=false)|8,446,178|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:36:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":574432108.930753,"samples":7},{"name":"Setter","opsSec":8478349.653379401,"samples":8},{"name":"Method","opsSec":579424153.2007114,"samples":9},{"name":"DefineProperty (setter)","opsSec":581694744.1954932,"samples":10},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8320480.360345151,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8546882.718272807,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8380401.969373344,"samples":7},{"name":"DefineProperty (writable)","opsSec":591992813.8743993,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":591969193.7759646,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":161088182.05958992,"samples":7},{"name":"DefineProperties (setter)","opsSec":85817779.70074746,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8112183.673647817,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8446178.352311116,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,077,486|96|
|Using replaceAll()|1,980,680|94|
|Using replaceAll(//g)|1,871,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using replace(//g)","opsSec":2077486.4414756002,"samples":7},{"name":"Using replaceAll()","opsSec":1980679.5865625276,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1871504.8311220962,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,162,872|92|
|{ ...object, __proto__: null }|15,474,037|95|
|{ ...object, newProp: true }|453,568|84|
|structuredClone|178,788|96|
|JSON.parse + JSON.stringify|147,156|95|
|loop + object.keys starting with {}|674,385|98|
|loop + object.keys starting with { __proto__: null }|432,615|91|
|loop + object.keys starting with { randomProp: true }|317,947|98|
|object.keys + reduce(FN, {})|303,312|94|
|object.keys + reduce(FN, { __proto__: null })|432,158|97|
|object.keys + reduce(FN, { newProp: true })|314,198|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15162872.357371971,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15474037.223964296,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":453567.7910222224,"samples":3},{"name":"structuredClone","opsSec":178787.9792468986,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":147155.6268740268,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":674384.8814762434,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":432614.5533573679,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":317946.535072462,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":303312.1787749182,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":432157.5299577947,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":314198.0434268242,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|172,227|95|
|Sort using first char|745,727|97|
|Sort using localeCompare|668,428|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:47:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Sort using default","opsSec":172226.6862340683,"samples":5},{"name":"Sort using first char","opsSec":745727.2330928337,"samples":8},{"name":"Sort using localeCompare","opsSec":668427.9014134366,"samples":8}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,173|89|
|{...smallObject} - Total keys: 2|54,320,182|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,137|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,244|91|
|{ ...bigObject, ...anotherBigObject }|751|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,784,350|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,327,309|94|
|{ ...smallObject, ...anotherSmallObject }|9,840,031|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1172.711498439369,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54320181.80201864,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1137.0445018726912,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3244.4830959731457,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":750.5228880834187,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6784350.256868666,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":15327309.096785385,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9840031.11165301,"samples":9}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,017|72|
|streams.web.Readable reading 1e3 * "some data"|360|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:54:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1016.7525650215764,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":360.3161596961441,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|3,018|86|
|streams.web.WritableStream writing 1e3 * "some data"|829|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:00:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":3017.9142661253472,"samples":9},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":829.4419610836002,"samples":2}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|707,499,503|97|
|Using backtick (`)|709,995,201|96|
|Using array.join|6,170,833|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:05:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using + sign","opsSec":707499502.8134934,"samples":7},{"name":"Using backtick (`)","opsSec":709995200.5279809,"samples":6},{"name":"Using array.join","opsSec":6170833.03048464,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|705,764,714|97|
|Using indexof|712,172,496|99|
|Using RegExp.test|11,654,762|97|
|Using RegExp.text with cached regex pattern|12,454,898|94|
|Using new RegExp.test|3,026,078|92|
|Using new RegExp.test with cached regex pattern|3,561,968|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":705764713.7092154,"samples":10},{"name":"Using indexof","opsSec":712172496.4821588,"samples":7},{"name":"Using RegExp.test","opsSec":11654761.932480443,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":12454897.624667134,"samples":5},{"name":"Using new RegExp.test","opsSec":3026078.310625579,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3561968.027697518,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|108,702,143|93|
|Using this|113,283,360|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using super","opsSec":108702142.77125645,"samples":7},{"name":"Using this","opsSec":113283359.97063817,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,359,214|93|
|Date.now()|15,231,443|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7359214.147970316,"samples":6},{"name":"Date.now()","opsSec":15231443.150928186,"samples":6}]}-->
