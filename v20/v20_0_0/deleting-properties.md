## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,804,449|95|
|Using delete property (proto: null)|14,298,281|93|
|Using delete property (cached proto: null)|2,790,826|91|
|Using undefined assignment|596,148,619|90|
|Using undefined assignment (proto: null)|15,273,405|95|
|Using undefined property (cached proto: null)|599,927,623|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2804448.532766751,"cycles":5,"stats":{"deviation":8.359524221050717e-9,"mean":3.565763423062152e-7,"moe":1.681031413367791e-9,"rme":0.4714366080754119,"sem":8.576690884529546e-10,"variance":6.988164520233359e-17}},{"name":"Using delete property (proto: null)","hz":14298281.154818231,"cycles":7,"stats":{"deviation":8.272617240458689e-9,"mean":6.993847646246767e-8,"moe":1.6813476756005551e-9,"rme":2.4040381784736855,"sem":8.578304467349772e-10,"variance":6.843619600713433e-17}},{"name":"Using delete property (cached proto: null)","hz":2790825.779219135,"cycles":5,"stats":{"deviation":1.0042463275094e-8,"mean":3.5831688507614294e-7,"moe":2.063362947025084e-9,"rme":0.5758486504443172,"sem":1.0527361974617775e-9,"variance":1.0085106863161172e-16}},{"name":"Using undefined assignment","hz":596148619.0637896,"cycles":7,"stats":{"deviation":2.841650403704364e-11,"mean":1.6774340626175251e-9,"moe":5.8709105585666075e-12,"rme":0.3499935222136505,"sem":2.9953625298809223e-12,"variance":8.074977016873176e-22}},{"name":"Using undefined assignment (proto: null)","hz":15273405.467160525,"cycles":6,"stats":{"deviation":9.92879454073853e-10,"mean":6.547328309656338e-8,"moe":1.9965987391754023e-10,"rme":0.304948620986474,"sem":1.0186728261098992e-10,"variance":9.858096103219925e-19}},{"name":"Using undefined property (cached proto: null)","hz":599927623.4598937,"cycles":7,"stats":{"deviation":1.7400483477298045e-11,"mean":1.6668677368660154e-9,"moe":3.5556865842470406e-12,"rme":0.2133154602255554,"sem":1.8141258082893064e-12,"variance":3.0277682524372223e-22}}]}-->
