## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,117,402|558736|
|Using brackets {}|1,136,980|568508|
|Using '' + |1,131,006|565537|
|Using date.toString()|1,260,729|630419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:28:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":558736,"opsSec":1117402.01264234},{"name":"Using brackets {}","samples":568508,"opsSec":1136980.8172655907},{"name":"Using '' + ","samples":565537,"opsSec":1131006.2029641694},{"name":"Using date.toString()","samples":630419,"opsSec":1260729.2091550836}]}-->
