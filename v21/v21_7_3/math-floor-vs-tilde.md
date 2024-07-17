## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,289,607|7644804|
|~ (small)|15,347,619|7673810|
|Math.floor (long)|15,249,620|7624811|
|~ (long)|15,331,739|7665870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:28:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":15289607.480160937,"samples":7644804},{"name":"~ (small)","opsSec":15347619.57022932,"samples":7673810},{"name":"Math.floor (long)","opsSec":15249620.56661346,"samples":7624811},{"name":"~ (long)","opsSec":15331739.877319379,"samples":7665870}]}-->
