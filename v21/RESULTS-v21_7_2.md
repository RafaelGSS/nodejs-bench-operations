## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,204,937|7602469|
|Using dot notation|15,320,771|7660386|
|Using define property (writable)|3,448,002|1724002|
|Using define property initialized (writable)|4,379,398|2189700|
|Using define property (getter)|2,235,069|1117535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15204937.908768682,"samples":7602469},{"name":"Using dot notation","opsSec":15320771.846775925,"samples":7660386},{"name":"Using define property (writable)","opsSec":3448002.296686339,"samples":1724002},{"name":"Using define property initialized (writable)","opsSec":4379398.624866502,"samples":2189700},{"name":"Using define property (getter)","opsSec":2235069.0299810297,"samples":1117535}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|30.619ms
new Array(length)|1,000,000|8.475ms
array.push|100,000,000|1,966.701ms
new Array(length)|100,000,000|4,215.846ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.315ms
new Array(length)|10,000|0.198ms
array.push|1,000,000|19.726ms
new Array(length)|1,000,000|7.307ms
array.push|100,000,000|2,150.726ms
new Array(length)|100,000,000|4,814.395ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|234|118|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":234.8105343647007,"samples":118},{"name":"Array.from","opsSec":22.21075394620827,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|318,565|159283|
|[True conditional] Using constructor name|325,618|162810|
|[True conditional] Check if property is valid then instanceof |330,367|165184|
|[False conditional] Using instanceof only|15,299,436|7649719|
|[False conditional] Using constructor name|15,339,811|7669906|
|[False conditional] Check if property is valid then instanceof |15,295,420|7647711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:56:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":318565.54636268836,"samples":159283},{"name":"[True conditional] Using constructor name","opsSec":325618.68840793264,"samples":162810},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":330367.251387826,"samples":165184},{"name":"[False conditional] Using instanceof only","opsSec":15299436.56185192,"samples":7649719},{"name":"[False conditional] Using constructor name","opsSec":15339811.631790739,"samples":7669906},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15295420.929365022,"samples":7647711}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,658|3330|
|crypto.verify('RSA-SHA256')|7,014|3508|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:02:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6658.363440849907,"samples":3330},{"name":"crypto.verify('RSA-SHA256')","opsSec":7014.293941341801,"samples":3508}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,059,668|529835|
|Using brackets {}|1,075,411|537706|
|Using '' + |1,070,893|535447|
|Using date.toString()|1,179,559|589780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1059668.8894669074,"samples":529835},{"name":"Using brackets {}","opsSec":1075411.1740841265,"samples":537706},{"name":"Using '' + ","opsSec":1070893.3296208044,"samples":535447},{"name":"Using date.toString()","opsSec":1179559.240364094,"samples":589780}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,983,939|1491970|
|Using delete property (proto: null)|8,701,295|4350648|
|Using delete property (cached proto: null)|2,909,106|1454554|
|Using undefined assignment|15,232,898|7616450|
|Using undefined assignment (proto: null)|9,325,026|4662514|
|Using undefined property (cached proto: null)|15,252,661|7626331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2983939.4330508504,"samples":1491970},{"name":"Using delete property (proto: null)","opsSec":8701295.582340742,"samples":4350648},{"name":"Using delete property (cached proto: null)","opsSec":2909106.673446622,"samples":1454554},{"name":"Using undefined assignment","opsSec":15232898.293929055,"samples":7616450},{"name":"Using undefined assignment (proto: null)","opsSec":9325026.582618447,"samples":4662514},{"name":"Using undefined property (cached proto: null)","opsSec":15252661.633907808,"samples":7626331}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|317,716|158859|
|NodeError|312,960|156481|
|NodeError Range|313,862|156932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:29:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":317716.2360394684,"samples":158859},{"name":"NodeError","opsSec":312960.3056328881,"samples":156481},{"name":"NodeError Range","opsSec":313862.8437292592,"samples":156932}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,642,615|821308|
|Function returning explicitly undefined|1,632,500|816251|
|Function returning implicitly undefined|1,667,447|833724|
|Function returning string|1,610,377|805189|
|Function returning integer|1,659,802|829902|
|Function returning float|1,645,506|822754|
|Function returning functions|1,616,727|808364|
|Function returning arrow functions|1,609,904|804953|
|Function returning empty object|1,628,695|814348|
|Function returning empty array|1,630,609|815305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1642615.7700335912,"samples":821308},{"name":"Function returning explicitly undefined","opsSec":1632500.4785103735,"samples":816251},{"name":"Function returning implicitly undefined","opsSec":1667447.5998129079,"samples":833724},{"name":"Function returning string","opsSec":1610377.2076938674,"samples":805189},{"name":"Function returning integer","opsSec":1659802.579210691,"samples":829902},{"name":"Function returning float","opsSec":1645506.0813394573,"samples":822754},{"name":"Function returning functions","opsSec":1616727.760724972,"samples":808364},{"name":"Function returning arrow functions","opsSec":1609904.5607446567,"samples":804953},{"name":"Function returning empty object","opsSec":1628695.24102558,"samples":814348},{"name":"Function returning empty array","opsSec":1630609.6575731905,"samples":815305}]}-->
