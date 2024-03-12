## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,084,081|93|
|Using delete property (proto: null)|21,326,549|93|
|Using delete property (cached proto: null)|4,119,154|96|
|Using undefined assignment|819,962,524|98|
|Using undefined assignment (proto: null)|23,933,291|96|
|Using undefined property (cached proto: null)|819,293,142|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using delete property","opsSec":4084080.5124138165,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21326549.35827989,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4119153.5536976727,"samples":5},{"name":"Using undefined assignment","opsSec":819962524.205459,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":23933290.51552728,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":819293141.5049844,"samples":8}]}-->
