## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|86,779,461|43390210|
|Using dot notation|60,144,754|30094621|
|Using define property (writable)|4,905,832|2454343|
|Using define property initialized (writable)|7,214,201|3607161|
|Using define property (getter)|2,461,480|1230789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":43390210,"opsSec":86779461.086955},{"name":"Using dot notation","samples":30094621,"opsSec":60144754.4888682},{"name":"Using define property (writable)","samples":2454343,"opsSec":4905832.728438478},{"name":"Using define property initialized (writable)","samples":3607161,"opsSec":7214201.609403541},{"name":"Using define property (getter)","samples":1230789,"opsSec":2461480.569676091}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.44ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|32.774ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,974.279ms
new Array(length)|100,000,000|4,290.393ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|183.626ms
new Array(length)|10,000|0.034ms
array.push|1,000,000|18.246ms
new Array(length)|1,000,000|7.855ms
array.push|100,000,000|2,083.307ms
new Array(length)|100,000,000|5,011.245ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|268|135|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":135,"opsSec":268.3789226024769},{"name":"Array.from","samples":12,"opsSec":22.805142744410524}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,633|2317|
|new Blob (1024)|573|290|
|text (128)|4,091|2054|
|text (1024)|518|260|
|arrayBuffer (128)|4,119|2060|
|arrayBuffer (1024)|507|255|
|slice (0, 64)|155,101|81268|
|slice (0, 512)|31,564|15784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2317,"opsSec":4633.6519756674115},{"name":"new Blob (1024)","samples":290,"opsSec":573.0440701715781},{"name":"text (128)","samples":2054,"opsSec":4091.1134383495996},{"name":"text (1024)","samples":260,"opsSec":518.0610828328245},{"name":"arrayBuffer (128)","samples":2060,"opsSec":4119.86963908488},{"name":"arrayBuffer (1024)","samples":255,"opsSec":507.7632611978362},{"name":"slice (0, 64)","samples":81268,"opsSec":155101.18706361818},{"name":"slice (0, 512)","samples":15784,"opsSec":31564.41687052569}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.05 ms|1|
|Gzip|134.66 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:22:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134051937},{"name":"Gzip","samples":1,"totalTime":0.134660821}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,656|3329|
|crypto.verify('RSA-SHA256')|6,815|3408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3329,"opsSec":6656.919741691998},{"name":"crypto.verify('RSA-SHA256')","samples":3408,"opsSec":6815.291795768334}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,521,808|760949|
|fromUnixToISOString(new Date())|2,270,964|1135745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":760949,"opsSec":1521808.0367960967},{"name":"fromUnixToISOString(new Date())","samples":1135745,"opsSec":2270964.4397835587}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,551|9798|
|Intl.DateTimeFormat().format(new Date())|20,224|10113|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,392|10197|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,165|9587|
|Reusing Intl.DateTimeFormat()|511,306|256356|
|Date.toLocaleDateString()|1,020,191|510097|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,570|12286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9798,"opsSec":19551.106553620513},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10113,"opsSec":20224.98413949664},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10197,"opsSec":20392.5564517139},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9587,"opsSec":19165.092639893755},{"name":"Reusing Intl.DateTimeFormat()","samples":256356,"opsSec":511306.9224414478},{"name":"Date.toLocaleDateString()","samples":510097,"opsSec":1020191.2760892928},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12286,"opsSec":24570.856718036906}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,421|536209|
|Using brackets {}|1,083,416|541709|
|Using '' + |1,074,407|537206|
|Using date.toString()|1,179,230|589734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":536209,"opsSec":1070421.7341137123},{"name":"Using brackets {}","samples":541709,"opsSec":1083416.663063838},{"name":"Using '' + ","samples":537206,"opsSec":1074407.6916251564},{"name":"Using date.toString()","samples":589734,"opsSec":1179230.319053813}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,022,952|2012182|
|Using delete property (proto: null)|17,773,817|8888359|
|Using delete property (cached proto: null)|4,039,796|2019900|
|Using undefined assignment|77,493,741|38747207|
|Using undefined assignment (proto: null)|19,282,446|9641224|
|Using undefined property (cached proto: null)|77,266,466|38636390|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2012182,"opsSec":4022952.9733823044},{"name":"Using delete property (proto: null)","samples":8888359,"opsSec":17773817.24193085},{"name":"Using delete property (cached proto: null)","samples":2019900,"opsSec":4039796.307626175},{"name":"Using undefined assignment","samples":38747207,"opsSec":77493741.50931118},{"name":"Using undefined assignment (proto: null)","samples":9641224,"opsSec":19282446.534534063},{"name":"Using undefined property (cached proto: null)","samples":38636390,"opsSec":77266466.86605825}]}-->

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
