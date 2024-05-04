## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,606,564|92|
|Using replaceAll()|3,105,473|96|
|Using replaceAll(//g)|3,290,056|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:15:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3606564.2825141223,"samples":5},{"name":"Using replaceAll()","opsSec":3105473.3493638737,"samples":8},{"name":"Using replaceAll(//g)","opsSec":3290056.3039607415,"samples":5}]}-->
