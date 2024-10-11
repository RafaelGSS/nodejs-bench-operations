## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,263,660|1634298|
|Using replaceAll()|3,184,722|1593230|
|Using replaceAll(//g)|2,993,919|1496962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:04:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3263660.672748706,"samples":1634298},{"name":"Using replaceAll()","opsSec":3184722.7846765234,"samples":1593230},{"name":"Using replaceAll(//g)","opsSec":2993919.7546217875,"samples":1496962}]}-->
