## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|595,236,078|97|
|using Array.includes (first item)|597,714,401|96|
|Using raw comparison|600,396,085|96|
|Using raw comparison (first item)|599,357,053|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":595236078.1609837,"cycles":9,"stats":{"deviation":2.6259628846978085e-11,"mean":1.6800056930177314e-9,"moe":5.225872235731826e-12,"rme":0.3110627694567384,"sem":2.666261344761136e-12,"variance":6.895681071810436e-22}},{"name":"using Array.includes (first item)","hz":597714401.0183437,"cycles":6,"stats":{"deviation":2.7026834437766786e-11,"mean":1.6730398302203701e-9,"moe":5.4064928883753945e-12,"rme":0.3231538658385234,"sem":2.758414738967038e-12,"variance":7.304497797264567e-22}},{"name":"Using raw comparison","hz":600396084.6851969,"cycles":8,"stats":{"deviation":7.141152030560656e-12,"mean":1.6655671572614031e-9,"moe":1.428527923125277e-12,"rme":0.08576825719078922,"sem":7.288407771047331e-13,"variance":5.099605232358058e-23}},{"name":"Using raw comparison (first item)","hz":599357052.869794,"cycles":6,"stats":{"deviation":2.3521427262491792e-11,"mean":1.6684545467712094e-9,"moe":4.705265409899364e-12,"rme":0.28201340090474664,"sem":2.400645617295594e-12,"variance":5.532575404646921e-22}}]}-->
