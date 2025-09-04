## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|69,597,806|34799548|
|Using dot notation|79,133,496|39566778|
|Using define property (writable)|4,822,552|2411648|
|Using define property initialized (writable)|6,491,582|3245801|
|Using define property (getter)|2,265,979|1134154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:10:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":34799548,"opsSec":69597806.07426222},{"name":"Using dot notation","samples":39566778,"opsSec":79133496.96641126},{"name":"Using define property (writable)","samples":2411648,"opsSec":4822552.52636722},{"name":"Using define property initialized (writable)","samples":3245801,"opsSec":6491582.09680929},{"name":"Using define property (getter)","samples":1134154,"opsSec":2265979.4342138134}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.014ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|29.737ms
new Array(length)|1,000,000|7.769ms
array.push|10,000,000|256.872ms
new Array(length)|10,000,000|70.752ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.015ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.349ms
new Array(length)|10,000|0.122ms
array.push|1,000,000|19.156ms
new Array(length)|1,000,000|12.474ms
array.push|10,000,000|371.479ms
new Array(length)|10,000,000|52.192ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|323|162|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:22:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":162,"opsSec":323.801193191007},{"name":"Array.from","samples":12,"opsSec":23.22927468723011}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,515|2265|
|new Blob (1024)|599|300|
|text (128)|4,220|2111|
|text (1024)|536|270|
|arrayBuffer (128)|4,258|2130|
|arrayBuffer (1024)|533|267|
|slice (0, 64)|163,731|81868|
|slice (0, 512)|21,609|10807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2265,"opsSec":4515.007880213687},{"name":"new Blob (1024)","samples":300,"opsSec":599.1964081099412},{"name":"text (128)","samples":2111,"opsSec":4220.897628166452},{"name":"text (1024)","samples":270,"opsSec":536.7964054935712},{"name":"arrayBuffer (128)","samples":2130,"opsSec":4258.739872941515},{"name":"arrayBuffer (1024)","samples":267,"opsSec":533.459931566801},{"name":"slice (0, 64)","samples":81868,"opsSec":163731.81075788994},{"name":"slice (0, 512)","samples":10807,"opsSec":21609.75597358532}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|135.88 ms|1|
|Gzip|134.79 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:31:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.135881236},{"name":"Gzip","samples":1,"totalTime":0.134790446}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,841|3421|
|crypto.verify('RSA-SHA256')|6,904|3453|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:41:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3421,"opsSec":6841.3053338564005},{"name":"crypto.verify('RSA-SHA256')","samples":3453,"opsSec":6904.786456161184}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,444,007|722155|
|fromUnixToISOString(new Date())|2,657,163|1328671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":722155,"opsSec":1444007.844246607},{"name":"fromUnixToISOString(new Date())","samples":1328671,"opsSec":2657163.8903044327}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,065|11034|
|Intl.DateTimeFormat().format(new Date())|21,367|10685|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,027|10514|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,573|9787|
|Reusing Intl.DateTimeFormat()|416,613|208321|
|Date.toLocaleDateString()|1,068,096|534160|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,279|13141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11034,"opsSec":22065.99093565729},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10685,"opsSec":21367.81971314775},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10514,"opsSec":21027.009796054685},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9787,"opsSec":19573.09321773741},{"name":"Reusing Intl.DateTimeFormat()","samples":208321,"opsSec":416613.6569396911},{"name":"Date.toLocaleDateString()","samples":534160,"opsSec":1068096.4751782536},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13141,"opsSec":26279.920627560266}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,118,954|559543|
|Using brackets {}|1,136,613|568317|
|Using '' + |1,142,413|571208|
|Using date.toString()|1,259,219|629746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:56:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":559543,"opsSec":1118954.1603450116},{"name":"Using brackets {}","samples":568317,"opsSec":1136613.670527889},{"name":"Using '' + ","samples":571208,"opsSec":1142413.8065654912},{"name":"Using date.toString()","samples":629746,"opsSec":1259219.2556276696}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,993,062|1999678|
|Using delete property (proto: null)|16,860,746|8432635|
|Using delete property (cached proto: null)|3,978,469|1989478|
|Using undefined assignment|76,810,363|38425423|
|Using undefined assignment (proto: null)|18,518,578|9259975|
|Using undefined property (cached proto: null)|78,098,687|39057591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1999678,"opsSec":3993062.597928406},{"name":"Using delete property (proto: null)","samples":8432635,"opsSec":16860746.295490414},{"name":"Using delete property (cached proto: null)","samples":1989478,"opsSec":3978469.6320874775},{"name":"Using undefined assignment","samples":38425423,"opsSec":76810363.40520874},{"name":"Using undefined assignment (proto: null)","samples":9259975,"opsSec":18518578.032627877},{"name":"Using undefined property (cached proto: null)","samples":39057591,"opsSec":78098687.55718791}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|340,633|170318|
|NodeError|313,369|156690|
|NodeError Range|305,140|152572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":170318,"opsSec":340633.67006569676},{"name":"NodeError","samples":156690,"opsSec":313369.8499505601},{"name":"NodeError Range","samples":152572,"opsSec":305140.4268056021}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,432,835|34716439|
|using Array.includes (first item)|78,056,093|39028051|
|Using raw comparison|95,187,231|47594144|
|Using raw comparison (first item)|97,580,075|48790614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:10:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34716439,"opsSec":69432835.36823909},{"name":"using Array.includes (first item)","samples":39028051,"opsSec":78056093.41382973},{"name":"Using raw comparison","samples":47594144,"opsSec":95187231.23135887},{"name":"Using raw comparison (first item)","samples":48790614,"opsSec":97580075.38414955}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,136,527|23071247|
|Using Object.getOwnPropertyNames()|45,792,893|22898165|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:13:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23071247,"opsSec":46136527.070680894},{"name":"Using Object.getOwnPropertyNames()","samples":22898165,"opsSec":45792893.884414494}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,259,086|47708276|
|Length = 10_000 - Array.at|93,627,918|46835695|
|Length = 1_000_000 - Array.at|93,807,051|46911259|
|Length = 100 - Array[length - 1]|93,427,776|46727352|
|Length = 10_000 - Array[length - 1]|93,151,686|46587852|
|Length = 1_000_000 - Array[length - 1]|92,861,000|46430982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:16:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47708276,"opsSec":95259086.8242977},{"name":"Length = 10_000 - Array.at","samples":46835695,"opsSec":93627918.18307592},{"name":"Length = 1_000_000 - Array.at","samples":46911259,"opsSec":93807051.84374842},{"name":"Length = 100 - Array[length - 1]","samples":46727352,"opsSec":93427776.43313201},{"name":"Length = 10_000 - Array[length - 1]","samples":46587852,"opsSec":93151686.51436263},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46430982,"opsSec":92861000.65997916}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|92,769,736|46393020|
|~ (small)|92,683,994|46342017|
|Math.floor (long)|92,620,630|46318761|
|~ (long)|93,105,743|46552882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46393020,"opsSec":92769736.46097489},{"name":"~ (small)","samples":46342017,"opsSec":92683994.33125041},{"name":"Math.floor (long)","samples":46318761,"opsSec":92620630.59035797},{"name":"~ (long)","samples":46552882,"opsSec":93105743.14431353}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,268,622|14669960|
|Object.create({})|1,957,873|978938|
|new Function with empty prototype|70,703,083|35389926|
|Empty class|75,359,685|37690888|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:28:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14669960,"opsSec":29268622.221640527},{"name":"Object.create({})","samples":978938,"opsSec":1957873.4625959925},{"name":"new Function with empty prototype","samples":35389926,"opsSec":70703083.01667899},{"name":"Empty class","samples":37690888,"opsSec":75359685.96597217}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|87,274,339|44159749|
|Using parseInt(x, 10) - big number (10 len)|95,078,737|47539396|
|Using + - small number (2 len)|85,949,913|42974962|
|Using + - big number (10 len)|89,765,829|44883121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44159749,"opsSec":87274339.4352785},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47539396,"opsSec":95078737.42480472},{"name":"Using + - small number (2 len)","samples":42974962,"opsSec":85949913.34221074},{"name":"Using + - big number (10 len)","samples":44883121,"opsSec":89765829.79530957}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,104,312|552158|
|Using ? operator to avoid rejection|1,155,835|577918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:39:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":552158,"opsSec":1104312.7842411723},{"name":"Using ? operator to avoid rejection","samples":577918,"opsSec":1155835.5053024036}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|95,584,511|47792265|
|Raw usage underscore usage|94,639,523|47323969|
|Manipulating private properties using #|91,197,852|45667132|
|Manipulating private properties using underscore(_)|98,238,403|49119213|
|Manipulating private properties using Symbol|98,206,049|49103504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:42:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":47792265,"opsSec":95584511.45660476},{"name":"Raw usage underscore usage","samples":47323969,"opsSec":94639523.03217007},{"name":"Manipulating private properties using #","samples":45667132,"opsSec":91197852.07682054},{"name":"Manipulating private properties using underscore(_)","samples":49119213,"opsSec":98238403.79812074},{"name":"Manipulating private properties using Symbol","samples":49103504,"opsSec":98206049.90177715}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,524,863|3768929|
|Adding property in the object creation - small object|7,353,408|3682398|
|Adding property after the function creation - small class|274,465|139442|
|Adding property in the function creation - small class|289,780|144902|
|Adding property after the class creation - small class|274,128|137069|
|Adding property in the class creation - small class|266,815|141773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3768929,"opsSec":7524863.869423818},{"name":"Adding property in the object creation - small object","samples":3682398,"opsSec":7353408.041688527},{"name":"Adding property after the function creation - small class","samples":139442,"opsSec":274465.6897515757},{"name":"Adding property in the function creation - small class","samples":144902,"opsSec":289780.091983291},{"name":"Adding property after the class creation - small class","samples":137069,"opsSec":274128.9241395796},{"name":"Adding property in the class creation - small class","samples":141773,"opsSec":266815.5723386743}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,962,125|46981077|
|Getter|52,066,956|26033556|
|Method|97,339,006|48669580|
|DefineProperty (getter)|92,035,580|46017915|
|DefineProperty (getter & enumerable=false)|53,133,332|26567155|
|DefineProperty (getter & configurable=false)|89,695,762|44848067|
|DefineProperty (getter & enumerable=false & configurable=false)|53,321,804|26675106|
|DefineProperty (writable)|88,280,786|44153227|
|DefineProperty (writable & enumerable=false)|95,043,094|47521573|
|DefineProperty (writable & enumerable=false & configurable=false)|95,150,979|47579517|
|DefineProperties (getter)|53,267,785|26633896|
|DefineProperties (getter & enumerable=false)|52,624,203|26312181|
|DefineProperties (getter & enumerable=false & configurable=false)|49,914,467|25027437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46981077,"opsSec":93962125.99928646},{"name":"Getter","samples":26033556,"opsSec":52066956.215667},{"name":"Method","samples":48669580,"opsSec":97339006.98308103},{"name":"DefineProperty (getter)","samples":46017915,"opsSec":92035580.03136463},{"name":"DefineProperty (getter & enumerable=false)","samples":26567155,"opsSec":53133332.0278907},{"name":"DefineProperty (getter & configurable=false)","samples":44848067,"opsSec":89695762.30076103},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26675106,"opsSec":53321804.91507511},{"name":"DefineProperty (writable)","samples":44153227,"opsSec":88280786.71438594},{"name":"DefineProperty (writable & enumerable=false)","samples":47521573,"opsSec":95043094.86681496},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47579517,"opsSec":95150979.27930205},{"name":"DefineProperties (getter)","samples":26633896,"opsSec":53267785.71440128},{"name":"DefineProperties (getter & enumerable=false)","samples":26312181,"opsSec":52624203.916891426},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25027437,"opsSec":49914467.1993206}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|86,256,496|43190865|
|Setter|10,551,229|5276345|
|Method|94,310,232|47158550|
|DefineProperty (setter)|92,117,209|46058615|
|DefineProperty (setter & enumerable=false)|10,667,526|5334389|
|DefineProperty (setter & configurable=false)|10,757,604|5380186|
|DefineProperty (setter & enumerable=false & configurable=false)|10,676,355|5338178|
|DefineProperty (writable)|91,486,543|45743302|
|DefineProperty (writable & enumerable=false)|92,035,559|46017813|
|DefineProperty (writable & enumerable=false & configurable=false)|91,431,309|45715663|
|DefineProperties (setter)|95,534,310|47773913|
|DefineProperties (setter & enumerable=false)|10,833,384|5416967|
|DefineProperties (setter & enumerable=false & configurable=false)|10,635,838|5317923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:58:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":43190865,"opsSec":86256496.43549421},{"name":"Setter","samples":5276345,"opsSec":10551229.9419031},{"name":"Method","samples":47158550,"opsSec":94310232.70609526},{"name":"DefineProperty (setter)","samples":46058615,"opsSec":92117209.18151072},{"name":"DefineProperty (setter & enumerable=false)","samples":5334389,"opsSec":10667526.421795037},{"name":"DefineProperty (setter & configurable=false)","samples":5380186,"opsSec":10757604.305079596},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5338178,"opsSec":10676355.081833463},{"name":"DefineProperty (writable)","samples":45743302,"opsSec":91486543.80185418},{"name":"DefineProperty (writable & enumerable=false)","samples":46017813,"opsSec":92035559.73439698},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45715663,"opsSec":91431309.17663912},{"name":"DefineProperties (setter)","samples":47773913,"opsSec":95534310.57001504},{"name":"DefineProperties (setter & enumerable=false)","samples":5416967,"opsSec":10833384.942384351},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5317923,"opsSec":10635838.491098026}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,060,437|2030221|
|Using replaceAll()|3,121,221|1562847|
|Using replaceAll(//g)|3,442,781|1721852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2030221,"opsSec":4060437.898957722},{"name":"Using replaceAll()","samples":1562847,"opsSec":3121221.9194762185},{"name":"Using replaceAll(//g)","samples":1721852,"opsSec":3442781.29330002}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,260,269|12146426|
|{ ...object, __proto__: null }|2,261,286|1130824|
|{ ...object, newProp: true }|22,706,031|11354374|
|structuredClone|282,446|141244|
|JSON.parse + JSON.stringify|301,854|150991|
|loop + object.keys starting with {}|1,692,155|846078|
|loop + object.keys starting with { __proto__: null }|910,209|455152|
|loop + object.keys starting with { randomProp: true }|660,234|330191|
|object.keys + reduce(FN, {})|1,748,792|874425|
|object.keys + reduce(FN, { __proto__: null })|938,263|469225|
|object.keys + reduce(FN, { newProp: true })|645,479|322843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:06:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12146426,"opsSec":24260269.826855518},{"name":"{ ...object, __proto__: null }","samples":1130824,"opsSec":2261286.709699818},{"name":"{ ...object, newProp: true }","samples":11354374,"opsSec":22706031.586617164},{"name":"structuredClone","samples":141244,"opsSec":282446.09742677014},{"name":"JSON.parse + JSON.stringify","samples":150991,"opsSec":301854.26312405674},{"name":"loop + object.keys starting with {}","samples":846078,"opsSec":1692155.6108042097},{"name":"loop + object.keys starting with { __proto__: null }","samples":455152,"opsSec":910209.5202517979},{"name":"loop + object.keys starting with { randomProp: true }","samples":330191,"opsSec":660234.1973316486},{"name":"object.keys + reduce(FN, {})","samples":874425,"opsSec":1748792.5801444235},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":469225,"opsSec":938263.5276299918},{"name":"object.keys + reduce(FN, { newProp: true })","samples":322843,"opsSec":645479.7124296641}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|300,827|150414|
|Sort using first char|1,208,548|604425|
|Sort using localeCompare|1,130,190|567178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:15:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":150414,"opsSec":300827.9771370737},{"name":"Sort using first char","samples":604425,"opsSec":1208548.9190419947},{"name":"Sort using localeCompare","samples":567178,"opsSec":1130190.6124260856}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,824|1413|
|{...smallObject} - Total keys: 2|38,681,442|19343596|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,116|559|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,516|3259|
|{ ...bigObject, ...anotherBigObject }|1,497|749|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,989,619|5994813|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,601,469|13801379|
|{ ...smallObject, ...anotherSmallObject }|19,967,269|9984084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:17:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1413,"opsSec":2824.8019337046694},{"name":"{...smallObject} - Total keys: 2","samples":19343596,"opsSec":38681442.93186281},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":559,"opsSec":1116.5198586529002},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3259,"opsSec":6516.693793895952},{"name":"{ ...bigObject, ...anotherBigObject }","samples":749,"opsSec":1497.8979122656874},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5994813,"opsSec":11989619.78937695},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13801379,"opsSec":27601469.06659753},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9984084,"opsSec":19967269.233277272}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,953|977|
|streams.web.Readable reading 1e3 * "some data"|1,767|884|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:24:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":977,"opsSec":1953.8183769513155},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":884,"opsSec":1767.0475578322332}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,023|5022|
|streams.web.WritableStream writing 1e3 * "some data"|1,698|875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5022,"opsSec":10023.10071242731},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":875,"opsSec":1698.5193032768548}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,843,639|47421858|
|Using backtick (`)|87,656,305|43848443|
|Using array.join|10,259,958|5130405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47421858,"opsSec":94843639.36633939},{"name":"Using backtick (`)","samples":43848443,"opsSec":87656305.33813111},{"name":"Using array.join","samples":5130405,"opsSec":10259958.526041925}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,711,852|41368534|
|(short string) (true) String#slice and strict comparison|54,993,243|27496630|
|(long string) (true) String#endsWith|67,339,471|33681181|
|(long string) (true) String#slice and strict comparison|50,422,571|25211385|
|(short string) (false) String#endsWith|91,991,717|46010730|
|(short string) (false) String#slice and strict comparison|57,064,808|28545480|
|(long string) (false) String#endsWith|86,293,450|43232554|
|(long string) (false) String#slice and strict comparison|50,641,052|25324454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41368534,"opsSec":82711852.13391104},{"name":"(short string) (true) String#slice and strict comparison","samples":27496630,"opsSec":54993243.831986316},{"name":"(long string) (true) String#endsWith","samples":33681181,"opsSec":67339471.83205591},{"name":"(long string) (true) String#slice and strict comparison","samples":25211385,"opsSec":50422571.94013742},{"name":"(short string) (false) String#endsWith","samples":46010730,"opsSec":91991717.9736785},{"name":"(short string) (false) String#slice and strict comparison","samples":28545480,"opsSec":57064808.22555677},{"name":"(long string) (false) String#endsWith","samples":43232554,"opsSec":86293450.3072584},{"name":"(long string) (false) String#slice and strict comparison","samples":25324454,"opsSec":50641052.458660506}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,944,244|7975880|
|Using indexof|16,049,065|8024533|
|Using RegExp.test|12,561,014|6282039|
|Using RegExp.text with cached regex pattern|13,209,506|6610498|
|Using new RegExp.test|4,450,342|2225501|
|Using new RegExp.test with cached regex pattern|5,140,402|2570205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:40:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7975880,"opsSec":15944244.39340877},{"name":"Using indexof","samples":8024533,"opsSec":16049065.293841125},{"name":"Using RegExp.test","samples":6282039,"opsSec":12561014.82068177},{"name":"Using RegExp.text with cached regex pattern","samples":6610498,"opsSec":13209506.872883227},{"name":"Using new RegExp.test","samples":2225501,"opsSec":4450342.3702538805},{"name":"Using new RegExp.test with cached regex pattern","samples":2570205,"opsSec":5140402.176307888}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|82,398,567|41200150|
|(short string) (true) String#slice and strict comparison|56,252,066|28129282|
|(long string) (true) String#startsWith|66,911,645|33456068|
|(long string) (true) String#slice and strict comparison|49,886,421|24948789|
|(short string) (false) String#startsWith|90,829,023|45414517|
|(short string) (false) String#slice and strict comparison|55,373,348|27686685|
|(long string) (false) String#startsWith|87,540,763|43770390|
|(long string) (false) String#slice and strict comparison|51,384,825|25697686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41200150,"opsSec":82398567.65251367},{"name":"(short string) (true) String#slice and strict comparison","samples":28129282,"opsSec":56252066.32381893},{"name":"(long string) (true) String#startsWith","samples":33456068,"opsSec":66911645.93910514},{"name":"(long string) (true) String#slice and strict comparison","samples":24948789,"opsSec":49886421.799720086},{"name":"(short string) (false) String#startsWith","samples":45414517,"opsSec":90829023.10051723},{"name":"(short string) (false) String#slice and strict comparison","samples":27686685,"opsSec":55373348.182900816},{"name":"(long string) (false) String#startsWith","samples":43770390,"opsSec":87540763.01709197},{"name":"(long string) (false) String#slice and strict comparison","samples":25697686,"opsSec":51384825.88110582}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|90,149,312|45074670|
|Using this|96,278,436|48194141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:26:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":45074670,"opsSec":90149312.77490754},{"name":"Using this","samples":48194141,"opsSec":96278436.39146599}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,477,996|6241962|
|Date.now()|19,847,045|9934078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6241962,"opsSec":12477996.826727336},{"name":"Date.now()","samples":9934078,"opsSec":19847045.729503907}]}-->
