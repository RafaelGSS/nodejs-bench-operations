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
