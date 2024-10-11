## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,440,987|1720512|
|Using replaceAll()|2,948,499|1474251|
|Using replaceAll(//g)|2,971,639|1485821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3440987.6975797904,"samples":1720512},{"name":"Using replaceAll()","opsSec":2948499.3758355556,"samples":1474251},{"name":"Using replaceAll(//g)","opsSec":2971639.016474427,"samples":1485821}]}-->
