## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|936,636,160|97|
|Using dot notation|936,888,614|97|
|Using define property (writable)|4,717,662|95|
|Using define property initialized (writable)|6,789,381|89|
|Using define property (getter)|2,596,306|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:19:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":936636159.5542763,"samples":6},{"name":"Using dot notation","opsSec":936888614.1971825,"samples":6},{"name":"Using define property (writable)","opsSec":4717661.760598941,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6789381.261163145,"samples":5},{"name":"Using define property (getter)","opsSec":2596305.604142804,"samples":5}]}-->
