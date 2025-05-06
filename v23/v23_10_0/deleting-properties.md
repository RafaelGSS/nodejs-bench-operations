## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,036,544|2018274|
|Using delete property (proto: null)|15,829,193|7916397|
|Using delete property (cached proto: null)|4,016,345|2008174|
|Using undefined assignment|74,020,804|37016212|
|Using undefined assignment (proto: null)|18,538,119|9269062|
|Using undefined property (cached proto: null)|74,742,744|37375254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":2018274,"opsSec":4036544.940298935},{"name":"Using delete property (proto: null)","samples":7916397,"opsSec":15829193.776509084},{"name":"Using delete property (cached proto: null)","samples":2008174,"opsSec":4016345.6464214507},{"name":"Using undefined assignment","samples":37016212,"opsSec":74020804.65820958},{"name":"Using undefined assignment (proto: null)","samples":9269062,"opsSec":18538119.36547016},{"name":"Using undefined property (cached proto: null)","samples":37375254,"opsSec":74742744.47113179}]}-->
