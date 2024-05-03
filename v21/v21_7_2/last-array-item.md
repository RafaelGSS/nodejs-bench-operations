## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|964,391,186|99|
|Length = 10_000 - Array.at|967,231,598|96|
|Length = 1_000_000 - Array.at|967,383,753|96|
|Length = 100 - Array[length - 1]|909,462,649|97|
|Length = 10_000 - Array[length - 1]|910,352,739|99|
|Length = 1_000_000 - Array[length - 1]|910,258,383|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:41:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":964391186.010416,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":967231598.0125457,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":967383753.293523,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":909462649.0644082,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":910352739.1378577,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":910258382.8974692,"samples":6}]}-->
