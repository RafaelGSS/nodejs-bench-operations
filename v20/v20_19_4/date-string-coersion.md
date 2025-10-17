## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,072,716|536394|
|Using brackets {}|1,088,560|544299|
|Using '' + |1,070,186|535398|
|Using date.toString()|1,222,032|611159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:10:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":536394,"opsSec":1072716.3404030283},{"name":"Using brackets {}","samples":544299,"opsSec":1088560.61229721},{"name":"Using '' + ","samples":535398,"opsSec":1070186.2870474258},{"name":"Using date.toString()","samples":611159,"opsSec":1222032.6578184646}]}-->
