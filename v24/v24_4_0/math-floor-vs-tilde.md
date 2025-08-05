## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,770,660|47385341|
|~ (small)|93,075,995|46552820|
|Math.floor (long)|94,494,632|47252453|
|~ (long)|93,615,179|46810695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:29:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":47385341,"opsSec":94770660.96091327},{"name":"~ (small)","samples":46552820,"opsSec":93075995.29549837},{"name":"Math.floor (long)","samples":47252453,"opsSec":94494632.54354987},{"name":"~ (long)","samples":46810695,"opsSec":93615179.94342327}]}-->
