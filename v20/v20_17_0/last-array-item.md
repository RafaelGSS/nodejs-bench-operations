## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|129,064,654|64535788|
|Length = 10_000 - Array.at|96,423,125|48251514|
|Length = 1_000_000 - Array.at|95,536,669|47813136|
|Length = 100 - Array[length - 1]|91,192,396|45603841|
|Length = 10_000 - Array[length - 1]|96,525,002|48268790|
|Length = 1_000_000 - Array[length - 1]|89,748,052|44874042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":129064654.77882284,"samples":64535788},{"name":"Length = 10_000 - Array.at","opsSec":96423125.24165225,"samples":48251514},{"name":"Length = 1_000_000 - Array.at","opsSec":95536669.68608813,"samples":47813136},{"name":"Length = 100 - Array[length - 1]","opsSec":91192396.87758976,"samples":45603841},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96525002.79213619,"samples":48268790},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":89748052.58818159,"samples":44874042}]}-->
