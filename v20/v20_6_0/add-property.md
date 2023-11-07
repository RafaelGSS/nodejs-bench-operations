## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|853,516,082|95|
|Using dot notation|853,250,434|95|
|Using define property (writable)|4,817,736|99|
|Using define property initialized (writable)|6,416,729|97|
|Using define property (getter)|2,483,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:54:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":853516081.7303174,"samples":7},{"name":"Using dot notation","opsSec":853250434.1669738,"samples":7},{"name":"Using define property (writable)","opsSec":4817736.400874697,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6416728.6953104,"samples":6},{"name":"Using define property (getter)","opsSec":2483205.175203627,"samples":4}]}-->
