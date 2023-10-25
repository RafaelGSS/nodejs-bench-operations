## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|589,962,990|95|
|Using indexof|596,529,845|97|
|Using RegExp.test|11,327,324|94|
|Using RegExp.text with cached regex pattern|11,875,054|97|
|Using new RegExp.test|3,206,973|97|
|Using new RegExp.test with cached regex pattern|3,675,973|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":589962989.5539714,"samples":6},{"name":"Using indexof","opsSec":596529844.9457047,"samples":7},{"name":"Using RegExp.test","opsSec":11327323.969227735,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11875053.582449967,"samples":6},{"name":"Using new RegExp.test","opsSec":3206972.6623249035,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3675973.1505622314,"samples":5}]}-->
