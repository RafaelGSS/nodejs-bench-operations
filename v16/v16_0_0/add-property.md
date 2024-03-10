## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|899,908,898|96|
|Using dot notation|860,681,249|95|
|Using define property (writable)|4,323,473|93|
|Using define property initialized (writable)|5,446,991|92|
|Using define property (getter)|2,241,496|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":899908897.8253125,"samples":6},{"name":"Using dot notation","opsSec":860681248.8331136,"samples":8},{"name":"Using define property (writable)","opsSec":4323473.232095003,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5446990.867419376,"samples":5},{"name":"Using define property (getter)","opsSec":2241495.529112959,"samples":3}]}-->
