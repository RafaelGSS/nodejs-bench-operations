## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,006,560|8003281|
|Using dot notation|16,150,344|8075173|
|Using define property (writable)|3,762,957|1881479|
|Using define property initialized (writable)|4,721,782|2360892|
|Using define property (getter)|2,348,086|1174044|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:23:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16006560.815523764,"samples":8003281},{"name":"Using dot notation","opsSec":16150344.417245675,"samples":8075173},{"name":"Using define property (writable)","opsSec":3762957.360297018,"samples":1881479},{"name":"Using define property initialized (writable)","opsSec":4721782.734562074,"samples":2360892},{"name":"Using define property (getter)","opsSec":2348086.520706204,"samples":1174044}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.022ms
new Array(length)|100|0.007ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.231ms
array.push|1,000,000|22.009ms
new Array(length)|1,000,000|15.739ms
array.push|100,000,000|2,014.406ms
new Array(length)|100,000,000|4,076.541ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.335ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|17.71ms
new Array(length)|1,000,000|8.607ms
array.push|100,000,000|2,625.634ms
new Array(length)|100,000,000|4,082.569ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|243|122|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:24:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":243.96204145804523,"samples":122},{"name":"Array.from","opsSec":24.189188135878272,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,909|2955|
|new Blob (1024)|785|393|
|text (128)|6,439|3220|
|text (1024)|817|410|
|arrayBuffer (128)|6,485|3243|
|arrayBuffer (1024)|813|407|
|slice (0, 64)|253,505|126753|
|slice (0, 512)|36,898|18450|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:25:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5909.867737160042,"samples":2955},{"name":"new Blob (1024)","opsSec":785.3151470784278,"samples":393},{"name":"text (128)","opsSec":6439.215111191788,"samples":3220},{"name":"text (1024)","opsSec":817.2789856708293,"samples":410},{"name":"arrayBuffer (128)","opsSec":6485.072751327827,"samples":3243},{"name":"arrayBuffer (1024)","opsSec":813.6713890454824,"samples":407},{"name":"slice (0, 64)","opsSec":253505.06456640433,"samples":126753},{"name":"slice (0, 512)","opsSec":36898.59696774274,"samples":18450}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|337,877|168939|
|[True conditional] Using constructor name|332,259|166130|
|[True conditional] Check if property is valid then instanceof |335,971|167986|
|[False conditional] Using instanceof only|16,008,386|8004194|
|[False conditional] Using constructor name|16,092,390|8046196|
|[False conditional] Check if property is valid then instanceof |16,157,423|8078712|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:27:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":337877.49656249245,"samples":168939},{"name":"[True conditional] Using constructor name","opsSec":332259.6777080745,"samples":166130},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":335971.6882182136,"samples":167986},{"name":"[False conditional] Using instanceof only","opsSec":16008386.559212938,"samples":8004194},{"name":"[False conditional] Using constructor name","opsSec":16092390.358519835,"samples":8046196},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16157423.773751495,"samples":8078712}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,235|3618|
|crypto.verify('RSA-SHA256')|7,215|3608|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:27:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7235.905296471526,"samples":3618},{"name":"crypto.verify('RSA-SHA256')","opsSec":7215.39536429927,"samples":3608}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,405,381|702691|
|fromUnixToISOString(new Date())|2,048,490|1024246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:28:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1405381.6430327094,"samples":702691},{"name":"fromUnixToISOString(new Date())","opsSec":2048490.3653042095,"samples":1024246}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,646|529824|
|Using brackets {}|1,087,043|543522|
|Using '' + |1,084,763|542382|
|Using date.toString()|1,189,258|594630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:30:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1059646.5292106995,"samples":529824},{"name":"Using brackets {}","opsSec":1087043.0455763252,"samples":543522},{"name":"Using '' + ","opsSec":1084763.9761355445,"samples":542382},{"name":"Using date.toString()","opsSec":1189258.465856263,"samples":594630}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,329,335|1664668|
|Using delete property (proto: null)|8,344,068|4172035|
|Using delete property (cached proto: null)|3,325,464|1662733|
|Using undefined assignment|16,175,775|8087888|
|Using undefined assignment (proto: null)|8,263,240|4131621|
|Using undefined property (cached proto: null)|16,251,951|8125977|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:31:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3329335.2742059487,"samples":1664668},{"name":"Using delete property (proto: null)","opsSec":8344068.030809052,"samples":4172035},{"name":"Using delete property (cached proto: null)","opsSec":3325464.85604041,"samples":1662733},{"name":"Using undefined assignment","opsSec":16175775.514709182,"samples":8087888},{"name":"Using undefined assignment (proto: null)","opsSec":8263240.628322605,"samples":4131621},{"name":"Using undefined property (cached proto: null)","opsSec":16251951.367063675,"samples":8125977}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|321,803|160902|
|NodeError|309,234|154618|
|NodeError Range|324,283|162145|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:31:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":321803.35703689366,"samples":160902},{"name":"NodeError","opsSec":309234.1526351844,"samples":154618},{"name":"NodeError Range","opsSec":324283.4948731032,"samples":162145}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,686,167|843084|
|Function returning explicitly undefined|1,663,075|831538|
|Function returning implicitly undefined|1,678,211|839106|
|Function returning string|1,650,010|825006|
|Function returning integer|1,683,978|841990|
|Function returning float|1,675,793|837897|
|Function returning functions|1,621,684|810843|
|Function returning arrow functions|1,660,762|830382|
|Function returning empty object|1,686,785|843393|
|Function returning empty array|1,670,145|835073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1686167.025395334,"samples":843084},{"name":"Function returning explicitly undefined","opsSec":1663075.860301355,"samples":831538},{"name":"Function returning implicitly undefined","opsSec":1678211.4898228217,"samples":839106},{"name":"Function returning string","opsSec":1650010.429189852,"samples":825006},{"name":"Function returning integer","opsSec":1683978.6763941655,"samples":841990},{"name":"Function returning float","opsSec":1675793.560941975,"samples":837897},{"name":"Function returning functions","opsSec":1621684.7285996834,"samples":810843},{"name":"Function returning arrow functions","opsSec":1660762.6581004872,"samples":830382},{"name":"Function returning empty object","opsSec":1686785.4703467898,"samples":843393},{"name":"Function returning empty array","opsSec":1670145.438830973,"samples":835073}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|11,852,691|5926346|
|using Array.includes (first item)|15,259,970|7629986|
|Using raw comparison|16,021,723|8010862|
|Using raw comparison (first item)|16,076,817|8038409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:33:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":11852691.265113689,"samples":5926346},{"name":"using Array.includes (first item)","opsSec":15259970.657101974,"samples":7629986},{"name":"Using raw comparison","opsSec":16021723.295054575,"samples":8010862},{"name":"Using raw comparison (first item)","opsSec":16076817.807104439,"samples":8038409}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,850,319|6925160|
|Using Object.getOwnPropertyNames()|13,893,481|6946741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:34:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13850319.778402789,"samples":6925160},{"name":"Using Object.getOwnPropertyNames()","opsSec":13893481.499837225,"samples":6946741}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,669,072|7834537|
|Length = 10_000 - Array.at|15,688,116|7844059|
|Length = 1_000_000 - Array.at|15,739,411|7869706|
|Length = 100 - Array[length - 1]|15,798,523|7899262|
|Length = 10_000 - Array[length - 1]|15,849,353|7924677|
|Length = 1_000_000 - Array[length - 1]|15,855,216|7927609|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:36:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15669072.245091872,"samples":7834537},{"name":"Length = 10_000 - Array.at","opsSec":15688116.305717424,"samples":7844059},{"name":"Length = 1_000_000 - Array.at","opsSec":15739411.496407315,"samples":7869706},{"name":"Length = 100 - Array[length - 1]","opsSec":15798523.715701941,"samples":7899262},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15849353.20722117,"samples":7924677},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15855216.382861286,"samples":7927609}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,682,291|6341146|
|Object.create({})|1,855,623|927815|
|Cached Empty.prototype|15,903,108|7951555|
|Empty.prototype|2,485,954|1243363|
|Empty class|1,559,348|783380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:37:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":12682291.340515934,"samples":6341146},{"name":"Object.create({})","opsSec":1855623.3308869004,"samples":927815},{"name":"Cached Empty.prototype","opsSec":15903108.250664674,"samples":7951555},{"name":"Empty.prototype","opsSec":2485954.1858023684,"samples":1243363},{"name":"Empty class","opsSec":1559348.4883652735,"samples":783380}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,186,825|8093413|
|Using optional chain (obj.field?.field2) (undefined)|16,141,276|8070639|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,228,722|8114362|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,076,198|8038100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:38:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16186825.514390957,"samples":8093413},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16141276.063069059,"samples":8070639},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16228722.63680585,"samples":8114362},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16076198.456665125,"samples":8038100}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,912,079|7956040|
|Using parseInt(x, 10) - big number (10 len)|15,808,049|7904025|
|Using + - small number (2 len)|16,013,931|8006966|
|Using + - big number (10 len)|16,010,876|8005439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:39:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15912079.14074614,"samples":7956040},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15808049.209587725,"samples":7904025},{"name":"Using + - small number (2 len)","opsSec":16013931.295332778,"samples":8006966},{"name":"Using + - big number (10 len)","opsSec":16010876.142792957,"samples":8005439}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,178,600|592476|
|Using ? operator to avoid rejection|1,230,485|615243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:41:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1178600.782034913,"samples":592476},{"name":"Using ? operator to avoid rejection","opsSec":1230485.010689999,"samples":615243}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,916,217|7958109|
|Raw usage underscore usage|15,959,261|7979631|
|Manipulating private properties using #|15,914,472|7957237|
|Manipulating private properties using underscore(_)|15,958,852|7979427|
|Manipulating private properties using Symbol|15,966,804|7983403|
|Manipulating private properties using PrivateSymbol|12,375,058|6187530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:42:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15916217.713498227,"samples":7958109},{"name":"Raw usage underscore usage","opsSec":15959261.138185557,"samples":7979631},{"name":"Manipulating private properties using #","opsSec":15914472.949659135,"samples":7957237},{"name":"Manipulating private properties using underscore(_)","opsSec":15958852.116867296,"samples":7979427},{"name":"Manipulating private properties using Symbol","opsSec":15966804.243576067,"samples":7983403},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12375058.514994817,"samples":6187530}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,795,741|1897871|
|Adding property in the object creation - small object|3,824,856|1912429|
|Adding property after the function creation - small class|298,871|149436|
|Adding property in the function creation - small class|319,395|159698|
|Adding property after the class creation - small class|319,139|159570|
|Adding property in the class creation - small class|322,384|161193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:43:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3795741.4913694356,"samples":1897871},{"name":"Adding property in the object creation - small object","opsSec":3824856.049328658,"samples":1912429},{"name":"Adding property after the function creation - small class","opsSec":298871.0818680092,"samples":149436},{"name":"Adding property in the function creation - small class","opsSec":319395.1734053036,"samples":159698},{"name":"Adding property after the class creation - small class","opsSec":319139.41406011087,"samples":159570},{"name":"Adding property in the class creation - small class","opsSec":322384.3706693498,"samples":161193}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,148,830|8074416|
|Getter|13,737,854|6868928|
|Method|15,807,369|7903685|
|DefineProperty (getter)|16,070,440|8035221|
|DefineProperty (getter & enumerable=false)|13,881,010|6940506|
|DefineProperty (getter & configurable=false)|16,199,903|8099952|
|DefineProperty (getter & enumerable=false & configurable=false)|13,778,043|6889022|
|DefineProperty (writable)|16,101,368|8050685|
|DefineProperty (writable & enumerable=false)|16,123,237|8061619|
|DefineProperty (writable & enumerable=false & configurable=false)|16,088,724|8044363|
|DefineProperties (getter)|13,585,853|6792927|
|DefineProperties (getter & enumerable=false)|13,950,774|6975388|
|DefineProperties (getter & enumerable=false & configurable=false)|13,867,364|6933683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:45:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16148830.417420192,"samples":8074416},{"name":"Getter","opsSec":13737854.571237503,"samples":6868928},{"name":"Method","opsSec":15807369.399282208,"samples":7903685},{"name":"DefineProperty (getter)","opsSec":16070440.553615369,"samples":8035221},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13881010.278766667,"samples":6940506},{"name":"DefineProperty (getter & configurable=false)","opsSec":16199903.708365565,"samples":8099952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13778043.200851569,"samples":6889022},{"name":"DefineProperty (writable)","opsSec":16101368.422042398,"samples":8050685},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16123237.677295819,"samples":8061619},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16088724.712617362,"samples":8044363},{"name":"DefineProperties (getter)","opsSec":13585853.184632447,"samples":6792927},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13950774.772445902,"samples":6975388},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13867364.363894021,"samples":6933683}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,844,034|7922018|
|Setter|6,208,927|3104464|
|Method|15,750,292|7875147|
|DefineProperty (setter)|15,813,620|7906811|
|DefineProperty (setter & enumerable=false)|6,252,159|3126080|
|DefineProperty (setter & configurable=false)|6,231,594|3115798|
|DefineProperty (setter & enumerable=false & configurable=false)|6,250,017|3125009|
|DefineProperty (writable)|15,797,851|7898926|
|DefineProperty (writable & enumerable=false)|15,842,696|7921349|
|DefineProperty (writable & enumerable=false & configurable=false)|15,824,713|7912357|
|DefineProperties (setter)|15,856,251|7928126|
|DefineProperties (setter & enumerable=false)|6,230,135|3115068|
|DefineProperties (setter & enumerable=false & configurable=false)|6,194,791|3097396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:46:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15844034.985969152,"samples":7922018},{"name":"Setter","opsSec":6208927.416374483,"samples":3104464},{"name":"Method","opsSec":15750292.708466679,"samples":7875147},{"name":"DefineProperty (setter)","opsSec":15813620.924722198,"samples":7906811},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6252159.624878574,"samples":3126080},{"name":"DefineProperty (setter & configurable=false)","opsSec":6231594.267646586,"samples":3115798},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6250017.200019902,"samples":3125009},{"name":"DefineProperty (writable)","opsSec":15797851.90528619,"samples":7898926},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15842696.63757662,"samples":7921349},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15824713.715257993,"samples":7912357},{"name":"DefineProperties (setter)","opsSec":15856251.904928794,"samples":7928126},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6230135.825499838,"samples":3115068},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6194791.430171846,"samples":3097396}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,784,032|1392017|
|Using replaceAll()|2,651,619|1325810|
|Using replaceAll(//g)|2,634,673|1317337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:48:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2784032.6079838616,"samples":1392017},{"name":"Using replaceAll()","opsSec":2651619.95227191,"samples":1325810},{"name":"Using replaceAll(//g)","opsSec":2634673.34660118,"samples":1317337}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,141,608|5070805|
|{ ...object, __proto__: null }|2,231,713|1115857|
|{ ...object, newProp: true }|9,686,499|4843250|
|structuredClone|316,180|158091|
|JSON.parse + JSON.stringify|289,520|144761|
|loop + object.keys starting with {}|1,480,683|740342|
|loop + object.keys starting with { __proto__: null }|905,915|452958|
|loop + object.keys starting with { randomProp: true }|679,601|339801|
|object.keys + reduce(FN, {})|1,557,119|778560|
|object.keys + reduce(FN, { __proto__: null })|893,034|446518|
|object.keys + reduce(FN, { newProp: true })|708,247|354124|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:49:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10141608.316495258,"samples":5070805},{"name":"{ ...object, __proto__: null }","opsSec":2231713.263536854,"samples":1115857},{"name":"{ ...object, newProp: true }","opsSec":9686499.612506548,"samples":4843250},{"name":"structuredClone","opsSec":316180.1573019531,"samples":158091},{"name":"JSON.parse + JSON.stringify","opsSec":289520.51765518717,"samples":144761},{"name":"loop + object.keys starting with {}","opsSec":1480683.0790157826,"samples":740342},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":905915.0433538057,"samples":452958},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":679601.8382558771,"samples":339801},{"name":"object.keys + reduce(FN, {})","opsSec":1557119.06884251,"samples":778560},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":893034.503273458,"samples":446518},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":708247.3781595603,"samples":354124}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|286,047|143024|
|Sort using first char|1,357,229|678615|
|Sort using localeCompare|1,275,451|637726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:49:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":286047.55090534955,"samples":143024},{"name":"Sort using first char","opsSec":1357229.1422313335,"samples":678615},{"name":"Sort using localeCompare","opsSec":1275451.7780719367,"samples":637726}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,270|1136|
|{...smallObject} - Total keys: 2|12,360,712|6180357|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,547|1274|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,782|3392|
|{ ...bigObject, ...anotherBigObject }|1,391|696|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,230,293|3615147|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,020,096|5510049|
|{ ...smallObject, ...anotherSmallObject }|9,214,927|4607464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:50:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2270.738404991072,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12360712.739217024,"samples":6180357},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2547.0122075376576,"samples":1274},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6782.770297311085,"samples":3392},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1391.042795631454,"samples":696},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7230293.595091138,"samples":3615147},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11020096.743700128,"samples":5510049},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9214927.373365216,"samples":4607464}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,543|3272|
|streams.web.WritableStream writing 1e3 * "some data"|2,949|1475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:52:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6543.154271137815,"samples":3272},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2949.5921245018085,"samples":1475}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,953,807|7976904|
|Using backtick (`)|16,157,488|8078745|
|Using array.join|6,302,575|3151288|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:53:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15953807.808535682,"samples":7976904},{"name":"Using backtick (`)","opsSec":16157488.675021762,"samples":8078745},{"name":"Using array.join","opsSec":6302575.987399705,"samples":3151288}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,787,819|7893910|
|(short string) (true) String#slice and strict comparison|16,021,613|8010808|
|(long string) (true) String#endsWith|14,068,126|7034064|
|(long string) (true) String#slice and strict comparison|15,902,627|7951314|
|(short string) (false) String#endsWith|15,785,598|7892800|
|(short string) (false) String#slice and strict comparison|16,078,532|8039267|
|(long string) (false) String#endsWith|15,477,755|7738878|
|(long string) (false) String#slice and strict comparison|16,066,931|8033466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:54:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15787819.242161835,"samples":7893910},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16021613.564738978,"samples":8010808},{"name":"(long string) (true) String#endsWith","opsSec":14068126.424351444,"samples":7034064},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15902627.554754624,"samples":7951314},{"name":"(short string) (false) String#endsWith","opsSec":15785598.326631486,"samples":7892800},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16078532.102753043,"samples":8039267},{"name":"(long string) (false) String#endsWith","opsSec":15477755.75239265,"samples":7738878},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16066931.518093362,"samples":8033466}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,659,695|7829848|
|Using indexof|15,648,441|7824221|
|Using RegExp.test|8,291,567|4145784|
|Using RegExp.text with cached regex pattern|8,536,924|4268463|
|Using new RegExp.test|3,762,249|1881125|
|Using new RegExp.test with cached regex pattern|3,990,684|1995343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:42:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15659695.310989846,"samples":7829848},{"name":"Using indexof","opsSec":15648441.530560715,"samples":7824221},{"name":"Using RegExp.test","opsSec":8291567.635134824,"samples":4145784},{"name":"Using RegExp.text with cached regex pattern","opsSec":8536924.292612327,"samples":4268463},{"name":"Using new RegExp.test","opsSec":3762249.194874075,"samples":1881125},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3990684.459598689,"samples":1995343}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,646,243|7823122|
|(short string) (true) String#slice and strict comparison|15,935,283|7967642|
|(long string) (true) String#startsWith|14,448,148|7224075|
|(long string) (true) String#slice and strict comparison|15,799,268|7899635|
|(short string) (false) String#startsWith|15,856,652|7928327|
|(short string) (false) String#slice and strict comparison|15,988,983|7994492|
|(long string) (false) String#startsWith|15,518,359|7759181|
|(long string) (false) String#slice and strict comparison|15,910,022|7955012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:45:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15646243.24898929,"samples":7823122},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15935283.45820757,"samples":7967642},{"name":"(long string) (true) String#startsWith","opsSec":14448148.41068637,"samples":7224075},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15799268.104045056,"samples":7899635},{"name":"(short string) (false) String#startsWith","opsSec":15856652.414446017,"samples":7928327},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15988983.840051359,"samples":7994492},{"name":"(long string) (false) String#startsWith","opsSec":15518359.610225445,"samples":7759181},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15910022.6635507,"samples":7955012}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,551,399|7775700|
|Using this|15,878,476|7939239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15551399.40903506,"samples":7775700},{"name":"Using this","opsSec":15878476.825010572,"samples":7939239}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,690,857|3345429|
|Date.now()|9,558,549|4779275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:48:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6690857.571785287,"samples":3345429},{"name":"Date.now()","opsSec":9558549.751475476,"samples":4779275}]}-->
