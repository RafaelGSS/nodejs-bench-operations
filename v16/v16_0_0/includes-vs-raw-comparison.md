## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|591,228,302|93|
|using Array.includes (first item)|594,447,434|95|
|Using raw comparison|597,804,974|96|
|Using raw comparison (first item)|597,305,389|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"using Array.includes","hz":591228301.5383157,"cycles":7,"stats":{"deviation":1.6444372333168778e-10,"mean":1.6913939968673728e-9,"moe":3.342195872892867e-11,"rme":1.9760007893388178,"sem":1.7052019759657482e-11,"variance":2.704173814318868e-20}},{"name":"using Array.includes (first item)","hz":594447433.9811549,"cycles":8,"stats":{"deviation":2.3030098109109383e-11,"mean":1.682234530482811e-9,"moe":4.63116289284332e-12,"rme":0.2752982897999454,"sem":2.362838210634347e-12,"variance":5.303854189152035e-22}},{"name":"Using raw comparison","hz":597804973.6950983,"cycles":7,"stats":{"deviation":1.3529671712887634e-11,"mean":1.6727863500681335e-9,"moe":2.7064980201885944e-12,"rme":0.16179579777646783,"sem":1.3808663368309156e-12,"variance":1.830520166585118e-22}},{"name":"Using raw comparison (first item)","hz":597305389.080156,"cycles":7,"stats":{"deviation":1.0696872064681966e-11,"mean":1.67418546405548e-9,"moe":2.1624642987409286e-12,"rme":0.1291651579331397,"sem":1.1032981116025146e-12,"variance":1.1442307196817344e-22}}]}-->
