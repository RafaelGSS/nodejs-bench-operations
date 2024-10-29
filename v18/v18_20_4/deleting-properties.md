## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,304,540|1652296|
|Using delete property (proto: null)|17,223,447|8612736|
|Using delete property (cached proto: null)|3,320,563|1660426|
|Using undefined assignment|81,586,723|40794271|
|Using undefined assignment (proto: null)|18,959,825|9480808|
|Using undefined property (cached proto: null)|81,248,447|40624226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:36:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3304540.217854786,"samples":1652296},{"name":"Using delete property (proto: null)","opsSec":17223447.969288442,"samples":8612736},{"name":"Using delete property (cached proto: null)","opsSec":3320563.8680320433,"samples":1660426},{"name":"Using undefined assignment","opsSec":81586723.4319347,"samples":40794271},{"name":"Using undefined assignment (proto: null)","opsSec":18959825.813246716,"samples":9480808},{"name":"Using undefined property (cached proto: null)","opsSec":81248447.12509316,"samples":40624226}]}-->
