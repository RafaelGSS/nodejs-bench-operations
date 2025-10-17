## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|99,451,064|49737463|
|Length = 10_000 - Array.at|90,292,744|45146380|
|Length = 1_000_000 - Array.at|97,429,208|48714614|
|Length = 100 - Array[length - 1]|98,159,324|49080886|
|Length = 10_000 - Array[length - 1]|98,676,993|49338517|
|Length = 1_000_000 - Array[length - 1]|99,648,391|49829656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":49737463,"opsSec":99451064.30833623},{"name":"Length = 10_000 - Array.at","samples":45146380,"opsSec":90292744.46964794},{"name":"Length = 1_000_000 - Array.at","samples":48714614,"opsSec":97429208.51415831},{"name":"Length = 100 - Array[length - 1]","samples":49080886,"opsSec":98159324.29908928},{"name":"Length = 10_000 - Array[length - 1]","samples":49338517,"opsSec":98676993.54243265},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49829656,"opsSec":99648391.93132181}]}-->
