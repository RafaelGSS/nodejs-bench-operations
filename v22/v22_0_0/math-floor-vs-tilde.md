## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|90,619,775|45314900|
|~ (small)|93,015,083|46507872|
|Math.floor (long)|86,681,598|43340939|
|~ (long)|93,220,890|46610619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:02:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":45314900,"opsSec":90619775.64041865},{"name":"~ (small)","samples":46507872,"opsSec":93015083.77893534},{"name":"Math.floor (long)","samples":43340939,"opsSec":86681598.8852516},{"name":"~ (long)","samples":46610619,"opsSec":93220890.09963815}]}-->
