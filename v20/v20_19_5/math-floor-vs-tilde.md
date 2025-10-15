## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|96,451,512|48241316|
|~ (small)|97,114,887|48822660|
|Math.floor (long)|97,829,434|48914728|
|~ (long)|99,350,437|49682394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48241316,"opsSec":96451512.49820153},{"name":"~ (small)","samples":48822660,"opsSec":97114887.03313509},{"name":"Math.floor (long)","samples":48914728,"opsSec":97829434.47752441},{"name":"~ (long)","samples":49682394,"opsSec":99350437.02807218}]}-->
