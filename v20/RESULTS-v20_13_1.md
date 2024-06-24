## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,003,072|10001537|
|Using dot notation|18,531,625|9265813|
|Using define property (writable)|3,493,732|1746867|
|Using define property initialized (writable)|4,186,154|2093078|
|Using define property (getter)|2,148,437|1074219|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:38:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20003072.99983302,"samples":10001537},{"name":"Using dot notation","opsSec":18531625.962887384,"samples":9265813},{"name":"Using define property (writable)","opsSec":3493732.3928849827,"samples":1746867},{"name":"Using define property initialized (writable)","opsSec":4186154.8362570596,"samples":2093078},{"name":"Using define property (getter)","opsSec":2148437.0117225717,"samples":1074219}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.008ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.332ms
array.push|1,000,000|32.85ms
new Array(length)|1,000,000|9.188ms
array.push|100,000,000|2,257.658ms
new Array(length)|100,000,000|4,443.837ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.221ms
new Array(length)|10,000|0.175ms
array.push|1,000,000|25.146ms
new Array(length)|1,000,000|4.722ms
array.push|100,000,000|2,248.355ms
new Array(length)|100,000,000|4,842.155ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|222|112|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":222.86974373051876,"samples":112},{"name":"Array.from","opsSec":22.77909110416622,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,347|2674|
|new Blob (1024)|728|365|
|text (128)|6,196|3099|
|text (1024)|803|402|
|arrayBuffer (128)|6,397|3199|
|arrayBuffer (1024)|796|399|
|slice (0, 64)|82,541|41271|
|slice (0, 512)|29,480|14741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5347.911010760799,"samples":2674},{"name":"new Blob (1024)","opsSec":728.6979973957565,"samples":365},{"name":"text (128)","opsSec":6196.1284098446,"samples":3099},{"name":"text (1024)","opsSec":803.7301090368419,"samples":402},{"name":"arrayBuffer (128)","opsSec":6397.893615824931,"samples":3199},{"name":"arrayBuffer (1024)","opsSec":796.8139042564502,"samples":399},{"name":"slice (0, 64)","opsSec":82541.20430278653,"samples":41271},{"name":"slice (0, 512)","opsSec":29480.842641079522,"samples":14741}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,841|161921|
|[True conditional] Using constructor name|320,955|160478|
|[True conditional] Check if property is valid then instanceof |321,545|160773|
|[False conditional] Using instanceof only|20,066,414|10033208|
|[False conditional] Using constructor name|19,985,106|9992554|
|[False conditional] Check if property is valid then instanceof |20,020,051|10010306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:59:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323841.1495931033,"samples":161921},{"name":"[True conditional] Using constructor name","opsSec":320955.4858293537,"samples":160478},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":321545.52604183333,"samples":160773},{"name":"[False conditional] Using instanceof only","opsSec":20066414.956566893,"samples":10033208},{"name":"[False conditional] Using constructor name","opsSec":19985106.081263546,"samples":9992554},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":20020051.758914545,"samples":10010306}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,825|3413|
|crypto.verify('RSA-SHA256')|7,227|3614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:04:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6825.296093563278,"samples":3413},{"name":"crypto.verify('RSA-SHA256')","opsSec":7227.471628459221,"samples":3614}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,261|698131|
|fromUnixToISOString(new Date())|1,973,613|986807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396261.8380336608,"samples":698131},{"name":"fromUnixToISOString(new Date())","opsSec":1973613.5539631785,"samples":986807}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,250|8126|
|Intl.DateTimeFormat().format(new Date())|15,711|7856|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,838|10920|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,706|9354|
|Reusing Intl.DateTimeFormat()|1,034,350|517176|
|Date.toLocaleDateString()|1,089,885|544943|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,878|10940|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16250.681029724938,"samples":8126},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15711.761998229123,"samples":7856},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21838.23547057297,"samples":10920},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18706.845263854844,"samples":9354},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1034350.0823152069,"samples":517176},{"name":"Date.toLocaleDateString()","opsSec":1089885.925887957,"samples":544943},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21878.723157716657,"samples":10940}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,630|528316|
|Using brackets {}|1,086,249|543125|
|Using '' + |1,073,635|536818|
|Using date.toString()|1,186,031|593016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1056630.5777751736,"samples":528316},{"name":"Using brackets {}","opsSec":1086249.550292635,"samples":543125},{"name":"Using '' + ","opsSec":1073635.05949549,"samples":536818},{"name":"Using date.toString()","opsSec":1186031.6394460308,"samples":593016}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,143,221|1571611|
|Using delete property (proto: null)|9,430,404|4715203|
|Using delete property (cached proto: null)|3,252,661|1626331|
|Using undefined assignment|20,064,575|10032288|
|Using undefined assignment (proto: null)|9,673,107|4836554|
|Using undefined property (cached proto: null)|19,951,195|9975598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:22:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3143221.352493049,"samples":1571611},{"name":"Using delete property (proto: null)","opsSec":9430404.906075431,"samples":4715203},{"name":"Using delete property (cached proto: null)","opsSec":3252661.1217821464,"samples":1626331},{"name":"Using undefined assignment","opsSec":20064575.317771215,"samples":10032288},{"name":"Using undefined assignment (proto: null)","opsSec":9673107.090712951,"samples":4836554},{"name":"Using undefined property (cached proto: null)","opsSec":19951195.880367614,"samples":9975598}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|310,139|155070|
|NodeError|312,688|156345|
|NodeError Range|317,970|158986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:27:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":310139.6526435911,"samples":155070},{"name":"NodeError","opsSec":312688.3708935759,"samples":156345},{"name":"NodeError Range","opsSec":317970.7942547686,"samples":158986}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,583,090|791546|
|Function returning explicitly undefined|1,570,447|785224|
|Function returning implicitly undefined|1,617,162|808582|
|Function returning string|1,592,032|796017|
|Function returning integer|1,622,022|811012|
|Function returning float|1,597,017|798509|
|Function returning functions|1,581,815|790908|
|Function returning arrow functions|1,590,428|795215|
|Function returning empty object|1,619,684|809843|
|Function returning empty array|1,617,980|808991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1583090.4833992622,"samples":791546},{"name":"Function returning explicitly undefined","opsSec":1570447.3090033801,"samples":785224},{"name":"Function returning implicitly undefined","opsSec":1617162.6642239492,"samples":808582},{"name":"Function returning string","opsSec":1592032.519408552,"samples":796017},{"name":"Function returning integer","opsSec":1622022.8386315787,"samples":811012},{"name":"Function returning float","opsSec":1597017.3899403648,"samples":798509},{"name":"Function returning functions","opsSec":1581815.4843284984,"samples":790908},{"name":"Function returning arrow functions","opsSec":1590428.1614640006,"samples":795215},{"name":"Function returning empty object","opsSec":1619684.5293265565,"samples":809843},{"name":"Function returning empty array","opsSec":1617980.8285838615,"samples":808991}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|20,087,805|10043903|
|using Array.includes (first item)|19,503,295|9751648|
|Using raw comparison|19,493,874|9746938|
|Using raw comparison (first item)|20,090,980|10045491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:38:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":20087805.79914527,"samples":10043903},{"name":"using Array.includes (first item)","opsSec":19503295.805008024,"samples":9751648},{"name":"Using raw comparison","opsSec":19493874.167570032,"samples":9746938},{"name":"Using raw comparison (first item)","opsSec":20090980.714241266,"samples":10045491}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,895,615|8447808|
|Using Object.getOwnPropertyNames()|16,362,608|8181305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:43:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16895615.662077233,"samples":8447808},{"name":"Using Object.getOwnPropertyNames()","opsSec":16362608.42919626,"samples":8181305}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,518,870|9759436|
|Length = 10_000 - Array.at|19,386,123|9693062|
|Length = 1_000_000 - Array.at|19,408,572|9704287|
|Length = 100 - Array[length - 1]|19,185,503|9592752|
|Length = 10_000 - Array[length - 1]|19,233,191|9616596|
|Length = 1_000_000 - Array[length - 1]|19,290,911|9645456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:49:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19518870.243325192,"samples":9759436},{"name":"Length = 10_000 - Array.at","opsSec":19386123.45719622,"samples":9693062},{"name":"Length = 1_000_000 - Array.at","opsSec":19408572.913115736,"samples":9704287},{"name":"Length = 100 - Array[length - 1]","opsSec":19185503.079110056,"samples":9592752},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19233191.26896678,"samples":9616596},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19290911.807156645,"samples":9645456}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|15,742,143|7871072|
|Object.create({})|2,053,503|1026752|
|Cached Empty.prototype|19,496,577|9748289|
|Empty.prototype|1,945,635|972818|
|Empty class|1,248,349|624175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":15742143.653649243,"samples":7871072},{"name":"Object.create({})","opsSec":2053503.2155643785,"samples":1026752},{"name":"Cached Empty.prototype","opsSec":19496577.220161933,"samples":9748289},{"name":"Empty.prototype","opsSec":1945635.7665252003,"samples":972818},{"name":"Empty class","opsSec":1248349.8601838602,"samples":624175}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,089,058|10044530|
|Using optional chain (obj.field?.field2) (undefined)|20,084,172|10042087|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,085,972|10042987|
|Using and operator (obj.field && obj.field.field2) (undefined)|20,142,234|10071118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:02:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20089058.553578377,"samples":10044530},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20084172.152247537,"samples":10042087},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20085972.51367268,"samples":10042987},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":20142234.751175456,"samples":10071118}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,062,750|10031376|
|Using parseInt(x, 10) - big number (10 len)|20,038,966|10019484|
|Using + - small number (2 len)|19,933,276|9966639|
|Using + - big number (10 len)|20,021,408|10010705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:10:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20062750.876461692,"samples":10031376},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20038966.276584893,"samples":10019484},{"name":"Using + - small number (2 len)","opsSec":19933276.405225962,"samples":9966639},{"name":"Using + - big number (10 len)","opsSec":20021408.31811329,"samples":10010705}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,057,186|528594|
|Using ? operator to avoid rejection|1,126,651|563326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:14:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1057186.8709244942,"samples":528594},{"name":"Using ? operator to avoid rejection","opsSec":1126651.344289456,"samples":563326}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|17,046,718|8523360|
|Raw usage underscore usage|19,328,692|9664347|
|Manipulating private properties using #|19,369,264|9684633|
|Manipulating private properties using underscore(_)|19,314,746|9657374|
|Manipulating private properties using Symbol|19,299,942|9649972|
|Manipulating private properties using PrivateSymbol|14,301,439|7150720|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:21:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":17046718.193096083,"samples":8523360},{"name":"Raw usage underscore usage","opsSec":19328692.067145117,"samples":9664347},{"name":"Manipulating private properties using #","opsSec":19369264.682780124,"samples":9684633},{"name":"Manipulating private properties using underscore(_)","opsSec":19314746.879634686,"samples":9657374},{"name":"Manipulating private properties using Symbol","opsSec":19299942.37875781,"samples":9649972},{"name":"Manipulating private properties using PrivateSymbol","opsSec":14301439.68553596,"samples":7150720}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,772,809|1886405|
|Adding property in the object creation - small object|4,034,564|2017283|
|Adding property after the function creation - small class|272,088|136045|
|Adding property in the function creation - small class|267,363|133682|
|Adding property after the class creation - small class|266,898|133450|
|Adding property in the class creation - small class|267,015|133508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3772809.426533974,"samples":1886405},{"name":"Adding property in the object creation - small object","opsSec":4034564.6040402735,"samples":2017283},{"name":"Adding property after the function creation - small class","opsSec":272088.56282819604,"samples":136045},{"name":"Adding property in the function creation - small class","opsSec":267363.3711612437,"samples":133682},{"name":"Adding property after the class creation - small class","opsSec":266898.7920161089,"samples":133450},{"name":"Adding property in the class creation - small class","opsSec":267015.0456882485,"samples":133508}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,929,350|9964676|
|Getter|16,050,907|8025455|
|Method|19,880,117|9940059|
|DefineProperty (getter)|19,952,732|9976367|
|DefineProperty (getter & enumerable=false)|16,100,765|8050383|
|DefineProperty (getter & configurable=false)|20,061,462|10030732|
|DefineProperty (getter & enumerable=false & configurable=false)|16,274,674|8137338|
|DefineProperty (writable)|20,040,546|10020274|
|DefineProperty (writable & enumerable=false)|19,982,836|9991419|
|DefineProperty (writable & enumerable=false & configurable=false)|20,037,646|10018824|
|DefineProperties (getter)|16,213,601|8106801|
|DefineProperties (getter & enumerable=false)|16,303,761|8151881|
|DefineProperties (getter & enumerable=false & configurable=false)|16,277,965|8138983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:34:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":19929350.2063578,"samples":9964676},{"name":"Getter","opsSec":16050907.560294157,"samples":8025455},{"name":"Method","opsSec":19880117.403566334,"samples":9940059},{"name":"DefineProperty (getter)","opsSec":19952732.36380208,"samples":9976367},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16100765.871207537,"samples":8050383},{"name":"DefineProperty (getter & configurable=false)","opsSec":20061462.394931827,"samples":10030732},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16274674.242294088,"samples":8137338},{"name":"DefineProperty (writable)","opsSec":20040546.79724016,"samples":10020274},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19982836.881126214,"samples":9991419},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20037646.5171428,"samples":10018824},{"name":"DefineProperties (getter)","opsSec":16213601.027041338,"samples":8106801},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16303761.901989728,"samples":8151881},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16277965.544192176,"samples":8138983}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,741,381|9870691|
|Setter|6,807,806|3403904|
|Method|18,493,735|9246868|
|DefineProperty (setter)|18,543,293|9271647|
|DefineProperty (setter & enumerable=false)|6,764,404|3382203|
|DefineProperty (setter & configurable=false)|6,706,867|3353434|
|DefineProperty (setter & enumerable=false & configurable=false)|6,838,513|3419257|
|DefineProperty (writable)|18,657,635|9328818|
|DefineProperty (writable & enumerable=false)|18,524,794|9262398|
|DefineProperty (writable & enumerable=false & configurable=false)|18,536,507|9268254|
|DefineProperties (setter)|19,546,379|9773190|
|DefineProperties (setter & enumerable=false)|6,670,838|3335420|
|DefineProperties (setter & enumerable=false & configurable=false)|6,876,607|3438304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19741381.289295543,"samples":9870691},{"name":"Setter","opsSec":6807806.366126464,"samples":3403904},{"name":"Method","opsSec":18493735.33425982,"samples":9246868},{"name":"DefineProperty (setter)","opsSec":18543293.33245032,"samples":9271647},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6764404.214163854,"samples":3382203},{"name":"DefineProperty (setter & configurable=false)","opsSec":6706867.691455142,"samples":3353434},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6838513.699119426,"samples":3419257},{"name":"DefineProperty (writable)","opsSec":18657635.365628507,"samples":9328818},{"name":"DefineProperty (writable & enumerable=false)","opsSec":18524794.18459867,"samples":9262398},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18536507.851610646,"samples":9268254},{"name":"DefineProperties (setter)","opsSec":19546379.68727318,"samples":9773190},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6670838.985917779,"samples":3335420},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6876607.436097186,"samples":3438304}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,069,853|1534927|
|Using replaceAll()|2,628,110|1314056|
|Using replaceAll(//g)|2,815,580|1407791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3069853.9631614136,"samples":1534927},{"name":"Using replaceAll()","opsSec":2628110.41787855,"samples":1314056},{"name":"Using replaceAll(//g)","opsSec":2815580.8794015776,"samples":1407791}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,637,486|5818744|
|{ ...object, __proto__: null }|10,680,607|5340304|
|{ ...object, newProp: true }|851,126|425564|
|structuredClone|299,876|149939|
|JSON.parse + JSON.stringify|187,142|93572|
|loop + object.keys starting with {}|1,413,358|706680|
|loop + object.keys starting with { __proto__: null }|844,474|422238|
|loop + object.keys starting with { randomProp: true }|643,325|321663|
|object.keys + reduce(FN, {})|1,461,595|730798|
|object.keys + reduce(FN, { __proto__: null })|817,241|408621|
|object.keys + reduce(FN, { newProp: true })|635,333|317667|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:00:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11637486.97590233,"samples":5818744},{"name":"{ ...object, __proto__: null }","opsSec":10680607.40184955,"samples":5340304},{"name":"{ ...object, newProp: true }","opsSec":851126.5615954552,"samples":425564},{"name":"structuredClone","opsSec":299876.4502385451,"samples":149939},{"name":"JSON.parse + JSON.stringify","opsSec":187142.45083455078,"samples":93572},{"name":"loop + object.keys starting with {}","opsSec":1413358.4085583354,"samples":706680},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":844474.3110515957,"samples":422238},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":643325.7491033761,"samples":321663},{"name":"object.keys + reduce(FN, {})","opsSec":1461595.20781456,"samples":730798},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":817241.427932005,"samples":408621},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":635333.8259186161,"samples":317667}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|266,062|133032|
|Sort using first char|1,328,160|664081|
|Sort using localeCompare|1,242,288|621145|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:06:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":266062.2498425203,"samples":133032},{"name":"Sort using first char","opsSec":1328160.236203315,"samples":664081},{"name":"Sort using localeCompare","opsSec":1242288.3576945204,"samples":621145}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,296|1149|
|{...smallObject} - Total keys: 2|15,414,862|7707432|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,543|1272|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,802|3402|
|{ ...bigObject, ...anotherBigObject }|1,359|680|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,227,030|4113516|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,209,254|6604628|
|{ ...smallObject, ...anotherSmallObject }|11,222,025|5611013|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:11:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2296.3721981963145,"samples":1149},{"name":"{...smallObject} - Total keys: 2","opsSec":15414862.581806084,"samples":7707432},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2543.6857428884787,"samples":1272},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6802.098786180433,"samples":3402},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1359.8127429067945,"samples":680},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8227030.206518421,"samples":4113516},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":13209254.150706196,"samples":6604628},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11222025.07970549,"samples":5611013}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,130|1066|
|streams.web.Readable reading 1e3 * "some data"|2,434|1218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:16:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2130.179110115592,"samples":1066},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2434.966166934769,"samples":1218}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,103|3052|
|streams.web.WritableStream writing 1e3 * "some data"|2,809|1405|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:20:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6103.721194223295,"samples":3052},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2809.1962440074667,"samples":1405}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|18,946,807|9473404|
|Using backtick (`)|18,968,502|9484252|
|Using array.join|6,226,684|3113343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":18946807.545267817,"samples":9473404},{"name":"Using backtick (`)","opsSec":18968502.861834515,"samples":9484252},{"name":"Using array.join","opsSec":6226684.592763731,"samples":3113343}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,002,611|8001306|
|(short string) (true) String#slice and strict comparison|19,907,820|9953911|
|(long string) (true) String#endsWith|15,658,221|7829111|
|(long string) (true) String#slice and strict comparison|19,949,514|9974758|
|(short string) (false) String#endsWith|16,156,558|8078280|
|(short string) (false) String#slice and strict comparison|19,976,517|9988259|
|(long string) (false) String#endsWith|16,094,311|8047156|
|(long string) (false) String#slice and strict comparison|19,963,024|9981513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:34:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16002611.071843121,"samples":8001306},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19907820.725896146,"samples":9953911},{"name":"(long string) (true) String#endsWith","opsSec":15658221.217125073,"samples":7829111},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19949514.44394475,"samples":9974758},{"name":"(short string) (false) String#endsWith","opsSec":16156558.77206879,"samples":8078280},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19976517.36094992,"samples":9988259},{"name":"(long string) (false) String#endsWith","opsSec":16094311.420565248,"samples":8047156},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19963024.562696896,"samples":9981513}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,907,483|9953742|
|Using indexof|18,925,983|9462992|
|Using RegExp.test|9,025,596|4512799|
|Using RegExp.text with cached regex pattern|9,474,946|4737474|
|Using new RegExp.test|3,601,739|1800870|
|Using new RegExp.test with cached regex pattern|4,062,861|2031431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19907483.56202365,"samples":9953742},{"name":"Using indexof","opsSec":18925983.54587556,"samples":9462992},{"name":"Using RegExp.test","opsSec":9025596.971106354,"samples":4512799},{"name":"Using RegExp.text with cached regex pattern","opsSec":9474946.787234046,"samples":4737474},{"name":"Using new RegExp.test","opsSec":3601739.7550869333,"samples":1800870},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4062861.488080521,"samples":2031431}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,528,200|9264101|
|(short string) (true) String#slice and strict comparison|20,001,531|10000766|
|(long string) (true) String#startsWith|17,726,927|8863464|
|(long string) (true) String#slice and strict comparison|20,147,550|10073776|
|(short string) (false) String#startsWith|19,392,041|9696021|
|(short string) (false) String#slice and strict comparison|19,968,667|9984334|
|(long string) (false) String#startsWith|19,118,703|9559352|
|(long string) (false) String#slice and strict comparison|20,110,409|10055205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:50:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18528200.628933534,"samples":9264101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20001531.680021048,"samples":10000766},{"name":"(long string) (true) String#startsWith","opsSec":17726927.078079335,"samples":8863464},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20147550.99275448,"samples":10073776},{"name":"(short string) (false) String#startsWith","opsSec":19392041.14660034,"samples":9696021},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19968667.92025766,"samples":9984334},{"name":"(long string) (false) String#startsWith","opsSec":19118703.0440182,"samples":9559352},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20110409.19545138,"samples":10055205}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|19,400,581|9700291|
|Using this|19,731,640|9865821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:59:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":19400581.844797343,"samples":9700291},{"name":"Using this","opsSec":19731640.776633516,"samples":9865821}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,154,543|3577272|
|Date.now()|10,240,664|5120333|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":7154543.62796334,"samples":3577272},{"name":"Date.now()","opsSec":10240664.99641191,"samples":5120333}]}-->
