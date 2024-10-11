## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,823,763|5411885|
|Date.now()|18,003,194|9003545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:08:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10823763.484094381,"samples":5411885},{"name":"Date.now()","opsSec":18003194.03679766,"samples":9003545}]}-->
