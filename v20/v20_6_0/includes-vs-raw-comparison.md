## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|596,802,348|92|
|using Array.includes (first item)|597,029,397|95|
|Using raw comparison|601,347,545|98|
|Using raw comparison (first item)|600,158,974|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":596802348.3097681,"cycles":8,"stats":{"deviation":2.942916628371722e-11,"mean":1.675596623961261e-9,"moe":6.0136772565607656e-12,"rme":0.35889767086925084,"sem":3.068202681918758e-12,"variance":8.660758281546783e-22}},{"name":"using Array.includes (first item)","hz":597029396.8498778,"cycles":7,"stats":{"deviation":5.794803680082437e-11,"mean":1.6749593994472076e-9,"moe":1.1652872535482013e-11,"rme":0.6957107461427333,"sem":5.945343130347966e-12,"variance":3.3579749690696953e-21}},{"name":"Using raw comparison","hz":601347545.13663,"cycles":8,"stats":{"deviation":8.80340237843417e-12,"mean":1.6629318737350021e-9,"moe":1.742984745405283e-12,"rme":0.10481395978600609,"sem":8.89277931329226e-13,"variance":7.74998934366204e-23}},{"name":"Using raw comparison (first item)","hz":600158973.7449771,"cycles":8,"stats":{"deviation":1.5813985517527022e-11,"mean":1.6662251899026433e-9,"moe":3.18006213302949e-12,"rme":0.19085428262042417,"sem":1.6224806801170868e-12,"variance":2.500821379485544e-22}}]}-->
