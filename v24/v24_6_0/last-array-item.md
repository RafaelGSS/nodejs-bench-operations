## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|82,096,091|41348608|
|Length = 10_000 - Array.at|80,765,593|40383446|
|Length = 1_000_000 - Array.at|77,788,146|39039906|
|Length = 100 - Array[length - 1]|83,101,400|41551777|
|Length = 10_000 - Array[length - 1]|82,770,237|41385136|
|Length = 1_000_000 - Array[length - 1]|82,138,045|41069038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":41348608,"opsSec":82096091.18019943},{"name":"Length = 10_000 - Array.at","samples":40383446,"opsSec":80765593.12773132},{"name":"Length = 1_000_000 - Array.at","samples":39039906,"opsSec":77788146.43397984},{"name":"Length = 100 - Array[length - 1]","samples":41551777,"opsSec":83101400.51030716},{"name":"Length = 10_000 - Array[length - 1]","samples":41385136,"opsSec":82770237.56758118},{"name":"Length = 1_000_000 - Array[length - 1]","samples":41069038,"opsSec":82138045.77319916}]}-->
