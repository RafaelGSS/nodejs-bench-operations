## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,517,397|8258699|
|~ (small)|18,307,123|9153562|
|Math.floor (long)|17,041,549|8520777|
|~ (long)|18,275,711|9137857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":16517397.273241967,"samples":8258699},{"name":"~ (small)","opsSec":18307123.7808984,"samples":9153562},{"name":"Math.floor (long)","opsSec":17041549.807655815,"samples":8520777},{"name":"~ (long)","opsSec":18275711.514331125,"samples":9137857}]}-->
