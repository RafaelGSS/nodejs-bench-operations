## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,245,705|94|
|Using delete property (proto: null)|11,736,392|94|
|Using delete property (cached proto: null)|2,247,513|96|
|Using undefined assignment|705,244,422|94|
|Using undefined assignment (proto: null)|13,013,486|95|
|Using undefined property (cached proto: null)|704,988,512|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2245705.0932137812,"cycles":9,"stats":{"deviation":2.0064796333023893e-8,"mean":4.4529444361232717e-7,"moe":4.056270418988328e-9,"rme":0.9109187139374487,"sem":2.069525723973637e-9,"variance":4.025960518857291e-16}},{"name":"Using delete property (proto: null)","hz":11736391.994185502,"cycles":5,"stats":{"deviation":1.112041560005411e-9,"mean":8.520506135918302e-8,"moe":2.2480872517562133e-10,"rme":0.26384433223742104,"sem":1.1469832917123537e-10,"variance":1.236636431179268e-18}},{"name":"Using delete property (cached proto: null)","hz":2247512.786341076,"cycles":8,"stats":{"deviation":6.882882123678755e-9,"mean":4.449362896074946e-7,"moe":1.3768631816235062e-9,"rme":0.30945176057410845,"sem":7.024812151140337e-10,"variance":4.737406632845656e-17}},{"name":"Using undefined assignment","hz":705244422.2313764,"cycles":6,"stats":{"deviation":9.10757555111491e-12,"mean":1.417948116251702e-9,"moe":1.8411743973641034e-12,"rme":0.12984779740962496,"sem":9.393746925327057e-13,"variance":8.294793241926605e-23}},{"name":"Using undefined assignment (proto: null)","hz":13013486.463633573,"cycles":10,"stats":{"deviation":7.202965038985238e-10,"mean":7.68433580650749e-8,"moe":1.4484568953617104e-10,"rme":0.18849474200946328,"sem":7.390086200825054e-11,"variance":5.188270535284362e-19}},{"name":"Using undefined property (cached proto: null)","hz":704988512.2660396,"cycles":8,"stats":{"deviation":8.631166335531551e-12,"mean":1.4184628296788937e-9,"moe":1.7265928615831006e-12,"rme":0.12172281327766342,"sem":8.809147252975003e-13,"variance":7.449703231161314e-23}}]}-->
