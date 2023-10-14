## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|701,231,747|95|
|using Array.includes (first item)|716,253,063|96|
|Using raw comparison|721,043,607|97|
|Using raw comparison (first item)|717,998,151|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":701231747.4181998,"cycles":9,"stats":{"deviation":1.55052372953199e-10,"mean":1.4260620738889922e-9,"moe":3.117975410552551e-11,"rme":2.1864233455487443,"sem":1.5908037808941585e-11,"variance":2.4041238358417916e-20}},{"name":"using Array.includes (first item)","hz":716253063.154732,"cycles":6,"stats":{"deviation":3.2256607810163336e-11,"mean":1.396154587591579e-9,"moe":6.4526654473846124e-12,"rme":0.46217413922019274,"sem":3.292176248665619e-12,"variance":1.0404887474186905e-21}},{"name":"Using raw comparison","hz":721043606.5181025,"cycles":8,"stats":{"deviation":7.399504913345165e-12,"mean":1.3868786727462565e-9,"moe":1.4725595517798678e-12,"rme":0.10617796500280363,"sem":7.513058937652386e-13,"variance":5.475267296261924e-23}},{"name":"Using raw comparison (first item)","hz":717998150.6466945,"cycles":6,"stats":{"deviation":2.4847417758610095e-11,"mean":1.3927612475036446e-9,"moe":5.023118299816105e-12,"rme":0.3606589649747532,"sem":2.5628154590898498e-12,"variance":6.173941692708923e-22}}]}-->
