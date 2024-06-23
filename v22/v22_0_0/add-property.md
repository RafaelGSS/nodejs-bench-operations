## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,705,095|7852548|
|Using dot notation|15,763,733|7881867|
|Using define property (writable)|3,426,453|1713227|
|Using define property initialized (writable)|4,453,786|2226894|
|Using define property (getter)|2,236,901|1118451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15705095.277583892,"samples":7852548},{"name":"Using dot notation","opsSec":15763733.211811867,"samples":7881867},{"name":"Using define property (writable)","opsSec":3426453.458624022,"samples":1713227},{"name":"Using define property initialized (writable)","opsSec":4453786.298675693,"samples":2226894},{"name":"Using define property (getter)","opsSec":2236901.870270471,"samples":1118451}]}-->
