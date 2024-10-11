## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|158,021,741|79012192|
|Using optional chain (obj.field?.field2) (undefined)|105,416,527|52708276|
|Using and operator (obj.field && obj.field.field2) (Valid)|106,848,624|53425015|
|Using and operator (obj.field && obj.field.field2) (undefined)|106,257,646|53128834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:14:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":158021741.24439943,"samples":79012192},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":105416527.3325326,"samples":52708276},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":106848624.08580428,"samples":53425015},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":106257646.96098591,"samples":53128834}]}-->
