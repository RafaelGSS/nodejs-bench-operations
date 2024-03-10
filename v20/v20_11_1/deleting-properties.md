## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,849,167|92|
|Using delete property (proto: null)|20,309,488|95|
|Using delete property (cached proto: null)|3,892,984|93|
|Using undefined assignment|845,786,496|99|
|Using undefined assignment (proto: null)|22,932,802|91|
|Using undefined property (cached proto: null)|846,391,940|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using delete property","opsSec":3849166.6788704307,"samples":7},{"name":"Using delete property (proto: null)","opsSec":20309487.87282716,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3892983.5949821705,"samples":6},{"name":"Using undefined assignment","opsSec":845786496.4591333,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22932801.55672715,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":846391940.36147,"samples":7}]}-->
