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
|Using if to check function existence|1,192,301|596151|
|Using ? operator to avoid rejection|1,254,664|627333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:10:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1192301.6685402712,"samples":596151},{"name":"Using ? operator to avoid rejection","opsSec":1254664.381482785,"samples":627333}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,895,347|7947674|
|Raw usage underscore usage|15,873,533|7936767|
|Manipulating private properties using #|15,827,206|7913604|
|Manipulating private properties using underscore(_)|15,904,732|7952367|
|Manipulating private properties using Symbol|15,911,327|7955664|
|Manipulating private properties using PrivateSymbol|12,145,248|6072625|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:13:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15895347.58675481,"samples":7947674},{"name":"Raw usage underscore usage","opsSec":15873533.714277884,"samples":7936767},{"name":"Manipulating private properties using #","opsSec":15827206.132373381,"samples":7913604},{"name":"Manipulating private properties using underscore(_)","opsSec":15904732.123283502,"samples":7952367},{"name":"Manipulating private properties using Symbol","opsSec":15911327.236146746,"samples":7955664},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12145248.95555887,"samples":6072625}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,842,734|1921368|
|Adding property in the object creation - small object|3,853,257|1926629|
|Adding property after the function creation - small class|300,370|150186|
|Adding property in the function creation - small class|319,965|160019|
|Adding property after the class creation - small class|309,114|154558|
|Adding property in the class creation - small class|326,931|163466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:15:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3842734.1478020446,"samples":1921368},{"name":"Adding property in the object creation - small object","opsSec":3853257.113750655,"samples":1926629},{"name":"Adding property after the function creation - small class","opsSec":300370.85919146595,"samples":150186},{"name":"Adding property in the function creation - small class","opsSec":319965.07995830255,"samples":160019},{"name":"Adding property after the class creation - small class","opsSec":309114.9137702656,"samples":154558},{"name":"Adding property in the class creation - small class","opsSec":326931.42917770153,"samples":163466}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,980,160|7990081|
|Getter|13,895,896|6947949|
|Method|15,873,831|7936916|
|DefineProperty (getter)|15,987,066|7993534|
|DefineProperty (getter & enumerable=false)|13,235,903|6617952|
|DefineProperty (getter & configurable=false)|16,033,995|8016998|
|DefineProperty (getter & enumerable=false & configurable=false)|13,184,974|6592488|
|DefineProperty (writable)|16,078,000|8039001|
|DefineProperty (writable & enumerable=false)|16,063,614|8031808|
|DefineProperty (writable & enumerable=false & configurable=false)|16,062,475|8031238|
|DefineProperties (getter)|13,191,326|6595664|
|DefineProperties (getter & enumerable=false)|13,210,579|6605290|
|DefineProperties (getter & enumerable=false & configurable=false)|13,174,019|6587010|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:19:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15980160.306121211,"samples":7990081},{"name":"Getter","opsSec":13895896.916076377,"samples":6947949},{"name":"Method","opsSec":15873831.809546756,"samples":7936916},{"name":"DefineProperty (getter)","opsSec":15987066.017658975,"samples":7993534},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13235903.0735118,"samples":6617952},{"name":"DefineProperty (getter & configurable=false)","opsSec":16033995.936002705,"samples":8016998},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13184974.36509294,"samples":6592488},{"name":"DefineProperty (writable)","opsSec":16078000.649606353,"samples":8039001},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16063614.746848516,"samples":8031808},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16062475.389910892,"samples":8031238},{"name":"DefineProperties (getter)","opsSec":13191326.496267164,"samples":6595664},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13210579.577186145,"samples":6605290},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13174019.367533173,"samples":6587010}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,656,928|7828465|
|Setter|6,423,695|3211848|
|Method|15,495,163|7747582|
|DefineProperty (setter)|15,776,923|7888462|
|DefineProperty (setter & enumerable=false)|6,611,044|3305523|
|DefineProperty (setter & configurable=false)|6,596,522|3298262|
|DefineProperty (setter & enumerable=false & configurable=false)|6,317,192|3158597|
|DefineProperty (writable)|15,527,673|7763837|
|DefineProperty (writable & enumerable=false)|15,708,695|7854348|
|DefineProperty (writable & enumerable=false & configurable=false)|15,565,505|7782753|
|DefineProperties (setter)|15,643,500|7821751|
|DefineProperties (setter & enumerable=false)|6,339,471|3169736|
|DefineProperties (setter & enumerable=false & configurable=false)|6,338,885|3169443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:22:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15656928.810064008,"samples":7828465},{"name":"Setter","opsSec":6423695.974313971,"samples":3211848},{"name":"Method","opsSec":15495163.814108254,"samples":7747582},{"name":"DefineProperty (setter)","opsSec":15776923.179517813,"samples":7888462},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6611044.175336206,"samples":3305523},{"name":"DefineProperty (setter & configurable=false)","opsSec":6596522.970955842,"samples":3298262},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6317192.294350333,"samples":3158597},{"name":"DefineProperty (writable)","opsSec":15527673.565340457,"samples":7763837},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15708695.183135686,"samples":7854348},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15565505.065984214,"samples":7782753},{"name":"DefineProperties (setter)","opsSec":15643500.842574041,"samples":7821751},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6339471.759042888,"samples":3169736},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6338885.835166866,"samples":3169443}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,841,241|5420621|
|{ ...object, __proto__: null }|2,240,983|1120492|
|{ ...object, newProp: true }|9,657,846|4828924|
|structuredClone|312,504|156253|
|JSON.parse + JSON.stringify|290,708|145355|
|loop + object.keys starting with {}|1,492,450|746226|
|loop + object.keys starting with { __proto__: null }|835,251|417626|
|loop + object.keys starting with { randomProp: true }|668,454|334228|
|object.keys + reduce(FN, {})|1,539,735|769868|
|object.keys + reduce(FN, { __proto__: null })|826,725|413363|
|object.keys + reduce(FN, { newProp: true })|693,115|346558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10841241.71811923,"samples":5420621},{"name":"{ ...object, __proto__: null }","opsSec":2240983.5742114806,"samples":1120492},{"name":"{ ...object, newProp: true }","opsSec":9657846.725165557,"samples":4828924},{"name":"structuredClone","opsSec":312504.9374831143,"samples":156253},{"name":"JSON.parse + JSON.stringify","opsSec":290708.7278587558,"samples":145355},{"name":"loop + object.keys starting with {}","opsSec":1492450.7135064034,"samples":746226},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":835251.6375012713,"samples":417626},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":668454.3596128158,"samples":334228},{"name":"object.keys + reduce(FN, {})","opsSec":1539735.162382399,"samples":769868},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":826725.8015857495,"samples":413363},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":693115.6922559536,"samples":346558}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|320,316|160159|
|Sort using first char|1,337,573|668787|
|Sort using localeCompare|1,278,515|639258|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":320316.3542145449,"samples":160159},{"name":"Sort using first char","opsSec":1337573.3713407144,"samples":668787},{"name":"Sort using localeCompare","opsSec":1278515.6420157258,"samples":639258}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,280|1141|
|{...smallObject} - Total keys: 2|12,194,636|6097319|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,519|1260|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,761|3381|
|{ ...bigObject, ...anotherBigObject }|1,371|686|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,208,725|3604363|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,739,263|5369632|
|{ ...smallObject, ...anotherSmallObject }|8,708,913|4354457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:32:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2280.421601627581,"samples":1141},{"name":"{...smallObject} - Total keys: 2","opsSec":12194636.24395652,"samples":6097319},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2519.781570214725,"samples":1260},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6761.755508444098,"samples":3381},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1371.5803211101388,"samples":686},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7208725.74048197,"samples":3604363},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10739263.054904524,"samples":5369632},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8708913.129108964,"samples":4354457}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,933,249|7966625|
|Using backtick (`)|15,970,668|7985335|
|Using array.join|6,481,178|3240590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:37:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15933249.107752912,"samples":7966625},{"name":"Using backtick (`)","opsSec":15970668.275163002,"samples":7985335},{"name":"Using array.join","opsSec":6481178.781533639,"samples":3240590}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,138,877|7069439|
|(short string) (true) String#slice and strict comparison|15,533,805|7766904|
|(long string) (true) String#endsWith|13,923,301|6961651|
|(long string) (true) String#slice and strict comparison|15,610,173|7805087|
|(short string) (false) String#endsWith|14,731,307|7365654|
|(short string) (false) String#slice and strict comparison|15,078,548|7539275|
|(long string) (false) String#endsWith|15,057,272|7528637|
|(long string) (false) String#slice and strict comparison|14,433,867|7216935|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14138877.773771191,"samples":7069439},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15533805.8252695,"samples":7766904},{"name":"(long string) (true) String#endsWith","opsSec":13923301.108904073,"samples":6961651},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15610173.906323818,"samples":7805087},{"name":"(short string) (false) String#endsWith","opsSec":14731307.14552859,"samples":7365654},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15078548.974701108,"samples":7539275},{"name":"(long string) (false) String#endsWith","opsSec":15057272.584579855,"samples":7528637},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14433867.69067228,"samples":7216935}]}-->

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
