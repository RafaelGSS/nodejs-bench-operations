## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,029,708|74024859|
|Using optional chain (obj.field?.field2) (undefined)|97,460,159|48730095|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,041,313|49525260|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,711,327|48865062|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:23:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148029708.52823883,"samples":74024859},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97460159.98227073,"samples":48730095},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99041313.71372505,"samples":49525260},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97711327.46735775,"samples":48865062}]}-->
