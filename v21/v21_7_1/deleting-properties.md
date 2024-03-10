## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,203,756|96|
|Using delete property (proto: null)|22,323,659|96|
|Using delete property (cached proto: null)|4,277,704|95|
|Using undefined assignment|881,107,114|96|
|Using undefined assignment (proto: null)|24,876,199|98|
|Using undefined property (cached proto: null)|880,433,464|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":4203755.78387056,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22323658.70514654,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4277703.868538703,"samples":5},{"name":"Using undefined assignment","opsSec":881107114.4572463,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24876199.14843088,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":880433463.7431455,"samples":6}]}-->
