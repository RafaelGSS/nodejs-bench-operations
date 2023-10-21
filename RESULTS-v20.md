## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,425,960|96|
|Using dot notation|715,431,223|98|
|Using define property (writable)|3,158,485|91|
|Using define property initialized (writable)|4,124,274|91|
|Using define property (getter)|1,669,905|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714425960.3726394,"samples":6},{"name":"Using dot notation","opsSec":715431223.2614391,"samples":6},{"name":"Using define property (writable)","opsSec":3158485.3118226384,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4124274.4847405734,"samples":6},{"name":"Using define property (getter)","opsSec":1669905.1233866913,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.022ms
new Array(length)|10|0.006ms
array.push|100|0.041ms
new Array(length)|100|0.011ms
array.push|1,000|0.072ms
new Array(length)|1,000|0.036ms
array.push|10,000|0.528ms
new Array(length)|10,000|0.616ms
array.push|1,000,000|40.347ms
new Array(length)|1,000,000|7.215ms
array.push|100,000,000|2,051.566ms
new Array(length)|100,000,000|4,803.633ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.018ms
array.push|100|0.069ms
new Array(length)|100|0.013ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.03ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.393ms
array.push|1,000,000|24.236ms
new Array(length)|1,000,000|4.373ms
array.push|100,000,000|2,096.211ms
new Array(length)|100,000,000|5,407.064ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|329|81|
|Array.from|16|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":329.2566294027517,"samples":4},{"name":"Array.from","opsSec":15.674287175202183,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,912|83|
|new Blob (1024)|352|67|
|text (128)|3,430|82|
|text (1024)|424|85|
|arrayBuffer (128)|3,428|83|
|arrayBuffer (1024)|426|82|
|slice (0, 64)|43,105|64|
|slice (0, 512)|12,776|63|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":2911.658774610719,"samples":4},{"name":"new Blob (1024)","opsSec":352.1933195930236,"samples":2},{"name":"text (128)","opsSec":3429.679092337315,"samples":4},{"name":"text (1024)","opsSec":424.28466901974,"samples":2},{"name":"arrayBuffer (128)","opsSec":3427.71113732267,"samples":4},{"name":"arrayBuffer (1024)","opsSec":425.7806231370435,"samples":2},{"name":"slice (0, 64)","opsSec":43105.14147472552,"samples":3},{"name":"slice (0, 512)","opsSec":12775.629227151767,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,557|59|
|[True conditional] Using constructor name|126,362|90|
|[True conditional] Check if property is valid then instanceof |125,636|90|
|[False conditional] Using instanceof only|616,996,643|91|
|[False conditional] Using constructor name|621,757,676|89|
|[False conditional] Check if property is valid then instanceof |633,709,186|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":156556.8227807308,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":126362.10984656894,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":125636.30812340691,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":616996643.0776935,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":621757675.8649681,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":633709185.6713152,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,972|93|
|crypto.verify('RSA-SHA256')|4,942|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4971.696072174688,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4942.071958221702,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|773,480|81|
|fromUnixToISOString(new Date())|1,331,801|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":773479.5256467701,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1331800.582203007,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,163|82|
|Intl.DateTimeFormat().format(new Date())|11,078|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,731|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,753|74|
|Reusing Intl.DateTimeFormat()|594,243|99|
|Date.toLocaleDateString()|548,351|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,248|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12163.35852829241,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11077.888661067645,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13730.665629938809,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":13753.365408648624,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":594243.3229724745,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":548351.4226388264,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14247.989598081624,"samples":8},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|695,382|94|
|Using brackets {}|704,913|97|
|Using '' + |711,340|92|
|Using date.toString()|770,662|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":695382.1095053023,"samples":5},{"name":"Using brackets {}","opsSec":704912.642720235,"samples":3},{"name":"Using '' + ","opsSec":711340.4802767121,"samples":5},{"name":"Using date.toString()","opsSec":770662.1511189259,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,744,454|96|
|Using delete property (proto: null)|14,866,876|95|
|Using delete property (cached proto: null)|2,764,277|99|
|Using undefined assignment|596,938,140|95|
|Using undefined assignment (proto: null)|15,781,740|98|
|Using undefined property (cached proto: null)|601,322,020|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2744453.621034274,"samples":5},{"name":"Using delete property (proto: null)","opsSec":14866876.000449091,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2764276.617822917,"samples":6},{"name":"Using undefined assignment","opsSec":596938140.399758,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":15781739.704478145,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":601322019.8550787,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|174,167|56|
|NodeError|142,221|91|
|NodeError Range|143,183|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Error","opsSec":174167.2132415695,"samples":3},{"name":"NodeError","opsSec":142220.51068815912,"samples":3},{"name":"NodeError Range","opsSec":143182.77984279854,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,222,733|96|
|Function returning explicitly undefined|1,219,198|98|
|Function returning implicitly undefined|1,244,644|97|
|Function returning string|1,219,073|98|
|Function returning integer|1,256,713|97|
|Function returning float|1,230,152|97|
|Function returning functions|1,176,317|91|
|Function returning arrow functions|1,203,183|98|
|Function returning empty object|1,232,115|99|
|Function returning empty array|1,239,640|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Function returning null","hz":1222732.663274091,"cycles":6,"stats":{"deviation":3.461188046344372e-8,"mean":8.178402606194526e-7,"moe":6.923818104180835e-9,"rme":0.8465978550550399,"sem":3.53256025723512e-9,"variance":1.197982269215717e-15}},{"name":"Function returning explicitly undefined","hz":1219198.250485173,"cycles":6,"stats":{"deviation":9.264965894117252e-9,"mean":8.202111507312741e-7,"moe":1.83436965913387e-9,"rme":0.22364602791590976,"sem":9.35902887313199e-10,"variance":8.583959301915587e-17}},{"name":"Function returning implicitly undefined","hz":1244643.9933821133,"cycles":6,"stats":{"deviation":2.913016813813121e-8,"mean":8.034425950850942e-7,"moe":5.797132083714816e-9,"rme":0.721536562683838,"sem":2.957720450874906e-9,"variance":8.485666957557946e-16}},{"name":"Function returning string","hz":1219073.3215668993,"cycles":6,"stats":{"deviation":1.597837746158914e-8,"mean":8.202952048156382e-7,"moe":3.1635573355254326e-9,"rme":0.38566083489863184,"sem":1.6140598650639963e-9,"variance":2.553085463050198e-16}},{"name":"Function returning integer","hz":1256712.7963945381,"cycles":6,"stats":{"deviation":3.0244790479281173e-9,"mean":7.957267586269213e-7,"moe":6.018950677567955e-10,"rme":0.07564092337367224,"sem":3.0708932028407935e-10,"variance":9.147473511356172e-18}},{"name":"Function returning float","hz":1230152.003075861,"cycles":6,"stats":{"deviation":8.394171174319518e-9,"mean":8.129076711655218e-7,"moe":1.6705059442188163e-9,"rme":0.2054976233430909,"sem":8.522989511320491e-10,"variance":7.046210970377673e-17}},{"name":"Function returning functions","hz":1176317.4272967055,"cycles":6,"stats":{"deviation":2.2338775141305716e-8,"mean":8.501106731863179e-7,"moe":4.589810253307976e-9,"rme":0.539907378895128,"sem":2.341739925157131e-9,"variance":4.990208748138182e-16}},{"name":"Function returning arrow functions","hz":1203182.544878931,"cycles":5,"stats":{"deviation":5.295530290780423e-9,"mean":8.311290786724502e-7,"moe":1.0484615060050899e-9,"rme":0.12614905830028006,"sem":5.349293397985152e-10,"variance":2.804264106057299e-17}},{"name":"Function returning empty object","hz":1232114.8147604493,"cycles":6,"stats":{"deviation":4.627562729571202e-9,"mean":8.116126744198123e-7,"moe":9.115716049978266e-10,"rme":0.11231608792327827,"sem":4.650875535703197e-10,"variance":2.141433681611647e-17}},{"name":"Function returning empty array","hz":1239640.416040725,"cycles":6,"stats":{"deviation":1.0551308497301724e-8,"mean":8.06685541274856e-7,"moe":2.0997932014959065e-9,"rme":0.2602988517901872,"sem":1.0713230619877075e-9,"variance":1.1133011100523155e-16}}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,236,078|97|
|using Array.includes (first item)|597,714,401|96|
|Using raw comparison|600,396,085|96|
|Using raw comparison (first item)|599,357,053|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":595236078.1609837,"cycles":9,"stats":{"deviation":2.6259628846978085e-11,"mean":1.6800056930177314e-9,"moe":5.225872235731826e-12,"rme":0.3110627694567384,"sem":2.666261344761136e-12,"variance":6.895681071810436e-22}},{"name":"using Array.includes (first item)","hz":597714401.0183437,"cycles":6,"stats":{"deviation":2.7026834437766786e-11,"mean":1.6730398302203701e-9,"moe":5.4064928883753945e-12,"rme":0.3231538658385234,"sem":2.758414738967038e-12,"variance":7.304497797264567e-22}},{"name":"Using raw comparison","hz":600396084.6851969,"cycles":8,"stats":{"deviation":7.141152030560656e-12,"mean":1.6655671572614031e-9,"moe":1.428527923125277e-12,"rme":0.08576825719078922,"sem":7.288407771047331e-13,"variance":5.099605232358058e-23}},{"name":"Using raw comparison (first item)","hz":599357052.869794,"cycles":6,"stats":{"deviation":2.3521427262491792e-11,"mean":1.6684545467712094e-9,"moe":4.705265409899364e-12,"rme":0.28201340090474664,"sem":2.400645617295594e-12,"variance":5.532575404646921e-22}}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|63,978,805|92|
|Using Object.getOwnPropertyNames()|55,733,510|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":63978804.88729479,"cycles":6,"stats":{"deviation":1.0272129962218972e-9,"mean":1.5630176302317654e-8,"moe":2.0990494169864064e-10,"rme":1.3429467309816319,"sem":1.0709435800951053e-10,"variance":1.0551665396071672e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":55733509.74397907,"cycles":8,"stats":{"deviation":1.0081052105745563e-9,"mean":1.7942526939244675e-8,"moe":2.0944351966234936e-10,"rme":1.167302244391482,"sem":1.0685893860323948e-10,"variance":1.0162761155875706e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|742,760,460|92|
|Length = 10_000 - Array.at|721,549,372|92|
|Length = 1_000_000 - Array.at|746,605,158|92|
|Length = 100 - Array[length - 1]|749,501,467|92|
|Length = 10_000 - Array[length - 1]|712,313,472|89|
|Length = 1_000_000 - Array[length - 1]|720,404,465|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":742760459.5930015,"cycles":8,"stats":{"deviation":5.895112417356526e-11,"mean":1.3463290716201478e-9,"moe":1.204631593275568e-11,"rme":0.8947527158616105,"sem":6.146079557528408e-12,"variance":3.4752350413271095e-21}},{"name":"Length = 10_000 - Array.at","hz":721549372.0758866,"cycles":6,"stats":{"deviation":6.665245966028805e-11,"mean":1.3859065487411001e-9,"moe":1.362003860009722e-11,"rme":0.9827530299549487,"sem":6.948999285763888e-12,"variance":4.442550378766325e-21}},{"name":"Length = 1_000_000 - Array.at","hz":746605158.0791011,"cycles":6,"stats":{"deviation":5.701044519645763e-11,"mean":1.3393960504811465e-9,"moe":1.1649749583766888e-11,"rme":0.869776312957022,"sem":5.943749787636168e-12,"variance":3.2501908614982986e-21}},{"name":"Length = 100 - Array[length - 1]","hz":749501466.7592814,"cycles":9,"stats":{"deviation":6.388069370977898e-11,"mean":1.3342202041629515e-9,"moe":1.3053644510084947e-11,"rme":0.9783725706862909,"sem":6.660022709227014e-12,"variance":4.080743028842595e-21}},{"name":"Length = 10_000 - Array[length - 1]","hz":712313471.7910709,"cycles":5,"stats":{"deviation":8.159860497056998e-11,"mean":1.4038762982897937e-9,"moe":1.6952892262935002e-11,"rme":1.2075773544711215,"sem":8.649434828028062e-12,"variance":6.658332333143129e-21}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":720404464.6186366,"cycles":6,"stats":{"deviation":9.671476182362303e-11,"mean":1.3881091096921143e-9,"moe":2.009341872967865e-11,"rme":1.4475388562312235,"sem":1.0251744249836046e-11,"variance":9.353745154600132e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,627,991|96|
|Object.create({})|1,322,354|72|
|Cached Empty.prototype|711,925,056|96|
|Empty.prototype|1,344,542|71|
|Empty class|951,005|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48627991.31797011,"cycles":6,"stats":{"deviation":9.815997819680536e-10,"mean":2.056428762317512e-8,"moe":1.9636085212499773e-10,"rme":0.9548633812323604,"sem":1.0018410822703965e-10,"variance":9.635381319597303e-19}},{"name":"Object.create({})","hz":1322354.1990874482,"cycles":3,"stats":{"deviation":1.3607376152750757e-7,"mean":7.56227038633141e-7,"moe":3.143143530910284e-8,"rme":4.156349046433762,"sem":1.603644658627696e-8,"variance":1.8516068576244997e-14}},{"name":"Cached Empty.prototype","hz":711925055.5346539,"cycles":6,"stats":{"deviation":8.122958728863064e-11,"mean":1.4046422333724474e-9,"moe":1.6249301671377615e-11,"rme":1.1568284994794853,"sem":8.29046003641715e-12,"variance":6.598245851081265e-21}},{"name":"Empty.prototype","hz":1344542.487627896,"cycles":3,"stats":{"deviation":9.601832596842078e-8,"mean":7.437474153488791e-7,"moe":2.2334746469520864e-8,"rme":3.0030015578667952,"sem":1.1395278810980033e-8,"variance":9.21951892177791e-15}},{"name":"Empty class","hz":951004.5566284336,"cycles":3,"stats":{"deviation":1.0069023410244462e-7,"mean":0.0000010515196725715683,"moe":2.1928095426754608e-8,"rme":2.085371866902675,"sem":1.1187803789160514e-8,"variance":1.0138523243605101e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|678,165,746|89|
|Using optional chain (obj.field?.field2) (undefined)|685,522,885|81|
|Using and operator (obj.field && obj.field.field2) (Valid)|700,782,718|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|703,384,841|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":678165746.249717,"cycles":7,"stats":{"deviation":8.92402436731499e-11,"mean":1.4745657761838296e-9,"moe":1.8540515944538818e-11,"rme":1.2573542831382944,"sem":9.459446910478988e-12,"variance":7.96382109084317e-21}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":685522885.4595311,"cycles":8,"stats":{"deviation":1.0746279929577959e-10,"mean":1.458740504818688e-9,"moe":2.3403009624414223e-11,"rme":1.6043298686165615,"sem":1.19403110328644e-11,"variance":1.1548253232485006e-20}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":700782718.0004581,"cycles":8,"stats":{"deviation":7.808012154528801e-11,"mean":1.426975829046267e-9,"moe":1.6042640663204637e-11,"rme":1.124240532786522,"sem":8.185020746532979e-12,"variance":6.096505380526949e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":703384840.9795094,"cycles":5,"stats":{"deviation":7.642079355382855e-11,"mean":1.4216968318615378e-9,"moe":1.570170878217598e-11,"rme":1.1044343934857417,"sem":8.01107590927346e-12,"variance":5.840137687396883e-21}}]}-->
