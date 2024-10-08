## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|134,338,923|67173221|
|Using indexof|15,453,309|7726656|
|Using RegExp.test|12,782,775|6391389|
|Using RegExp.text with cached regex pattern|13,842,794|6921807|
|Using new RegExp.test|4,684,892|2342591|
|Using new RegExp.test with cached regex pattern|5,401,457|2701059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":134338923.05047685,"samples":67173221},{"name":"Using indexof","opsSec":15453309.836536622,"samples":7726656},{"name":"Using RegExp.test","opsSec":12782775.136658369,"samples":6391389},{"name":"Using RegExp.text with cached regex pattern","opsSec":13842794.229725715,"samples":6921807},{"name":"Using new RegExp.test","opsSec":4684892.436168305,"samples":2342591},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5401457.315347017,"samples":2701059}]}-->
