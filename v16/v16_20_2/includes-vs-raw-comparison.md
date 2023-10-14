## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|714,754,007|98|
|using Array.includes (first item)|711,305,073|93|
|Using raw comparison|717,036,297|98|
|Using raw comparison (first item)|714,854,466|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":714754007.2893646,"cycles":9,"stats":{"deviation":1.1446811251647779e-11,"mean":1.3990827470732248e-9,"moe":2.2663530005207325e-12,"rme":0.1619884889054469,"sem":1.156302551286088e-12,"variance":1.310294878308502e-22}},{"name":"using Array.includes (first item)","hz":711305072.7493105,"cycles":6,"stats":{"deviation":3.5276857142639175e-11,"mean":1.4058665378764085e-9,"moe":7.1697577725692695e-12,"rme":0.5099885074012318,"sem":3.65803967988228e-12,"variance":1.2444566498621728e-21}},{"name":"Using raw comparison","hz":717036296.913943,"cycles":7,"stats":{"deviation":9.0376473172127e-12,"mean":1.3946295387052318e-9,"moe":1.7893628771125825e-12,"rme":0.12830381312400851,"sem":9.12940243424787e-13,"variance":8.167906903032192e-23}},{"name":"Using raw comparison (first item)","hz":714854466.3515627,"cycles":6,"stats":{"deviation":1.3422523466185388e-11,"mean":1.39888613287086e-9,"moe":2.6711875146502397e-12,"rme":0.19095103253102544,"sem":1.3628507727807346e-12,"variance":1.801641362002974e-22}}]}-->
