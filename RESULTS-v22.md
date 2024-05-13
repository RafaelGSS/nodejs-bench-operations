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
|Using String()|1,029,792|514897|
|Using brackets {}|1,070,904|535453|
|Using '' + |1,076,575|538288|
|Using date.toString()|1,190,149|595075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:49:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1029792.8486916213,"samples":514897},{"name":"Using brackets {}","opsSec":1070904.7855941006,"samples":535453},{"name":"Using '' + ","opsSec":1076575.1042890465,"samples":538288},{"name":"Using date.toString()","opsSec":1190149.840519507,"samples":595075}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,354,176|1677089|
|Using delete property (proto: null)|8,438,887|4219444|
|Using delete property (cached proto: null)|3,339,292|1669647|
|Using undefined assignment|16,170,424|8085213|
|Using undefined assignment (proto: null)|8,678,816|4339409|
|Using undefined property (cached proto: null)|16,163,244|8081623|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:52:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3354176.430244472,"samples":1677089},{"name":"Using delete property (proto: null)","opsSec":8438887.172987273,"samples":4219444},{"name":"Using delete property (cached proto: null)","opsSec":3339292.784499803,"samples":1669647},{"name":"Using undefined assignment","opsSec":16170424.318301685,"samples":8085213},{"name":"Using undefined assignment (proto: null)","opsSec":8678816.281570083,"samples":4339409},{"name":"Using undefined property (cached proto: null)","opsSec":16163244.997900698,"samples":8081623}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|315,860|157931|
|NodeError|308,273|154137|
|NodeError Range|319,804|159903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:53:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":315860.5280899259,"samples":157931},{"name":"NodeError","opsSec":308273.88223935297,"samples":154137},{"name":"NodeError Range","opsSec":319804.80840733944,"samples":159903}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,682,696|841349|
|Function returning explicitly undefined|1,667,797|833899|
|Function returning implicitly undefined|1,694,851|847426|
|Function returning string|1,649,479|824740|
|Function returning integer|1,707,007|853504|
|Function returning float|1,675,531|837766|
|Function returning functions|1,632,505|816253|
|Function returning arrow functions|1,659,960|829981|
|Function returning empty object|1,631,185|815593|
|Function returning empty array|1,663,517|831759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:55:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1682696.5730731005,"samples":841349},{"name":"Function returning explicitly undefined","opsSec":1667797.9266173944,"samples":833899},{"name":"Function returning implicitly undefined","opsSec":1694851.3796847307,"samples":847426},{"name":"Function returning string","opsSec":1649479.6140212226,"samples":824740},{"name":"Function returning integer","opsSec":1707007.8429564394,"samples":853504},{"name":"Function returning float","opsSec":1675531.9664892852,"samples":837766},{"name":"Function returning functions","opsSec":1632505.898783439,"samples":816253},{"name":"Function returning arrow functions","opsSec":1659960.1342044766,"samples":829981},{"name":"Function returning empty object","opsSec":1631185.569368573,"samples":815593},{"name":"Function returning empty array","opsSec":1663517.0351593934,"samples":831759}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,845,954|7422978|
|using Array.includes (first item)|15,280,362|7640182|
|Using raw comparison|16,085,724|8042863|
|Using raw comparison (first item)|16,052,541|8026271|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:57:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14845954.515414245,"samples":7422978},{"name":"using Array.includes (first item)","opsSec":15280362.410850277,"samples":7640182},{"name":"Using raw comparison","opsSec":16085724.294953553,"samples":8042863},{"name":"Using raw comparison (first item)","opsSec":16052541.422140198,"samples":8026271}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,688,307|6844154|
|Using Object.getOwnPropertyNames()|13,773,536|6886769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:00:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13688307.178698104,"samples":6844154},{"name":"Using Object.getOwnPropertyNames()","opsSec":13773536.595105955,"samples":6886769}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,804,043|7902022|
|Length = 10_000 - Array.at|15,772,696|7886349|
|Length = 1_000_000 - Array.at|15,810,330|7905166|
|Length = 100 - Array[length - 1]|15,821,754|7910878|
|Length = 10_000 - Array[length - 1]|15,829,844|7914923|
|Length = 1_000_000 - Array[length - 1]|15,818,252|7909127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:02:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15804043.96837422,"samples":7902022},{"name":"Length = 10_000 - Array.at","opsSec":15772696.422719667,"samples":7886349},{"name":"Length = 1_000_000 - Array.at","opsSec":15810330.703634407,"samples":7905166},{"name":"Length = 100 - Array[length - 1]","opsSec":15821754.576082587,"samples":7910878},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15829844.733628234,"samples":7914923},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15818252.639517942,"samples":7909127}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,372,430|6686216|
|Object.create({})|1,825,281|912642|
|Cached Empty.prototype|15,967,819|7983910|
|Empty.prototype|2,599,983|1299992|
|Empty class|1,549,861|777723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:04:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13372430.903454857,"samples":6686216},{"name":"Object.create({})","opsSec":1825281.430003617,"samples":912642},{"name":"Cached Empty.prototype","opsSec":15967819.169671902,"samples":7983910},{"name":"Empty.prototype","opsSec":2599983.9843982747,"samples":1299992},{"name":"Empty class","opsSec":1549861.1342972168,"samples":777723}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,110,659|8055330|
|Using optional chain (obj.field?.field2) (undefined)|16,038,159|8019080|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,132,910|8066456|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,037,576|8018789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16110659.967789013,"samples":8055330},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16038159.615095854,"samples":8019080},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16132910.677087437,"samples":8066456},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16037576.58870877,"samples":8018789}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,079,514|8039758|
|Using parseInt(x, 10) - big number (10 len)|15,957,796|7978899|
|Using + - small number (2 len)|16,079,287|8039645|
|Using + - big number (10 len)|15,984,073|7992038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:09:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16079514.48851138,"samples":8039758},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15957796.372264568,"samples":7978899},{"name":"Using + - small number (2 len)","opsSec":16079287.845326848,"samples":8039645},{"name":"Using + - big number (10 len)","opsSec":15984073.826120274,"samples":7992038}]}-->

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
