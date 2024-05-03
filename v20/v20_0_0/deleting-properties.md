## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,196,556|95|
|Using delete property (proto: null)|22,401,503|96|
|Using delete property (cached proto: null)|4,215,020|91|
|Using undefined assignment|914,986,563|96|
|Using undefined assignment (proto: null)|24,535,011|97|
|Using undefined property (cached proto: null)|909,659,526|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:50:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4196556.292378978,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22401502.67716328,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4215019.733554495,"samples":4},{"name":"Using undefined assignment","opsSec":914986562.8212337,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24535010.816344503,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":909659525.8302804,"samples":6}]}-->
