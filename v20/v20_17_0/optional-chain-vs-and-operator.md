## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|146,358,308|73179178|
|Using optional chain (obj.field?.field2) (undefined)|97,559,749|48779881|
|Using and operator (obj.field && obj.field.field2) (Valid)|99,099,586|49584413|
|Using and operator (obj.field && obj.field.field2) (undefined)|83,550,442|41780956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:30:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":146358308.87262455,"samples":73179178},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97559749.51235206,"samples":48779881},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":99099586.90242384,"samples":49584413},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":83550442.86360723,"samples":41780956}]}-->
