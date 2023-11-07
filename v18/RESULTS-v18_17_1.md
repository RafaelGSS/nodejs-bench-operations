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
|Using optional chain (obj.field?.field2) (Valid)|845,112,251|99|
|Using optional chain (obj.field?.field2) (undefined)|846,587,302|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,780,966|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|843,642,457|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:59:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":845112251.1615843,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":846587301.8667779,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847780966.4067353,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":843642457.447107,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|283,582,242|94|
|Using parseInt(x, 10) - big number (10 len)|21,076,756|99|
|Using + - small number (2 len)|848,666,522|95|
|Using + - big number (10 len)|848,489,694|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:08:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":283582242.0978211,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21076755.95933576,"samples":6},{"name":"Using + - small number (2 len)","opsSec":848666521.9084295,"samples":8},{"name":"Using + - big number (10 len)","opsSec":848489693.7719563,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|755,380|80|
|Using ? operator to avoid rejection|798,242|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":755379.875944661,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":798241.7980714084,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|347,492,153|91|
|Raw usage underscore usage|361,769,460|92|
|Manipulating private properties using #|249,860,853|91|
|Manipulating private properties using underscore(_)|232,271,340|85|
|Manipulating private properties using Symbol|236,363,634|85|
|Manipulating private properties using PrivateSymbol|50,830,401|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:31:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":347492153.10093975,"samples":5},{"name":"Raw usage underscore usage","opsSec":361769459.5800787,"samples":6},{"name":"Manipulating private properties using #","opsSec":249860852.77347627,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":232271339.77288246,"samples":12},{"name":"Manipulating private properties using Symbol","opsSec":236363634.29883948,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50830400.83860934,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,835,770|99|
|Adding property in the object creation - small object|3,843,707|100|
|Adding property after the function creation - small class|195,100|86|
|Adding property in the function creation - small class|195,281|91|
|Adding property after the class creation - small class|162,925|85|
|Adding property in the class creation - small class|163,918|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:38:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3835769.65025451,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3843706.676579327,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":195099.71818512073,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":195281.47995835668,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":162924.7998336819,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":163917.57301310933,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|846,839,366|100|
|Getter|99,388,732|96|
|Method|848,493,837|96|
|DefineProperty (getter)|848,079,757|98|
|DefineProperty (getter & enumerable=false)|99,788,143|98|
|DefineProperty (getter & configurable=false)|848,284,926|99|
|DefineProperty (getter & enumerable=false & configurable=false)|99,297,024|96|
|DefineProperty (writable)|848,008,632|94|
|DefineProperty (writable & enumerable=false)|849,269,499|97|
|DefineProperty (writable & enumerable=false & configurable=false)|822,133,673|98|
|DefineProperties (getter)|64,328,409|87|
|DefineProperties (getter & enumerable=false)|99,261,396|96|
|DefineProperties (getter & enumerable=false & configurable=false)|99,407,008|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:57:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":846839366.237708,"samples":6},{"name":"Getter","opsSec":99388731.50815906,"samples":6},{"name":"Method","opsSec":848493837.4003291,"samples":7},{"name":"DefineProperty (getter)","opsSec":848079757.4015173,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99788142.74441493,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848284925.5327342,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":99297023.62080581,"samples":6},{"name":"DefineProperty (writable)","opsSec":848008632.4774224,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849269499.3158195,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":822133673.3193537,"samples":6},{"name":"DefineProperties (getter)","opsSec":64328409.04842937,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":99261395.96174552,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":99407007.9808195,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|837,463,070|99|
|Setter|12,298,574|98|
|Method|840,209,593|95|
|DefineProperty (setter)|836,526,141|99|
|DefineProperty (setter & enumerable=false)|11,964,395|98|
|DefineProperty (setter & configurable=false)|11,910,251|98|
|DefineProperty (setter & enumerable=false & configurable=false)|12,158,764|94|
|DefineProperty (writable)|847,212,462|99|
|DefineProperty (writable & enumerable=false)|847,888,080|100|
|DefineProperty (writable & enumerable=false & configurable=false)|759,110,901|94|
|DefineProperties (setter)|847,263,305|99|
|DefineProperties (setter & enumerable=false)|12,106,630|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,230,873|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":837463069.9789054,"samples":6},{"name":"Setter","opsSec":12298573.929095024,"samples":4},{"name":"Method","opsSec":840209593.006974,"samples":7},{"name":"DefineProperty (setter)","opsSec":836526141.2567295,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11964395.282391323,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11910250.887427762,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12158763.79304588,"samples":5},{"name":"DefineProperty (writable)","opsSec":847212462.3164654,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":847888079.6332977,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":759110901.4776801,"samples":8},{"name":"DefineProperties (setter)","opsSec":847263305.1039709,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12106629.63266382,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11230873.244725624,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,483,242|93|
|Using replaceAll()|3,141,227|100|
|Using replaceAll(//g)|3,109,224|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:36:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3483242.021324182,"samples":4},{"name":"Using replaceAll()","opsSec":3141227.0617199005,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3109223.6998293535,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,175,908|90|
|{ ...object, __proto__: null }|27,628,691|100|
|{ ...object, newProp: true }|650,303|85|
|structuredClone|258,694|99|
|JSON.parse + JSON.stringify|207,571|96|
|loop + object.keys starting with {}|522,722|97|
|loop + object.keys starting with { __proto__: null }|794,824|97|
|loop + object.keys starting with { randomProp: true }|553,260|99|
|object.keys + reduce(FN, {})|527,971|94|
|object.keys + reduce(FN, { __proto__: null })|778,498|96|
|object.keys + reduce(FN, { newProp: true })|532,471|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:49:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27175907.81702423,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":27628691.081347786,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":650302.8006044526,"samples":3},{"name":"structuredClone","opsSec":258694.1660459079,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":207570.5325478689,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":522721.53039502254,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":794824.1128549366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553260.3512072372,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":527971.3241878118,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":778497.6417797894,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":532471.4666353541,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|269,901|99|
|Sort using first char|1,349,852|100|
|Sort using localeCompare|1,202,126|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:03:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":269900.8578224063,"samples":6},{"name":"Sort using first char","opsSec":1349852.1369369964,"samples":5},{"name":"Sort using localeCompare","opsSec":1202126.1318200722,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,932|90|
|{...smallObject} - Total keys: 2|107,739,221|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,163|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,154|99|
|{ ...bigObject, ...anotherBigObject }|1,182|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,271,488|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,951,201|99|
|{ ...smallObject, ...anotherSmallObject }|23,665,508|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:15:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1932.117256271365,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":107739221.33942808,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2162.8635141079476,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6154.080735216951,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1181.5337930535807,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14271488.364398675,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35951200.77872754,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23665507.51499659,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,554|88|
|streams.web.Readable reading 1e3 * "some data"|538|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:26:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2553.6035156214384,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":538.3111501493255,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,234|93|
|streams.web.WritableStream writing 1e3 * "some data"|1,124|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:35:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5233.569044595799,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1124.4495030251048,"samples":5}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,029,673|100|
|Using backtick (`)|848,483,942|100|
|Using array.join|12,358,292|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:42:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848029672.6499901,"samples":6},{"name":"Using backtick (`)","opsSec":848483941.7737613,"samples":8},{"name":"Using array.join","opsSec":12358291.689901778,"samples":7}]}-->

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
