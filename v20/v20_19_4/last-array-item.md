## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,996,002|50498008|
|Length = 10_000 - Array.at|97,096,371|48548195|
|Length = 1_000_000 - Array.at|97,478,277|48749338|
|Length = 100 - Array[length - 1]|99,007,565|49511579|
|Length = 10_000 - Array[length - 1]|87,010,032|43505441|
|Length = 1_000_000 - Array[length - 1]|99,505,077|49755679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:26:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":50498008,"opsSec":100996002.66852765},{"name":"Length = 10_000 - Array.at","samples":48548195,"opsSec":97096371.74588211},{"name":"Length = 1_000_000 - Array.at","samples":48749338,"opsSec":97478277.30577788},{"name":"Length = 100 - Array[length - 1]","samples":49511579,"opsSec":99007565.10055718},{"name":"Length = 10_000 - Array[length - 1]","samples":43505441,"opsSec":87010032.26002495},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49755679,"opsSec":99505077.04052705}]}-->
