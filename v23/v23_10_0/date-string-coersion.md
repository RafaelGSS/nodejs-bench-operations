## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,496|522152|
|Using brackets {}|1,052,935|526469|
|Using '' + |1,047,037|523519|
|Using date.toString()|1,152,744|576874|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:38:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":522152,"opsSec":1043496.7905357196},{"name":"Using brackets {}","samples":526469,"opsSec":1052935.5171780505},{"name":"Using '' + ","samples":523519,"opsSec":1047037.8722613795},{"name":"Using date.toString()","samples":576874,"opsSec":1152744.0728814395}]}-->
