## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,096,857|44082967|
|Using dot notation|64,849,499|32426352|
|Using define property (writable)|4,739,171|2370026|
|Using define property initialized (writable)|7,286,188|3643101|
|Using define property (getter)|2,430,490|1217205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:57:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":44082967,"opsSec":88096857.95844965},{"name":"Using dot notation","samples":32426352,"opsSec":64849499.26744521},{"name":"Using define property (writable)","samples":2370026,"opsSec":4739171.916818359},{"name":"Using define property initialized (writable)","samples":3643101,"opsSec":7286188.6225576885},{"name":"Using define property (getter)","samples":1217205,"opsSec":2430490.047319921}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.357ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|33.11ms
new Array(length)|1,000,000|8.952ms
array.push|100,000,000|1,969.396ms
new Array(length)|100,000,000|4,322.065ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|200.197ms
new Array(length)|10,000|0.057ms
array.push|1,000,000|18.021ms
new Array(length)|1,000,000|8.064ms
array.push|100,000,000|2,083.393ms
new Array(length)|100,000,000|5,025.68ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|277|140|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:11:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":140,"opsSec":277.61137784838525},{"name":"Array.from","samples":12,"opsSec":22.621607541199417}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,041|2529|
|new Blob (1024)|637|320|
|text (128)|4,164|2094|
|text (1024)|521|261|
|arrayBuffer (128)|4,169|2085|
|arrayBuffer (1024)|518|260|
|slice (0, 64)|161,523|80763|
|slice (0, 512)|20,059|11300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2529,"opsSec":5041.94211016713},{"name":"new Blob (1024)","samples":320,"opsSec":637.6659500477085},{"name":"text (128)","samples":2094,"opsSec":4164.649103999313},{"name":"text (1024)","samples":261,"opsSec":521.0046237922726},{"name":"arrayBuffer (128)","samples":2085,"opsSec":4169.092096814077},{"name":"arrayBuffer (1024)","samples":260,"opsSec":518.9538699549745},{"name":"slice (0, 64)","samples":80763,"opsSec":161523.40625714234},{"name":"slice (0, 512)","samples":11300,"opsSec":20059.95505164096}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.42 ms|1|
|Gzip|134.71 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:24:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132418728},{"name":"Gzip","samples":1,"totalTime":0.13470931}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,889|3445|
|crypto.verify('RSA-SHA256')|6,856|3429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3445,"opsSec":6889.376800753357},{"name":"crypto.verify('RSA-SHA256')","samples":3429,"opsSec":6856.98955401932}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,460,971|731207|
|fromUnixToISOString(new Date())|2,109,836|1055032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":731207,"opsSec":1460971.5506466723},{"name":"fromUnixToISOString(new Date())","samples":1055032,"opsSec":2109836.7199491803}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,741|10371|
|Intl.DateTimeFormat().format(new Date())|20,192|10097|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,059|10030|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,216|9609|
|Reusing Intl.DateTimeFormat()|588,102|294053|
|Date.toLocaleDateString()|1,087,141|543814|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,772|12389|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10371,"opsSec":20741.401403155505},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10097,"opsSec":20192.41218985986},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10030,"opsSec":20059.05521849921},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9609,"opsSec":19216.668015873147},{"name":"Reusing Intl.DateTimeFormat()","samples":294053,"opsSec":588102.384346541},{"name":"Date.toLocaleDateString()","samples":543814,"opsSec":1087141.6432687675},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12389,"opsSec":24772.99446782981}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,496|522152|
|Using brackets {}|1,052,935|526469|
|Using '' + |1,047,037|523519|
|Using date.toString()|1,152,744|576874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":522152,"opsSec":1043496.7905357196},{"name":"Using brackets {}","samples":526469,"opsSec":1052935.5171780505},{"name":"Using '' + ","samples":523519,"opsSec":1047037.8722613795},{"name":"Using date.toString()","samples":576874,"opsSec":1152744.0728814395}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,036,544|2018274|
|Using delete property (proto: null)|15,829,193|7916397|
|Using delete property (cached proto: null)|4,016,345|2008174|
|Using undefined assignment|74,020,804|37016212|
|Using undefined assignment (proto: null)|18,538,119|9269062|
|Using undefined property (cached proto: null)|74,742,744|37375254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2018274,"opsSec":4036544.940298935},{"name":"Using delete property (proto: null)","samples":7916397,"opsSec":15829193.776509084},{"name":"Using delete property (cached proto: null)","samples":2008174,"opsSec":4016345.6464214507},{"name":"Using undefined assignment","samples":37016212,"opsSec":74020804.65820958},{"name":"Using undefined assignment (proto: null)","samples":9269062,"opsSec":18538119.36547016},{"name":"Using undefined property (cached proto: null)","samples":37375254,"opsSec":74742744.47113179}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|337,307|168654|
|NodeError|308,918|154460|
|NodeError Range|303,469|151852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:48:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":168654,"opsSec":337307.1014138819},{"name":"NodeError","samples":154460,"opsSec":308918.4535542215},{"name":"NodeError Range","samples":151852,"opsSec":303469.0530452561}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,887,705|34945080|
|using Array.includes (first item)|77,164,862|38915804|
|Using raw comparison|91,285,713|45644827|
|Using raw comparison (first item)|94,550,256|47275929|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:50:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":34945080,"opsSec":69887705.1244698},{"name":"using Array.includes (first item)","samples":38915804,"opsSec":77164862.53598224},{"name":"Using raw comparison","samples":45644827,"opsSec":91285713.3783249},{"name":"Using raw comparison (first item)","samples":47275929,"opsSec":94550256.8859499}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|36,643,266|18325566|
|Using Object.getOwnPropertyNames()|42,078,416|21041518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:54:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":18325566,"opsSec":36643266.30302846},{"name":"Using Object.getOwnPropertyNames()","samples":21041518,"opsSec":42078416.968012586}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|89,218,470|44864933|
|Length = 10_000 - Array.at|94,675,812|47338117|
|Length = 1_000_000 - Array.at|94,701,926|47351704|
|Length = 100 - Array[length - 1]|92,444,206|46522324|
|Length = 10_000 - Array[length - 1]|92,970,273|46485138|
|Length = 1_000_000 - Array[length - 1]|93,038,977|46519529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:56:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44864933,"opsSec":89218470.89947553},{"name":"Length = 10_000 - Array.at","samples":47338117,"opsSec":94675812.12458116},{"name":"Length = 1_000_000 - Array.at","samples":47351704,"opsSec":94701926.10426033},{"name":"Length = 100 - Array[length - 1]","samples":46522324,"opsSec":92444206.60790132},{"name":"Length = 10_000 - Array[length - 1]","samples":46485138,"opsSec":92970273.5827729},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46519529,"opsSec":93038977.24216774}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,247,483|48623775|
|~ (small)|97,203,230|48602843|
|Math.floor (long)|96,927,736|48512714|
|~ (long)|86,126,048|43407537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":48623775,"opsSec":97247483.87171096},{"name":"~ (small)","samples":48602843,"opsSec":97203230.64639388},{"name":"Math.floor (long)","samples":48512714,"opsSec":96927736.27930336},{"name":"~ (long)","samples":43407537,"opsSec":86126048.72945878}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,631,084|15816654|
|Object.create({})|2,048,157|1030606|
|new Function with empty prototype|72,212,524|36117387|
|Empty class|70,777,129|35406758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15816654,"opsSec":31631084.20825582},{"name":"Object.create({})","samples":1030606,"opsSec":2048157.0836158602},{"name":"new Function with empty prototype","samples":36117387,"opsSec":72212524.59904578},{"name":"Empty class","samples":35406758,"opsSec":70777129.90218008}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,292,281|48146445|
|Using parseInt(x, 10) - big number (10 len)|96,703,370|48352602|
|Using + - small number (2 len)|96,893,969|48446997|
|Using + - big number (10 len)|96,978,480|48493401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48146445,"opsSec":96292281.43278134},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48352602,"opsSec":96703370.8909014},{"name":"Using + - small number (2 len)","samples":48446997,"opsSec":96893969.38893178},{"name":"Using + - big number (10 len)","samples":48493401,"opsSec":96978480.6644881}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,098,050|559311|
|Using ? operator to avoid rejection|1,166,166|583085|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:12:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":559311,"opsSec":1098050.9876201123},{"name":"Using ? operator to avoid rejection","samples":583085,"opsSec":1166166.1143345071}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|93,961,514|46981773|
|Raw usage underscore usage|91,915,835|46426963|
|Manipulating private properties using #|86,368,023|43652404|
|Manipulating private properties using underscore(_)|93,514,048|47054685|
|Manipulating private properties using Symbol|94,349,184|47187047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:17:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":46981773,"opsSec":93961514.73997436},{"name":"Raw usage underscore usage","samples":46426963,"opsSec":91915835.19201039},{"name":"Manipulating private properties using #","samples":43652404,"opsSec":86368023.11035907},{"name":"Manipulating private properties using underscore(_)","samples":47054685,"opsSec":93514048.5323851},{"name":"Manipulating private properties using Symbol","samples":47187047,"opsSec":94349184.87170203}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,993,614|3996810|
|Adding property in the object creation - small object|7,915,335|3963985|
|Adding property after the function creation - small class|267,920|133968|
|Adding property in the function creation - small class|285,678|142840|
|Adding property after the class creation - small class|268,172|136561|
|Adding property in the class creation - small class|268,822|134486|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:21:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3996810,"opsSec":7993614.32453383},{"name":"Adding property in the object creation - small object","samples":3963985,"opsSec":7915335.920739439},{"name":"Adding property after the function creation - small class","samples":133968,"opsSec":267920.07911721856},{"name":"Adding property in the function creation - small class","samples":142840,"opsSec":285678.90699250187},{"name":"Adding property after the class creation - small class","samples":136561,"opsSec":268172.61006309214},{"name":"Adding property in the class creation - small class","samples":134486,"opsSec":268822.6743808349}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,498,846|47764415|
|Getter|49,952,934|24976480|
|Method|94,799,891|47399966|
|DefineProperty (getter)|96,955,127|48477583|
|DefineProperty (getter & enumerable=false)|50,030,768|25015404|
|DefineProperty (getter & configurable=false)|95,128,585|47564302|
|DefineProperty (getter & enumerable=false & configurable=false)|46,865,949|23432983|
|DefineProperty (writable)|96,961,337|48480681|
|DefineProperty (writable & enumerable=false)|94,071,480|47035910|
|DefineProperty (writable & enumerable=false & configurable=false)|87,920,224|43960127|
|DefineProperties (getter)|46,616,714|23308367|
|DefineProperties (getter & enumerable=false)|47,111,544|23559345|
|DefineProperties (getter & enumerable=false & configurable=false)|48,223,745|24112338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":47764415,"opsSec":95498846.41818778},{"name":"Getter","samples":24976480,"opsSec":49952934.524003394},{"name":"Method","samples":47399966,"opsSec":94799891.04644707},{"name":"DefineProperty (getter)","samples":48477583,"opsSec":96955127.2179491},{"name":"DefineProperty (getter & enumerable=false)","samples":25015404,"opsSec":50030768.075447075},{"name":"DefineProperty (getter & configurable=false)","samples":47564302,"opsSec":95128585.73531155},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23432983,"opsSec":46865949.971845105},{"name":"DefineProperty (writable)","samples":48480681,"opsSec":96961337.37182032},{"name":"DefineProperty (writable & enumerable=false)","samples":47035910,"opsSec":94071480.77824032},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43960127,"opsSec":87920224.63464497},{"name":"DefineProperties (getter)","samples":23308367,"opsSec":46616714.60744672},{"name":"DefineProperties (getter & enumerable=false)","samples":23559345,"opsSec":47111544.49782292},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24112338,"opsSec":48223745.57105295}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,955,709|47977865|
|Setter|11,114,214|5629656|
|Method|92,019,659|46009851|
|DefineProperty (setter)|95,551,439|47775734|
|DefineProperty (setter & enumerable=false)|11,375,883|5688086|
|DefineProperty (setter & configurable=false)|11,267,203|5633605|
|DefineProperty (setter & enumerable=false & configurable=false)|11,231,801|5615904|
|DefineProperty (writable)|89,962,594|45392283|
|DefineProperty (writable & enumerable=false)|94,797,332|47398705|
|DefineProperty (writable & enumerable=false & configurable=false)|95,539,961|47780750|
|DefineProperties (setter)|94,287,324|47144298|
|DefineProperties (setter & enumerable=false)|11,157,817|5579012|
|DefineProperties (setter & enumerable=false & configurable=false)|11,188,580|5594294|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:34:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47977865,"opsSec":95955709.65738955},{"name":"Setter","samples":5629656,"opsSec":11114214.836121382},{"name":"Method","samples":46009851,"opsSec":92019659.48691732},{"name":"DefineProperty (setter)","samples":47775734,"opsSec":95551439.52567102},{"name":"DefineProperty (setter & enumerable=false)","samples":5688086,"opsSec":11375883.32558473},{"name":"DefineProperty (setter & configurable=false)","samples":5633605,"opsSec":11267203.127006091},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5615904,"opsSec":11231801.687727451},{"name":"DefineProperty (writable)","samples":45392283,"opsSec":89962594.50703181},{"name":"DefineProperty (writable & enumerable=false)","samples":47398705,"opsSec":94797332.64537656},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47780750,"opsSec":95539961.66212282},{"name":"DefineProperties (setter)","samples":47144298,"opsSec":94287324.8182868},{"name":"DefineProperties (setter & enumerable=false)","samples":5579012,"opsSec":11157817.513429096},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5594294,"opsSec":11188580.70504538}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,247,023|1625837|
|Using replaceAll()|3,144,533|1572703|
|Using replaceAll(//g)|3,013,389|1506696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1625837,"opsSec":3247023.0032144715},{"name":"Using replaceAll()","samples":1572703,"opsSec":3144533.3039612183},{"name":"Using replaceAll(//g)","samples":1506696,"opsSec":3013389.5591544574}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,506,384|12254363|
|{ ...object, __proto__: null }|2,524,760|1263197|
|{ ...object, newProp: true }|22,036,953|11020695|
|structuredClone|286,275|143159|
|JSON.parse + JSON.stringify|274,980|137509|
|loop + object.keys starting with {}|1,565,446|782724|
|loop + object.keys starting with { __proto__: null }|822,060|411082|
|loop + object.keys starting with { randomProp: true }|636,906|318502|
|object.keys + reduce(FN, {})|1,722,601|861302|
|object.keys + reduce(FN, { __proto__: null })|855,737|427923|
|object.keys + reduce(FN, { newProp: true })|636,135|318197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12254363,"opsSec":24506384.16992872},{"name":"{ ...object, __proto__: null }","samples":1263197,"opsSec":2524760.691912231},{"name":"{ ...object, newProp: true }","samples":11020695,"opsSec":22036953.696777396},{"name":"structuredClone","samples":143159,"opsSec":286275.6563951113},{"name":"JSON.parse + JSON.stringify","samples":137509,"opsSec":274980.39753055933},{"name":"loop + object.keys starting with {}","samples":782724,"opsSec":1565446.8447002287},{"name":"loop + object.keys starting with { __proto__: null }","samples":411082,"opsSec":822060.4631287899},{"name":"loop + object.keys starting with { randomProp: true }","samples":318502,"opsSec":636906.7698125205},{"name":"object.keys + reduce(FN, {})","samples":861302,"opsSec":1722601.915651682},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":427923,"opsSec":855737.0852067432},{"name":"object.keys + reduce(FN, { newProp: true })","samples":318197,"opsSec":636135.8764176978}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|310,043|155088|
|Sort using first char|1,343,081|671679|
|Sort using localeCompare|1,221,287|610645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:45:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":155088,"opsSec":310043.7836887087},{"name":"Sort using first char","samples":671679,"opsSec":1343081.2205082402},{"name":"Sort using localeCompare","samples":610645,"opsSec":1221287.0566981933}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,836|1421|
|{...smallObject} - Total keys: 2|34,936,014|17474923|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,031|516|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,415|3209|
|{ ...bigObject, ...anotherBigObject }|1,379|691|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,786,205|5893289|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,276,716|13140644|
|{ ...smallObject, ...anotherSmallObject }|18,938,822|9472114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1421,"opsSec":2836.932172453501},{"name":"{...smallObject} - Total keys: 2","samples":17474923,"opsSec":34936014.34281748},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":516,"opsSec":1031.0050059369105},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3209,"opsSec":6415.97157775375},{"name":"{ ...bigObject, ...anotherBigObject }","samples":691,"opsSec":1379.7396415322596},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5893289,"opsSec":11786205.956622772},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13140644,"opsSec":26276716.534517623},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9472114,"opsSec":18938822.51915423}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,895|949|
|streams.web.Readable reading 1e3 * "some data"|1,622|812|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:56:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":949,"opsSec":1895.8926243451945},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":812,"opsSec":1622.0077365574186}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|11,435|5718|
|streams.web.WritableStream writing 1e3 * "some data"|1,585|796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:01:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5718,"opsSec":11435.839875370066},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":796,"opsSec":1585.1356682669814}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|88,752,834|44376429|
|Using backtick (`)|81,274,681|40637546|
|Using array.join|9,852,921|4926961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":44376429,"opsSec":88752834.92426293},{"name":"Using backtick (`)","samples":40637546,"opsSec":81274681.07521248},{"name":"Using array.join","samples":4926961,"opsSec":9852921.967831952}]}-->
