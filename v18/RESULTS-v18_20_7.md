## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,602,675|37805220|
|Using dot notation|60,700,561|30431549|
|Using define property (writable)|3,940,212|1970257|
|Using define property initialized (writable)|5,546,922|2773517|
|Using define property (getter)|2,030,597|1023880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:09:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":37805220,"opsSec":75602675.00045605},{"name":"Using dot notation","samples":30431549,"opsSec":60700561.320962094},{"name":"Using define property (writable)","samples":1970257,"opsSec":3940212.1324681076},{"name":"Using define property initialized (writable)","samples":2773517,"opsSec":5546922.828572669},{"name":"Using define property (getter)","samples":1023880,"opsSec":2030597.5962375551}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.003ms
array.push|100|0.054ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.387ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.155ms
new Array(length)|1,000,000|9.858ms
array.push|10,000,000|308.247ms
new Array(length)|10,000,000|51.208ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.017ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.236ms
new Array(length)|10,000|3.224ms
array.push|1,000,000|17.352ms
new Array(length)|1,000,000|11.767ms
array.push|10,000,000|230.442ms
new Array(length)|10,000,000|67.104ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|246|124|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:21:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":124,"opsSec":246.5887209662786},{"name":"Array.from","samples":11,"opsSec":21.163921767901808}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,918|2010|
|new Blob (1024)|494|253|
|text (128)|42,190|21106|
|text (1024)|29,193|14597|
|arrayBuffer (128)|43,652|21842|
|arrayBuffer (1024)|27,760|13881|
|slice (0, 64)|76,417|38828|
|slice (0, 512)|41,982|21046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2010,"opsSec":3918.3726481401022},{"name":"new Blob (1024)","samples":253,"opsSec":494.0079134405192},{"name":"text (128)","samples":21106,"opsSec":42190.109914611465},{"name":"text (1024)","samples":14597,"opsSec":29193.109084696953},{"name":"arrayBuffer (128)","samples":21842,"opsSec":43652.50995237056},{"name":"arrayBuffer (1024)","samples":13881,"opsSec":27760.37851629086},{"name":"slice (0, 64)","samples":38828,"opsSec":76417.28076943345},{"name":"slice (0, 512)","samples":21046,"opsSec":41982.39178377743}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.28 ms|1|
|Gzip|133.93 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:33:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134275285},{"name":"Gzip","samples":1,"totalTime":0.133930368}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,735|3368|
|crypto.verify('RSA-SHA256')|6,749|3375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:40:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3368,"opsSec":6735.823629194093},{"name":"crypto.verify('RSA-SHA256')","samples":3375,"opsSec":6749.994276004854}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,434,183|1217093|
|fromUnixToISOString(new Date())|1,932,742|966372|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1217093,"opsSec":2434183.478185917},{"name":"fromUnixToISOString(new Date())","samples":966372,"opsSec":1932742.9911081588}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,690|8870|
|Intl.DateTimeFormat().format(new Date())|17,295|8648|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,864|8933|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,527|8764|
|Reusing Intl.DateTimeFormat()|385,535|228461|
|Date.toLocaleDateString()|732,326|366652|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,910|10456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":8870,"opsSec":17690.14436147011},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8648,"opsSec":17295.086957769327},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":8933,"opsSec":17864.977908883877},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8764,"opsSec":17527.407293194974},{"name":"Reusing Intl.DateTimeFormat()","samples":228461,"opsSec":385535.8549366049},{"name":"Date.toLocaleDateString()","samples":366652,"opsSec":732326.3794351204},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10456,"opsSec":20910.580715244534}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,030,953|515505|
|Using brackets {}|1,039,447|519724|
|Using '' + |1,054,371|527266|
|Using date.toString()|1,156,955|580824|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":515505,"opsSec":1030953.5511692592},{"name":"Using brackets {}","samples":519724,"opsSec":1039447.993763312},{"name":"Using '' + ","samples":527266,"opsSec":1054371.2104991411},{"name":"Using date.toString()","samples":580824,"opsSec":1156955.020212412}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,285,640|1642821|
|Using delete property (proto: null)|19,189,902|9595261|
|Using delete property (cached proto: null)|3,339,090|1669546|
|Using undefined assignment|84,162,553|42081284|
|Using undefined assignment (proto: null)|20,755,245|10380724|
|Using undefined property (cached proto: null)|85,507,523|42753806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:57:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1642821,"opsSec":3285640.508319209},{"name":"Using delete property (proto: null)","samples":9595261,"opsSec":19189902.549945686},{"name":"Using delete property (cached proto: null)","samples":1669546,"opsSec":3339090.2837075945},{"name":"Using undefined assignment","samples":42081284,"opsSec":84162553.01906556},{"name":"Using undefined assignment (proto: null)","samples":10380724,"opsSec":20755245.170449343},{"name":"Using undefined property (cached proto: null)","samples":42753806,"opsSec":85507523.41420574}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|295,804|147938|
|NodeError|284,879|142441|
|NodeError Range|261,221|130628|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:02:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":147938,"opsSec":295804.5164721584},{"name":"NodeError","samples":142441,"opsSec":284879.03326974757},{"name":"NodeError Range","samples":130628,"opsSec":261221.60913027156}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|73,224,741|36612391|
|using Array.includes (first item)|85,828,338|42926264|
|Using raw comparison|106,332,200|53166862|
|Using raw comparison (first item)|106,125,582|53062908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":36612391,"opsSec":73224741.72639205},{"name":"using Array.includes (first item)","samples":42926264,"opsSec":85828338.99921985},{"name":"Using raw comparison","samples":53166862,"opsSec":106332200.68489298},{"name":"Using raw comparison (first item)","samples":53062908,"opsSec":106125582.52371845}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,070,415|23035291|
|Using Object.getOwnPropertyNames()|45,086,971|22546515|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:12:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23035291,"opsSec":46070415.96222087},{"name":"Using Object.getOwnPropertyNames()","samples":22546515,"opsSec":45086971.57345573}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,531,404|10765861|
|Length = 10_000 - Array.at|21,609,065|10806730|
|Length = 1_000_000 - Array.at|21,608,396|10805161|
|Length = 100 - Array[length - 1]|102,705,130|51359672|
|Length = 10_000 - Array[length - 1]|102,736,228|51371080|
|Length = 1_000_000 - Array[length - 1]|102,431,950|51226632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:20:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10765861,"opsSec":21531404.36872275},{"name":"Length = 10_000 - Array.at","samples":10806730,"opsSec":21609065.01870211},{"name":"Length = 1_000_000 - Array.at","samples":10805161,"opsSec":21608396.302938275},{"name":"Length = 100 - Array[length - 1]","samples":51359672,"opsSec":102705130.84235297},{"name":"Length = 10_000 - Array[length - 1]","samples":51371080,"opsSec":102736228.42111588},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51226632,"opsSec":102431950.77913749}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|100,482,835|50241430|
|~ (small)|107,075,719|53542174|
|Math.floor (long)|103,508,552|51754291|
|~ (long)|106,537,240|53268629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50241430,"opsSec":100482835.28122252},{"name":"~ (small)","samples":53542174,"opsSec":107075719.41022705},{"name":"Math.floor (long)","samples":51754291,"opsSec":103508552.60357106},{"name":"~ (long)","samples":53268629,"opsSec":106537240.52789254}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,992,830|14999234|
|Object.create({})|1,296,512|658789|
|new Function with empty prototype|79,113,680|39557126|
|Empty class|77,629,791|38829253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14999234,"opsSec":29992830.00780079},{"name":"Object.create({})","samples":658789,"opsSec":1296512.477887333},{"name":"new Function with empty prototype","samples":39557126,"opsSec":79113680.79922463},{"name":"Empty class","samples":38829253,"opsSec":77629791.98202252}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,187,187|46689348|
|Using parseInt(x, 10) - big number (10 len)|16,060,192|8030206|
|Using + - small number (2 len)|107,080,598|53552343|
|Using + - big number (10 len)|104,010,402|52005214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:30:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46689348,"opsSec":93187187.19796383},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8030206,"opsSec":16060192.00748988},{"name":"Using + - small number (2 len)","samples":53552343,"opsSec":107080598.86176965},{"name":"Using + - big number (10 len)","samples":52005214,"opsSec":104010402.20542024}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|690,772|351233|
|Using ? operator to avoid rejection|725,768|362886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:37:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":351233,"opsSec":690772.2101419244},{"name":"Using ? operator to avoid rejection","samples":362886,"opsSec":725768.8400024705}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|84,462,180|42306874|
|Raw usage underscore usage|82,910,478|41455251|
|Manipulating private properties using #|80,510,979|40255501|
|Manipulating private properties using underscore(_)|81,483,663|40754262|
|Manipulating private properties using Symbol|82,022,099|41020868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:41:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":42306874,"opsSec":84462180.61688301},{"name":"Raw usage underscore usage","samples":41455251,"opsSec":82910478.95088686},{"name":"Manipulating private properties using #","samples":40255501,"opsSec":80510979.29590383},{"name":"Manipulating private properties using underscore(_)","samples":40754262,"opsSec":81483663.82306956},{"name":"Manipulating private properties using Symbol","samples":41020868,"opsSec":82022099.08925703}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,730,311|1868384|
|Adding property in the object creation - small object|3,732,324|1866163|
|Adding property after the function creation - small class|184,206|92781|
|Adding property in the function creation - small class|189,187|94594|
|Adding property after the class creation - small class|157,977|79289|
|Adding property in the class creation - small class|156,053|78072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1868384,"opsSec":3730311.0553817973},{"name":"Adding property in the object creation - small object","samples":1866163,"opsSec":3732324.1263732887},{"name":"Adding property after the function creation - small class","samples":92781,"opsSec":184206.81075601716},{"name":"Adding property in the function creation - small class","samples":94594,"opsSec":189187.0336326322},{"name":"Adding property after the class creation - small class","samples":79289,"opsSec":157977.25830008966},{"name":"Adding property in the class creation - small class","samples":78072,"opsSec":156053.8370866541}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,536,535|49290632|
|Getter|56,695,177|28357143|
|Method|96,009,677|48051683|
|DefineProperty (getter)|98,909,049|49454865|
|DefineProperty (getter & enumerable=false)|56,269,588|28134883|
|DefineProperty (getter & configurable=false)|99,442,696|49721358|
|DefineProperty (getter & enumerable=false & configurable=false)|55,153,183|27739316|
|DefineProperty (writable)|98,832,500|49420409|
|DefineProperty (writable & enumerable=false)|98,806,670|49405879|
|DefineProperty (writable & enumerable=false & configurable=false)|87,365,237|43682631|
|DefineProperties (getter)|55,910,921|27955465|
|DefineProperties (getter & enumerable=false)|55,801,376|27903028|
|DefineProperties (getter & enumerable=false & configurable=false)|55,221,637|27612921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:25:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49290632,"opsSec":98536535.50751014},{"name":"Getter","samples":28357143,"opsSec":56695177.57074191},{"name":"Method","samples":48051683,"opsSec":96009677.83617389},{"name":"DefineProperty (getter)","samples":49454865,"opsSec":98909049.70355614},{"name":"DefineProperty (getter & enumerable=false)","samples":28134883,"opsSec":56269588.0755625},{"name":"DefineProperty (getter & configurable=false)","samples":49721358,"opsSec":99442696.90700221},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27739316,"opsSec":55153183.98165469},{"name":"DefineProperty (writable)","samples":49420409,"opsSec":98832500.45442677},{"name":"DefineProperty (writable & enumerable=false)","samples":49405879,"opsSec":98806670.83974513},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43682631,"opsSec":87365237.88719435},{"name":"DefineProperties (getter)","samples":27955465,"opsSec":55910921.3897181},{"name":"DefineProperties (getter & enumerable=false)","samples":27903028,"opsSec":55801376.71975379},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27612921,"opsSec":55221637.97670083}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,217,048|50108548|
|Setter|10,818,526|5409267|
|Method|100,923,215|50466294|
|DefineProperty (setter)|100,236,617|50119147|
|DefineProperty (setter & enumerable=false)|10,889,969|5446002|
|DefineProperty (setter & configurable=false)|10,748,721|5374363|
|DefineProperty (setter & enumerable=false & configurable=false)|10,905,547|5452779|
|DefineProperty (writable)|97,776,511|48888263|
|DefineProperty (writable & enumerable=false)|99,378,055|49689047|
|DefineProperty (writable & enumerable=false & configurable=false)|88,216,576|44108291|
|DefineProperties (setter)|90,730,906|45365467|
|DefineProperties (setter & enumerable=false)|11,017,594|5508800|
|DefineProperties (setter & enumerable=false & configurable=false)|10,821,357|5410682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":50108548,"opsSec":100217048.89798701},{"name":"Setter","samples":5409267,"opsSec":10818526.794861155},{"name":"Method","samples":50466294,"opsSec":100923215.26099871},{"name":"DefineProperty (setter)","samples":50119147,"opsSec":100236617.64280654},{"name":"DefineProperty (setter & enumerable=false)","samples":5446002,"opsSec":10889969.557667175},{"name":"DefineProperty (setter & configurable=false)","samples":5374363,"opsSec":10748721.893988235},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5452779,"opsSec":10905547.617918668},{"name":"DefineProperty (writable)","samples":48888263,"opsSec":97776511.72462928},{"name":"DefineProperty (writable & enumerable=false)","samples":49689047,"opsSec":99378055.83882655},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44108291,"opsSec":88216576.88343854},{"name":"DefineProperties (setter)","samples":45365467,"opsSec":90730906.41780445},{"name":"DefineProperties (setter & enumerable=false)","samples":5508800,"opsSec":11017594.469167577},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5410682,"opsSec":10821357.701969817}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,328,445|1666114|
|Using replaceAll()|2,825,284|1412812|
|Using replaceAll(//g)|2,909,544|1454868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1666114,"opsSec":3328445.680809264},{"name":"Using replaceAll()","samples":1412812,"opsSec":2825284.0448720166},{"name":"Using replaceAll(//g)","samples":1454868,"opsSec":2909544.0690159434}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,098,798|10055421|
|{ ...object, __proto__: null }|19,761,937|9887981|
|{ ...object, newProp: true }|567,216|283609|
|structuredClone|245,702|122852|
|JSON.parse + JSON.stringify|193,804|96904|
|loop + object.keys starting with {}|1,231,005|615511|
|loop + object.keys starting with { __proto__: null }|694,511|347302|
|loop + object.keys starting with { randomProp: true }|468,764|234535|
|object.keys + reduce(FN, {})|1,231,927|615988|
|object.keys + reduce(FN, { __proto__: null })|699,947|350003|
|object.keys + reduce(FN, { newProp: true })|491,230|245672|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:39:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10055421,"opsSec":20098798.598891556},{"name":"{ ...object, __proto__: null }","samples":9887981,"opsSec":19761937.940740354},{"name":"{ ...object, newProp: true }","samples":283609,"opsSec":567216.6420833588},{"name":"structuredClone","samples":122852,"opsSec":245702.23192673904},{"name":"JSON.parse + JSON.stringify","samples":96904,"opsSec":193804.72508775548},{"name":"loop + object.keys starting with {}","samples":615511,"opsSec":1231005.4454387696},{"name":"loop + object.keys starting with { __proto__: null }","samples":347302,"opsSec":694511.6549523108},{"name":"loop + object.keys starting with { randomProp: true }","samples":234535,"opsSec":468764.8162915312},{"name":"object.keys + reduce(FN, {})","samples":615988,"opsSec":1231927.486695574},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":350003,"opsSec":699947.8553316576},{"name":"object.keys + reduce(FN, { newProp: true })","samples":245672,"opsSec":491230.2487586765}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|253,234|126618|
|Sort using first char|1,295,833|648022|
|Sort using localeCompare|1,156,537|578334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:43:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":126618,"opsSec":253234.60974199252},{"name":"Sort using first char","samples":648022,"opsSec":1295833.6810102372},{"name":"Sort using localeCompare","samples":578334,"opsSec":1156537.6558931055}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,658|831|
|{...smallObject} - Total keys: 2|37,867,759|18934686|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,018|510|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,030|3016|
|{ ...bigObject, ...anotherBigObject }|1,074|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,686,525|5843372|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,338,167|13671922|
|{ ...smallObject, ...anotherSmallObject }|18,669,416|9340012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:48:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1658.639529966706},{"name":"{...smallObject} - Total keys: 2","samples":18934686,"opsSec":37867759.06067057},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":510,"opsSec":1018.3666620780263},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3016,"opsSec":6030.805779839476},{"name":"{ ...bigObject, ...anotherBigObject }","samples":538,"opsSec":1074.7843823209262},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5843372,"opsSec":11686525.204875113},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13671922,"opsSec":27338167.994884565},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9340012,"opsSec":18669416.485618867}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,956|979|
|streams.web.Readable reading 1e3 * "some data"|590|296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":979,"opsSec":1956.5022075610104},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":296,"opsSec":590.2257695322706}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,801|2498|
|streams.web.WritableStream writing 1e3 * "some data"|1,536|771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2498,"opsSec":4801.789833521005},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":771,"opsSec":1536.5613931918845}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|102,367,091|51228424|
|Using backtick (`)|100,723,564|50367104|
|Using array.join|10,980,112|5490662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":51228424,"opsSec":102367091.30593786},{"name":"Using backtick (`)","samples":50367104,"opsSec":100723564.7423608},{"name":"Using array.join","samples":5490662,"opsSec":10980112.717885414}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|53,079,020|26595656|
|(short string) (true) String#slice and strict comparison|51,317,067|25665805|
|(long string) (true) String#endsWith|51,157,458|25581172|
|(long string) (true) String#slice and strict comparison|45,210,520|22608920|
|(short string) (false) String#endsWith|57,943,725|28972534|
|(short string) (false) String#slice and strict comparison|60,229,165|30123879|
|(long string) (false) String#endsWith|56,024,176|28024228|
|(long string) (false) String#slice and strict comparison|52,505,306|26253216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:10:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26595656,"opsSec":53079020.57187114},{"name":"(short string) (true) String#slice and strict comparison","samples":25665805,"opsSec":51317067.46152035},{"name":"(long string) (true) String#endsWith","samples":25581172,"opsSec":51157458.974242546},{"name":"(long string) (true) String#slice and strict comparison","samples":22608920,"opsSec":45210520.959182955},{"name":"(short string) (false) String#endsWith","samples":28972534,"opsSec":57943725.79153577},{"name":"(short string) (false) String#slice and strict comparison","samples":30123879,"opsSec":60229165.617948726},{"name":"(long string) (false) String#endsWith","samples":28024228,"opsSec":56024176.91449892},{"name":"(long string) (false) String#slice and strict comparison","samples":26253216,"opsSec":52505306.60125831}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,731,876|7865941|
|Using indexof|15,395,226|7698452|
|Using RegExp.test|13,408,842|6704423|
|Using RegExp.text with cached regex pattern|14,125,795|7062901|
|Using new RegExp.test|4,106,504|2053997|
|Using new RegExp.test with cached regex pattern|4,793,361|2397197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:12:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7865941,"opsSec":15731876.305060778},{"name":"Using indexof","samples":7698452,"opsSec":15395226.936348915},{"name":"Using RegExp.test","samples":6704423,"opsSec":13408842.647789337},{"name":"Using RegExp.text with cached regex pattern","samples":7062901,"opsSec":14125795.982410911},{"name":"Using new RegExp.test","samples":2053997,"opsSec":4106504.6939426484},{"name":"Using new RegExp.test with cached regex pattern","samples":2397197,"opsSec":4793361.672869961}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|69,024,250|34512128|
|(short string) (true) String#slice and strict comparison|51,602,257|25806811|
|(long string) (true) String#startsWith|53,970,937|26998362|
|(long string) (true) String#slice and strict comparison|44,660,706|22335164|
|(short string) (false) String#startsWith|101,589,792|50794908|
|(short string) (false) String#slice and strict comparison|60,825,203|30416702|
|(long string) (false) String#startsWith|87,792,583|43911703|
|(long string) (false) String#slice and strict comparison|53,105,005|26552523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34512128,"opsSec":69024250.47805996},{"name":"(short string) (true) String#slice and strict comparison","samples":25806811,"opsSec":51602257.73798288},{"name":"(long string) (true) String#startsWith","samples":26998362,"opsSec":53970937.76535447},{"name":"(long string) (true) String#slice and strict comparison","samples":22335164,"opsSec":44660706.5653418},{"name":"(short string) (false) String#startsWith","samples":50794908,"opsSec":101589792.02480908},{"name":"(short string) (false) String#slice and strict comparison","samples":30416702,"opsSec":60825203.546057925},{"name":"(long string) (false) String#startsWith","samples":43911703,"opsSec":87792583.07759246},{"name":"(long string) (false) String#slice and strict comparison","samples":26552523,"opsSec":53105005.85261558}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|83,819,580|41982173|
|Using this|87,807,916|43903984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:27:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":41982173,"opsSec":83819580.36455657},{"name":"Using this","samples":43903984,"opsSec":87807916.89579237}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,632,742|4817081|
|Date.now()|19,215,625|9610550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4817081,"opsSec":9632742.056758897},{"name":"Date.now()","samples":9610550,"opsSec":19215625.391463473}]}-->
