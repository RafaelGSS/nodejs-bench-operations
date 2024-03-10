## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,903,863|98|
|Using dot notation|820,292,038|96|
|Using define property (writable)|4,484,252|96|
|Using define property initialized (writable)|5,761,706|93|
|Using define property (getter)|2,366,994|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821903862.8002962,"samples":6},{"name":"Using dot notation","opsSec":820292038.15731,"samples":7},{"name":"Using define property (writable)","opsSec":4484252.163715559,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5761705.756406169,"samples":4},{"name":"Using define property (getter)","opsSec":2366993.843300415,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|21.914ms
new Array(length)|1,000,000|15.264ms
array.push|100,000,000|996.186ms
new Array(length)|100,000,000|3,560.546ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.011ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.259ms
new Array(length)|10,000|3.303ms
array.push|1,000,000|77.083ms
new Array(length)|1,000,000|3.178ms
array.push|100,000,000|1,421.376ms
new Array(length)|100,000,000|3,983.216ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|585|87|
|Array.from|21|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":585.1569233829887,"samples":3},{"name":"Array.from","opsSec":21.45298300970701,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,454,787|97|
|[async] async function|16,638,530|85|
|[async] function|282,008|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822454787.4152462,"samples":6},{"name":"[async] async function","opsSec":16638529.62999609,"samples":6},{"name":"[async] function","opsSec":282007.6160876214,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,361|88|
|new Blob (1024)|695|80|
|text (128)|28,689|74|
|text (1024)|14,376|81|
|arrayBuffer (128)|31,789|79|
|arrayBuffer (1024)|15,895|85|
|slice (0, 64)|86,706|81|
|slice (0, 512)|25,446|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5360.802506208578,"samples":3},{"name":"new Blob (1024)","opsSec":695.0597449049833,"samples":2},{"name":"text (128)","opsSec":28689.302605589786,"samples":4},{"name":"text (1024)","opsSec":14375.685499536075,"samples":3},{"name":"arrayBuffer (128)","opsSec":31789.18773578854,"samples":4},{"name":"arrayBuffer (1024)","opsSec":15894.810247575926,"samples":3},{"name":"slice (0, 64)","opsSec":86705.52154139224,"samples":3},{"name":"slice (0, 512)","opsSec":25446.4529853938,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,877|50|
|[True conditional] Using constructor name|192,405|94|
|[True conditional] Check if property is valid then instanceof |195,710|92|
|[False conditional] Using instanceof only|819,261,113|99|
|[False conditional] Using constructor name|818,295,597|92|
|[False conditional] Check if property is valid then instanceof |817,903,851|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250876.67026197742,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":192404.86310178667,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":195709.78927668274,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819261113.3317771,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":818295597.4619901,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":817903851.4387497,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,073|95|
|crypto.verify('RSA-SHA256')|2,966|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3072.6257890965376,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":2965.980092717068,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,472,580|91|
|fromUnixToISOString(new Date())|2,157,863|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2472580.4481011815,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2157862.9459255924,"samples":7}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,729|79|
|Intl.DateTimeFormat().format(new Date())|9,360|95|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,194|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,046|86|
|Reusing Intl.DateTimeFormat()|622,911|93|
|Date.toLocaleDateString()|627,023|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,164|77|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10729.13188654966,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9359.986839125171,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12193.749972451466,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14045.671671956847,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":622911.1592700528,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":627023.3641963374,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13164.414946373108,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

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
|Using replace(//g)|3,547,914|98|
|Using replaceAll()|3,304,514|98|
|Using replaceAll(//g)|3,262,712|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:36:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3547914.467913774,"samples":4},{"name":"Using replaceAll()","opsSec":3304514.0830329736,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3262711.8420515987,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,078,746|94|
|{ ...object, __proto__: null }|27,906,988|96|
|{ ...object, newProp: true }|785,490|87|
|structuredClone|257,824|99|
|JSON.parse + JSON.stringify|205,041|98|
|loop + object.keys starting with {}|522,519|86|
|loop + object.keys starting with { __proto__: null }|770,644|99|
|loop + object.keys starting with { randomProp: true }|553,947|99|
|object.keys + reduce(FN, {})|552,375|100|
|object.keys + reduce(FN, { __proto__: null })|772,278|98|
|object.keys + reduce(FN, { newProp: true })|556,592|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27078745.814329524,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":27906987.721196555,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":785490.142747378,"samples":3},{"name":"structuredClone","opsSec":257824.44688748237,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":205040.85524927778,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":522518.7513525922,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":770644.2162993173,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553946.9542502546,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":552375.192070828,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":772278.311225852,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":556591.7304697784,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|257,437|92|
|Sort using first char|1,341,205|95|
|Sort using localeCompare|1,101,705|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:02:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":257437.26007376617,"samples":4},{"name":"Sort using first char","opsSec":1341205.163088258,"samples":8},{"name":"Sort using localeCompare","opsSec":1101704.6491874377,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,947|92|
|{...smallObject} - Total keys: 2|102,843,954|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,238|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,505|100|
|{ ...bigObject, ...anotherBigObject }|1,146|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,247,372|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,189,847|97|
|{ ...smallObject, ...anotherSmallObject }|23,709,580|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:12:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1947.0039974562274,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":102843953.88273686,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2238.250676221611,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.94567658573,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1145.6793780360272,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14247372.150956646,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35189846.63721258,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23709580.2064692,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,644|88|
|streams.web.Readable reading 1e3 * "some data"|517|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:24:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2643.9184284065586,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":517.1221207665229,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,399|96|
|streams.web.WritableStream writing 1e3 * "some data"|1,014|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:34:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4399.097896323375,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1014.0653992916618,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,126,819|99|
|Using backtick (`)|848,812,599|99|
|Using array.join|12,124,749|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:42:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848126819.3001086,"samples":6},{"name":"Using backtick (`)","opsSec":848812598.8244013,"samples":6},{"name":"Using array.join","opsSec":12124748.889825933,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,777,029|99|
|Using indexof|847,651,139|94|
|Using RegExp.test|16,155,902|100|
|Using RegExp.text with cached regex pattern|16,761,242|100|
|Using new RegExp.test|4,412,602|97|
|Using new RegExp.test with cached regex pattern|5,092,002|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:52:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":16777028.704962563,"samples":4},{"name":"Using indexof","opsSec":847651138.9475245,"samples":6},{"name":"Using RegExp.test","opsSec":16155901.7751239,"samples":10},{"name":"Using RegExp.text with cached regex pattern","opsSec":16761241.557073602,"samples":7},{"name":"Using new RegExp.test","opsSec":4412601.553944595,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5092001.686833273,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|28,580,533|99|
|Using this|159,644,353|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:07:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":28580532.745673392,"samples":6},{"name":"Using this","opsSec":159644352.77209178,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,905,601|97|
|Date.now()|22,499,760|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:14:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10905600.935648855,"samples":4},{"name":"Date.now()","opsSec":22499760.431089103,"samples":5}]}-->
