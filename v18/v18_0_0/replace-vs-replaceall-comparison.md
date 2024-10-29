## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,470,531|1735267|
|Using replaceAll()|3,039,421|1519836|
|Using replaceAll(//g)|3,103,623|1552016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:04:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3470531.653920602,"samples":1735267},{"name":"Using replaceAll()","opsSec":3039421.5395074585,"samples":1519836},{"name":"Using replaceAll(//g)","opsSec":3103623.4886619286,"samples":1552016}]}-->
