## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,747,189|92|
|Using delete property (proto: null)|20,192,368|97|
|Using delete property (cached proto: null)|3,774,356|92|
|Using undefined assignment|842,316,354|95|
|Using undefined assignment (proto: null)|22,572,717|95|
|Using undefined property (cached proto: null)|838,685,868|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3747189.3924216623,"samples":5},{"name":"Using delete property (proto: null)","opsSec":20192368.478184637,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3774356.055180599,"samples":5},{"name":"Using undefined assignment","opsSec":842316354.2785604,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22572717.234209016,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":838685868.1920424,"samples":7}]}-->
