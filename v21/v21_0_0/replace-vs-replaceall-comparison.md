## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,712,159|95|
|Using replaceAll()|3,455,171|95|
|Using replaceAll(//g)|3,389,871|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:40:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3712159.384908394,"samples":6},{"name":"Using replaceAll()","opsSec":3455170.929037162,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3389870.694259773,"samples":5}]}-->
