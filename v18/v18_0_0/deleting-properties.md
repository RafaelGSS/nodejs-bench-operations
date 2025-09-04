## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,302,764|1651384|
|Using delete property (proto: null)|16,239,535|8122009|
|Using delete property (cached proto: null)|3,351,369|1675991|
|Using undefined assignment|73,880,120|36949758|
|Using undefined assignment (proto: null)|18,233,457|9117786|
|Using undefined property (cached proto: null)|78,722,496|39371772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1651384,"opsSec":3302764.360353675},{"name":"Using delete property (proto: null)","samples":8122009,"opsSec":16239535.855624774},{"name":"Using delete property (cached proto: null)","samples":1675991,"opsSec":3351369.429992847},{"name":"Using undefined assignment","samples":36949758,"opsSec":73880120.84291607},{"name":"Using undefined assignment (proto: null)","samples":9117786,"opsSec":18233457.17423619},{"name":"Using undefined property (cached proto: null)","samples":39371772,"opsSec":78722496.75326805}]}-->
