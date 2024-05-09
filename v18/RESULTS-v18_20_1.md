## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,007,958|8503980|
|Using dot notation|17,127,998|8564000|
|Using define property (writable)|3,133,038|1566520|
|Using define property initialized (writable)|3,844,016|1922009|
|Using define property (getter)|1,930,161|965081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:21:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17007958.55641526,"samples":8503980},{"name":"Using dot notation","opsSec":17127998.37471405,"samples":8564000},{"name":"Using define property (writable)","opsSec":3133038.3865349498,"samples":1566520},{"name":"Using define property initialized (writable)","opsSec":3844016.3759887177,"samples":1922009},{"name":"Using define property (getter)","opsSec":1930161.9475387426,"samples":965081}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.157ms
array.push|1,000,000|26.221ms
new Array(length)|1,000,000|16.165ms
array.push|100,000,000|2,121.806ms
new Array(length)|100,000,000|4,226.424ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.032ms
new Array(length)|10|0.016ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.451ms
new Array(length)|10,000|3.073ms
array.push|1,000,000|254.769ms
new Array(length)|1,000,000|4.473ms
array.push|100,000,000|2,608.96ms
new Array(length)|100,000,000|4,653.765ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|230|116|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":230.1448095242537,"samples":116},{"name":"Array.from","opsSec":22.460915721810473,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|306,863|153432|
|[True conditional] Using constructor name|304,263|152132|
|[True conditional] Check if property is valid then instanceof |309,732|154867|
|[False conditional] Using instanceof only|13,047,417|6523709|
|[False conditional] Using constructor name|16,307,315|8153658|
|[False conditional] Check if property is valid then instanceof |16,138,654|8069328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":306863.5965848275,"samples":153432},{"name":"[True conditional] Using constructor name","opsSec":304263.9511065714,"samples":152132},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":309732.1141236471,"samples":154867},{"name":"[False conditional] Using instanceof only","opsSec":13047417.856905647,"samples":6523709},{"name":"[False conditional] Using constructor name","opsSec":16307315.44790869,"samples":8153658},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16138654.291596767,"samples":8069328}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,943|3472|
|crypto.verify('RSA-SHA256')|7,107|3554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:57:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6943.364302768903,"samples":3472},{"name":"crypto.verify('RSA-SHA256')","opsSec":7107.293771921515,"samples":3554}]}-->
