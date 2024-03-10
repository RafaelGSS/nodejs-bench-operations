## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,351,323|97|
|Using dot notation|820,319,174|94|
|Using define property (writable)|4,201,787|93|
|Using define property initialized (writable)|6,190,788|95|
|Using define property (getter)|2,410,613|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821351323.368965,"samples":7},{"name":"Using dot notation","opsSec":820319174.2976774,"samples":6},{"name":"Using define property (writable)","opsSec":4201786.648696174,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6190788.4554243125,"samples":4},{"name":"Using define property (getter)","opsSec":2410612.572721549,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.005ms
array.push|100|0.084ms
new Array(length)|100|0.015ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.181ms
array.push|1,000,000|23.229ms
new Array(length)|1,000,000|5.658ms
array.push|100,000,000|978.339ms
new Array(length)|100,000,000|3,552.555ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.353ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|18.081ms
new Array(length)|1,000,000|6.181ms
array.push|100,000,000|1,131.526ms
new Array(length)|100,000,000|3,530.976ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|621|87|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":621.375556640941,"samples":5},{"name":"Array.from","opsSec":22.334616281993455,"samples":2}]}-->
