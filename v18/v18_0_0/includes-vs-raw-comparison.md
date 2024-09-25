## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,152,495|7576248|
|using Array.includes (first item)|16,137,556|8068779|
|Using raw comparison|17,253,872|8626937|
|Using raw comparison (first item)|16,990,051|8495026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:19:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15152495.72721772,"samples":7576248},{"name":"using Array.includes (first item)","opsSec":16137556.69981778,"samples":8068779},{"name":"Using raw comparison","opsSec":17253872.905899286,"samples":8626937},{"name":"Using raw comparison (first item)","opsSec":16990051.052568994,"samples":8495026}]}-->
