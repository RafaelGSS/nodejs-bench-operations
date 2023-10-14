## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|726,483|96|
|Using brackets {}|722,091|96|
|Using '' + |734,986|99|
|Using date.toString()|801,831|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":726483.1614743251,"cycles":6,"stats":{"deviation":1.1647796241785474e-8,"mean":0.0000013764943952322306,"moe":2.330044522656361e-9,"rme":0.16927381111953277,"sem":1.1887982258450822e-9,"variance":1.3567115729015181e-16}},{"name":"Using brackets {}","hz":722091.3587236389,"cycles":4,"stats":{"deviation":1.9549384341895934e-8,"mean":0.0000013848663163170786,"moe":3.910691341228013e-9,"rme":0.28238764241361053,"sem":1.995250684300007e-9,"variance":3.8217842814716587e-16}},{"name":"Using '' + ","hz":734985.5967264445,"cycles":6,"stats":{"deviation":7.143367957209569e-9,"mean":0.000001360570879829352,"moe":1.4071535653600871e-9,"rme":0.10342376029219276,"sem":7.179354925306567e-10,"variance":5.1027705772088417e-17}},{"name":"Using date.toString()","hz":801831.0030171529,"cycles":3,"stats":{"deviation":1.4667868306270152e-8,"mean":0.000001247145590825462,"moe":3.0304129881243803e-9,"rme":0.24298790858239794,"sem":1.5461290755736634e-9,"variance":2.151463606500844e-16}}]}-->
