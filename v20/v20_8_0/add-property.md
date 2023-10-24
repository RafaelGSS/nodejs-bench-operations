## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|596,022,321|91|
|Using dot notation|578,008,872|92|
|Using define property (writable)|2,585,783|90|
|Using define property initialized (writable)|3,271,672|89|
|Using define property (getter)|1,410,271|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":596022320.6016258,"samples":6},{"name":"Using dot notation","opsSec":578008871.7256588,"samples":6},{"name":"Using define property (writable)","opsSec":2585782.8103260156,"samples":4},{"name":"Using define property initialized (writable)","opsSec":3271672.048591781,"samples":5},{"name":"Using define property (getter)","opsSec":1410271.2821225221,"samples":4}]}-->
