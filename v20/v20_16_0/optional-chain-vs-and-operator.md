## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,356,399|9678201|
|Using optional chain (obj.field?.field2) (undefined)|19,528,567|9764284|
|Using and operator (obj.field && obj.field.field2) (Valid)|18,534,542|9267272|
|Using and operator (obj.field && obj.field.field2) (undefined)|17,198,698|8599350|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:34:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19356399.94784002,"samples":9678201},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":19528567.609337296,"samples":9764284},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":18534542.739616007,"samples":9267272},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":17198698.348839305,"samples":8599350}]}-->
