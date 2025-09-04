## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|92,905,218|46464710|
|Using dot notation|63,040,569|31593851|
|Using define property (writable)|4,881,894|2442620|
|Using define property initialized (writable)|6,915,452|3458194|
|Using define property (getter)|2,304,386|1152194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":46464710,"opsSec":92905218.37642337},{"name":"Using dot notation","samples":31593851,"opsSec":63040569.59731859},{"name":"Using define property (writable)","samples":2442620,"opsSec":4881894.291385285},{"name":"Using define property initialized (writable)","samples":3458194,"opsSec":6915452.532904969},{"name":"Using define property (getter)","samples":1152194,"opsSec":2304386.9215469207}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.031ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.346ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|30.039ms
new Array(length)|1,000,000|9.564ms
array.push|10,000,000|246.976ms
new Array(length)|10,000,000|69.032ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.463ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|18.415ms
new Array(length)|1,000,000|12.742ms
array.push|10,000,000|360.872ms
new Array(length)|10,000,000|52.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|275|138|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:20:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":138,"opsSec":275.2586200842169},{"name":"Array.from","samples":11,"opsSec":21.498426531139387}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,567|2302|
|new Blob (1024)|585|293|
|text (128)|4,365|2184|
|text (1024)|541|272|
|arrayBuffer (128)|4,336|2181|
|arrayBuffer (1024)|538|270|
|slice (0, 64)|148,461|83179|
|slice (0, 512)|31,813|15910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2302,"opsSec":4567.894095197004},{"name":"new Blob (1024)","samples":293,"opsSec":585.2618396752333},{"name":"text (128)","samples":2184,"opsSec":4365.373590440806},{"name":"text (1024)","samples":272,"opsSec":541.8718093063853},{"name":"arrayBuffer (128)","samples":2181,"opsSec":4336.1007132613295},{"name":"arrayBuffer (1024)","samples":270,"opsSec":538.0870467401342},{"name":"slice (0, 64)","samples":83179,"opsSec":148461.90360444758},{"name":"slice (0, 512)","samples":15910,"opsSec":31813.983275854902}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.61 ms|1|
|Gzip|134.99 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133605855},{"name":"Gzip","samples":1,"totalTime":0.134992969}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|21,517|10760|
|crypto.verify('RSA-SHA256')|21,423|10723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:39:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10760,"opsSec":21517.863964679953},{"name":"crypto.verify('RSA-SHA256')","samples":10723,"opsSec":21423.607531241763}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,223,166|611585|
|fromUnixToISOString(new Date())|2,763,650|1381956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:47:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":611585,"opsSec":1223166.3647495639},{"name":"fromUnixToISOString(new Date())","samples":1381956,"opsSec":2763650.2104701633}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,718|10870|
|Intl.DateTimeFormat().format(new Date())|21,047|10524|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,694|10348|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,693|9848|
|Reusing Intl.DateTimeFormat()|369,517|184761|
|Date.toLocaleDateString()|970,183|485093|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,235|13119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10870,"opsSec":21718.318645932402},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10524,"opsSec":21047.850897024247},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10348,"opsSec":20694.246162637715},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9848,"opsSec":19693.99243379928},{"name":"Reusing Intl.DateTimeFormat()","samples":184761,"opsSec":369517.691423718},{"name":"Date.toLocaleDateString()","samples":485093,"opsSec":970183.826788228},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13119,"opsSec":26235.04425497406}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|941,050|470657|
|Using brackets {}|944,273|472145|
|Using '' + |928,369|464197|
|Using date.toString()|1,016,723|508363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":470657,"opsSec":941050.7843314194},{"name":"Using brackets {}","samples":472145,"opsSec":944273.0748494064},{"name":"Using '' + ","samples":464197,"opsSec":928369.539319378},{"name":"Using date.toString()","samples":508363,"opsSec":1016723.6615355784}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,165,052|2085403|
|Using delete property (proto: null)|17,284,697|8643608|
|Using delete property (cached proto: null)|4,220,550|2110301|
|Using undefined assignment|79,340,514|39682738|
|Using undefined assignment (proto: null)|19,173,499|9589340|
|Using undefined property (cached proto: null)|79,228,790|39628498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2085403,"opsSec":4165052.3716634703},{"name":"Using delete property (proto: null)","samples":8643608,"opsSec":17284697.34304196},{"name":"Using delete property (cached proto: null)","samples":2110301,"opsSec":4220550.23073087},{"name":"Using undefined assignment","samples":39682738,"opsSec":79340514.20478295},{"name":"Using undefined assignment (proto: null)","samples":9589340,"opsSec":19173499.7805233},{"name":"Using undefined property (cached proto: null)","samples":39628498,"opsSec":79228790.70896518}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|348,111|174056|
|NodeError|314,128|157065|
|NodeError Range|308,235|154121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":174056,"opsSec":348111.60802632937},{"name":"NodeError","samples":157065,"opsSec":314128.0461235531},{"name":"NodeError Range","samples":154121,"opsSec":308235.769938618}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,783,576|33891796|
|using Array.includes (first item)|74,702,079|37351898|
|Using raw comparison|91,828,209|45924845|
|Using raw comparison (first item)|91,983,146|45991580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:08:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33891796,"opsSec":67783576.95204592},{"name":"using Array.includes (first item)","samples":37351898,"opsSec":74702079.94381952},{"name":"Using raw comparison","samples":45924845,"opsSec":91828209.36160971},{"name":"Using raw comparison (first item)","samples":45991580,"opsSec":91983146.01856181}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,993,792|19999462|
|Using Object.getOwnPropertyNames()|46,728,016|23364229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:13:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":19999462,"opsSec":39993792.15656564},{"name":"Using Object.getOwnPropertyNames()","samples":23364229,"opsSec":46728016.04642423}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|82,096,091|41348608|
|Length = 10_000 - Array.at|80,765,593|40383446|
|Length = 1_000_000 - Array.at|77,788,146|39039906|
|Length = 100 - Array[length - 1]|83,101,400|41551777|
|Length = 10_000 - Array[length - 1]|82,770,237|41385136|
|Length = 1_000_000 - Array[length - 1]|82,138,045|41069038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":41348608,"opsSec":82096091.18019943},{"name":"Length = 10_000 - Array.at","samples":40383446,"opsSec":80765593.12773132},{"name":"Length = 1_000_000 - Array.at","samples":39039906,"opsSec":77788146.43397984},{"name":"Length = 100 - Array[length - 1]","samples":41551777,"opsSec":83101400.51030716},{"name":"Length = 10_000 - Array[length - 1]","samples":41385136,"opsSec":82770237.56758118},{"name":"Length = 1_000_000 - Array[length - 1]","samples":41069038,"opsSec":82138045.77319916}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,339,617|47669855|
|~ (small)|95,573,668|47786847|
|Math.floor (long)|95,106,929|47557606|
|~ (long)|95,132,477|47566246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":47669855,"opsSec":95339617.90192911},{"name":"~ (small)","samples":47786847,"opsSec":95573668.19510959},{"name":"Math.floor (long)","samples":47557606,"opsSec":95106929.89833058},{"name":"~ (long)","samples":47566246,"opsSec":95132477.53986342}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,447,633|15223946|
|Object.create({})|1,971,476|989682|
|new Function with empty prototype|72,855,176|36428110|
|Empty class|75,241,883|37624600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15223946,"opsSec":30447633.438696835},{"name":"Object.create({})","samples":989682,"opsSec":1971476.1986453154},{"name":"new Function with empty prototype","samples":36428110,"opsSec":72855176.27674465},{"name":"Empty class","samples":37624600,"opsSec":75241883.47925048}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|91,025,702|45512875|
|Using parseInt(x, 10) - big number (10 len)|91,439,015|45907153|
|Using + - small number (2 len)|91,778,689|45889361|
|Using + - big number (10 len)|91,983,429|46001979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45512875,"opsSec":91025702.66663462},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45907153,"opsSec":91439015.59147836},{"name":"Using + - small number (2 len)","samples":45889361,"opsSec":91778689.32678661},{"name":"Using + - big number (10 len)","samples":46001979,"opsSec":91983429.32221073}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,167,535|588854|
|Using ? operator to avoid rejection|1,201,811|600907|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:36:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":588854,"opsSec":1167535.186527394},{"name":"Using ? operator to avoid rejection","samples":600907,"opsSec":1201811.0098942074}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,021,032|49010685|
|Raw usage underscore usage|98,290,261|49147719|
|Manipulating private properties using #|98,158,601|49241648|
|Manipulating private properties using underscore(_)|98,528,609|49264313|
|Manipulating private properties using Symbol|98,513,776|49256897|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:43:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49010685,"opsSec":98021032.02348159},{"name":"Raw usage underscore usage","samples":49147719,"opsSec":98290261.44509074},{"name":"Manipulating private properties using #","samples":49241648,"opsSec":98158601.28546904},{"name":"Manipulating private properties using underscore(_)","samples":49264313,"opsSec":98528609.84130798},{"name":"Manipulating private properties using Symbol","samples":49256897,"opsSec":98513776.46454778}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,709,110|3855781|
|Adding property in the object creation - small object|7,714,431|3857219|
|Adding property after the function creation - small class|278,046|141643|
|Adding property in the function creation - small class|294,920|147601|
|Adding property after the class creation - small class|285,323|142663|
|Adding property in the class creation - small class|271,110|142429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:44:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3855781,"opsSec":7709110.225420349},{"name":"Adding property in the object creation - small object","samples":3857219,"opsSec":7714431.735881431},{"name":"Adding property after the function creation - small class","samples":141643,"opsSec":278046.822666423},{"name":"Adding property in the function creation - small class","samples":147601,"opsSec":294920.5467051396},{"name":"Adding property after the class creation - small class","samples":142663,"opsSec":285323.7801809902},{"name":"Adding property in the class creation - small class","samples":142429,"opsSec":271110.25748226023}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|94,391,989|47196004|
|Getter|50,874,848|25466635|
|Method|96,728,304|48374707|
|DefineProperty (getter)|95,308,130|47663861|
|DefineProperty (getter & enumerable=false)|50,580,649|25290367|
|DefineProperty (getter & configurable=false)|95,296,709|47648378|
|DefineProperty (getter & enumerable=false & configurable=false)|51,060,676|25539254|
|DefineProperty (writable)|94,706,789|47359825|
|DefineProperty (writable & enumerable=false)|95,296,085|47648051|
|DefineProperty (writable & enumerable=false & configurable=false)|92,253,639|46126847|
|DefineProperties (getter)|50,719,053|25359535|
|DefineProperties (getter & enumerable=false)|50,279,597|25139807|
|DefineProperties (getter & enumerable=false & configurable=false)|50,360,381|25180913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:55:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47196004,"opsSec":94391989.687954},{"name":"Getter","samples":25466635,"opsSec":50874848.07171624},{"name":"Method","samples":48374707,"opsSec":96728304.01493178},{"name":"DefineProperty (getter)","samples":47663861,"opsSec":95308130.07954833},{"name":"DefineProperty (getter & enumerable=false)","samples":25290367,"opsSec":50580649.53031528},{"name":"DefineProperty (getter & configurable=false)","samples":47648378,"opsSec":95296709.68579909},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25539254,"opsSec":51060676.89677817},{"name":"DefineProperty (writable)","samples":47359825,"opsSec":94706789.57562995},{"name":"DefineProperty (writable & enumerable=false)","samples":47648051,"opsSec":95296085.03729686},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46126847,"opsSec":92253639.2013383},{"name":"DefineProperties (getter)","samples":25359535,"opsSec":50719053.16127435},{"name":"DefineProperties (getter & enumerable=false)","samples":25139807,"opsSec":50279597.00549621},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25180913,"opsSec":50360381.66425387}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,304,084|49152058|
|Setter|10,391,962|5196022|
|Method|88,596,220|44298131|
|DefineProperty (setter)|92,307,560|46161978|
|DefineProperty (setter & enumerable=false)|10,563,255|5284005|
|DefineProperty (setter & configurable=false)|10,595,145|5298699|
|DefineProperty (setter & enumerable=false & configurable=false)|10,532,280|5266141|
|DefineProperty (writable)|93,388,379|46694213|
|DefineProperty (writable & enumerable=false)|87,724,368|43868651|
|DefineProperty (writable & enumerable=false & configurable=false)|93,047,245|46523635|
|DefineProperties (setter)|96,644,857|48322547|
|DefineProperties (setter & enumerable=false)|10,441,251|5222709|
|DefineProperties (setter & enumerable=false & configurable=false)|10,479,704|5239855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49152058,"opsSec":98304084.93590917},{"name":"Setter","samples":5196022,"opsSec":10391962.547797551},{"name":"Method","samples":44298131,"opsSec":88596220.8913535},{"name":"DefineProperty (setter)","samples":46161978,"opsSec":92307560.88488099},{"name":"DefineProperty (setter & enumerable=false)","samples":5284005,"opsSec":10563255.520943046},{"name":"DefineProperty (setter & configurable=false)","samples":5298699,"opsSec":10595145.620373148},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5266141,"opsSec":10532280.39909338},{"name":"DefineProperty (writable)","samples":46694213,"opsSec":93388379.67936368},{"name":"DefineProperty (writable & enumerable=false)","samples":43868651,"opsSec":87724368.97173123},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46523635,"opsSec":93047245.43552719},{"name":"DefineProperties (setter)","samples":48322547,"opsSec":96644857.02681057},{"name":"DefineProperties (setter & enumerable=false)","samples":5222709,"opsSec":10441251.230753846},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5239855,"opsSec":10479704.026568703}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,030,277|2015180|
|Using replaceAll()|3,045,286|1527354|
|Using replaceAll(//g)|3,496,162|1748082|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2015180,"opsSec":4030277.7500916766},{"name":"Using replaceAll()","samples":1527354,"opsSec":3045286.595869443},{"name":"Using replaceAll(//g)","samples":1748082,"opsSec":3496162.902204849}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,796,301|12399363|
|{ ...object, __proto__: null }|2,320,445|1160448|
|{ ...object, newProp: true }|23,393,770|11696899|
|structuredClone|282,106|141064|
|JSON.parse + JSON.stringify|296,307|148251|
|loop + object.keys starting with {}|1,690,506|845254|
|loop + object.keys starting with { __proto__: null }|880,517|440323|
|loop + object.keys starting with { randomProp: true }|643,255|321749|
|object.keys + reduce(FN, {})|1,744,799|872402|
|object.keys + reduce(FN, { __proto__: null })|913,255|456705|
|object.keys + reduce(FN, { newProp: true })|637,742|318872|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12399363,"opsSec":24796301.665586155},{"name":"{ ...object, __proto__: null }","samples":1160448,"opsSec":2320445.694308562},{"name":"{ ...object, newProp: true }","samples":11696899,"opsSec":23393770.53571339},{"name":"structuredClone","samples":141064,"opsSec":282106.3370543776},{"name":"JSON.parse + JSON.stringify","samples":148251,"opsSec":296307.9899731012},{"name":"loop + object.keys starting with {}","samples":845254,"opsSec":1690506.306112681},{"name":"loop + object.keys starting with { __proto__: null }","samples":440323,"opsSec":880517.7613932308},{"name":"loop + object.keys starting with { randomProp: true }","samples":321749,"opsSec":643255.3203518015},{"name":"object.keys + reduce(FN, {})","samples":872402,"opsSec":1744799.5647195063},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":456705,"opsSec":913255.7383202174},{"name":"object.keys + reduce(FN, { newProp: true })","samples":318872,"opsSec":637742.600792734}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|312,446|156224|
|Sort using first char|1,299,805|649926|
|Sort using localeCompare|1,170,835|586349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:15:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":156224,"opsSec":312446.3846521913},{"name":"Sort using first char","samples":649926,"opsSec":1299805.5267531965},{"name":"Sort using localeCompare","samples":586349,"opsSec":1170835.0024691212}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,650|1329|
|{...smallObject} - Total keys: 2|38,973,842|19496298|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,081|541|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,915|2958|
|{ ...bigObject, ...anotherBigObject }|1,465|733|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,313,484|6157451|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,579,245|13789720|
|{ ...smallObject, ...anotherSmallObject }|19,918,774|9959936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1329,"opsSec":2650.1992392468483},{"name":"{...smallObject} - Total keys: 2","samples":19496298,"opsSec":38973842.09897271},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":541,"opsSec":1081.1978787553132},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":2958,"opsSec":5915.829304661243},{"name":"{ ...bigObject, ...anotherBigObject }","samples":733,"opsSec":1465.6781663882246},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6157451,"opsSec":12313484.397795219},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13789720,"opsSec":27579245.95242548},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9959936,"opsSec":19918774.515361752}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,785|894|
|streams.web.Readable reading 1e3 * "some data"|1,702|852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:23:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":894,"opsSec":1785.0052609735594},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":852,"opsSec":1702.7855699259576}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,021|5011|
|streams.web.WritableStream writing 1e3 * "some data"|1,688|845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5011,"opsSec":10021.214537204574},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":845,"opsSec":1688.725724720092}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,935,422|47507368|
|Using backtick (`)|95,455,912|47772374|
|Using array.join|10,478,939|5241010|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47507368,"opsSec":94935422.0118094},{"name":"Using backtick (`)","samples":47772374,"opsSec":95455912.1462729},{"name":"Using array.join","samples":5241010,"opsSec":10478939.422346497}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|86,855,627|43427846|
|(short string) (true) String#slice and strict comparison|56,073,523|28036770|
|(long string) (true) String#endsWith|67,557,258|33779284|
|(long string) (true) String#slice and strict comparison|45,692,234|22846131|
|(short string) (false) String#endsWith|92,035,548|46017782|
|(short string) (false) String#slice and strict comparison|56,017,965|28059340|
|(long string) (false) String#endsWith|86,934,607|43467333|
|(long string) (false) String#slice and strict comparison|51,533,302|25806645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43427846,"opsSec":86855627.20570211},{"name":"(short string) (true) String#slice and strict comparison","samples":28036770,"opsSec":56073523.06579604},{"name":"(long string) (true) String#endsWith","samples":33779284,"opsSec":67557258.47010182},{"name":"(long string) (true) String#slice and strict comparison","samples":22846131,"opsSec":45692234.2191216},{"name":"(short string) (false) String#endsWith","samples":46017782,"opsSec":92035548.53802785},{"name":"(short string) (false) String#slice and strict comparison","samples":28059340,"opsSec":56017965.97119597},{"name":"(long string) (false) String#endsWith","samples":43467333,"opsSec":86934607.23220551},{"name":"(long string) (false) String#slice and strict comparison","samples":25806645,"opsSec":51533302.68730051}]}-->
