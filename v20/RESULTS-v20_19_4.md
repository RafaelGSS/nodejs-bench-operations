## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,445,149|44222580|
|Using dot notation|85,813,009|42985212|
|Using define property (writable)|4,478,334|2239173|
|Using define property initialized (writable)|5,990,453|2995231|
|Using define property (getter)|2,213,853|1120605|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44222580,"opsSec":88445149.03280151},{"name":"Using dot notation","samples":42985212,"opsSec":85813009.81617534},{"name":"Using define property (writable)","samples":2239173,"opsSec":4478334.3473740285},{"name":"Using define property initialized (writable)","samples":2995231,"opsSec":5990453.313842694},{"name":"Using define property (getter)","samples":1120605,"opsSec":2213853.951331469}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.096ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.287ms
new Array(length)|10,000|0.292ms
array.push|1,000,000|36.136ms
new Array(length)|1,000,000|8.379ms
array.push|10,000,000|248.266ms
new Array(length)|10,000,000|69.622ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.013ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.275ms
new Array(length)|10,000|0.233ms
array.push|1,000,000|27.439ms
new Array(length)|1,000,000|8.924ms
array.push|10,000,000|221.516ms
new Array(length)|10,000,000|68.901ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:59:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":120,"opsSec":238.17875471945743},{"name":"Array.from","samples":12,"opsSec":23.04655042699794}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,377|2195|
|new Blob (1024)|567|287|
|text (128)|4,505|2253|
|text (1024)|568|285|
|arrayBuffer (128)|4,444|2237|
|arrayBuffer (1024)|565|285|
|slice (0, 64)|62,439|31220|
|slice (0, 512)|24,349|12178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2195,"opsSec":4377.401802592924},{"name":"new Blob (1024)","samples":287,"opsSec":567.6690594609802},{"name":"text (128)","samples":2253,"opsSec":4505.9546160251075},{"name":"text (1024)","samples":285,"opsSec":568.9723085609418},{"name":"arrayBuffer (128)","samples":2237,"opsSec":4444.301329685687},{"name":"arrayBuffer (1024)","samples":285,"opsSec":565.395060772232},{"name":"slice (0, 64)","samples":31220,"opsSec":62439.208021085455},{"name":"slice (0, 512)","samples":12178,"opsSec":24349.500679977504}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.90 ms|1|
|Gzip|134.67 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:05:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133902145},{"name":"Gzip","samples":1,"totalTime":0.134671939}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,813|3407|
|crypto.verify('RSA-SHA256')|6,894|3448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:13:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3407,"opsSec":6813.33341071243},{"name":"crypto.verify('RSA-SHA256')","samples":3448,"opsSec":6894.1600865560995}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,384,190|692096|
|fromUnixToISOString(new Date())|2,146,796|1073548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":692096,"opsSec":1384190.8898789063},{"name":"fromUnixToISOString(new Date())","samples":1073548,"opsSec":2146796.423146336}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,524|9766|
|Intl.DateTimeFormat().format(new Date())|18,547|9277|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,478|9740|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,572|9291|
|Reusing Intl.DateTimeFormat()|405,562|202784|
|Date.toLocaleDateString()|956,062|478033|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,958|11480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9766,"opsSec":19524.713650211732},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9277,"opsSec":18547.835033495896},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9740,"opsSec":19478.99854572677},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9291,"opsSec":18572.010858239788},{"name":"Reusing Intl.DateTimeFormat()","samples":202784,"opsSec":405562.56140605157},{"name":"Date.toLocaleDateString()","samples":478033,"opsSec":956062.1317726149},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11480,"opsSec":22958.741815031055}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,073,475|536738|
|Using brackets {}|1,083,520|541821|
|Using '' + |1,103,505|551753|
|Using date.toString()|1,201,171|600587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":536738,"opsSec":1073475.8346847214},{"name":"Using brackets {}","samples":541821,"opsSec":1083520.6846900594},{"name":"Using '' + ","samples":551753,"opsSec":1103505.3445178252},{"name":"Using date.toString()","samples":600587,"opsSec":1201171.1099823094}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,812,518|1906506|
|Using delete property (proto: null)|16,995,964|8497984|
|Using delete property (cached proto: null)|3,815,936|1908745|
|Using undefined assignment|85,075,448|42541953|
|Using undefined assignment (proto: null)|16,945,279|8476165|
|Using undefined property (cached proto: null)|84,578,360|42304895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:29:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1906506,"opsSec":3812518.2178904912},{"name":"Using delete property (proto: null)","samples":8497984,"opsSec":16995964.532823235},{"name":"Using delete property (cached proto: null)","samples":1908745,"opsSec":3815936.486465122},{"name":"Using undefined assignment","samples":42541953,"opsSec":85075448.13924778},{"name":"Using undefined assignment (proto: null)","samples":8476165,"opsSec":16945279.780784965},{"name":"Using undefined property (cached proto: null)","samples":42304895,"opsSec":84578360.68117088}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|314,965|157483|
|NodeError|297,517|148759|
|NodeError Range|270,725|135392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:34:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":157483,"opsSec":314965.44944039435},{"name":"NodeError","samples":148759,"opsSec":297517.1247046191},{"name":"NodeError Range","samples":135392,"opsSec":270725.3213694944}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,000,333|36500345|
|using Array.includes (first item)|87,156,874|43595564|
|Using raw comparison|96,384,404|48201806|
|Using raw comparison (first item)|97,135,428|48567745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:37:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36500345,"opsSec":73000333.90437122},{"name":"using Array.includes (first item)","samples":43595564,"opsSec":87156874.30251662},{"name":"Using raw comparison","samples":48201806,"opsSec":96384404.51586808},{"name":"Using raw comparison (first item)","samples":48567745,"opsSec":97135428.80467986}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,851,652|21447917|
|Using Object.getOwnPropertyNames()|47,490,669|23755855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:41:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21447917,"opsSec":42851652.061252154},{"name":"Using Object.getOwnPropertyNames()","samples":23755855,"opsSec":47490669.63874192}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,344,782|49700380|
|Length = 10_000 - Array.at|95,684,054|47856119|
|Length = 1_000_000 - Array.at|99,120,155|49560125|
|Length = 100 - Array[length - 1]|99,670,566|49835975|
|Length = 10_000 - Array[length - 1]|97,929,295|48965024|
|Length = 1_000_000 - Array[length - 1]|98,568,256|49303645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:46:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49700380,"opsSec":99344782.79130927},{"name":"Length = 10_000 - Array.at","samples":47856119,"opsSec":95684054.64444071},{"name":"Length = 1_000_000 - Array.at","samples":49560125,"opsSec":99120155.04289147},{"name":"Length = 100 - Array[length - 1]","samples":49835975,"opsSec":99670566.97121271},{"name":"Length = 10_000 - Array[length - 1]","samples":48965024,"opsSec":97929295.3154362},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49303645,"opsSec":98568256.57612284}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,371,097|49685555|
|~ (small)|100,389,369|50202217|
|Math.floor (long)|93,790,177|46901783|
|~ (long)|101,754,003|50915168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":49685555,"opsSec":99371097.28049955},{"name":"~ (small)","samples":50202217,"opsSec":100389369.77195077},{"name":"Math.floor (long)","samples":46901783,"opsSec":93790177.63972229},{"name":"~ (long)","samples":50915168,"opsSec":101754003.60613081}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,503,388|18251759|
|Object.create({})|1,964,190|987607|
|new Function with empty prototype|83,251,167|41626944|
|Empty class|83,618,785|41811084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18251759,"opsSec":36503388.77800372},{"name":"Object.create({})","samples":987607,"opsSec":1964190.0970035926},{"name":"new Function with empty prototype","samples":41626944,"opsSec":83251167.18535404},{"name":"Empty class","samples":41811084,"opsSec":83618785.28566004}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,833,849|50440171|
|Using parseInt(x, 10) - big number (10 len)|102,532,759|51286585|
|Using + - small number (2 len)|101,614,953|50807485|
|Using + - big number (10 len)|102,044,894|51022453|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50440171,"opsSec":100833849.73023407},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":51286585,"opsSec":102532759.58372733},{"name":"Using + - small number (2 len)","samples":50807485,"opsSec":101614953.94483727},{"name":"Using + - big number (10 len)","samples":51022453,"opsSec":102044894.77506158}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|883,669|441835|
|Using ? operator to avoid rejection|1,002,937|501469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:03:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":441835,"opsSec":883669.0544741118},{"name":"Using ? operator to avoid rejection","samples":501469,"opsSec":1002937.2096854788}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|90,911,162|45455587|
|Raw usage underscore usage|97,279,875|48643766|
|Manipulating private properties using #|102,105,064|51052665|
|Manipulating private properties using underscore(_)|100,264,965|50132504|
|Manipulating private properties using Symbol|99,605,815|49803751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:06:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":45455587,"opsSec":90911162.18154891},{"name":"Raw usage underscore usage","samples":48643766,"opsSec":97279875.29557523},{"name":"Manipulating private properties using #","samples":51052665,"opsSec":102105064.52683224},{"name":"Manipulating private properties using underscore(_)","samples":50132504,"opsSec":100264965.48765463},{"name":"Manipulating private properties using Symbol","samples":49803751,"opsSec":99605815.07591587}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,649,805|3825013|
|Adding property in the object creation - small object|7,546,654|3773349|
|Adding property after the function creation - small class|234,633|117322|
|Adding property in the function creation - small class|245,958|123331|
|Adding property after the class creation - small class|238,247|119682|
|Adding property in the class creation - small class|232,766|118146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:10:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3825013,"opsSec":7649805.609100401},{"name":"Adding property in the object creation - small object","samples":3773349,"opsSec":7546654.274685132},{"name":"Adding property after the function creation - small class","samples":117322,"opsSec":234633.09613075663},{"name":"Adding property in the function creation - small class","samples":123331,"opsSec":245958.89697792096},{"name":"Adding property after the class creation - small class","samples":119682,"opsSec":238247.55433009015},{"name":"Adding property in the class creation - small class","samples":118146,"opsSec":232766.88426684172}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|100,656,532|50397038|
|Getter|53,583,007|26791522|
|Method|100,945,730|50473685|
|DefineProperty (getter)|94,129,053|47078598|
|DefineProperty (getter & enumerable=false)|53,308,561|26706136|
|DefineProperty (getter & configurable=false)|100,704,928|50361967|
|DefineProperty (getter & enumerable=false & configurable=false)|53,609,802|26804907|
|DefineProperty (writable)|99,372,255|49700135|
|DefineProperty (writable & enumerable=false)|101,000,671|50503905|
|DefineProperty (writable & enumerable=false & configurable=false)|100,956,581|50480030|
|DefineProperties (getter)|48,762,744|24384543|
|DefineProperties (getter & enumerable=false)|47,027,590|23514503|
|DefineProperties (getter & enumerable=false & configurable=false)|47,903,621|23951813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:17:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":50397038,"opsSec":100656532.47201216},{"name":"Getter","samples":26791522,"opsSec":53583007.99221862},{"name":"Method","samples":50473685,"opsSec":100945730.84322257},{"name":"DefineProperty (getter)","samples":47078598,"opsSec":94129053.67204934},{"name":"DefineProperty (getter & enumerable=false)","samples":26706136,"opsSec":53308561.04741923},{"name":"DefineProperty (getter & configurable=false)","samples":50361967,"opsSec":100704928.56306186},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26804907,"opsSec":53609802.52750226},{"name":"DefineProperty (writable)","samples":49700135,"opsSec":99372255.17256626},{"name":"DefineProperty (writable & enumerable=false)","samples":50503905,"opsSec":101000671.67652859},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50480030,"opsSec":100956581.2381237},{"name":"DefineProperties (getter)","samples":24384543,"opsSec":48762744.50260293},{"name":"DefineProperties (getter & enumerable=false)","samples":23514503,"opsSec":47027590.845736265},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23951813,"opsSec":47903621.30544512}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,805,395|45935454|
|Setter|11,552,405|5776416|
|Method|89,449,806|44725630|
|DefineProperty (setter)|93,043,018|46521732|
|DefineProperty (setter & enumerable=false)|11,577,081|5790890|
|DefineProperty (setter & configurable=false)|11,357,232|5680139|
|DefineProperty (setter & enumerable=false & configurable=false)|11,535,536|5767771|
|DefineProperty (writable)|91,753,765|45876968|
|DefineProperty (writable & enumerable=false)|92,102,738|46051375|
|DefineProperty (writable & enumerable=false & configurable=false)|91,942,793|45971435|
|DefineProperties (setter)|83,461,443|41730846|
|DefineProperties (setter & enumerable=false)|11,692,600|5851305|
|DefineProperties (setter & enumerable=false & configurable=false)|11,660,950|5830480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:56:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45935454,"opsSec":91805395.30269042},{"name":"Setter","samples":5776416,"opsSec":11552405.300357824},{"name":"Method","samples":44725630,"opsSec":89449806.97733545},{"name":"DefineProperty (setter)","samples":46521732,"opsSec":93043018.51002736},{"name":"DefineProperty (setter & enumerable=false)","samples":5790890,"opsSec":11577081.279483585},{"name":"DefineProperty (setter & configurable=false)","samples":5680139,"opsSec":11357232.285589045},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5767771,"opsSec":11535536.163018703},{"name":"DefineProperty (writable)","samples":45876968,"opsSec":91753765.15448928},{"name":"DefineProperty (writable & enumerable=false)","samples":46051375,"opsSec":92102738.76346587},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45971435,"opsSec":91942793.68748124},{"name":"DefineProperties (setter)","samples":41730846,"opsSec":83461443.4518214},{"name":"DefineProperties (setter & enumerable=false)","samples":5851305,"opsSec":11692600.292282585},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5830480,"opsSec":11660950.624595698}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,374,246|1687456|
|Using replaceAll()|3,022,806|1511555|
|Using replaceAll(//g)|3,097,732|1549083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1687456,"opsSec":3374246.348925762},{"name":"Using replaceAll()","samples":1511555,"opsSec":3022806.6553065265},{"name":"Using replaceAll(//g)","samples":1549083,"opsSec":3097732.305086359}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,907,920|9971127|
|{ ...object, __proto__: null }|19,958,306|9990379|
|{ ...object, newProp: true }|758,825|380503|
|structuredClone|286,501|143266|
|JSON.parse + JSON.stringify|187,609|93808|
|loop + object.keys starting with {}|1,501,812|750953|
|loop + object.keys starting with { __proto__: null }|738,925|369683|
|loop + object.keys starting with { randomProp: true }|539,985|270019|
|object.keys + reduce(FN, {})|1,521,889|760966|
|object.keys + reduce(FN, { __proto__: null })|772,483|386423|
|object.keys + reduce(FN, { newProp: true })|547,281|273752|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9971127,"opsSec":19907920.322821178},{"name":"{ ...object, __proto__: null }","samples":9990379,"opsSec":19958306.820824027},{"name":"{ ...object, newProp: true }","samples":380503,"opsSec":758825.4392178635},{"name":"structuredClone","samples":143266,"opsSec":286501.001164676},{"name":"JSON.parse + JSON.stringify","samples":93808,"opsSec":187609.93794768502},{"name":"loop + object.keys starting with {}","samples":750953,"opsSec":1501812.316947669},{"name":"loop + object.keys starting with { __proto__: null }","samples":369683,"opsSec":738925.1262348329},{"name":"loop + object.keys starting with { randomProp: true }","samples":270019,"opsSec":539985.6192349917},{"name":"object.keys + reduce(FN, {})","samples":760966,"opsSec":1521889.6945102718},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":386423,"opsSec":772483.0951667217},{"name":"object.keys + reduce(FN, { newProp: true })","samples":273752,"opsSec":547281.8451642835}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,957|127050|
|Sort using first char|1,320,556|660279|
|Sort using localeCompare|1,242,685|621435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:16:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":127050,"opsSec":250957.84466222988},{"name":"Sort using first char","samples":660279,"opsSec":1320556.803575536},{"name":"Sort using localeCompare","samples":621435,"opsSec":1242685.7867443447}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,724|863|
|{...smallObject} - Total keys: 2|39,682,473|19842576|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,046|525|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,363|3182|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,130,637|6065416|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,803,481|14404860|
|{ ...smallObject, ...anotherSmallObject }|20,232,734|10121485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":863,"opsSec":1724.597005843806},{"name":"{...smallObject} - Total keys: 2","samples":19842576,"opsSec":39682473.11560491},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":525,"opsSec":1046.9028175788071},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3182,"opsSec":6363.637094503774},{"name":"{ ...bigObject, ...anotherBigObject }","samples":552,"opsSec":1103.0055522541986},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6065416,"opsSec":12130637.181966856},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14404860,"opsSec":28803481.569140863},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10121485,"opsSec":20232734.987748157}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,869|935|
|streams.web.Readable reading 1e3 * "some data"|1,476|740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:25:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":935,"opsSec":1869.7031210596258},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":740,"opsSec":1476.4503210909338}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,915|3959|
|streams.web.WritableStream writing 1e3 * "some data"|1,351|676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:26:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3959,"opsSec":7915.109133030906},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":676,"opsSec":1351.9717924605222}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,555,326|47780448|
|Using backtick (`)|96,719,802|48364794|
|Using array.join|10,648,894|5324520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47780448,"opsSec":95555326.84444086},{"name":"Using backtick (`)","samples":48364794,"opsSec":96719802.66412488},{"name":"Using array.join","samples":5324520,"opsSec":10648894.195340678}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,409,992|27205002|
|(short string) (true) String#slice and strict comparison|63,724,117|31862070|
|(long string) (true) String#endsWith|50,303,451|25151730|
|(long string) (true) String#slice and strict comparison|59,119,080|29560123|
|(short string) (false) String#endsWith|58,172,252|29088653|
|(short string) (false) String#slice and strict comparison|62,331,291|31167184|
|(long string) (false) String#endsWith|54,883,034|27441533|
|(long string) (false) String#slice and strict comparison|56,962,030|28481040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27205002,"opsSec":54409992.79154149},{"name":"(short string) (true) String#slice and strict comparison","samples":31862070,"opsSec":63724117.6965588},{"name":"(long string) (true) String#endsWith","samples":25151730,"opsSec":50303451.8508408},{"name":"(long string) (true) String#slice and strict comparison","samples":29560123,"opsSec":59119080.644682325},{"name":"(short string) (false) String#endsWith","samples":29088653,"opsSec":58172252.34374989},{"name":"(short string) (false) String#slice and strict comparison","samples":31167184,"opsSec":62331291.07814721},{"name":"(long string) (false) String#endsWith","samples":27441533,"opsSec":54883034.05807418},{"name":"(long string) (false) String#slice and strict comparison","samples":28481040,"opsSec":56962030.10126162}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,490,555|8245418|
|Using indexof|16,662,396|8331342|
|Using RegExp.test|12,913,915|6460535|
|Using RegExp.text with cached regex pattern|13,745,669|6872835|
|Using new RegExp.test|4,360,787|2180404|
|Using new RegExp.test with cached regex pattern|5,226,599|2613558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8245418,"opsSec":16490555.52863157},{"name":"Using indexof","samples":8331342,"opsSec":16662396.240416927},{"name":"Using RegExp.test","samples":6460535,"opsSec":12913915.510012636},{"name":"Using RegExp.text with cached regex pattern","samples":6872835,"opsSec":13745669.395190546},{"name":"Using new RegExp.test","samples":2180404,"opsSec":4360787.896767796},{"name":"Using new RegExp.test with cached regex pattern","samples":2613558,"opsSec":5226599.643314838}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,000,940|42000479|
|(short string) (true) String#slice and strict comparison|62,858,794|31477158|
|(long string) (true) String#startsWith|63,608,978|31809533|
|(long string) (true) String#slice and strict comparison|57,711,030|28972468|
|(short string) (false) String#startsWith|98,279,732|49139903|
|(short string) (false) String#slice and strict comparison|61,755,124|30877568|
|(long string) (false) String#startsWith|89,153,293|44576671|
|(long string) (false) String#slice and strict comparison|56,132,629|28083312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42000479,"opsSec":84000940.02379884},{"name":"(short string) (true) String#slice and strict comparison","samples":31477158,"opsSec":62858794.76972721},{"name":"(long string) (true) String#startsWith","samples":31809533,"opsSec":63608978.37933678},{"name":"(long string) (true) String#slice and strict comparison","samples":28972468,"opsSec":57711030.53851998},{"name":"(short string) (false) String#startsWith","samples":49139903,"opsSec":98279732.09364146},{"name":"(short string) (false) String#slice and strict comparison","samples":30877568,"opsSec":61755124.51354684},{"name":"(long string) (false) String#startsWith","samples":44576671,"opsSec":89153293.8572213},{"name":"(long string) (false) String#slice and strict comparison","samples":28083312,"opsSec":56132629.85482939}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|85,151,109|42576219|
|Using this|91,411,798|45705909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:50:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":42576219,"opsSec":85151109.9832887},{"name":"Using this","samples":45705909,"opsSec":91411798.62069869}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,255,731|5127868|
|Date.now()|19,644,993|9824833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5127868,"opsSec":10255731.938730154},{"name":"Date.now()","samples":9824833,"opsSec":19644993.320468765}]}-->
