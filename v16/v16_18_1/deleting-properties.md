## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,419,772|94|
|Using delete property (proto: null)|15,267,647|95|
|Using delete property (cached proto: null)|2,409,768|96|
|Using undefined assignment|591,525,300|99|
|Using undefined assignment (proto: null)|16,898,732|94|
|Using undefined property (cached proto: null)|596,768,713|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:18:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2419771.6556838243,"samples":5},{"name":"Using delete property (proto: null)","opsSec":15267646.660557212,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":2409767.736943987,"samples":6},{"name":"Using undefined assignment","opsSec":591525299.5037687,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":16898732.41796002,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":596768712.6964786,"samples":7}]}-->
