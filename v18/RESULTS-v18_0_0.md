## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|820,901,750|98|
|Using dot notation|819,508,212|93|
|Using define property (writable)|4,534,659|92|
|Using define property initialized (writable)|5,782,906|95|
|Using define property (getter)|2,386,628|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:20:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":820901750.0104984,"samples":6},{"name":"Using dot notation","opsSec":819508211.9192001,"samples":7},{"name":"Using define property (writable)","opsSec":4534659.154337075,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5782905.972288615,"samples":4},{"name":"Using define property (getter)","opsSec":2386627.660330976,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.343ms
new Array(length)|10,000|0.167ms
array.push|1,000,000|21.661ms
new Array(length)|1,000,000|14.9ms
array.push|100,000,000|1,054.956ms
new Array(length)|100,000,000|3,734.575ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.257ms
new Array(length)|10,000|3.272ms
array.push|1,000,000|76.082ms
new Array(length)|1,000,000|2.618ms
array.push|100,000,000|1,442.251ms
new Array(length)|100,000,000|4,116.794ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|578|87|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":577.9576699789616,"samples":3},{"name":"Array.from","opsSec":21.056365358441543,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|818,894,000|97|
|[async] async function|16,204,933|87|
|[async] function|274,398|26|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":818893999.9227709,"samples":6},{"name":"[async] async function","opsSec":16204933.239971623,"samples":6},{"name":"[async] function","opsSec":274398.1123098529,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,349|88|
|new Blob (1024)|695|80|
|text (128)|28,746|75|
|text (1024)|14,331|82|
|arrayBuffer (128)|33,412|80|
|arrayBuffer (1024)|16,221|85|
|slice (0, 64)|87,531|79|
|slice (0, 512)|26,146|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:29:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"new Blob (128)","opsSec":5348.593251162544,"samples":4},{"name":"new Blob (1024)","opsSec":695.2202963166253,"samples":2},{"name":"text (128)","opsSec":28746.265941190362,"samples":4},{"name":"text (1024)","opsSec":14331.377798421336,"samples":5},{"name":"arrayBuffer (128)","opsSec":33412.35158936201,"samples":3},{"name":"arrayBuffer (1024)","opsSec":16221.418647516442,"samples":5},{"name":"slice (0, 64)","opsSec":87531.18616036366,"samples":3},{"name":"slice (0, 512)","opsSec":26146.333656284096,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|244,350|53|
|[True conditional] Using constructor name|189,333|94|
|[True conditional] Check if property is valid then instanceof |193,859|95|
|[False conditional] Using instanceof only|821,025,533|97|
|[False conditional] Using constructor name|820,649,609|89|
|[False conditional] Check if property is valid then instanceof |822,401,271|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":244350.48383900916,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":189333.17785107042,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":193859.17534647367,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":821025533.1887647,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":820649608.7923503,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":822401271.4746181,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,997|93|
|crypto.verify('RSA-SHA256')|2,924|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:36:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2997.0360444333423,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":2924.317662986416,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,492,994|92|
|fromUnixToISOString(new Date())|2,115,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2492994.369263105,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2115925.244898756,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,032|82|
|Intl.DateTimeFormat().format(new Date())|9,472|95|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,302|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,934|80|
|Reusing Intl.DateTimeFormat()|630,291|80|
|Date.toLocaleDateString()|644,957|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,070|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10031.624076137003,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9472.137862218739,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14301.92230117457,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11934.045440145903,"samples":2},{"name":"Reusing Intl.DateTimeFormat()","opsSec":630291.231607622,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":644956.7054507355,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13069.504482067865,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,143|93|
|Using brackets {}|1,050,974|96|
|Using '' + |1,050,403|97|
|Using date.toString()|1,216,120|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:46:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1050143.2101354508,"samples":7},{"name":"Using brackets {}","opsSec":1050973.6540436838,"samples":6},{"name":"Using '' + ","opsSec":1050403.409917627,"samples":5},{"name":"Using date.toString()","opsSec":1216119.6228435673,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,484,477|93|
|Using delete property (proto: null)|21,341,795|99|
|Using delete property (cached proto: null)|3,536,818|96|
|Using undefined assignment|821,754,518|96|
|Using undefined assignment (proto: null)|23,575,129|96|
|Using undefined property (cached proto: null)|818,739,068|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3484477.3862336073,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21341795.04529854,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3536817.5535685522,"samples":5},{"name":"Using undefined assignment","opsSec":821754517.7006813,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23575129.33966795,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":818739067.962272,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,210|49|
|NodeError|182,196|94|
|NodeError Range|181,282|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:49:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Error","opsSec":235209.81827070878,"samples":3},{"name":"NodeError","opsSec":182195.76502083865,"samples":3},{"name":"NodeError Range","opsSec":181281.5822196676,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,826,501|98|
|Function returning explicitly undefined|1,819,348|94|
|Function returning implicitly undefined|1,851,070|96|
|Function returning string|1,838,496|97|
|Function returning integer|1,856,963|98|
|Function returning float|1,832,574|94|
|Function returning functions|1,814,705|97|
|Function returning arrow functions|1,758,195|95|
|Function returning empty object|1,836,932|98|
|Function returning empty array|1,830,927|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1826500.8358289502,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1819347.8491265227,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1851070.2187333314,"samples":6},{"name":"Function returning string","opsSec":1838495.55181576,"samples":6},{"name":"Function returning integer","opsSec":1856962.6726987318,"samples":6},{"name":"Function returning float","opsSec":1832574.0779063068,"samples":6},{"name":"Function returning functions","opsSec":1814704.828615302,"samples":5},{"name":"Function returning arrow functions","opsSec":1758195.4529079183,"samples":8},{"name":"Function returning empty object","opsSec":1836932.1208296998,"samples":7},{"name":"Function returning empty array","opsSec":1830927.266269937,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|104,338,928|94|
|using Array.includes (first item)|115,891,437|97|
|Using raw comparison|822,941,540|98|
|Using raw comparison (first item)|822,568,948|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":104338927.9102693,"samples":7},{"name":"using Array.includes (first item)","opsSec":115891437.13599564,"samples":7},{"name":"Using raw comparison","opsSec":822941540.1637625,"samples":9},{"name":"Using raw comparison (first item)","opsSec":822568948.2590978,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|91,670,760|94|
|Using Object.getOwnPropertyNames()|93,019,036|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:54:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using Object.keys()","opsSec":91670760.48426393,"samples":8},{"name":"Using Object.getOwnPropertyNames()","opsSec":93019036.19533639,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,400,041|99|
|Length = 10_000 - Array.at|23,455,166|98|
|Length = 1_000_000 - Array.at|23,445,206|97|
|Length = 100 - Array[length - 1]|821,914,453|100|
|Length = 10_000 - Array[length - 1]|822,039,928|98|
|Length = 1_000_000 - Array[length - 1]|822,160,484|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23400041.46623576,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":23455166.49322627,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23445205.6107281,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":821914452.9888554,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":822039928.0466238,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822160483.8839574,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,485,692|89|
|Object.create({})|2,051,934|86|
|Cached Empty.prototype|820,036,320|97|
|Empty.prototype|2,200,878|85|
|Empty class|1,309,156|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Object.create(null)","opsSec":77485692.2771885,"samples":5},{"name":"Object.create({})","opsSec":2051933.5220277382,"samples":3},{"name":"Cached Empty.prototype","opsSec":820036320.3164455,"samples":7},{"name":"Empty.prototype","opsSec":2200878.230134978,"samples":3},{"name":"Empty class","opsSec":1309155.7074626277,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|822,071,058|99|
|Using optional chain (obj.field?.field2) (undefined)|822,171,759|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|822,961,216|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,928,223|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":822071058.0241916,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":822171759.4196566,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":822961216.126323,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821928223.4930742,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|240,448,461|95|
|Using parseInt(x, 10) - big number (10 len)|18,448,903|98|
|Using + - small number (2 len)|822,986,406|95|
|Using + - big number (10 len)|822,247,714|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:00:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":240448461.42325005,"samples":8},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18448902.84157926,"samples":7},{"name":"Using + - small number (2 len)","opsSec":822986405.8594005,"samples":7},{"name":"Using + - big number (10 len)","opsSec":822247714.1938593,"samples":9}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|967,999|75|
|Using ? operator to avoid rejection|1,097,642|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using if to check function existence","opsSec":967999.0728885271,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1097641.740743685,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|516,502,422|85|
|Raw usage underscore usage|546,548,084|95|
|Manipulating private properties using #|392,658,411|86|
|Manipulating private properties using underscore(_)|318,524,888|95|
|Manipulating private properties using Symbol|317,448,360|89|
|Manipulating private properties using PrivateSymbol|46,482,178|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Raw usage private field","opsSec":516502421.5613708,"samples":7},{"name":"Raw usage underscore usage","opsSec":546548083.617838,"samples":10},{"name":"Manipulating private properties using #","opsSec":392658411.0181951,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":318524888.1961062,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":317448359.8593352,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":46482177.57916821,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,548,834|95|
|Adding property in the object creation - small object|3,529,734|95|
|Adding property after the function creation - small class|231,633|89|
|Adding property in the function creation - small class|235,363|92|
|Adding property after the class creation - small class|200,670|85|
|Adding property in the class creation - small class|201,743|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:05:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3548833.511445395,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":3529734.29513765,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":231633.4002453293,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":235362.5662761998,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":200670.39146698563,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":201743.3683801467,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|819,709,965|99|
|Getter|91,494,060|91|
|Method|817,955,722|98|
|DefineProperty (getter)|817,110,829|97|
|DefineProperty (getter & enumerable=false)|90,087,528|92|
|DefineProperty (getter & configurable=false)|818,090,378|97|
|DefineProperty (getter & enumerable=false & configurable=false)|90,613,797|96|
|DefineProperty (writable)|817,568,506|96|
|DefineProperty (writable & enumerable=false)|558,971,215|68|
|DefineProperty (writable & enumerable=false & configurable=false)|134,447,359|84|
|DefineProperties (getter)|57,005,616|90|
|DefineProperties (getter & enumerable=false)|91,599,840|97|
|DefineProperties (getter & enumerable=false & configurable=false)|91,554,399|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:08:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Getter (class)","opsSec":819709965.2710298,"samples":6},{"name":"Getter","opsSec":91494060.11837439,"samples":7},{"name":"Method","opsSec":817955721.6933646,"samples":6},{"name":"DefineProperty (getter)","opsSec":817110829.109404,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":90087527.64121275,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":818090378.2943256,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":90613797.2865207,"samples":6},{"name":"DefineProperty (writable)","opsSec":817568505.9505213,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":558971214.9445217,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":134447359.1799591,"samples":6},{"name":"DefineProperties (getter)","opsSec":57005615.57898212,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":91599839.8956991,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":91554398.72831331,"samples":7}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|777,354,083|99|
|Setter|9,464,535|94|
|Method|775,025,214|95|
|DefineProperty (setter)|780,726,110|93|
|DefineProperty (setter & enumerable=false)|9,867,644|96|
|DefineProperty (setter & configurable=false)|9,392,012|95|
|DefineProperty (setter & enumerable=false & configurable=false)|9,536,441|93|
|DefineProperty (writable)|817,946,450|94|
|DefineProperty (writable & enumerable=false)|819,847,123|97|
|DefineProperty (writable & enumerable=false & configurable=false)|787,814,013|95|
|DefineProperties (setter)|104,515,643|89|
|DefineProperties (setter & enumerable=false)|9,521,432|93|
|DefineProperties (setter & enumerable=false & configurable=false)|9,563,978|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":777354083.0701233,"samples":6},{"name":"Setter","opsSec":9464535.29509669,"samples":7},{"name":"Method","opsSec":775025213.9300258,"samples":7},{"name":"DefineProperty (setter)","opsSec":780726110.0709016,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9867643.991677513,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":9392012.4760889,"samples":7},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9536440.838168189,"samples":4},{"name":"DefineProperty (writable)","opsSec":817946450.4340818,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":819847122.6734043,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":787814013.2854455,"samples":8},{"name":"DefineProperties (setter)","opsSec":104515643.25055137,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":9521432.136503838,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9563978.258000279,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,335,515|95|
|Using replaceAll()|3,034,607|95|
|Using replaceAll(//g)|3,001,538|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:12:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3335515.1544438764,"samples":9},{"name":"Using replaceAll()","opsSec":3034607.3786557657,"samples":5},{"name":"Using replaceAll(//g)","opsSec":3001538.133579327,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,056,700|93|
|{ ...object, __proto__: null }|26,067,900|96|
|{ ...object, newProp: true }|742,988|89|
|structuredClone|241,125|94|
|JSON.parse + JSON.stringify|172,576|97|
|loop + object.keys starting with {}|1,214,472|94|
|loop + object.keys starting with { __proto__: null }|670,229|96|
|loop + object.keys starting with { randomProp: true }|553,284|98|
|object.keys + reduce(FN, {})|532,174|98|
|object.keys + reduce(FN, { __proto__: null })|677,756|96|
|object.keys + reduce(FN, { newProp: true })|544,927|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":25056700.094573002,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":26067899.512365855,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":742988.4686293519,"samples":3},{"name":"structuredClone","opsSec":241124.85764109564,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":172576.02883162824,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1214471.8466130863,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":670229.4992749435,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553284.4503844155,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":532174.1736430413,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":677755.9100560877,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":544926.5287231943,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|254,024|93|
|Sort using first char|1,249,431|95|
|Sort using localeCompare|1,123,011|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Sort using default","opsSec":254024.47823240948,"samples":4},{"name":"Sort using first char","opsSec":1249430.5715151075,"samples":6},{"name":"Sort using localeCompare","opsSec":1123010.9128935884,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,898|92|
|{...smallObject} - Total keys: 2|104,043,553|90|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,885|99|
|{ ...bigObject, ...anotherBigObject }|1,192|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,819,669|87|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|31,099,415|98|
|{ ...smallObject, ...anotherSmallObject }|22,403,383|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1897.83723054448,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":104043553.26113647,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.4893994463673,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5885.474380470575,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1191.5008342001627,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12819668.71873423,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":31099415.303187788,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22403382.75515182,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,476|84|
|streams.web.Readable reading 1e3 * "some data"|542|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:20:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2476.379559320445,"samples":7},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":541.505590034711,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,658|91|
|streams.web.WritableStream writing 1e3 * "some data"|1,650|62|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:21:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4657.7456322175985,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1650.3547174029677,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|822,068,163|99|
|Using backtick (`)|823,312,355|99|
|Using array.join|10,866,601|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:23:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Using + sign","opsSec":822068162.8964673,"samples":7},{"name":"Using backtick (`)","opsSec":823312355.223262,"samples":11},{"name":"Using array.join","opsSec":10866600.60489013,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,616,615|97|
|Using indexof|822,158,360|94|
|Using RegExp.test|16,166,701|100|
|Using RegExp.text with cached regex pattern|17,100,777|96|
|Using new RegExp.test|3,553,706|95|
|Using new RegExp.test with cached regex pattern|3,968,473|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:25:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using includes","opsSec":17616614.757002275,"samples":6},{"name":"Using indexof","opsSec":822158359.7076255,"samples":7},{"name":"Using RegExp.test","opsSec":16166700.834324373,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17100777.190722488,"samples":6},{"name":"Using new RegExp.test","opsSec":3553705.9938347293,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3968472.8468454434,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,925,315|82|
|Using this|165,145,953|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:27:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using super","opsSec":19925314.701577503,"samples":4},{"name":"Using this","opsSec":165145953.2739112,"samples":9}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,271,770|89|
|Date.now()|19,496,470|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:28:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().getTime()","opsSec":11271769.742088418,"samples":4},{"name":"Date.now()","opsSec":19496469.65697671,"samples":6}]}-->
