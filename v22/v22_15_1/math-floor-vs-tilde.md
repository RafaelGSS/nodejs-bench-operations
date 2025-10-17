## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|96,071,711|48037909|
|~ (small)|98,900,499|49467100|
|Math.floor (long)|98,535,524|49277433|
|~ (long)|98,906,227|49485657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:29:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":48037909,"opsSec":96071711.5107632},{"name":"~ (small)","samples":49467100,"opsSec":98900499.2592754},{"name":"Math.floor (long)","samples":49277433,"opsSec":98535524.46190336},{"name":"~ (long)","samples":49485657,"opsSec":98906227.37239042}]}-->
