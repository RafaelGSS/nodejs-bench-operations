## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,800,282|94|
|Using delete property (proto: null)|20,101,416|98|
|Using delete property (cached proto: null)|3,825,813|93|
|Using undefined assignment|825,744,956|92|
|Using undefined assignment (proto: null)|22,294,303|97|
|Using undefined property (cached proto: null)|822,669,256|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3800281.5814989544,"samples":6},{"name":"Using delete property (proto: null)","opsSec":20101416.437465444,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3825813.4913993534,"samples":5},{"name":"Using undefined assignment","opsSec":825744956.2078588,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":22294302.577389978,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":822669256.2618788,"samples":7}]}-->
