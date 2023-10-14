## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|592,252,357|98|
|using Array.includes (first item)|593,106,868|99|
|Using raw comparison|594,079,469|95|
|Using raw comparison (first item)|593,445,506|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":592252356.9330512,"cycles":8,"stats":{"deviation":2.606030499346733e-11,"mean":1.6884694307988054e-9,"moe":5.15967714658771e-12,"rme":0.3055830951080172,"sem":2.6324883400957708e-12,"variance":6.791394963525383e-22}},{"name":"using Array.includes (first item)","hz":593106868.4672588,"cycles":8,"stats":{"deviation":7.240106672473385e-12,"mean":1.6860367889251697e-9,"moe":1.4262098744998738e-12,"rme":0.08458948724417023,"sem":7.276580992346295e-13,"variance":5.2419144628793634e-23}},{"name":"Using raw comparison","hz":594079469.2423043,"cycles":7,"stats":{"deviation":7.746454833972606e-12,"mean":1.6832764836586784e-9,"moe":1.557748213152013e-12,"rme":0.09254262316824959,"sem":7.947694965061291e-13,"variance":6.000756249477755e-23}},{"name":"Using raw comparison (first item)","hz":593445506.2876067,"cycles":6,"stats":{"deviation":9.87665347498182e-12,"mean":1.6850746857207834e-9,"moe":1.98611360065008e-12,"rme":0.11786501912824882,"sem":1.013323265637796e-12,"variance":9.754828386487047e-23}}]}-->
