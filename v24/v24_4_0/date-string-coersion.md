## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,058,349|529569|
|Using brackets {}|1,077,084|539508|
|Using '' + |1,119,405|559707|
|Using date.toString()|1,246,746|623379|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:23:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":529569,"opsSec":1058349.8214875425},{"name":"Using brackets {}","samples":539508,"opsSec":1077084.9568517879},{"name":"Using '' + ","samples":559707,"opsSec":1119405.322369941},{"name":"Using date.toString()","samples":623379,"opsSec":1246746.9737697642}]}-->
