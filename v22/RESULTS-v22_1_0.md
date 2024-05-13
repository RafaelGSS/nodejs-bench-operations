## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,987,489|7993745|
|Using dot notation|16,059,253|8029627|
|Using define property (writable)|3,706,344|1853173|
|Using define property initialized (writable)|4,510,278|2255140|
|Using define property (getter)|2,144,964|1072483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15987489.936043411,"samples":7993745},{"name":"Using dot notation","opsSec":16059253.93576264,"samples":8029627},{"name":"Using define property (writable)","opsSec":3706344.3543876735,"samples":1853173},{"name":"Using define property initialized (writable)","opsSec":4510278.457480487,"samples":2255140},{"name":"Using define property (getter)","opsSec":2144964.785945548,"samples":1072483}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.022ms
new Array(length)|100|0.006ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.312ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|21.716ms
new Array(length)|1,000,000|15.318ms
array.push|100,000,000|2,017.577ms
new Array(length)|100,000,000|4,086.32ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.322ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|17.732ms
new Array(length)|1,000,000|8.487ms
array.push|100,000,000|2,612.123ms
new Array(length)|100,000,000|4,124.742ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|252|127|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":252.92652469122828,"samples":127},{"name":"Array.from","opsSec":24.847950896717997,"samples":13}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,425|161713|
|[True conditional] Using constructor name|323,581|161791|
|[True conditional] Check if property is valid then instanceof |328,788|164395|
|[False conditional] Using instanceof only|16,185,053|8092527|
|[False conditional] Using constructor name|16,017,031|8008516|
|[False conditional] Check if property is valid then instanceof |16,096,937|8048469|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:43:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323425.3001076526,"samples":161713},{"name":"[True conditional] Using constructor name","opsSec":323581.3418355033,"samples":161791},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":328788.3659218946,"samples":164395},{"name":"[False conditional] Using instanceof only","opsSec":16185053.838156208,"samples":8092527},{"name":"[False conditional] Using constructor name","opsSec":16017031.711687593,"samples":8008516},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16096937.25958725,"samples":8048469}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,231|3616|
|crypto.verify('RSA-SHA256')|7,245|3623|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:45:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7231.629682707224,"samples":3616},{"name":"crypto.verify('RSA-SHA256')","opsSec":7245.586972560301,"samples":3623}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,051,752|525877|
|Using brackets {}|1,044,768|522387|
|Using '' + |1,080,224|540113|
|Using date.toString()|1,193,926|596964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:11:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1051752.6474461316,"samples":525877},{"name":"Using brackets {}","opsSec":1044768.4272054697,"samples":522387},{"name":"Using '' + ","opsSec":1080224.6821259225,"samples":540113},{"name":"Using date.toString()","opsSec":1193926.9684470932,"samples":596964}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,328,668|1664335|
|Using delete property (proto: null)|8,394,029|4197015|
|Using delete property (cached proto: null)|3,298,887|1649444|
|Using undefined assignment|16,178,851|8089426|
|Using undefined assignment (proto: null)|8,698,690|4349346|
|Using undefined property (cached proto: null)|16,225,943|8112972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3328668.4954424356,"samples":1664335},{"name":"Using delete property (proto: null)","opsSec":8394029.19417387,"samples":4197015},{"name":"Using delete property (cached proto: null)","opsSec":3298887.30063832,"samples":1649444},{"name":"Using undefined assignment","opsSec":16178851.611706782,"samples":8089426},{"name":"Using undefined assignment (proto: null)","opsSec":8698690.173274318,"samples":4349346},{"name":"Using undefined property (cached proto: null)","opsSec":16225943.57812863,"samples":8112972}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|320,460|160231|
|NodeError|318,233|159117|
|NodeError Range|323,167|161584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:30:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":320460.7367437833,"samples":160231},{"name":"NodeError","opsSec":318233.6480335909,"samples":159117},{"name":"NodeError Range","opsSec":323167.0970711082,"samples":161584}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,641,719|820860|
|Function returning explicitly undefined|1,675,762|837882|
|Function returning implicitly undefined|1,704,263|852132|
|Function returning string|1,629,128|814565|
|Function returning integer|1,709,922|854962|
|Function returning float|1,670,495|835248|
|Function returning functions|1,638,826|819414|
|Function returning arrow functions|1,602,700|801351|
|Function returning empty object|1,630,769|815385|
|Function returning empty array|1,618,101|809051|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:37:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1641719.6782228108,"samples":820860},{"name":"Function returning explicitly undefined","opsSec":1675762.833669604,"samples":837882},{"name":"Function returning implicitly undefined","opsSec":1704263.3966911996,"samples":852132},{"name":"Function returning string","opsSec":1629128.6575972827,"samples":814565},{"name":"Function returning integer","opsSec":1709922.4850108123,"samples":854962},{"name":"Function returning float","opsSec":1670495.7160148695,"samples":835248},{"name":"Function returning functions","opsSec":1638826.8855961838,"samples":819414},{"name":"Function returning arrow functions","opsSec":1602700.7434841217,"samples":801351},{"name":"Function returning empty object","opsSec":1630769.109602399,"samples":815385},{"name":"Function returning empty array","opsSec":1618101.1100441942,"samples":809051}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,683,877|7341939|
|using Array.includes (first item)|15,293,704|7646853|
|Using raw comparison|16,179,973|8089987|
|Using raw comparison (first item)|16,030,522|8015262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:45:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14683877.67697227,"samples":7341939},{"name":"using Array.includes (first item)","opsSec":15293704.990617272,"samples":7646853},{"name":"Using raw comparison","opsSec":16179973.449894963,"samples":8089987},{"name":"Using raw comparison (first item)","opsSec":16030522.653426718,"samples":8015262}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,923,656|6961829|
|Using Object.getOwnPropertyNames()|14,038,128|7019065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:51:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13923656.301312484,"samples":6961829},{"name":"Using Object.getOwnPropertyNames()","opsSec":14038128.708466953,"samples":7019065}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,615,206|7807604|
|Length = 10_000 - Array.at|15,578,941|7789471|
|Length = 1_000_000 - Array.at|15,758,558|7879280|
|Length = 100 - Array[length - 1]|15,809,424|7904713|
|Length = 10_000 - Array[length - 1]|15,945,144|7972573|
|Length = 1_000_000 - Array[length - 1]|15,928,032|7964017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15615206.126178524,"samples":7807604},{"name":"Length = 10_000 - Array.at","opsSec":15578941.657277789,"samples":7789471},{"name":"Length = 1_000_000 - Array.at","opsSec":15758558.928434655,"samples":7879280},{"name":"Length = 100 - Array[length - 1]","opsSec":15809424.260922426,"samples":7904713},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15945144.245744312,"samples":7972573},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15928032.375609828,"samples":7964017}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,054,023|6527012|
|Object.create({})|1,757,414|878708|
|Cached Empty.prototype|16,003,245|8001623|
|Empty.prototype|2,494,645|1247323|
|Empty class|1,569,417|784709|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13054023.0862287,"samples":6527012},{"name":"Object.create({})","opsSec":1757414.9771822381,"samples":878708},{"name":"Cached Empty.prototype","opsSec":16003245.071831558,"samples":8001623},{"name":"Empty.prototype","opsSec":2494645.4860982546,"samples":1247323},{"name":"Empty class","opsSec":1569417.3942054058,"samples":784709}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,114,427|8057214|
|Using optional chain (obj.field?.field2) (undefined)|16,119,481|8059741|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,130,196|8065099|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,161,068|8080535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:17:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16114427.935555758,"samples":8057214},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16119481.161766494,"samples":8059741},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16130196.161199968,"samples":8065099},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16161068.707117947,"samples":8080535}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,035,270|8017636|
|Using parseInt(x, 10) - big number (10 len)|16,030,306|8015154|
|Using + - small number (2 len)|16,176,846|8088424|
|Using + - big number (10 len)|16,081,248|8040625|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:25:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16035270.075769747,"samples":8017636},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16030306.172526048,"samples":8015154},{"name":"Using + - small number (2 len)","opsSec":16176846.835206253,"samples":8088424},{"name":"Using + - big number (10 len)","opsSec":16081248.520525219,"samples":8040625}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,244,100|622051|
|Using ? operator to avoid rejection|1,241,927|620964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:29:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1244100.8827974917,"samples":622051},{"name":"Using ? operator to avoid rejection","opsSec":1241927.388971948,"samples":620964}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,871,484|7935743|
|Raw usage underscore usage|15,954,074|7977038|
|Manipulating private properties using #|15,918,291|7959146|
|Manipulating private properties using underscore(_)|15,936,883|7968442|
|Manipulating private properties using Symbol|15,938,330|7969166|
|Manipulating private properties using PrivateSymbol|12,595,591|6297796|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:39:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15871484.952462297,"samples":7935743},{"name":"Raw usage underscore usage","opsSec":15954074.308865229,"samples":7977038},{"name":"Manipulating private properties using #","opsSec":15918291.681627689,"samples":7959146},{"name":"Manipulating private properties using underscore(_)","opsSec":15936883.904428583,"samples":7968442},{"name":"Manipulating private properties using Symbol","opsSec":15938330.820365513,"samples":7969166},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12595591.949671043,"samples":6297796}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,913,742|1956872|
|Adding property in the object creation - small object|3,952,234|1976118|
|Adding property after the function creation - small class|301,387|150694|
|Adding property in the function creation - small class|308,800|154401|
|Adding property after the class creation - small class|313,991|156996|
|Adding property in the class creation - small class|319,179|159590|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:44:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3913742.919807339,"samples":1956872},{"name":"Adding property in the object creation - small object","opsSec":3952234.91708838,"samples":1976118},{"name":"Adding property after the function creation - small class","opsSec":301387.63773210155,"samples":150694},{"name":"Adding property in the function creation - small class","opsSec":308800.7561505898,"samples":154401},{"name":"Adding property after the class creation - small class","opsSec":313991.6991959914,"samples":156996},{"name":"Adding property in the class creation - small class","opsSec":319179.463778522,"samples":159590}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,148,472|8074237|
|Getter|13,928,185|6964093|
|Method|15,994,873|7997437|
|DefineProperty (getter)|16,009,189|8004595|
|DefineProperty (getter & enumerable=false)|13,991,673|6995837|
|DefineProperty (getter & configurable=false)|16,139,549|8069775|
|DefineProperty (getter & enumerable=false & configurable=false)|13,895,404|6947703|
|DefineProperty (writable)|16,137,285|8068643|
|DefineProperty (writable & enumerable=false)|16,094,068|8047035|
|DefineProperty (writable & enumerable=false & configurable=false)|16,127,547|8063774|
|DefineProperties (getter)|13,952,709|6976355|
|DefineProperties (getter & enumerable=false)|13,888,495|6944248|
|DefineProperties (getter & enumerable=false & configurable=false)|13,946,159|6973080|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:01:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16148472.99877489,"samples":8074237},{"name":"Getter","opsSec":13928185.164361762,"samples":6964093},{"name":"Method","opsSec":15994873.96805016,"samples":7997437},{"name":"DefineProperty (getter)","opsSec":16009189.487724634,"samples":8004595},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13991673.216535974,"samples":6995837},{"name":"DefineProperty (getter & configurable=false)","opsSec":16139549.644840071,"samples":8069775},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13895404.554870158,"samples":6947703},{"name":"DefineProperty (writable)","opsSec":16137285.741715632,"samples":8068643},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16094068.22942882,"samples":8047035},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16127547.322661558,"samples":8063774},{"name":"DefineProperties (getter)","opsSec":13952709.525809333,"samples":6976355},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13888495.333441127,"samples":6944248},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13946159.91661809,"samples":6973080}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,832,051|7916026|
|Setter|6,472,548|3236275|
|Method|15,850,434|7925218|
|DefineProperty (setter)|15,912,594|7956298|
|DefineProperty (setter & enumerable=false)|6,416,532|3208267|
|DefineProperty (setter & configurable=false)|6,536,699|3268350|
|DefineProperty (setter & enumerable=false & configurable=false)|6,336,135|3168068|
|DefineProperty (writable)|15,911,780|7955891|
|DefineProperty (writable & enumerable=false)|15,905,490|7952746|
|DefineProperty (writable & enumerable=false & configurable=false)|15,946,154|7973078|
|DefineProperties (setter)|15,953,709|7976855|
|DefineProperties (setter & enumerable=false)|6,462,383|3231192|
|DefineProperties (setter & enumerable=false & configurable=false)|6,455,701|3227851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:17:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15832051.904980917,"samples":7916026},{"name":"Setter","opsSec":6472548.783182656,"samples":3236275},{"name":"Method","opsSec":15850434.573540037,"samples":7925218},{"name":"DefineProperty (setter)","opsSec":15912594.88624285,"samples":7956298},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6416532.036532176,"samples":3208267},{"name":"DefineProperty (setter & configurable=false)","opsSec":6536699.346326278,"samples":3268350},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6336135.923946889,"samples":3168068},{"name":"DefineProperty (writable)","opsSec":15911780.37714639,"samples":7955891},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15905490.218482535,"samples":7952746},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15946154.373507367,"samples":7973078},{"name":"DefineProperties (setter)","opsSec":15953709.585407825,"samples":7976855},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6462383.069422823,"samples":3231192},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6455701.754714063,"samples":3227851}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,095,947|5047974|
|{ ...object, __proto__: null }|2,229,687|1114844|
|{ ...object, newProp: true }|9,737,810|4868906|
|structuredClone|314,044|157023|
|JSON.parse + JSON.stringify|290,350|145176|
|loop + object.keys starting with {}|1,481,930|740966|
|loop + object.keys starting with { __proto__: null }|915,648|457825|
|loop + object.keys starting with { randomProp: true }|672,089|336045|
|object.keys + reduce(FN, {})|1,533,943|766972|
|object.keys + reduce(FN, { __proto__: null })|899,909|449955|
|object.keys + reduce(FN, { newProp: true })|698,198|349100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10095947.293285822,"samples":5047974},{"name":"{ ...object, __proto__: null }","opsSec":2229687.906351766,"samples":1114844},{"name":"{ ...object, newProp: true }","opsSec":9737810.675656324,"samples":4868906},{"name":"structuredClone","opsSec":314044.3914645668,"samples":157023},{"name":"JSON.parse + JSON.stringify","opsSec":290350.4297847318,"samples":145176},{"name":"loop + object.keys starting with {}","opsSec":1481930.438046687,"samples":740966},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":915648.4965058457,"samples":457825},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":672089.8870892056,"samples":336045},{"name":"object.keys + reduce(FN, {})","opsSec":1533943.4539168775,"samples":766972},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899909.2008808567,"samples":449955},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":698198.7655833923,"samples":349100}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|321,682|160843|
|Sort using first char|1,346,545|673273|
|Sort using localeCompare|1,274,700|637351|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:37:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":321682.55477983836,"samples":160843},{"name":"Sort using first char","opsSec":1346545.674135924,"samples":673273},{"name":"Sort using localeCompare","opsSec":1274700.557038623,"samples":637351}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,217|1109|
|{...smallObject} - Total keys: 2|12,312,290|6156146|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,531|1266|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,730|3366|
|{ ...bigObject, ...anotherBigObject }|1,343|673|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,234,935|3617468|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,859,995|5429998|
|{ ...smallObject, ...anotherSmallObject }|9,152,054|4576028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2217.2262146577905,"samples":1109},{"name":"{...smallObject} - Total keys: 2","opsSec":12312290.793415507,"samples":6156146},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2531.7835628868525,"samples":1266},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6730.546551933528,"samples":3366},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1343.3618871190156,"samples":673},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7234935.855305985,"samples":3617468},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10859995.326715302,"samples":5429998},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9152054.773601871,"samples":4576028}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,078,955|8039478|
|Using backtick (`)|16,186,561|8093281|
|Using array.join|6,044,823|3022412|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:03:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16078955.903517827,"samples":8039478},{"name":"Using backtick (`)","opsSec":16186561.967618681,"samples":8093281},{"name":"Using array.join","opsSec":6044823.262541956,"samples":3022412}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,601,015|7800508|
|(short string) (true) String#slice and strict comparison|16,112,363|8056182|
|(long string) (true) String#endsWith|14,425,531|7212766|
|(long string) (true) String#slice and strict comparison|16,168,151|8084076|
|(short string) (false) String#endsWith|15,996,664|7998333|
|(short string) (false) String#slice and strict comparison|16,172,414|8086208|
|(long string) (false) String#endsWith|15,575,459|7787730|
|(long string) (false) String#slice and strict comparison|16,030,216|8015109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:16:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15601015.18874258,"samples":7800508},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16112363.613321284,"samples":8056182},{"name":"(long string) (true) String#endsWith","opsSec":14425531.249886973,"samples":7212766},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16168151.579686679,"samples":8084076},{"name":"(short string) (false) String#endsWith","opsSec":15996664.464360194,"samples":7998333},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16172414.318119409,"samples":8086208},{"name":"(long string) (false) String#endsWith","opsSec":15575459.127796886,"samples":7787730},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16030216.813807176,"samples":8015109}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,952,356|7976179|
|Using indexof|16,019,258|8009630|
|Using RegExp.test|8,223,758|4111880|
|Using RegExp.text with cached regex pattern|8,331,502|4165752|
|Using new RegExp.test|3,666,627|1833314|
|Using new RegExp.test with cached regex pattern|3,869,323|1934662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":15952356.691899147,"samples":7976179},{"name":"Using indexof","opsSec":16019258.654352535,"samples":8009630},{"name":"Using RegExp.test","opsSec":8223758.881567515,"samples":4111880},{"name":"Using RegExp.text with cached regex pattern","opsSec":8331502.700277439,"samples":4165752},{"name":"Using new RegExp.test","opsSec":3666627.3473392306,"samples":1833314},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3869323.597592842,"samples":1934662}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,753,387|7876694|
|(short string) (true) String#slice and strict comparison|16,005,941|8002971|
|(long string) (true) String#startsWith|14,302,500|7151251|
|(long string) (true) String#slice and strict comparison|15,692,538|7846270|
|(short string) (false) String#startsWith|15,905,084|7952543|
|(short string) (false) String#slice and strict comparison|16,075,458|8037730|
|(long string) (false) String#startsWith|15,523,330|7761666|
|(long string) (false) String#slice and strict comparison|16,015,756|8007879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:36:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15753387.684914732,"samples":7876694},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16005941.935949132,"samples":8002971},{"name":"(long string) (true) String#startsWith","opsSec":14302500.026243975,"samples":7151251},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15692538.179633727,"samples":7846270},{"name":"(short string) (false) String#startsWith","opsSec":15905084.377957197,"samples":7952543},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16075458.553138178,"samples":8037730},{"name":"(long string) (false) String#startsWith","opsSec":15523330.354508016,"samples":7761666},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16015756.27022118,"samples":8007879}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,699,907|7849954|
|Using this|15,833,905|7916953|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:42:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15699907.748804627,"samples":7849954},{"name":"Using this","opsSec":15833905.999985225,"samples":7916953}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,535,558|3267780|
|Date.now()|9,132,228|4566115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:48:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6535558.836669652,"samples":3267780},{"name":"Date.now()","opsSec":9132228.301398715,"samples":4566115}]}-->
