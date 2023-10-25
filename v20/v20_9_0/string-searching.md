## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|713,848,568|94|
|Using indexof|715,934,030|97|
|Using RegExp.test|11,235,327|99|
|Using RegExp.text with cached regex pattern|11,742,928|96|
|Using new RegExp.test|3,291,184|95|
|Using new RegExp.test with cached regex pattern|3,974,989|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":713848568.3240275,"samples":7},{"name":"Using indexof","opsSec":715934030.0020596,"samples":8},{"name":"Using RegExp.test","opsSec":11235327.095703771,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11742928.43658616,"samples":5},{"name":"Using new RegExp.test","opsSec":3291183.961865452,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3974988.941079553,"samples":4}]}-->
