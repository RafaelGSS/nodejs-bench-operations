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
|Adding property after object creation - small object|7,695,835|3847991|
|Adding property in the object creation - small object|7,249,703|3628859|
|Adding property after the function creation - small class|234,946|117772|
|Adding property in the function creation - small class|245,485|123134|
|Adding property after the class creation - small class|239,154|121040|
|Adding property in the class creation - small class|237,279|120428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7695835.579032274,"samples":3847991},{"name":"Adding property in the object creation - small object","opsSec":7249703.250065361,"samples":3628859},{"name":"Adding property after the function creation - small class","opsSec":234946.03368086612,"samples":117772},{"name":"Adding property in the function creation - small class","opsSec":245485.68278928753,"samples":123134},{"name":"Adding property after the class creation - small class","opsSec":239154.40408584787,"samples":121040},{"name":"Adding property in the class creation - small class","opsSec":237279.9542835525,"samples":120428}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|145,857,060|73024412|
|Getter|50,296,687|25148376|
|Method|98,073,225|49036619|
|DefineProperty (getter)|98,618,791|49309401|
|DefineProperty (getter & enumerable=false)|51,924,950|25962497|
|DefineProperty (getter & configurable=false)|98,349,075|49175336|
|DefineProperty (getter & enumerable=false & configurable=false)|50,634,480|25349313|
|DefineProperty (writable)|98,436,262|49243739|
|DefineProperty (writable & enumerable=false)|87,463,326|43731748|
|DefineProperty (writable & enumerable=false & configurable=false)|94,801,614|47405921|
|DefineProperties (getter)|51,088,392|25555829|
|DefineProperties (getter & enumerable=false)|52,177,643|26089334|
|DefineProperties (getter & enumerable=false & configurable=false)|52,334,585|26167348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:36:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":145857060.4717436,"samples":73024412},{"name":"Getter","opsSec":50296687.62023985,"samples":25148376},{"name":"Method","opsSec":98073225.44662715,"samples":49036619},{"name":"DefineProperty (getter)","opsSec":98618791.34917054,"samples":49309401},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51924950.27919187,"samples":25962497},{"name":"DefineProperty (getter & configurable=false)","opsSec":98349075.99119481,"samples":49175336},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50634480.72078848,"samples":25349313},{"name":"DefineProperty (writable)","opsSec":98436262.7937036,"samples":49243739},{"name":"DefineProperty (writable & enumerable=false)","opsSec":87463326.84592588,"samples":43731748},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94801614.42262964,"samples":47405921},{"name":"DefineProperties (getter)","opsSec":51088392.346125565,"samples":25555829},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52177643.23108694,"samples":26089334},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52334585.36468654,"samples":26167348}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|137,504,191|68863811|
|Setter|10,427,700|5213854|
|Method|97,100,860|48550524|
|DefineProperty (setter)|100,776,028|50389723|
|DefineProperty (setter & enumerable=false)|10,608,356|5304215|
|DefineProperty (setter & configurable=false)|10,350,058|5175113|
|DefineProperty (setter & enumerable=false & configurable=false)|10,599,346|5299766|
|DefineProperty (writable)|101,857,487|50955785|
|DefineProperty (writable & enumerable=false)|101,160,722|50590811|
|DefineProperty (writable & enumerable=false & configurable=false)|101,878,562|50940000|
|DefineProperties (setter)|94,433,662|47220225|
|DefineProperties (setter & enumerable=false)|10,310,172|5155128|
|DefineProperties (setter & enumerable=false & configurable=false)|10,215,425|5107716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":137504191.16476798,"samples":68863811},{"name":"Setter","opsSec":10427700.804886444,"samples":5213854},{"name":"Method","opsSec":97100860.98374175,"samples":48550524},{"name":"DefineProperty (setter)","opsSec":100776028.6848673,"samples":50389723},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10608356.675038664,"samples":5304215},{"name":"DefineProperty (setter & configurable=false)","opsSec":10350058.10135748,"samples":5175113},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10599346.108667945,"samples":5299766},{"name":"DefineProperty (writable)","opsSec":101857487.54469828,"samples":50955785},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101160722.39707422,"samples":50590811},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101878562.08597471,"samples":50940000},{"name":"DefineProperties (setter)","opsSec":94433662.2972214,"samples":47220225},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10310172.405122139,"samples":5155128},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10215425.891175317,"samples":5107716}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,389,377|1697636|
|Using replaceAll()|2,944,310|1474529|
|Using replaceAll(//g)|3,031,992|1516519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:39:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":3389377.5132304756,"samples":1697636},{"name":"Using replaceAll()","opsSec":2944310.8464019946,"samples":1474529},{"name":"Using replaceAll(//g)","opsSec":3031992.914490276,"samples":1516519}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,146,806|11073819|
|{ ...object, __proto__: null }|20,603,510|10301908|
|{ ...object, newProp: true }|778,278|389141|
|structuredClone|284,719|142364|
|JSON.parse + JSON.stringify|189,848|94925|
|loop + object.keys starting with {}|1,509,023|754975|
|loop + object.keys starting with { __proto__: null }|787,953|393977|
|loop + object.keys starting with { randomProp: true }|605,541|302773|
|object.keys + reduce(FN, {})|1,559,437|779721|
|object.keys + reduce(FN, { __proto__: null })|840,025|421267|
|object.keys + reduce(FN, { newProp: true })|600,979|300490|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":22146806.077376507,"samples":11073819},{"name":"{ ...object, __proto__: null }","opsSec":20603510.53235285,"samples":10301908},{"name":"{ ...object, newProp: true }","opsSec":778278.2533684883,"samples":389141},{"name":"structuredClone","opsSec":284719.9498281386,"samples":142364},{"name":"JSON.parse + JSON.stringify","opsSec":189848.39578105567,"samples":94925},{"name":"loop + object.keys starting with {}","opsSec":1509023.9844139165,"samples":754975},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":787953.0245141556,"samples":393977},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":605541.8871595025,"samples":302773},{"name":"object.keys + reduce(FN, {})","opsSec":1559437.4464426565,"samples":779721},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":840025.8357391849,"samples":421267},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":600979.7019140678,"samples":300490}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,544|129298|
|Sort using first char|1,337,035|668595|
|Sort using localeCompare|1,227,357|613679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:42:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":258544.82829049512,"samples":129298},{"name":"Sort using first char","opsSec":1337035.7969874619,"samples":668595},{"name":"Sort using localeCompare","opsSec":1227357.391230734,"samples":613679}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,842|923|
|{...smallObject} - Total keys: 2|52,253,321|26127160|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,067|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,359|3180|
|{ ...bigObject, ...anotherBigObject }|1,117|559|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,484,243|6242132|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,377,713|14188859|
|{ ...smallObject, ...anotherSmallObject }|20,585,834|10295704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:42:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1842.7135093997047,"samples":923},{"name":"{...smallObject} - Total keys: 2","opsSec":52253321.85704589,"samples":26127160},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1067.5426839299728,"samples":534},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6359.823909195602,"samples":3180},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1117.6188383304252,"samples":559},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12484243.276156163,"samples":6242132},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28377713.40281043,"samples":14188859},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20585834.591142796,"samples":10295704}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,978|990|
|streams.web.Readable reading 1e3 * "some data"|1,624|813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:44:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1978.3523569364584,"samples":990},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1624.2668877395793,"samples":813}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,188|3095|
|streams.web.WritableStream writing 1e3 * "some data"|1,264|638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:45:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6188.558325829531,"samples":3095},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1264.2873687300134,"samples":638}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|146,446,731|73225023|
|Using backtick (`)|98,283,308|49143796|
|Using array.join|10,086,341|5043173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:46:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":146446731.91045687,"samples":73225023},{"name":"Using backtick (`)","opsSec":98283308.22372775,"samples":49143796},{"name":"Using array.join","opsSec":10086341.198901588,"samples":5043173}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|55,324,574|27700307|
|(short string) (true) String#slice and strict comparison|52,285,609|26169898|
|(long string) (true) String#endsWith|44,534,818|22267419|
|(long string) (true) String#slice and strict comparison|47,394,431|23733677|
|(short string) (false) String#endsWith|56,760,214|28380617|
|(short string) (false) String#slice and strict comparison|53,792,694|26944377|
|(long string) (false) String#endsWith|52,281,804|26141052|
|(long string) (false) String#slice and strict comparison|47,366,498|23685367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":55324574.46641443,"samples":27700307},{"name":"(short string) (true) String#slice and strict comparison","opsSec":52285609.07703449,"samples":26169898},{"name":"(long string) (true) String#endsWith","opsSec":44534818.85002789,"samples":22267419},{"name":"(long string) (true) String#slice and strict comparison","opsSec":47394431.50585215,"samples":23733677},{"name":"(short string) (false) String#endsWith","opsSec":56760214.927101195,"samples":28380617},{"name":"(short string) (false) String#slice and strict comparison","opsSec":53792694.55637906,"samples":26944377},{"name":"(long string) (false) String#endsWith","opsSec":52281804.843512684,"samples":26141052},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47366498.20353165,"samples":23685367}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|136,785,317|68392699|
|Using indexof|15,694,927|7847654|
|Using RegExp.test|13,290,426|6646583|
|Using RegExp.text with cached regex pattern|14,128,702|7064353|
|Using new RegExp.test|4,398,523|2199509|
|Using new RegExp.test with cached regex pattern|5,210,732|2606104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":136785317.57023326,"samples":68392699},{"name":"Using indexof","opsSec":15694927.806068826,"samples":7847654},{"name":"Using RegExp.test","opsSec":13290426.763301522,"samples":6646583},{"name":"Using RegExp.text with cached regex pattern","opsSec":14128702.411309589,"samples":7064353},{"name":"Using new RegExp.test","opsSec":4398523.913808761,"samples":2199509},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5210732.53939561,"samples":2606104}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|112,081,886|56040954|
|(short string) (true) String#slice and strict comparison|61,017,678|30510746|
|(long string) (true) String#startsWith|63,874,477|31957551|
|(long string) (true) String#slice and strict comparison|56,352,662|28176341|
|(short string) (false) String#startsWith|94,574,228|47288311|
|(short string) (false) String#slice and strict comparison|60,311,694|30162245|
|(long string) (false) String#startsWith|84,254,601|42127307|
|(long string) (false) String#slice and strict comparison|55,481,668|27740841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:50:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":112081886.92860526,"samples":56040954},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61017678.51712804,"samples":30510746},{"name":"(long string) (true) String#startsWith","opsSec":63874477.83209878,"samples":31957551},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56352662.84009464,"samples":28176341},{"name":"(short string) (false) String#startsWith","opsSec":94574228.51542474,"samples":47288311},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60311694.63273689,"samples":30162245},{"name":"(long string) (false) String#startsWith","opsSec":84254601.69882815,"samples":42127307},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55481668.79536283,"samples":27740841}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|120,672,949|60417476|
|Using this|94,675,675|47337862|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:51:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":120672949.04859407,"samples":60417476},{"name":"Using this","opsSec":94675675.90475664,"samples":47337862}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,885,411|5442709|
|Date.now()|19,622,850|9812290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:52:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":10885411.904169334,"samples":5442709},{"name":"Date.now()","opsSec":19622850.128024116,"samples":9812290}]}-->
