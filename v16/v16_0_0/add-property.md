## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|707,097,439|95|
|Using dot notation|700,102,273|92|
|Using define property (writable)|3,006,713|95|
|Using define property initialized (writable)|3,757,965|96|
|Using define property (getter)|1,519,292|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Directly in the object","opsSec":707097439.1044325,"samples":10},{"name":"Using dot notation","opsSec":700102272.5121666,"samples":11},{"name":"Using define property (writable)","opsSec":3006712.7732724193,"samples":9},{"name":"Using define property initialized (writable)","opsSec":3757964.5334928767,"samples":5},{"name":"Using define property (getter)","opsSec":1519291.947804087,"samples":3}]}-->
