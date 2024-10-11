## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,009,607|5006251|
|Date.now()|19,012,526|9510306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10009607.621860065,"samples":5006251},{"name":"Date.now()","opsSec":19012526.694872685,"samples":9510306}]}-->
