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
