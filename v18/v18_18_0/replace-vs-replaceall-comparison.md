## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,174,456|89|
|Using replaceAll()|2,413,426|97|
|Using replaceAll(//g)|2,946,672|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3174456.313663545,"samples":5},{"name":"Using replaceAll()","opsSec":2413426.3723023073,"samples":5},{"name":"Using replaceAll(//g)","opsSec":2946672.2498919177,"samples":5}]}-->
