## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,071,372|1535687|
|Using replaceAll()|2,643,879|1321940|
|Using replaceAll(//g)|2,854,666|1427334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3071372.6793093905,"samples":1535687},{"name":"Using replaceAll()","opsSec":2643879.159246441,"samples":1321940},{"name":"Using replaceAll(//g)","opsSec":2854666.801039156,"samples":1427334}]}-->
