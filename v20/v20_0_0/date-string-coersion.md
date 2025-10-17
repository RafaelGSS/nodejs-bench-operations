## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,087,776|543940|
|Using brackets {}|1,085,916|543017|
|Using '' + |1,081,420|540734|
|Using date.toString()|1,184,649|592325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":543940,"opsSec":1087776.0086135764},{"name":"Using brackets {}","samples":543017,"opsSec":1085916.495147893},{"name":"Using '' + ","samples":540734,"opsSec":1081420.2855741598},{"name":"Using date.toString()","samples":592325,"opsSec":1184649.3887209154}]}-->
