## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|594,340,418|94|
|Using indexof|599,742,876|97|
|Using RegExp.test|10,232,699|87|
|Using RegExp.text with cached regex pattern|10,630,026|87|
|Using new RegExp.test|3,244,380|96|
|Using new RegExp.test with cached regex pattern|3,903,174|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":594340417.7336998,"samples":5},{"name":"Using indexof","opsSec":599742876.3846713,"samples":6},{"name":"Using RegExp.test","opsSec":10232699.089201855,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":10630025.850518184,"samples":5},{"name":"Using new RegExp.test","opsSec":3244380.492413956,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3903174.0012314743,"samples":4}]}-->
