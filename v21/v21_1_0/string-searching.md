## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|589,625,041|97|
|Using indexof|588,445,361|97|
|Using RegExp.test|11,348,416|95|
|Using RegExp.text with cached regex pattern|11,936,201|96|
|Using new RegExp.test|3,498,577|97|
|Using new RegExp.test with cached regex pattern|4,080,064|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":589625041.4996359,"samples":6},{"name":"Using indexof","opsSec":588445360.9616747,"samples":6},{"name":"Using RegExp.test","opsSec":11348416.352562878,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11936200.806427885,"samples":5},{"name":"Using new RegExp.test","opsSec":3498577.3439141996,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4080063.6235764846,"samples":4}]}-->
