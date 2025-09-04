## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,664,198|44836868|
|Using dot notation|64,241,064|32161724|
|Using define property (writable)|4,914,654|2457330|
|Using define property initialized (writable)|7,186,657|3594650|
|Using define property (getter)|2,499,599|1249833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:12:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44836868,"opsSec":89664198.59852347},{"name":"Using dot notation","samples":32161724,"opsSec":64241064.23137266},{"name":"Using define property (writable)","samples":2457330,"opsSec":4914654.9870519135},{"name":"Using define property initialized (writable)","samples":3594650,"opsSec":7186657.609730054},{"name":"Using define property (getter)","samples":1249833,"opsSec":2499599.5706418105}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.317ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|30.832ms
new Array(length)|1,000,000|7.301ms
array.push|10,000,000|254.068ms
new Array(length)|10,000,000|66.034ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.473ms
new Array(length)|10,000|0.215ms
array.push|1,000,000|20.658ms
new Array(length)|1,000,000|12.57ms
array.push|10,000,000|226.256ms
new Array(length)|10,000,000|64.605ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|280|142|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:21:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":142,"opsSec":280.6514010724702},{"name":"Array.from","samples":11,"opsSec":21.331462163328684}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,401|2201|
|new Blob (1024)|578|294|
|text (128)|4,087|2044|
|text (1024)|513|257|
|arrayBuffer (128)|4,097|2049|
|arrayBuffer (1024)|508|255|
|slice (0, 64)|154,546|81404|
|slice (0, 512)|31,544|15783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:27:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2201,"opsSec":4401.478169551174},{"name":"new Blob (1024)","samples":294,"opsSec":578.4967310664838},{"name":"text (128)","samples":2044,"opsSec":4087.1088467870463},{"name":"text (1024)","samples":257,"opsSec":513.5538490665158},{"name":"arrayBuffer (128)","samples":2049,"opsSec":4097.702982097046},{"name":"arrayBuffer (1024)","samples":255,"opsSec":508.6528857320388},{"name":"slice (0, 64)","samples":81404,"opsSec":154546.70613276638},{"name":"slice (0, 512)","samples":15783,"opsSec":31544.92508790817}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.30 ms|1|
|Gzip|137.10 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:30:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133295568},{"name":"Gzip","samples":1,"totalTime":0.137104927}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,899|3451|
|crypto.verify('RSA-SHA256')|6,617|3309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3451,"opsSec":6899.313572878247},{"name":"crypto.verify('RSA-SHA256')","samples":3309,"opsSec":6617.855598390844}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,496,695|748378|
|fromUnixToISOString(new Date())|2,230,017|1115178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":748378,"opsSec":1496695.2581196446},{"name":"fromUnixToISOString(new Date())","samples":1115178,"opsSec":2230017.857932166}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,745|10376|
|Intl.DateTimeFormat().format(new Date())|20,073|10037|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,493|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,816|9409|
|Reusing Intl.DateTimeFormat()|496,743|248375|
|Date.toLocaleDateString()|1,025,686|512845|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,602|12302|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10376,"opsSec":20745.689742059774},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10037,"opsSec":20073.676492629642},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9748,"opsSec":19493.820473908094},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9409,"opsSec":18816.88001930125},{"name":"Reusing Intl.DateTimeFormat()","samples":248375,"opsSec":496743.05751902814},{"name":"Date.toLocaleDateString()","samples":512845,"opsSec":1025686.9865316337},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12302,"opsSec":24602.339145288977}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,052,216|526119|
|Using brackets {}|1,084,478|542240|
|Using '' + |1,074,003|537939|
|Using date.toString()|1,189,274|594639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":526119,"opsSec":1052216.4169368558},{"name":"Using brackets {}","samples":542240,"opsSec":1084478.156387134},{"name":"Using '' + ","samples":537939,"opsSec":1074003.4344055885},{"name":"Using date.toString()","samples":594639,"opsSec":1189274.9031281522}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,986,477|1994757|
|Using delete property (proto: null)|17,549,199|8775059|
|Using delete property (cached proto: null)|4,091,760|2045884|
|Using undefined assignment|71,271,738|35636874|
|Using undefined assignment (proto: null)|19,351,063|9676723|
|Using undefined property (cached proto: null)|72,086,829|36053985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1994757,"opsSec":3986477.5638232767},{"name":"Using delete property (proto: null)","samples":8775059,"opsSec":17549199.720575422},{"name":"Using delete property (cached proto: null)","samples":2045884,"opsSec":4091760.823051517},{"name":"Using undefined assignment","samples":35636874,"opsSec":71271738.13698454},{"name":"Using undefined assignment (proto: null)","samples":9676723,"opsSec":19351063.148785986},{"name":"Using undefined property (cached proto: null)","samples":36053985,"opsSec":72086829.3838939}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|323,607|161804|
|NodeError|305,815|152908|
|NodeError Range|285,152|142577|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:46:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":161804,"opsSec":323607.02529563976},{"name":"NodeError","samples":152908,"opsSec":305815.05319659534},{"name":"NodeError Range","samples":142577,"opsSec":285152.3461163925}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,499,926|34250188|
|using Array.includes (first item)|77,655,840|38840423|
|Using raw comparison|92,597,342|46303887|
|Using raw comparison (first item)|92,602,721|46309875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:51:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34250188,"opsSec":68499926.22948438},{"name":"using Array.includes (first item)","samples":38840423,"opsSec":77655840.04294777},{"name":"Using raw comparison","samples":46303887,"opsSec":92597342.35379979},{"name":"Using raw comparison (first item)","samples":46309875,"opsSec":92602721.84109698}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|39,610,692|19805970|
|Using Object.getOwnPropertyNames()|41,000,226|20500114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:55:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":19805970,"opsSec":39610692.421631485},{"name":"Using Object.getOwnPropertyNames()","samples":20500114,"opsSec":41000226.441991396}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,443,556|47721803|
|Length = 10_000 - Array.at|95,331,847|47946006|
|Length = 1_000_000 - Array.at|93,293,712|46646870|
|Length = 100 - Array[length - 1]|93,593,436|46807411|
|Length = 10_000 - Array[length - 1]|94,241,790|47120900|
|Length = 1_000_000 - Array[length - 1]|94,078,727|47045621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47721803,"opsSec":95443556.94201174},{"name":"Length = 10_000 - Array.at","samples":47946006,"opsSec":95331847.59279191},{"name":"Length = 1_000_000 - Array.at","samples":46646870,"opsSec":93293712.75823587},{"name":"Length = 100 - Array[length - 1]","samples":46807411,"opsSec":93593436.4613292},{"name":"Length = 10_000 - Array[length - 1]","samples":47120900,"opsSec":94241790.19885382},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47045621,"opsSec":94078727.45951588}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,403,228|47201631|
|~ (small)|93,442,004|46748040|
|Math.floor (long)|93,164,293|46750869|
|~ (long)|96,692,113|48346096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47201631,"opsSec":94403228.3924507},{"name":"~ (small)","samples":46748040,"opsSec":93442004.55131413},{"name":"Math.floor (long)","samples":46750869,"opsSec":93164293.38910152},{"name":"~ (long)","samples":48346096,"opsSec":96692113.48600386}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|30,571,211|15291622|
|Object.create({})|2,110,373|1055187|
|new Function with empty prototype|96,223,902|48119122|
|Empty class|76,543,594|38274141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15291622,"opsSec":30571211.96582176},{"name":"Object.create({})","samples":1055187,"opsSec":2110373.848053083},{"name":"new Function with empty prototype","samples":48119122,"opsSec":96223902.59710911},{"name":"Empty class","samples":38274141,"opsSec":76543594.164119}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,940,603|46970625|
|Using parseInt(x, 10) - big number (10 len)|96,999,851|48515372|
|Using + - small number (2 len)|97,143,115|48573584|
|Using + - big number (10 len)|97,153,345|48592831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46970625,"opsSec":93940603.12500688},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48515372,"opsSec":96999851.09942245},{"name":"Using + - small number (2 len)","samples":48573584,"opsSec":97143115.38351242},{"name":"Using + - big number (10 len)","samples":48592831,"opsSec":97153345.10559078}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|923,526|461764|
|Using ? operator to avoid rejection|1,136,205|568627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:13:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":461764,"opsSec":923526.7735564448},{"name":"Using ? operator to avoid rejection","samples":568627,"opsSec":1136205.234847616}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|92,124,857|46062770|
|Raw usage underscore usage|92,225,168|46114566|
|Manipulating private properties using #|92,011,689|46005851|
|Manipulating private properties using underscore(_)|92,142,144|46071076|
|Manipulating private properties using Symbol|92,403,689|46202315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:16:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":46062770,"opsSec":92124857.53905535},{"name":"Raw usage underscore usage","samples":46114566,"opsSec":92225168.5311572},{"name":"Manipulating private properties using #","samples":46005851,"opsSec":92011689.67043358},{"name":"Manipulating private properties using underscore(_)","samples":46071076,"opsSec":92142144.26005988},{"name":"Manipulating private properties using Symbol","samples":46202315,"opsSec":92403689.70005362}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,857,732|3928869|
|Adding property in the object creation - small object|7,510,187|3755096|
|Adding property after the function creation - small class|276,304|138347|
|Adding property in the function creation - small class|285,301|142654|
|Adding property after the class creation - small class|271,733|137665|
|Adding property in the class creation - small class|272,587|140159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:22:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3928869,"opsSec":7857732.641026339},{"name":"Adding property in the object creation - small object","samples":3755096,"opsSec":7510187.899437406},{"name":"Adding property after the function creation - small class","samples":138347,"opsSec":276304.99517078896},{"name":"Adding property in the function creation - small class","samples":142654,"opsSec":285301.64347938326},{"name":"Adding property after the class creation - small class","samples":137665,"opsSec":271733.2951712527},{"name":"Adding property in the class creation - small class","samples":140159,"opsSec":272587.683167185}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,056,224|48557068|
|Getter|49,846,425|24923682|
|Method|94,640,192|47320116|
|DefineProperty (getter)|94,253,733|47138225|
|DefineProperty (getter & enumerable=false)|50,003,182|25004255|
|DefineProperty (getter & configurable=false)|97,219,363|48609693|
|DefineProperty (getter & enumerable=false & configurable=false)|46,615,120|23314259|
|DefineProperty (writable)|95,697,675|47853332|
|DefineProperty (writable & enumerable=false)|94,495,161|47247588|
|DefineProperty (writable & enumerable=false & configurable=false)|97,282,384|48655641|
|DefineProperties (getter)|49,853,629|24935752|
|DefineProperties (getter & enumerable=false)|49,955,351|24981802|
|DefineProperties (getter & enumerable=false & configurable=false)|47,590,429|23800773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48557068,"opsSec":97056224.29797342},{"name":"Getter","samples":24923682,"opsSec":49846425.192427926},{"name":"Method","samples":47320116,"opsSec":94640192.25111927},{"name":"DefineProperty (getter)","samples":47138225,"opsSec":94253733.71912888},{"name":"DefineProperty (getter & enumerable=false)","samples":25004255,"opsSec":50003182.16094076},{"name":"DefineProperty (getter & configurable=false)","samples":48609693,"opsSec":97219363.83398505},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23314259,"opsSec":46615120.62787107},{"name":"DefineProperty (writable)","samples":47853332,"opsSec":95697675.3087536},{"name":"DefineProperty (writable & enumerable=false)","samples":47247588,"opsSec":94495161.25875483},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48655641,"opsSec":97282384.46226026},{"name":"DefineProperties (getter)","samples":24935752,"opsSec":49853629.77870092},{"name":"DefineProperties (getter & enumerable=false)","samples":24981802,"opsSec":49955351.475846894},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23800773,"opsSec":47590429.63708365}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,983,004|47991525|
|Setter|11,481,165|5753980|
|Method|92,675,644|46337827|
|DefineProperty (setter)|96,391,677|48197687|
|DefineProperty (setter & enumerable=false)|11,709,392|5854804|
|DefineProperty (setter & configurable=false)|11,748,878|5874775|
|DefineProperty (setter & enumerable=false & configurable=false)|11,731,990|5866031|
|DefineProperty (writable)|96,439,781|48220575|
|DefineProperty (writable & enumerable=false)|95,725,369|47862708|
|DefineProperty (writable & enumerable=false & configurable=false)|93,199,235|46607083|
|DefineProperties (setter)|94,915,673|47458696|
|DefineProperties (setter & enumerable=false)|11,583,976|5792081|
|DefineProperties (setter & enumerable=false & configurable=false)|11,452,201|5726104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47991525,"opsSec":95983004.8879877},{"name":"Setter","samples":5753980,"opsSec":11481165.691792792},{"name":"Method","samples":46337827,"opsSec":92675644.9177868},{"name":"DefineProperty (setter)","samples":48197687,"opsSec":96391677.9575004},{"name":"DefineProperty (setter & enumerable=false)","samples":5854804,"opsSec":11709392.453503715},{"name":"DefineProperty (setter & configurable=false)","samples":5874775,"opsSec":11748878.81005134},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5866031,"opsSec":11731990.059436956},{"name":"DefineProperty (writable)","samples":48220575,"opsSec":96439781.32662341},{"name":"DefineProperty (writable & enumerable=false)","samples":47862708,"opsSec":95725369.66892107},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46607083,"opsSec":93199235.66884433},{"name":"DefineProperties (setter)","samples":47458696,"opsSec":94915673.07716057},{"name":"DefineProperties (setter & enumerable=false)","samples":5792081,"opsSec":11583976.725876248},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5726104,"opsSec":11452201.128679324}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,223,137|1611907|
|Using replaceAll()|3,184,549|1592511|
|Using replaceAll(//g)|2,966,839|1483610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:34:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1611907,"opsSec":3223137.83725195},{"name":"Using replaceAll()","samples":1592511,"opsSec":3184549.915951359},{"name":"Using replaceAll(//g)","samples":1483610,"opsSec":2966839.6570896404}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,107,490|12555526|
|{ ...object, __proto__: null }|2,486,755|1243379|
|{ ...object, newProp: true }|22,539,129|11269635|
|structuredClone|287,539|143803|
|JSON.parse + JSON.stringify|300,239|150148|
|loop + object.keys starting with {}|1,673,233|836745|
|loop + object.keys starting with { __proto__: null }|783,603|391802|
|loop + object.keys starting with { randomProp: true }|608,450|304294|
|object.keys + reduce(FN, {})|1,699,665|849897|
|object.keys + reduce(FN, { __proto__: null })|822,740|411391|
|object.keys + reduce(FN, { newProp: true })|612,061|306031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12555526,"opsSec":25107490.402056508},{"name":"{ ...object, __proto__: null }","samples":1243379,"opsSec":2486755.8862574967},{"name":"{ ...object, newProp: true }","samples":11269635,"opsSec":22539129.806612603},{"name":"structuredClone","samples":143803,"opsSec":287539.0890788932},{"name":"JSON.parse + JSON.stringify","samples":150148,"opsSec":300239.49252559076},{"name":"loop + object.keys starting with {}","samples":836745,"opsSec":1673233.684024879},{"name":"loop + object.keys starting with { __proto__: null }","samples":391802,"opsSec":783603.8949970781},{"name":"loop + object.keys starting with { randomProp: true }","samples":304294,"opsSec":608450.2894459896},{"name":"object.keys + reduce(FN, {})","samples":849897,"opsSec":1699665.1347888105},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":411391,"opsSec":822740.3693373115},{"name":"object.keys + reduce(FN, { newProp: true })","samples":306031,"opsSec":612061.2667506024}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|324,838|162430|
|Sort using first char|1,335,532|667912|
|Sort using localeCompare|1,211,511|605801|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:44:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":162430,"opsSec":324838.61782282044},{"name":"Sort using first char","samples":667912,"opsSec":1335532.020647518},{"name":"Sort using localeCompare","samples":605801,"opsSec":1211511.8538259806}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,986|1494|
|{...smallObject} - Total keys: 2|37,675,684|18838107|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,053|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,697|3349|
|{ ...bigObject, ...anotherBigObject }|1,399|700|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,823,095|5914351|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,621,612|13313147|
|{ ...smallObject, ...anotherSmallObject }|19,384,268|9695548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:52:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1494,"opsSec":2986.6423739226557},{"name":"{...smallObject} - Total keys: 2","samples":18838107,"opsSec":37675684.35522933},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":528,"opsSec":1053.2186601622436},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3349,"opsSec":6697.854174318917},{"name":"{ ...bigObject, ...anotherBigObject }","samples":700,"opsSec":1399.6786057985364},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5914351,"opsSec":11823095.511754517},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13313147,"opsSec":26621612.216789108},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9695548,"opsSec":19384268.356693797}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,915|958|
|streams.web.Readable reading 1e3 * "some data"|1,655|828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":958,"opsSec":1915.166393184704},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":828,"opsSec":1655.8733687399988}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|13,311|6661|
|streams.web.WritableStream writing 1e3 * "some data"|1,701|851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6661,"opsSec":13311.963737803086},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":851,"opsSec":1701.7745318922698}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|95,506,583|47753336|
|Using backtick (`)|96,131,646|48065830|
|Using array.join|9,989,957|4994981|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:04:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":47753336,"opsSec":95506583.17887765},{"name":"Using backtick (`)","samples":48065830,"opsSec":96131646.73383275},{"name":"Using array.join","samples":4994981,"opsSec":9989957.104921019}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,171,781|42085913|
|(short string) (true) String#slice and strict comparison|55,718,146|27859082|
|(long string) (true) String#endsWith|65,260,507|32630263|
|(long string) (true) String#slice and strict comparison|51,401,809|25701003|
|(short string) (false) String#endsWith|90,687,296|45357770|
|(short string) (false) String#slice and strict comparison|56,601,044|28304153|
|(long string) (false) String#endsWith|82,190,875|41095453|
|(long string) (false) String#slice and strict comparison|50,473,814|25240527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42085913,"opsSec":84171781.55729935},{"name":"(short string) (true) String#slice and strict comparison","samples":27859082,"opsSec":55718146.05875697},{"name":"(long string) (true) String#endsWith","samples":32630263,"opsSec":65260507.46601588},{"name":"(long string) (true) String#slice and strict comparison","samples":25701003,"opsSec":51401809.953496836},{"name":"(short string) (false) String#endsWith","samples":45357770,"opsSec":90687296.34842525},{"name":"(short string) (false) String#slice and strict comparison","samples":28304153,"opsSec":56601044.08604375},{"name":"(long string) (false) String#endsWith","samples":41095453,"opsSec":82190875.91813941},{"name":"(long string) (false) String#slice and strict comparison","samples":25240527,"opsSec":50473814.237980954}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,934,704|7971904|
|Using indexof|15,774,449|7887324|
|Using RegExp.test|13,286,070|6643316|
|Using RegExp.text with cached regex pattern|14,441,047|7220594|
|Using new RegExp.test|4,696,442|2348497|
|Using new RegExp.test with cached regex pattern|5,294,552|2648096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:14:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7971904,"opsSec":15934704.535168465},{"name":"Using indexof","samples":7887324,"opsSec":15774449.21039105},{"name":"Using RegExp.test","samples":6643316,"opsSec":13286070.743227523},{"name":"Using RegExp.text with cached regex pattern","samples":7220594,"opsSec":14441047.604135193},{"name":"Using new RegExp.test","samples":2348497,"opsSec":4696442.8912124885},{"name":"Using new RegExp.test with cached regex pattern","samples":2648096,"opsSec":5294552.361846373}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,669,583|43905543|
|(short string) (true) String#slice and strict comparison|57,320,293|28688500|
|(long string) (true) String#startsWith|66,700,171|33352116|
|(long string) (true) String#slice and strict comparison|52,248,185|26126168|
|(short string) (false) String#startsWith|93,131,559|46565868|
|(short string) (false) String#slice and strict comparison|57,055,401|28539094|
|(long string) (false) String#startsWith|84,588,269|42295115|
|(long string) (false) String#slice and strict comparison|51,507,369|25759440|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:22:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43905543,"opsSec":87669583.43487443},{"name":"(short string) (true) String#slice and strict comparison","samples":28688500,"opsSec":57320293.4922105},{"name":"(long string) (true) String#startsWith","samples":33352116,"opsSec":66700171.42696387},{"name":"(long string) (true) String#slice and strict comparison","samples":26126168,"opsSec":52248185.50863957},{"name":"(short string) (false) String#startsWith","samples":46565868,"opsSec":93131559.0500378},{"name":"(short string) (false) String#slice and strict comparison","samples":28539094,"opsSec":57055401.32792845},{"name":"(long string) (false) String#startsWith","samples":42295115,"opsSec":84588269.41309154},{"name":"(long string) (false) String#slice and strict comparison","samples":25759440,"opsSec":51507369.95707991}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|87,080,522|43540267|
|Using this|94,392,577|47196317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":43540267,"opsSec":87080522.67953204},{"name":"Using this","samples":47196317,"opsSec":94392577.36445358}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,497,852|6249747|
|Date.now()|19,815,226|9907615|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6249747,"opsSec":12497852.232139377},{"name":"Date.now()","samples":9907615,"opsSec":19815226.27473746}]}-->
