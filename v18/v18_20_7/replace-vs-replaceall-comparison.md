## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,366,728|1683483|
|Using replaceAll()|2,888,294|1444148|
|Using replaceAll(//g)|3,010,685|1505555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1683483,"opsSec":3366728.3830441814},{"name":"Using replaceAll()","samples":1444148,"opsSec":2888294.7580332537},{"name":"Using replaceAll(//g)","samples":1505555,"opsSec":3010685.82447419}]}-->
