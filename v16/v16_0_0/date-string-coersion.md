## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|634,775|95|
|Using brackets {}|645,311|98|
|Using '' + |643,907|95|
|Using date.toString()|686,784|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":634775.1480753958,"cycles":6,"stats":{"deviation":2.5032675928572e-8,"mean":0.0000015753609810213054,"moe":5.03386478510569e-9,"rme":0.3195372264356985,"sem":2.568298359747801e-9,"variance":6.266348641449081e-16}},{"name":"Using brackets {}","hz":645310.9806416195,"cycles":3,"stats":{"deviation":5.77814885659213e-9,"mean":0.000001549640452430734,"moe":1.1440151069764455e-9,"rme":0.07382455105517974,"sem":5.836811770287988e-10,"variance":3.3387004208936936e-17}},{"name":"Using '' + ","hz":643906.7808686208,"cycles":9,"stats":{"deviation":3.540480661405861e-8,"mean":0.0000015530198309932604,"moe":7.119614768573942e-9,"rme":0.45843682266571384,"sem":3.632456514578542e-9,"variance":1.2535003313788881e-15}},{"name":"Using date.toString()","hz":686783.5697763874,"cycles":3,"stats":{"deviation":2.8921703280789487e-8,"mean":0.0000014560627889301341,"moe":5.7855456016258495e-9,"rme":0.3973417661388678,"sem":2.9518089804213517e-9,"variance":8.364649206620293e-16}}]}-->
