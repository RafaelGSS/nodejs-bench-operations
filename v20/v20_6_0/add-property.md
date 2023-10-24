## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|731,209,149|87|
|Using dot notation|592,872,382|88|
|Using define property (writable)|2,497,038|87|
|Using define property initialized (writable)|3,167,014|88|
|Using define property (getter)|1,202,887|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Directly in the object","opsSec":731209149.3766941,"samples":7},{"name":"Using dot notation","opsSec":592872381.8342954,"samples":7},{"name":"Using define property (writable)","opsSec":2497037.9263287196,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3167014.4242175557,"samples":4},{"name":"Using define property (getter)","opsSec":1202887.02335217,"samples":5}]}-->
