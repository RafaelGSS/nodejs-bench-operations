## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|128,671,903|65157095|
|Using indexof|15,851,213|7925609|
|Using RegExp.test|12,646,030|6324686|
|Using RegExp.text with cached regex pattern|14,211,408|7105749|
|Using new RegExp.test|4,813,788|2407120|
|Using new RegExp.test with cached regex pattern|5,432,675|2718676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":128671903.65705211,"samples":65157095},{"name":"Using indexof","opsSec":15851213.339743279,"samples":7925609},{"name":"Using RegExp.test","opsSec":12646030.817489773,"samples":6324686},{"name":"Using RegExp.text with cached regex pattern","opsSec":14211408.098632367,"samples":7105749},{"name":"Using new RegExp.test","opsSec":4813788.447388481,"samples":2407120},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5432675.27062793,"samples":2718676}]}-->
