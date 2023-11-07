## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,484,418|98|
|Using replaceAll()|3,076,000|101|
|Using replaceAll(//g)|3,133,452|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:35:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3484417.780289505,"samples":7},{"name":"Using replaceAll()","opsSec":3076000.4254715377,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3133452.365997364,"samples":5}]}-->
