## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|709,575,930|96|
|Using dot notation|716,064,300|98|
|Using define property (writable)|3,111,145|99|
|Using define property initialized (writable)|4,081,437|95|
|Using define property (getter)|1,666,706|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":709575929.8054338,"samples":6},{"name":"Using dot notation","opsSec":716064300.2458105,"samples":6},{"name":"Using define property (writable)","opsSec":3111144.9726446625,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4081436.66787821,"samples":4},{"name":"Using define property (getter)","opsSec":1666706.1812953327,"samples":4}]}-->
