## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,099,565|2050117|
|Using delete property (proto: null)|17,963,982|8985724|
|Using delete property (cached proto: null)|4,133,722|2066863|
|Using undefined assignment|78,840,218|39421649|
|Using undefined assignment (proto: null)|19,719,675|9861383|
|Using undefined property (cached proto: null)|73,365,492|36682753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:11:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2050117,"opsSec":4099565.155944808},{"name":"Using delete property (proto: null)","samples":8985724,"opsSec":17963982.312662717},{"name":"Using delete property (cached proto: null)","samples":2066863,"opsSec":4133722.6268823366},{"name":"Using undefined assignment","samples":39421649,"opsSec":78840218.8164139},{"name":"Using undefined assignment (proto: null)","samples":9861383,"opsSec":19719675.926782273},{"name":"Using undefined property (cached proto: null)","samples":36682753,"opsSec":73365492.7942113}]}-->
