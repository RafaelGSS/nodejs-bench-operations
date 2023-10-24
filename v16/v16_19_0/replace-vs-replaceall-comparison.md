## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,996,082|87|
|Using replaceAll()|1,885,473|93|
|Using replaceAll(//g)|1,776,806|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using replace(//g)","opsSec":1996081.7015332438,"samples":6},{"name":"Using replaceAll()","opsSec":1885473.4901117668,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1776805.902575913,"samples":6}]}-->
