## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|767,984,723|89|
|Using indexof|794,100,217|90|
|Using RegExp.test|10,468,037|89|
|Using RegExp.text with cached regex pattern|11,314,003|89|
|Using new RegExp.test|2,845,682|87|
|Using new RegExp.test with cached regex pattern|3,508,246|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":767984722.7067726,"samples":6},{"name":"Using indexof","opsSec":794100217.2351176,"samples":7},{"name":"Using RegExp.test","opsSec":10468036.96194947,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11314003.461740583,"samples":5},{"name":"Using new RegExp.test","opsSec":2845682.4237784185,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3508246.125212273,"samples":5}]}-->
