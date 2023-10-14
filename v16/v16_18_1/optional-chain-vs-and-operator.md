## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,235,347|96|
|Using optional chain (obj.field?.field2) (undefined)|593,771,912|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,919,704|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|594,058,726|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":594235346.7434268,"cycles":9,"stats":{"deviation":9.625984842330847e-12,"mean":1.682834933129231e-9,"moe":1.9255980093971872e-12,"rme":0.114425840080259,"sem":9.824479639781568e-13,"variance":9.265958418478321e-23}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":593771912.404286,"cycles":8,"stats":{"deviation":1.964229098841863e-11,"mean":1.684148372648389e-9,"moe":3.9089700665877825e-12,"rme":0.23210366319689366,"sem":1.99437248295295e-12,"variance":3.858195952737117e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":593919703.6479092,"cycles":6,"stats":{"deviation":2.0422474629230197e-11,"mean":1.6837292884171184e-9,"moe":4.0434436837028905e-12,"rme":0.2401480874341831,"sem":2.062981471276985e-12,"variance":4.170774699815511e-22}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":594058726.2688593,"cycles":6,"stats":{"deviation":6.749186794763779e-12,"mean":1.6833352592609165e-9,"moe":1.3362708100202068e-12,"rme":0.07938233353508609,"sem":6.81770821438881e-13,"variance":4.5551522390613773e-23}}]}-->
