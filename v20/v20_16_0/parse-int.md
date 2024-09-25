## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|18,398,975|9199488|
|Using parseInt(x, 10) - big number (10 len)|18,340,664|9170333|
|Using + - small number (2 len)|17,917,063|8958532|
|Using + - big number (10 len)|18,567,670|9283836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:23:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":18398975.04338256,"samples":9199488},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18340664.239607766,"samples":9170333},{"name":"Using + - small number (2 len)","opsSec":17917063.67764931,"samples":8958532},{"name":"Using + - big number (10 len)","opsSec":18567670.848883048,"samples":9283836}]}-->
