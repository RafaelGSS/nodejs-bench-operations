## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,446,691|96|
|Using delete property (proto: null)|21,552,372|97|
|Using delete property (cached proto: null)|3,467,848|97|
|Using undefined assignment|823,027,520|96|
|Using undefined assignment (proto: null)|23,794,827|90|
|Using undefined property (cached proto: null)|819,823,403|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3446690.9357008096,"samples":6},{"name":"Using delete property (proto: null)","opsSec":21552372.291991495,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3467848.0844576643,"samples":7},{"name":"Using undefined assignment","opsSec":823027519.5682566,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":23794827.276386786,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":819823402.585496,"samples":7}]}-->
