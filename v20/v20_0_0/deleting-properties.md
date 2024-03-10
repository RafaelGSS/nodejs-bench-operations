## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,786,835|92|
|Using delete property (proto: null)|19,890,972|94|
|Using delete property (cached proto: null)|3,807,433|93|
|Using undefined assignment|825,291,661|96|
|Using undefined assignment (proto: null)|22,348,287|93|
|Using undefined property (cached proto: null)|821,672,792|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:48:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using delete property","opsSec":3786835.0515425247,"samples":6},{"name":"Using delete property (proto: null)","opsSec":19890971.805721782,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3807432.664620352,"samples":4},{"name":"Using undefined assignment","opsSec":825291661.1207492,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":22348287.194767497,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":821672792.3414497,"samples":6}]}-->
