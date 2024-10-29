## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|115,696,852|57854759|
|Using dot notation|77,682,240|38843086|
|Using define property (writable)|4,481,086|2240701|
|Using define property initialized (writable)|5,994,570|2997531|
|Using define property (getter)|2,225,164|1112620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":115696852.20280194,"samples":57854759},{"name":"Using dot notation","opsSec":77682240.65716483,"samples":38843086},{"name":"Using define property (writable)","opsSec":4481086.56735435,"samples":2240701},{"name":"Using define property initialized (writable)","opsSec":5994570.133531404,"samples":2997531},{"name":"Using define property (getter)","opsSec":2225164.273209454,"samples":1112620}]}-->
