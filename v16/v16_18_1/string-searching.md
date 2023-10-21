## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|10,260,066|78|
|Using indexof|717,966,639|84|
|Using RegExp.test|9,479,515|81|
|Using RegExp.text with cached regex pattern|10,905,636|85|
|Using new RegExp.test|3,042,495|84|
|Using new RegExp.test with cached regex pattern|3,713,840|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":10260065.896625947,"samples":7},{"name":"Using indexof","opsSec":717966638.9758413,"samples":6},{"name":"Using RegExp.test","opsSec":9479514.519866357,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":10905635.905514965,"samples":5},{"name":"Using new RegExp.test","opsSec":3042494.933287073,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3713839.885477897,"samples":6}]}-->
