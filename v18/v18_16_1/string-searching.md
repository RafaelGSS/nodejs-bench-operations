## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|712,294,410|96|
|Using indexof|711,280,566|97|
|Using RegExp.test|10,844,690|95|
|Using RegExp.text with cached regex pattern|11,275,156|96|
|Using new RegExp.test|2,982,075|97|
|Using new RegExp.test with cached regex pattern|3,393,676|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":712294409.5126008,"samples":7},{"name":"Using indexof","opsSec":711280565.8300632,"samples":9},{"name":"Using RegExp.test","opsSec":10844690.338203343,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11275155.760490052,"samples":6},{"name":"Using new RegExp.test","opsSec":2982074.5957367932,"samples":8},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3393675.66014488,"samples":6}]}-->
