## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|711,412,612|96|
|Using dot notation|716,106,161|94|
|Using define property (writable)|3,114,959|97|
|Using define property initialized (writable)|4,073,657|91|
|Using define property (getter)|1,641,235|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":711412611.8222791,"cycles":8,"stats":{"deviation":4.5040286943431765e-11,"mean":1.4056540232517189e-9,"moe":9.009933871862355e-12,"rme":0.6409780588127618,"sem":4.596905036664467e-12,"variance":2.0286274479466697e-21}},{"name":"Using dot notation","hz":716106160.5726012,"cycles":6,"stats":{"deviation":2.130050940742992e-11,"mean":1.3964409958439628e-9,"moe":4.30608039995587e-12,"rme":0.3083610702329329,"sem":2.196979795895852e-12,"variance":4.537117010160105e-22}},{"name":"Using define property (writable)","hz":3114958.535576531,"cycles":5,"stats":{"deviation":3.4959592260491013e-9,"mean":3.210315606383875e-7,"moe":6.957233235519602e-10,"rme":0.21671493050978513,"sem":3.54960879363245e-10,"variance":1.2221730910197831e-17}},{"name":"Using define property initialized (writable)","hz":4073656.9358443236,"cycles":4,"stats":{"deviation":4.592429165870841e-9,"mean":2.454796797444937e-7,"moe":9.435780762271704e-10,"rme":0.3843813374733457,"sem":4.81417385830189e-10,"variance":2.1090405643541148e-17}},{"name":"Using define property (getter)","hz":1641235.4865306106,"cycles":4,"stats":{"deviation":4.3945586255913914e-8,"mean":6.092970863760014e-7,"moe":9.181845861019552e-9,"rme":1.5069571258959495,"sem":4.684615235214057e-9,"variance":1.93121455137597e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.025ms
new Array(length)|10|0.011ms
array.push|100|0.046ms
new Array(length)|100|0.018ms
array.push|1,000|0.083ms
new Array(length)|1,000|0.335ms
array.push|10,000|0.573ms
new Array(length)|10,000|0.591ms
array.push|1,000,000|44.893ms
new Array(length)|1,000,000|12.764ms
array.push|100,000,000|1,973.037ms
new Array(length)|100,000,000|6,234.296ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.022ms
array.push|100|0.022ms
new Array(length)|100|0.014ms
array.push|1,000|0.054ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.422ms
new Array(length)|10,000|0.303ms
array.push|1,000,000|36.607ms
new Array(length)|1,000,000|4.827ms
array.push|100,000,000|3,302.997ms
new Array(length)|100,000,000|5,828.389ms
