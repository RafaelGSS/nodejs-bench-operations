## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,910,105|8955053|
|Using dot notation|17,962,004|8981003|
|Using define property (writable)|3,354,606|1677304|
|Using define property initialized (writable)|3,928,648|1964325|
|Using define property (getter)|1,884,745|942373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:15:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17910105.570393708,"samples":8955053},{"name":"Using dot notation","opsSec":17962004.526334383,"samples":8981003},{"name":"Using define property (writable)","opsSec":3354606.7520771767,"samples":1677304},{"name":"Using define property initialized (writable)","opsSec":3928648.9392394447,"samples":1964325},{"name":"Using define property (getter)","opsSec":1884745.9057554598,"samples":942373}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.008ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.355ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|29.049ms
new Array(length)|1,000,000|16.415ms
array.push|100,000,000|2,023.515ms
new Array(length)|100,000,000|4,250.003ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.502ms
new Array(length)|10,000|3.282ms
array.push|1,000,000|262.274ms
new Array(length)|1,000,000|4.847ms
array.push|100,000,000|2,338.484ms
new Array(length)|100,000,000|4,535.07ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|233|117|
|Array.from|19|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:02:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":233.16221365830117,"samples":117},{"name":"Array.from","opsSec":19.72595717933681,"samples":10}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,262|2132|
|new Blob (1024)|565|289|
|text (128)|33,439|16720|
|text (1024)|15,616|7809|
|arrayBuffer (128)|41,236|20619|
|arrayBuffer (1024)|16,747|8374|
|slice (0, 64)|76,172|38087|
|slice (0, 512)|20,976|11599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:36:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4262.987617176076,"samples":2132},{"name":"new Blob (1024)","opsSec":565.0473484368795,"samples":289},{"name":"text (128)","opsSec":33439.45787925818,"samples":16720},{"name":"text (1024)","opsSec":15616.175905455455,"samples":7809},{"name":"arrayBuffer (128)","opsSec":41236.8412427354,"samples":20619},{"name":"arrayBuffer (1024)","opsSec":16747.32384414608,"samples":8374},{"name":"slice (0, 64)","opsSec":76172.2347832144,"samples":38087},{"name":"slice (0, 512)","opsSec":20976.099525734222,"samples":11599}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|268,377|134189|
|[True conditional] Using constructor name|270,076|135039|
|[True conditional] Check if property is valid then instanceof |278,255|139128|
|[False conditional] Using instanceof only|12,667,207|6333604|
|[False conditional] Using constructor name|17,071,833|8535917|
|[False conditional] Check if property is valid then instanceof |16,711,672|8355837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:18:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":268377.2372992016,"samples":134189},{"name":"[True conditional] Using constructor name","opsSec":270076.42114524066,"samples":135039},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":278255.33770086657,"samples":139128},{"name":"[False conditional] Using instanceof only","opsSec":12667207.066447748,"samples":6333604},{"name":"[False conditional] Using constructor name","opsSec":17071833.416635707,"samples":8535917},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16711672.971689275,"samples":8355837}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,114|1058|
|crypto.verify('RSA-SHA256')|2,112|1057|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2114.3332879776976,"samples":1058},{"name":"crypto.verify('RSA-SHA256')","opsSec":2112.253955943721,"samples":1057}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,730,492|865247|
|fromUnixToISOString(new Date())|1,781,030|890516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1730492.1860355262,"samples":865247},{"name":"fromUnixToISOString(new Date())","opsSec":1781030.343228589,"samples":890516}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,445|7723|
|Intl.DateTimeFormat().format(new Date())|13,634|6818|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,983|7992|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,812|7907|
|Reusing Intl.DateTimeFormat()|610,651|305326|
|Date.toLocaleDateString()|623,632|311817|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,060|8031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15445.939915346888,"samples":7723},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13634.421052561549,"samples":6818},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15983.232741081854,"samples":7992},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15812.942081628555,"samples":7907},{"name":"Reusing Intl.DateTimeFormat()","opsSec":610651.1217271446,"samples":305326},{"name":"Date.toLocaleDateString()","opsSec":623632.5596321719,"samples":311817},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16060.727604142447,"samples":8031}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|898,367|449184|
|Using brackets {}|911,241|455621|
|Using '' + |910,482|455242|
|Using date.toString()|1,016,379|508190|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":898367.0948005144,"samples":449184},{"name":"Using brackets {}","opsSec":911241.642843173,"samples":455621},{"name":"Using '' + ","opsSec":910482.4522019635,"samples":455242},{"name":"Using date.toString()","opsSec":1016379.9272072383,"samples":508190}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,644,551|1322276|
|Using delete property (proto: null)|8,309,381|4154691|
|Using delete property (cached proto: null)|2,674,042|1337023|
|Using undefined assignment|14,724,732|7362367|
|Using undefined assignment (proto: null)|8,885,348|4442675|
|Using undefined property (cached proto: null)|13,185,700|6592851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:52:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2644551.3824694604,"samples":1322276},{"name":"Using delete property (proto: null)","opsSec":8309381.532442341,"samples":4154691},{"name":"Using delete property (cached proto: null)","opsSec":2674042.4019953194,"samples":1337023},{"name":"Using undefined assignment","opsSec":14724732.908187881,"samples":7362367},{"name":"Using undefined assignment (proto: null)","opsSec":8885348.967959376,"samples":4442675},{"name":"Using undefined property (cached proto: null)","opsSec":13185700.75430252,"samples":6592851}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|274,902|137452|
|NodeError|273,287|136644|
|NodeError Range|274,622|137312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:00:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":274902.1988014763,"samples":137452},{"name":"NodeError","opsSec":273287.53714677657,"samples":136644},{"name":"NodeError Range","opsSec":274622.5330500176,"samples":137312}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,568,228|784115|
|Function returning explicitly undefined|1,539,899|769950|
|Function returning implicitly undefined|1,585,811|792906|
|Function returning string|1,571,976|785989|
|Function returning integer|1,611,168|805585|
|Function returning float|1,574,774|787388|
|Function returning functions|1,544,701|772351|
|Function returning arrow functions|1,578,286|789144|
|Function returning empty object|1,578,006|789004|
|Function returning empty array|1,593,613|796807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:09:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1568228.724460592,"samples":784115},{"name":"Function returning explicitly undefined","opsSec":1539899.222628573,"samples":769950},{"name":"Function returning implicitly undefined","opsSec":1585811.8357359655,"samples":792906},{"name":"Function returning string","opsSec":1571976.397671342,"samples":785989},{"name":"Function returning integer","opsSec":1611168.7434093559,"samples":805585},{"name":"Function returning float","opsSec":1574774.376797476,"samples":787388},{"name":"Function returning functions","opsSec":1544701.7585715267,"samples":772351},{"name":"Function returning arrow functions","opsSec":1578286.9679431275,"samples":789144},{"name":"Function returning empty object","opsSec":1578006.7978810663,"samples":789004},{"name":"Function returning empty array","opsSec":1593613.415092301,"samples":796807}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,152,495|7576248|
|using Array.includes (first item)|16,137,556|8068779|
|Using raw comparison|17,253,872|8626937|
|Using raw comparison (first item)|16,990,051|8495026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:19:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15152495.72721772,"samples":7576248},{"name":"using Array.includes (first item)","opsSec":16137556.69981778,"samples":8068779},{"name":"Using raw comparison","opsSec":17253872.905899286,"samples":8626937},{"name":"Using raw comparison (first item)","opsSec":16990051.052568994,"samples":8495026}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,249,847|7124924|
|Using Object.getOwnPropertyNames()|14,199,538|7099770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:29:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":14249847.089860812,"samples":7124924},{"name":"Using Object.getOwnPropertyNames()","opsSec":14199538.43034892,"samples":7099770}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,669,216|4334609|
|Length = 10_000 - Array.at|8,810,807|4405404|
|Length = 1_000_000 - Array.at|8,847,393|4423697|
|Length = 100 - Array[length - 1]|16,427,464|8213733|
|Length = 10_000 - Array[length - 1]|16,168,950|8084476|
|Length = 1_000_000 - Array[length - 1]|16,710,297|8355149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8669216.915263796,"samples":4334609},{"name":"Length = 10_000 - Array.at","opsSec":8810807.995289925,"samples":4405404},{"name":"Length = 1_000_000 - Array.at","opsSec":8847393.592411172,"samples":4423697},{"name":"Length = 100 - Array[length - 1]","opsSec":16427464.551281659,"samples":8213733},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16168950.999452423,"samples":8084476},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16710297.601066327,"samples":8355149}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,935,901|8467951|
|~ (small)|17,240,444|8620223|
|Math.floor (long)|17,497,702|8748852|
|~ (long)|17,963,903|8981952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:50:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":16935901.77328195,"samples":8467951},{"name":"~ (small)","opsSec":17240444.261700407,"samples":8620223},{"name":"Math.floor (long)","opsSec":17497702.296154886,"samples":8748852},{"name":"~ (long)","opsSec":17963903.127821814,"samples":8981952}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,104,756|6617230|
|Object.create({})|1,567,337|792570|
|Cached Empty.prototype|16,517,503|8258752|
|Empty.prototype|1,746,719|873360|
|Empty class|1,114,656|557329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":13104756.625576485,"samples":6617230},{"name":"Object.create({})","opsSec":1567337.2705546513,"samples":792570},{"name":"Cached Empty.prototype","opsSec":16517503.091103531,"samples":8258752},{"name":"Empty.prototype","opsSec":1746719.1435992473,"samples":873360},{"name":"Empty class","opsSec":1114656.2300484201,"samples":557329}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,224,525|7612263|
|Using optional chain (obj.field?.field2) (undefined)|15,532,961|7766481|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,664,709|7832355|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,311,053|8155527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15224525.83246159,"samples":7612263},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15532961.67248528,"samples":7766481},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15664709.49446552,"samples":7832355},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16311053.717207089,"samples":8155527}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,734,046|8367024|
|Using parseInt(x, 10) - big number (10 len)|8,910,034|4455018|
|Using + - small number (2 len)|17,045,148|8522575|
|Using + - big number (10 len)|17,826,736|8913369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:21:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16734046.554666083,"samples":8367024},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8910034.54573852,"samples":4455018},{"name":"Using + - small number (2 len)","opsSec":17045148.73270438,"samples":8522575},{"name":"Using + - big number (10 len)","opsSec":17826736.71563506,"samples":8913369}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|905,344|452673|
|Using ? operator to avoid rejection|954,722|477362|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:30:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":905344.8051229408,"samples":452673},{"name":"Using ? operator to avoid rejection","opsSec":954722.778038011,"samples":477362}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|17,483,265|8741633|
|Raw usage underscore usage|15,356,004|7678003|
|Manipulating private properties using #|12,280,286|6140144|
|Manipulating private properties using underscore(_)|14,177,172|7088587|
|Manipulating private properties using Symbol|13,438,789|6719395|
|Manipulating private properties using PrivateSymbol|10,932,508|5466255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:36:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":17483265.440140463,"samples":8741633},{"name":"Raw usage underscore usage","opsSec":15356004.702291522,"samples":7678003},{"name":"Manipulating private properties using #","opsSec":12280286.692258166,"samples":6140144},{"name":"Manipulating private properties using underscore(_)","opsSec":14177172.50710431,"samples":7088587},{"name":"Manipulating private properties using Symbol","opsSec":13438789.509478884,"samples":6719395},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10932508.701549163,"samples":5466255}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,943,271|1471636|
|Adding property in the object creation - small object|2,956,069|1478035|
|Adding property after the function creation - small class|236,359|119138|
|Adding property in the function creation - small class|234,041|117021|
|Adding property after the class creation - small class|189,675|94838|
|Adding property in the class creation - small class|193,077|96539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:49:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2943271.8352138977,"samples":1471636},{"name":"Adding property in the object creation - small object","opsSec":2956069.6717257914,"samples":1478035},{"name":"Adding property after the function creation - small class","opsSec":236359.6300527769,"samples":119138},{"name":"Adding property in the function creation - small class","opsSec":234041.19316585973,"samples":117021},{"name":"Adding property after the class creation - small class","opsSec":189675.86377221165,"samples":94838},{"name":"Adding property in the class creation - small class","opsSec":193077.3995704786,"samples":96539}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,647,535|8823768|
|Getter|14,227,404|7113703|
|Method|15,741,581|7870791|
|DefineProperty (getter)|17,731,080|8865541|
|DefineProperty (getter & enumerable=false)|14,854,105|7427055|
|DefineProperty (getter & configurable=false)|16,938,658|8469330|
|DefineProperty (getter & enumerable=false & configurable=false)|14,997,356|7498679|
|DefineProperty (writable)|17,467,598|8733800|
|DefineProperty (writable & enumerable=false)|17,413,779|8706890|
|DefineProperty (writable & enumerable=false & configurable=false)|17,778,558|8889280|
|DefineProperties (getter)|14,736,995|7368498|
|DefineProperties (getter & enumerable=false)|14,595,879|7297940|
|DefineProperties (getter & enumerable=false & configurable=false)|14,378,650|7189326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:01:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":17647535.846754946,"samples":8823768},{"name":"Getter","opsSec":14227404.422259932,"samples":7113703},{"name":"Method","opsSec":15741581.489521729,"samples":7870791},{"name":"DefineProperty (getter)","opsSec":17731080.56525361,"samples":8865541},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14854105.271827932,"samples":7427055},{"name":"DefineProperty (getter & configurable=false)","opsSec":16938658.882978637,"samples":8469330},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14997356.897526996,"samples":7498679},{"name":"DefineProperty (writable)","opsSec":17467598.60225611,"samples":8733800},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17413779.472660523,"samples":8706890},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17778558.35947569,"samples":8889280},{"name":"DefineProperties (getter)","opsSec":14736995.532804517,"samples":7368498},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14595879.767877866,"samples":7297940},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14378650.317373758,"samples":7189326}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,464,495|8232248|
|Setter|5,820,600|2910301|
|Method|16,655,072|8327537|
|DefineProperty (setter)|16,124,930|8062466|
|DefineProperty (setter & enumerable=false)|5,873,868|2936935|
|DefineProperty (setter & configurable=false)|5,859,900|2929951|
|DefineProperty (setter & enumerable=false & configurable=false)|5,808,409|2904205|
|DefineProperty (writable)|16,038,942|8019472|
|DefineProperty (writable & enumerable=false)|16,711,409|8355705|
|DefineProperty (writable & enumerable=false & configurable=false)|16,800,251|8400126|
|DefineProperties (setter)|16,227,359|8113682|
|DefineProperties (setter & enumerable=false)|5,714,814|2857408|
|DefineProperties (setter & enumerable=false & configurable=false)|5,758,021|2879011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16464495.16155022,"samples":8232248},{"name":"Setter","opsSec":5820600.342562284,"samples":2910301},{"name":"Method","opsSec":16655072.489949277,"samples":8327537},{"name":"DefineProperty (setter)","opsSec":16124930.329331867,"samples":8062466},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5873868.14039167,"samples":2936935},{"name":"DefineProperty (setter & configurable=false)","opsSec":5859900.181378751,"samples":2929951},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5808409.004608277,"samples":2904205},{"name":"DefineProperty (writable)","opsSec":16038942.803452145,"samples":8019472},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16711409.10216055,"samples":8355705},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16800251.795281798,"samples":8400126},{"name":"DefineProperties (setter)","opsSec":16227359.39848279,"samples":8113682},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5714814.512981965,"samples":2857408},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5758021.756088609,"samples":2879011}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,600,523|1314705|
|Using replaceAll()|2,383,035|1191518|
|Using replaceAll(//g)|2,312,221|1156111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:40:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2600523.445708741,"samples":1314705},{"name":"Using replaceAll()","opsSec":2383035.105254776,"samples":1191518},{"name":"Using replaceAll(//g)","opsSec":2312221.4432106833,"samples":1156111}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,531,937|4765969|
|{ ...object, __proto__: null }|10,024,485|5012243|
|{ ...object, newProp: true }|616,682|309765|
|structuredClone|235,862|117932|
|JSON.parse + JSON.stringify|185,835|92918|
|loop + object.keys starting with {}|1,123,144|561573|
|loop + object.keys starting with { __proto__: null }|599,716|299859|
|loop + object.keys starting with { randomProp: true }|461,303|230652|
|object.keys + reduce(FN, {})|1,068,303|534152|
|object.keys + reduce(FN, { __proto__: null })|561,682|280842|
|object.keys + reduce(FN, { newProp: true })|462,029|231015|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:48:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9531937.661596991,"samples":4765969},{"name":"{ ...object, __proto__: null }","opsSec":10024485.620882504,"samples":5012243},{"name":"{ ...object, newProp: true }","opsSec":616682.3440815952,"samples":309765},{"name":"structuredClone","opsSec":235862.30728850554,"samples":117932},{"name":"JSON.parse + JSON.stringify","opsSec":185835.14291400646,"samples":92918},{"name":"loop + object.keys starting with {}","opsSec":1123144.8199248489,"samples":561573},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":599716.0457424538,"samples":299859},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":461303.2053383331,"samples":230652},{"name":"object.keys + reduce(FN, {})","opsSec":1068303.878303467,"samples":534152},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":561682.1078123545,"samples":280842},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":462029.551036819,"samples":231015}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|248,676|124339|
|Sort using first char|1,034,471|517236|
|Sort using localeCompare|935,629|467815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":248676.09331668494,"samples":124339},{"name":"Sort using first char","opsSec":1034471.852090835,"samples":517236},{"name":"Sort using localeCompare","opsSec":935629.4943667223,"samples":467815}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,739|870|
|{...smallObject} - Total keys: 2|12,639,961|6319981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,419|3210|
|{ ...bigObject, ...anotherBigObject }|1,082|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,603,794|3301898|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,574,030|5287016|
|{ ...smallObject, ...anotherSmallObject }|8,761,964|4380983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:03:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1739.6762810094544,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":12639961.190659624,"samples":6319981},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.483048593051,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6419.039455524987,"samples":3210},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1082.5083382486916,"samples":542},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6603794.422826601,"samples":3301898},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10574030.195483075,"samples":5287016},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8761964.296897817,"samples":4380983}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,198|1100|
|streams.web.Readable reading 1e3 * "some data"|472|237|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2198.782951462193,"samples":1100},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":472.67129545951303,"samples":237}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,171|2086|
|streams.web.WritableStream writing 1e3 * "some data"|1,981|991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:17:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4171.670313098547,"samples":2086},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1981.7945912579576,"samples":991}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,493,585|8246793|
|Using backtick (`)|15,773,362|7886682|
|Using array.join|6,318,571|3159286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:24:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":16493585.036198948,"samples":8246793},{"name":"Using backtick (`)","opsSec":15773362.971811289,"samples":7886682},{"name":"Using array.join","opsSec":6318571.04603121,"samples":3159286}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,554,515|5777258|
|(short string) (true) String#slice and strict comparison|12,546,640|6273321|
|(long string) (true) String#endsWith|11,959,170|5979586|
|(long string) (true) String#slice and strict comparison|12,670,074|6335038|
|(short string) (false) String#endsWith|12,361,782|6180892|
|(short string) (false) String#slice and strict comparison|13,232,019|6616010|
|(long string) (false) String#endsWith|12,282,181|6141091|
|(long string) (false) String#slice and strict comparison|12,775,132|6387567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:38:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11554515.306218037,"samples":5777258},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12546640.319420965,"samples":6273321},{"name":"(long string) (true) String#endsWith","opsSec":11959170.186758805,"samples":5979586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12670074.607136676,"samples":6335038},{"name":"(short string) (false) String#endsWith","opsSec":12361782.433613526,"samples":6180892},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13232019.929708017,"samples":6616010},{"name":"(long string) (false) String#endsWith","opsSec":12282181.807464251,"samples":6141091},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12775132.33783406,"samples":6387567}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,967,379|4483690|
|Using indexof|9,296,826|4648414|
|Using RegExp.test|8,400,919|4200460|
|Using RegExp.text with cached regex pattern|8,564,586|4282294|
|Using new RegExp.test|3,360,559|1680280|
|Using new RegExp.test with cached regex pattern|3,661,272|1830637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:08:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8967379.198053386,"samples":4483690},{"name":"Using indexof","opsSec":9296826.695083573,"samples":4648414},{"name":"Using RegExp.test","opsSec":8400919.360688102,"samples":4200460},{"name":"Using RegExp.text with cached regex pattern","opsSec":8564586.224837897,"samples":4282294},{"name":"Using new RegExp.test","opsSec":3360559.7549268687,"samples":1680280},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3661272.2739736005,"samples":1830637}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,117,958|7058980|
|(short string) (true) String#slice and strict comparison|14,510,834|7255418|
|(long string) (true) String#startsWith|14,080,252|7040127|
|(long string) (true) String#slice and strict comparison|13,819,952|6909977|
|(short string) (false) String#startsWith|7,666,575|3833288|
|(short string) (false) String#slice and strict comparison|14,954,484|7477243|
|(long string) (false) String#startsWith|6,827,136|3413569|
|(long string) (false) String#slice and strict comparison|14,124,000|7062001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:19:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14117958.588180244,"samples":7058980},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14510834.52845841,"samples":7255418},{"name":"(long string) (true) String#startsWith","opsSec":14080252.539707696,"samples":7040127},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13819952.513985017,"samples":6909977},{"name":"(short string) (false) String#startsWith","opsSec":7666575.0524862185,"samples":3833288},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14954484.858951932,"samples":7477243},{"name":"(long string) (false) String#startsWith","opsSec":6827136.786079739,"samples":3413569},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14124000.462770889,"samples":7062001}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|9,982,913|4991458|
|Using this|17,654,579|8827290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":9982913.381058611,"samples":4991458},{"name":"Using this","opsSec":17654579.85031104,"samples":8827290}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,421,907|3210954|
|Date.now()|10,021,762|5010882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6421907.41263098,"samples":3210954},{"name":"Date.now()","opsSec":10021762.828683842,"samples":5010882}]}-->
