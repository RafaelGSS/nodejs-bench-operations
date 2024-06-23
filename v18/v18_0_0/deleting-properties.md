## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,140,202|1570102|
|Using delete property (proto: null)|9,602,344|4801173|
|Using delete property (cached proto: null)|3,186,017|1593009|
|Using undefined assignment|21,061,591|10530796|
|Using undefined assignment (proto: null)|10,743,953|5371977|
|Using undefined property (cached proto: null)|21,055,252|10527627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:20:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3140202.9055487015,"samples":1570102},{"name":"Using delete property (proto: null)","opsSec":9602344.735521423,"samples":4801173},{"name":"Using delete property (cached proto: null)","opsSec":3186017.401881691,"samples":1593009},{"name":"Using undefined assignment","opsSec":21061591.91696913,"samples":10530796},{"name":"Using undefined assignment (proto: null)","opsSec":10743953.311411161,"samples":5371977},{"name":"Using undefined property (cached proto: null)","opsSec":21055252.603665803,"samples":10527627}]}-->
