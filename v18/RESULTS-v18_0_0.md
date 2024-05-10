## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|20,878,269|10439135|
|Using dot notation|21,038,102|10519052|
|Using define property (writable)|3,748,686|1874343|
|Using define property initialized (writable)|4,388,762|2194382|
|Using define property (getter)|2,143,459|1071730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:22:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":20878269.203557234,"samples":10439135},{"name":"Using dot notation","opsSec":21038102.414983664,"samples":10519052},{"name":"Using define property (writable)","opsSec":3748686,"samples":1874343},{"name":"Using define property initialized (writable)","opsSec":4388762.248389243,"samples":2194382},{"name":"Using define property (getter)","opsSec":2143459.169048164,"samples":1071730}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.413ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|26.881ms
new Array(length)|1,000,000|17.185ms
array.push|100,000,000|2,134.263ms
new Array(length)|100,000,000|4,208.388ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.483ms
new Array(length)|10,000|3.032ms
array.push|1,000,000|256.678ms
new Array(length)|1,000,000|4.599ms
array.push|100,000,000|2,624ms
new Array(length)|100,000,000|4,636.513ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1587820890989,"samples":114},{"name":"Array.from","opsSec":21.84401017792516,"samples":11}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|311,807|155904|
|[True conditional] Using constructor name|309,804|154903|
|[True conditional] Check if property is valid then instanceof |315,328|157665|
|[False conditional] Using instanceof only|14,896,004|7448003|
|[False conditional] Using constructor name|21,040,787|10520394|
|[False conditional] Check if property is valid then instanceof |21,002,126|10501064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":311807.0520087416,"samples":155904},{"name":"[True conditional] Using constructor name","opsSec":309804.1096966802,"samples":154903},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315328.1280159026,"samples":157665},{"name":"[False conditional] Using instanceof only","opsSec":14896004.955863604,"samples":7448003},{"name":"[False conditional] Using constructor name","opsSec":21040787.297687955,"samples":10520394},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":21002126.417694103,"samples":10501064}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,280|1641|
|crypto.verify('RSA-SHA256')|3,406|1704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3280.8655629852565,"samples":1641},{"name":"crypto.verify('RSA-SHA256')","opsSec":3406.3462145208177,"samples":1704}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,034,081|517041|
|Using brackets {}|1,051,916|525959|
|Using '' + |1,060,874|530438|
|Using date.toString()|1,153,588|576795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1034081.2707222941,"samples":517041},{"name":"Using brackets {}","opsSec":1051916.4154682367,"samples":525959},{"name":"Using '' + ","opsSec":1060874.4813951524,"samples":530438},{"name":"Using date.toString()","opsSec":1153588.6495684935,"samples":576795}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,194,960|1597481|
|Using delete property (proto: null)|9,695,948|4847975|
|Using delete property (cached proto: null)|3,190,218|1595110|
|Using undefined assignment|21,056,912|10528457|
|Using undefined assignment (proto: null)|10,328,303|5164152|
|Using undefined property (cached proto: null)|20,979,719|10489860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3194960.6806698083,"samples":1597481},{"name":"Using delete property (proto: null)","opsSec":9695948.317086607,"samples":4847975},{"name":"Using delete property (cached proto: null)","opsSec":3190218.451403435,"samples":1595110},{"name":"Using undefined assignment","opsSec":21056912.564177275,"samples":10528457},{"name":"Using undefined assignment (proto: null)","opsSec":10328303.06426545,"samples":5164152},{"name":"Using undefined property (cached proto: null)","opsSec":20979719.589839697,"samples":10489860}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|306,018|153010|
|NodeError|305,585|152793|
|NodeError Range|306,995|153498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:27:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":306018.2263319297,"samples":153010},{"name":"NodeError","opsSec":305585.12134252465,"samples":152793},{"name":"NodeError Range","opsSec":306995.82023674616,"samples":153498}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,663,701|831851|
|Function returning explicitly undefined|1,594,955|797478|
|Function returning implicitly undefined|1,698,133|849067|
|Function returning string|1,600,697|800349|
|Function returning integer|1,659,506|829754|
|Function returning float|1,675,311|837656|
|Function returning functions|1,623,981|811991|
|Function returning arrow functions|1,650,704|825353|
|Function returning empty object|1,663,642|831822|
|Function returning empty array|1,676,536|838269|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:32:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1663701.0337429717,"samples":831851},{"name":"Function returning explicitly undefined","opsSec":1594955.3200826377,"samples":797478},{"name":"Function returning implicitly undefined","opsSec":1698133.62428379,"samples":849067},{"name":"Function returning string","opsSec":1600697.5641716437,"samples":800349},{"name":"Function returning integer","opsSec":1659506.6832527537,"samples":829754},{"name":"Function returning float","opsSec":1675311.3856837961,"samples":837656},{"name":"Function returning functions","opsSec":1623981.933403756,"samples":811991},{"name":"Function returning arrow functions","opsSec":1650704.3919195782,"samples":825353},{"name":"Function returning empty object","opsSec":1663642.7410540436,"samples":831822},{"name":"Function returning empty array","opsSec":1676536.8072429101,"samples":838269}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,200,309|8600155|
|using Array.includes (first item)|20,392,691|10196346|
|Using raw comparison|21,091,876|10545939|
|Using raw comparison (first item)|21,070,304|10535153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:40:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17200309.393070746,"samples":8600155},{"name":"using Array.includes (first item)","opsSec":20392691.017876726,"samples":10196346},{"name":"Using raw comparison","opsSec":21091876.26007147,"samples":10545939},{"name":"Using raw comparison (first item)","opsSec":21070304.533122797,"samples":10535153}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|17,326,853|8663427|
|Using Object.getOwnPropertyNames()|16,546,556|8273279|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:47:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":17326853.80997198,"samples":8663427},{"name":"Using Object.getOwnPropertyNames()","opsSec":16546556.090616906,"samples":8273279}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|10,566,903|5283452|
|Length = 10_000 - Array.at|10,773,849|5386925|
|Length = 1_000_000 - Array.at|10,568,942|5284472|
|Length = 100 - Array[length - 1]|20,804,014|10402008|
|Length = 10_000 - Array[length - 1]|20,819,875|10409938|
|Length = 1_000_000 - Array[length - 1]|20,888,943|10444472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:54:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":10566903.108151508,"samples":5283452},{"name":"Length = 10_000 - Array.at","opsSec":10773849.398927508,"samples":5386925},{"name":"Length = 1_000_000 - Array.at","opsSec":10568942.84591679,"samples":5284472},{"name":"Length = 100 - Array[length - 1]","opsSec":20804014.482220545,"samples":10402008},{"name":"Length = 10_000 - Array[length - 1]","opsSec":20819875.801446192,"samples":10409938},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":20888943.302756295,"samples":10444472}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|16,314,486|8157244|
|Object.create({})|1,912,245|956123|
|Cached Empty.prototype|19,989,469|9994735|
|Empty.prototype|1,795,111|897556|
|Empty class|1,299,633|649817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":16314486.669730557,"samples":8157244},{"name":"Object.create({})","opsSec":1912245.865961007,"samples":956123},{"name":"Cached Empty.prototype","opsSec":19989469.4757553,"samples":9994735},{"name":"Empty.prototype","opsSec":1795111.9075545855,"samples":897556},{"name":"Empty class","opsSec":1299633.395159629,"samples":649817}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,789,950|10394976|
|Using optional chain (obj.field?.field2) (undefined)|21,091,482|10545742|
|Using and operator (obj.field && obj.field.field2) (Valid)|21,072,065|10536033|
|Using and operator (obj.field && obj.field.field2) (undefined)|21,089,873|10544938|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20789950.35437214,"samples":10394976},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":21091482.260103974,"samples":10545742},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":21072065.15597273,"samples":10536033},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":21089873.95854358,"samples":10544938}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,258,841|10129421|
|Using parseInt(x, 10) - big number (10 len)|9,884,807|4942404|
|Using + - small number (2 len)|19,810,314|9905158|
|Using + - big number (10 len)|20,804,107|10402054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:19:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20258841.420389898,"samples":10129421},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9884807.976432782,"samples":4942404},{"name":"Using + - small number (2 len)","opsSec":19810314.715303995,"samples":9905158},{"name":"Using + - big number (10 len)","opsSec":20804107.36510903,"samples":10402054}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|955,763|477882|
|Using ? operator to avoid rejection|1,015,654|507828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:26:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":955763.1659895926,"samples":477882},{"name":"Using ? operator to avoid rejection","opsSec":1015654.5911659214,"samples":507828}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|20,321,417|10160710|
|Raw usage underscore usage|20,417,401|10208701|
|Manipulating private properties using #|17,444,147|8722074|
|Manipulating private properties using underscore(_)|16,362,818|8181410|
|Manipulating private properties using Symbol|15,418,013|7709007|
|Manipulating private properties using PrivateSymbol|13,242,686|6621451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":20321417.974788494,"samples":10160710},{"name":"Raw usage underscore usage","opsSec":20417401.133515976,"samples":10208701},{"name":"Manipulating private properties using #","opsSec":17444147.99168198,"samples":8722074},{"name":"Manipulating private properties using underscore(_)","opsSec":16362818.392705636,"samples":8181410},{"name":"Manipulating private properties using Symbol","opsSec":15418013.176589262,"samples":7709007},{"name":"Manipulating private properties using PrivateSymbol","opsSec":13242686.229951631,"samples":6621451}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,010,282|1505142|
|Adding property in the object creation - small object|3,041,081|1520541|
|Adding property after the function creation - small class|251,753|126182|
|Adding property in the function creation - small class|253,630|126816|
|Adding property after the class creation - small class|223,531|111769|
|Adding property in the class creation - small class|216,951|108477|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:40:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3010282.212909052,"samples":1505142},{"name":"Adding property in the object creation - small object","opsSec":3041081.7911854847,"samples":1520541},{"name":"Adding property after the function creation - small class","opsSec":251753.5549629217,"samples":126182},{"name":"Adding property in the function creation - small class","opsSec":253630.36258817714,"samples":126816},{"name":"Adding property after the class creation - small class","opsSec":223531.27365658028,"samples":111769},{"name":"Adding property in the class creation - small class","opsSec":216951.79039702838,"samples":108477}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|20,516,359|10258180|
|Getter|16,698,244|8349123|
|Method|20,845,353|10422677|
|DefineProperty (getter)|19,816,446|9908224|
|DefineProperty (getter & enumerable=false)|16,331,621|8165811|
|DefineProperty (getter & configurable=false)|20,411,005|10205503|
|DefineProperty (getter & enumerable=false & configurable=false)|16,182,171|8091086|
|DefineProperty (writable)|20,481,751|10240876|
|DefineProperty (writable & enumerable=false)|20,830,549|10415275|
|DefineProperty (writable & enumerable=false & configurable=false)|20,924,061|10462031|
|DefineProperties (getter)|15,856,914|7928458|
|DefineProperties (getter & enumerable=false)|16,253,055|8126528|
|DefineProperties (getter & enumerable=false & configurable=false)|16,439,225|8219613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:50:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":20516359.2956267,"samples":10258180},{"name":"Getter","opsSec":16698244.972857665,"samples":8349123},{"name":"Method","opsSec":20845353.612346273,"samples":10422677},{"name":"DefineProperty (getter)","opsSec":19816446.24244547,"samples":9908224},{"name":"DefineProperty (getter & enumerable=false)","opsSec":16331621.633986369,"samples":8165811},{"name":"DefineProperty (getter & configurable=false)","opsSec":20411005.04619289,"samples":10205503},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":16182171.089481262,"samples":8091086},{"name":"DefineProperty (writable)","opsSec":20481751.326114256,"samples":10240876},{"name":"DefineProperty (writable & enumerable=false)","opsSec":20830549.076251477,"samples":10415275},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":20924061.97006789,"samples":10462031},{"name":"DefineProperties (getter)","opsSec":15856914.533133782,"samples":7928458},{"name":"DefineProperties (getter & enumerable=false)","opsSec":16253055.51949623,"samples":8126528},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":16439225.709963154,"samples":8219613}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,556,172|9925739|
|Setter|6,215,930|3107966|
|Method|19,055,962|9527982|
|DefineProperty (setter)|19,939,157|9969579|
|DefineProperty (setter & enumerable=false)|6,325,196|3162599|
|DefineProperty (setter & configurable=false)|6,339,420|3169711|
|DefineProperty (setter & enumerable=false & configurable=false)|6,312,251|3156126|
|DefineProperty (writable)|19,901,017|9950509|
|DefineProperty (writable & enumerable=false)|19,883,715|9941858|
|DefineProperty (writable & enumerable=false & configurable=false)|18,430,393|9215197|
|DefineProperties (setter)|19,886,790|9943396|
|DefineProperties (setter & enumerable=false)|6,215,312|3107657|
|DefineProperties (setter & enumerable=false & configurable=false)|6,139,323|3069662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:06:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":19556172.091419015,"samples":9925739},{"name":"Setter","opsSec":6215930.144544473,"samples":3107966},{"name":"Method","opsSec":19055962.15542206,"samples":9527982},{"name":"DefineProperty (setter)","opsSec":19939157.86689176,"samples":9969579},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6325196.80261272,"samples":3162599},{"name":"DefineProperty (setter & configurable=false)","opsSec":6339420.165117245,"samples":3169711},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6312251.268590423,"samples":3156126},{"name":"DefineProperty (writable)","opsSec":19901017.686845023,"samples":9950509},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19883715.734523755,"samples":9941858},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":18430393.086017188,"samples":9215197},{"name":"DefineProperties (setter)","opsSec":19886790.131896183,"samples":9943396},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6215312.512226637,"samples":3107657},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6139323.847772198,"samples":3069662}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,744,717|5872359|
|{ ...object, __proto__: null }|10,868,693|5434347|
|{ ...object, newProp: true }|721,062|360532|
|structuredClone|274,977|137489|
|JSON.parse + JSON.stringify|180,156|90079|
|loop + object.keys starting with {}|1,259,525|629763|
|loop + object.keys starting with { __proto__: null }|706,657|353329|
|loop + object.keys starting with { randomProp: true }|575,345|287673|
|object.keys + reduce(FN, {})|1,247,950|623976|
|object.keys + reduce(FN, { __proto__: null })|712,096|356049|
|object.keys + reduce(FN, { newProp: true })|587,573|293787|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:24:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11744717.77038697,"samples":5872359},{"name":"{ ...object, __proto__: null }","opsSec":10868693.663131196,"samples":5434347},{"name":"{ ...object, newProp: true }","opsSec":721062.6463434035,"samples":360532},{"name":"structuredClone","opsSec":274977.29116857715,"samples":137489},{"name":"JSON.parse + JSON.stringify","opsSec":180156.23705372962,"samples":90079},{"name":"loop + object.keys starting with {}","opsSec":1259525.7711757093,"samples":629763},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":706657.0174236952,"samples":353329},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":575345.1267568882,"samples":287673},{"name":"object.keys + reduce(FN, {})","opsSec":1247950.6896574886,"samples":623976},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":712096.6655521891,"samples":356049},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":587573.1561077374,"samples":293787}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|272,202|136102|
|Sort using first char|1,171,639|585820|
|Sort using localeCompare|1,143,917|571959|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":272202.793023218,"samples":136102},{"name":"Sort using first char","opsSec":1171639.358075322,"samples":585820},{"name":"Sort using localeCompare","opsSec":1143917.4959927718,"samples":571959}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,186|1094|
|{...smallObject} - Total keys: 2|14,210,807|7105405|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,445|1223|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,463|3232|
|{ ...bigObject, ...anotherBigObject }|1,299|650|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,282,398|3641200|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|12,442,833|6221417|
|{ ...smallObject, ...anotherSmallObject }|9,915,668|4957835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2186.976578529609,"samples":1094},{"name":"{...smallObject} - Total keys: 2","opsSec":14210807.919693932,"samples":7105405},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2445.589294388966,"samples":1223},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6463.777676958373,"samples":3232},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1299.6588360850642,"samples":650},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7282398.246378367,"samples":3641200},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":12442833.994066795,"samples":6221417},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9915668.486989062,"samples":4957835}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|21,016,822|10508412|
|Using backtick (`)|21,050,721|10525362|
|Using array.join|6,640,344|3320173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:58:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":21016822.45667331,"samples":10508412},{"name":"Using backtick (`)","opsSec":21050721.912144586,"samples":10525362},{"name":"Using array.join","opsSec":6640344.647962969,"samples":3320173}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,388,955|8194478|
|(short string) (true) String#slice and strict comparison|18,616,941|9308471|
|(long string) (true) String#endsWith|15,615,145|7807573|
|(long string) (true) String#slice and strict comparison|20,831,993|10415997|
|(short string) (false) String#endsWith|17,087,418|8543710|
|(short string) (false) String#slice and strict comparison|21,028,177|10514089|
|(long string) (false) String#endsWith|16,829,781|8414891|
|(long string) (false) String#slice and strict comparison|20,829,983|10414992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16388955.58581226,"samples":8194478},{"name":"(short string) (true) String#slice and strict comparison","opsSec":18616941.39634704,"samples":9308471},{"name":"(long string) (true) String#endsWith","opsSec":15615145.828744719,"samples":7807573},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20831993.92053225,"samples":10415997},{"name":"(short string) (false) String#endsWith","opsSec":17087418.24819807,"samples":8543710},{"name":"(short string) (false) String#slice and strict comparison","opsSec":21028177.09756854,"samples":10514089},{"name":"(long string) (false) String#endsWith","opsSec":16829781.349969726,"samples":8414891},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20829983.553037044,"samples":10414992}]}-->
