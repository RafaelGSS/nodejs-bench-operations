## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,577,786|1789272|
|Using replaceAll()|3,066,298|1536333|
|Using replaceAll(//g)|3,150,055|1578041|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:06:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3577786.0603342624,"samples":1789272},{"name":"Using replaceAll()","opsSec":3066298.0104135093,"samples":1536333},{"name":"Using replaceAll(//g)","opsSec":3150055.5028153434,"samples":1578041}]}-->
