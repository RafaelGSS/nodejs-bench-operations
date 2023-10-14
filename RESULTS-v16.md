## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|715,562,589|99|
|Using dot notation|707,512,682|96|
|Using define property (writable)|3,025,811|90|
|Using define property initialized (writable)|3,799,179|97|
|Using define property (getter)|1,578,554|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":715562589.0655619,"cycles":10,"stats":{"deviation":1.1690405338839232e-11,"mean":1.397501791291072e-9,"moe":2.3028626904833554e-12,"rme":0.16478423890647556,"sem":1.174929944124161e-12,"variance":1.366655769863608e-22}},{"name":"Using dot notation","hz":707512681.7339692,"cycles":9,"stats":{"deviation":1.0840254196873194e-10,"mean":1.4134022270091386e-9,"moe":2.1685024695929272e-11,"rme":1.534242997608427,"sem":1.1063788110167996e-11,"variance":1.1751111105282689e-20}},{"name":"Using define property (writable)","hz":3025810.6279707514,"cycles":7,"stats":{"deviation":4.640149720457776e-8,"mean":3.3048994895977553e-7,"moe":9.58664864321558e-9,"rme":2.9007383351263085,"sem":4.891147266946725e-9,"variance":2.153098942826438e-15}},{"name":"Using define property initialized (writable)","hz":3799178.8338798126,"cycles":5,"stats":{"deviation":3.5817155148783787e-9,"mean":2.6321477448819537e-7,"moe":7.127894980757441e-10,"rme":0.2708014774101183,"sem":3.636681112631348e-10,"variance":1.2828686029520489e-17}},{"name":"Using define property (getter)","hz":1578554.1322443557,"cycles":6,"stats":{"deviation":4.16501305633618e-8,"mean":6.334911040258218e-7,"moe":8.55759526214382e-9,"rme":1.3508627363131849,"sem":4.366120031706031e-9,"variance":1.7347333759450846e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.015ms
new Array(length)|10|0.003ms
array.push|100|0.042ms
new Array(length)|100|0.019ms
array.push|1,000|0.141ms
new Array(length)|1,000|0.029ms
array.push|10,000|0.55ms
new Array(length)|10,000|0.269ms
array.push|1,000,000|56.198ms
new Array(length)|1,000,000|8.447ms
array.push|100,000,000|2,084.983ms
new Array(length)|100,000,000|5,219.92ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.021ms
array.push|100|0.08ms
new Array(length)|100|0.013ms
array.push|1,000|0.056ms
new Array(length)|1,000|0.028ms
array.push|10,000|0.671ms
new Array(length)|10,000|4.456ms
array.push|1,000,000|375.576ms
new Array(length)|1,000,000|5.138ms
array.push|100,000,000|2,777.625ms
new Array(length)|100,000,000|5,808.457ms
