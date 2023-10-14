## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|769,033,732|80|
|Using dot notation|663,245,107|79|
|Using define property (writable)|2,937,010|83|
|Using define property initialized (writable)|3,754,436|83|
|Using define property (getter)|1,588,469|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":769033732.0840257,"cycles":6,"stats":{"deviation":2.4038055735216086e-10,"mean":1.3003330780953813e-9,"moe":5.267571213745441e-11,"rme":4.050939949525038,"sem":2.6875363335435924e-11,"variance":5.77828123529355e-20}},{"name":"Using dot notation","hz":663245107.0705248,"cycles":8,"stats":{"deviation":1.2844954862176432e-10,"mean":1.5077382242846565e-9,"moe":2.8325338474616187e-11,"rme":1.8786642149405668,"sem":1.4451703303375606e-11,"variance":1.6499286541135e-20}},{"name":"Using define property (writable)","hz":2937010.4986294126,"cycles":7,"stats":{"deviation":3.8768998386509724e-8,"mean":3.404822694595953e-7,"moe":8.340682820136008e-9,"rme":2.4496673008477434,"sem":4.255450418436739e-9,"variance":1.5030352358931934e-15}},{"name":"Using define property initialized (writable)","hz":3754435.5693027554,"cycles":4,"stats":{"deviation":2.5421145532150424e-8,"mean":2.663516210469187e-7,"moe":5.46905312575636e-9,"rme":2.0533207585746096,"sem":2.7903332274267143e-9,"variance":6.462346401667715e-16}},{"name":"Using define property (getter)","hz":1588469.0187195742,"cycles":4,"stats":{"deviation":7.406918164413298e-8,"mean":6.295369870078268e-7,"moe":1.6031962617590167e-8,"rme":2.5466275927312347,"sem":8.179572764076615e-9,"variance":5.486243669431566e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.025ms
new Array(length)|10|0.006ms
array.push|100|0.061ms
new Array(length)|100|0.015ms
array.push|1,000|0.084ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.644ms
new Array(length)|10,000|0.594ms
array.push|1,000,000|40.728ms
new Array(length)|1,000,000|7.997ms
array.push|100,000,000|1,990.905ms
new Array(length)|100,000,000|5,494.342ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.056ms
new Array(length)|100|0.011ms
array.push|1,000|0.046ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.372ms
new Array(length)|10,000|0.261ms
array.push|1,000,000|32.965ms
new Array(length)|1,000,000|5.606ms
array.push|100,000,000|3,201.022ms
new Array(length)|100,000,000|5,411.836ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|324|75|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","hz":323.934106965316,"cycles":2,"stats":{"deviation":0.00026759375465345474,"mean":0.003087047576953887,"moe":0.000060562167902792825,"rme":1.961815177547472,"sem":0.00003089906525652695,"variance":7.160641752953332e-8}},{"name":"Array.from","hz":16.22187098905714,"cycles":1,"stats":{"deviation":0.0007044335011936811,"mean":0.06164517031818181,"moe":0.00020814679826831788,"rme":0.33765305082939556,"sem":0.00010619734605526422,"variance":4.96226557603988e-7}}]}-->
