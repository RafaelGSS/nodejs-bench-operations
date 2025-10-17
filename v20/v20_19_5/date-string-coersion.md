## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,090,408|545224|
|Using brackets {}|1,056,805|528403|
|Using '' + |1,004,508|502356|
|Using date.toString()|1,187,910|593956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:09:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":545224,"opsSec":1090408.5948142007},{"name":"Using brackets {}","samples":528403,"opsSec":1056805.0235121583},{"name":"Using '' + ","samples":502356,"opsSec":1004508.5950455719},{"name":"Using date.toString()","samples":593956,"opsSec":1187910.2276379403}]}-->
