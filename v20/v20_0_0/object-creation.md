## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,807,256|17403634|
|Object.create({})|2,016,396|1008199|
|new Function with empty prototype|81,155,275|40577747|
|Empty class|80,987,092|40531464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17403634,"opsSec":34807256.51360535},{"name":"Object.create({})","samples":1008199,"opsSec":2016396.1812106445},{"name":"new Function with empty prototype","samples":40577747,"opsSec":81155275.36768816},{"name":"Empty class","samples":40531464,"opsSec":80987092.9819252}]}-->
