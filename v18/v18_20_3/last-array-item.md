## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|22,791,817|11396134|
|Length = 10_000 - Array.at|21,500,197|10760935|
|Length = 1_000_000 - Array.at|21,569,255|10784633|
|Length = 100 - Array[length - 1]|102,248,277|51124148|
|Length = 10_000 - Array[length - 1]|102,554,218|51277122|
|Length = 1_000_000 - Array[length - 1]|93,022,425|46511961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":22791817.861597233,"samples":11396134},{"name":"Length = 10_000 - Array.at","opsSec":21500197.757659882,"samples":10760935},{"name":"Length = 1_000_000 - Array.at","opsSec":21569255.34478786,"samples":10784633},{"name":"Length = 100 - Array[length - 1]","opsSec":102248277.18631701,"samples":51124148},{"name":"Length = 10_000 - Array[length - 1]","opsSec":102554218.97677056,"samples":51277122},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":93022425.45521928,"samples":46511961}]}-->
