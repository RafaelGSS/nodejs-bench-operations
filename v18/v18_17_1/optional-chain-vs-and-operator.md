## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|845,112,251|99|
|Using optional chain (obj.field?.field2) (undefined)|846,587,302|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,780,966|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|843,642,457|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:59:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":845112251.1615843,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":846587301.8667779,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847780966.4067353,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":843642457.447107,"samples":6}]}-->
