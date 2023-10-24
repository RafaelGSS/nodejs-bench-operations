## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|718,267,436|94|
|Using indexof|719,271,199|95|
|Using RegExp.test|11,457,547|88|
|Using RegExp.text with cached regex pattern|11,897,206|94|
|Using new RegExp.test|3,306,773|99|
|Using new RegExp.test with cached regex pattern|3,979,450|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":718267436.0675179,"samples":7},{"name":"Using indexof","opsSec":719271198.7651001,"samples":8},{"name":"Using RegExp.test","opsSec":11457546.872299096,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11897205.51656406,"samples":4},{"name":"Using new RegExp.test","opsSec":3306773.406929525,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3979449.506485021,"samples":5}]}-->
