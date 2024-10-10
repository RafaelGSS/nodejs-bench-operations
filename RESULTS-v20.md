## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|100,948,665|50507552|
|Using dot notation|67,474,805|33741191|
|Using define property (writable)|4,218,627|2110098|
|Using define property initialized (writable)|5,458,792|2729677|
|Using define property (getter)|1,838,640|924597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Directly in the object","opsSec":100948665.64519227,"samples":50507552},{"name":"Using dot notation","opsSec":67474805.79385586,"samples":33741191},{"name":"Using define property (writable)","opsSec":4218627.176925445,"samples":2110098},{"name":"Using define property initialized (writable)","opsSec":5458792.323022715,"samples":2729677},{"name":"Using define property (getter)","opsSec":1838640.7573224779,"samples":924597}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.083ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.255ms
new Array(length)|10,000|0.265ms
array.push|1,000,000|29.684ms
new Array(length)|1,000,000|7.248ms
array.push|100,000,000|2,022.34ms
new Array(length)|100,000,000|4,149.837ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.157ms
array.push|1,000,000|23.063ms
new Array(length)|1,000,000|4.617ms
array.push|100,000,000|1,945.14ms
new Array(length)|100,000,000|4,479.386ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|256|129|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:08:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":256.96076484208317,"samples":129},{"name":"Array.from","opsSec":22.513688181703927,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|627|314|
|new Blob (1024)|505|260|
|text (128)|4,422|2212|
|text (1024)|552|277|
|arrayBuffer (128)|4,484|2243|
|arrayBuffer (1024)|553|277|
|slice (0, 64)|69,102|34552|
|slice (0, 512)|29,045|14523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":627.9110212408193,"samples":314},{"name":"new Blob (1024)","opsSec":505.4308977636943,"samples":260},{"name":"text (128)","opsSec":4422.7611492205015,"samples":2212},{"name":"text (1024)","opsSec":552.9069814105337,"samples":277},{"name":"arrayBuffer (128)","opsSec":4484.860307298507,"samples":2243},{"name":"arrayBuffer (1024)","opsSec":553.5035825629352,"samples":277},{"name":"slice (0, 64)","opsSec":69102.59514424126,"samples":34552},{"name":"slice (0, 512)","opsSec":29045.556416260915,"samples":14523}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|386,076|193183|
|[True conditional] Using constructor name|321,734|160868|
|[True conditional] Check if property is valid then instanceof |316,370|158217|
|[False conditional] Using instanceof only|96,011,724|48005867|
|[False conditional] Using constructor name|96,348,878|48181936|
|[False conditional] Check if property is valid then instanceof |96,659,758|48329884|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":386076.7528410785,"samples":193183},{"name":"[True conditional] Using constructor name","opsSec":321734.6956875437,"samples":160868},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316370.1887656664,"samples":158217},{"name":"[False conditional] Using instanceof only","opsSec":96011724.20680413,"samples":48005867},{"name":"[False conditional] Using constructor name","opsSec":96348878.572912,"samples":48181936},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96659758.33402416,"samples":48329884}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,883|3442|
|crypto.verify('RSA-SHA256')|6,883|3442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:11:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6883.595698890222,"samples":3442},{"name":"crypto.verify('RSA-SHA256')","opsSec":6883.056016399575,"samples":3442}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,388,717|694438|
|fromUnixToISOString(new Date())|2,022,489|1011349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:13:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1388717.72228632,"samples":694438},{"name":"fromUnixToISOString(new Date())","opsSec":2022489.7280527847,"samples":1011349}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,715|8859|
|Intl.DateTimeFormat().format(new Date())|16,864|8497|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,796|8899|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,039|9020|
|Reusing Intl.DateTimeFormat()|520,153|275979|
|Date.toLocaleDateString()|933,617|466820|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,222|10612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:14:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17715.206205690127,"samples":8859},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16864.218171134147,"samples":8497},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17796.263760914957,"samples":8899},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18039.546594035906,"samples":9020},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520153.42874158116,"samples":275979},{"name":"Date.toLocaleDateString()","opsSec":933617.5707714797,"samples":466820},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21222.572272672925,"samples":10612}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,050,168|525136|
|Using brackets {}|1,033,640|517218|
|Using '' + |1,047,337|523691|
|Using date.toString()|1,140,204|570141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:15:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":1050168.4533904956,"samples":525136},{"name":"Using brackets {}","opsSec":1033640.1570302158,"samples":517218},{"name":"Using '' + ","opsSec":1047337.4818729955,"samples":523691},{"name":"Using date.toString()","opsSec":1140204.3292810896,"samples":570141}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,506,932|1753469|
|Using delete property (proto: null)|15,337,965|7668983|
|Using delete property (cached proto: null)|3,536,408|1768318|
|Using undefined assignment|75,574,456|37787237|
|Using undefined assignment (proto: null)|16,078,925|8040090|
|Using undefined property (cached proto: null)|72,745,600|36372831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:16:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":3506932.816753297,"samples":1753469},{"name":"Using delete property (proto: null)","opsSec":15337965.202425808,"samples":7668983},{"name":"Using delete property (cached proto: null)","opsSec":3536408.2694530804,"samples":1768318},{"name":"Using undefined assignment","opsSec":75574456.4667261,"samples":37787237},{"name":"Using undefined assignment (proto: null)","opsSec":16078925.104211316,"samples":8040090},{"name":"Using undefined property (cached proto: null)","opsSec":72745600.31173094,"samples":36372831}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|370,499|185366|
|NodeError|311,773|155905|
|NodeError Range|303,369|151685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:22:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":370499.4234329331,"samples":185366},{"name":"NodeError","opsSec":311773.8529394902,"samples":155905},{"name":"NodeError Range","opsSec":303369.7081583407,"samples":151685}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,844,146|922074|
|Function returning explicitly undefined|1,817,571|908847|
|Function returning implicitly undefined|1,605,823|802913|
|Function returning string|1,589,029|794515|
|Function returning integer|1,612,500|806351|
|Function returning float|1,595,023|797513|
|Function returning functions|1,714,432|857224|
|Function returning arrow functions|1,655,664|828508|
|Function returning empty object|1,845,819|923103|
|Function returning empty array|1,886,556|943322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:23:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1844146.0562700569,"samples":922074},{"name":"Function returning explicitly undefined","opsSec":1817571.1394612568,"samples":908847},{"name":"Function returning implicitly undefined","opsSec":1605823.9477569947,"samples":802913},{"name":"Function returning string","opsSec":1589029.8124944821,"samples":794515},{"name":"Function returning integer","opsSec":1612500.2923384313,"samples":806351},{"name":"Function returning float","opsSec":1595023.7573965972,"samples":797513},{"name":"Function returning functions","opsSec":1714432.1997928466,"samples":857224},{"name":"Function returning arrow functions","opsSec":1655664.7623175296,"samples":828508},{"name":"Function returning empty object","opsSec":1845819.6514887467,"samples":923103},{"name":"Function returning empty array","opsSec":1886556.7995716103,"samples":943322}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,077,700|43604642|
|using Array.includes (first item)|86,026,026|43013027|
|Using raw comparison|97,573,919|48800616|
|Using raw comparison (first item)|98,017,971|49008990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:24:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":87077700.01672772,"samples":43604642},{"name":"using Array.includes (first item)","opsSec":86026026.98782752,"samples":43013027},{"name":"Using raw comparison","opsSec":97573919.49874958,"samples":48800616},{"name":"Using raw comparison (first item)","opsSec":98017971.37441853,"samples":49008990}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,473,517|25239694|
|Using Object.getOwnPropertyNames()|41,583,470|20792980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:26:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":50473517.82892946,"samples":25239694},{"name":"Using Object.getOwnPropertyNames()","opsSec":41583470.56395122,"samples":20792980}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,667,191|66400117|
|Length = 10_000 - Array.at|96,804,516|48402563|
|Length = 1_000_000 - Array.at|97,020,079|48519150|
|Length = 100 - Array[length - 1]|92,807,213|46403616|
|Length = 10_000 - Array[length - 1]|96,480,116|48245442|
|Length = 1_000_000 - Array[length - 1]|96,515,910|48260220|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132667191.62555651,"samples":66400117},{"name":"Length = 10_000 - Array.at","opsSec":96804516.71237181,"samples":48402563},{"name":"Length = 1_000_000 - Array.at","opsSec":97020079.04703449,"samples":48519150},{"name":"Length = 100 - Array[length - 1]","opsSec":92807213.25294292,"samples":46403616},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96480116.04720819,"samples":48245442},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96515910.89436537,"samples":48260220}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|133,620,274|66861266|
|~ (small)|96,310,347|48155181|
|Math.floor (long)|98,838,987|49420439|
|~ (long)|91,351,461|45675736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:28:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":133620274.54181753,"samples":66861266},{"name":"~ (small)","opsSec":96310347.55344787,"samples":48155181},{"name":"Math.floor (long)","opsSec":98838987.80319725,"samples":49420439},{"name":"~ (long)","opsSec":91351461.58593337,"samples":45675736}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,935,355|21467707|
|Object.create({})|1,879,954|944484|
|Cached Empty.prototype|112,124,296|56666211|
|Empty.prototype|2,239,255|1119630|
|Empty class|1,395,274|708977|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:30:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":42935355.264434,"samples":21467707},{"name":"Object.create({})","opsSec":1879954.4119355308,"samples":944484},{"name":"Cached Empty.prototype","opsSec":112124296.38560921,"samples":56666211},{"name":"Empty.prototype","opsSec":2239255.261735866,"samples":1119630},{"name":"Empty class","opsSec":1395274.9388325275,"samples":708977}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|146,358,308|73179178|
|Using optional chain (obj.field?.field2) (undefined)|97,559,749|48779881|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,099,586|49584413|
|Using and operator (obj.field && obj.field.field2) (undefined)|83,550,442|41780956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:30:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":146358308.87262455,"samples":73179178},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97559749.51235206,"samples":48779881},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99099586.90242384,"samples":49584413},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":83550442.86360723,"samples":41780956}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|139,517,511|69864619|
|Using parseInt(x, 10) - big number (10 len)|87,767,262|43910353|
|Using + - small number (2 len)|98,111,356|49068657|
|Using + - big number (10 len)|98,841,639|49420827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:32:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":139517511.2475611,"samples":69864619},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":87767262.40750577,"samples":43910353},{"name":"Using + - small number (2 len)","opsSec":98111356.28602198,"samples":49068657},{"name":"Using + - big number (10 len)","opsSec":98841639.37143737,"samples":49420827}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,009,548|510384|
|Using ? operator to avoid rejection|1,108,602|555286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:33:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":1009548.5078421118,"samples":510384},{"name":"Using ? operator to avoid rejection","opsSec":1108602.8309183475,"samples":555286}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|130,805,054|65402556|
|Raw usage underscore usage|94,877,776|47439253|
|Manipulating private properties using #|93,660,207|46893567|
|Manipulating private properties using underscore(_)|97,070,770|48549030|
|Manipulating private properties using Symbol|95,485,223|47742617|
|Manipulating private properties using PrivateSymbol|35,415,058|17709405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:34:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":130805054.96899602,"samples":65402556},{"name":"Raw usage underscore usage","opsSec":94877776.76940775,"samples":47439253},{"name":"Manipulating private properties using #","opsSec":93660207.93405277,"samples":46893567},{"name":"Manipulating private properties using underscore(_)","opsSec":97070770.30020396,"samples":48549030},{"name":"Manipulating private properties using Symbol","opsSec":95485223.49662541,"samples":47742617},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35415058.76614538,"samples":17709405}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,013,953|2506977|
|Adding property in the object creation - small object|4,998,735|2499368|
|Adding property after the function creation - small class|243,377|121689|
|Adding property in the function creation - small class|241,107|120554|
|Adding property after the class creation - small class|227,465|113734|
|Adding property in the class creation - small class|236,385|118217|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:51:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5013953.157664833,"samples":2506977},{"name":"Adding property in the object creation - small object","opsSec":4998735.800066703,"samples":2499368},{"name":"Adding property after the function creation - small class","opsSec":243377.72741704513,"samples":121689},{"name":"Adding property in the function creation - small class","opsSec":241107.38324733556,"samples":120554},{"name":"Adding property after the class creation - small class","opsSec":227465.8377098356,"samples":113734},{"name":"Adding property in the class creation - small class","opsSec":236385.4048340708,"samples":118217}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|18,208,976|9104489|
|Getter|13,908,006|6954004|
|Method|17,956,883|8978442|
|DefineProperty (getter)|17,614,005|8807003|
|DefineProperty (getter & enumerable=false)|14,123,035|7061518|
|DefineProperty (getter & configurable=false)|17,560,858|8780430|
|DefineProperty (getter & enumerable=false & configurable=false)|13,952,682|6976342|
|DefineProperty (writable)|18,011,727|9005864|
|DefineProperty (writable & enumerable=false)|18,487,579|9243790|
|DefineProperty (writable & enumerable=false & configurable=false)|18,143,341|9071671|
|DefineProperties (getter)|13,585,146|6792574|
|DefineProperties (getter & enumerable=false)|13,651,237|6825621|
|DefineProperties (getter & enumerable=false & configurable=false)|13,780,239|6890120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":18208976.251828782,"samples":9104489},{"name":"Getter","opsSec":13908006.775897661,"samples":6954004},{"name":"Method","opsSec":17956883.533622842,"samples":8978442},{"name":"DefineProperty (getter)","opsSec":17614005.049046665,"samples":8807003},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14123035.519728875,"samples":7061518},{"name":"DefineProperty (getter & configurable=false)","opsSec":17560858.736218274,"samples":8780430},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13952682.325851353,"samples":6976342},{"name":"DefineProperty (writable)","opsSec":18011727.459651925,"samples":9005864},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18487579.520181783,"samples":9243790},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18143341.527843926,"samples":9071671},{"name":"DefineProperties (getter)","opsSec":13585146.559694247,"samples":6792574},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13651237.87735357,"samples":6825621},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13780239.42089226,"samples":6890120}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,459,440|8229721|
|Setter|6,005,754|3002878|
|Method|16,471,659|8235830|
|DefineProperty (setter)|17,741,581|8870791|
|DefineProperty (setter & enumerable=false)|6,151,788|3075895|
|DefineProperty (setter & configurable=false)|6,163,987|3081994|
|DefineProperty (setter & enumerable=false & configurable=false)|6,203,825|3101913|
|DefineProperty (writable)|18,199,112|9099557|
|DefineProperty (writable & enumerable=false)|18,317,469|9158735|
|DefineProperty (writable & enumerable=false & configurable=false)|16,401,286|8200644|
|DefineProperties (setter)|16,359,801|8179901|
|DefineProperties (setter & enumerable=false)|6,079,865|3039933|
|DefineProperties (setter & enumerable=false & configurable=false)|6,144,344|3072173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:28:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16459440.946471594,"samples":8229721},{"name":"Setter","opsSec":6005754.4745164355,"samples":3002878},{"name":"Method","opsSec":16471659.538928324,"samples":8235830},{"name":"DefineProperty (setter)","opsSec":17741581.680366654,"samples":8870791},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6151788.9665968595,"samples":3075895},{"name":"DefineProperty (setter & configurable=false)","opsSec":6163987.186383286,"samples":3081994},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6203825.205889973,"samples":3101913},{"name":"DefineProperty (writable)","opsSec":18199112.180181384,"samples":9099557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18317469.193889275,"samples":9158735},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16401286.621469954,"samples":8200644},{"name":"DefineProperties (setter)","opsSec":16359801.738883484,"samples":8179901},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6079865.513598915,"samples":3039933},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6144344.377734813,"samples":3072173}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,676,840|1338421|
|Using replaceAll()|2,329,552|1164777|
|Using replaceAll(//g)|2,428,599|1214300|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:42:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2676840.779360966,"samples":1338421},{"name":"Using replaceAll()","opsSec":2329552.9190872745,"samples":1164777},{"name":"Using replaceAll(//g)","opsSec":2428599.1791316844,"samples":1214300}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,650,533|4825267|
|{ ...object, __proto__: null }|9,526,117|4763059|
|{ ...object, newProp: true }|737,238|369275|
|structuredClone|278,337|139169|
|JSON.parse + JSON.stringify|188,991|94496|
|loop + object.keys starting with {}|1,287,276|643639|
|loop + object.keys starting with { __proto__: null }|765,750|382876|
|loop + object.keys starting with { randomProp: true }|515,145|257573|
|object.keys + reduce(FN, {})|1,269,840|634921|
|object.keys + reduce(FN, { __proto__: null })|674,023|337012|
|object.keys + reduce(FN, { newProp: true })|510,748|255375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:49:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9650533.05424049,"samples":4825267},{"name":"{ ...object, __proto__: null }","opsSec":9526117.809444172,"samples":4763059},{"name":"{ ...object, newProp: true }","opsSec":737238.2835278598,"samples":369275},{"name":"structuredClone","opsSec":278337.6492942528,"samples":139169},{"name":"JSON.parse + JSON.stringify","opsSec":188991.28712485326,"samples":94496},{"name":"loop + object.keys starting with {}","opsSec":1287276.8980890287,"samples":643639},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":765750.5879551203,"samples":382876},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":515145.3910972969,"samples":257573},{"name":"object.keys + reduce(FN, {})","opsSec":1269840.6082577333,"samples":634921},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":674023.032102917,"samples":337012},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":510748.8589868857,"samples":255375}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|262,495|131248|
|Sort using first char|1,155,385|577693|
|Sort using localeCompare|1,040,975|520488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:58:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":262495.4813089147,"samples":131248},{"name":"Sort using first char","opsSec":1155385.6048576636,"samples":577693},{"name":"Sort using localeCompare","opsSec":1040975.8730013019,"samples":520488}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,771|886|
|{...smallObject} - Total keys: 2|13,541,702|6770852|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,136|1069|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,675|3338|
|{ ...bigObject, ...anotherBigObject }|1,083|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,050,592|3525297|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,206,687|5603344|
|{ ...smallObject, ...anotherSmallObject }|9,423,319|4711660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:05:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1771.662395557198,"samples":886},{"name":"{...smallObject} - Total keys: 2","opsSec":13541702.266833456,"samples":6770852},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2136.7710233249845,"samples":1069},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6675.726188415075,"samples":3338},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1083.8758485248736,"samples":542},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7050592.491133247,"samples":3525297},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11206687.574335877,"samples":5603344},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9423319.453463878,"samples":4711660}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,038|1020|
|streams.web.Readable reading 1e3 * "some data"|1,546|774|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:13:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2038.4939647358756,"samples":1020},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1546.4435200615048,"samples":774}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,083|3042|
|streams.web.WritableStream writing 1e3 * "some data"|1,593|797|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:19:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6083.644082486097,"samples":3042},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1593.0254061727503,"samples":797}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|17,085,081|8542541|
|Using backtick (`)|16,477,315|8238658|
|Using array.join|5,966,220|2983111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:25:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":17085081.658253998,"samples":8542541},{"name":"Using backtick (`)","opsSec":16477315.307982435,"samples":8238658},{"name":"Using array.join","opsSec":5966220.830650577,"samples":2983111}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|13,392,190|6696096|
|(short string) (true) String#slice and strict comparison|14,027,467|7013734|
|(long string) (true) String#endsWith|13,580,405|6790203|
|(long string) (true) String#slice and strict comparison|13,789,071|6894536|
|(short string) (false) String#endsWith|14,231,909|7115955|
|(short string) (false) String#slice and strict comparison|14,116,943|7058472|
|(long string) (false) String#endsWith|13,668,176|6834089|
|(long string) (false) String#slice and strict comparison|13,329,182|6664592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:42:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":13392190.392996049,"samples":6696096},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14027467.943729768,"samples":7013734},{"name":"(long string) (true) String#endsWith","opsSec":13580405.538370201,"samples":6790203},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13789071.034983817,"samples":6894536},{"name":"(short string) (false) String#endsWith","opsSec":14231909.146061553,"samples":7115955},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14116943.689536422,"samples":7058472},{"name":"(long string) (false) String#endsWith","opsSec":13668176.851578983,"samples":6834089},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13329182.587272394,"samples":6664592}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,099,975|4549988|
|Using indexof|9,029,648|4514825|
|Using RegExp.test|8,221,441|4110721|
|Using RegExp.text with cached regex pattern|8,153,428|4076716|
|Using new RegExp.test|3,291,557|1645779|
|Using new RegExp.test with cached regex pattern|3,854,215|1927108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:54:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":9099975.453979503,"samples":4549988},{"name":"Using indexof","opsSec":9029648.067650454,"samples":4514825},{"name":"Using RegExp.test","opsSec":8221441.3587362105,"samples":4110721},{"name":"Using RegExp.text with cached regex pattern","opsSec":8153428.999561732,"samples":4076716},{"name":"Using new RegExp.test","opsSec":3291557.3219300774,"samples":1645779},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3854215.4527153266,"samples":1927108}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,972,663|7986332|
|(short string) (true) String#slice and strict comparison|13,891,493|6945747|
|(long string) (true) String#startsWith|15,291,957|7645979|
|(long string) (true) String#slice and strict comparison|13,556,044|6778023|
|(short string) (false) String#startsWith|16,447,381|8223691|
|(short string) (false) String#slice and strict comparison|14,105,236|7052619|
|(long string) (false) String#startsWith|16,954,499|8477250|
|(long string) (false) String#slice and strict comparison|13,569,198|6784600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15972663.744463444,"samples":7986332},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13891493.777733698,"samples":6945747},{"name":"(long string) (true) String#startsWith","opsSec":15291957.602771686,"samples":7645979},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13556044.427024085,"samples":6778023},{"name":"(short string) (false) String#startsWith","opsSec":16447381.40866714,"samples":8223691},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14105236.420074234,"samples":7052619},{"name":"(long string) (false) String#startsWith","opsSec":16954499.593173537,"samples":8477250},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13569198.615861697,"samples":6784600}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,811,158|8405580|
|Using this|16,642,315|8321158|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:23:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":16811158.75600597,"samples":8405580},{"name":"Using this","opsSec":16642315.567269618,"samples":8321158}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,731,021|3365511|
|Date.now()|9,896,256|4948129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6731021.676899611,"samples":3365511},{"name":"Date.now()","opsSec":9896256.060376232,"samples":4948129}]}-->
