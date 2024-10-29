## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|139,008,515|69504300|
|Using indexof|15,209,156|7604580|
|Using RegExp.test|12,561,162|6280583|
|Using RegExp.text with cached regex pattern|13,492,392|6746299|
|Using new RegExp.test|4,262,539|2131502|
|Using new RegExp.test with cached regex pattern|5,061,726|2530903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:53:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":139008515.2048057,"samples":69504300},{"name":"Using indexof","opsSec":15209156.106456036,"samples":7604580},{"name":"Using RegExp.test","opsSec":12561162.055795114,"samples":6280583},{"name":"Using RegExp.text with cached regex pattern","opsSec":13492392.780705806,"samples":6746299},{"name":"Using new RegExp.test","opsSec":4262539.485497029,"samples":2131502},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5061726.429660526,"samples":2530903}]}-->
