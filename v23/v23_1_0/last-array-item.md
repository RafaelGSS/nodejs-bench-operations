## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|121,957,548|60979027|
|Length = 10_000 - Array.at|89,761,038|44880528|
|Length = 1_000_000 - Array.at|86,528,860|43264454|
|Length = 100 - Array[length - 1]|85,961,671|43260445|
|Length = 10_000 - Array[length - 1]|86,903,256|43451649|
|Length = 1_000_000 - Array[length - 1]|86,800,964|43400491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:09:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":121957548.12009041,"samples":60979027},{"name":"Length = 10_000 - Array.at","opsSec":89761038.5863585,"samples":44880528},{"name":"Length = 1_000_000 - Array.at","opsSec":86528860.06301151,"samples":43264454},{"name":"Length = 100 - Array[length - 1]","opsSec":85961671.84535702,"samples":43260445},{"name":"Length = 10_000 - Array[length - 1]","opsSec":86903256.63404983,"samples":43451649},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":86800964.46620518,"samples":43400491}]}-->
