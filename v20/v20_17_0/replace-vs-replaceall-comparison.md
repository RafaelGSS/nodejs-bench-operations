## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,424,791|1712628|
|Using replaceAll()|2,934,544|1467298|
|Using replaceAll(//g)|3,059,126|1532614|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:08:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3424791.7009890964,"samples":1712628},{"name":"Using replaceAll()","opsSec":2934544.2757225963,"samples":1467298},{"name":"Using replaceAll(//g)","opsSec":3059126.1324147354,"samples":1532614}]}-->
