## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|150,336,068|75169438|
|Using optional chain (obj.field?.field2) (undefined)|98,708,655|49619581|
|Using and operator (obj.field && obj.field.field2) (Valid)|93,894,872|46947441|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,628,101|49816987|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":150336068.32358798,"samples":75169438},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98708655.0970234,"samples":49619581},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":93894872.9860922,"samples":46947441},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99628101.91967286,"samples":49816987}]}-->
