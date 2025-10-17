## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|98,530,557|49332609|
|Using dot notation|70,388,128|35203573|
|Using define property (writable)|4,979,941|2490009|
|Using define property initialized (writable)|6,846,423|3423579|
|Using define property (getter)|2,375,763|1212123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":49332609,"opsSec":98530557.66626534},{"name":"Using dot notation","samples":35203573,"opsSec":70388128.5354323},{"name":"Using define property (writable)","samples":2490009,"opsSec":4979941.298944114},{"name":"Using define property initialized (writable)","samples":3423579,"opsSec":6846423.118635291},{"name":"Using define property (getter)","samples":1212123,"opsSec":2375763.304094575}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.014ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.143ms
array.push|1,000,000|25.825ms
new Array(length)|1,000,000|8.755ms
array.push|10,000,000|237.449ms
new Array(length)|10,000,000|63.829ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.443ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|17.519ms
new Array(length)|1,000,000|11.758ms
array.push|10,000,000|348.302ms
new Array(length)|10,000,000|48.323ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|321|161|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:45:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":321.56221747963},{"name":"Array.from","samples":13,"opsSec":24.173734232872444}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,079|2546|
|new Blob (1024)|637|319|
|text (128)|4,489|2245|
|text (1024)|566|284|
|arrayBuffer (128)|4,515|2258|
|arrayBuffer (1024)|562|282|
|slice (0, 64)|175,780|96790|
|slice (0, 512)|39,173|19587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:51:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2546,"opsSec":5079.823946470451},{"name":"new Blob (1024)","samples":319,"opsSec":637.8146867696472},{"name":"text (128)","samples":2245,"opsSec":4489.854286268993},{"name":"text (1024)","samples":284,"opsSec":566.6872361495998},{"name":"arrayBuffer (128)","samples":2258,"opsSec":4515.48986704776},{"name":"arrayBuffer (1024)","samples":282,"opsSec":562.1962517945275},{"name":"slice (0, 64)","samples":96790,"opsSec":175780.92423594085},{"name":"slice (0, 512)","samples":19587,"opsSec":39173.71818427138}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.91 ms|1|
|Gzip|131.94 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:54:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132906087},{"name":"Gzip","samples":1,"totalTime":0.131935527}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,779|10666|
|crypto.verify('RSA-SHA256')|21,290|10646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10666,"opsSec":20779.168801064206},{"name":"crypto.verify('RSA-SHA256')","samples":10646,"opsSec":21290.64502076959}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,390,608|695513|
|fromUnixToISOString(new Date())|2,576,838|1288548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:03:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":695513,"opsSec":1390608.7339432929},{"name":"fromUnixToISOString(new Date())","samples":1288548,"opsSec":2576838.1924925176}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,690|10849|
|Intl.DateTimeFormat().format(new Date())|20,624|10313|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,211|10606|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,996|10499|
|Reusing Intl.DateTimeFormat()|384,230|212252|
|Date.toLocaleDateString()|951,304|475717|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,585|13293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:07:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10849,"opsSec":21690.06139414962},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10313,"opsSec":20624.027765472845},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10606,"opsSec":21211.994697001326},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10499,"opsSec":20996.68980655607},{"name":"Reusing Intl.DateTimeFormat()","samples":212252,"opsSec":384230.8086045695},{"name":"Date.toLocaleDateString()","samples":475717,"opsSec":951304.1850309107},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13293,"opsSec":26585.50449936714}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|904,568|452334|
|Using brackets {}|908,093|454047|
|Using '' + |906,450|453325|
|Using date.toString()|1,215,827|607915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:09:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":452334,"opsSec":904568.9804519858},{"name":"Using brackets {}","samples":454047,"opsSec":908093.0864583551},{"name":"Using '' + ","samples":453325,"opsSec":906450.3506844604},{"name":"Using date.toString()","samples":607915,"opsSec":1215827.4443307118}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,162,435|2081332|
|Using delete property (proto: null)|16,584,934|8292472|
|Using delete property (cached proto: null)|4,194,598|2097360|
|Using undefined assignment|75,280,673|37640342|
|Using undefined assignment (proto: null)|18,958,053|9479029|
|Using undefined property (cached proto: null)|78,880,546|39446314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2081332,"opsSec":4162435.723700041},{"name":"Using delete property (proto: null)","samples":8292472,"opsSec":16584934.911455669},{"name":"Using delete property (cached proto: null)","samples":2097360,"opsSec":4194598.4573151},{"name":"Using undefined assignment","samples":37640342,"opsSec":75280673.61126703},{"name":"Using undefined assignment (proto: null)","samples":9479029,"opsSec":18958053.184654493},{"name":"Using undefined property (cached proto: null)","samples":39446314,"opsSec":78880546.81321117}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|317,028|158518|
|NodeError|311,032|155520|
|NodeError Range|296,303|148196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:17:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":158518,"opsSec":317028.6525439486},{"name":"NodeError","samples":155520,"opsSec":311032.55139245925},{"name":"NodeError Range","samples":148196,"opsSec":296303.6777997214}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,825,574|34413476|
|using Array.includes (first item)|78,707,323|39353669|
|Using raw comparison|99,090,813|49545512|
|Using raw comparison (first item)|90,371,844|45186727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34413476,"opsSec":68825574.66259985},{"name":"using Array.includes (first item)","samples":39353669,"opsSec":78707323.83268172},{"name":"Using raw comparison","samples":49545512,"opsSec":99090813.72929327},{"name":"Using raw comparison (first item)","samples":45186727,"opsSec":90371844.47744986}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|40,068,832|20043056|
|Using Object.getOwnPropertyNames()|46,027,427|23017738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:21:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":20043056,"opsSec":40068832.636476174},{"name":"Using Object.getOwnPropertyNames()","samples":23017738,"opsSec":46027427.92011846}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,006,737|48503388|
|Length = 10_000 - Array.at|97,065,486|48532749|
|Length = 1_000_000 - Array.at|95,481,125|47740871|
|Length = 100 - Array[length - 1]|91,725,311|45864470|
|Length = 10_000 - Array[length - 1]|89,943,923|44972048|
|Length = 1_000_000 - Array[length - 1]|95,092,257|47577523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:24:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48503388,"opsSec":97006737.9733587},{"name":"Length = 10_000 - Array.at","samples":48532749,"opsSec":97065486.15801068},{"name":"Length = 1_000_000 - Array.at","samples":47740871,"opsSec":95481125.5738533},{"name":"Length = 100 - Array[length - 1]","samples":45864470,"opsSec":91725311.34668311},{"name":"Length = 10_000 - Array[length - 1]","samples":44972048,"opsSec":89943923.84732975},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47577523,"opsSec":95092257.72333238}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,479,788|47791567|
|~ (small)|94,185,246|47101959|
|Math.floor (long)|96,298,054|48152563|
|~ (long)|92,875,924|46441772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:28:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47791567,"opsSec":95479788.0141705},{"name":"~ (small)","samples":47101959,"opsSec":94185246.90502404},{"name":"Math.floor (long)","samples":48152563,"opsSec":96298054.06350568},{"name":"~ (long)","samples":46441772,"opsSec":92875924.45915738}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,012,813|17508449|
|Object.create({})|2,157,385|1080278|
|new Function with empty prototype|96,108,480|48058761|
|Empty class|78,684,038|39345734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:30:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17508449,"opsSec":35012813.12511832},{"name":"Object.create({})","samples":1080278,"opsSec":2157385.519185318},{"name":"new Function with empty prototype","samples":48058761,"opsSec":96108480.11419086},{"name":"Empty class","samples":39345734,"opsSec":78684038.33836393}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,684,044|46342809|
|Using parseInt(x, 10) - big number (10 len)|95,137,032|47569513|
|Using + - small number (2 len)|90,743,827|45377031|
|Using + - big number (10 len)|83,022,306|41516891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:33:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46342809,"opsSec":92684044.03956412},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47569513,"opsSec":95137032.30835095},{"name":"Using + - small number (2 len)","samples":45377031,"opsSec":90743827.18521944},{"name":"Using + - big number (10 len)","samples":41516891,"opsSec":83022306.98881723}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,190,245|606621|
|Using ? operator to avoid rejection|1,310,681|655369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:38:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":606621,"opsSec":1190245.7615444202},{"name":"Using ? operator to avoid rejection","samples":655369,"opsSec":1310681.2475019833}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,457,637|49228833|
|Raw usage underscore usage|96,387,567|48193792|
|Manipulating private properties using #|95,945,017|47977286|
|Manipulating private properties using underscore(_)|98,350,970|49178513|
|Manipulating private properties using Symbol|98,204,823|49103751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:41:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":49228833,"opsSec":98457637.8411156},{"name":"Raw usage underscore usage","samples":48193792,"opsSec":96387567.80688861},{"name":"Manipulating private properties using #","samples":47977286,"opsSec":95945017.21951519},{"name":"Manipulating private properties using underscore(_)","samples":49178513,"opsSec":98350970.3340546},{"name":"Manipulating private properties using Symbol","samples":49103751,"opsSec":98204823.75804646}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,429,363|3714938|
|Adding property in the object creation - small object|7,495,653|3750445|
|Adding property after the function creation - small class|296,123|148067|
|Adding property in the function creation - small class|309,567|154927|
|Adding property after the class creation - small class|289,276|144641|
|Adding property in the class creation - small class|312,898|156450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:45:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3714938,"opsSec":7429363.210492486},{"name":"Adding property in the object creation - small object","samples":3750445,"opsSec":7495653.416592713},{"name":"Adding property after the function creation - small class","samples":148067,"opsSec":296123.48880064156},{"name":"Adding property in the function creation - small class","samples":154927,"opsSec":309567.1816722401},{"name":"Adding property after the class creation - small class","samples":144641,"opsSec":289276.8572360321},{"name":"Adding property in the class creation - small class","samples":156450,"opsSec":312898.3616641783}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|91,760,488|45937032|
|Getter|53,350,976|26675495|
|Method|94,445,640|47222849|
|DefineProperty (getter)|86,556,564|43278594|
|DefineProperty (getter & enumerable=false)|53,117,084|26558548|
|DefineProperty (getter & configurable=false)|90,256,746|45128379|
|DefineProperty (getter & enumerable=false & configurable=false)|53,603,169|26801606|
|DefineProperty (writable)|93,296,762|47029426|
|DefineProperty (writable & enumerable=false)|93,052,229|46536700|
|DefineProperty (writable & enumerable=false & configurable=false)|90,894,532|45452114|
|DefineProperties (getter)|50,504,200|25252182|
|DefineProperties (getter & enumerable=false)|49,009,417|24504802|
|DefineProperties (getter & enumerable=false & configurable=false)|49,402,187|24764093|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:47:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":45937032,"opsSec":91760488.55641517},{"name":"Getter","samples":26675495,"opsSec":53350976.76895776},{"name":"Method","samples":47222849,"opsSec":94445640.38815935},{"name":"DefineProperty (getter)","samples":43278594,"opsSec":86556564.44650972},{"name":"DefineProperty (getter & enumerable=false)","samples":26558548,"opsSec":53117084.73917803},{"name":"DefineProperty (getter & configurable=false)","samples":45128379,"opsSec":90256746.80816339},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26801606,"opsSec":53603169.33187722},{"name":"DefineProperty (writable)","samples":47029426,"opsSec":93296762.61916406},{"name":"DefineProperty (writable & enumerable=false)","samples":46536700,"opsSec":93052229.12903747},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45452114,"opsSec":90894532.09847198},{"name":"DefineProperties (getter)","samples":25252182,"opsSec":50504200.46739889},{"name":"DefineProperties (getter & enumerable=false)","samples":24504802,"opsSec":49009417.7642125},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24764093,"opsSec":49402187.89347396}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,570,718|45786611|
|Setter|11,137,548|5568778|
|Method|93,754,584|46877362|
|DefineProperty (setter)|95,396,888|47698486|
|DefineProperty (setter & enumerable=false)|11,071,932|5536047|
|DefineProperty (setter & configurable=false)|10,989,075|5494540|
|DefineProperty (setter & enumerable=false & configurable=false)|11,176,531|5588269|
|DefineProperty (writable)|95,422,763|47723719|
|DefineProperty (writable & enumerable=false)|96,669,088|48344348|
|DefineProperty (writable & enumerable=false & configurable=false)|94,959,698|47479858|
|DefineProperties (setter)|91,783,461|45891742|
|DefineProperties (setter & enumerable=false)|11,231,168|5615587|
|DefineProperties (setter & enumerable=false & configurable=false)|10,835,706|5418070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:52:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":45786611,"opsSec":91570718.45655741},{"name":"Setter","samples":5568778,"opsSec":11137548.582392644},{"name":"Method","samples":46877362,"opsSec":93754584.30566938},{"name":"DefineProperty (setter)","samples":47698486,"opsSec":95396888.81391296},{"name":"DefineProperty (setter & enumerable=false)","samples":5536047,"opsSec":11071932.726227911},{"name":"DefineProperty (setter & configurable=false)","samples":5494540,"opsSec":10989075.7801949},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5588269,"opsSec":11176531.674083073},{"name":"DefineProperty (writable)","samples":47723719,"opsSec":95422763.9633854},{"name":"DefineProperty (writable & enumerable=false)","samples":48344348,"opsSec":96669088.80205646},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47479858,"opsSec":94959698.52741548},{"name":"DefineProperties (setter)","samples":45891742,"opsSec":91783461.23770161},{"name":"DefineProperties (setter & enumerable=false)","samples":5615587,"opsSec":11231168.047480933},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5418070,"opsSec":10835706.918465883}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,404,473|2202465|
|Using replaceAll()|2,979,314|1489658|
|Using replaceAll(//g)|3,712,610|1856619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:53:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2202465,"opsSec":4404473.458708111},{"name":"Using replaceAll()","samples":1489658,"opsSec":2979314.0217354894},{"name":"Using replaceAll(//g)","samples":1856619,"opsSec":3712610.776684944}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,321,001|11660940|
|{ ...object, __proto__: null }|2,386,520|1193269|
|{ ...object, newProp: true }|21,980,471|10992861|
|structuredClone|307,394|153698|
|JSON.parse + JSON.stringify|341,501|170751|
|loop + object.keys starting with {}|1,761,130|880778|
|loop + object.keys starting with { __proto__: null }|951,654|475904|
|loop + object.keys starting with { randomProp: true }|711,329|355722|
|object.keys + reduce(FN, {})|1,811,163|905742|
|object.keys + reduce(FN, { __proto__: null })|1,000,219|500233|
|object.keys + reduce(FN, { newProp: true })|706,272|353163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:57:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11660940,"opsSec":23321001.54451382},{"name":"{ ...object, __proto__: null }","samples":1193269,"opsSec":2386520.988878391},{"name":"{ ...object, newProp: true }","samples":10992861,"opsSec":21980471.568717323},{"name":"structuredClone","samples":153698,"opsSec":307394.0425147373},{"name":"JSON.parse + JSON.stringify","samples":170751,"opsSec":341501.0499440791},{"name":"loop + object.keys starting with {}","samples":880778,"opsSec":1761130.651724995},{"name":"loop + object.keys starting with { __proto__: null }","samples":475904,"opsSec":951654.3097322868},{"name":"loop + object.keys starting with { randomProp: true }","samples":355722,"opsSec":711329.20000307},{"name":"object.keys + reduce(FN, {})","samples":905742,"opsSec":1811163.0800138523},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":500233,"opsSec":1000219.2739112657},{"name":"object.keys + reduce(FN, { newProp: true })","samples":353163,"opsSec":706272.8826290433}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|494,405|247203|
|Sort using first char|1,449,580|724855|
|Sort using localeCompare|1,340,761|670546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:36:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":247203,"opsSec":494405.8862866462},{"name":"Sort using first char","samples":724855,"opsSec":1449580.050946753},{"name":"Sort using localeCompare","samples":670546,"opsSec":1340761.585396418}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,163|1582|
|{...smallObject} - Total keys: 2|40,667,620|20333904|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,077|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,534|3268|
|{ ...bigObject, ...anotherBigObject }|1,509|755|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,987,650|5995058|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,642,540|13322816|
|{ ...smallObject, ...anotherSmallObject }|20,982,005|10491122|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1582,"opsSec":3163.286647228184},{"name":"{...smallObject} - Total keys: 2","samples":20333904,"opsSec":40667620.19692993},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1077.2386400463743},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3268,"opsSec":6534.376050726369},{"name":"{ ...bigObject, ...anotherBigObject }","samples":755,"opsSec":1509.1073509290666},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5995058,"opsSec":11987650.284188345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13322816,"opsSec":26642540.825843222},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10491122,"opsSec":20982005.644415878}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,074|1038|
|streams.web.Readable reading 1e3 * "some data"|1,907|955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:45:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1038,"opsSec":2074.5496367088845},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":955,"opsSec":1907.2371495638217}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,445|5224|
|streams.web.WritableStream writing 1e3 * "some data"|1,781|892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5224,"opsSec":10445.926337379062},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":892,"opsSec":1781.373699378522}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,812,754|47406394|
|Using backtick (`)|94,808,575|47404382|
|Using array.join|9,822,160|4912682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47406394,"opsSec":94812754.05703405},{"name":"Using backtick (`)","samples":47404382,"opsSec":94808575.1413183},{"name":"Using array.join","samples":4912682,"opsSec":9822160.345248831}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,214,749|42111048|
|(short string) (true) String#slice and strict comparison|50,479,007|25239522|
|(long string) (true) String#endsWith|66,187,118|33291190|
|(long string) (true) String#slice and strict comparison|51,673,503|25836762|
|(short string) (false) String#endsWith|92,010,404|46005465|
|(short string) (false) String#slice and strict comparison|54,074,476|27045363|
|(long string) (false) String#endsWith|84,315,139|42157575|
|(long string) (false) String#slice and strict comparison|50,408,812|25204411|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42111048,"opsSec":84214749.27370284},{"name":"(short string) (true) String#slice and strict comparison","samples":25239522,"opsSec":50479007.957988314},{"name":"(long string) (true) String#endsWith","samples":33291190,"opsSec":66187118.07618051},{"name":"(long string) (true) String#slice and strict comparison","samples":25836762,"opsSec":51673503.43394563},{"name":"(short string) (false) String#endsWith","samples":46005465,"opsSec":92010404.2525501},{"name":"(short string) (false) String#slice and strict comparison","samples":27045363,"opsSec":54074476.94412515},{"name":"(long string) (false) String#endsWith","samples":42157575,"opsSec":84315139.88218322},{"name":"(long string) (false) String#slice and strict comparison","samples":25204411,"opsSec":50408812.623960845}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,229,067|8114537|
|Using indexof|16,299,638|8149850|
|Using RegExp.test|12,752,789|6377793|
|Using RegExp.text with cached regex pattern|13,984,258|6992134|
|Using new RegExp.test|4,950,517|2475741|
|Using new RegExp.test with cached regex pattern|5,506,047|2753025|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8114537,"opsSec":16229067.34608239},{"name":"Using indexof","samples":8149850,"opsSec":16299638.941552525},{"name":"Using RegExp.test","samples":6377793,"opsSec":12752789.950803285},{"name":"Using RegExp.text with cached regex pattern","samples":6992134,"opsSec":13984258.770389212},{"name":"Using new RegExp.test","samples":2475741,"opsSec":4950517.243199646},{"name":"Using new RegExp.test with cached regex pattern","samples":2753025,"opsSec":5506047.830617155}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|83,558,457|41780749|
|(short string) (true) String#slice and strict comparison|53,728,196|26864804|
|(long string) (true) String#startsWith|66,573,515|33289299|
|(long string) (true) String#slice and strict comparison|51,521,975|25765101|
|(short string) (false) String#startsWith|83,478,212|41739126|
|(short string) (false) String#slice and strict comparison|55,399,580|27700752|
|(long string) (false) String#startsWith|88,083,460|44041736|
|(long string) (false) String#slice and strict comparison|50,568,521|25284261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41780749,"opsSec":83558457.97618191},{"name":"(short string) (true) String#slice and strict comparison","samples":26864804,"opsSec":53728196.34536922},{"name":"(long string) (true) String#startsWith","samples":33289299,"opsSec":66573515.378394924},{"name":"(long string) (true) String#slice and strict comparison","samples":25765101,"opsSec":51521975.07406413},{"name":"(short string) (false) String#startsWith","samples":41739126,"opsSec":83478212.26437095},{"name":"(short string) (false) String#slice and strict comparison","samples":27700752,"opsSec":55399580.63735943},{"name":"(long string) (false) String#startsWith","samples":44041736,"opsSec":88083460.19681634},{"name":"(long string) (false) String#slice and strict comparison","samples":25284261,"opsSec":50568521.19090366}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|90,315,758|45157923|
|Using this|99,235,017|49670467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:10:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":45157923,"opsSec":90315758.21308301},{"name":"Using this","samples":49670467,"opsSec":99235017.88530055}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,181,463|4591248|
|Date.now()|19,690,079|9845128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4591248,"opsSec":9181463.103763754},{"name":"Date.now()","samples":9845128,"opsSec":19690079.14370913}]}-->
