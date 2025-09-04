## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,335,305|47668778|
|Length = 10_000 - Array.at|93,109,929|46555516|
|Length = 1_000_000 - Array.at|96,216,776|48115119|
|Length = 100 - Array[length - 1]|93,056,395|46528249|
|Length = 10_000 - Array[length - 1]|92,265,769|46135586|
|Length = 1_000_000 - Array[length - 1]|92,344,434|46172995|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47668778,"opsSec":95335305.89611025},{"name":"Length = 10_000 - Array.at","samples":46555516,"opsSec":93109929.39221615},{"name":"Length = 1_000_000 - Array.at","samples":48115119,"opsSec":96216776.50323299},{"name":"Length = 100 - Array[length - 1]","samples":46528249,"opsSec":93056395.26573962},{"name":"Length = 10_000 - Array[length - 1]","samples":46135586,"opsSec":92265769.47013445},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46172995,"opsSec":92344434.73503019}]}-->
