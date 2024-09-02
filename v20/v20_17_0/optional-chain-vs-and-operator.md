## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,304,917|9652460|
|Using optional chain (obj.field?.field2) (undefined)|17,501,999|8751000|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,226,056|9613029|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,943,527|9471764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:33:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19304917.297359966,"samples":9652460},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":17501999.719928943,"samples":8751000},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19226056.346260354,"samples":9613029},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18943527.886303507,"samples":9471764}]}-->
