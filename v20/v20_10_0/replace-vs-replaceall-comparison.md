## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,235,206|93|
|Using replaceAll()|2,812,400|92|
|Using replaceAll(//g)|3,066,098|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using replace(//g)","opsSec":3235205.9057904915,"samples":5},{"name":"Using replaceAll()","opsSec":2812399.9796908214,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3066098.0463219695,"samples":4}]}-->
