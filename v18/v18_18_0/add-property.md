## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|844,846,897|98|
|Using dot notation|844,071,067|94|
|Using define property (writable)|4,301,101|99|
|Using define property initialized (writable)|5,948,449|98|
|Using define property (getter)|2,186,211|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":844846896.9336392,"samples":6},{"name":"Using dot notation","opsSec":844071066.6024603,"samples":5},{"name":"Using define property (writable)","opsSec":4301101.154174546,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5948449.293722699,"samples":6},{"name":"Using define property (getter)","opsSec":2186211.328306995,"samples":4}]}-->
