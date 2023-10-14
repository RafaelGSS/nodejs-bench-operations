## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,661,143|80|
|Using Object.getOwnPropertyNames()|48,941,360|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":46661142.622940235,"cycles":6,"stats":{"deviation":2.2159295999735717e-9,"mean":2.143110827955519e-8,"moe":4.855869834516925e-10,"rme":2.2658043490682744,"sem":2.477484609447411e-10,"variance":4.910343992039034e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":48941360.04910087,"cycles":5,"stats":{"deviation":1.6293825336493783e-9,"mean":2.0432615664884277e-8,"moe":3.4844921050273635e-10,"rme":1.7053578270039362,"sem":1.7778020944017162e-10,"variance":2.6548874409616675e-18}}]}-->
