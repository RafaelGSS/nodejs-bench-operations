## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|843,774,379|95|
|Using dot notation|841,981,470|98|
|Using define property (writable)|4,537,113|97|
|Using define property initialized (writable)|5,668,824|92|
|Using define property (getter)|2,236,699|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 13:56:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":843774378.7292213,"samples":6},{"name":"Using dot notation","opsSec":841981470.0091349,"samples":6},{"name":"Using define property (writable)","opsSec":4537113.097580724,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5668823.975087094,"samples":9},{"name":"Using define property (getter)","opsSec":2236698.7582668285,"samples":4}]}-->
