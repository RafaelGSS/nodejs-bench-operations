## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,593,402|96|
|Using indexof|587,419,584|95|
|Using RegExp.test|9,584,046|96|
|Using RegExp.text with cached regex pattern|10,148,519|96|
|Using new RegExp.test|2,685,476|95|
|Using new RegExp.test with cached regex pattern|3,160,153|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10593402.011453828,"samples":5},{"name":"Using indexof","opsSec":587419583.6558661,"samples":11},{"name":"Using RegExp.test","opsSec":9584045.705192836,"samples":8},{"name":"Using RegExp.text with cached regex pattern","opsSec":10148519.335204307,"samples":6},{"name":"Using new RegExp.test","opsSec":2685476.4860043605,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3160152.6555316458,"samples":5}]}-->
